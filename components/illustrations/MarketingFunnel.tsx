interface MarketingFunnelProps {
  variant?: "meta" | "tiktok";
}

export default function MarketingFunnel({ variant = "meta" }: MarketingFunnelProps) {
  const isMeta = variant === "meta";

  const levels = [
    {
      label: "Elérés & ismertség",
      sub: "Minél több ember látja a hirdetést a célcsoportból",
      badge: "Hideg közönség",
      pct: "100%",
      maxW: "100%",
      bg: isMeta ? "rgba(96,165,250,0.07)" : "rgba(251,113,133,0.07)",
      border: isMeta ? "rgba(96,165,250,0.25)" : "rgba(251,113,133,0.25)",
      text: isMeta ? "#60a5fa" : "#fb7185",
      badgeBg: isMeta ? "rgba(96,165,250,0.12)" : "rgba(251,113,133,0.12)",
    },
    {
      label: "Érdeklődés & forgalom",
      sub: "Kattintás, weboldal-látogatás, videómegtekintés",
      badge: "Meleg közönség",
      pct: "20–40%",
      maxW: "82%",
      bg: isMeta ? "rgba(96,165,250,0.11)" : "rgba(251,113,133,0.11)",
      border: isMeta ? "rgba(96,165,250,0.32)" : "rgba(251,113,133,0.32)",
      text: isMeta ? "#60a5fa" : "#fb7185",
      badgeBg: isMeta ? "rgba(96,165,250,0.15)" : "rgba(251,113,133,0.15)",
    },
    {
      label: "Konverzió",
      sub: "Lead, ajánlatkérés, vásárlás — mérhető üzleti eredmény",
      badge: "Vásárlási szándék",
      pct: "2–15%",
      maxW: "62%",
      bg: isMeta ? "rgba(96,165,250,0.18)" : "rgba(251,113,133,0.18)",
      border: isMeta ? "rgba(96,165,250,0.45)" : "rgba(251,113,133,0.45)",
      text: isMeta ? "#93c5fd" : "#fda4af",
      badgeBg: isMeta ? "rgba(96,165,250,0.20)" : "rgba(251,113,133,0.20)",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-1.5 py-2">
      {levels.map((level, i) => (
        <div key={level.label} className="flex flex-col items-center w-full gap-1.5">
          <div
            className="rounded-2xl px-6 py-4 text-center"
            style={{
              width: level.maxW,
              background: level.bg,
              border: `1px solid ${level.border}`,
            }}
          >
            {/* Top row: badge + percentage */}
            <div className="flex items-center justify-between mb-2">
              <span
                className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full"
                style={{ background: level.badgeBg, color: level.text }}
              >
                {level.badge}
              </span>
              <span
                className="text-xs font-black"
                style={{ color: level.text }}
              >
                {level.pct}
              </span>
            </div>
            {/* Label */}
            <p className="text-sm font-black text-white text-left leading-tight">{level.label}</p>
            {/* Sub */}
            <p className="text-xs text-neutral-500 mt-1 text-left leading-snug">{level.sub}</p>
          </div>

          {/* Arrow */}
          {i < levels.length - 1 && (
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" aria-hidden="true">
              <path
                d="M8 0v10M3 7l5 5 5-5"
                stroke={isMeta ? "#60a5fa" : "#fb7185"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.5"
              />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}
