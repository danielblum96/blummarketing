// ProcessFlow.tsx – generic horizontal numbered flow (up to 6 steps)
// Used on weboldal-keszites page and potentially others

interface Step {
  num: string;
  label: string;
}

interface ProcessFlowProps {
  steps: Step[];
  color?: string;
}

export default function ProcessFlow({ steps, color = "#fb7185" }: ProcessFlowProps) {
  const count = steps.length;
  const boxW = 70;
  const boxH = 52;
  const gapX = 24;
  const totalW = count * boxW + (count - 1) * gapX;
  const viewW = totalW + 20;
  const midY = 36;

  return (
    <svg
      viewBox={`0 0 ${viewW} 92`}
      width="100%"
      role="img"
      aria-label={`Folyamat ${count} lépésben`}
    >
      {steps.map((step, i) => {
        const x = 10 + i * (boxW + gapX);
        const cx = x + boxW / 2;

        return (
          <g key={step.num}>
            {/* Arrow connector */}
            {i < count - 1 && (
              <g>
                <line
                  x1={x + boxW}
                  y1={midY}
                  x2={x + boxW + gapX}
                  y2={midY}
                  stroke="#525252"
                  strokeWidth="1.5"
                />
                <polygon
                  points={`${x + boxW + gapX - 1},${midY - 4} ${x + boxW + gapX + 6},${midY} ${x + boxW + gapX - 1},${midY + 4}`}
                  fill="#525252"
                />
              </g>
            )}

            {/* Box */}
            <rect
              x={x}
              y={midY - boxH / 2}
              width={boxW}
              height={boxH}
              rx="10"
              fill="rgba(255,255,255,0.04)"
              stroke={color}
              strokeWidth="1.5"
            />

            {/* Step num */}
            <text
              x={cx}
              y={midY - 6}
              textAnchor="middle"
              fill={color}
              fontSize="11"
              fontWeight="800"
              fontFamily="sans-serif"
            >
              {step.num}
            </text>

            {/* Label — wrap via foreignObject */}
            <foreignObject x={x + 4} y={midY + 2} width={boxW - 8} height={34}>
              <div
                style={{
                  textAlign: "center",
                  color: "#a3a3a3",
                  fontSize: "8.5px",
                  lineHeight: "1.3",
                  fontFamily: "sans-serif",
                  fontWeight: 600,
                }}
              >
                {step.label}
              </div>
            </foreignObject>
          </g>
        );
      })}
    </svg>
  );
}
