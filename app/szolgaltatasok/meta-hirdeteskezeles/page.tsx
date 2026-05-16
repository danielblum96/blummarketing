import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Check, X } from "lucide-react";
import { ogImage } from "@/lib/og";
import MarketingFunnel from "@/components/illustrations/MarketingFunnel";

export const metadata = {
  title: "Meta hirdetéskezelés | Facebook és Instagram kampányok | Blummarketing",
  description:
    "Facebook és Instagram hirdetések stratégiai szemlélettel: kampánystruktúra, kreatívtesztelés, remarketing, mérés és havi riport — üzleti eredménnyel.",
  openGraph: {
    title: "Meta hirdetéskezelés | Facebook és Instagram kampányok | Blummarketing",
    description:
      "Facebook és Instagram hirdetések, amik nem csak kattintásokat hoznak — hanem érdeklődőket, vásárlókat és mérhető növekedést.",
    type: "website",
    locale: "hu_HU",
    siteName: "Blummarketing",
    images: ogImage,
  },
  alternates: { canonical: "/szolgaltatasok/meta-hirdeteskezeles/" },
};

const whatWeOffer = [
  {
    title: "Kampánystratégia",
    text: "Meghatározzuk, milyen kampánytípusokkal, ajánlatokkal és célokkal érdemes elindulni. Nem minden vállalkozásnak ugyanaz kell — van, ahol az ajánlatkérés a cél, máshol a webshop vásárlás, időpontfoglalás, üzenetküldés, letöltés vagy remarketing. A kampánystratégiát ehhez igazítjuk.",
  },
  {
    title: "Facebook és Instagram kampányok beállítása",
    text: "Felépítjük a kampányokat Meta Ads Managerben a megfelelő célok, események, közönségek és kreatívok alapján. Figyelünk arra, hogy ne csak technikailag legyen beállítva, hanem üzletileg is logikus legyen a felépítése.",
  },
  {
    title: "Kreatív tesztelés",
    text: "A Meta hirdetéseknél a kreatív sokszor nagyobb különbséget jelent, mint maga a célzás. Ezért több üzenetet, vizuált, formátumot és ajánlati irányt tesztelünk, hogy kiderüljön, mire reagál legjobban a célcsoportod.",
  },
  {
    title: "Mérés és konverziókövetés",
    text: "A jó döntésekhez jó adatok kellenek. Beállítjuk vagy ellenőrizzük a Meta Pixelt, konverziós eseményeket, domain hitelesítést, UTM paramétereket és analitikai alapokat. Így nem csak a kattintásokat látjuk, hanem az üzleti eredményt is.",
  },
  {
    title: "Folyamatos optimalizálás",
    text: "A kampányokat nem magukra hagyjuk. Figyeljük a teljesítményt, elemezzük az adatokat, és javítjuk a kampányokat — kreatívokra, célközönségekre, kampánystruktúrára, költéselosztásra, hirdetésszövegekre, landing oldalakra és remarketing logikára.",
  },
  {
    title: "Havi riport és javaslatok",
    text: "Nem csak számokat küldünk — értelmezzük is őket. A havi riportban láthatod, hogyan teljesítettek a kampányok, mi működött jól, min kell javítani, és milyen irányt javaslunk a következő hónapra.",
  },
];

const creativeTests = [
  "Statikus képes hirdetések",
  "Videós kreatívok",
  "UGC jellegű tartalmak",
  "Előtte-utána típusú üzenetek",
  "Edukációs hirdetések",
  "Problématudatosító kreatívok",
  "Ajánlatközpontú kampányok",
  "Remarketing üzenetek",
];

