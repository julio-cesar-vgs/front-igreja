import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { apiRequest, ApiError, computeBackoffDelayMs } from './api-client'

describe('apiRequest & resiliência de rede', () => {
  const originalFetch = global.fetch

  beforeEach(() => {
    vi.restoreAllMocks()
  })

  afterEach(() => {
    global.fetch = originalFetch
  })

  it('deduplica chamadas GET simultâneas para a mesma URL', async () => {
    let resolveFetch!: (res: Response) => void
    const fetchMock = vi.fn().mockImplementation(
      () => new Promise<Response>((resolve) => { resolveFetch = resolve }),
    )
    global.fetch = fetchMock as unknown as typeof fetch

    const p1 = apiRequest<{ ok: boolean }>('/api/proxy/cultos/resumo')
    const p2 = apiRequest<{ ok: boolean }>('/api/proxy/cultos/resumo')

    expect(fetchMock).toHaveBeenCalledTimes(1)
    resolveFetch(new Response(JSON.stringify({ ok: true }), { status: 200 }))

    const [r1, r2] = await Promise.all([p1, p2])
    expect(r1.ok).toBe(true)
    expect(r2.ok).toBe(true)
  })

  it('injeta Idempotency-Key automaticamente em escrita POST e retenta 503 preservando a chave', async () => {
    const sentKeys: string[] = []
    let count = 0
    const fetchMock = vi.fn().mockImplementation((_url: string, init?: RequestInit) => {
      const headers = init?.headers as Record<string, string>
      sentKeys.push(headers['Idempotency-Key'])
      count++
      if (count === 1) {
        return Promise.resolve(new Response(JSON.stringify({ message: 'Indisponível' }), { status: 503 }))
      }
      return Promise.resolve(new Response(JSON.stringify({ id: 'dizimo-1' }), { status: 201 }))
    })
    global.fetch = fetchMock as unknown as typeof fetch

    const res = await apiRequest<{ id: string }>('/api/proxy/cultos/1/dizimos', {
      method: 'POST',
      body: JSON.stringify({ valor: 100 }),
      maxRetries: 1,
    })

    expect(res.id).toBe('dizimo-1')
    expect(sentKeys).toHaveLength(2)
    expect(sentKeys[0]).toBeTruthy()
    expect(sentKeys[0]).toBe(sentKeys[1]) // mesma chave idempotente no retry
  })

  it('lança ApiError em HTTP 400 sem retentar', async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ message: 'Valor inválido' }), { status: 400 }),
    )
    global.fetch = fetchMock as unknown as typeof fetch

    await expect(
      apiRequest('/api/proxy/cultos/1/dizimos', { method: 'POST', body: '{}' }),
    ).rejects.toThrow(ApiError)
    expect(fetchMock).toHaveBeenCalledTimes(1)
  })

  it('computeBackoffDelayMs aplica progressão exponencial + jitter dentro dos limites', () => {
    expect(computeBackoffDelayMs(0, 0)).toBe(200)
    expect(computeBackoffDelayMs(0, 1)).toBe(400)
    expect(computeBackoffDelayMs(2, 1)).toBe(1600)
    expect(computeBackoffDelayMs(10, 1)).toBe(8000)
  })
})
