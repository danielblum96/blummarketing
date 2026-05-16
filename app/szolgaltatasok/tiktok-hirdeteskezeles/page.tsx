import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Check, X } from "lucide-react";
import { ogImage } from "@/lib/og";
import MarketingFunnel from "@/components/illustrations/MarketingFunnel";

export const metadata = {
  title: "TikTok hirdetéskezelés | Blummarketing",
  description:
    "TikTok hirdetések stratégiai szemlélettel: kampánystruktúra, videós kreatívtesztelés, remarketing, mérés és havi riport — mérhető üzleti eredménnyel.",
  openGraph: {
    title: "TikTok hirdetéskezelés | Blummarketing",
    description:
      "TikTok hirdetések, amik nem csak megtekintéseket hoznak — hanem figyelmet, érdeklődőket és mérhető növekedést.",
    type: "website",
    locale: "hu_HU",
    siteName: "Blummarketing",
    images: ogImage,
  },
  alternates: { canonical: "/szolgaltatasok/tiktok-hirdeteskezeles/" },
};

const whatWeOffer = [
  {
    title: "Kampánystratégia",
    text: "Meghatározzuk, milyen TikTok kampánytípusokkal, ajánlatokkal és kreatív irányokkal érdemes elindulni. Nem minden vállalkozásnak ugyanaz kell — van, ahol a cél az ajánlatkérés, máshol a webshop vásárlás, a forgalomterelés, a márkaismertség, a leadgenerálás vagy a remarketing. A kampánystratégiát ehhez igazítjuk.",
  },
  {
    title: "TikTok kampányok beállítása",
    text: "Felépítjük a kampányokat TikTok Ads Managerben a megfelelő célok, közönségek, események és kreatívok alapján. Figyelünk arra, hogy a kampány ne csak technikailag fusson, hanem üzletileg is logikus rendszerben működjön.",
  },
  {
    title: "Videós kreatívtesztelés",
    text: "TikTokon a kreatív nem csak egy elem a kampányban — a kreatív maga a kampány motorja. Ezért több videós irányt, hookot, ajánlatot, szöveget, formátumot és célcsoporthoz igazított üzenetet tesztelünk, hogy kiderüljön, mi mozgatja meg a célcsoportodat.",
  },
  {
    title: "Mérés és konverziókövetés",
    text: "A TikTok hirdetéseknél is alap, hogy ne csak megtekintéseket nézzünk. Beállítjuk vagy ellenőrizzük a TikTok Pixelt, konverziós eseményeket, UTM paramétereket, remarketing közönségeket és analitikai alapokat. Így nem csak a videómegtekintéseket látjuk, hanem az üzleti eredményt is.",
  },
  {
    title: "Folyamatos optimalizálás",
    text: "A TikTok kampányokat nem hagyjuk magukra. Figyeljük a teljesítményt, elemezzük az adatokat, és javítjuk a kampányokat — kreatívokra, hookokra, célközönségekre, kampánystruktúrára, költéselosztásra, videós üzenetekre, landing oldalakra és remarketing logikára.",
  },
  {
    title: "Havi riport és javaslatok",
    text: "Nem csak számokat küldünk — értelmezzük is őket. A havi riportban láthatod, hogyan teljesítettek a TikTok kampányok, mely kreatívok és videós irányok működtek, mire ment el a költés, min kell javítani, és milyen irányt javaslunk a következő hónapra.",
  },
];

const creativeTests = [
  "UGC jellegű videók",
  "Edukációs videók",
  "Problématudatosító videók",
  "Előtte-utána tartalmak",
  "Termékbemutató videók",
  "Reakcióalapú videók",
  "Storytelling hirdetések",
  "Testimonial típusú kreatívok",
  "Gyors ajánlatközpontú videók",
  "Organikus hatású natív TikTok kreatívok",
];

