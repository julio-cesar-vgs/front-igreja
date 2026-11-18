import type { MetadataRoute } from 'next'

/**
 * Manifesto PWA (Progressive Web App) para instalação em Android, iOS (Safari) e Desktop.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Igreja Ipiranga — Sistema de Gestão',
    short_name: 'Igreja Ipiranga',
    description: 'Gestão de cultos, membros, escala e tesouraria com suporte offline-first.',
    start_url: '/prototype',
    display: 'standalone',
    background_color: '#f7f8fb',
    theme_color: '#2563eb',
    orientation: 'portrait-primary',
    lang: 'pt-BR',
    icons: [
      {
        src: '/icon-light-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
