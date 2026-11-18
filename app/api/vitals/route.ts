import { NextRequest, NextResponse } from 'next/server'

/**
 * Endpoint leve de ingestão de Core Web Vitals (RUM) enviados via `navigator.sendBeacon`.
 */
export async function POST(req: NextRequest) {
  const payload = await req.json().catch(() => null)
  if (!payload || typeof payload.name !== 'string') {
    return NextResponse.json({ message: 'Payload inválido' }, { status: 400 })
  }
  if (process.env.NODE_ENV !== 'test') {
    console.info('[RUM WebVitals]', JSON.stringify({
      name: payload.name,
      value: payload.value,
      rating: payload.rating,
    }))
  }
  return NextResponse.json({ accepted: true }, { status: 202 })
}