const campaignTypes = [
  {
    title: "Lead generáló kampányok",
    desc: "Ha szolgáltatóként ajánlatkéréseket, időpontfoglalásokat vagy érdeklődőket szeretnél, TikTok kampányokat építünk a figyelem megszerzésére és a minőségi leadek irányába terelésre.",
    goal: "Több releváns érdeklődő, új célcsoportok elérése, frissebb ügyfélszerzési csatorna.",
  },
  {
    title: "Webshop kampányok",
    desc: "Ha termékeket értékesítesz, a TikTok kiváló lehetőség lehet új vásárlók elérésére, termékbemutatásra és impulzusvásárlások támogatására.",
    goal: "Több vásárlás, nagyobb termékláthatóság, skálázhatóbb hirdetési rendszer.",
  },
  {
    title: "Remarketing kampányok",
    desc: "Nem mindenki vásárol vagy kér ajánlatot az első találkozás után. A remarketing kampányokkal újra elérjük azokat, akik már jártak az oldaladon, megnézték a videóidat, érdeklődtek a terméked iránt, vagy elindították a vásárlási folyamatot.",
    goal: "Kevesebb elveszett érdeklődő, több visszatérő vásárló vagy ajánlatkérő.",
  },
  {
    title: "Márkaismertségi kampányok",
    desc: "Ha szeretnéd, hogy több ember találkozzon a márkáddal, új szolgáltatást vezetsz be, vagy gyorsan akarsz figyelmet építeni, a TikTok erős láthatósági csatorna lehet.",
    goal: "Több releváns elérés, erősebb márkaismertség, későbbi kampányok támogatása.",
  },
  {
    title: "Videómegtekintés és engagement kampányok",
    desc: "Ha a cél első körben a figyelem, a videós aktivitás és a közönségek építése, videómegtekintésre és engagementre optimalizált kampányokat is kezelünk.",
    goal: "Olcsóbb első érintések, kreatívtesztelés, remarketing alapközönségek építése.",
  },
];

const whyItWorks = [
  {
    title: "Erős hook",
    text: "TikTokon az első másodpercek döntenek. Ha a videó nem állítja meg a görgetést, a kampány nehezen fog működni.",
  },
  {
    title: "Platformazonos kreatív",
    text: "A TikTokon azok a hirdetések teljesítenek jól, amelyek nem idegenek a felülettől. A natív, organikus hatású videók sokszor erősebbek, mint a túlreklámozott kreatívok.",
  },
  {
    title: "Világos ajánlat",
    text: "A figyelem önmagában kevés. A nézőnek gyorsan értenie kell, mit kínálsz, kinek szól, és miért érdemes továbbkattintania.",
  },
  {
    title: "Megfelelő mérés",
    text: "Amit nem mérünk, azt nem lehet javítani. A kampányok előtt rendbe tesszük a szükséges TikTok Pixel és konverziós alapokat.",
  },
  {
    title: "Tudatos kreatívtesztelés",
    text: "Nem egy videóra építünk mindent. Több hookot, üzenetet és kreatív irányt tesztelünk, majd az adatok alapján döntünk.",
  },
  {
    title: "Folyamatos optimalizálás",
    text: "A TikTok gyorsan változik. Ami egyik héten működik, a következő hónapban már gyengülhet. Ezért a kampányokat folyamatosan figyelni és frissíteni kell.",
  },
];

