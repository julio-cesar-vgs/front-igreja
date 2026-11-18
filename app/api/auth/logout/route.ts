import { NextRequest, NextResponse } from 'next/server'

const BACKEND_URL = process.env.BACKEND_API_URL || 'http://localhost:8080'

/**
 * Route Handler BFF de logout: revoga os tokens no backend (Redis blacklist) e limpa cookies HttpOnly.
 */
export async function POST(req: NextRequest) {
  const accessToken = req.cookies.get('igreja_access_token')?.value
  const refreshToken = req.cookies.get('igreja_refresh_token')?.value

  if (accessToken) {
    await fetch(`${BACKEND_URL}/api/v1/auth/logout`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(refreshToken ? { refreshToken } : {}),
    }).catch(() => null)
  }

  const response = NextResponse.json({ ok: true })
  response.cookies.delete('igreja_access_token')
  response.cookies.delete('igreja_refresh_token')
  return response
}
