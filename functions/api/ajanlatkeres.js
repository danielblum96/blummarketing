const WEBHOOK_URL = 'https://crm.reasonwhy.hu/szamlak/lead_webhook.php'
const API_KEY     = 'blum_lead_2024_xK9mP3nQ'

export async function onRequestPost({ request }) {
  // CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  }

  let body
  try {
    body = await request.json()
  } catch {
    return new Response(JSON.stringify({ error: 'Érvénytelen kérés' }), { status: 400, headers })
  }

  const { name, email, phone, service, message } = body || {}
  if (!name?.trim() || !email?.trim()) {
    return new Response(JSON.stringify({ error: 'Név és email kötelező' }), { status: 400, headers })
  }

  try {
    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Api-Key': API_KEY },
      body: JSON.stringify({ name, email, phone, service, message }),
    })
    const data = await res.json()
    if (!data.ok) throw new Error(data.error || 'CRM hiba')
    return new Response(JSON.stringify({ ok: true }), { status: 200, headers })
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Szerver hiba, kérjük próbáld újra.' }), { status: 500, headers })
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