const packages = [
  {
    name: "TikTok Start",
    price: "190 000 Ft / hó-tól",
    desc: "Belépő TikTok hirdetéskezelés azoknak, akik szeretnének tudatosan elindulni TikTokon, de még nem komplex kampányrendszerben gondolkodnak.",
    items: [
      "TikTok kampánykezelés",
      "Kampánystratégia alap szinten",
      "Kampányok beállítása",
      "Alap célközönség-kialakítás",
      "Havi kreatívjavaslatok",
      "TikTok Pixel ellenőrzés",
      "Alap optimalizálás",
      "Havi riport",
    ],
    ideal: "Most indítanád el tudatosan a TikTok hirdetéseidet, van egy fő ajánlatod, és szeretnéd tesztelni, hogyan működhet nálad a TikTok.",
    note: "Ez a csomag jó indulás, de nem teljes növekedési rendszer. Ha folyamatos kreatívtesztelést, remarketinget és leadeket szeretnél, a Growth csomag a következő lépés.",
    highlight: false,
  },
  {
    name: "TikTok Growth",
    price: "290 000 Ft / hó-tól",
    desc: "A legtöbb vállalkozásnak ezt ajánljuk: elég komplex ahhoz, hogy valódi üzleti eredményeket hozzon, de még nem prémium szintű ár.",
    items: [
      "Teljes TikTok kampánykezelés",
      "Stratégiai kampánytervezés",
      "Több kampánycél kezelése",
      "Lead generáló vagy webshop kampányok",
      "Videós kreatívtesztelési rendszer",
      "Remarketing kampányok",
      "Konverziós események ellenőrzése",
      "Ajánlati és hook irányok tesztelése",
      "Heti optimalizálás",
      "Havi riport",
      "Következő havi növekedési javaslatok",
    ],
    ideal: "Már van működő ajánlatod és weboldalad, szeretnél több érdeklődőt vagy vásárlót, és kiszámíthatóbb TikTok-alapú ügyfélszerzésben gondolkodsz.",
    note: "Ezen a szinten már nem csak futnak a hirdetések — rendszert építünk a figyelem és az ügyfélszerzés köré.",
    highlight: true,
  },
  {
    name: "TikTok Market Leader",
    price: "990 000 Ft / hó-tól",
    desc: "Teljes TikTok növekedési rendszer azoknak a cégeknek, akik komolyan figyelmet, piacot és ügyfélszerzési előnyt akarnak építeni.",
    items: [
      "Komplex TikTok kampánystratégia",
      "Több ajánlat párhuzamos hirdetése",
      "Teljes funnel tervezés",
      "Lead generáló, sales, webshop és remarketing kampányok",
      "Fejlett videós kreatívtesztelési rendszer",
      "Hook- és ajánlatvariációk kidolgozása",
      "Heti kampányoptimalizálás",
      "Heti stratégiai egyeztetés",
      "Landing oldal elemzés és javaslatok",
      "Konverziós útvonal audit",
      "TikTok Pixel és mérési rendszer ellenőrzés",
      "Remarketing rendszer teljes felépítése",
      "Skálázási terv magasabb költéshez",
      "Kreatív briefek videós hirdetésekhez",
      "Videós forgatókönyv- és tartalmi irányjavaslatok",
      "Első 3 másodperces hook ötletek",
      "Havi részletes teljesítményriport",
      "Prioritásos kommunikáció",
      "Ajánlatpozicionálási tanácsadás",
    ],
    ideal: "Nagyobb TikTok hirdetési büdzsével dolgozol, több ajánlatot futtatsz, és nem csak kampánykezelőt keresel — stratégiai növekedési partnert szeretnél.",
    note: "Ez a csomag azoknak való, akik komoly büdzsével és komoly TikTok-alapú növekedési célokkal dolgoznak.",
    highlight: false,
  },
];

const processSteps = [
  { step: "01", title: "Konzultáció", text: "Megnézzük a vállalkozásod, az ajánlatod, a célcsoportot és azt, milyen eredményt vársz a TikTok hirdetésektől." },
  { step: "02", title: "Fiók- és mérési ellenőrzés", text: "Átnézzük a TikTok hirdetési fiókot, a TikTok Pixelt, a konverziós eseményeket, a weboldalt vagy webshopot, és jelezzük, ha valami akadályozza a jó teljesítményt." },
  { step: "03", title: "Kampánystratégia", text: "Meghatározzuk a kampánycélokat, célközönségeket, ajánlati irányokat, hookokat, kreatívteszteket és a kezdő kampánystruktúrát." },
  { step: "04", title: "Kampányindítás", text: "Beállítjuk a hirdetéseket, elindítjuk a kampányokat, majd figyeljük az első adatok alapján, hogyan reagál a célcsoport és mely videós irányok mozdulnak meg." },
  { step: "05", title: "Optimalizálás", text: "A teljesítmény alapján javítjuk a kampányokat: átcsoportosítjuk a költést, leállítjuk a gyengébb kreatívokat, erősítjük a működő videókat, új hookokat tesztelünk, és finomítjuk a kampánystruktúrát." },
  { step: "06", title: "Riport és következő lépések", text: "Havi szinten összefoglaljuk az eredményeket, levonjuk a tanulságokat, és javaslatot adunk a következő kampány- és kreatívirányokra." },
];

