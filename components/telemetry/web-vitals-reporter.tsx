'use client'

import { useEffect } from 'react'
import { useReportWebVitals } from 'next/web-vitals'

export interface WebVitalMetricPayload {
  name: string
  value: number
  rating?: 'good' | 'needs-improvement' | 'poor'
  id: string
}

/**
 * Classifica ou despacha métricas Core Web Vitals (LCP, INP, CLS, FCP, TTFB)
 * e registra o Service Worker PWA para suporte offline em produção.
 */
export function buildVitalPayload(metric: {
  name: string
  value: number
  rating?: 'good' | 'needs-improvement' | 'poor'
  id: string
}): WebVitalMetricPayload {
  return {
    id: metric.id,
    name: metric.name,
    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    rating: metric.rating,
  }
}

export function WebVitalsReporter() {
  useReportWebVitals((metric) => {
    const payload = buildVitalPayload(metric)
    if (process.env.NODE_ENV !== 'production') {
      // Em dev facilita acompanhamento direto durante validação de performance
      console.debug('[WebVitals]', payload)
      return
    }
    if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
      const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' })
      navigator.sendBeacon('/api/vitals', blob)
    }
  })

  useEffect(() => {
    if (
      process.env.NODE_ENV === 'production' &&
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator
    ) {
      navigator.serviceWorker.register('/sw.js').catch(() => null)
    }
  }, [])

  return null
}
