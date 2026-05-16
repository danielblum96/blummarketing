interface MarketingFunnelProps {
  variant?: "meta" | "tiktok";
}

export default function MarketingFunnel({ variant = "meta" }: MarketingFunnelProps) {
  const isMeta = variant === "meta";
  const accent = isMeta
    ? { text: "text-blue-400", border: "border-blue-500/25", dot: "bg-blue-400" }
    : { text: "text-rose-400", border: "border-rose-500/25", dot: "bg-rose-400" };

  const levels = [
    {
      num: "1",
      label: "Elérés & ismertség",
      sub: "Minél több ember látja a hirdetést a célcsoportból",
      stat: "100%",
      bg: isMeta ? "bg-blue-500/[0.06]" : "bg-rose-500/[0.06]",
    },
    {
      num: "2",
      label: "Érdeklődés & forgalom",
      sub: "Kattintás, weboldal-látogatás, videómegtekintés",
      stat: "~20–40%",
      bg: isMeta ? "bg-blue-500/[0.10]" : "bg-rose-500/[0.10]",
    },
    {
      num: "3",
      label: "Konverzió",
      sub: "Lead, ajánlatkérés, vásárlás — mérhető üzleti eredmény",
      stat: "~2–15%",
      bg: isMeta ? "bg-blue-500/[0.18]" : "bg-rose-500/[0.18]",
    },
  ];

  const widths = ["w-full", "w-[82%]", "w-[62%]"];

  return (
    <div className="py-2 space-y-1.5">
      {levels.map((level, i) => (
        <div key={level.label} className="flex flex-col items-center">
          <div className={`${widths[i]} ${level.bg} border ${accent.border} rounded-2xl px-5 py-4 flex items-center gap-4`}>
            <div className={`shrink-0 h-8 w-8 rounded-xl ${accent.dot} bg-opacity-15 flex items-center justify-center`}>
              <span className={`text-xs font-black ${accent.text}`}>{level.num}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className={`text-sm font-black ${accent.text} leading-tight`}>{level.label}</p>
              <p className="text-xs text-neutral-500 mt-0.5 leading-snug">{level.sub}</p>
            </div>
            <span className={`shrink-0 text-sm font-black ${accent.text} opacity-60`}>{level.stat}</span>
          </div>
          {i < levels.length - 1 && (
            <div className="py-0.5">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 2v12M4 10l4 4 4-4" stroke={isMeta ? "#60a5fa" : "#fb7185"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