const faqs = [
  {
    q: "A hirdetési költés benne van a havidíjban?",
    a: "Nem. A havidíj a TikTok hirdetéskezelési szolgáltatás díja. A hirdetési büdzsét külön kell biztosítani, és azt közvetlenül a TikTok felé fizeted.",
  },
  {
    q: "Mennyi idő után látszik eredmény?",
    a: "Az első adatok már néhány napon belül láthatók, de megbízhatóbb következtetéseket általában több hét kampányfutás és kreatívtesztelés után lehet levonni. A TikTok hirdetés különösen kreatívfüggő, ezért az eredményeket fokozatosan építjük.",
  },
  {
    q: "Kell hozzá weboldal?",
    a: "Nem minden esetben, mert lehet lead űrlapos vagy forgalomterelő kampányokat is futtatni. Viszont komolyabb, hosszú távú eredményekhez általában erős weboldal, landing oldal vagy webshop szükséges.",
  },
  {
    q: "Kreatívokat is készítetek?",
    a: "Igen, tudunk kreatívjavaslatokat, hook ötleteket, videós briefeket és hirdetésszövegeket adni. Igény esetén a videós tartalomgyártásban is segítünk, akár külön tartalomgyártó partnerrel együttműködésben.",
  },
  {
    q: "Tudtok webshop kampányokat kezelni TikTokon?",
    a: "Igen. Webshopoknál különösen fontos a megfelelő mérés, termékkommunikáció, kreatívtesztelés, remarketing és vásárlásra optimalizált kampányrendszer.",
  },
  {
    q: "Mi történik, ha nem működik egy kampány?",
    a: "Nem ragaszkodunk vakon egy irányhoz. Megnézzük, hol akad el a rendszer: a hooknál, kreatívnál, célzásnál, ajánlatnál, landing oldalon vagy mérésnél. Ezután módosítunk, új videós irányt tesztelünk, vagy javaslatot teszünk a szükséges változtatásra.",
  },
  {
    q: "Mekkora hirdetési büdzsével érdemes indulni?",
    a: "Kisebb tesztkampányoknál már havi 150 000–300 000 Ft hirdetési költéssel is el lehet indulni, de stabil leadgeneráláshoz vagy webshop növekedéshez gyakran magasabb büdzsé szükséges.",
  },
  {
    q: "Csak TikTok hirdetéseket kezeltek, vagy organikus tartalmakat is?",
    a: "Ez a szolgáltatás elsősorban TikTok hirdetéskezelésről szól, de a kreatívoknál figyelembe vesszük az organikus TikTok logikáját is. Igény esetén a videós tartalomkészítésben és havi kreatívgyártásban is tudunk segíteni.",
  },
];

const yesPoints = [
  "Szeretnél megjelenni TikTokon tudatosan",
  "Több ajánlatkérést szeretnél",
  "Webshop vásárlásokat akarsz növelni",
  "Van videós tartalmad, de nem tudod, hogyan hirdesd",
  "Eddig csak organikusan posztoltál",
  "Szeretnél új célcsoportokat elérni",
  "Fontos, hogy a hirdetési költés ne csak megtekintésekre menjen el",
  "Szeretnél mérhetőbb TikTok marketinget",
  "Hosszú távon skálázható TikTok hirdetési rendszert szeretnél",
];

const noPoints = [
  "Azonnali csodát vársz néhány nap alatt",
  "Nincs értelmezhető ajánlatod",
  "Nincs weboldalad vagy értékesítési folyamatod",
  "Nem akarsz hirdetési büdzsét biztosítani",
  "Csak a legolcsóbb kezelőt keresed",
  "Nem szeretnél kreatívokat tesztelni",
  "Nem vagy nyitott arra, hogy az ajánlaton, videós kreatívon vagy landing oldalon is javítani kellhet",
];

