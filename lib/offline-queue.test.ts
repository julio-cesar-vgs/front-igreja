import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import {
  enqueueOfflineOperation,
  listPendingOperations,
  flushOfflineQueue,
  _resetOfflineQueueForTests,
} from './offline-queue'

describe('offline-queue Web (FIFO + Idempotency-Key)', () => {
  const originalFetch = global.fetch

  beforeEach(() => {
    _resetOfflineQueueForTests()
  })

  afterEach(() => {
    global.fetch = originalFetch
  })

  it('enfileira operações offline e sincroniza em ordem FIFO usando id como Idempotency-Key', async () => {
    const op1 = await enqueueOfflineOperation({
      url: '/api/proxy/cultos/1/dizimos',
      method: 'POST',
      body: { valor: 100 },
      description: 'Dízimo 1',
    })
    const op2 = await enqueueOfflineOperation({
      url: '/api/proxy/cultos/1/ofertas',
      method: 'POST',
      body: { valor: 50 },
      description: 'Oferta 1',
    })

    expect(await listPendingOperations()).toHaveLength(2)

    const sentKeys: string[] = []
    global.fetch = vi.fn().mockImplementation((_url: string, init?: RequestInit) => {
      const headers = init?.headers as Record<string, string>
      sentKeys.push(headers['Idempotency-Key'])
      return Promise.resolve(new Response(JSON.stringify({ ok: true }), { status: 201 }))
    }) as unknown as typeof fetch

    const result = await flushOfflineQueue()
    expect(result).toEqual({ synced: 2, failed: 0 })
    expect(sentKeys).toEqual([op1.id, op2.id])
    expect(await listPendingOperations()).toHaveLength(0)
  })
})
