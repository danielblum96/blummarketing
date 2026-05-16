import { ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ogImage } from "@/lib/og";
import DataFlowDiagram from "@/components/illustrations/DataFlowDiagram";

export const metadata = {
  title: "Online marketing mérés: ha rossz adatból döntesz, rossz irányba költöd a pénzt",
  description: "Miért alapja a mérés az egész marketingrendszernek? Konverzió, GA4, GTM, Meta Pixel, attribúció, ROAS, CPL – érthetően.",
  keywords: [
    "online marketing mérés",
    "konverziókövetés",
    "google analytics 4",
    "google tag manager",
    "meta pixel",
    "mérési audit",
    "roas cpa cpl",
    "attribúció",
  ],
  openGraph: {
    title: "Online marketing mérés: ha rossz adatból döntesz, rossz irányba költöd a pénzt",
    description: "Miért alapja a mérés az egész marketingrendszernek? Konverzió, GA4, GTM, Meta Pixel, attribúció, ROAS, CPL – érthetően.",
    type: "article",
    locale: "hu_HU",
    siteName: "Blummarketing",
    images: ogImage,
  },
  alternates: {
    canonical: "/tudastar/meres-es-analitika/",
  },
};

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Online marketing mérés: ha rossz adatból döntesz, rossz irányba költöd a pénzt",
    description: "Miért alapja a mérés az egész marketingrendszernek? Konverzió, GA4, GTM, Meta Pixel, attribúció, ROAS, CPL – érthetően.",
    author: { "@type": "Organization", name: "Blummarketing" },
    publisher: {
      "@type": "Organization",
      name: "Blummarketing",
      url: "https://blummarketing.hu",
    },
    datePublished: "2025-01-01",
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

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="my-6 overflow-x-auto rounded-2xl bg-neutral-900 p-5 text-sm leading-6 text-neutral-300 border border-white/10">
      <code>{children}</code>
    </pre>
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

const auditCheckItems = [
  "GA4 beállításokat",
  "Google Tag Manager tageket",
  "Google Ads konverziókat",
  "Meta Pixel eseményeket",
  "Conversions API működését",
  "TikTok Pixel és Events API eseményeket",
  "eseményduplikációt",
  "konverziós prioritásokat",
  "UTM használatot",
  "csatornák közötti eltéréseket",
  "riportlogikát",
  "lead- vagy vásárlási adatok minőségét",
];

const ctaChecklistItems = [
  "jól mérődnek-e a konverziók",
  "van-e duplikáció vagy hiányzó adat",
  "mire optimalizálnak a kampányok",
  "mit mutat a GA4 és a hirdetési rendszerek",
  "melyik adat torzíthat",
  "milyen mérési javításokra van szükség",
];