export default function TikTokHirdeteskezelesPage() {
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
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-300">TikTok hirdetéskezelés</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight sm:text-6xl">
            TikTok hirdetések, amik nem csak megtekintéseket hoznak — hanem érdeklődőket és vásárlókat.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
            A Blummarketing stratégiai szemlélettel kezeli a TikTok hirdetéseidet: kampánystruktúra, kreatívtesztelés, videós hirdetési irányok, mérés, optimalizálás és havi riport egy rendszerben.
          </p>
          <p className="mt-3 max-w-xl text-base leading-8 text-neutral-500">
            A cél nem az, hogy „legyen pár videó, amit megtolunk". A cél, hogy a TikTokból valódi ügyfélszerző csatorna legyen.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:hello@blummarketing.hu?subject=Ajánlatkérés – TikTok hirdetéskezelés"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-bold text-neutral-950 shadow-2xl transition hover:bg-neutral-200"
            >
              Kérek ajánlatot TikTok hirdetéskezelésre
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
              <h2 className="text-4xl font-black mb-5">TikTokon nem elég hirdetni — figyelmet kell nyerni.</h2>
              <p className="text-lg leading-8 text-neutral-600 mb-4">
                A TikTok más logika szerint működik, mint a klasszikus hirdetési felületek. Nem elég egy szép kreatív, egy általános szöveg és egy célzás — a felhasználó másodpercek alatt dönt, és csak arra figyel, ami azonnal megfogja.
              </p>
              <p className="text-neutral-500 leading-8">
                A jó TikTok hirdetés nem „reklámnak tűnő reklám" — hanem olyan tartalom, ami illeszkedik a platformhoz, mégis üzleti célt szolgál.
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-neutral-500 mb-4">Ezért a TikTok hirdetésnél különösen fontos:</p>
              <div className="space-y-2">
                {[
                  "Az első 1–2 másodperc",
                  "Az erős hook",
                  "A natív, platformazonos videós stílus",
                  "A világos ajánlat",
                  "A gyors üzenetátadás",
                  "A megfelelő kampánycél",
                  "A kreatívok rendszeres tesztelése",
                  "A pontos mérés",
                  "A folyamatos optimalizálás",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3">
                    <Check className="h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
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
        <h2 className="text-3xl font-black mb-4">Komplett TikTok hirdetéskezelés — kreatív és üzleti szemlélettel.</h2>
        <p className="max-w-2xl text-neutral-400 leading-8 mb-12">
          A TikTok hirdetéskezelés nem csak kampányindítás. A stratégia, a videós kreatívok, a mérés, a tesztelés és az optimalizálás mind beletartozik.
        </p>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whatWeOffer.map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 flex flex-col gap-3">
              <h3 className="text-lg font-black">{item.title}</h3>
              <p className="text-sm leading-7 text-neutral-400">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
          <p className="text-sm font-black text-neutral-400 mb-5">Videós kreatívtesztelési irányok például:</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
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
          <h2 className="text-3xl font-black mb-8">Milyen TikTok kampányokat kezelünk?</h2>
          <div className="mb-12">
            <MarketingFunnel variant="tiktok" />
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {campaignTypes.map((ct) => (
              <div key={ct.title} className="rounded-[2rem] border border-white/10 bg-neutral-950 p-7 flex flex-col gap-4">
                <h3 className="text-xl font-black">{ct.title}</h3>
                <p className="text-sm leading-7 text-neutral-400 flex-1">{ct.desc}</p>
                <div className="rounded-2xl bg-white/[0.04] px-4 py-3">
                  <p className="text-xs font-black uppercase tracking-widest text-neutral-500 mb-1">Cél</p>
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
        <h2 className="text-3xl font-black mb-12">Amitől működni tud a TikTok hirdetés</h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whyItWorks.map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
              <h3 className="text-lg font-black mb-3">{item.title}</h3>
              <p className="text-sm leading-7 text-neutral-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Packages ── */}
      <section id="csomagok" className="bg-white py-20 text-neutral-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-600 mb-2">Csomagok</p>
          <h2 className="text-4xl font-black mb-4">Válaszd ki, milyen szinten akarsz növekedni TikTokon.</h2>
          <p className="max-w-2xl text-lg leading-8 text-neutral-600 mb-12">
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
                  <p className="text-xs font-black uppercase tracking-widest text-neutral-500 mb-1">{pkg.name}</p>
                  <p className="text-3xl font-black mb-1">{pkg.price}</p>
                  <p className="text-sm text-neutral-500 mb-3">+ külön hirdetési költés</p>
                  <p className="text-sm leading-7 text-neutral-600">{pkg.desc}</p>
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
                  <p className="text-xs font-black uppercase tracking-widest text-neutral-500 mb-1">Ideális, ha</p>
                  <p className="text-sm leading-7 text-neutral-700">{pkg.ideal}</p>
                </div>
                <p className="text-xs leading-6 text-neutral-500 italic">{pkg.note}</p>
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
                  { name: "TikTok Start", price: "190 000 Ft / hó-tól", who: "Induló vagy egyszerűbb kampányokhoz", focus: "Tudatos alapok" },
                  { name: "TikTok Growth", price: "290 000 Ft / hó-tól", who: "A legtöbb növekedni akaró vállalkozásnak", focus: "Kreatívtesztelés, leadek, vásárlások, remarketing" },
                  { name: "TikTok Market Leader", price: "990 000 Ft / hó-tól", who: "Komoly büdzséhez és agresszív növekedéshez", focus: "Teljes TikTok növekedési rendszer" },
                ].map((row) => (
                  <tr key={row.name}>
                    <td className="py-4 font-semibold text-neutral-950">{row.name}</td>
                    <td className="py-4 text-neutral-600">{row.price}</td>
                    <td className="py-4 text-neutral-600">{row.who}</td>
                    <td className="py-4 text-neutral-600">{row.focus}</td>
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
                "Rendelkezésre állnak a videós kreatívok",
                "Alacsonyabb a hirdetési büdzsé",
                "Nincs szükség heti stratégiai egyeztetésre",
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
                "Sok videós kreatívteszt fut",
                "Több célpiac vagy célcsoport van",
                "Nagyobb a havi hirdetési büdzsé",
                "Komplex remarketing rendszer kell",
                "Erős növekedési célok vannak",
                "Új videós kreatív irányokat kell folyamatosan kidolgozni",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-neutral-400">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 rounded-[2rem] border border-rose-500/15 bg-rose-500/5 p-8">
          <h3 className="text-xl font-black mb-4">Mennyi pénzt érdemes TikTok hirdetésre költeni?</h3>
          <p className="text-neutral-400 leading-8 mb-5">A pontos hirdetési büdzsé az üzleti céltól, a piactól, az ajánlat árától, a célcsoporttól és a kreatívok mennyiségétől függ.</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "Kisebb tesztkampányok", range: "150 000–300 000 Ft / hó" },
              { label: "Stabil lead generálás / webshop", range: "300 000–800 000 Ft / hó" },
              { label: "Intenzív növekedés / skálázás", range: "800 000 Ft / hó felett" },
            ].map((b) => (
              <div key={b.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs font-black uppercase tracking-widest text-neutral-500 mb-2">{b.label}</p>
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
          <h2 className="text-3xl font-black mb-5">Ha a TikTok hirdetés nem működik, nem biztos, hogy a TikTok a hibás.</h2>
          <div className="grid gap-3 sm:grid-cols-2 mb-8">
            {[
              "Lehet, hogy az első 2 másodperc nem elég erős",
              "Lehet, hogy a videó túl reklámszerű",
              "Lehet, hogy az ajánlat nem elég konkrét",
              "Lehet, hogy rossz célra optimalizál a kampány",
              "Lehet, hogy a landing oldal nem győzi meg a látogatót",
              "Vagy pénz megy el olyan kreatívokra, amelyek nem visznek közelebb a célhoz",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-neutral-300 text-sm leading-7">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                {item}
              </div>
            ))}
          </div>
          <p className="text-neutral-400 leading-8 max-w-2xl">
            Egy jól felépített TikTok hirdetéskezelés ezeket a pontokat rendszerszinten nézi.{" "}
            <span className="text-white font-semibold">Mi nem csak a TikTok Ads Managerben dolgozunk — a teljes ügyfélszerzési útvonalat figyeljük.</span>
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
              A TikTok hirdetés akkor működik igazán jól, ha a kampány, a videós kreatív, az ajánlat és a fogadóoldal együtt dolgozik.
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
                Nézzük meg, hogyan tudna több figyelmet és eredményt hozni a TikTok hirdetésed.
              </h2>
              <p className="mt-5 text-lg leading-8 text-neutral-600">
                Írj pár mondatot a vállalkozásodról, az ajánlatodról és arról, futtattál-e már TikTok hirdetéseket.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:hello@blummarketing.hu?subject=Ajánlatkérés – TikTok hirdetéskezelés"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-7 py-4 font-bold text-white transition hover:bg-neutral-800"
                >
                  Kérek ajánlatot TikTok hirdetéskezelésre
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
                  "Milyen TikTok kampánytípus lenne számodra ideális",
                  "Milyen hirdetési büdzsével érdemes indulni",
                  "Rendben van-e a mérésed",
                  "Milyen videós kreatívokra lenne szükség",
                  "Milyen hookokat és ajánlati irányokat érdemes tesztelni",
                  "Hogyan lehetne a TikTok hirdetéseket üzletileg értelmezhető rendszerré alakítani",
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
