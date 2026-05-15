import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Check, X } from "lucide-react";
import { ogImage } from "@/lib/og";

export const metadata = {
  title: "Weboldal készítés | Blummarketing",
  description:
    "WordPress weboldalak, webshopok és egyedi fejlesztésű webes megoldások vállalkozásoknak — stratégiával, konverziós gondolkodással és mérhető üzleti céllal.",
  openGraph: {
    title: "Weboldal készítés | Blummarketing",
    description:
      "Nem sablonos névjegykártyákat készítünk. Olyan weboldalakat, amelyek üzleti eredményt hoznak.",
    type: "website",
    locale: "hu_HU",
    siteName: "Blummarketing",
    images: ogImage,
  },
  alternates: { canonical: "/szolgaltatasok/weboldal-keszites/" },
};

const included = [
  "Weboldal stratégia",
  "Oldalszerkezet megtervezése",
  "Sales fókuszú szövegírás",
  "UX/UI tervezés",
  "WordPress vagy egyedi fejlesztés",
  "Mobiloptimalizálás",
  "Sebességoptimalizálás",
  "Alap SEO beállítások",
  "Analitika és mérőkódok bekötése",
  "Kapcsolatfelvételi vagy ajánlatkérő űrlapok",
  "Webshop funkciók",
  "Fizetési és szállítási megoldások bekötése",
  "Átadás előtti tesztelés",
  "Indulás utáni technikai támogatás",
];

const valuePoints = [
  {
    title: "Konverziós gondolkodás",
    text: "Nem csak azt nézzük, hogyan néz ki az oldal, hanem azt is, hogyan vezeti a látogatót a döntés felé.",
  },
  {
    title: "Profi szövegezés",
    text: "A jó dizájn figyelmet szerez. A jó szöveg bizalmat épít és cselekvésre ösztönöz.",
  },
  {
    title: "Stabil technikai alap",
    text: "WordPress, WooCommerce vagy egyedi fejlesztés — mindig azt választjuk, ami a célodhoz a legjobb.",
  },
  {
    title: "Mobilra optimalizált működés",
    text: "A látogatók jelentős része mobilról érkezik, ezért az oldalnak ott is gyorsnak, szépnek és könnyen használhatónak kell lennie.",
  },
  {
    title: "Hirdetésbarát struktúra",
    text: "Ha Meta, Google vagy TikTok kampányokat futtatsz, az oldalnak alkalmasnak kell lennie a forgalom fogadására és mérésére.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Konzultáció és üzleti célok",
    text: "Megértjük, mit szeretnél eladni, kinek szól az ajánlatod, hol tart most a vállalkozásod, és milyen szerepet kell betöltenie az új weboldalnak.",
  },
  {
    step: "02",
    title: "Stratégia és oldalstruktúra",
    text: "Felépítjük az oldal logikáját: milyen szekciókra, aloldalakra, CTA-kra és bizalomépítő elemekre van szükség ahhoz, hogy a látogatóból érdeklődő vagy vásárló legyen.",
  },
  {
    step: "03",
    title: "Szövegírás és vizuális irány",
    text: "Megírjuk vagy finomhangoljuk a weboldal szövegét, majd kialakítjuk azt a vizuális irányt, amely prémium módon mutatja be a márkádat.",
  },
  {
    step: "04",
    title: "Fejlesztés",
    text: "Elkészítjük a weboldalt WordPress, WooCommerce vagy egyedi fejlesztés alapján. Közben figyelünk a sebességre, mobilos működésre, átláthatóságra és bővíthetőségre.",
  },
  {
    step: "05",
    title: "Tesztelés és indulás",
    text: "Átnézzük az oldalt technikai, tartalmi és felhasználói szempontból. Beállítjuk a szükséges mérőkódokat, majd élesítjük az oldalt.",
  },
  {
    step: "06",
    title: "További optimalizálás",
    text: "Az indulás után is lehetőség van fejlesztésre, kampányoldalakra, új aloldalakra, SEO bővítésre vagy hirdetési kampányok indítására.",
  },
];

