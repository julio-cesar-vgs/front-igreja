/* ============================================================================
   Service Worker — Igreja Ipiranga PWA (Offline-First)
   - Cacheia shell básico e ativos estáticos (_next/static, ícones, fontes).
   - Nunca cacheia endpoints sensíveis de autenticação (/api/auth) ou mutações.
   - Em navegação offline, entrega a última cópia válida do shell em cache.
   ============================================================================ */

const CACHE_NAME = 'igreja-ipiranga-v1'
const APP_SHELL = ['/', '/prototype', '/icon.svg', '/apple-icon.png']

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)).catch(() => null),
  )
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))),
    ),
  )
  self.clients.claim()
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET') return

  const url = new URL(request.url)
  // Segurança/LGPD: nunca cachear rotas de autenticação, BFF ou proxy com dados financeiros/PII
  if (url.pathname.startsWith('/api/')) return

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone()
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy)).catch(() => null)
          return response
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match('/prototype'))),
    )
    return
  }

  // Stale-while-revalidate para assets estáticos
  event.respondWith(
    caches.match(request).then((cached) => {
      const networkFetch = fetch(request)
        .then((response) => {
          if (response && response.ok && url.origin === self.location.origin) {
            const copy = response.clone()
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy)).catch(() => null)
          }
          return response
        })
        .catch(() => cached)
      return cached || networkFetch
    }),
  )
})
