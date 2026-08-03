import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Google Cégem beállítása: teljes útmutató vállalkozásoknak",
    description:
      "Mi az a Google Cégem, miért érdemes létrehozni, és hogyan állítsd be teljesen? Lépésről lépésre, gyakorlati tanácsokkal – helyi vállalkozásoknak és szolgáltatóknak.",
    author: { "@type": "Organization", name: "Blummarketing" },
    publisher: { "@type": "Organization", name: "Blummarketing", url: "https://blummarketing.hu" },
    datePublished: "2026-07-15",
    inLanguage: "hu",
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
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
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
function Blockquote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-6 border-l-4 border-rose-500 pl-5 italic text-neutral-300 leading-7">
      {children}
    </blockquote>
  );
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
                <td key={j} className={`px-5 py-3 leading-6 ${j === 0 ? "font-semibold text-neutral-200" : "text-neutral-300"}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function LocalPackVisual() {
  return (
    <div className="my-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
      <p className="text-xs font-black uppercase tracking-[0.15em] text-rose-400 mb-6">Így néz ki a Google keresőben</p>
      {/* Szimulált Google keresősáv */}
      <div className="mb-6 flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.05] px-4 py-3">
        <svg className="h-4 w-4 text-neutral-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="11" cy="11" r="8" strokeWidth="2"/><path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round"/></svg>
        <span className="text-sm text-neutral-300">fodrász Budapest</span>
      </div>
      {/* Local 3-pack */}
      <div className="rounded-xl border border-white/10 bg-neutral-900 overflow-hidden">
        <div className="px-4 py-2 border-b border-white/5">
          <p className="text-[11px] text-neutral-500 font-semibold uppercase tracking-wider">Helyi vállalkozások</p>
        </div>
        {[
          { name: "Bella Fodrászat", rating: "4.9", reviews: "127", status: "Nyitva · Zárás 18:00", dist: "0,3 km" },
          { name: "Hair Studio Budapest", rating: "4.7", reviews: "89", status: "Nyitva · Zárás 20:00", dist: "0,8 km" },
          { name: "Glamour Hair & Beauty", rating: "4.6", reviews: "54", status: "Nyitva · Zárás 17:00", dist: "1,2 km" },
        ].map((biz, i) => (
          <div key={i} className={`flex items-start justify-between gap-4 px-4 py-3 ${i < 2 ? "border-b border-white/5" : ""}`}>
            <div className="flex gap-3 items-start">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-500/10 text-xs font-black text-rose-300">{i + 1}</div>
              <div>
                <p className="font-bold text-white text-sm">{biz.name}</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="text-xs font-bold text-yellow-400">{biz.rating}</span>
                  <span className="text-yellow-400 text-xs">★★★★★</span>
                  <span className="text-xs text-neutral-500">({biz.reviews})</span>
                </div>
                <p className="text-xs text-green-400 mt-0.5">{biz.status}</p>
              </div>
            </div>
            <span className="shrink-0 text-xs text-neutral-500 mt-1">{biz.dist}</span>
          </div>
        ))}
        <div className="px-4 py-2 border-t border-white/5">
          <span className="text-xs text-blue-400 cursor-pointer">Több helyi vállalkozás megjelenítése</span>
        </div>
      </div>
      <p className="mt-4 text-xs text-neutral-500 text-center">Ez az úgynevezett „Local Pack" – a 3 legjobban rangsorolt helyi cégem profil</p>
    </div>
  );
}

function VerifikalasModszerek() {
  const modszerek = [
    {
      icon: "✉️",
      title: "Postai levél",
      desc: "Google egy PIN kódot küld a cím megadásától 5–14 napon belül. Ez a legelterjedtebb módszer.",
      idot: "5–14 nap",
      color: "border-blue-500/30 bg-blue-500/[0.06]",
      labelColor: "text-blue-400",
    },
    {
      icon: "📞",
      title: "Telefonhívás",
      desc: "Google felhív egy rövid PIN kóddal. Nem mindig elérhető – csak bizonyos fiókoknak ajánlja fel.",
      idot: "Azonnal",
      color: "border-green-500/30 bg-green-500/[0.06]",
      labelColor: "text-green-400",
    },
    {
      icon: "📧",
      title: "E-mail",
      desc: "Verificálási link érkezik e-mailben. Akkor érhető el, ha a Google megbízható domainnel rendelkező e-mailt észlel.",
      idot: "Azonnal",
      color: "border-green-500/30 bg-green-500/[0.06]",
      labelColor: "text-green-400",
    },
    {
      icon: "🎬",
      title: "Videó verificálás",
      desc: "Rövid videót kell felvenni az üzlethelyiségről, kintről és belülről. Újabb módszer, több fióknak ajánlja.",
      idot: "1–3 nap",
      color: "border-rose-500/30 bg-rose-500/[0.06]",
      labelColor: "text-rose-400",
    },
    {
      icon: "🔍",
      title: "Instant verificálás",
      desc: "Ha a weboldal már be van kötve a Google Search Console-ba és a domain igazolt, automatikus is lehet.",
      idot: "Azonnal",
      color: "border-purple-500/30 bg-purple-500/[0.06]",
      labelColor: "text-purple-400",
    },
  ];
  return (
    <div className="my-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
      <p className="text-xs font-black uppercase tracking-[0.15em] text-rose-400 mb-6">Verificálási módszerek</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {modszerek.map((m) => (
          <div key={m.title} className={`rounded-xl border p-4 ${m.color}`}>
            <div className="text-2xl mb-2">{m.icon}</div>
            <p className="font-black text-white text-sm mb-1">{m.title}</p>
            <p className="text-xs text-neutral-400 leading-5 mb-2">{m.desc}</p>
            <div className="flex items-center gap-1.5">
              <span className={`text-[10px] font-black uppercase tracking-wider ${m.labelColor}`}>Várakozás: {m.idot}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BeallitasChecklist() {
  const items = [
    { label: "Vállalkozásnév (pontosan, ahogy a való életben)", priority: "kritikus" },
    { label: "Elsődleges kategória (a legjobban illő)", priority: "kritikus" },
    { label: "Másodlagos kategóriák (1–5 db)", priority: "fontos" },
    { label: "Pontos cím (ha fizikai hely)", priority: "kritikus" },
    { label: "Telefonszám (közvetlen, nem automata)", priority: "kritikus" },
    { label: "Weboldal URL", priority: "kritikus" },
    { label: "Nyitvatartás (pontosan, ünnepnapokkal)", priority: "kritikus" },
    { label: "Vállalkozás leírása (750 karakter, kulcsszavakkal)", priority: "fontos" },
    { label: "Alapítás éve", priority: "ajánlott" },
    { label: "Szolgáltatások listája (leírásokkal, árakkal)", priority: "fontos" },
    { label: "Termékek (webshopnál vagy fizikai boltnál)", priority: "ajánlott" },
    { label: "Attribútumok (pl. Wi-Fi, akadálymentesség, parkírozás)", priority: "ajánlott" },
    { label: "Borítókép (1920×1080 px, profi)", priority: "fontos" },
    { label: "Logó (750×750 px)", priority: "fontos" },
    { label: "Külső fotók (legalább 3 db)", priority: "fontos" },
    { label: "Belső fotók (legalább 3 db)", priority: "fontos" },
    { label: "Csapatfotók (opcionális, de bizalomépítő)", priority: "ajánlott" },
    { label: "Google Q&A előre megválaszolva", priority: "ajánlott" },
    { label: "Üzenetküldés bekapcsolva", priority: "ajánlott" },
  ];
  const colors: Record<string, string> = {
    kritikus: "bg-rose-500/10 text-rose-300",
    fontos: "bg-blue-500/10 text-blue-300",
    ajánlott: "bg-neutral-700/60 text-neutral-400",
  };
  return (
    <div className="my-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
      <p className="text-xs font-black uppercase tracking-[0.15em] text-rose-400 mb-2">Teljes beállítási checklist</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {["kritikus", "fontos", "ajánlott"].map((p) => (
          <span key={p} className={`rounded-full px-3 py-1 text-xs font-bold capitalize ${colors[p]}`}>{p}</span>
        ))}
      </div>
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
            <div className="h-4 w-4 shrink-0 rounded border border-white/20" />
            <span className="text-sm text-neutral-300 flex-1">{item.label}</span>
            <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-bold ${colors[item.priority]}`}>{item.priority}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function KepTipusokVisual() {
  const kepek = [
    { tipus: "Borítókép", meret: "1920 × 1080 px", min: "480 × 270 px", format: "JPG / PNG", miert: "Ez az első benyomás – ez jelenik meg a profil tetején" },
    { tipus: "Logó", meret: "750 × 750 px", min: "250 × 250 px", format: "JPG / PNG", miert: "Felismerhető arculat; a Maps-en a pin ikonon is megjelenik" },
    { tipus: "Külső fotók", meret: "min. 720 × 720 px", min: "—", format: "JPG / PNG", miert: "Segít az embereknek megtalálni a helyszínt" },
    { tipus: "Belső fotók", meret: "min. 720 × 720 px", min: "—", format: "JPG / PNG", miert: "Hangulatot közvetít, bizalmat épít" },
    { tipus: "Csapatfotók", meret: "min. 720 × 720 px", min: "—", format: "JPG / PNG", miert: "Személyes hangot ad, bizalmat növel" },
    { tipus: "Videó", meret: "720p+, max. 30 mp", min: "—", format: "MP4", miert: "A Google egyre inkább előnyben részesíti" },
  ];
  return (
    <div className="my-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
      <p className="text-xs font-black uppercase tracking-[0.15em] text-rose-400 mb-6">Képtípusok és ajánlott méretek</p>
      <div className="grid gap-4 sm:grid-cols-2">
        {kepek.map((k) => (
          <div key={k.tipus} className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
            <p className="font-black text-white text-sm mb-1">{k.tipus}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="rounded-full bg-rose-500/10 px-2.5 py-0.5 text-[11px] font-bold text-rose-300">{k.meret}</span>
              <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-[11px] font-bold text-neutral-400">{k.format}</span>
            </div>
            <p className="text-xs text-neutral-500 leading-5">{k.miert}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function VelemenySulyVisual() {
  const szempontok = [
    { label: "Értékelések átlaga (1–5 csillag)", suly: 90, szin: "bg-rose-500" },
    { label: "Vélemények száma", suly: 80, szin: "bg-orange-500" },
    { label: "Vélemények frissessége (mikor volt az utolsó)", suly: 70, szin: "bg-yellow-500" },
    { label: "Tulajdonosi válaszok aránya", suly: 55, szin: "bg-green-500" },
    { label: "Véleményekben lévő kulcsszavak", suly: 45, szin: "bg-blue-500" },
    { label: "Fotók száma a véleményekben", suly: 30, szin: "bg-purple-500" },
  ];
  return (
    <div className="my-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
      <p className="text-xs font-black uppercase tracking-[0.15em] text-rose-400 mb-2">Mit néz a Google az értékeléseknél?</p>
      <p className="text-xs text-neutral-500 mb-6">Relatív súlyozás – nem hivatalos Google adat, iparági tapasztalat alapján</p>
      <div className="space-y-4">
        {szempontok.map((s) => (
          <div key={s.label}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm text-neutral-300">{s.label}</span>
              <span className="text-xs font-bold text-neutral-500">{s.suly}%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-white/[0.06]">
              <div className={`h-2 rounded-full ${s.szin}`} style={{ width: `${s.suly}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PostTipusok() {
  const tipusok = [
    { ikon: "📢", nev: "Frissítés", mire: "Általános hírek, közlemények, változások", gomb: "Nincs kötelező CTA" },
    { ikon: "🎉", nev: "Esemény", mire: "Rendezvények, workshopok, nyílt napok", gomb: "Regisztrálj, Részletek stb." },
    { ikon: "💰", nev: "Ajánlat", mire: "Kedvezmények, akciók, szezonális kampányok", gomb: "Ajánlat igénylése, Rendelj most" },
    { ikon: "🛍️", nev: "Termék", mire: "Kiemelni egy konkrét terméket vagy szolgáltatást", gomb: "Megvásárolom, Tudj meg többet" },
  ];
  return (
    <div className="my-10 grid gap-4 sm:grid-cols-2">
      {tipusok.map((t) => (
        <div key={t.nev} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
          <div className="text-2xl mb-3">{t.ikon}</div>
          <p className="font-black text-white text-sm mb-1">{t.nev}</p>
          <p className="text-xs text-neutral-400 leading-5 mb-2">{t.mire}</p>
          <span className="text-[11px] font-bold text-neutral-500">CTA: {t.gomb}</span>
        </div>
      ))}
    </div>
  );
}

type Props = { backHref?: string; backLabel?: string };

export default function GoogleCegemBeallitasaArticle({
  backHref = "/tudastar/",
  backLabel = "Vissza a Tudástárba",
}: Props) {
  return (
    <article className="min-h-screen bg-neutral-950 text-white antialiased">
      <JsonLd />
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.18),transparent_34%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_32%),linear-gradient(180deg,#0a0a0a_0%,#171717_100%)]" />
        <Navbar />
        <div className="mx-auto max-w-3xl px-6 pb-16 pt-10 lg:px-8">
          <a href={backHref} className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-white transition mb-8">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            {backLabel}
          </a>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Helyi SEO", "Google", "Ingyenes"].map((tag) => (
              <span key={tag} className="rounded-full bg-rose-500/10 px-3 py-1 text-xs font-bold text-rose-300">{tag}</span>
            ))}
          </div>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Google Cégem (Google Business Profile) beállítása: teljes útmutató vállalkozásoknak
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-300">
            Ha van fizikai helyszíned, helyi ügyfélköröd vagy csak azt szeretnéd, hogy az emberek megtaláljanak Google-n, akkor a Google Cégem profil az egyik leghatékonyabb – és teljesen ingyenes – eszközöd. Ez a cikk végigvezet mindenen, amit tudni kell: a létrehozástól a beállításokon át a véleménykezelésig.
          </p>
          <div className="mt-8 flex items-center gap-3 text-sm text-neutral-500">
            <span>2026. július 15.</span>
            <span>·</span>
            <span>22 perc olvasás</span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-10 lg:px-8">

        <H2>Mi az a Google Cégem?</H2>
        <P>
          A <strong className="text-white">Google Cégem</strong> (hivatalos nevén Google Business Profile, régebben Google My Business) egy ingyenes Google szolgáltatás, amely lehetővé teszi, hogy a vállalkozásod megjelenjen a Google keresőben és a Google Maps-en – akkor is, ha nincs saját weboldalad.
        </P>
        <P>
          Ha valaki azt keresi, hogy „fodrász Budapest", „ügyvéd Miskolc" vagy „pizzéria közelemben", a Google legtöbbször nem csak weboldalakat jelenít meg, hanem egy speciális <strong className="text-white">helyi eredménylistát</strong> is – ezt hívják „Local Pack"-nek vagy „3-pack"-nek. Ez a három kiemelten megjelenő helyi vállalkozás profilja. Ez a Google Cégem.
        </P>

        <LocalPackVisual />

        <P>
          A profil tartalmazza a vállalkozás nevét, értékeléseit, nyitvatartását, telefonszámát, fotóit, sőt akár az aktuális ajánlatait is. Mindez megjelenik a kereső oldalán, Maps-en, és mobilon. <strong className="text-white">A potenciális ügyfél sok esetben még a weboldaladra sem kattint</strong> – a döntést a Google Cégem profil alapján hozza meg.
        </P>

        <Blockquote>
          &bdquo;A Google keresések 46%-a helyi szándékú. Az emberek konkrét helyi megoldást keresnek – és a Google Cégem profil az, amivel ez megtalálható.&rdquo;
        </Blockquote>

        <HR />

        <H2>Miért érdemes létrehozni?</H2>
        <P>
          Sokan azt gondolják, hogy a Google Cégem csak étteremnek vagy boltnak való. Ez tévedés. Teljesen mindegy, hogy fodrász, ügyvéd, fogorvos, oktató, könyvelő, nyomda vagy wellness-szolgáltató vagy – ha bárki kereshet téged Google-n, a profil nélkülözhetetlen.
        </P>
        <H3>Az ingyenes megjelenés értéke</H3>
        <P>
          A Local Pack-ben szereplő 3 vállalkozás megjelenése <strong className="text-white">semmibe nem kerül</strong>. Nem kell rá kattintani (vagyis nem kell Google Ads-t futtatni), hogy ott legyél. Persze nem automatikus – a pozíciót a profil minősége, a releváció és a közelség határozza meg –, de a belépési korlát nulla forint.
        </P>
        <H3>Bizalom és első benyomás</H3>
        <P>
          Az emberek az értékelések alapján döntik el, hogy kivel dolgozzanak. Ha neked nincs profilod (vagy üres a profilod), de a konkurensednek 4.8 csillagja van 200 véleménnyel, az ügyfél egyszerűen nem fog felhívni. A Google Cégem profil az online hitelességed alappillére.
        </P>
        <H3>Közvetlen kapcsolat lehetőségei</H3>
        <UL items={[
          "Telefonhívás közvetlenül a profilból – mobilon egy gombnyomás",
          "Útvonaltervezés a Maps-szel – a vásárló megtalálja az üzleted",
          "Időpontfoglalás (bizonyos iparágakban beépítve)",
          "Üzenetküldés – chat a profil felületén belül",
          "Weboldalra kattintás – forgalomat irányít a weblapodra",
        ]} />
        <H3>SEO-hatás: organikus forgalom és tudásdoboz</H3>
        <P>
          Ha valaki a vállalkozásod nevére keres (branded keresés), a Google egy nagy információs panelt jelenít meg jobbra – ezt hívják <strong className="text-white">Knowledge Panel</strong>-nek. Ez a Google Cégem profilod. Ha nincs profilod, ez a hely üresen marad – vagy rosszabb esetben a konkurensed kerül oda.
        </P>
        <P>
          Ráadásul a Google Cégem profil erősen korrelál az organikus rangsorolással is: a Cégem-ben szereplő kulcsszavak, kategóriák és leírás mind befolyásolják, mikor és mire jelenik meg a vállalkozásod.
        </P>

        <Table
          headers={["Ha nincs profilod", "Ha van optimalizált profilod"]}
          rows={[
            ["Nem jelensz meg a Local Pack-ben", "Ott lehetsz az első 3 helyi eredmény között"],
            ["Nincs vélemény – nincs bizalom", "Értékelések, csillagok = azonnali bizalom"],
            ["Nincs közvetlen elérhetőség", "Telefon, üzenet, útvonal egy kattintással"],
            ["Google nem tudja, hol vagy", "Maps, mobilkeresés, hangkeresés mind megtalál"],
            ["Mások veszik el az ügyfeleidet", "Versenyképes maradsz a helyi piacon"],
          ]}
        />

        <HR />

        <H2>Kinek való a Google Cégem?</H2>
        <P>
          A Google három vállalkozástípust különböztet meg, és mindhárom profilt hozhat létre:
        </P>
        <div className="my-8 grid gap-4 sm:grid-cols-3">
          {[
            { ikon: "🏪", cim: "Fizikai bolt / iroda", pl: "Étterem, fodrász, fogorvos, bolt, szépségszalon, bank", infok: "Pontos cím kell, emberek bejöhetnek" },
            { ikon: "🚐", cim: "Kiszállásos szolgáltató", pl: "Villanyszerelő, vízvezetékszerelő, takarítás, szállítás, kertészet", infok: "Nem kell fizikai helyszín, csak a kiszolgált terület" },
            { ikon: "🏠+🚐", cim: "Hibrid", pl: "Étterem kiszállítással, személyi edző saját stúdióval + kiszállással", infok: "Van fizikai helyszín is és kiszolgált terület is" },
          ].map((t) => (
            <div key={t.cim} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-2xl mb-3">{t.ikon}</div>
              <p className="font-black text-white text-sm mb-1">{t.cim}</p>
              <p className="text-xs text-neutral-500 leading-5 mb-2 italic">{t.pl}</p>
              <p className="text-xs text-neutral-400 leading-5">{t.infok}</p>
            </div>
          ))}
        </div>
        <P>
          <strong className="text-white">Tisztán online vállalkozásnak</strong> (pl. webshop ami nem fogad ügyfeleket fizikailag, remote tanácsadó) a Google Cégem kevésbé releváns – bár alapítható, a Maps-megjelenésből kevesebbet profitálsz. Egy influencer, content creator vagy online oktató esetén nem ez a fő csatorna.
        </P>

        <HR />

        <H2>Google Cégem profil létrehozása – lépésről lépésre</H2>

        <H3>1. lépés: Ellenőrizd, nem létezik-e már profil</H3>
        <P>
          Mielőtt létrehoznád, keresd meg a vállalkozás nevét Google-n. Ha már van profil (akár Google generálta automatikusan, akár régebben valaki létrehozta), akkor azt kell <strong className="text-white">igénybe venned</strong> – ne hozz létre újat, mert duplikált profilok rontják a rangsorolást.
        </P>
        <UL items={[
          'Keresd a vállalkozásod nevét a Google-n',
          'Ha megjelenik egy alap profil "Igénybe veszem ezt a vállalkozást" felirattal, kattints arra',
          'Ha nem jelenik meg, menj a business.google.com oldalra',
        ]} />

        <H3>2. lépés: Profil létrehozása</H3>
        <UL items={[
          <span key="1">Menj a <strong className="text-white">business.google.com</strong> oldalra és jelentkezz be Google-fiókkal</span>,
          'Kattints a "Vállalkozás hozzáadása" gombra',
          'Add meg a vállalkozás nevét pontosan úgy, ahogy a való életben szerepel',
          'Válaszd ki az elsődleges kategóriát (erről részletesen alább)',
          'Add meg, hogy van-e fizikai helyszín ahol ügyfeleket fogadsz',
          'Ha van: add meg a pontos címet',
          'Ha kiszállásos szolgáltató vagy: jelöld meg a kiszolgált területeket (városok, kerületek, irányítószámok)',
          'Add meg a telefonszámot és a weboldal URL-jét',
        ]} />

        <H3>3. lépés: Verificálás</H3>
        <P>
          A Google megköveteli, hogy igazold: valóban te vagy a vállalkozás tulajdonosa. Ez a verificálási folyamat. Az elérhető módszerek a fióktól és a helyszíntől függnek.
        </P>

        <VerifikalasModszerek />

        <P>
          <strong className="text-white">Fontos:</strong> A profil addig nem jelenik meg teljes értékűen a keresőben, amíg nincs verificálva. A verificálás előtt is tudod tölteni az adatokat – ez még jobb, mert utána azonnal teljes profilként aktiválódik.
        </P>
        <Blockquote>
          Tipp: A postai leveles verificálásnál NE változtasd meg a címet, amíg nem érkezik meg a levél – különben a Google újraindítja a folyamatot.
        </Blockquote>

        <HR />

        <H2>Mit kell feltétlenül beállítani? (Teljes checklist)</H2>
        <P>
          Sokan létrehozzák a profilt, megadják az alapadatokat, és ott hagyják. Ez nagy hiba. Egy teljesen kitöltött, aktívan kezelt profil messze jobb pozíciókat és több hívást eredményez. Íme minden, amit be kell állítani.
        </P>

        <BeallitasChecklist />

        <H3>Kategória – a legfontosabb beállítás</H3>
        <P>
          Az <strong className="text-white">elsődleges kategória</strong> határozza meg leginkább, hogy milyen keresésekre jelensz meg. Ezt a legnehezebb utólag megváltoztatni (kihat a rangsorolásra), ezért érdemes jól átgondolni.
        </P>
        <UL items={[
          'Legyen a lehető legspecifikusabb: ne csak "Étterem", hanem "Pizza étterem" vagy "Magyar étterem"',
          'Ne a legszélesebb kategóriát válaszd, hanem amelyik leginkább lefedi a fő bevételszerzési területedet',
          'Másodlagos kategóriákkal (akár 5-10 db) bővítheted a megjelenési kulcsszóhalmazt',
          'Például: egy fodrász lehet "Hajvágó szalon" (elsődleges) + "Szépségszalon" + "Hajfestés" (másodlagos)',
        ]} />

        <H3>Vállalkozás leírása (750 karakter)</H3>
        <P>
          Ez az a rész, ahol elmondhatsz mindent a vállalkozásodról. <strong className="text-white">Nem erre szolgál arra, hogy reklámozzál</strong> (pl. "mi vagyunk a legjobb, hívj most!") – hanem hogy tényszerűen bemutasd, mivel foglalkozol.
        </P>
        <UL items={[
          'Helyezd el a fő kulcsszavakat természetesen (pl. "fodrász XIV. kerület", "hajfestés Budapest")',
          'Írd le a specializációidat és megközelítésedet',
          'Adj meg gyakorlati információkat: mikor voltál alapítva, mire vagy büszke, milyen típusú ügyfeleket szolgálsz ki',
          'Ne használj telefonszámot, weboldalt, mindenféle linkeket – a Google törli a profilod',
          'Kerüld az ALL CAPS írást, a felesleges felkiáltójeleket',
        ]} />

        <HR />

        <H2>Képek és videók – a bizalom vizuális alapjai</H2>
        <P>
          A Google saját adatai szerint azok a vállalkozások, amelyek <strong className="text-white">legalább 100 fotóval</strong> rendelkeznek, 520%-kal több hívást és 2717%-kal több útvonaltervezést kapnak – a fotók nélküli profilokhoz képest.
        </P>
        <P>
          Ezek a számok extrémnek tűnnek, de az arányok valóban drasztikusak: a képek az egyik legerősebb rangsorolási és konverziós tényező a Google Cégem esetén.
        </P>

        <KepTipusokVisual />

        <H3>Képminőség – amit kerülj</H3>
        <UL items={[
          'Elmosódott, rosszul megvilágított fotók',
          'Telefonnal készített rossz szögű, rendetlen helyszíni képek',
          'Vízjellel, szöveggel teli stock fotók',
          'Olyan képek, amelyek nem kapcsolódnak a vállalkozáshoz',
          'Logó helyett egy kisméretű képernyőkép',
        ]} />
        <H3>Amit csináld helyette</H3>
        <UL items={[
          'Professzionális vagy legalább jó fényviszonyok között készített képek',
          'Valós helyszín, valós csapat, valós termék – ne stock fotó',
          'Frissítsd a képeket rendszeresen – a Google értékeli az aktivitást',
          'Ügyfelektől kapott képek (amit ők töltenek fel) is erősítenek – de nem te irányítod ezeket',
        ]} />

        <HR />

        <H2>Google Posztok – rendszeres aktivitás a profilon</H2>
        <P>
          A Google Business Profile lehetőséget ad rövid posztok közzétételére közvetlenül a keresési profilodban. Ezek a posztok <strong className="text-white">7 napig aktívak</strong> (esemény és ajánlat típusúak a megadott dátumig), utána eltűnnek a nézetből – bár a Google látja a történelmet.
        </P>

        <PostTipusok />

        <H3>Miért éri meg rendszeresen posztolni?</H3>
        <UL items={[
          'A Google aktivitási jelzőként értelmezi – rendszeres posztolás = élő vállalkozás',
          'A posztok megjelennek a keresési eredményen és a Maps profilon is',
          'Közvetlen CTA-val irányíthatod az ügyfeleket (pl. "Foglalj most" → időpontfoglalás oldal)',
          'Értékes helyet foglalsz el a keresőben hirdetési kiadás nélkül',
          'Promóciós posztokkal drive-olhatod az aktuális akcióidat',
        ]} />
        <P>
          Ajánlott frekvencia: <strong className="text-white">hetente 1–2 poszt</strong>. Ez nem nagy terhelés, de folyamatosan aktívan tartja a profilod.
        </P>

        <HR />

        <H2>Vélemények – a Google Cégem legnagyobb fegyvere</H2>
        <P>
          Az értékelések talán a legfontosabb tényező: közvetlenül befolyásolják a rangsorolást, az átkattintási arányt és a konverziót. Egy 4.2 csillagos profil sokkal kevesebb hívást kap, mint egy 4.8 csillagos – azonos pozícióban is.
        </P>

        <VelemenySulyVisual />

        <H3>Hogyan kérj véleményt – hatékonyan</H3>
        <P>
          A vélemények természetesen nem jönnek maguktól. Az elégedett ügyfelek <strong className="text-white">ritkán gondolnak arra, hogy ír janak</strong> – a frusztráltak viszont sokkal motiváltabbak. Ezért aktívan kell kérni.
        </P>
        <UL items={[
          <span key="1"><strong className="text-white">Direkt link:</strong> A Google Business Profile dashboardon generálhatsz egy rövid linket, ami egyenesen a vélemény írás ablakot nyitja meg. Ezt küldd el e-mailben, WhatsApp-on, számla mellé stb.</span>,
          <span key="2"><strong className="text-white">Időzítés:</strong> Kérd a véleményt közvetlenül a sikeres munka elvégzése után – ekkor a legelégedettebb az ügyfél</span>,
          <span key="3"><strong className="text-white">Szemtől szembe kérés:</strong> Ha személyesen találkoztok, mondd el: "Ha elégedett volt, nagyon örülnék egy Google értékelésnek – küldök egy linket"</span>,
          <span key="4"><strong className="text-white">QR kód:</strong> Az üzletben, számlán, névjegykártyán – QR kód egyenesen a véleményíráshoz</span>,
          'Ne kérj tömeges véleményeket egyszerre (pl. e-mail blast az összes régi ügyfelnek) – a Google algoritmus gyanúsnak találja és törölheti ezeket',
          'Soha ne vásárolj véleményeket és ne kérj a saját alkalmazottaidtól',
        ]} />

        <H3>Minden véleményre válaszolj</H3>
        <P>
          Nemcsak a negatív véleményekre kell válaszolni – a pozitívakra is. Ez többet jelent, mint gondolnád:
        </P>
        <UL items={[
          'A Google figyelembe veszi a válaszadási aktivitást a rangsorolásnál',
          'A potenciális ügyfelek <em>olvassák a válaszokat</em> – ez az ő megítélésüket is befolyásolja',
          'Egy személyes, specifikus köszönet (nem sablon) sokkal hatásosabb, mint a "Köszönöm az értékelést!"',
          'Ha kulcsszót is beleírsz a válaszba természetesen, az kis SEO előnyt hozhat',
        ]} />

        <H3>Negatív vélemény – hogyan kezeld?</H3>
        <P>
          Soha ne hagyd válasz nélkül a negatív véleményt, és soha ne reagálj érzelmileg vagy agresszívan. A többi ügyfél látja a válaszodat – ez sokszor fontosabb, mint maga a negatív vélemény.
        </P>
        <div className="my-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 space-y-4">
          <p className="text-xs font-black uppercase tracking-[0.15em] text-rose-400 mb-4">Negatív vélemény kezelési sablon</p>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <p className="text-xs font-bold text-neutral-500 mb-2">1. Köszönd meg és ismerd el</p>
            <p className="text-sm text-neutral-300 leading-6 italic">&bdquo;Köszönjük, hogy megosztotta tapasztalatát. Sajnálattal olvassuk, hogy nem sikerült teljes mértékben megfelelni az elvárásainak.&rdquo;</p>
          </div>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <p className="text-xs font-bold text-neutral-500 mb-2">2. Ha jogos a kritika, ismerdd el és ajánlj megoldást</p>
            <p className="text-sm text-neutral-300 leading-6 italic">&bdquo;A jelzett problémát komolyan vesszük és szeretnénk rendezni. Kérjük, keressen bennünket közvetlenül a [telefonszám/e-mail] elérhetőségen.&rdquo;</p>
          </div>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <p className="text-xs font-bold text-neutral-500 mb-2">3. Ha alaptalan, udvariasan helyesbíts</p>
            <p className="text-sm text-neutral-300 leading-6 italic">&bdquo;A rendszereink alapján nem találunk ilyen nevű ügyfelet a megjelölt időszakban. Ha mégis nálunk járt, kérjük vegye fel velünk a kapcsolatot, hogy kivizsgálhassuk.&rdquo;</p>
          </div>
          <p className="text-xs text-neutral-500">Ha egyértelműen hamis vagy jogsértő a vélemény, jelölheted „Nem megfelelőként" a Google-nek – de a moderáció lassú és nem garantált.</p>
        </div>

        <HR />

        <H2>Google Kérdések és válaszok (Q&A)</H2>
        <P>
          A profilodban bárki – beleértve a látogatókat is – kérdéseket tehet fel. Ha nem figyelel rá, mások is megválaszolhatják ezeket (akár helytelenül). Érdemes <strong className="text-white">te magad feltenni a leggyakoribb kérdéseket</strong>, és te magad megválaszolni őket.
        </P>
        <UL items={[
          '"Van-e parkolási lehetőség?" → "Igen, az épület mögött ingyenes parkoló található."',
          '"Foglalhatok-e online időpontot?" → "Igen, weboldalunkon és telefonon is foglalható."',
          '"Elfogadnak-e bankkártyát?" → "Igen, elfogadjuk az összes főbb bankkártyát és Apple Payt."',
          '"Akadálymentessel az üzlet?" → "Igen, lifttel és rámpa megközelítéssel is rendelkezünk."',
        ]} />
        <P>
          Ez a rész nem látványos, de megvédi a profilod attól, hogy mások (esetleg téves) válaszokat adjanak, és hasznos információkat nyújt az érdeklődőknek anélkül, hogy felhívnának.
        </P>

        <HR />

        <H2>Statisztikák és Insights</H2>
        <P>
          A Google Business Profile dashboardon részletes statisztikákat láthatsz a profil teljesítményéről. Ezek segítenek megérteni, honnan jönnek az ügyfelek és mit tesznek.
        </P>
        <Table
          headers={["Mutató", "Mit jelent", "Mire figyeld"]}
          rows={[
            ["Keresések száma", "Hányszor jelent meg a profilod keresési eredményben", "Trendek – nő vagy csökken?"],
            ["Megtekintések", "Hányszor látták a profilt Maps-en és Search-ön", "Maps vs. Search arány"],
            ["Interakciók", "Kattintások: telefon, weboldal, útvonal, üzenet", "Melyik CTA működik?"],
            ["Telefonhívások", "Hányszor hívtak közvetlenül a profilból", "Napi/heti trendek"],
            ["Útvonaltervezések", "Hányszor kértek irányt az üzlethelyiséghez", "Milyen területről érkeznek"],
            ["Képek megtekintése", "Mennyire nézik a fotóidat vs. a konkurensét", "Kell-e több/jobb kép?"],
          ]}
        />
        <P>
          A statisztikák <strong className="text-white">90 napra visszamenőleg</strong> elérhetők részletesen, és trendként is megjeleníthetők. Ha látod, hogy a telefonhívások csökkeni kezdtek, az lehet szezonális – de lehet, hogy jobb a konkurens profil lett.
        </P>

        <HR />

        <H2>Google Cégem és SEO kapcsolata</H2>
        <P>
          A helyi SEO és a Google Cégem szorosan összefügg. A Google a Local Pack rangsorolásánál három fő tényezőt vizsgál:
        </P>
        <div className="my-8 grid gap-4 sm:grid-cols-3">
          {[
            { ikon: "📍", cim: "Közelség", leiras: "Mennyire van közel a vállalkozás a kereső fizikai helyzetéhez (különösen mobilon és 'közelemben' kereséseknél)" },
            { ikon: "⭐", cim: "Kiemelkedőség", leiras: "Mennyire ismert, megbízható a vállalkozás: vélemények, külső linkek, egyéb online jelenlét (pl. Facebook, weboldal erőssége)" },
            { ikon: "🎯", cim: "Relevancia", leiras: "Mennyire illeszkedik a profil tartalmának kulcsszava a keresési szándékhoz: kategória, leírás, véleményekben lévő szavak" },
          ].map((t) => (
            <div key={t.cim} className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center">
              <div className="text-3xl mb-3">{t.ikon}</div>
              <p className="font-black text-white text-sm mb-2">{t.cim}</p>
              <p className="text-xs text-neutral-400 leading-5">{t.leiras}</p>
            </div>
          ))}
        </div>
        <H3>NAP konzisztencia – amit sokan figyelmen kívül hagynak</H3>
        <P>
          A <strong className="text-white">NAP</strong> (Name, Address, Phone) az egyik alapelve a helyi SEO-nak. A vállalkozásod nevének, címének és telefonszámának <strong className="text-white">pontosan ugyanúgy kell szerepelnie</strong> minden online felületen: Google Cégem, weboldal, Facebook oldal, cégjegyzékek, iparági katalógusok.
        </P>
        <UL items={[
          'Ha a weboldaladon "Bt.", a Google Cégemedben "Betéti társaság" van – ez eltérés, amit a Google érzékel',
          'Régi telefonszám a Fodrászosban, új szám a Google Cégemedben – zavar a rangsorolásban',
          'Régi cím egy régi katalógusban – megzavarja a Google-t, hogy hol vagy valójában',
          'Ellenőrizd: Google Maps, Facebook, Linkedin, iparági könyvtárak, weboldal lábléc – mindenhol ugyanaz',
        ]} />

        <HR />

        <H2>A leggyakoribb hibák</H2>
        <P>
          A Google Cégem profilt könnyű rosszul kezelni. Íme a leggyakoribb hibák, amelyeket érdemes elkerülni:
        </P>
        <div className="my-8 space-y-3">
          {[
            { hiba: "Kulcsszavak berakása a vállalkozásnévbe", pl: 'pl. "Bella Fodrászat | Hajfestés | Balayage Budapest" – csak a valódi neve legyen!', sulyo: "Fiókfelfüggesztést okozhat" },
            { hiba: "Hamis cím megadása", pl: "Lakáscímet megadni hogy közelebbre kerülj a városközponthoz", sulyo: "Fiókfelfüggesztés + eltávolítás" },
            { hiba: "Nem válaszolni az üzenetekre", pl: "Ha be van kapcsolva az üzenetküldés, de 24 óránál tovább nem válaszolsz, a Google letiltja", sulyo: "Elveszett lead, rontott rangsorolás" },
            { hiba: "Nyitvatartás nem frissítése", pl: "Ünnepnapokon, szabadság alatt, különleges napokon", sulyo: "Negatív vélemény: 'Zárva volt holott nyitvaként volt jelölve'" },
            { hiba: "Profil létrehozása és elfelejtése", pl: "Nincs fotó, nincs poszt, nincs válasz a véleményekre", sulyo: "Gyenge rangsorolás, alacsony konverzió" },
            { hiba: "Nem verificált profil", pl: "Létrehozod de nem fejezed be a verificálást", sulyo: "Nem jelenik meg a keresőben" },
            { hiba: "Duplikált profilok", pl: "Több profil ugyanarra a helyszínre", sulyo: "Mindkét profil rangsorolása romlik" },
          ].map((e, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex gap-3 items-start">
                <span className="mt-0.5 text-base shrink-0">❌</span>
                <div className="flex-1">
                  <p className="font-bold text-white text-sm">{e.hiba}</p>
                  <p className="text-xs text-neutral-400 leading-5 mt-1 italic">{e.pl}</p>
                </div>
                <span className="shrink-0 rounded-full bg-rose-500/10 px-2.5 py-0.5 text-[11px] font-bold text-rose-300">{e.sulyo}</span>
              </div>
            </div>
          ))}
        </div>

        <HR />

        <H2>Összefoglalás – mit tegyél holnap?</H2>
        <P>
          A Google Cégem profil nem egy egyszeri feladat – <strong className="text-white">egy folyamatosan gondozandó csatorna</strong>. De a kezdeti befektetés (néhány óra beállítás) és a heti pár perces karbantartás megtérülése rendkívüli lehet: ingyenes forgalom, direkthívások, organikus bizalomépítés.
        </P>
        <div className="my-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <p className="text-xs font-black uppercase tracking-[0.15em] text-rose-400 mb-6">Azonnali cselekvési terv</p>
          <div className="space-y-3">
            {[
              { sorrend: "1.", feladat: "Keresd meg, létezik-e már profil a vállalkozásodhoz – igénybe vedd, ha igen" },
              { sorrend: "2.", feladat: "Hozd létre (business.google.com) és fejesd be a verificálást" },
              { sorrend: "3.", feladat: "Töltsd ki az összes alapadatot: kategória, leírás, nyitvatartás, elérhetőségek" },
              { sorrend: "4.", feladat: "Tölts fel legalább 10 profi képet (borítókép, logó, külső, belső)" },
              { sorrend: "5.", feladat: "Add meg a szolgáltatásaidat leírással és árakkal" },
              { sorrend: "6.", feladat: "Tedd ki a Q&A szekcióba a 3–5 leggyakoribb kérdést előre megválaszolva" },
              { sorrend: "7.", feladat: "Kérj véleményt az első 10 elégedett ügyféltől (direkt link segítségével)" },
              { sorrend: "8.", feladat: "Állíts be heti emlékeztetőt: 1 poszt, minden véleményre válasz" },
            ].map((l) => (
              <div key={l.sorrend} className="flex gap-3 items-center">
                <span className="shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-rose-500/10 text-xs font-black text-rose-300">{l.sorrend}</span>
                <span className="text-sm text-neutral-300 leading-6">{l.feladat}</span>
              </div>
            ))}
          </div>
        </div>
        <Blockquote>
          A Google Cégem az egyik legolcsóbb és leggyorsabban megtérülő marketingtevékenység egy helyi vállalkozás számára. Ha eddig halasztottad – ma érdemes elkezdeni.
        </Blockquote>
      </div>

      <Footer />
    </article>
  );
}
