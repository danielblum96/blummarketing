import { NextRequest, NextResponse } from 'next/server'

const WEBHOOK_URL = 'https://crm.reasonwhy.hu/szamlak/lead_webhook.php'
const API_KEY     = 'blum_lead_2024_xK9mP3nQ'

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  if (!body) return NextResponse.json({ error: 'Érvénytelen kérés' }, { status: 400 })

  const { name, email, phone, service, message } = body
  if (!name?.trim() || !email?.trim()) {
    return NextResponse.json({ error: 'Név és email kötelező' }, { status: 400 })
  }

  try {
    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Api-Key': API_KEY },
      body: JSON.stringify({ name, email, phone, service, message }),
    })
    const data = await res.json()
    if (!data.ok) throw new Error(data.error || 'CRM hiba')
    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('CRM webhook hiba:', e)
    return NextResponse.json({ error: 'Szerver hiba, kérjük próbáld újra.' }, { status: 500 })
  }
}
