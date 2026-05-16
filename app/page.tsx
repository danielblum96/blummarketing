import { ArrowRight, Check, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ogImage } from "@/lib/og";
import { HeroMetrics, MobileStats } from "@/components/HeroMetrics";

export const metadata = {
  title: "Blummarketing | Google, Meta és TikTok hirdetéskezelés",
  description:
    "Kampányaudit, mérés és PPC-kezelés olyan vállalkozásoknak, akik nem csak kattintásokat akarnak látni, hanem érdeklődőket, vásárlásokat és ajánlatkéréseket.",
  keywords: [
    "google ads kezelés",
    "meta hirdetéskezelés",
    "tiktok hirdetéskezelés",
    "ppc ügynökség",
    "kampányaudit",
    "hirdetéskezelés",
    "Blummarketing",
  ],
  openGraph: {
    title: "Blummarketing | Google, Meta és TikTok hirdetéskezelés",
    description:
      "Kampányaudit, mérés és PPC-kezelés. Megmutatjuk, melyik hirdetésed hoz ügyfelet és melyik viszi a pénzt.",
    type: "website",
    locale: "hu_HU",
    siteName: "Blummarketing",
    images: ogImage,
  },
  alternates: {
    canonical: "/",
  },
};

const auditPoints = [
  "megfelelően mérjük-e a konverziókat",
  "átlátható-e a kampánystruktúra",
  "melyik kreatív működik és melyik fáradt ki",
  "hol veszít érdeklődőket a céloldal",
  "mennyibe kerül egy lead vagy vásárlás",
  "jól működik-e a remarketing",
  "a riportból látszik-e, mit kell tenni",
  "jó helyre megy-e a büdzsé",
];

const problemPoints = [
  "melyik kampányból jön valódi ügyfél",
  "mennyibe kerül egy ajánlatkérés vagy vásárlás",
  "melyik kreatív működik, és melyik fáradt ki",
  "hol vesznek el az érdeklődők",
  "melyik platformra érdemes többet költeni",
  "melyik hirdetés csak égeti a büdzsét",
];

const services = [
  {
    title: "PPC hirdetéskezelés",
    text: "Google, Meta és TikTok kampányokat kezelünk úgy, hogy ne csak platformon belüli számokat láss, hanem üzleti eredményt: leadet, vásárlást, ajánlatkérést.",
    href: "/szolgaltatasok/",
  },
  {
    title: "Google Ads hirdetéskezelés",
    text: "Akkor erős, ha az ügyfeleid már aktívan keresik a termékedet vagy szolgáltatásodat. Keresési, Performance Max, Shopping és YouTube kampányokkal segítünk elérni őket mérhetően.",
    href: "/szolgaltatasok/",
  },
  {
    title: "Meta hirdetéskezelés",
    text: "Facebook és Instagram kampányokat építünk kreatívteszteléssel, remarketinggel és konverziókövetéssel, hogy kiderüljön, melyik üzenetből lesz valódi érdeklődés.",
    href: "/szolgaltatasok/meta-hirdeteskezeles/",
  },
  {
    title: "TikTok hirdetéskezelés",
    text: "TikTok kampányokat kezelünk olyan videós kreatívokra építve, amelyek nem csak megtekintést, hanem érdeklődést és vásárlási szándékot is hoznak.",
    href: "/szolgaltatasok/tiktok-hirdeteskezeles/",
  },
  {
    title: "Kreatív és videós tartalom",
    text: "Fotókat, rövid videókat és hirdetési kreatívokat készítünk, amelyeket nem csak posztolni lehet, hanem kampányban tesztelni és skálázni is.",
    href: "/szolgaltatasok/foto-es-videokeszites/",
  },
  {
    title: "Social media kezelés",
    text: "Tartalmi rendszert építünk, amely nem külön életet él a hirdetéseidtől, hanem támogatja a kampányokat, ajánlatokat és márkaépítést.",
    href: "/szolgaltatasok/social-media-tartalomgyartas/",
  },
];

const firstMonthSteps = [
  {
    step: "01",
    title: "Átnézzük a jelenlegi rendszert",
    text: "Megnézzük a hirdetési fiókokat, kampányokat, kreatívokat, céloldalakat és riportokat.",
  },
  {
    step: "02",
    title: "Ellenőrizzük a mérést",
    text: "Kiderítjük, hogy pontosan mérhető-e az, ami tényleg számít: vásárlás, ajánlatkérés, űrlapkitöltés, időpontfoglalás vagy telefonos érdeklődés.",
  },
  {
    step: "03",
    title: "Kijavítjuk a legfontosabb hibákat",
    text: "Először azokat a hibákat javítjuk, amelyek torzítják a mérést, rontják a konverziót vagy feleslegesen viszik a büdzsét.",
  },
  {
    step: "04",
    title: "Elindítjuk az első teszteket",
    text: "Új kampánystruktúrát, kreatívokat vagy célzásokat tesztelünk, attól függően, hol van a legnagyobb lehetőség.",
  },
  {
    step: "05",
    title: "Megmutatjuk, mi legyen a következő lépés",
    text: "A hónap végére nem csak kampányok futnak. Lesz egy tisztább kép arról, mire érdemes költeni, mit kell javítani, és mit lehet továbbépíteni.",
  },
];

