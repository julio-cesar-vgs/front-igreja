import { describe, it, expect, vi } from 'vitest'
import { buildVitalPayload } from './web-vitals-reporter'

vi.mock('next/web-vitals', () => ({
  useReportWebVitals: vi.fn(),
}))

describe('WebVitalsReporter payload helper', () => {
  it('normaliza escala de CLS (x1000) e arredonda métricas temporais (LCP/INP)', () => {
    expect(buildVitalPayload({ id: '1', name: 'LCP', value: 1842.7, rating: 'good' })).toEqual({
      id: '1',
      name: 'LCP',
      value: 1843,
      rating: 'good',
    })
    expect(buildVitalPayload({ id: '2', name: 'CLS', value: 0.045, rating: 'good' })).toEqual({
      id: '2',
      name: 'CLS',
      value: 45,
      rating: 'good',
    })
  })
})
