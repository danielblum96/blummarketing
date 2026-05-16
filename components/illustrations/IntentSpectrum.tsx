export default function IntentSpectrum() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
      {/* Labels row */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-xs font-black uppercase tracking-widest text-neutral-300">Hideg közönség</p>
          <p className="text-[11px] text-neutral-300 mt-1">Social, Display, YouTube</p>
        </div>
        <div className="text-right">
          <p className="text-xs font-black uppercase tracking-widest text-blue-400">Aktív keresők</p>
          <p className="text-[11px] text-blue-400/60 mt-1">Google Search Ads</p>
        </div>
      </div>

      {/* Gradient bar */}
      <div className="relative h-8 rounded-full overflow-hidden bg-gradient-to-r from-neutral-800 via-blue-500/30 to-blue-500/70">
        {/* Search intent marker */}
        <div className="absolute right-[12%] top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-blue-400 shadow-[0_0_16px_rgba(96,165,250,0.5)] flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <circle cx="5" cy="5" r="3" stroke="white" strokeWidth="1.5"/>
            <path d="M7.5 7.5l2 2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Bottom labels */}
      <div className="flex justify-between items-center mt-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-neutral-600" />
          <span className="text-[11px] text-neutral-300">Érdeklődés még nem látható</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-blue-400">Vásárlási szándék már megvan</span>
          <span className="h-2 w-2 rounded-full bg-blue-400" />
        </div>
      </div>

      {/* Explanation */}
      <p className="mt-5 text-xs text-neutral-300 leading-relaxed border-t border-white/[0.06] pt-4">
        A Google Search Ads ereje abban van, hogy nem te döntöd el, kinek jelenik meg — a felhasználó maga keresi a megoldást.
        Ez az egyik legmagasabb vásárlási szándékot jelző csatorna.
      </p>
    </div>
  );
}
