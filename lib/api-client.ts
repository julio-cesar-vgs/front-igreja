/**
 * Cliente HTTP resiliente para o frontend Web (Igreja Ipiranga).
 *
 * Funcionalidades incorporadas para redes lentas/instáveis e multiusuário:
 * - Timeout explícito via {@link AbortController} (padrão 15s) evitando requisições penduradas;
 * - Deduplicação de chamadas {@code GET} simultâneas para a mesma URL;
 * - Injeção automática de {@code Idempotency-Key} (UUID v4) em escritas ({@code POST/PUT/PATCH/DELETE});
 * - Retry com backoff exponencial + jitter em falhas transitórias ({@code 502/503/504} ou erro de rede).
 */

export interface ApiRequestOptions extends Omit<RequestInit, 'headers'> {
  headers?: Record<string, string>
  /** Timeout em ms antes de abortar a chamada via AbortController. Padrão: 15000ms. */
  timeoutMs?: number
  /** Número máximo de retentativas em erros transitórios (502/503/504/rede). Padrão: 2. */
  maxRetries?: number
  /** Chave idempotente explícita (útil ao reenviar item da fila offline). */
  idempotencyKey?: string
}

export class ApiError extends Error {
  constructor(
    public readonly status: number,
    message: string,
    public readonly payload?: unknown,
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

const WRITE_METHODS = new Set(['POST', 'PUT', 'PATCH', 'DELETE'])
const RETRYABLE_STATUS = new Set([502, 503, 504])
const inFlightGets = new Map<string, Promise<unknown>>()

/** Gera UUID v4 compatível com browsers modernos e ambiente de teste Node/jsdom. */
export function generateIdempotencyKey(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }
  return `idem-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`
}

/** Calcula atraso de backoff exponencial com jitter para evitar sobrecarga simultânea no servidor. */
export function computeBackoffDelayMs(attempt: number, randomFactor = Math.random()): number {
  const base = 400 * Math.pow(2, Math.max(0, attempt))
  const capped = Math.min(8000, base)
  return Math.round(capped * (0.5 + 0.5 * Math.min(1, Math.max(0, randomFactor))))
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Executa uma chamada HTTP contra o BFF {@code /api/proxy/...} (ou URL explícita) com resiliência.
 */
export async function apiRequest<T>(url: string, options: ApiRequestOptions = {}): Promise<T> {
  const method = (options.method || 'GET').toUpperCase()
  const timeoutMs = options.timeoutMs ?? 15_000
  const maxRetries = options.maxRetries ?? 2

  // Deduplica requisições GET em voo apenas quando não há signal externo customizado.
  if (method === 'GET' && !options.signal && inFlightGets.has(url)) {
    return inFlightGets.get(url) as Promise<T>
  }

  const idemKey = WRITE_METHODS.has(method)
    ? options.idempotencyKey ?? generateIdempotencyKey()
    : undefined

  const exec = async (): Promise<T> => {
    let lastError: unknown

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      const controller = new AbortController()
      const timer = setTimeout(() => controller.abort(new Error('Request timeout')), timeoutMs)
      const externalSignal = options.signal
      const onExternalAbort = () => controller.abort(externalSignal?.reason)

      if (externalSignal) {
        if (externalSignal.aborted) {
          clearTimeout(timer)
          throw externalSignal.reason instanceof Error ? externalSignal.reason : new Error('Aborted')
        }
        externalSignal.addEventListener('abort', onExternalAbort, { once: true })
      }

      try {
        const headers: Record<string, string> = {
          Accept: 'application/json',
          ...(options.body ? { 'Content-Type': 'application/json' } : {}),
          ...(idemKey ? { 'Idempotency-Key': idemKey } : {}),
          ...(options.headers || {}),
        }

        const response = await fetch(url, {
          ...options,
          method,
          headers,
          signal: controller.signal,
          credentials: 'same-origin',
        })

        clearTimeout(timer)
        externalSignal?.removeEventListener('abort', onExternalAbort)

        if (response.ok) {
          if (response.status === 204) return undefined as T
          return (await response.json()) as T
        }

        const canRetryStatus = RETRYABLE_STATUS.has(response.status) && (method === 'GET' || Boolean(idemKey))
        if (canRetryStatus && attempt < maxRetries) {
          await sleep(computeBackoffDelayMs(attempt))
          continue
        }

        const errPayload = await response.json().catch(() => null)
        throw new ApiError(
          response.status,
          (errPayload && typeof errPayload === 'object' && 'message' in errPayload
            ? String((errPayload as { message: unknown }).message)
            : `Erro HTTP ${response.status}`),
          errPayload,
        )
      } catch (err) {
        clearTimeout(timer)
        externalSignal?.removeEventListener('abort', onExternalAbort)
        lastError = err

        if (externalSignal?.aborted || err instanceof ApiError) {
          throw err
        }
        if (attempt < maxRetries && (method === 'GET' || Boolean(idemKey))) {
          await sleep(computeBackoffDelayMs(attempt))
          continue
        }
        throw err
      }
    }

    throw lastError instanceof Error ? lastError : new Error('Falha na requisição')
  }

  if (method === 'GET' && !options.signal) {
    const pending = exec().finally(() => inFlightGets.delete(url))
    inFlightGets.set(url, pending)
    return pending
  }

  return exec()
}
