const NODES = [
  {
    label: "Hirdetési fiók",
    sub: "Fizetési adatok, jogosultságok, pixelek",
    color: { text: "text-rose-400", border: "border-rose-500/30", bg: "bg-rose-500/[0.07]", dot: "bg-rose-400" },
    indent: 0,
  },
  {
    label: "Kampány",
    sub: "Cél (lead, vásárlás, elérés), büdzsé, típus",
    color: { text: "text-blue-400", border: "border-blue-500/30", bg: "bg-blue-500/[0.07]", dot: "bg-blue-400" },
    indent: 1,
  },
  {
    label: "Hirdetéscsoport",
    sub: "Célzás, elhelyezések, ajánlattétel",
    color: { text: "text-emerald-400", border: "border-emerald-500/30", bg: "bg-emerald-500/[0.07]", dot: "bg-emerald-400" },
    indent: 2,
  },
  {
    label: "Kulcsszavak / Közönségek",
    sub: "Keresési szavak, remarketing listák, lookalike",
    color: { text: "text-amber-400", border: "border-amber-500/30", bg: "bg-amber-500/[0.07]", dot: "bg-amber-400" },
    indent: 3,
  },
  {
    label: "Hirdetések",
    sub: "Szöveg, képek, videók, CTA, céloldal URL",
    color: { text: "text-violet-400", border: "border-violet-500/30", bg: "bg-violet-500/[0.07]", dot: "bg-violet-400" },
    indent: 3,
  },
];

const INDENT_PX = [0, 20, 40, 60, 60] as const;

export default function CampaignHierarchy() {
  return (
    <div className="space-y-2 py-2">
      {NODES.map((node, i) => {
        const ml = INDENT_PX[node.indent];
        const isLast = i === NODES.length - 1;
        const isSiblingStart = i === 3; // two nodes at depth 3

        return (
          <div key={node.label} className="relative" style={{ marginLeft: ml }}>
            {/* Vertical connector line */}
            {i > 0 && (
              <div
                className="absolute top-0 -left-4 w-px bg-white/10"
                style={{ height: isSiblingStart ? "50%" : "100%", top: "-8px" }}
              />
            )}
            {/* Horizontal connector */}
            {i > 0 && (
              <div className="absolute top-5 -left-4 w-4 h-px bg-white/10" />
            )}

            <div className={`flex items-center gap-3 rounded-xl border ${node.color.border} ${node.color.bg} px-4 py-3`}>
              <span className={`shrink-0 h-2 w-2 rounded-full ${node.color.dot}`} />
              <div className="min-w-0">
                <p className={`text-sm font-black ${node.color.text} leading-tight`}>{node.label}</p>
                <p className="text-xs text-neutral-500 mt-0.5">{node.sub}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
