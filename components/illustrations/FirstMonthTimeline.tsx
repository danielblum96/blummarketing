const STEPS = [
  { num: "01", label: "Átnézzük a rendszert" },
  { num: "02", label: "Ellenőrizzük a mérést" },
  { num: "03", label: "Kijavítjuk a hibákat" },
  { num: "04", label: "Elindítjuk a teszteket" },
  { num: "05", label: "Következő lépések" },
];

export default function FirstMonthTimeline() {
  return (
    <div className="relative flex justify-between items-start pt-2 pb-4">
      {/* Connecting gradient line */}
      <div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-rose-500/20 via-rose-400/50 to-rose-500/20"
        style={{ top: "19px" }}
        aria-hidden="true"
      />

      {STEPS.map((step, i) => (
        <div key={step.num} className="relative flex flex-col items-center" style={{ width: `${100 / STEPS.length}%` }}>
          {/* Circle */}
          <div className="relative z-10 h-10 w-10 rounded-full border-2 border-rose-400/60 bg-neutral-950 flex items-center justify-center shadow-[0_0_16px_rgba(251,113,133,0.15)]">
            <span className="text-xs font-black text-rose-400">{step.num}</span>
          </div>
          {/* Label */}
          <p className="mt-3 text-center text-[11px] font-semibold text-neutral-500 leading-snug px-1">
            {step.label}
          </p>
        </div>
      ))}
    </div>
  );
}
