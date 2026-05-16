interface Step {
  num: string;
  label: string;
}

interface ProcessFlowProps {
  steps: Step[];
}

export default function ProcessFlow({ steps }: ProcessFlowProps) {
  return (
    <>
      {/* Desktop: horizontal */}
      <div className="hidden sm:flex items-start justify-between gap-0 relative pb-2">
        {/* Connecting line */}
        <div
          className="absolute h-px bg-gradient-to-r from-rose-500/20 via-rose-400/40 to-rose-500/20"
          style={{ top: "19px", left: `${(1 / steps.length / 2) * 100}%`, right: `${(1 / steps.length / 2) * 100}%` }}
          aria-hidden="true"
        />
        {steps.map((step) => (
          <div key={step.num} className="relative flex flex-col items-center" style={{ width: `${100 / steps.length}%` }}>
            <div className="relative z-10 h-10 w-10 rounded-full border border-rose-400/40 bg-neutral-900 flex items-center justify-center">
              <span className="text-xs font-black text-rose-400">{step.num}</span>
            </div>
            <p className="mt-3 text-center text-[11px] font-semibold text-neutral-300 leading-snug px-1">
              {step.label}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile: vertical list */}
      <div className="sm:hidden relative space-y-2 pl-12">
        <div className="absolute left-5 top-5 bottom-5 w-px bg-white/[0.08]" aria-hidden="true" />
        {steps.map((step) => (
          <div key={step.num} className="relative flex items-center gap-3">
            <div className="absolute -left-7 z-10 h-8 w-8 rounded-full border border-rose-400/40 bg-neutral-900 flex items-center justify-center">
              <span className="text-[10px] font-black text-rose-400">{step.num}</span>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 w-full">
              <p className="text-sm font-semibold text-neutral-300">{step.label}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
