// Pure CSS animations – no JS, no images, zero runtime cost

function LiveDot() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
    </span>
  );
}

function TrendBadge({
  value,
  positive = true,
}: {
  value: string;
  positive?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-bold ${
        positive
          ? "bg-emerald-500/15 text-emerald-400"
          : "bg-rose-500/15 text-rose-400"
      }`}
    >
      {value}
    </span>
  );
}

// Mini sparkline – inline SVG, no external deps
function Sparkline() {
  return (
    <svg
      width="72"
      height="24"
      viewBox="0 0 72 24"
      fill="none"
      aria-hidden="true"
    >
      <polyline
        points="0,22 18,16 36,18 54,7 72,2"
        stroke="#34d399"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="72" cy="2" r="2.5" fill="#34d399" />
    </svg>
  );
}

// ── Card 1 – Meta ROAS ───────────────────────────────────────────────────────
function CardRoas() {
  return (
    <div className="float-a ml-8 rounded-2xl border border-white/10 bg-white/[0.05] p-5 shadow-xl backdrop-blur-sm w-56">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-blue-500" />
          <span className="text-xs font-medium text-neutral-300">Meta hirdetések</span>
        </div>
        <LiveDot />
      </div>
      <div className="flex items-end gap-2">
        <span className="text-4xl font-black text-white leading-none">9×</span>
        <span className="mb-0.5 text-xs font-bold uppercase tracking-widest text-neutral-300">
          ROAS
        </span>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <TrendBadge value="↑ +23%" />
        <span className="text-xs text-neutral-300">vs. előző hónap</span>
      </div>
    </div>
  );
}

// ── Card 2 – Google Ads CTR + sparkline ─────────────────────────────────────
function CardCtr() {
  return (
    <div className="float-b rounded-2xl border border-white/10 bg-white/[0.05] p-5 shadow-xl backdrop-blur-sm w-56">
      <div className="flex items-center gap-2 mb-4">
        <span className="h-2 w-2 rounded-full bg-amber-400" />
        <span className="text-xs font-medium text-neutral-300">Google Ads</span>
      </div>
      <div className="flex items-end gap-2">
        <span className="text-4xl font-black text-white leading-none">5.2%</span>
        <span className="mb-0.5 text-xs font-bold uppercase tracking-widest text-neutral-300">
          CTR
        </span>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <Sparkline />
        <TrendBadge value="↑ +0.8pp" />
      </div>
    </div>
  );
}

// ── Card 3 – TikTok CPL ─────────────────────────────────────────────────────
function CardCpl() {
  return (
    <div className="float-c ml-14 rounded-2xl border border-white/10 bg-white/[0.05] p-5 shadow-xl backdrop-blur-sm w-56">
      <div className="flex items-center gap-2 mb-4">
        <span className="h-2 w-2 rounded-full bg-rose-400" />
        <span className="text-xs font-medium text-neutral-300">TikTok kampány</span>
      </div>
      <div className="flex items-end gap-2">
        <span className="text-4xl font-black text-white leading-none">1 840</span>
        <span className="mb-0.5 text-xs font-bold uppercase tracking-widest text-neutral-300">
          Ft / lead
        </span>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <TrendBadge value="↓ −18%" />
        <span className="text-xs text-neutral-300">iparági átlag alatt</span>
      </div>
    </div>
  );
}

// ── Mobile stat strip ────────────────────────────────────────────────────────
function MobileStats() {
  return (
    <div className="mt-10 grid grid-cols-3 gap-3 lg:hidden">
      {[
        { label: "ROAS", value: "9×", trend: "↑ +23%", dot: "bg-blue-500" },
        { label: "CTR", value: "5.2%", trend: "↑ +0.8pp", dot: "bg-amber-400" },
        { label: "CPL", value: "−18%", trend: "↓ csökkent", dot: "bg-rose-400" },
      ].map(({ label, value, trend, dot }) => (
        <div
          key={label}
          className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center"
        >
          <div className="flex justify-center mb-2">
            <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
          </div>
          <p className="text-xl font-black text-white">{value}</p>
          <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-300 mt-0.5">
            {label}
          </p>
          <p className="text-[10px] text-emerald-400 font-medium mt-1.5">{trend}</p>
        </div>
      ))}
    </div>
  );
}

// ── Main export ──────────────────────────────────────────────────────────────
export function HeroMetrics() {
  return (
    <div className="hidden lg:flex lg:flex-col lg:gap-5 lg:justify-center">
      <CardRoas />
      <CardCtr />
      <CardCpl />
    </div>
  );
}

export { MobileStats };
