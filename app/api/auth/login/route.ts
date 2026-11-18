import { NextRequest, NextResponse } from 'next/server'

const BACKEND_URL = process.env.BACKEND_API_URL || 'http://localhost:8080'

/**
 * Route Handler BFF de login.
 * Recebe credenciais, autentica no backend Spring Boot e grava os tokens JWT em cookies
 * {@code HttpOnly; SameSite=Lax; Secure (prod)}, mantendo o JWT inacessível ao JavaScript do browser (anti-XSS).
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    if (!body?.email || !body?.senha) {
      return NextResponse.json({ message: 'E-mail e senha são obrigatórios.' }, { status: 400 })
    }

    const upstream = await fetch(`${BACKEND_URL}/api/v1/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: body.email, senha: body.senha }),
    })

    const data = await upstream.json().catch(() => ({}))
    if (!upstream.ok || !data?.token) {
      return NextResponse.json(
        { message: data?.message || 'Credenciais inválidas.' },
        { status: upstream.status || 401 },
      )
    }

    const response = NextResponse.json({ authenticated: true, expiresIn: data.expiresIn ?? 900 })
    const isProd = process.env.NODE_ENV === 'production'

    response.cookies.set('igreja_access_token', data.token, {
      httpOnly: true,
      secure: isProd,
      sameSite: 'lax',
      path: '/',
      maxAge: Number(data.expiresIn) > 0 ? Number(data.expiresIn) : 900,
    })

    if (data.refreshToken) {
      response.cookies.set('igreja_refresh_token', data.refreshToken, {
        httpOnly: true,
        secure: isProd,
        sameSite: 'lax',
        path: '/',
        maxAge: 7 * 24 * 60 * 60,
      })
    }

    return response
  } catch {
    return NextResponse.json({ message: 'Erro ao conectar com servidor de autenticação.' }, { status: 502 })
  }
}
