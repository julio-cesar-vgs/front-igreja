import { NextRequest, NextResponse } from 'next/server'

const BACKEND_URL = process.env.BACKEND_API_URL || 'http://localhost:8080'

/**
 * Allowlist estrita de prefixos da API expostos pelo BFF para prevenir SSRF e path traversal.
 */
const ALLOWED_PREFIXES = new Set([
  'cultos',
  'membros',
  'igrejas',
  'escala',
  'financeiro',
  'dizimos',
  'ofertas',
  'conferencias',
  'cargos',
  'lgpd',
  'sync',
])

/**
 * Valida segmentos de rota contra path traversal ({@code ..}), caracteres inválidos e allowlist.
 */
export function resolveAllowedBackendPath(segments: string[] | undefined): string | null {
  if (!segments || segments.length === 0) return null
  if (segments.some((s) => !s || s === '.' || s === '..' || s.includes('\\') || s.includes('://'))) {
    return null
  }
  const root = segments[0]
  if (root === 'auth') {
    const second = segments[1]
    if (second !== 'me' && second !== 'consent') return null
  } else if (!ALLOWED_PREFIXES.has(root)) {
    return null
  }
  return segments.map(encodeURIComponent).join('/')
}

async function handleProxy(req: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  const { path } = await context.params
  const safePath = resolveAllowedBackendPath(path)
  if (!safePath) {
    return NextResponse.json({ message: 'Rota de API não permitida pelo BFF.' }, { status: 400 })
  }

  const accessToken = req.cookies.get('igreja_access_token')?.value
  const search = req.nextUrl.search || ''
  const targetUrl = `${BACKEND_URL}/api/v1/${safePath}${search}`

  const headers: Record<string, string> = {
    Accept: 'application/json',
  }
  if (accessToken) headers.Authorization = `Bearer ${accessToken}`
  const idemKey = req.headers.get('Idempotency-Key')
  if (idemKey) headers['Idempotency-Key'] = idemKey
  const contentType = req.headers.get('Content-Type')
  if (contentType) headers['Content-Type'] = contentType

  const method = req.method.toUpperCase()
  const body = method === 'GET' || method === 'HEAD' ? undefined : await req.text()

  const upstream = await fetch(targetUrl, { method, headers, body })
  const text = await upstream.text()
  return new NextResponse(text, {
    status: upstream.status,
    headers: { 'Content-Type': upstream.headers.get('Content-Type') || 'application/json' },
  })
}

export const GET = handleProxy
export const POST = handleProxy
export const PUT = handleProxy
export const PATCH = handleProxy
export const DELETE = handleProxy
