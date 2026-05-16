const STEPS = [
  {
    label: "Látogató",
    sub: "böngésző",
    color: { text: "text-rose-400", border: "border-rose-500/30", bg: "bg-rose-500/[0.08]", dot: "bg-rose-400" },
  },
  {
    label: "Weboldal",
    sub: "kód, események",
    color: { text: "text-blue-400", border: "border-blue-500/30", bg: "bg-blue-500/[0.08]", dot: "bg-blue-400" },
  },
  {
    label: "Pixel / GA4",
    sub: "GTM, mérőkód",
    color: { text: "text-emerald-400", border: "border-emerald-500/30", bg: "bg-emerald-500/[0.08]", dot: "bg-emerald-400" },
  },
  {
    label: "Platform",
    sub: "Meta, Google, TikTok",
    color: { text: "text-amber-400", border: "border-amber-500/30", bg: "bg-amber-500/[0.08]", dot: "bg-amber-400" },
  },
  {
    label: "Riport",
    sub: "döntés, optimalizálás",
    color: { text: "text-violet-400", border: "border-violet-500/30", bg: "bg-violet-500/[0.08]", dot: "bg-violet-400" },
  },
];

export default function DataFlowDiagram() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-0">
      {STEPS.map((step, i) => (
        <div key={step.label} className="flex sm:flex-1 sm:flex-col sm:items-center">
          {/* Card */}
          <div className={`flex-1 sm:w-full border ${step.color.border} ${step.color.bg} rounded-2xl px-4 py-3.5 flex sm:flex-col sm:items-center sm:text-center gap-3 sm:gap-2`}>
            <span className={`shrink-0 h-2.5 w-2.5 rounded-full mt-1.5 sm:mt-0 ${step.color.dot}`} />
            <div>
              <p className={`text-sm font-black ${step.color.text} leading-tight`}>{step.label}</p>
              <p className="text-xs text-neutral-300 mt-0.5">{step.sub}</p>
            </div>
          </div>

          {/* Arrow */}
          {i < STEPS.length - 1 && (
            <div className="flex items-center justify-center w-8 shrink-0 sm:w-full sm:h-8 sm:py-1">
              {/* Mobile: right arrow */}
              <svg className="sm:hidden h-4 w-4 text-neutral-300" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {/* Desktop: down arrow */}
              <svg className="hidden sm:block h-4 w-4 text-neutral-300" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
