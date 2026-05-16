const beforeItems = [
  "Honnan jönnek valójában az ügyfelek?",
  "Melyik kampány hoz leadet?",
  "Mennyibe kerül egy ajánlatkérés?",
  "Mi konvertál és mi égeti a büdzsét?",
];

const afterItems = [
  { label: "Lead ára", value: "1 840 Ft", up: true },
  { label: "ROAS", value: "4.1×", up: true },
  { label: "CTR", value: "5.2%", up: true },
  { label: "Konverziók", value: "+34%", up: true },
];

export default function AuditBeforeAfter() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_48px_1fr] sm:items-center">
      {/* Before */}
      <div className="rounded-2xl border border-rose-500/20 bg-rose-500/[0.06] p-5">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-rose-400 mb-4">Előtte</p>
        <div className="space-y-3">
          {beforeItems.map((q) => (
            <div key={q} className="flex items-start gap-2.5">
              <span className="mt-0.5 shrink-0 h-5 w-5 rounded-full bg-rose-500/15 flex items-center justify-center">
                <span className="text-[11px] font-black text-rose-400">?</span>
              </span>
              <span className="text-xs leading-snug text-neutral-500">{q}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Arrow */}
      <div className="flex justify-center">
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-[9px] font-black uppercase tracking-widest text-neutral-600">Audit</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 10h12M10 4l6 6-6 6" className="sm:hidden" stroke="#525252" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 10h12M10 4l6 6-6 6" stroke="#525252" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* After */}
      <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.06] p-5">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400 mb-4">Utána</p>
        <div className="space-y-3">
          {afterItems.map((m) => (
            <div key={m.label} className="flex items-center justify-between gap-3">
              <span className="text-xs text-neutral-500">{m.label}</span>
              <div className="flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M6 10V2M2 6l4-4 4 4" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm font-black text-emerald-400">{m.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
