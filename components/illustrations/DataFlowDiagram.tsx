// DataFlowDiagram.tsx
// Látogató → Weboldal → Pixel/GA4 → Platform → Riport

const steps = [
  { label: "Látogató",  color: "#fb7185" },
  { label: "Weboldal",  color: "#60a5fa" },
  { label: "Pixel / GA4", color: "#34d399" },
  { label: "Platform",  color: "#fbbf24" },
  { label: "Riport",   color: "#a78bfa" },
];

export default function DataFlowDiagram() {
  const boxW = 86;
  const boxH = 48;
  const gap = 30;
  const totalW = steps.length * boxW + (steps.length - 1) * gap;
  const cx = (i: number) => i * (boxW + gap) + boxW / 2;
  const viewW = totalW + 20;

  return (
    <svg
      viewBox={`0 0 ${viewW} 90`}
      width="100%"
      aria-label="Adatfolyam: Látogató → Weboldal → Pixel/GA4 → Platform → Riport"
      role="img"
    >
      {steps.map((step, i) => {
        const x = 10 + i * (boxW + gap);
        const midX = x + boxW / 2;

        return (
          <g key={step.label}>
            {/* Arrow between boxes */}
            {i < steps.length - 1 && (
              <g>
                <line
                  x1={x + boxW}
                  y1={boxH / 2 + 10}
                  x2={x + boxW + gap}
                  y2={boxH / 2 + 10}
                  stroke="#525252"
                  strokeWidth="1.5"
                />
                <polygon
                  points={`${x + boxW + gap},${boxH / 2 + 10 - 4} ${x + boxW + gap + 6},${boxH / 2 + 10} ${x + boxW + gap},${boxH / 2 + 10 + 4}`}
                  fill="#525252"
                />
              </g>
            )}

            {/* Box */}
            <rect
              x={x}
              y={10}
              width={boxW}
              height={boxH}
              rx="10"
              fill="rgba(255,255,255,0.04)"
              stroke={step.color}
              strokeWidth="1.5"
            />

            {/* Label */}
            <text
              x={midX}
              y={10 + boxH / 2 + 5}
              textAnchor="middle"
              fill={step.color}
              fontSize="11"
              fontWeight="700"
              fontFamily="sans-serif"
            >
              {step.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