const decisionPoints = [
  "melyik kampányból jött valódi ügyfél",
  "melyik költés térült meg",
  "hol veszít pénzt a rendszer",
  "mit kell leállítani",
  "mit érdemes skálázni",
  "és mi legyen a következő hónapban",
];

const yesPoints = [
  "hirdetsz, de nem látod tisztán, mi térül meg",
  "több érdeklődőt, vásárlást vagy ajánlatkérést szeretnél",
  "fontos, hogy legyen mérés, logika és következő lépés",
  "szükséged van friss, tesztelhető kreatívokra",
  "nem csak végrehajtót, hanem gondolkodó marketingpartnert keresel",
];

const noPoints = [
  "azonnali csodát vársz minimális büdzséből",
  "csak pár posztot szeretnél stratégia nélkül",
  "garantált eredményt vársz tesztelés nélkül",
  "csak végrehajtót keresel, aki kérdés nélkül elindítja, amit kitaláltál",
  "nem szeretnéd hallani, ha egy kampány, ajánlat vagy céloldal nem működik",
];

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Blummarketing",
    description: "Google, Meta és TikTok kampánykezelés és kampányaudit vállalkozásoknak.",
    areaServed: "Hungary",
    serviceType: ["Google Ads kezelés", "Meta hirdetéskezelés", "TikTok hirdetéskezelés", "Kampányaudit"],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white antialiased">
      <JsonLd />

      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.28),transparent_34%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.24),transparent_32%),linear-gradient(180deg,#0a0a0a_0%,#171717_100%)]" />
        <Navbar />
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-8 lg:pb-32 lg:pt-24">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Bal oszlop – szöveg */}
            <div>
              <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl leading-[1.08]">
                Ne költs többet hirdetésre, amíg nem látod, mi térül meg
              </h1>
              <p className="mt-7 text-lg leading-8 text-neutral-300 sm:text-xl">
                Google, Meta és TikTok kampányokat kezelünk vállalkozásoknak, akik nem csak kattintásokat akarnak látni, hanem érdeklődőket, vásárlásokat és ajánlatkéréseket.
              </p>
              <p className="mt-4 text-lg leading-8 text-neutral-300">
                Rendet teszünk a mérésben, teszteljük a kreatívokat, és megmutatjuk, melyik kampányod hoz valódi eredményt.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="/#kapcsolat" className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-bold text-neutral-950 shadow-2xl transition hover:scale-[1.02] hover:bg-neutral-200">
                  Kérek egy kampányauditot
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" aria-hidden="true" />
                </a>
                <a href="/szolgaltatasok/" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur transition hover:bg-white/10">
                  Megnézem, hogyan dolgozunk
                </a>
              </div>
              {/* Mobilon megjelenő stat strip */}
              <MobileStats />
            </div>
            {/* Jobb oszlop – lebegő metrika kártyák (csak desktop) */}
            <HeroMetrics />
          </div>
        </div>
      </section>

      {/* ── Audit section ── */}
      <section className="bg-white py-24 text-neutral-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-600">Kampányaudit</p>
              <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
                Mit nézünk meg egy kampányauditban?
              </h2>
              <p className="mt-5 text-lg leading-8 text-neutral-700">
                Nem érzésre mondjuk meg, mi a baj. Azokat a pontokat nézzük át, ahol gyakran elfolyik a hirdetési pénz.
              </p>
              <p className="mt-3 text-base leading-7 text-neutral-700">Egy audit során többek között ezeket vizsgáljuk:</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {auditPoints.map((point) => (
                <div key={point} className="flex gap-3 rounded-3xl border border-neutral-200 bg-neutral-50 p-5">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden="true" />
                  <p className="font-semibold leading-6 text-neutral-800">{point}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 rounded-3xl bg-neutral-950 p-8 text-white">
            <p className="text-lg leading-8 text-neutral-300">
              Gyakran már az első átnézésnél kiderül, ha rossz konverzióra optimalizál a kampány, hibás a mérés, gyenge a céloldal, vagy túl sok pénz megy olyan hirdetésekre, amelyek nem hoznak valódi érdeklődőt.
            </p>
          </div>
        </div>
      </section>

      {/* ── Problem section ── */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-300">Ismerős helyzet?</p>
            <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
              Hirdetsz, de nem látod tisztán, mi hozza az ügyfeleket?
            </h2>
            <p className="mt-5 text-lg leading-8 text-neutral-300">
              Sok cég futtat hirdetéseket Google-ben, Facebookon, Instagramon vagy TikTokon, de közben nincs pontos válasz a legfontosabb kérdésekre.
            </p>
            <p className="mt-6 text-lg leading-8 text-neutral-300">
              Ilyenkor nem több hirdetés kell, hanem tisztább kép: mi hoz ügyfelet, mi viszi a pénzt, és hol kell változtatni.
            </p>
          </div>
          <div className="space-y-3">
            {problemPoints.map((point) => (
              <div key={point} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-rose-400" />
                <p className="leading-7 text-neutral-300">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Value proposition ── */}
      <section className="bg-neutral-900 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-300">Hogyan gondolkodunk</p>
            <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
              Megmutatjuk, hol folyik el a hirdetési pénzed
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[2rem] bg-white p-8 text-neutral-950">
              <p className="text-lg font-black leading-7">A kampányokat nem különálló hirdetésként kezeljük, hanem teljes ügyfélszerzési útvonalként.</p>
              <p className="mt-4 leading-7 text-neutral-700">Megnézzük, mire kattintanak az emberek, hova érkeznek, mit csinálnak az oldalon, megtörténik-e a konverzió.</p>
            </div>
            <div className="rounded-[2rem] bg-white p-8 text-neutral-950">
              <p className="text-lg font-black leading-7">Mert nem a lájkokból fizeted a számlákat.</p>
              <p className="mt-4 leading-7 text-neutral-700">A végső kérdés mindig az: hoz-e ez leadet, vásárlást vagy bevételt?</p>
            </div>
            <div className="rounded-[2rem] bg-rose-600 p-8 text-white">
              <p className="text-lg font-black leading-7">A cél nem több adat, hanem jobb döntés.</p>
              <p className="mt-4 leading-7 text-rose-100">Mire költs, mit állíts le, és mit építs tovább.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="szolgaltatasok" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-300">Miben segítünk?</p>
          <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">Hirdetéskezelés, kreatív és tartalom</h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <a
              key={s.title}
              href={s.href}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-xl transition hover:-translate-y-1 hover:bg-white/[0.07]"
            >
              <h3 className="text-xl font-black group-hover:text-rose-200 transition">{s.title}</h3>
              <p className="mt-4 leading-7 text-neutral-300 text-sm">{s.text}</p>
              <div className="mt-5 flex items-center gap-2 text-sm font-bold text-rose-300 group-hover:gap-3 transition-all">
                Részletek <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── First 30 days ── */}
      <section className="bg-white py-24 text-neutral-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-600">Hogyan kezdünk</p>
            <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">Mit kapsz az első 30 napban?</h2>
            <p className="mt-5 text-lg leading-8 text-neutral-700">
              Az első hónap célja, hogy kiderüljön, mi működik — és hol kell azonnal beavatkozni.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {firstMonthSteps.map((item) => (
              <div key={item.step} className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-7">
                <p className="text-sm font-black text-neutral-600">{item.step}</p>
                <h3 className="mt-4 text-xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-neutral-700 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Common mistake ── */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-300">Amit auditban látunk</p>
            <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
              Egy gyakori hiba, amit audit során látunk
            </h2>
            <p className="mt-5 text-lg leading-8 text-neutral-300">
              Sokszor nem a kampányok számával van a legnagyobb gond, hanem azzal, hogy a rendszer rossz jelek alapján optimalizál.
            </p>
            <p className="mt-4 leading-8 text-neutral-300">
              Például előfordulhat, hogy a kampány nem valódi ajánlatkérésre vagy vásárlásra optimalizál, hanem egy gyengébb minőségű eseményre. Ilyenkor a hirdetési fiók látszólag hoz eredményeket, de ezek üzletileg nem elég értékesek.
            </p>
            <p className="mt-4 leading-8 text-neutral-300">
              A mérés rendbetétele után már látszik, melyik kampány hoz valódi leadet, melyik csak olcsó forgalmat, és mire érdemes költeni a következő hónapban.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <p className="text-xl font-black text-white">Nem csak kampányokat kezelünk. Döntéseket készítünk elő.</p>
            <p className="mt-4 leading-7 text-neutral-300">A legtöbb riport megmutatja, mennyi volt a kattintás, az elérés vagy a CPC. Ez önmagában kevés. Egy cégvezetőnek ezek a kérdések fontosak:</p>
            <ul className="mt-5 space-y-2">
              {decisionPoints.map((point) => (
                <li key={point} className="flex gap-3 leading-7 text-neutral-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-7 text-neutral-300">Nem csodát ígérünk, hanem tiszta képet, következetes munkát és jobb döntéseket.</p>
          </div>
        </div>
      </section>

      {/* ── Growth package ── */}
      <section className="bg-neutral-900 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-300">Havidíjas csomag</p>
              <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
                Photozoom tartalomkészítés + Blummarketing hirdetéskezelés
              </h2>
              <p className="mt-5 text-lg leading-8 text-neutral-300">
                A Blummarketing a Photozoom tartalomkészítő csapatával együttműködve kínál havi rendszert azoknak a vállalkozásoknak, akik rendszeresen friss videókkal szeretnének hirdetni Facebookon, Instagramon és TikTokon.
              </p>
              <p className="mt-4 leading-8 text-neutral-300">
                A kreatív tartalmak elkészítéséről a Photozoom csapata gondoskodik — a Blummarketing pedig a kampányok stratégiai kezeléséért, optimalizálásáért és teljesítménykövetéséért felel.
              </p>
              <p className="mt-4 leading-8 text-neutral-300">
                Ideális, ha már hirdetsz Meta vagy TikTok felületen, de nincs elég friss kreatívod a növekedéshez.
              </p>
              <a href="/szolgaltatasok/havi-videos-tartalom-hirdeteskezeles/" className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-bold text-white backdrop-blur transition hover:bg-white/10">
                Megnézem a Growth csomagot
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-neutral-950 p-8">
              <p className="text-xs font-black uppercase tracking-widest text-neutral-300">Growth csomag</p>
              <h3 className="mt-3 text-3xl font-black">Havi 10 videó + Meta és TikTok hirdetéskezelés</h3>
              <div className="mt-6 space-y-3">
                {["Havi 10 rövid videó", "Fotós kreatívok", "TikTok Ads kezelés", "Meta Ads kezelés", "Kreatívtesztelés", "Havi riport és következő lépések"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/[0.04] p-3">
                    <Check className="h-5 w-5 text-emerald-300" aria-hidden="true" />
                    <span className="font-medium text-neutral-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Fit section ── */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-300">Önellenőrzés</p>
          <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">Neked való a Blummarketing?</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-emerald-500/20 bg-emerald-500/5 p-8">
            <p className="text-xl font-black text-emerald-300 mb-6">Igen, ha…</p>
            <ul className="space-y-4">
              {yesPoints.map((point) => (
                <li key={point} className="flex gap-3 leading-7 text-neutral-300">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] border border-rose-500/20 bg-rose-500/5 p-8">
            <p className="text-xl font-black text-rose-300 mb-6">Nem biztos, ha…</p>
            <ul className="space-y-4">
              {noPoints.map((point) => (
                <li key={point} className="flex gap-3 leading-7 text-neutral-300">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-rose-500" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section id="kapcsolat" className="px-6 pb-10 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-white text-neutral-950 shadow-2xl">
          <div className="grid gap-0 lg:grid-cols-[1fr_0.85fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-600">Kezdjük el</p>
              <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
                Nézzük meg, mit mutatnak a számaid
              </h2>
              <p className="mt-5 text-lg leading-8 text-neutral-700">
                Ha hirdetsz, de nem látod pontosan, mi hoz ügyfelet, érdemes átnézni a rendszert. Megnézzük, mit mérsz, hol vesznek el az érdeklődők, és melyik kampányod hoz valódi eredményt.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:hello@blummarketing.hu?subject=Kamp%C3%A1nyaudit%20-%20Blummarketing"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-7 py-4 font-bold text-white transition hover:bg-neutral-800"
                >
                  Kérek egy kampányauditot
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="mailto:hello@blummarketing.hu"
                  className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-7 py-4 font-bold transition hover:bg-neutral-100"
                >
                  Írok nektek
                </a>
              </div>
            </div>
            <div className="bg-neutral-950 p-8 text-white sm:p-12 lg:p-16">
              <h3 className="text-2xl font-black">Kérj kampányauditot, és nézzük meg:</h3>
              <ul className="mt-6 space-y-4 text-neutral-300">
                {[
                  "melyik Google, Meta vagy TikTok hirdetésed hoz valódi ügyfelet",
                  "hol lehet javítani a megtérülést",
                  "mi az, amit azonnal érdemes javítani",
                  "mire érdemes költeni a következő hónapban",
                ].map((item) => (
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
