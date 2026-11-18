import { apiRequest, generateIdempotencyKey } from './api-client'

/**
 * Operação de escrita enfileirada quando o navegador está offline ou instável.
 */
export interface WebOfflineOperation {
  id: string
  url: string
  method: 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  body?: unknown
  description: string
  createdAt: number
  status: 'PENDENTE' | 'ERRO' | 'CONFLITO'
  retryCount: number
  lastError?: string
}

const DB_NAME = 'igreja_ipiranga_offline'
const STORE_NAME = 'pending_ops'
const DB_VERSION = 1

/** Fallback seguro em memória para SSR ou ambientes jsdom sem IndexedDB nativo. */
let memoryFallback: WebOfflineOperation[] = []

function hasIndexedDb(): boolean {
  return typeof indexedDB !== 'undefined'
}

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION)
    req.onupgradeneeded = () => {
      const db = req.result
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' })
      }
    }
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
}

/**
 * Enfileira uma operação de escrita de forma persistente (IndexedDB quando disponível).
 * Reutiliza `id` como {@code Idempotency-Key} no reenvio.
 */
export async function enqueueOfflineOperation(
  input: Omit<WebOfflineOperation, 'id' | 'createdAt' | 'status' | 'retryCount'>,
): Promise<WebOfflineOperation> {
  const op: WebOfflineOperation = {
    ...input,
    id: generateIdempotencyKey(),
    createdAt: Date.now(),
    status: 'PENDENTE',
    retryCount: 0,
  }

  if (!hasIndexedDb()) {
    memoryFallback.push(op)
    return op
  }

  const db = await openDb()
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite')
    tx.objectStore(STORE_NAME).put(op)
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error)
  })
  return op
}

export async function listPendingOperations(): Promise<WebOfflineOperation[]> {
  if (!hasIndexedDb()) {
    return [...memoryFallback].sort((a, b) => a.createdAt - b.createdAt)
  }
  const db = await openDb()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly')
    const req = tx.objectStore(STORE_NAME).getAll()
    req.onsuccess = () => {
      const items = (req.result as WebOfflineOperation[]).sort((a, b) => a.createdAt - b.createdAt)
      resolve(items)
    }
    req.onerror = () => reject(req.error)
  })
}

export async function removeOfflineOperation(id: string): Promise<void> {
  if (!hasIndexedDb()) {
    memoryFallback = memoryFallback.filter((item) => item.id !== id)
    return
  }
  const db = await openDb()
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite')
    tx.objectStore(STORE_NAME).delete(id)
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error)
  })
}

/** Reenvia em ordem FIFO as operações pendentes preservando {@code Idempotency-Key}. */
export async function flushOfflineQueue(): Promise<{ synced: number; failed: number }> {
  const ops = await listPendingOperations()
  let synced = 0
  let failed = 0

  for (const op of ops) {
    if (op.status !== 'PENDENTE') continue
    try {
      await apiRequest(op.url, {
        method: op.method,
        body: op.body !== undefined ? JSON.stringify(op.body) : undefined,
        idempotencyKey: op.id,
        maxRetries: 1,
      })
      await removeOfflineOperation(op.id)
      synced++
    } catch {
      failed++
    }
  }
  return { synced, failed }
}

/** Limpa apenas o fallback de memória em testes unitários. */
export function _resetOfflineQueueForTests(): void {
  memoryFallback = []
}
