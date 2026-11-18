/**
 * Configuração do Next.js para o frontend Igreja Ipiranga.
 * - Habilita otimização de imagens em formatos modernos (AVIF e WebP) para economizar banda em redes 3G/4G.
 * - Define cabeçalhos de segurança no navegador (X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy).
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 640, 768, 1024, 1280],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self)' },
        ],
      },
    ]
  },
}

export default nextConfig