const packages = [
  {
    name: "Web Start",
    price: "990 000 Ft-tól",
    desc: "Belépő szintű, de profi üzleti WordPress weboldal szolgáltatóknak és kisebb vállalkozásoknak.",
    items: [
      "WordPress alapú weboldal",
      "Egyedi struktúra",
      "Modern megjelenés",
      "Mobiloptimalizálás",
      "Alap SEO beállítások",
      "Kapcsolatfelvételi űrlap",
      "Analitika bekötés",
      "Átadás előtti tesztelés",
    ],
    ideal: "Szeretnél egy megbízható, profi weboldalt, ami végre méltó szinten mutatja be a vállalkozásod.",
  },
  {
    name: "Sales Pro",
    price: "1 490 000 Ft-tól",
    desc: "Konverzióra tervezett sales oldal vagy szolgáltatói weboldal azoknak, akik hirdetésekből, ajánlatkérésekből vagy kampányokból szeretnének eredményt.",
    items: [
      "Sales stratégia",
      "Oldalstruktúra tervezés",
      "Értékesítési szövegírás",
      "UX/UI tervezés",
      "WordPress vagy egyedi alap",
      "Mobiloptimalizálás",
      "SEO alapozás",
      "Mérőkódok bekötése",
      "Ajánlatkérő vagy jelentkezési folyamat",
      "Konverziós elemek kialakítása",
    ],
    ideal: "Nem csak jelen lenni szeretnél online, hanem ügyfeleket szerezni.",
    highlight: true,
  },
  {
    name: "Webshop Growth",
    price: "1 990 000 Ft-tól",
    desc: "Professzionális webshop azoknak, akik nem csak listázni akarják a termékeket, hanem tudatosan értékesíteni.",
    items: [
      "WooCommerce webshop",
      "Termékoldal struktúra",
      "Kategóriaoldalak",
      "Kosár és pénztár beállítás",
      "Fizetési megoldások integrálása",
      "Szállítási módok beállítása",
      "Alap SEO",
      "Mobiloptimalizálás",
      "Analitika bekötés",
      "Vásárlói útvonal optimalizálása",
    ],
    ideal: "Komolyabban gondolod az online értékesítést, és olyan webshopot szeretnél, amely skálázható alapokra épül.",
  },
  {
    name: "Custom Build",
    price: "3 500 000 Ft-tól",
    desc: "Egyedi fejlesztésű weboldal, webshop vagy webes rendszer komplexebb igényekre.",
    items: [
      "Egyedi frontend fejlesztés",
      "Egyedi backend fejlesztés",
      "Adminfelület",
      "API integrációk",
      "CRM kapcsolat",
      "Foglalási rendszer",
      "Kalkulátor",
      "Ügyfélportál",
      "Többnyelvű működés",
      "Skálázható technikai háttér",
    ],
    ideal: "Nem egy kész rendszer korlátaihoz szeretnél alkalmazkodni, hanem egy olyan megoldást akarsz, ami pontosan a vállalkozásod működését támogatja.",
  },
];

const faqs = [
  {
    q: "WordPress vagy egyedi fejlesztés legyen?",
    a: "Ez az üzleti céltól függ. Ha gyorsan kezelhető, rugalmas céges oldalra vagy kisebb webshopra van szükséged, a WordPress jó választás lehet. Ha speciális funkciók, egyedi logika vagy komolyabb integrációk kellenek, akkor az egyedi fejlesztés lehet a jobb megoldás.",
  },
  {
    q: "Miért kerülhet egy weboldal több mint 1 millió forintba?",
    a: "Mert nem csak technikai kivitelezésről van szó. Egy profi weboldalnál stratégia, szövegírás, UX, dizájn, fejlesztés, mobiloptimalizálás, SEO alapozás, mérés és tesztelés is történik. Ezek együtt adják azt az értéket, amitől az oldal üzletileg is működni tud.",
  },
  {
    q: "Benne van a szövegírás is?",
    a: "A választott csomagtól függően igen. A sales fókuszú csomagoknál kifejezetten ajánlott, hogy a szöveget is mi készítsük vagy legalább stratégiai szinten átdolgozzuk, mert a konverzió nagy része a megfelelő üzeneteken múlik.",
  },
  {
    q: "Webshopot is készítetek?",
    a: "Igen. Készítünk WooCommerce alapú webshopokat és egyedi fejlesztésű webáruházakat is. A választás attól függ, mekkora a termékkínálat, milyen fizetési és szállítási folyamatokra van szükség, illetve mennyire komplex a vásárlói útvonal.",
  },
  {
    q: "Később lehet bővíteni az oldalt?",
    a: "Igen. A weboldalakat úgy építjük, hogy később bővíthetők legyenek új aloldalakkal, kampányoldalakkal, bloggal, webshop funkciókkal vagy egyedi fejlesztésekkel.",
  },
  {
    q: "Hirdetésekhez is jó lesz az oldal?",
    a: "Igen, kifejezetten figyelünk arra, hogy az oldal alkalmas legyen kampányforgalom fogadására. Beállíthatók mérőkódok, konverziós események, landing oldalak és ajánlatkérő folyamatok is.",
  },
];