export default function MeresEsAnalitika() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white antialiased">
      <JsonLd />

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.18),transparent_34%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_32%),linear-gradient(180deg,#0a0a0a_0%,#171717_100%)]" />
        <Navbar />

        <div className="mx-auto max-w-4xl px-6 pb-16 pt-14 lg:px-8">
          <a href="/tudastar/" className="mb-6 inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition">
            ← Vissza a Tudástárba
          </a>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Mérés", "GA4", "Konverziókövetés", "Analitika"].map((tag) => (
              <span key={tag} className="rounded-full bg-rose-500/10 px-3 py-1 text-xs font-bold text-rose-300">{tag}</span>
            ))}
          </div>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl leading-tight">
            Online marketing mérés: ha rossz adatból döntesz, rossz irányba költöd a pénzt
          </h1>
          <p className="mt-6 text-xl leading-8 text-neutral-300">
            A marketingben nem az a kérdés, hányan kattintottak. Hanem az, hogy melyik kampány hozott bevételt, melyik hozott leadet, melyik csak forgalmat, és melyik vitte a pénzt.
          </p>
          <div className="mt-6 flex items-center gap-4 text-sm text-neutral-300">
            <span>Blummarketing</span>
            <span>·</span>
            <span>2025. január 1.</span>
            <span>·</span>
            <span>~20 perc olvasás</span>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-6 pb-24 lg:px-8">

        <P>Ha a mérés nincs rendben, minden más bizonytalan. Lehet jó a kreatív, lehet jó a kampánystruktúra, lehet erős az ajánlat. De ha nem látod pontosan, mi történik a kattintás után, akkor nem optimalizálsz — csak találgatsz.</P>
        <Blockquote>
          <strong>A mérés nem technikai extra. A mérés a teljes online marketingrendszer alapja.</strong>
        </Blockquote>

        <HR />

        <H2>Miért kritikus a mérés?</H2>
        <P>Mert a hirdetési rendszerek abból tanulnak, amit mérsz.</P>
        <UL items={[
          "Ha rossz eseményt adsz meg konverziónak, a kampány rossz célra fog optimalizálni.",
          "Ha duplikáltan mérsz konverziókat, túlértékeled a teljesítményt.",
          `Ha nem méred a valódi üzleti eredményt, lehet, hogy a kampány „jól néz ki" a riportban, miközben nem hoz ügyfelet.`,
        ]} />
        <Blockquote>
          A legveszélyesebb helyzet az, amikor a számok szépek, de nem igazak.
        </Blockquote>

        <HR />

        <H2>Mi az online marketing mérés?</H2>
        <P>Az online marketing mérés azt mutatja meg, hogy a forgalomból lett-e üzleti eredmény. Nem csak azt nézzük, hogy honnan jött a látogató, mire kattintott, melyik kampányból érkezett, mennyi ideig maradt az oldalon.</P>
        <P>Hanem azt is, hogy:</P>
        <UL items={[
          "ajánlatot kért-e",
          "vásárolt-e",
          "telefonált-e",
          "időpontot foglalt-e",
          "bekerült-e a sales folyamatba",
          "ügyfél lett-e belőle",
        ]} />
        <Blockquote>
          <strong>A jó mérés célja egyszerű: megmutatni, mire érdemes költeni, mit kell javítani, és mit kell leállítani.</strong>
        </Blockquote>

        <HR />

        <H2>A legfontosabb fogalom: konverzió</H2>
        <P>A konverzió az a művelet, amely üzletileg értéket jelent. Nem minden kattintás konverzió, nem minden gombnyomás lead, nem minden űrlapkitöltés jó minőségű érdeklődő.</P>

        <H3>Webshopnál konverzió lehet:</H3>
        <UL items={["vásárlás", "kosárba helyezés", "fizetés megkezdése", "hírlevél-feliratkozás"]} />

        <H3>Szolgáltató cégnél konverzió lehet:</H3>
        <UL items={["ajánlatkérés", "telefonhívás", "időpontfoglalás", "kapcsolatfelvételi űrlap"]} />

        <H3>B2B cégnél konverzió lehet:</H3>
        <UL items={["demo kérés", "sales megkeresés", "letöltés", "regisztráció", "minősített lead"]} />

        <Blockquote>
          A mérési stratégia első kérdése mindig ez: <strong>mi számít valódi üzleti eredménynek?</strong><br />
          Ha erre nincs pontos válasz, a kampányoptimalizálás is bizonytalan lesz.
        </Blockquote>

        <HR />

        <H2>Mikro- és makrokonverzió: nem ugyanaz a súlyuk</H2>
        <P>Ez az egyik leggyakoribb mérési hiba: mindent konverziónak neveznek. Pedig nem ugyanaz egy oldalletöltés, egy gombkattintás, egy kosárba helyezés, egy ajánlatkérés és egy vásárlás.</P>

        <H3>Mikrokonverzió</H3>
        <P>Olyan kisebb jelzés, amely érdeklődést mutat. Például:</P>
        <UL items={["görgetés", "gombkattintás", "videómegtekintés", "kosárba helyezés", "aloldal megtekintése"]} />

        <H3>Makrokonverzió</H3>
        <P>Valódi üzleti eredményhez közelebb álló művelet. Például:</P>
        <UL items={["vásárlás", "ajánlatkérés", "telefonhívás", "időpontfoglalás", "demo igénylés"]} />

        <P>A mikrokonverzió segíthet megérteni a viselkedést. De a kampány üzleti teljesítményét nem erre kell alapozni. Ha egy kampány gombkattintásra optimalizál, miközben neked ajánlatkérés kell, rossz jel alapján tanul.</P>

        <HR />

        <H2>A kattintás nem eredmény</H2>
        <P>A kattintás csak belépési pont. Lehet, hogy valaki kattintott, de nem töltött be az oldal, nem találta meg az ajánlatot, nem értette, mit kell tennie, nem bízott meg a cégben, nem kért ajánlatot, nem vásárolt. Ezért önmagában a kattintási adat kevés.</P>

        <Table
          headers={["Kampány", "Kattintás", "Költség", "Ajánlatkérés", "Ajánlatkérés ára"]}
          rows={[
            ["A kampány", "1 000", "200 000 Ft", "5", "40 000 Ft"],
            ["B kampány", "400", "160 000 Ft", "16", "10 000 Ft"],
          ]}
        />
        <P>Az A kampány több forgalmat hozott. A B kampány több üzleti eredményt. Ha csak kattintást nézel, rossz kampányt fogsz skálázni.</P>

        <HR />

        <H2>Milyen eszközökből áll egy komoly mérési rendszer?</H2>
        <P>Egy profi mérési rendszer nem egyetlen eszközből áll. Több réteg dolgozik együtt — a látogató böngészőjétől egészen a riportig:</P>
        <div className="my-8">
          <DataFlowDiagram />
        </div>

        <H3>Google Analytics 4</H3>
        <P>A GA4 a weboldali viselkedés és forgalmi források elemzésére szolgál. Megmutatja, honnan jönnek a látogatók, milyen oldalakat néznek, milyen események történnek, milyen csatornák hoznak konverziót, hogyan viselkednek a különböző forgalmi források.</P>
        <P>A GA4 nem hirdetési riport helyett van — hanem azért, hogy a weboldali viselkedést és a csatornák szerepét tisztábban lásd.</P>

        <H3>Google Tag Manager</H3>
        <P>A Google Tag Manager a mérőkódok és események kezelési rétege. Ezzel állítható be például:</P>
        <UL items={[
          "gombkattintás",
          "űrlapküldés",
          "telefonlink kattintás",
          "vásárlási esemény",
          "letöltés",
          "scroll",
          "hirdetési konverziók",
          "remarketing tagek",
        ]} />
        <P>A GTM előnye, hogy kontrolláltabban kezelhető a mérés, és nem kell minden változtatáshoz külön fejlesztői beavatkozás.</P>

        <H3>Google Ads konverziókövetés</H3>
        <P>Ez mutatja meg, hogy a Google Ads kampányból lett-e üzleti eredmény. Kritikus, mert a Google Ads optimalizációja gyakran a konverziós adatokra épül. Ha rossz konverziót kap a rendszer, rossz irányba tanul.</P>
        <Blockquote>
          Ha egy szolgáltató kampány fő konverziója egy sima gombkattintás, miközben az üzleti cél az ajánlatkérés, akkor a rendszer sok gombkattintást fog keresni — nem feltétlenül jó leadeket.
        </Blockquote>

        <H3>Meta Pixel és Conversions API</H3>
        <P>A Meta Pixel böngészőoldali mérést ad Facebook és Instagram kampányokhoz. A Conversions API szerveroldali eseményküldéssel egészíti ki ezt. Ezek együtt stabilabb képet adhatnak arról, hogy a Meta hirdetésekből érkező látogatók mit csinálnak a weboldalon:</P>
        <UL items={["oldalmegtekintés", "termékmegtekintés", "kosárba helyezés", "lead", "vásárlás"]} />

        <H3>TikTok Pixel és Events API</H3>
        <P>TikTok kampányoknál ugyanilyen szerepet tölt be a TikTok Pixel és az Events API. Nem elég videómegtekintést mérni. A kérdés az: lett-e a figyelemből érdeklődő, vásárlás vagy lead?</P>

        <HR />

        <H2>Miért mutat mást a GA4, a Google Ads, a Meta és a TikTok?</H2>
        <P>Mert nem ugyanúgy mérnek — és ez nem hiba, hanem rendszerlogika. Eltérés lehet azért, mert más:</P>
        <UL items={[
          "az attribúciós modell",
          "a konverziós ablak",
          "a kattintás- és megtekintésalapú jóváírás",
          "az időzóna",
          "az adatfeldolgozási sebesség",
          "a cookie-kezelés",
          "a böngészőkorlátozás",
          "az eseménydefiníció",
        ]} />
        <Blockquote>
          Ezért nem az a profi kérdés: „Miért nem ugyanaz a szám mindenhol?"<br />
          Hanem az: <strong>melyik rendszer mit mér, hogyan méri, és milyen döntéshez használjuk az adatot?</strong>
        </Blockquote>

        <HR />

        <H2>Attribúció: ki kapja az érdemet?</H2>
        <P>Az attribúció azt mutatja meg, melyik csatornához rendeljük a konverziót. A valóságban az ügyfélút sokszor nem lineáris.</P>
        <CodeBlock>{`Meta hirdetés
↓
weboldallátogatás
↓
Google keresés
↓
Google Ads kattintás
↓
direkt visszatérés
↓
ajánlatkérés`}</CodeBlock>
        <P>Ilyenkor a kérdés nem egyszerű: ki hozta az ügyfelet? A Meta? A Google Ads? A direkt visszatérés? Mind együtt?</P>
        <P>Ezért kell érteni az attribúciót. Mert ha rosszul értelmezed, rossz csatornát fogsz leállítani vagy túlkölteni.</P>

        <HR />

        <H2>Milyen KPI-okat érdemes nézni?</H2>
        <P>A jó KPI nem szép szám — a jó KPI döntést segít.</P>

        <H3>Webshopnál:</H3>
        <UL items={[
          "vásárlások száma",
          "bevétel",
          "ROAS",
          "CPA",
          "átlagos kosárérték",
          "konverziós arány",
          "kosárelhagyás",
          "termékkategória teljesítmény",
        ]} />

        <H3>Szolgáltató cégnél:</H3>
        <UL items={[
          "leadek száma",
          "CPL",
          "telefonhívások",
          "ajánlatkérések",
          "időpontfoglalások",
          "leadminőség",
          "ügyfélszerzési költség",
        ]} />

        <H3>B2B cégnél:</H3>
        <UL items={[
          "demo kérések",
          "minősített leadek",
          "sales meetingek",
          "pipeline érték",
          "ügyfélszerzési költség",
          "konverzió leadből ügyféllé",
        ]} />

        <P>A hiba ott kezdődik, amikor minden cégnél ugyanazokat a mutatókat nézzük. A mérés mindig üzleti modellből indul.</P>

        <HR />

        <H2>ROAS, CPA, CPL: fontosak, de nem önmagukban</H2>

        <H4>ROAS</H4>
        <P>A ROAS azt mutatja meg, mennyi bevétel jut egy forint hirdetési költésre: <strong>ROAS = bevétel / hirdetési költés</strong>. Webshopoknál fontos mutató, de önmagában kevés — nem mutat profitot. Egy 5x ROAS lehet jó vagy rossz attól függően, mekkora az árrés, a visszáru, a szállítási költség és az ügyfél élettartamértéke.</P>

        <H4>CPA</H4>
        <P>A CPA azt mutatja meg, mennyibe kerül egy konverzió. Ez lehet vásárlás, ajánlatkérés vagy más fontos művelet.</P>

        <H4>CPL</H4>
        <P>A CPL azt mutatja meg, mennyibe kerül egy lead. Szolgáltató cégeknél gyakori mutató. De az olcsó lead nem mindig jó lead. Ha egy 3 000 Ft-os leadből nem lesz ügyfél, egy 12 000 Ft-os leadből viszont rendszeresen szerződés lesz, akkor üzletileg a drágább lead lehet jobb.</P>

        <HR />

        <H2>Milyen a profi marketing riport?</H2>
        <P>A profi riport nem adatdump — nem az a cél, hogy tele legyen grafikonokkal. A jó riport döntési anyag. Megválaszolja:</P>
        <UL items={[
          "mi történt",
          "miért történt",
          "mi működött",
          "mi nem működött",
          "hol veszítünk pénzt",
          "mit állítunk le",
          "mit tesztelünk",
          "mire adunk több büdzsét",
          "mi a következő lépés",
        ]} />
        <Blockquote>
          Ha egy riport után nem világos, mit kell tenni, az nem riport. Csak adatgyűjtemény.
        </Blockquote>

        <HR />

        <H2>Gyakori mérési hibák</H2>

        <H3>Nincs konverziómérés</H3>
        <P>A kampány fut, a pénz fogy, de nem látni, miből lett üzleti eredmény. Ez alapvető hiba.</P>

        <H3>Rossz konverziót optimalizálunk</H3>
        <P>A rendszer nem ajánlatkérésre, vásárlásra vagy minőségi leadre tanul, hanem gyengébb eseményre. Ettől a kampány látszólag működhet, üzletileg mégsem hoz elég értéket.</P>

        <H3>Duplikált konverziók</H3>
        <P>Egy lead vagy vásárlás többször mérődik. A riport szebb lesz. A döntés rosszabb.</P>

        <H3>Nincs eseményhierarchia</H3>
        <P>Egy gombkattintás, egy űrlapmegnyitás és egy valódi ajánlatkérés ugyanabba a kosárba kerül. Ez torzítja a teljesítményértékelést.</P>

        <H3>Nincs leadminőség-visszamérés</H3>
        <P>Sok lead érkezik, de nem tudjuk, melyikből lett ügyfél. Szolgáltató és B2B cégeknél ez kritikus. A marketing nem állhat meg az űrlapkitöltésnél — látni kell, mi történik utána.</P>

        <H3>Csak platformadatból döntünk</H3>
        <P>A Google Ads, Meta és TikTok adatai fontosak, de nem teljesek. A döntéshez sokszor kell GA4 adat, CRM adat, értékesítési visszajelzés, bevételi adat, leadminőségi adat. A platform azt mutatja, amit a platform lát — az üzlet ennél több.</P>

        <HR />

        <H2>Mikor kell mérési audit?</H2>
        <P>Mérési audit kell, ha:</P>
        <UL items={[
          "futnak kampányok, de nem látod a megtérülést",
          "eltérnek az adatok a rendszerek között",
          "túl sok vagy túl kevés konverzió látszik",
          "nem tudod, melyik kampány hoz ügyfelet",
          "nem egyértelmű, mire optimalizálnak a kampányok",
          "új ügynökség veszi át a fiókot",
          "nagyobb költés előtt rendbe akarod tenni az alapokat",
        ]} />
        <Blockquote>
          A mérési audit célja nem a bonyolítás. Hanem az, hogy tisztán látszódjon: melyik adat megbízható, melyik torzít, és mire lehet döntést építeni.
        </Blockquote>

        <HR />

        <H2>Hogyan néz ki egy profi mérési audit?</H2>
        <P>Egy mérési audit során nem csak azt nézzük, hogy „bent van-e a kód" — hanem azt, hogy a teljes mérési rendszer alkalmas-e üzleti döntésekre. Átnézzük többek között:</P>
        <ul className="mb-6 grid gap-2 sm:grid-cols-2">
          {auditCheckItems.map((item) => (
            <li key={item} className="flex gap-3 leading-7 text-neutral-300">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <P>A végén nem csak hibákat kell kapnod — hanem döntési javaslatot: mit kell javítani, mit kell újramérni, melyik konverzió legyen elsődleges, mit használjunk optimalizálásra, mit csak elemzésre, és hogyan nézzük a riportot.</P>

        <HR />

        <H2>Összefoglalás</H2>
        <P>A mérés nem adminisztráció. A mérés az a rendszer, ami megmondja, hogy a marketingpénz dolgozik-e vagy elfolyik. Ha nincs pontos mérés:</P>
        <UL items={[
          "rossz kampányt skálázhatsz",
          "jó kampányt állíthatsz le",
          "túlértékelhetsz gyenge leadeket",
          "alulértékelhetsz fontos csatornákat",
          "rossz riport alapján hozhatsz döntést",
        ]} />

        <div className="mt-12 rounded-[2rem] border border-rose-500/20 bg-rose-500/5 p-8">
          <p className="text-xl font-black text-white leading-relaxed">
            A jó mérés nem attól profi, hogy sok adatot gyűjt.
          </p>
          <p className="mt-4 text-lg leading-8 text-rose-200 font-semibold">
            Hanem attól, hogy segít válaszolni erre: melyik kampány hoz ügyfelet, melyik viszi a pénzt, és mit kell tenni a következő hónapban?
          </p>
        </div>

      </article>

      {/* CTA Section */}
      <section className="px-6 pb-10 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-white text-neutral-950 shadow-2xl">
          <div className="grid gap-0 lg:grid-cols-[1fr_0.85fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-600">Mérési audit</p>
              <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
                Szeretnéd tudni, hogy a marketingadataidra lehet-e döntést építeni?
              </h2>
              <p className="mt-5 text-lg leading-8 text-neutral-700">
                Ha futnak kampányaid, de nem vagy biztos benne, hogy pontosan mérsz, érdemes átnézni a rendszert.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:hello@blummarketing.hu?subject=M%C3%A9r%C3%A9si%20audit%20%E2%80%93%20Blummarketing"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-7 py-4 font-bold text-white transition hover:bg-neutral-800"
                >
                  Kérek mérési auditot
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
              <h3 className="text-3xl font-black">Megnézzük:</h3>
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