const campaignTypes = [
  {
    title: "Lead generáló kampányok",
    desc: "Ha szolgáltatóként ajánlatkéréseket, időpontfoglalásokat vagy érdeklődőket szeretnél, olyan kampányokat építünk, amelyek a minőségi leadek megszerzésére fókuszálnak.",
    goal: "Több releváns érdeklődő, jobb ajánlatkérési arány, kiszámíthatóbb ügyfélszerzés.",
  },
  {
    title: "Webshop kampányok",
    desc: "Ha termékeket értékesítesz, a kampányokat vásárlásra, kosárelhagyók visszahozására és új vásárlók szerzésére optimalizáljuk.",
    goal: "Több vásárlás, jobb megtérülés, skálázhatóbb hirdetési rendszer.",
  },
  {
    title: "Remarketing kampányok",
    desc: "Nem mindenki vásárol vagy kér ajánlatot első látogatásra. A remarketing kampányokkal újra elérjük azokat, akik már jártak az oldaladon, megnézték a termékedet vagy érdeklődtek a szolgáltatásod iránt.",
    goal: "Kevesebb elveszett érdeklődő, több visszatérő vásárló vagy ajánlatkérő.",
  },
  {
    title: "Márkaismertségi kampányok",
    desc: "Ha új piacra lépsz, új szolgáltatást vezetsz be, vagy szeretnéd, hogy többen ismerjék meg a márkádat, tudatosan építünk láthatóságot.",
    goal: "Több releváns elérés, erősebb márkaérzet, későbbi kampányok támogatása.",
  },
];

const whyItWorks = [
  {
    title: "Erős ajánlat",
    text: "Ha az ajánlat gyenge vagy nehezen érthető, a legjobb kampány sem fog csodát tenni. Segítünk úgy megfogalmazni, hogy a célcsoportod azonnal értse, miért érdemes kattintania.",
  },
  {
    title: "Jó kreatívok",
    text: "A Meta felületein a figyelemért versenyzünk. Ezért a hirdetési kreatívoknak gyorsan kell megállítaniuk a görgetést, és egyértelműen kell kommunikálniuk az értéket.",
  },
  {
    title: "Megfelelő mérés",
    text: "Amit nem mérünk, azt nem lehet javítani. A kampányok előtt rendbe tesszük a szükséges mérési alapokat.",
  },
  {
    title: "Tudatos tesztelés",
    text: "Nem találgatunk. Több irányt tesztelünk, majd az adatok alapján döntünk.",
  },
  {
    title: "Folyamatos optimalizálás",
    text: "A Meta hirdetések teljesítménye változik. Ezért a kampányokat folyamatosan figyelni, értelmezni és fejleszteni kell.",
  },
];

