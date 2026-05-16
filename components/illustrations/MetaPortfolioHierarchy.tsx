// MetaPortfolioHierarchy.tsx
// Üzleti portfólió → Hirdetési fiók → Kampány → Hirdetéssorozat → Hirdetés
// Vertical tree with connecting lines

const LEVELS = [
  { label: "Üzleti portfólió",   sublabel: "tulajdonosi szint",        color: "#60a5fa", depth: 0 },
  { label: "Hirdetési fiók",     sublabel: "kampányok, adatok, pixel", color: "#a78bfa", depth: 1 },
  { label: "Kampány",            sublabel: "cél: elérés, lead, sales", color: "#fb7185", depth: 2 },
  { label: "Hirdetéssorozat",    sublabel: "célközönség, elhelyezés",  color: "#fbbf24", depth: 3 },
  { label: "Hirdetés",           sublabel: "kép, videó, szöveg, CTA",  color: "#34d399", depth: 4 },
];

export default function MetaPortfolioHierarchy() {
  const boxH = 46;
  const boxW = 240;
  const indent = 28;
  const rowGap = 20;
  const totalH = LEVELS.length * (boxH + rowGap) - rowGap;
  const viewH = totalH + 20;

  return (
    <svg
      viewBox={`0 0 480 ${viewH}`}
      width="100%"
      aria-label="Meta portfólió hierarchia: Üzleti portfólió, Hirdetési fiók, Kampány, Hirdetéssorozat, Hirdetés"
      role="img"
    >
      {LEVELS.map((level, i) => {
        const x = 10 + level.depth * indent;
        const y = 10 + i * (boxH + rowGap);
        const midY = y + boxH / 2;

        // Draw vertical connector from previous item if depth >= prev depth (i.e. child)
        const prev = LEVELS[i - 1];
        const lineX = x + 10;
        const prevY = y - rowGap;

        return (
          <g key={level.label}>
            {/* Connector from parent */}
            {i > 0 && (
              <path
                d={`M ${lineX} ${prevY} L ${lineX} ${y}`}
                stroke="#525252"
                strokeWidth="1.5"
                strokeDasharray="3 3"
                fill="none"
              />
            )}

            {/* Box */}
            <rect
              x={x}
              y={y}
              width={boxW}
              height={boxH}
              rx="10"
              fill="rgba(255,255,255,0.04)"
              stroke={level.color}
              strokeWidth="1.5"
            />

            {/* Label */}
            <text
              x={x + 14}
              y={y + 18}
              fill={level.color}
              fontSize="13"
              fontWeight="800"
              fontFamily="sans-serif"
            >
              {level.label}
            </text>

            {/* Sublabel */}
            <text
              x={x + 14}
              y={y + 33}
              fill="#a3a3a3"
              fontSize="10"
              fontFamily="sans-serif"
            >
              {level.sublabel}
            </text>

            {/* Depth badge */}
            <text
              x={x + boxW - 10}
              y={y + boxH / 2 + 5}
              textAnchor="end"
              fill="#525252"
              fontSize="11"
              fontFamily="sans-serif"
            >
              {`${i + 1}. szint`}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
