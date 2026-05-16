const LEVELS = [
  {
    num: "1",
    label: "Üzleti portfólió",
    sub: "A Meta admin-központja — itt kezeled az összes eszközt és jogosultságot",
    color: { text: "text-blue-400", bar: "bg-blue-400", border: "border-blue-500/25", bg: "bg-blue-500/[0.07]" },
  },
  {
    num: "2",
    label: "Hirdetési fiók",
    sub: "Kampányok, pixelek, konverziók, elköltött összeg — a tényleges hirdetési felület",
    color: { text: "text-violet-400", bar: "bg-violet-400", border: "border-violet-500/25", bg: "bg-violet-500/[0.07]" },
  },
  {
    num: "3",
    label: "Kampány",
    sub: "Cél meghatározása: értékesítés, lead, elérés, forgalom, alkalmazás",
    color: { text: "text-rose-400", bar: "bg-rose-400", border: "border-rose-500/25", bg: "bg-rose-500/[0.07]" },
  },
  {
    num: "4",
    label: "Hirdetéssorozat",
    sub: "Célközönség, elhelyezések, optimalizálási esemény, büdzsé, ütemezés",
    color: { text: "text-amber-400", bar: "bg-amber-400", border: "border-amber-500/25", bg: "bg-amber-500/[0.07]" },
  },
  {
    num: "5",
    label: "Hirdetés",
    sub: "Kreatív: kép, videó, carousel, szöveg, CTA gomb, céloldal URL",
    color: { text: "text-emerald-400", bar: "bg-emerald-400", border: "border-emerald-500/25", bg: "bg-emerald-500/[0.07]" },
  },
];

export default function MetaPortfolioHierarchy() {
  return (
    <div className="relative space-y-2 py-2">
      {/* Vertical connecting line */}
      <div className="absolute left-5 top-6 bottom-6 w-px bg-white/[0.06]" aria-hidden="true" />

      {LEVELS.map((level, i) => (
        <div key={level.label} className="relative flex items-start gap-4">
          {/* Number circle */}
          <div className={`relative z-10 shrink-0 h-10 w-10 rounded-full border ${level.color.border} ${level.color.bg} flex items-center justify-center`}>
            <span className={`text-xs font-black ${level.color.text}`}>{level.num}</span>
          </div>

          {/* Content card */}
          <div className={`flex-1 rounded-2xl border ${level.color.border} ${level.color.bg} px-5 py-3.5`}>
            <div className="flex items-center gap-2 mb-0.5">
              <span className={`h-1.5 w-1.5 rounded-full shrink-0 ${level.color.bar}`} />
              <p className={`text-sm font-black ${level.color.text}`}>{level.label}</p>
            </div>
            <p className="text-xs text-neutral-500 leading-relaxed">{level.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