const packages = [
  {
    name: "Meta Start",
    price: "190 000 Ft / hó-tól",
    tag: "Induló kampányokhoz",
    desc: "Belépő Meta hirdetéskezelés azoknak, akik szeretnének végre tudatosan jelen lenni Facebookon és Instagramon, de még nem komplex kampányrendszerben gondolkodnak.",
    items: [
      "Facebook és Instagram kampánykezelés",
      "Kampánystratégia alap szinten",
      "Kampányok beállítása",
      "Alap célközönség-kialakítás",
      "Havi kreatívjavaslatok",
      "Meta Pixel ellenőrzés",
      "Alap optimalizálás",
      "Havi riport",
    ],
    ideal: "Most indítanád el tudatosan a Meta hirdetéseidet, van egy fő ajánlatod, és szeretnél kilépni a boostolt posztok világából.",
    note: "Ez a csomag jó indulás, de nem teljes növekedési rendszer. Ha folyamatos leadeket vagy vásárlásokat szeretnél, a Growth csomag a következő lépés.",
    highlight: false,
  },
  {
    name: "Meta Growth",
    price: "290 000 Ft / hó-tól",
    tag: "Legjobb választás növekedéshez",
    desc: "A legtöbb vállalkozásnak ezt ajánljuk: elég komplex ahhoz, hogy valódi üzleti eredményeket hozzon, de még nem enterprise szintű ár.",
    items: [
      "Teljes Meta kampánykezelés",
      "Stratégiai kampánytervezés",
      "Több kampánycél kezelése",
      "Lead generáló vagy webshop kampányok",
      "Kreatívtesztelési rendszer",
      "Remarketing kampányok",
      "Konverziós események ellenőrzése",
      "Ajánlati irányok tesztelése",
      "Heti optimalizálás",
      "Havi riport",
      "Következő havi növekedési javaslatok",
    ],
    ideal: "Már van működő ajánlatod és weboldalad, szeretnél több érdeklődőt vagy vásárlót, és kiszámíthatóbb ügyfélszerzésben gondolkodsz.",
    note: "Ezen a szinten már nem csak futnak a hirdetések — rendszert építünk az ügyfélszerzés köré.",
    highlight: true,
  },
  {
    name: "Meta Market Leader",
    price: "990 000 Ft / hó-tól",
    tag: "Teljes növekedési hadművelet",
    desc: "Teljes növekedési rendszer azoknak a cégeknek, akik komolyan piacot akarnak nyerni Facebookon és Instagramon.",
    items: [
      "Komplex Meta kampánystratégia",
      "Több ajánlat párhuzamos hirdetése",
      "Teljes funnel tervezés",
      "Lead generáló, sales és remarketing kampányok",
      "Fejlett kreatívtesztelési rendszer",
      "Hirdetésszöveg- és ajánlatvariációk kidolgozása",
      "Heti kampányoptimalizálás",
      "Heti stratégiai egyeztetés",
      "Landing oldal elemzés és javaslatok",
      "Konverziós útvonal audit",
      "Meta Pixel és mérési rendszer ellenőrzés",
      "Remarketing rendszer teljes felépítése",
      "Skálázási terv magasabb költéshez",
      "Kreatív briefek videós és képes hirdetésekhez",
      "Havi részletes teljesítményriport",
      "Prioritásos kommunikáció",
      "Ajánlatpozicionálási tanácsadás",
    ],
    ideal: "Nagyobb hirdetési büdzsével dolgozol, több ajánlatot futtatsz, és nem csak kampánykezelőt keresel — stratégiai növekedési partnert szeretnél.",
    note: "Ez a csomag azoknak való, akik komoly büdzsével és komoly növekedési célokkal dolgoznak.",
    highlight: false,
  },
];

const processSteps = [
  { step: "01", title: "Konzultáció", text: "Megnézzük a vállalkozásod, az ajánlatod, a célcsoportot és azt, milyen eredményt vársz a hirdetésektől." },
  { step: "02", title: "Fiók- és mérési ellenőrzés", text: "Átnézzük a Meta hirdetési fiókot, a Pixelt, a konverziós eseményeket, a weboldalt vagy webshopot, és jelezzük, ha valami akadályozza a jó teljesítményt." },
  { step: "03", title: "Kampánystratégia", text: "Meghatározzuk a kampánycélokat, célközönségeket, ajánlati irányokat, kreatívteszteket és a kezdő kampánystruktúrát." },
  { step: "04", title: "Kampányindítás", text: "Beállítjuk a hirdetéseket, elindítjuk a kampányokat, majd figyeljük az első adatok alapján, hogyan reagál a piac." },
  { step: "05", title: "Optimalizálás", text: "A teljesítmény alapján javítjuk a kampányokat: átcsoportosítjuk a költést, leállítjuk a gyengébb elemeket, erősítjük a működő kreatívokat és új teszteket indítunk." },
  { step: "06", title: "Riport és következő lépések", text: "Havi szinten összefoglaljuk az eredményeket, levonjuk a tanulságokat, és javaslatot adunk a következő kampányirányokra." },
];