const yesPoints = [
  "Szolgáltató vállalkozásként több ajánlatkérést szeretnél",
  "Prémiumabb megjelenést akarsz",
  "Hirdetéseket futtatsz vagy tervezel futtatni",
  "A jelenlegi oldalad már nem képviseli jól a cégedet",
  "Új terméket vagy szolgáltatást vezetsz be",
  "Webshopot indítanál",
  "Skálázhatóbb online rendszert szeretnél",
  "Nem csak kivitelezőt, hanem gondolkodó partnert keresel",
];

const noPoints = [
  "Csak a lehető legolcsóbb weboldalt keresed",
  "Nincs szükséged stratégiai gondolkodásra",
  "Elég egy alap sablonoldal",
  "Nem fontos, hogy az oldal üzleti eredményt hozzon",
  "Nem szeretnél időt szánni az egyeztetésre és az ajánlat pontosítására",
];

export default function WeboldalKeszitesPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white antialiased">

      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.18),transparent_34%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_32%),linear-gradient(180deg,#0a0a0a_0%,#171717_100%)]" />
        <Navbar />
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-14 lg:px-8">
          <a href="/szolgaltatasok/" className="mb-6 inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition">
            ← Vissza a szolgáltatásokhoz
          </a>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-300">Weboldal készítés</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight sm:text-6xl">
            Weboldal, ami nem csak jól néz ki — hanem ügyfeleket, ajánlatkéréseket és bevételt hoz.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
            Nem sablonos „online névjegykártyákat" készítünk. Olyan üzleti weboldalakat, landing oldalakat, WordPress oldalakat, webshopokat és egyedi fejlesztéseket építünk, amelyek mögött stratégia, konverziós logika és mérhető üzleti cél van.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-neutral-400">
            Legyen szó egy gyorsan skálázható WordPress oldalról, egy komolyabb WooCommerce webshopról, vagy teljesen egyedi fejlesztésű webes rendszerről — nálunk a cél ugyanaz: a weboldalad dolgozzon helyetted.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:hello@blummarketing.hu?subject=Ajánlatkérés – weboldal készítés"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-bold text-neutral-950 shadow-2xl transition hover:bg-neutral-200"
            >
              Kérek ajánlatot weboldalra
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="#csomagok"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur transition hover:bg-white/10"
            >
              Megnézem a lehetőségeket
            </a>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="bg-white py-20 text-neutral-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-600">Miért számít</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                A weboldalad sokszor az első benyomás rólad.
              </h2>
              <p className="mt-5 text-lg leading-8 text-neutral-600">
                Ha lassú, elavult, zavaros vagy nem derül ki belőle egyértelműen, miért téged válasszanak, akkor nem csak látogatókat veszítesz — hanem pénzt is.
              </p>
              <p className="mt-4 text-base leading-8 text-neutral-500">
                Mi olyan oldalakat készítünk, amelyek egyszerre profin néznek ki, gyorsan betöltődnek, mobilon is tökéletesen működnek, érthetően kommunikálják az ajánlatod, keresőbarát alapokra épülnek és konverzióra vannak tervezve.
              </p>
              <p className="mt-6 text-lg font-black text-neutral-950">Nem csak fejlesztünk. Üzleti szempontból gondolkodunk.</p>
            </div>
            <div className="space-y-4">
              {[
                "profin néznek ki",
                "gyorsan betöltődnek",
                "mobilon is tökéletesen működnek",
                "érthetően kommunikálják az ajánlatod",
                "keresőbarát alapokra épülnek",
                "konverzióra vannak tervezve",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4">
                  <Check className="h-5 w-5 shrink-0 text-emerald-600" aria-hidden="true" />
                  <p className="font-semibold text-neutral-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Service types ── */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-rose-400 mb-2">Szolgáltatások</p>
        <h2 className="text-3xl font-black mb-12">Milyen weboldalakat készítünk?</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "WordPress weboldal készítés",
              desc: "Gyors, rugalmas és könnyen kezelhető megoldás vállalkozásoknak.",
              body: "WordPress weboldalt ajánlunk akkor, ha szeretnél egy profi céges oldalt, szolgáltatói weboldalt, blogot, landing oldalt vagy bemutatkozó oldalt, amit később te is könnyen tudsz kezelni. Ideális választás, ha fontos a gyors indulás, a jó ár-érték arány és az egyszerű bővíthetőség.",
              when: ["Céges bemutatkozó oldalhoz", "Szolgáltatói weboldalhoz", "Landing oldalhoz", "Bloggal kiegészített weboldalhoz", "Kisebb értékesítési oldalakhoz", "Gyorsan induló kampányokhoz"],
            },
            {
              title: "Egyedi weboldal fejlesztés",
              desc: "Amikor a sablon már kevés, és üzletileg komolyabb rendszerre van szükség.",
              body: "Egyedi fejlesztést akkor készítünk, ha a projekt speciális logikát, egyedi dizájnt, komplex funkciókat, külső rendszerekkel való integrációt vagy nagyobb skálázhatóságot igényel. Ilyenkor nem a kész sablonhoz igazítjuk a vállalkozásodat, hanem a weboldalt építjük az üzleti működésed köré.",
              when: ["Komplex szolgáltatások bemutatásához", "Egyedi kalkulátorokhoz", "Foglalási rendszerekhez", "Ügyfélportálokhoz", "CRM vagy más rendszerintegrációkhoz", "Prémium márkák digitális jelenlétéhez"],
            },
            {
              title: "Webshop készítés",
              desc: "Webshop, ami nem csak termékeket listáz, hanem vásárlásra vezet.",
              body: "Egy webshopnál nem elég, hogy működik a kosár és a fizetés. Fontos, hogy a vásárló könnyen eligazodjon, gyorsan megtalálja, amit keres, bizalmat kapjon, és minél kevesebb akadállyal jusson el a rendelésig. Készítünk WordPress + WooCommerce alapú webshopokat, valamint egyedi fejlesztésű webáruházakat is.",
              when: ["Új webshop indításához", "Meglévő webshop újratervezéséhez", "Prémium termékek értékesítéséhez", "Kampányalapú értékesítéshez", "Több termékkategóriás webáruházhoz", "Egyedi rendelési vagy ajánlatkérési folyamatokhoz"],
            },
          ].map((type) => (
            <div key={type.title} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 flex flex-col gap-5">
              <div>
                <h3 className="text-xl font-black mb-2">{type.title}</h3>
                <p className="text-sm font-bold text-rose-300 mb-4">{type.desc}</p>
                <p className="text-sm leading-7 text-neutral-400">{type.body}</p>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-neutral-500 mb-3">Mikor ajánlott</p>
                <ul className="space-y-2">
                  {type.when.map((w) => (
                    <li key={w} className="flex items-start gap-2 text-sm text-neutral-300">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Strategy section ── */}
      <section className="bg-neutral-900 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-rose-400 mb-2">Miért nem &ldquo;csak weboldalt&rdquo; kapsz</p>
              <h2 className="text-3xl font-black mb-5">Stratégia nélkül a szép weboldal is kevés</h2>
              <p className="text-neutral-400 leading-8 mb-6">
                Sokan úgy készítenek weboldalt, hogy először jön a dizájn, aztán valahogy rákerül a szöveg. Mi fordítva gondolkodunk.
              </p>
              <p className="text-neutral-300 leading-8">
                Ettől lesz a weboldal nem csak szép, hanem üzletileg is erős.
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-neutral-400 mb-5">Először megértjük:</p>
              <ul className="space-y-3">
                {[
                  "Mit adsz el",
                  "Kinek adod el",
                  "Miért választanának téged",
                  "Milyen kifogásai vannak a vevőidnek",
                  "Milyen döntési útvonalon jutnak el a vásárlásig",
                  "Milyen szerepe lesz a weboldalnak az értékesítésben",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-neutral-300 leading-7">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-neutral-400 leading-7 text-sm">
                Ezután építjük fel az oldal szerkezetét, szövegét, vizuális világát és technikai működését.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What's included ── */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-rose-400 mb-2">Mit tartalmaz</p>
        <h2 className="text-3xl font-black mb-10">Komplett weboldal kivitelezés egy kézben</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {included.map((item) => (
            <div key={item} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
              <Check className="h-4 w-4 shrink-0 text-rose-300" aria-hidden="true" />
              <p className="text-sm font-semibold text-neutral-300">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Packages ── */}
      <section id="csomagok" className="bg-white py-20 text-neutral-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-600 mb-2">Árazás</p>
          <h2 className="text-4xl font-black mb-4">Mennyibe kerül egy profi weboldal?</h2>
          <p className="max-w-2xl text-lg leading-8 text-neutral-600 mb-4">
            A weboldal nem sablontermék, ezért az ár mindig attól függ, milyen üzleti célt kell kiszolgálnia az oldalnak.
          </p>
          <p className="max-w-xl text-base leading-8 text-neutral-500 mb-12">
            Nálunk nem az a kérdés, hogy „hány aloldal lesz?", hanem az, hogy mekkora üzleti értéket kell létrehoznia a weboldalnak?
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-[2rem] border p-8 flex flex-col gap-6 ${
                  pkg.highlight
                    ? "border-rose-400/40 bg-rose-50"
                    : "border-neutral-200 bg-neutral-50"
                }`}
              >
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-neutral-500 mb-1">Blummarketing {pkg.name}</p>
                  <p className="text-3xl font-black mb-2">{pkg.price}</p>
                  <p className="text-sm leading-7 text-neutral-600">{pkg.desc}</p>
                </div>
                <ul className="space-y-2">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-neutral-700">
                      <Check className="h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="rounded-2xl bg-neutral-950/5 p-4">
                  <p className="text-xs font-black uppercase tracking-widest text-neutral-500 mb-1">Ideális, ha</p>
                  <p className="text-sm leading-7 text-neutral-700">{pkg.ideal}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Cheaper / more expensive */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-8">
              <h3 className="text-xl font-black mb-4">Mikor kerül kevesebbe?</h3>
              <ul className="space-y-2">
                {[
                  "Kevés aloldalból áll",
                  "Nincs szükség egyedi funkciókra",
                  "WordPress alapon megvalósítható",
                  "Rendelkezésre állnak a szövegek és képek",
                  "Nincs webshop funkció",
                  "Nincs szükség komplex integrációkra",
                  "Gyorsan áttekinthető az ajánlat és az üzleti modell",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-neutral-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-8">
              <h3 className="text-xl font-black mb-4">Mikor drágább?</h3>
              <ul className="space-y-2">
                {[
                  "Teljes sales stratégia kidolgozása szükséges",
                  "Profi szövegírás",
                  "Egyedi arculati irány",
                  "Sok aloldal, több célcsoport",
                  "Webshop funkciók, fizetési integrációk",
                  "Foglalási rendszer, kalkulátor",
                  "CRM vagy hírlevél rendszer összekötés",
                  "Többnyelvű működés, egyedi adminfelület",
                  "Nagyobb sebességoptimalizálás, komolyabb SEO alapozás",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-neutral-700">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-7 text-neutral-500">
                A magasabb ár ilyenkor nem öncélú. Azért kerül többe, mert több üzleti gondolkodást, mélyebb tervezést, jobb felhasználói élményt és nagyobb felelősségű kivitelezést igényel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why us ── */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-rose-400 mb-2">Miért velünk</p>
        <h2 className="text-3xl font-black mb-3">Nem fejlesztői szemmel kezdjük. Üzleti szemmel.</h2>
        <p className="max-w-2xl text-neutral-400 leading-8 mb-12">
          Egy weboldalnál nem az a legfontosabb kérdés, hogy milyen technológiával készül — hanem az, hogy mit kell elérnie.
        </p>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {valuePoints.map((vp) => (
            <div key={vp.title} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
              <h3 className="text-lg font-black mb-3">{vp.title}</h3>
              <p className="text-sm leading-7 text-neutral-400">{vp.text}</p>
            </div>
          ))}
          <div className="rounded-[2rem] border border-rose-500/20 bg-rose-500/5 p-7">
            <h3 className="text-lg font-black mb-3">Több ajánlatkérést?</h3>
            <p className="text-sm leading-7 text-neutral-400">Több időpontfoglalást? Több webshop rendelést? Erősebb márkaérzetet? Jobb hirdetési megtérülést? Ezt tisztázzuk először — ezután választjuk ki a megfelelő technológiát és struktúrát.</p>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="bg-white py-20 text-neutral-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-600 mb-2">Folyamat</p>
          <h2 className="text-4xl font-black mb-12">Hogyan készül el a weboldalad?</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((item) => (
              <div key={item.step} className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-7">
                <p className="text-sm font-black text-neutral-400">{item.step}</p>
                <h3 className="mt-4 text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sales block ── */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 lg:p-14">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-rose-400 mb-4">Amit érdemes tudni</p>
          <h2 className="text-3xl font-black mb-5">Egy gyenge weboldal csendben viszi el a pénzed</h2>
          <p className="text-neutral-400 leading-8 mb-8 max-w-2xl">Nem mindig látványos, amikor egy weboldal rosszul teljesít.</p>
          <ul className="space-y-3 mb-8">
            {[
              "Nem kapsz elég ajánlatkérést",
              "A látogatók nem értik, mit kínálsz",
              "A hirdetésekből jön forgalom, de kevés a konverzió",
              "A konkurensed profibbnak tűnik",
              "Az érdeklődők megnézik az oldalad, aztán eltűnnek",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-neutral-300 leading-7">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-neutral-400 leading-8 max-w-2xl">
            Ez nem feltétlenül azért van, mert rossz az ajánlatod. Lehet, hogy egyszerűen a weboldalad nem ad elég bizalmat, nem elég egyértelmű, és nem vezeti végig a látogatót a döntésen.{" "}
            <span className="text-white font-semibold">Ezen változtatunk.</span>
          </p>
        </div>
      </section>

      {/* ── Fit ── */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-rose-400 mb-2">Önellenőrzés</p>
        <h2 className="text-3xl font-black mb-10">Kinek ajánlott?</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-emerald-500/20 bg-emerald-500/5 p-8">
            <p className="text-xl font-black text-emerald-300 mb-6">Neked való, ha…</p>
            <ul className="space-y-3">
              {yesPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 leading-7 text-neutral-300">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] border border-rose-500/20 bg-rose-500/5 p-8">
            <p className="text-xl font-black text-rose-300 mb-6">Kinek nem ajánlott</p>
            <ul className="space-y-3 mb-5">
              {noPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 leading-7 text-neutral-400">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-rose-500" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="text-sm leading-7 text-neutral-500">
              Mi olyan vállalkozásokkal dolgozunk jól, akik értik, hogy egy profi weboldal nem egyszerű kiadás, hanem digitális értékesítési alap.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mx-auto max-w-4xl px-6 pb-20 lg:px-8">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-rose-400 mb-2">GYIK</p>
        <h2 className="text-3xl font-black mb-10">Gyakori kérdések</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 open:bg-white/[0.07]">
              <summary className="cursor-pointer list-none text-lg font-black">{faq.q}</summary>
              <p className="mt-4 leading-7 text-neutral-300 text-sm">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 pb-28 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-white text-neutral-950 shadow-2xl">
          <div className="grid gap-0 lg:grid-cols-[1fr_0.85fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-600">Kezdjük el</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Készítsünk olyan weboldalt, ami végre méltó szinten képviseli a vállalkozásod.
              </h2>
              <p className="mt-5 text-lg leading-8 text-neutral-600">
                Írj pár mondatot arról, milyen oldalt szeretnél, milyen szolgáltatást vagy terméket értékesítesz, és hol tart most a vállalkozásod online jelenléte.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:hello@blummarketing.hu?subject=Ajánlatkérés – weboldal készítés"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-7 py-4 font-bold text-white transition hover:bg-neutral-800"
                >
                  Kérek ajánlatot weboldalra
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
              <h3 className="text-2xl font-black mb-6">Az első egyeztetésen megnézzük:</h3>
              <ul className="space-y-4 text-neutral-300">
                {[
                  "Milyen típusú weboldal lenne számodra ideális",
                  "WordPress vagy egyedi fejlesztés lenne-e jobb",
                  "Szükséged van-e webshop funkciókra",
                  "Milyen struktúra támogatná legjobban az értékesítést",
                  "Nagyságrendileg milyen költséggel érdemes számolnod",
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
