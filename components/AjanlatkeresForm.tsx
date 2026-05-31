'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'

const SERVICES = [
  'Meta hirdetéskezelés',
  'Google hirdetéskezelés',
  'TikTok hirdetéskezelés',
  'Havi videós tartalom + hirdetéskezelés',
  'Weboldal készítés',
  'Kampányaudit',
  'Egyéb / Nem tudom még',
]

export default function AjanlatkeresForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim()) return
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/ajanlatkeres/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.ok) {
        setStatus('success')
      } else {
        setErrorMsg(data.error || 'Hiba történt.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Hálózati hiba. Kérjük próbáld újra.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
        <CheckCircle2 className="h-14 w-14 text-emerald-500" />
        <h3 className="text-xl font-black text-neutral-950">Megkaptuk az üzeneted!</h3>
        <p className="max-w-xs text-neutral-600">
          1–2 munkanapon belül felvesszük veled a kapcsolatot.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
            Neved <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            value={form.name}
            onChange={e => set('name', e.target.value)}
            required
            placeholder="Kovács Anna"
            className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
            Email <span className="text-rose-500">*</span>
          </label>
          <input
            type="email"
            value={form.email}
            onChange={e => set('email', e.target.value)}
            required
            placeholder="anna@ceg.hu"
            className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
            Telefonszám
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={e => set('phone', e.target.value)}
            placeholder="+36 30 123 4567"
            className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
            Miben segíthetünk?
          </label>
          <select
            value={form.service}
            onChange={e => set('service', e.target.value)}
            className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10"
          >
            <option value="">Válassz...</option>
            {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
          Rövid bemutatkozás / kérdés
        </label>
        <textarea
          value={form.message}
          onChange={e => set('message', e.target.value)}
          rows={3}
          placeholder="Pl. webshopot vezetek, Meta hirdetéseket futtatunk de nem hoznak elegendő vásárlást..."
          className="w-full resize-none rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10"
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-rose-600">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-7 py-4 font-bold text-white transition hover:bg-neutral-800 disabled:opacity-60"
      >
        {status === 'loading' ? (
          <><Loader2 className="h-5 w-5 animate-spin" /> Küldés...</>
        ) : (
          <>Ajánlatot kérek <ArrowRight className="h-5 w-5" /></>
        )}
      </button>
    </form>
  )
}