const faqs = [
  {
    q: "A hirdetési költés benne van a havidíjban?",
    a: "Nem. A havidíj a hirdetéskezelési szolgáltatás díja. A hirdetési büdzsét külön kell biztosítani, és azt közvetlenül a Meta felé fizeted.",
  },
  {
    q: "Mennyi idő után látszik eredmény?",
    a: "Az első adatok már néhány napon belül láthatók, de megbízhatóbb következtetéseket általában több hét kampányfutás után lehet levonni. A Meta hirdetés tanulási és tesztelési folyamat: az eredményeket fokozatosan építjük.",
  },
  {
    q: "Kell hozzá weboldal?",
    a: "Nem minden esetben — lehet lead űrlapos vagy üzenetküldésre optimalizált kampányokat is futtatni. Viszont komolyabb, hosszú távú eredményekhez általában erős weboldal vagy landing oldal szükséges.",
  },
  {
    q: "Kreatívokat is készítetek?",
    a: "Igen, tudunk kreatívjavaslatokat adni, hirdetésszövegeket írni, és igény esetén a tartalomgyártásban is segítünk. A legjobb eredményhez rendszeresen szükség van friss képes vagy videós kreatívokra.",
  },
  {
    q: "Tudtok webshop kampányokat kezelni?",
    a: "Igen. Webshopoknál különösen fontos a megfelelő mérés, termékstruktúra, remarketing és vásárlásra optimalizált kampányrendszer.",
  },
  {
    q: "Mi történik, ha nem működik egy kampány?",
    a: "Nem ragaszkodunk vakon egy irányhoz. Megnézzük, hol akad el a rendszer: a célzásnál, kreatívnál, ajánlatnál, landing oldalon vagy mérésnél. Ezután módosítunk, új tesztet indítunk, vagy javaslatot teszünk a szükséges változtatásra.",
  },
  {
    q: "Mekkora hirdetési büdzsével érdemes indulni?",
    a: "Kisebb kampányoknál már havi 150 000–300 000 Ft hirdetési költéssel is el lehet indulni, de stabil leadgeneráláshoz vagy webshop növekedéshez gyakran magasabb büdzsé szükséges.",
  },
  {
    q: "Csak Facebook hirdetéseket kezeltek, vagy Instagramot is?",
    a: "Mindkettőt. A Meta hirdetéskezelés része lehet a Facebook, Instagram, Messenger és remarketing kampányok kezelése is, attól függően, hogy hol érhető el hatékonyan a célcsoportod.",
  },
];

const yesPoints = [
  "Több ajánlatkérést szeretnél",
  "Webshop vásárlásokat akarsz növelni",
  "Eddig csak posztokat boostoltál",
  "Futnak hirdetéseid, de nem látod pontosan, mi működik",
  "Szeretnél mérhetőbb marketinget",
  "Van működő ajánlatod, de több emberhez akarod eljuttatni",
  "Fontos, hogy a költés ne csak elérésre menjen el",
  "Hosszú távon skálázható hirdetési rendszert szeretnél",
];

const noPoints = [
  "Azonnali csodát vársz néhány nap alatt",
  "Nincs értelmezhető ajánlatod",
  "Nincs weboldalad vagy értékesítési folyamatod",
  "Nem akarsz hirdetési büdzsét biztosítani",
  "Csak a legolcsóbb kezelőt keresed",
  "Nem szeretnél tesztelni",
  "Nem vagy nyitott arra, hogy az ajánlaton vagy landing oldalon is javítani kellhet",
];

export default function MetaHirdeteskezelesPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white antialiased">

      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.18),transparent_34%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_32%),linear-gradient(180deg,#0a0a0a_0%,#171717_100%)]" />
        <Navbar />
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-14 lg:px-8">
          <a href="/szolgaltatasok/" className="mb-6 inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition">
            ← Vissza a szolgáltatásokhoz
          </a>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-300">Meta hirdetéskezelés</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight sm:text-6xl">
            Facebook és Instagram hirdetések, amik nem csak kattintásokat hoznak — hanem érdeklődőket és vásárlókat.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
            A Blummarketing stratégiai szemlélettel kezeli a Meta hirdetéseidet: kampánystruktúra, kreatívtesztelés, remarketing, mérés, optimalizálás és havi riport egy rendszerben.
          </p>
          <p className="mt-3 max-w-xl text-base leading-8 text-neutral-300">
            A cél nem az, hogy „fusson valami". A cél, hogy a hirdetési büdzsédből ügyfél legyen.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:hello@blummarketing.hu?subject=Ajánlatkérés – Meta hirdetéskezelés"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-bold text-neutral-950 shadow-2xl transition hover:bg-neutral-200"
            >
              Kérek ajánlatot Meta hirdetéskezelésre
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="#csomagok"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur transition hover:bg-white/10"
            >
              Megnézem a csomagokat
            </a>
          </div>
        </div>
      </section>

      {/* ── Why pro management ── */}
      <section className="bg-white py-20 text-neutral-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-600 mb-2">Miért fontos</p>
              <h2 className="text-4xl font-black mb-5">A hirdetés nem attól működik, hogy be van kapcsolva.</h2>
              <p className="text-lg leading-8 text-neutral-700 mb-4">
                Sok vállalkozás költ Facebook és Instagram hirdetésekre, mégsem lát valódi megtérülést. Nem azért, mert a Meta nem működik — hanem mert a kampány mögött nincs rendszer.
              </p>
              <p className="text-neutral-700 leading-8">Ezeket nem utólag magyarázzuk meg. Már az elején úgy építjük fel a kampányokat, hogy legyen mit mérni, legyen mit javítani, és legyen mire skálázni.</p>
            </div>
            <div>
              <p className="text-sm font-bold text-neutral-700 mb-4">Gyakori problémák:</p>
              <div className="space-y-2">
                {[
                  "Túl általános célzás",
                  "Gyenge vagy elhasznált kreatívok",
                  "Rosszul megfogalmazott ajánlat",
                  "Hiányzó mérés",
                  "Rosszul beállított konverziós események",
                  "Nem megfelelő landing oldal",
                  "Kampányok rendszeres tesztelés nélkül",
                  "Túl gyors vagy rossz irányú optimalizálás",
                  "Nincs világos döntés arról, mit jelent a siker",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3">
                    <X className="h-4 w-4 shrink-0 text-rose-500" aria-hidden="true" />
                    <p className="text-sm font-semibold text-neutral-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What we offer ── */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-rose-400 mb-2">Mit kapsz tőlünk</p>
        <h2 className="text-3xl font-black mb-4">Komplett Meta hirdetéskezelés — üzleti szemlélettel.</h2>
        <p className="max-w-2xl text-neutral-300 leading-8 mb-12">
          A hirdetéskezelés nem csak kampánybeállítás. A stratégia, a mérés, a kreatívok és az optimalizálás mind beletartozik.
        </p>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whatWeOffer.map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 flex flex-col gap-3">
              <h3 className="text-lg font-black">{item.title}</h3>
              <p className="text-sm leading-7 text-neutral-300">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Creative tests */}
        <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
          <p className="text-sm font-black text-neutral-300 mb-5">Kreatívtesztelési irányok például:</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {creativeTests.map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-neutral-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Campaign types ── */}
      <section className="bg-neutral-900 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-rose-400 mb-2">Kampánytípusok</p>
          <h2 className="text-3xl font-black mb-8">Milyen kampányokat kezelünk?</h2>
          <div className="mb-10 max-w-xs mx-auto lg:mx-0">
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-300 mb-3">A Meta hirdetési tölcsér</p>
            <MarketingFunnel variant="meta" />
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {campaignTypes.map((ct) => (
              <div key={ct.title} className="rounded-[2rem] border border-white/10 bg-neutral-950 p-7 flex flex-col gap-4">
                <h3 className="text-xl font-black">{ct.title}</h3>
                <p className="text-sm leading-7 text-neutral-300">{ct.desc}</p>
                <div className="rounded-2xl bg-white/[0.04] px-4 py-3">
                  <p className="text-xs font-black uppercase tracking-widest text-neutral-300 mb-1">Cél</p>
                  <p className="text-sm text-neutral-300">{ct.goal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why it works ── */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-rose-400 mb-2">Amitől működhet</p>
        <h2 className="text-3xl font-black mb-12">Amitől működni tud a Meta hirdetés</h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whyItWorks.map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
              <h3 className="text-lg font-black mb-3">{item.title}</h3>
              <p className="text-sm leading-7 text-neutral-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Packages ── */}
      <section id="csomagok" className="bg-white py-20 text-neutral-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-600 mb-2">Csomagok</p>
          <h2 className="text-4xl font-black mb-4">Válaszd ki, milyen szinten akarsz növekedni.</h2>
          <p className="max-w-2xl text-lg leading-8 text-neutral-700 mb-12">
            Nem minden vállalkozásnak ugyanaz kell — ezért három szint közül választhatsz.
          </p>
          <div className="grid gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-[2rem] border p-8 flex flex-col gap-5 ${
                  pkg.highlight
                    ? "border-rose-400/50 bg-rose-50 ring-2 ring-rose-400/30"
                    : "border-neutral-200 bg-neutral-50"
                }`}
              >
                <div>
                  {pkg.highlight && (
                    <span className="mb-3 inline-block rounded-full bg-rose-500 px-3 py-1 text-xs font-black text-white">Legjobb választás</span>
                  )}
                  <p className="text-xs font-black uppercase tracking-widest text-neutral-600 mb-1">{pkg.name}</p>
                  <p className="text-3xl font-black mb-1">{pkg.price}</p>
                  <p className="text-sm text-neutral-600 mb-3">+ külön hirdetési költés</p>
                  <p className="text-sm leading-7 text-neutral-700">{pkg.desc}</p>
                </div>
                <ul className="space-y-2 flex-1">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-neutral-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="rounded-2xl bg-neutral-950/5 p-4">
                  <p className="text-xs font-black uppercase tracking-widest text-neutral-600 mb-1">Ideális, ha</p>
                  <p className="text-sm leading-7 text-neutral-700">{pkg.ideal}</p>
                </div>
                <p className="text-xs leading-6 text-neutral-600 italic">{pkg.note}</p>
                <a
                  href={`mailto:hello@blummarketing.hu?subject=${encodeURIComponent(`Érdeklődés – ${pkg.name} csomag`)}`}
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition ${
                    pkg.highlight
                      ? "bg-neutral-950 text-white hover:bg-neutral-800"
                      : "border border-neutral-300 text-neutral-950 hover:bg-neutral-100"
                  }`}
                >
                  Kérem a {pkg.name} csomagot <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="pb-3 font-black text-neutral-950">Csomag</th>
                  <th className="pb-3 font-black text-neutral-950">Ár</th>
                  <th className="pb-3 font-black text-neutral-950">Kinek ajánlott?</th>
                  <th className="pb-3 font-black text-neutral-950">Fókusz</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {[
                  { name: "Meta Start", price: "190 000 Ft / hó-tól", who: "Induló vagy egyszerűbb kampányokhoz", focus: "Tudatos alapok" },
                  { name: "Meta Growth", price: "290 000 Ft / hó-tól", who: "A legtöbb növekedni akaró vállalkozásnak", focus: "Leadek, vásárlások, remarketing" },
                  { name: "Meta Market Leader", price: "990 000 Ft / hó-tól", who: "Komoly büdzséhez és agresszív növekedéshez", focus: "Teljes növekedési rendszer" },
                ].map((row) => (
                  <tr key={row.name}>
                    <td className="py-4 font-semibold text-neutral-950">{row.name}</td>
                    <td className="py-4 text-neutral-700">{row.price}</td>
                    <td className="py-4 text-neutral-700">{row.who}</td>
                    <td className="py-4 text-neutral-700">{row.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Budget info ── */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <h3 className="text-xl font-black mb-4">Mikor olcsóbb a hirdetéskezelés?</h3>
            <ul className="space-y-2">
              {[
                "Egyetlen fő ajánlatot hirdetünk",
                "Egyszerű a kampánystruktúra",
                "Nincs webshop",
                "Kevés kampány fut párhuzamosan",
                "A mérési rendszer már rendben van",
                "Rendelkezésre állnak a kreatívok",
                "Alacsonyabb a hirdetési büdzsé",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-neutral-300">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <h3 className="text-xl font-black mb-4">Mikor drágább?</h3>
            <ul className="space-y-2">
              {[
                "Több szolgáltatást vagy terméket hirdetünk",
                "Webshop kampányokat kezelünk",
                "Sok kreatívteszt fut",
                "Több célpiac vagy célcsoport van",
                "Nagyobb a havi hirdetési büdzsé",
                "Komplex remarketing rendszer kell",
                "Több landing oldal fut egyszerre",
                "Erős növekedési célok vannak",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-neutral-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 rounded-[2rem] border border-rose-500/15 bg-rose-500/5 p-8">
          <h3 className="text-xl font-black mb-4">Mennyi pénzt érdemes hirdetésre költeni?</h3>
          <p className="text-neutral-300 leading-8 mb-5">A pontos hirdetési büdzsé az üzleti céltól, a piactól, az ajánlat árától és a versenytől függ. Néhány tájékoztató szám:</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "Kisebb induló kampányok", range: "150 000–300 000 Ft / hó" },
              { label: "Stabil lead generálás", range: "300 000–800 000 Ft / hó" },
              { label: "Intenzívebb növekedés", range: "800 000 Ft / hó felett" },
            ].map((b) => (
              <div key={b.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs font-black uppercase tracking-widest text-neutral-300 mb-2">{b.label}</p>
                <p className="text-lg font-black text-white">{b.range}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="bg-white py-20 text-neutral-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-600 mb-2">Folyamat</p>
          <h2 className="text-4xl font-black mb-12">Hogyan indul a közös munka?</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((item) => (
              <div key={item.step} className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-7">
                <p className="text-sm font-black text-neutral-600">{item.step}</p>
                <h3 className="mt-4 text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sales block ── */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 lg:p-14">
          <h2 className="text-3xl font-black mb-5">Ha a hirdetés nem térül meg, nem mindig a Meta a hibás.</h2>
          <div className="grid gap-3 sm:grid-cols-2 mb-8">
            {[
              "Lehet, hogy rossz célra optimalizál a kampány",
              "Lehet, hogy a kreatív nem elég erős",
              "Lehet, hogy az ajánlat nem elég konkrét",
              "Lehet, hogy a landing oldal nem győzi meg a látogatót",
              "Lehet, hogy nincs elég adat a döntésekhez",
              "Vagy pénz megy el olyan kampányokra, amelyek nem visznek közelebb a célhoz",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-neutral-300 text-sm leading-7">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                {item}
              </div>
            ))}
          </div>
          <p className="text-neutral-300 leading-8 max-w-2xl">
            Egy jól felépített hirdetéskezelés ezeket a pontokat rendszerszinten nézi. <span className="text-white font-semibold">Mi nem csak az Ads Managerben dolgozunk — a teljes ügyfélszerzési útvonalat figyeljük.</span>
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
                <li key={point} className="flex items-start gap-3 leading-7 text-neutral-300">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-rose-500" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="text-sm leading-7 text-neutral-300">
              A Meta hirdetés akkor működik igazán jól, ha a kampány, a kreatív, az ajánlat és a fogadóoldal együtt dolgozik.
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
              <p className="mt-4 text-sm leading-7 text-neutral-300">{faq.a}</p>
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
                Nézzük meg, hogyan tudna több eredményt hozni a Meta hirdetésed.
              </h2>
              <p className="mt-5 text-lg leading-8 text-neutral-700">
                Írj pár mondatot a vállalkozásodról, az ajánlatodról és arról, futtattál-e már Facebook vagy Instagram hirdetéseket.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:hello@blummarketing.hu?subject=Ajánlatkérés – Meta hirdetéskezelés"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-7 py-4 font-bold text-white transition hover:bg-neutral-800"
                >
                  Kérek ajánlatot Meta hirdetéskezelésre
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
                  "Milyen kampánytípus lenne számodra ideális",
                  "Milyen hirdetési büdzsével érdemes indulni",
                  "Rendben van-e a mérésed",
                  "Milyen kreatívokra lenne szükség",
                  "Hogyan lehetne a Meta hirdetéseket üzletileg értelmezhető rendszerré alakítani",
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
