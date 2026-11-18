import { apiRequest } from './api-client'
import { enqueueOfflineOperation } from './offline-queue'

export interface CultoResumoItem {
  id: string
  tema: string | null
  dataHora: string
  status: string
  totalPessoas: number | null
  totalDizimos: number | null
  totalOfertas: number | null
  totalGeral: number | null
  conferido: boolean
}

export interface PageDto<T> {
  content: T[]
  totalElements: number
  totalPages: number
  last: boolean
}

/**
 * Serviço de domínio Web conectado ao BFF `/api/proxy/...` com suporte offline-first:
 * - Leituras utilizam `GET /api/proxy/cultos/resumo` (sem N+1).
 * - Mutações tentam envio imediato e, caso offline/erro de rede, enfileiram no IndexedDB.
 */
export const churchWebApi = {
  listarCultosResumo: (page = 0, size = 20) =>
    apiRequest<PageDto<CultoResumoItem>>(`/api/proxy/cultos/resumo?page=${page}&size=${size}`),

  registrarDizimo: async (cultoId: string, payload: Record<string, unknown>) => {
    const url = `/api/proxy/cultos/${encodeURIComponent(cultoId)}/dizimos`
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      await enqueueOfflineOperation({
        url,
        method: 'POST',
        body: payload,
        description: `Registrar dízimo no culto ${cultoId}`,
      })
      return { queued: true as const }
    }
    const data = await apiRequest(url, { method: 'POST', body: JSON.stringify(payload) })
    return { queued: false as const, data }
  },
}
