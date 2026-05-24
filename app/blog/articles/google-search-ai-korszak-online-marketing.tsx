import { ArrowRight, Check, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "A Google Search AI-korszaka elkezdődött – és ez mindent átír az online marketingben",
    description: "A Google keresője döntési motorrá válik. Mi változik SEO-ban, Google Ads-ben és tartalomstratégiában – és mit kell most tenned vállalkozóként.",
    author: { "@type": "Organization", name: "Blummarketing" },
    publisher: {
      "@type": "Organization",
      name: "Blummarketing",
      url: "https://blummarketing.hu",
    },
    datePublished: "2026-05-24",
    inLanguage: "hu",
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="my-8 overflow-x-auto rounded-2xl border border-white/10">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10 bg-white/[0.06]">
            {headers.map((h) => (
              <th key={h} className="px-5 py-3 text-left font-black text-neutral-200">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-white/5 last:border-0 odd:bg-white/[0.02]">
              {row.map((cell, j) => (
                <td key={j} className="px-5 py-3 leading-6 text-neutral-300">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Blockquote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-6 border-l-4 border-rose-500 pl-5 italic text-neutral-300 leading-7">
      {children}
    </blockquote>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-14 mb-5 text-3xl font-black tracking-tight text-white">{children}</h2>;
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-10 mb-4 text-2xl font-black text-white">{children}</h3>;
}

function H4({ children }: { children: React.ReactNode }) {
  return <h4 className="mt-8 mb-3 text-xl font-black text-neutral-100">{children}</h4>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mb-5 leading-8 text-neutral-300">{children}</p>;
}

function HR() {
  return <hr className="my-12 border-white/10" />;
}

function UL({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mb-6 space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 leading-7 text-neutral-300">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Old vs New Google comparison visual */
function OldVsNewGoogle() {
  return (
    <div className="my-10 grid gap-4 sm:grid-cols-2">
      {/* Old */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-neutral-500 mb-4">Régi Google</p>
        <div className="space-y-2">
          {["fogorvos Budapest implantátum ár"].map((q) => (
            <div key={q} className="rounded-xl bg-white/[0.04] border border-white/[0.06] px-4 py-2.5 text-sm text-neutral-400 italic">„{q}"</div>
          ))}
        </div>
        <div className="mt-5 space-y-2">
          {[
            { label: "1.", title: "Fogászat Budapest – Árak és infók", url: "fogaszat.hu" },
            { label: "2.", title: "Implantátum ár kalkulátor", url: "dentalinfo.hu" },
            { label: "3.", title: "Legjobb fogászatok listája", url: "fogaszatilista.hu" },
          ].map((r) => (
            <div key={r.label} className="rounded-xl bg-white/[0.03] p-3">
              <p className="text-[10px] text-neutral-600">{r.url}</p>
              <p className="text-sm font-semibold text-blue-400 leading-snug">{r.title}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-neutral-600">→ 10 kék link, a felhasználó választ</p>
      </div>
      {/* New */}
      <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] p-6">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-400 mb-4">Új Google AI</p>
        <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] px-4 py-2.5 text-sm text-neutral-300 italic">
          „Melyik fogászati rendelőt válasszam Budapesten implantátumhoz, ha fontos a garancia, a tapasztalat és az ár-érték arány?"
        </div>
        <div className="mt-5 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.06] p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-4 w-4 rounded-full bg-gradient-to-br from-blue-400 to-emerald-400 flex items-center justify-center">
              <span className="text-[8px] font-black text-white">G</span>
            </div>
            <span className="text-xs font-bold text-emerald-300">AI Overview</span>
          </div>
          <p className="text-xs leading-5 text-neutral-300">
            Budapesten implantátumhoz érdemes olyan rendelőt választani, amely legalább 5 éves garanciát ad. Fontos szempontok: az orvos tapasztalata, a technológia (3D tervezés), és a tényleges végár transzparenciája. A <span className="text-emerald-300 font-semibold">legjobban értékelt rendelők</span> ezek szerint: …
          </p>
          <div className="mt-3 flex gap-2">
            {["Rendelő A", "Rendelő B", "Rendelő C"].map((r) => (
              <span key={r} className="rounded-full bg-white/[0.06] border border-white/10 px-2.5 py-1 text-[10px] text-neutral-400">{r}</span>
            ))}
          </div>
        </div>
        <p className="mt-4 text-xs text-emerald-600">→ Az AI összefoglal, ajánl, döntést támogat</p>
      </div>
    </div>
  );
}

/** AI Visibility signals visual */
function AIVisibilitySignals() {
  const signals = [
    { icon: "📄", label: "AI Overview megjelenés", color: "emerald" },
    { icon: "💬", label: "AI idéz téged forrásként", color: "blue" },
    { icon: "🔍", label: "Brand search növekedés", color: "violet" },
    { icon: "🏆", label: "Összehasonlításban szereplés", color: "amber" },
    { icon: "📊", label: "Search Console CTR", color: "rose" },
    { icon: "🔗", label: "Ajánlott linkek az AI-ban", color: "teal" },
  ];
  return (
    <div className="my-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-rose-400 mb-5">AI-láthatóság mérőszámai</p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {signals.map((s) => (
          <div key={s.label} className="flex items-center gap-3 rounded-xl bg-white/[0.04] border border-white/[0.06] px-4 py-3">
            <span className="text-xl">{s.icon}</span>
            <span className="text-xs font-semibold text-neutral-300 leading-snug">{s.label}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-neutral-500">Ezek mellé jön a hagyományos pozíciófigyelés – de önmagában az már nem elég.</p>
    </div>
  );
}

/** Content type matrix */
function ContentTypeMatrix() {
  const types = [
    {
      num: "1",
      title: "Összehasonlító tartalmak",
      examples: ["Google Ads vs Meta Ads: melyik éri meg?", "SEO vagy PPC: melyik hoz gyorsabb eredményt?", "Shopify vs WooCommerce: melyik jobb webshophoz?"],
      why: "Az AI szereti az összehasonlításokat – döntéstámogató tartalom",
      accent: "blue",
    },
    {
      num: "2",
      title: "Tapasztalati tartalmak",
      examples: ["Saját esettanulmányok mérési adatokkal", "Ügyfélpéldák, konkrét tanulságok", "Valódi tapasztalatok, nem általánosságok"],
      why: "Az AI a hiteles, tapasztalati forrásokat preferálja",
      accent: "emerald",
    },
    {
      num: "3",
      title: "Kérdés-válasz oldalak",
      examples: ["Természetes kérdésekre adott részletes válaszok", "FAQ struktúra egyértelmű alcímekkel", "Konkrét számokkal, ár-infókkal"],
      why: "Pont így keres az AI-alapú Google-felhasználó",
      accent: "violet",
    },
    {
      num: "4",
      title: "Frissített szakmai oldalak",
      examples: ["Új dátumok, aktuális adatok, élő példák", "Google-változásokhoz igazított tartalom", "Pontosabb struktúra, mélyebb kifejtés"],
      why: "A régi, elavult tartalmak háttérbe szorulnak az AI-ban",
      accent: "amber",
    },
  ];

  const accentMap: Record<string, string> = {
    blue: "border-blue-500/20 bg-blue-500/[0.04]",
    emerald: "border-emerald-500/20 bg-emerald-500/[0.04]",
    violet: "border-violet-500/20 bg-violet-500/[0.04]",
    amber: "border-amber-500/20 bg-amber-500/[0.04]",
  };
  const numMap: Record<string, string> = {
    blue: "bg-blue-500/20 text-blue-300",
    emerald: "bg-emerald-500/20 text-emerald-300",
    violet: "bg-violet-500/20 text-violet-300",
    amber: "bg-amber-500/20 text-amber-300",
  };
  const tagMap: Record<string, string> = {
    blue: "text-blue-400",
    emerald: "text-emerald-400",
    violet: "text-violet-400",
    amber: "text-amber-400",
  };

  return (
    <div className="my-10 grid gap-4 sm:grid-cols-2">
      {types.map((t) => (
        <div key={t.num} className={`rounded-2xl border p-6 ${accentMap[t.accent]}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-black ${numMap[t.accent]}`}>{t.num}</span>
            <h4 className="font-black text-white">{t.title}</h4>
          </div>
          <ul className="space-y-1.5 mb-4">
            {t.examples.map((ex) => (
              <li key={ex} className="flex gap-2 text-xs text-neutral-400 leading-snug">
                <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-neutral-600" />
                <span>{ex}</span>
              </li>
            ))}
          </ul>
          <p className={`text-xs font-semibold ${tagMap[t.accent]}`}>→ {t.why}</p>
        </div>
      ))}
    </div>
  );
}

/** Landing page anatomy visual for AI Search era */
function LandingPageAnatomy() {
  const items = [
    { icon: "🎯", label: "Kinek szól az ajánlat?", desc: "Azonnal egyértelmű célcsoport" },
    { icon: "✅", label: "Konkrét előnyök", desc: "Nem általánosságok, hanem mért eredmények" },
    { icon: "🛡️", label: "Ellenérvek kezelése", desc: "Miért érdemes, mire kell figyelni" },
    { icon: "⭐", label: "Bizalmi elemek", desc: "Vélemények, referenciák, garanciák" },
    { icon: "📋", label: "Esettanulmány", desc: "Valódi ügyfélpélda számokkal" },
    { icon: "📣", label: "Egyértelmű CTA", desc: "Egy következő lépés, semmi más" },
  ];
  return (
    <div className="my-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-rose-400 mb-5">A jó landing oldal az AI Search korszakában</p>
      <div className="space-y-2.5">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-4 rounded-xl bg-white/[0.04] border border-white/[0.06] px-4 py-3">
            <span className="text-xl shrink-0">{item.icon}</span>
            <div>
              <p className="text-sm font-bold text-white">{item.label}</p>
              <p className="text-xs text-neutral-500">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Action plan visual */
function ActionPlanVisual() {
  const steps = [
    { n: "1", title: "SEO-tartalmak átnézése", desc: "Frissesség, konkrétság, döntéstámogatás" },
    { n: "2", title: "AI-barát struktúra", desc: "Alcímek, Q&A blokkok, listák, összehasonlítások" },
    { n: "3", title: "Márka hitelessége", desc: "Google Cégprofil, vélemények, social proof" },
    { n: "4", title: "Bővebb mérés", desc: "Brand search, CTR-változások, leadminőség" },
    { n: "5", title: "Döntéstámogató tartalmak", desc: "Kinek való / nem való? Alternatívák? Miért te?" },
  ];
  return (
    <div className="my-8 space-y-3">
      {steps.map((s, i) => (
        <div key={i} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose-500/15 text-sm font-black text-rose-300">{s.n}</div>
          <div>
            <p className="font-black text-white">{s.title}</p>
            <p className="text-sm text-neutral-400">{s.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const ctaChecklistItems = [
  "AI Search & online marketing audit",
  "SEO-tartalmak felkészültségének felmérése",
  "Google Ads kampányok AI-kori optimalizálása",
  "Landing oldalak döntéstámogató fejlesztése",
  "Tartalomstratégia felülvizsgálata",
];

interface Props {
  backHref?: string;
  backLabel?: string;
}

export default function GoogleAIKorszakArticle({ backHref = "/blog/", backLabel = "Vissza a bloghoz" }: Props) {
  return (
    <main className="min-h-screen bg-neutral-950 text-white antialiased">
      <JsonLd />

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.18),transparent_34%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_32%),linear-gradient(180deg,#0a0a0a_0%,#171717_100%)]" />
        <Navbar />

        <div className="mx-auto max-w-4xl px-6 pb-16 pt-14 lg:px-8">
          <a href={backHref} className="mb-6 inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition">
            ← {backLabel}
          </a>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Google", "SEO", "AI", "Google Ads", "Keresőhirdetés"].map((tag) => (
              <span key={tag} className="rounded-full bg-rose-500/10 px-3 py-1 text-xs font-bold text-rose-300">{tag}</span>
            ))}
          </div>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl leading-tight">
            A Google Search AI-korszaka elkezdődött – és ez mindent átír az online marketingben
          </h1>
          <p className="mt-6 text-xl leading-8 text-neutral-300">
            A Google keresője döntési motorrá válik. Mi változik SEO-ban, Google Ads-ben és tartalomstratégiában – és mit kell most tenned vállalkozóként.
          </p>
          <div className="mt-6 flex items-center gap-4 text-sm text-neutral-500">
            <span>Blummarketing</span>
            <span>·</span>
            <span>2026. május 24.</span>
            <span>·</span>
            <span>~12 perc olvasás</span>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-6 pb-24 lg:px-8">

        <P>A Google keresője eddig egy digitális térkép volt.</P>
        <P>Beírtál egy kulcsszót, kaptál tíz kék linket, néhány hirdetést, aztán a felhasználó kiválasztotta, hova kattint.</P>
        <P>Ez a korszak most látványosan átalakul.</P>
        <P>A Google 2026 májusában bejelentette, hogy a Search történetének egyik legnagyobb frissítése érkezik: az AI Mode, az AI Overviews és az AI-alapú keresési élmény egyre inkább központi szerepet kap. A kereső már nemcsak találatokat listáz, hanem <strong>válaszokat épít, összehasonlít, ajánl, magyaráz és döntést támogat</strong>.</P>
        <P>És ez nem csak technológiai hír.</P>
        <P>Ez <strong>üzleti hír</strong>.</P>
        <P>Mert ha a Google máshogy mutatja meg a válaszokat, akkor a cégeknek is máshogy kell jelen lenniük.</P>

        <HR />

        <H2>A Google már nem csak kereső. Döntési motor lesz.</H2>
        <P>Az AI-val működő keresés lényege, hogy a felhasználó nem egyszerű kulcsszavakat ír be, hanem egyre természetesebb, összetettebb kérdéseket tesz fel.</P>
        <P>Például nem ezt:</P>
        <Blockquote>„fogorvos Budapest implantátum ár"</Blockquote>
        <P>Hanem ezt:</P>
        <Blockquote>„Melyik fogászati rendelőt válasszam Budapesten implantátumhoz, ha fontos a garancia, a tapasztalat és az ár-érték arány?"</Blockquote>
        <P>Ez óriási különbség.</P>
        <P>A régi Google-ben a cél az volt, hogy jó pozícióban jelenj meg egy kulcsszóra.</P>
        <P>Az új Google-ben az lesz a cél, hogy az AI <strong>téged tartson releváns válasznak</strong>.</P>
        <P>Nem elég láthatónak lenni.</P>
        <P><strong>Ajánlhatónak kell lenni.</strong></P>

        <OldVsNewGoogle />

        <HR />

        <H2>Mi történik a klasszikus SEO-val?</H2>
        <P>A SEO nem hal meg.</P>
        <P>De a régi SEO-gondolkodás igen.</P>
        <P>A „írjunk egy 1200 szavas blogcikket egy kulcsszóra, tegyünk bele pár alcímet, és várjuk a forgalmat" típusú tartalomgyártás egyre kevesebb eredményt fog hozni.</P>
        <P>Miért?</P>
        <P>Mert az AI Overviews sok esetben már a találati oldalon összefoglalja a választ. A Google Ads súgója szerint az AI Overviews akkor jelenik meg, amikor a rendszer szerint a generatív AI különösen hasznos lehet, például amikor több forrásból kell gyorsan megérteni egy témát.</P>
        <P>Ez főleg az információs kereséseket érinti:</P>
        <UL items={[
          '„mi az a…"',
          '„hogyan működik…"',
          '„melyik a legjobb…"',
          '„mennyibe kerül…"',
          '„előnyök és hátrányok…"',
          '„összehasonlítás…"',
        ]} />
        <P>Ezek eddig rengeteg organikus kattintást hoztak.</P>
        <P>Most viszont a Google sok esetben már maga fogja megadni az első választ.</P>
        <P>Ez azt jelenti, hogy a top-of-funnel SEO-forgalom csökkenhet. Ugyanakkor az a márka, amelyet az AI beemel, idéz, ajánl vagy forrásként használ, óriási bizalmi előnyhöz juthat.</P>

        <HR />

        <H2>Az új SEO kérdése nem az, hogy hányadik vagy. Hanem hogy az AI téged választ-e.</H2>
        <P>A következő években a cégeknek nem csak arra kell figyelniük, hogy egy adott kulcsszóra milyen pozícióban vannak.</P>
        <P>Hanem arra is, hogy:</P>
        <UL items={[
          "megjelennek-e AI Overview válaszokban,",
          "említi-e őket a Google AI,",
          "forrásként használja-e a tartalmukat,",
          "ajánlja-e a termékeiket vagy szolgáltatásaikat,",
          "látszanak-e összehasonlító, döntéstámogató kereséseknél,",
          "és nő-e a brand search mennyiségük.",
        ]} />
        <P>Ez egy teljesen más játék.</P>
        <P>A kulcsszóoptimalizálás mellé belép az <strong>AI-láthatóság optimalizálása</strong>.</P>

        <AIVisibilitySignals />

        <HR />

        <H2>Mit jelent ez a Google Ads-ben?</H2>
        <P>A fizetett hirdetések világa is átalakul.</P>
        <P>A Google 2026-os Marketing Live eseményén bemutatta az AI-korszakra épülő új Search hirdetési megoldásokat. Ezek között szerepelnek Gemini-vel támogatott hirdetési formátumok, AI-powered Shopping ads, Direct Offers és olyan megoldások, amelyek a felhasználói szándékhoz sokkal közelebb viszik a hirdetést.</P>
        <P>Ez azt jelenti, hogy a Search Ads nem pusztán címsorok és leírások versenye lesz.</P>
        <P>A hirdetések egyre inkább beépülnek abba az AI-alapú keresési élménybe, ahol a felhasználó már nem csak kattintani akar, hanem <strong>választ, javaslatot, összehasonlítást és következő lépést vár</strong>.</P>
        <P>A Google Ads súgója szerint a hirdetések az AI Overview alatt, felett vagy akár annak részeként is megjelenhetnek, és a rendszer nemcsak a keresési kifejezést, hanem az AI Overview tartalmát is figyelembe veheti a hirdetés kiválasztásánál.</P>
        <P>Ez marketingesként azt jelenti:</P>
        <P><strong>A kontextus fontosabb lesz, mint valaha.</strong></P>
        <P>Nem csak az számít, milyen kulcsszóra célzol.</P>
        <P>Az is számít, hogy a landing oldalad, a termékfeeded, a szövegeid, az ajánlatod és a konverziós adataid mennyire segítik a Google AI-rendszereit abban, hogy megértsék: kinek, mikor és miért vagy jó választás.</P>

        <Table
          headers={["Régi Google Ads logika", "Új AI-alapú Google Ads logika"]}
          rows={[
            ["Kulcsszóra célzol", "Szándékot és kontextust célzol"],
            ["Hirdetés szövege a legfontosabb", "Landing oldal relevanciája ugyanannyira számít"],
            ["Pozíció = siker", "AI Overview-ban való megjelenés = siker"],
            ["Kattintás az elsődleges cél", "Döntéstámogatás + konverzió a cél"],
            ["Kampány struktura a fókusz", "Feed minőség, adat és AI-együttműködés"],
          ]}
        />

        <HR />

        <H2>A tartalomstratégia is új alapokra kerül</H2>
        <P>A jövő nyertesei nem azok lesznek, akik a legtöbb blogcikket gyártják.</P>
        <P>Hanem azok, akik a leghasznosabb, legjobban strukturált, legmegbízhatóbb és legdöntésközpontúbb tartalmakat hozzák létre.</P>
        <P>Az AI-keresésben különösen fontosak lesznek az ilyen tartalmak:</P>

        <ContentTypeMatrix />

        <HR />

        <H2>Mi lesz a kattintásokkal?</H2>
        <P>Itt jön a kényelmetlen rész.</P>
        <P>Valószínűleg sok iparágban kevesebb kattintás érkezik majd az egyszerű információs keresésekből.</P>
        <P>De ez nem feltétlenül tragédia.</P>
        <P>Mert akik mégis átkattintanak, azok sokszor már tájékozottabbak, tudatosabbak és közelebb vannak a döntéshez.</P>
        <P>Ezért a landing oldalaknak is változniuk kell.</P>
        <P>Nem elég informálni.</P>
        <P><strong>Meg kell erősíteni a döntést.</strong></P>

        <LandingPageAnatomy />

        <HR />

        <H2>Mit tegyél most vállalkozóként vagy marketingesként?</H2>
        <P>Nem kell pánikolni.</P>
        <P>De érdemes most lépni.</P>

        <ActionPlanVisual />

        <H3>1. Nézd át a legfontosabb SEO-tartalmaidat</H3>
        <P>Melyek azok az oldalak, amelyek eddig sok organikus forgalmat hoztak?</P>
        <P>Ezeknél vizsgáld meg:</P>
        <UL items={[
          "elég frissek-e,",
          "elég konkrétak-e,",
          "válaszolnak-e valódi ügyfélkérdésekre,",
          "van-e bennük szakértői tapasztalat,",
          "segítik-e a döntést.",
        ]} />

        <H3>2. Építs AI-barát tartalmi struktúrát</H3>
        <P>Használj tiszta alcímeket, kérdés-válasz blokkokat, listákat, összehasonlításokat, táblázatokat és egyértelmű definíciókat.</P>
        <P>Nem azért, hogy „robotoknak írj".</P>
        <P>Hanem azért, hogy a tartalmad könnyen értelmezhető legyen embernek és AI-nak is.</P>

        <H3>3. Erősítsd a márkád hitelességét</H3>
        <P>Az AI nem csak szövegeket néz.</P>
        <P>A márka teljes digitális lábnyoma számít:</P>
        <UL items={[
          "weboldal,",
          "Google Cégprofil,",
          "vélemények,",
          "szakmai megjelenések,",
          "social proof,",
          "esettanulmányok,",
          "szerzői hitelesség,",
          "friss tartalmak.",
        ]} />

        <H3>4. Ne csak forgalmat mérj</H3>
        <P>A jövőben nem lesz elég annyit nézni, hogy hány organikus látogatód jött.</P>
        <P>Figyeld ezeket is:</P>
        <UL items={[
          "brand keresések növekedése,",
          "Search Console CTR-változások,",
          "AI Overview megjelenések hatása,",
          "assisted conversions,",
          "leadminőség,",
          "konverziós arány,",
          "Google Ads search term minőség,",
          "visszatérő látogatók aránya.",
        ]} />

        <H3>5. Készíts döntéstámogató tartalmakat</H3>
        <P>Az AI Search világában az nyer, aki nem csak forgalmat szerez, hanem segít a felhasználónak dönteni.</P>
        <P>Ezért a tartalmaidban válaszolj ezekre:</P>
        <UL items={[
          "Kinek való ez a szolgáltatás?",
          "Kinek nem való?",
          "Milyen alternatívák vannak?",
          "Mi alapján érdemes választani?",
          "Milyen hibákat érdemes elkerülni?",
          "Miért pont téged válasszanak?",
        ]} />

        <HR />

        <H2>A lényeg: a Google-ben való jelenlét új szabályok szerint működik</H2>
        <P>A Google Search AI-alapú átalakulása nem egy apró technikai frissítés.</P>
        <P>Ez egy stratégiai fordulópont.</P>
        <P>A kereső egyre inkább asszisztensként működik: megérti a kérdést, összerakja a választ, összehasonlít, ajánl, majd segít a következő lépésben.</P>
        <P>Ez azt jelenti, hogy a cégeknek is másképp kell gondolkodniuk.</P>
        <P>Nem elég kulcsszavakra optimalizálni.</P>
        <P>Nem elég hirdetéseket futtatni.</P>
        <P>Nem elég blogcikkeket gyártani.</P>
        <P><strong>Olyan digitális jelenlétet kell építeni, amelyet a Google AI is ért, amelyben a felhasználó megbízik, és amely egyértelműen segíti a döntést.</strong></P>
        <P>A kérdés már nem az, hogy:</P>
        <Blockquote>„Hányadik vagyok Google-ben?"</Blockquote>
        <P>Hanem az, hogy:</P>
        <Blockquote><strong>„Amikor az AI választ ad, engem ajánl — vagy a konkurensemet?"</strong></Blockquote>

        <div className="mt-12 rounded-[2rem] border border-rose-500/20 bg-rose-500/5 p-8">
          <p className="text-xl font-black text-white leading-relaxed">
            Ha csak egy dolgot jegyezz meg ebből a cikkből, ez legyen az:
          </p>
          <p className="mt-4 text-lg leading-8 text-rose-200 font-semibold">
            Az AI Search korszakában nem a pozíció a legfontosabb mutató. Hanem az, hogy a Google AI téged ajánl-e – vagy a konkurensedet.
          </p>
          <p className="mt-3 text-neutral-400">Ez az új verseny. Jobb most felkészülni rá, mint lemaradni.</p>
        </div>

      </article>

      <section className="px-6 pb-10 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-white text-neutral-950 shadow-2xl">
          <div className="grid gap-0 lg:grid-cols-[1fr_0.85fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-600">Készülj fel az AI Search korszakára</p>
              <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
                Segítek felmérni, hogy a vállalkozásod mennyire készült fel az AI-alapú Google Search világára.
              </h2>
              <p className="mt-5 text-lg leading-8 text-neutral-600">
                Nézzük meg együtt, hol veszíthetsz organikus forgalmat, és milyen tartalmakkal, kampányokkal vagy landing oldalakkal tudsz előnyt építeni.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:hello@blummarketing.hu?subject=AI%20Search%20audit%20%E2%80%93%20Blummarketing"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-7 py-4 font-bold text-white transition hover:bg-neutral-800"
                >
                  AI Search audit kérése
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="tel:06303098589"
                  className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-7 py-4 font-bold transition hover:bg-neutral-100"
                >
                  Telefonos érdeklődés
                </a>
              </div>
            </div>
            <div className="bg-neutral-950 p-8 text-white sm:p-12 lg:p-16">
              <TrendingUp className="h-10 w-10 text-emerald-300" aria-hidden="true" />
              <h3 className="mt-6 text-3xl font-black">Mit nézünk át nálad?</h3>
              <ul className="mt-6 space-y-4 text-neutral-300">
                {ctaChecklistItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check className="h-5 w-5 shrink-0 text-emerald-300" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
