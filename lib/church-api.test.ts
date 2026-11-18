import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { churchWebApi } from './church-api'
import { _resetOfflineQueueForTests, listPendingOperations } from './offline-queue'

describe('churchWebApi — BFF + fallback offline', () => {
  const originalFetch = global.fetch

  beforeEach(() => {
    _resetOfflineQueueForTests()
    Object.defineProperty(window.navigator, 'onLine', { configurable: true, value: true })
  })

  afterEach(() => {
    global.fetch = originalFetch
    Object.defineProperty(window.navigator, 'onLine', { configurable: true, value: true })
  })

  it('busca resumo de cultos paginado sem N+1', async () => {
    global.fetch = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ content: [{ id: 'c1', tema: 'Culto', conferido: true }], totalElements: 1, totalPages: 1, last: true }), { status: 200 }),
    ) as unknown as typeof fetch

    const page = await churchWebApi.listarCultosResumo(0, 20)
    expect(page.content[0].id).toBe('c1')
    expect(global.fetch).toHaveBeenCalledWith('/api/proxy/cultos/resumo?page=0&size=20', expect.anything())
  })

  it('enfileira lançamento de dízimo localmente quando navegador está offline', async () => {
    Object.defineProperty(window.navigator, 'onLine', { configurable: true, value: false })
    const res = await churchWebApi.registrarDizimo('culto-9', { valor: 150 })
    expect(res.queued).toBe(true)
    expect(await listPendingOperations()).toHaveLength(1)
  })
})
