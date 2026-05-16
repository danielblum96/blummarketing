import { ArrowRight, Check, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ogImage } from "@/lib/og";

export const metadata = {
  title: "TikTok hirdetések beállítása érthetően: mi micsoda, hogyan épül fel? | Blummarketing",
  description: "TikTok Business Center, Ads Manager, hirdetési fiók, Pixel és Events API – megmutatjuk mi micsoda, hogyan épül fel a TikTok hirdetési rendszer, és mire kell figyelni.",
  keywords: [
    "tiktok hirdetés",
    "tiktok business center",
    "tiktok ads manager",
    "tiktok pixel",
    "tiktok kampány",
    "ppc",
    "events api",
  ],
  openGraph: {
    title: "TikTok hirdetések beállítása érthetően: mi micsoda, hogyan épül fel? | Blummarketing",
    description: "TikTok Business Center, Ads Manager, hirdetési fiók, Pixel és Events API – megmutatjuk mi micsoda és mire kell figyelni.",
    type: "website",
    locale: "hu_HU",
    siteName: "Blummarketing",
    images: ogImage,
  },
};

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "TikTok hirdetések beállítása érthetően: mi micsoda, hogyan épül fel, és mire kell figyelni?",
    description: "TikTok Business Center, Ads Manager, hirdetési fiók, Pixel és Events API – megmutatjuk mi micsoda és mire kell figyelni.",
    author: { "@type": "Organization", name: "Blummarketing" },
    publisher: { "@type": "Organization", name: "Blummarketing", url: "https://blummarketing.hu" },
    datePublished: "2025-02-01",
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

const ctaItems = [
  "TikTok Business Center létrehozása vagy rendbe tétele",
  "Hirdetési fiók beállításainak ellenőrzése",
  "Jogosultságok és partnerek rendezése",
  "TikTok Pixel bekötése és tesztelése",
  "Events API mérés kialakítása",
  "Kampánystruktúra felépítése",
  "TikTok-kampányok kezelése és optimalizálása",
];

export default function TiktokHirdetesekArticle() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white antialiased">
      <JsonLd />

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.18),transparent_34%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_32%),linear-gradient(180deg,#0a0a0a_0%,#171717_100%)]" />
        <Navbar />

        <div className="mx-auto max-w-4xl px-6 pb-16 pt-14 lg:px-8">
          <a href="/tudastar/tiktok-hirdetesek/" className="mb-6 inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition">
            ← Vissza: TikTok hirdetések
          </a>
          <div className="flex flex-wrap gap-2 mb-6">
            {["TikTok Ads", "PPC", "Business Center", "Pixel"].map((tag) => (
              <span key={tag} className="rounded-full bg-rose-500/10 px-3 py-1 text-xs font-bold text-rose-300">{tag}</span>
            ))}
          </div>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl leading-tight">
            TikTok hirdetések beállítása érthetően: mi micsoda, hogyan épül fel, és mire kell figyelni?
          </h1>
          <p className="mt-6 text-xl leading-8 text-neutral-300">
            TikTok Business Center, Ads Manager, hirdetési fiók, Pixel és Events API – lépésről lépésre rendbe tesszük a TikTok hirdetési rendszer legfontosabb elemeit.
          </p>
          <div className="mt-6 flex items-center gap-4 text-sm text-neutral-300">
            <span>Blummarketing</span>
            <span>·</span>
            <span>2025. február 1.</span>
            <span>·</span>
            <span>~18 perc olvasás</span>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-6 pb-24 lg:px-8">

        <P>A TikTok hirdetési rendszere elsőre egyszerűnek tűnhet: létrehozunk egy fiókot, feltöltünk egy videót, beállítjuk a célzást, és már fut is a kampány.</P>
        <P>A gyakorlatban viszont gyorsan előjönnek a kérdések:</P>
        <UL items={[
          `„Mi az a TikTok Business Center?"`,
          `„Mi a különbség a Business Center és az Ads Manager között?"`,
          `„Mi az a hirdetési fiók?"`,
          `„Kell TikTok-fiók a hirdetéshez?"`,
          `„Mi az a TikTok Pixel?"`,
          `„Miért nem látja az ügynökség a kampányokat?"`,
          `„Ki legyen a tulajdonosa a TikTok hirdetési rendszernek?"`,
        ]} />
        <P>Ezek nagyon fontos kérdések, mert a TikTok hirdetések eredményessége nem csak a kreatívokon múlik. Legalább ennyire fontos, hogy a hirdetési rendszer technikailag és jogosultsági szinten is jól legyen felépítve.</P>
        <P>Ebben a cikkben lépésről lépésre rendbe tesszük a TikTok hirdetési rendszer legfontosabb elemeit:</P>
        <UL items={[
          <strong key="1">TikTok Business Center</strong>,
          <strong key="2">TikTok Ads Manager</strong>,
          <strong key="3">hirdetési fiók</strong>,
          <strong key="4">TikTok-fiók</strong>,
          <strong key="5">TikTok Pixel és Events API</strong>,
          <strong key="6">jogosultságok</strong>,
          <strong key="7">kampánystruktúra</strong>,
          <strong key="8">gyakori hibák és példák</strong>,
        ]} />

        <HR />

        <H2>A legfontosabb különbség röviden</H2>
        <Blockquote>
          <strong>A TikTok Business Center a céges adminisztrációs és jogosultsági központ.<br />
          A TikTok Ads Manager a kampánykezelő felület.<br />
          A hirdetési fiók az a konkrét account, ahol a kampányok, költések és eredmények vannak.<br />
          A TikTok-fiók pedig a márka nyilvános TikTok-megjelenése.</strong>
        </Blockquote>
        <P>Ez a négy elem nem ugyanaz, de szorosan kapcsolódnak egymáshoz.</P>

        <HR />

        <H2>Mi az a TikTok Business Center?</H2>
        <P>A <strong>TikTok Business Center</strong> a TikTok üzleti rendszereinek központi kezelőfelülete. Ez az a hely, ahol egy vállalkozás, márka vagy ügynökség egy helyen tudja kezelni a TikTokhoz kapcsolódó üzleti eszközeit: hirdetési fiókokat, TikTok-fiókokat, pixeleket, katalógusokat, partnereket és felhasználói jogosultságokat.</P>
        <Blockquote><strong>A TikTok Business Center a cég TikTok-admin központja.</strong></Blockquote>
        <P>Nem maga a kampánykezelő. Nem maga a hirdetési fiók. Nem maga a TikTok-profil. Hanem az a felső szintű üzleti rendszer, amelyben ezek az eszközök kezelhetők.</P>

        <H3>Mit tartalmazhat egy TikTok Business Center?</H3>
        <Table
          headers={["Eszköz", "Mire való?"]}
          rows={[
            ["Hirdetési fiók", "Itt futnak a TikTok kampányok"],
            ["TikTok-fiók", "A márka nyilvános TikTok-profilja"],
            ["TikTok Pixel", "Weboldali események mérése"],
            ["Events API", "Szerveroldali eseményküldés TikTok felé"],
            ["Katalógus", "Termékadatok kezelése webshopoknál"],
            ["Audience-ok", "Egyéni és hasonmás célközönségek"],
            ["Lead adatok", "Leadgeneráló kampányokból érkező adatok"],
            ["Emberek", "Belsős munkatársak"],
            ["Partnerek", "Ügynökségek, külsős PPC-sek"],
            ["Jogosultságok", "Ki mit láthat és kezelhet"],
          ]}
        />
        <P>A TikTok Business Center elsősorban <strong>tulajdonosi, hozzáférési és asset-kezelési központ</strong>.</P>

        <H3>PPC-s hasonlat</H3>
        <Blockquote>
          A <strong>TikTok Business Center</strong> olyan, mint egy cég irodaépülete. Ebben az épületben vannak különböző szobák: hirdetési fiók, TikTok-fiók, Pixel, katalógus, közönségek, partnerek és munkatársak.
        </Blockquote>
        <P>A Business Centerben nem feltétlenül napi szinten optimalizálod a kampányokat. Inkább itt döntöd el:</P>
        <UL items={[
          "ki fér hozzá a hirdetési fiókhoz",
          "ki kezelheti a TikTok-profilt",
          "melyik ügynökség kap jogosultságot",
          "ki láthatja a pixelt",
          "melyik hirdetési fiók használhatja a mérési eszközöket",
          "ki kezelheti a katalógust",
          "ki férhet hozzá a leadekhez",
        ]} />

        <H3>Példa: egy webshop TikTok-struktúrája</H3>
        <CodeBlock>{`Blum Shoes Business Center
│
├── Blum Shoes TikTok-fiók
├── Blum Shoes HU hirdetési fiók
├── TikTok Pixel
├── Events API kapcsolat
├── Termékkatalógus
├── Egyéni célközönségek
├── Belsős marketingesek
└── PPC-ügynökség partnerként`}</CodeBlock>
        <P>Ez a helyes felállás. A cég birtokolja az üzleti eszközöket, az ügynökség pedig kezelői hozzáférést kap.</P>

        <HR />

        <H2>Miért fontos a Business Center?</H2>
        <P>A Business Center azért kritikus, mert itt dől el a <strong>tulajdonjog és hozzáférés</strong>. Nem mindegy, hogy a cég vagy az ügynökség birtokolja a hirdetési fiókot, és hogy a TikTok Pixel a cég Business Centerében van-e, vagy egy régi freelancer fiókjához kötődik minden.</P>

        <H3>Tipikus rossz példa</H3>
        <P>Egy vállalkozás TikTok hirdetéseket szeretne indítani, ezért megbíz egy külsős PPC-st. A PPC-s gyorsan létrehoz mindent: saját Business Centerében, saját hozzáféréseivel, saját hirdetési fiókjában, saját mérési beállításaival.</P>
        <P>A kampányok elindulnak, jönnek az első eredmények, minden működni látszik. A gond akkor kezdődik, amikor a vállalkozás ügynökséget váltana, vagy saját kézbe venné a hirdetéseket. Ekkor kiderülhet, hogy az értékes TikTok-eszközök nem a cég tulajdonában vannak.</P>
        <P>Elveszhet:</P>
        <UL items={[
          "a kampányhistorika",
          "a tanulási előzmény",
          "a weboldali eseményadat",
          "a remarketing közönség",
          "a katalóguskapcsolat",
          "a teljesítményriportok folytonossága",
        ]} />

        <H3>Helyes felállás</H3>
        <CodeBlock>{`Cég saját TikTok Business Centere
│
├── Cég saját TikTok-fiókja
├── Cég saját hirdetési fiókja
├── Cég saját TikTok Pixelje
├── Cég saját Events API kapcsolata
├── Cég saját katalógusa
├── Cég saját célközönségei
│
└── Ügynökség / PPC-s partnerként hozzáadva`}</CodeBlock>
        <P>Ebben a modellben a vállalkozás marad a tulajdonos. Az ügynökség vagy PPC-s nem birtokolja az eszközöket, csak kezeli őket.</P>

        <HR />

        <H2>Mi az a TikTok Ads Manager?</H2>
        <P>A <strong>TikTok Ads Manager</strong> az a felület, ahol a TikTok hirdetési kampányokat létrehozod, kezeled, optimalizálod és elemzed. Ez egy all-in-one hirdetési platform, ahol kampányokat lehet indítani, célközönséget beállítani, költségkereteket kezelni és teljesítményt mérni.</P>
        <Blockquote><strong>A TikTok Ads Manager a kampánykezelő felület. Itt dolgozik napi szinten a PPC-s.</strong></Blockquote>

        <H3>Ads Manager vs. hirdetési fiók</H3>
        <Table
          headers={["Fogalom", "Mit jelent?"]}
          rows={[
            ["TikTok Ads Manager", "A kampánykezelő felület"],
            ["Hirdetési fiók", "Az a konkrét account, amelyben a kampányok és költések vannak"],
          ]}
        />
        <Blockquote>
          A TikTok Ads Manager olyan, mint a szoftver, amit megnyitsz. A hirdetési fiók pedig az a konkrét munkaterület, amelyben dolgozol.
        </Blockquote>
        <P>Egy PPC-s akár több hirdetési fiókot is láthat az Ads Managerben, ha több ügyfélhez vagy több márkához van hozzáférése.</P>

        <HR />

        <H2>Mi az a TikTok hirdetési fiók?</H2>
        <P>A <strong>TikTok hirdetési fiók</strong> az a konkrét account, amelyben a TikTok kampányok futnak. Itt található a kampánystruktúra, a költés, a számlázás, a fizetési mód, a célközönségek, a riportok, a konverziós eredmények, a hirdetések, a kreatívok és a teljesítményadatok.</P>

        <H3>Mire kell figyelni hirdetési fiók létrehozásakor?</H3>
        <P>A regisztráció során meg kell adni az üzleti adatokat és a megfelelő időzónát, <strong>amelyet később nem lehet megváltoztatni</strong>. Ezért már a fiók létrehozásakor fontos pontosan beállítani ezeket.</P>
        <P>Különösen figyelj ezekre:</P>
        <UL items={[
          "ország",
          "pénznem",
          "időzóna",
          "céges adatok",
          "számlázási információk",
          "fizetési mód",
          "Business Centerhez kapcsolás",
        ]} />

        <H3>Példa: rossz időzóna problémája</H3>
        <P>Egy magyar webshop véletlenül amerikai időzónával hozza létre a TikTok hirdetési fiókot. Elsőre ez nem tűnik nagy gondnak. Később viszont a napi riportokban furcsaságok jelennek meg: a költések nem a magyar napok szerint látszanak, a konverziós adatok elcsúsznak, a kampányok napi teljesítménye nehezebben értelmezhető, a riportálás nem egyezik a webshop analitikájával.</P>
        <P>Ezért a hirdetési fiók létrehozásakor nem szabad kapkodni.</P>

        <HR />

        <H2>Hogyan épül fel egy TikTok kampány?</H2>
        <P>A TikTok Ads Manager kampánystruktúrája három fő szintből áll:</P>
        <CodeBlock>{`Kampány
│
├── Hirdetéscsoport
│   └── Hirdetés`}</CodeBlock>

        <H3>1. Kampány</H3>
        <P>A kampány szintjén választod ki a fő üzleti célt. Ez válaszolja meg: <em>Mit szeretnénk elérni?</em></P>
        <UL items={[
          "forgalom",
          "konverzió",
          "leadgenerálás",
          "alkalmazástelepítés",
          "videómegtekintés",
          "reach",
          "termékértékesítés",
        ]} />

        <H3>2. Hirdetéscsoport</H3>
        <P>A hirdetéscsoport szintjén állítod be a kampány működésének legfontosabb részleteit. Ez válaszolja meg: <em>Kinek, hol, mennyiért és milyen optimalizálással hirdetünk?</em></P>
        <UL items={[
          "célközönség",
          "placementek",
          "költségkeret",
          "ütemezés",
          "licitálási stratégia",
          "optimalizálási esemény",
          "cél URL",
          "pixel vagy esemény kiválasztása",
        ]} />

        <H3>3. Hirdetés</H3>
        <P>A hirdetés szintjén található maga a kreatív. Ez válaszolja meg: <em>Mit lát pontosan a felhasználó?</em></P>
        <UL items={[
          "videó",
          "borítókép",
          "hirdetésszöveg",
          "CTA-gomb",
          "céloldal",
          "TikTok-fiókhoz kapcsolódó megjelenés",
          "Spark Ads esetén organikus TikTok-videó használata",
        ]} />

        <H3>Példa: webshop TikTok kampánystruktúra</H3>
        <CodeBlock>{`Kampány: Sneaker kollekció – Konverzió
│
├── Hirdetéscsoport 1: Hideg célközönség – 18–34
│   ├── Hirdetés: UGC videó – első benyomás
│   ├── Hirdetés: Try-on videó – outfit inspiráció
│   └── Hirdetés: Unboxing videó
│
├── Hirdetéscsoport 2: Weboldal látogatók remarketing
│   ├── Hirdetés: „Még gondolkodsz?" üzenet
│   └── Hirdetés: Bestseller sneaker válogatás
│
└── Hirdetéscsoport 3: Kosárelhagyók
    ├── Hirdetés: Ingyenes szállítás kommunikáció
    └── Hirdetés: Limitált készlet üzenet`}</CodeBlock>

        <HR />

        <H2>Mi az a TikTok-fiók?</H2>
        <P>A <strong>TikTok-fiók</strong> a márka nyilvános TikTok-profilja. Ez az, amit a felhasználók látnak: profilnév, felhasználónév, profilkép, bio, link, organikus videók, követők, kommentek, aktivitás.</P>
        <Blockquote><strong>A TikTok-fiók a márka nyilvános TikTok-arca.</strong></Blockquote>

        <H3>Kell TikTok-fiók a hirdetéshez?</H3>
        <P>Márkaépítés és hitelesség szempontjából erősen ajánlott, hogy a vállalkozásnak legyen saját, rendesen beállított TikTok-fiókja. A TikTok Business Centerben a TikTok-fiók összekapcsolható a Business Centerrel, és külön jogosultság adható például ügyfélszolgálati kezelésre vagy hirdetések futtatására.</P>
        <P>Egy jól felépített TikTok-profil:</P>
        <UL items={[
          "növeli a bizalmat",
          "erősíti a márkát",
          "segíti a hirdetések hitelességét",
          "támogatja a remarketinget",
          "organikus és fizetett tartalmakat is összekapcsolhat",
        ]} />

        <H3>Példa: miért fontos a TikTok-profil?</H3>
        <P>Képzeld el, hogy egy kozmetikai márka hirdet TikTokon. A hirdetésben egy UGC-jellegű videó fut. Ha a felhasználó rákattint a márkára, és egy jól felépített TikTok-profilt lát – valódi videókkal, vásárlói reakciókkal, termékbemutatókkal, egységes arculattal – akkor nagyobb eséllyel bízik meg a márkában.</P>
        <P>Ha viszont a profil üres, nincs profilkép, nincs bio, nincs tartalom, az gyengítheti a hirdetés hatását.</P>

        <HR />

        <H2>Mi az a TikTok Pixel?</H2>
        <P>A <strong>TikTok Pixel</strong> egy mérőkód, amelyet a weboldalra kell telepíteni. Feladata, hogy adatot küldjön a TikTok felé arról, mit csinálnak a látogatók a weboldalon.</P>
        <UL items={[
          "oldalmegtekintés",
          "termékmegtekintés",
          "kosárba helyezés",
          "fizetés megkezdése",
          "vásárlás",
          "regisztráció",
          "ajánlatkérés",
          "lead beküldés",
        ]} />

        <H3>Miért fontos a Pixel?</H3>
        <P>Pixel nélkül a TikTok sokkal kevesebbet tud arról, hogy mi történik a weboldalon. Nehezebb lesz:</P>
        <UL items={[
          "vásárlásra optimalizálni",
          "leadre optimalizálni",
          "remarketing közönséget építeni",
          "kosárelhagyókat újracélozni",
          "megtalálni a legértékesebb felhasználókat",
          "pontosabban mérni a kampányok eredményét",
        ]} />

        <H3>Példa: webshop eseménymérés</H3>
        <P>Egy webshopnál tipikus TikTok Pixel események:</P>
        <CodeBlock>{`PageView
ViewContent
AddToCart
InitiateCheckout
CompletePayment`}</CodeBlock>
        <Table
          headers={["Esemény", "Mit jelent?"]}
          rows={[
            ["PageView", "Valaki betöltötte az oldalt"],
            ["ViewContent", "Valaki megnézett egy terméket"],
            ["AddToCart", "Valaki kosárba tett egy terméket"],
            ["InitiateCheckout", "Valaki elindította a fizetést"],
            ["CompletePayment", "Valaki vásárolt"],
          ]}
        />
        <P>Ha ezek jól mérődnek, akkor a TikTok algoritmusa jobban tud optimalizálni.</P>

        <HR />

        <H2>Mi az az Events API?</H2>
        <P>Az <strong>Events API</strong> a TikTok szerveroldali eseményküldési megoldása. A Pixel jellemzően böngészőoldali mérést végez. Az Events API ezzel szemben szerveroldalon tud eseményeket továbbítani a TikTok felé – ez egy biztonságos server-to-server kapcsolat.</P>
        <Blockquote>
          <strong>A Pixel a böngészőből küld adatot.<br />
          Az Events API a szerveroldalról küld adatot.</strong><br />
          A kettő együtt stabilabb mérést adhat.
        </Blockquote>
        <P>Az Events API különösen hasznos lehet akkor, ha:</P>
        <UL items={[
          "fontos a pontosabb konverziómérés",
          "sok vásárlás vagy lead érkezik",
          "webshopot hirdetünk",
          "CRM-ből vagy backendből is küldenénk adatot",
          "szeretnénk csökkenteni a böngészős mérési veszteséget",
          "komolyabb skálázásra készülünk",
        ]} />

        <H3>Példa: leadgenerálás pixelmérése</H3>
        <P>Egy nyelviskola TikTok hirdetést futtat, célja érdeklődők szerzése angol nyelvtanfolyamra. A weboldalon van egy <em>„Kérj ingyenes szintfelmérőt!"</em> űrlap. A Pixel események így nézhetnek ki:</P>
        <CodeBlock>{`PageView – valaki betöltötte az oldalt
ViewContent – valaki megnézte a tanfolyam aloldalt
SubmitForm / CompleteRegistration – valaki elküldte az űrlapot`}</CodeBlock>
        <P>Ha ez jól van beállítva, a TikTok nem csak kattintásokat fog mérni, hanem azt is látja, kikből lett valódi érdeklődő. Ez alapján a kampány jobban tud optimalizálni.</P>

        <HR />

        <H2>Jogosultságok TikTokon: ki mit láthat?</H2>
        <P>A TikTok Business Center egyik legfontosabb funkciója a jogosultságkezelés. Az account- és asset-szintű jogosultságok határozzák meg, hogy a tagok és partnerek hogyan férhetnek hozzá a Business Center erőforrásaihoz: hirdetési fiókokhoz, TikTok-fiókokhoz, pixelekhez, katalógusokhoz, közönségekhez és leadekhez.</P>

        <H3>Nem elég „hozzáadni valakit"</H3>
        <P>Sokszor az ügyfél azt mondja: <em>„Meghívtunk a TikTok Business Centerbe."</em> Ez jó első lépés, de önmagában nem biztos, hogy elég. Külön hozzáférést kell adni például:</P>
        <UL items={[
          "a hirdetési fiókhoz",
          "a TikTok-fiókhoz",
          "a Pixelhez",
          "a katalógushoz",
          "a lead adatokhoz",
          "a közönségekhez",
        ]} />
        <P>Ezért fordulhat elő, hogy valakit meghívtak, mégsem látja a kampányokat.</P>

        <H3>Példa: miért nem látja a PPC-s a kampányokat?</H3>
        <P>Egy ügyfél meghívja a PPC-st a TikTok Business Centerbe. A PPC-s belép, de nem lát semmilyen hirdetési fiókot. Ennek oka lehet, hogy csak Business Center tag lett, de nem kapott hozzáférést a hirdetési fiókhoz – vagy az ad account egy másik Business Centerben van. A megoldás: nemcsak embert kell hozzáadni, hanem az adott embert vagy partnert hozzá kell rendelni a megfelelő assetekhez.</P>

        <HR />

        <H2>Ügynökségi hozzáférés: hogyan érdemes csinálni?</H2>
        <P>Ha egy vállalkozás ügynökséggel vagy külsős PPC-s szakemberrel dolgozik, a legjobb megoldás nem az, hogy átadja a saját belépési adatait.</P>
        <Blockquote><strong>Az ügynökség partnerként kap hozzáférést a cég Business Centeréhez és a szükséges eszközökhöz.</strong></Blockquote>
        <P>Ez biztonságosabb, átláthatóbb és hosszú távon fenntarthatóbb. Az ideális modell:</P>
        <CodeBlock>{`Ügyfél saját Business Centere
│
├── Ügyfél saját hirdetési fiókja
├── Ügyfél saját TikTok Pixelje
├── Ügyfél saját TikTok-fiókja
├── Ügyfél saját katalógusa
│
└── Ügynökség partnerként hozzáadva`}</CodeBlock>
        <P>Ez azért jó, mert az ügyfél marad a tulajdonos, az ügynökség tud dolgozni, nem kell jelszót megosztani, ügynökségváltáskor visszavonható a hozzáférés, és nem vesznek el a kampányadatok.</P>

        <HR />

        <H2>Gyakori hibák TikTok hirdetési beállításnál</H2>

        <H4>1. Nem a cég tulajdonában van a hirdetési fiók</H4>
        <P>Ez az egyik legnagyobb hiba. Ha a hirdetési fiók az ügynökség vagy freelancer Business Centerében van, a cég hosszú távon kiszolgáltatott helyzetbe kerülhet.</P>

        <H4>2. Rossz időzóna vagy üzleti adat</H4>
        <P>A hirdetési fiók létrehozásakor az időzóna kritikus beállítás, és <strong>később nem módosítható</strong>. Ezért ezt már az elején pontosan kell beállítani.</P>

        <H4>3. Nincs Pixel</H4>
        <P>Pixel nélkül lehet kampányt indítani, de konverziós kampányoknál komoly hátrányt jelent. Ha a cél vásárlás, lead vagy ajánlatkérés, a mérés nélkülözhetetlen.</P>

        <H4>4. Rosszul mér a Pixel</H4>
        <P>Nem elég telepíteni a Pixelt – ellenőrizni kell, hogy a megfelelő események futnak-e. Ha a vásárlás esemény nem mérődik, a TikTok nem tud jól vásárlásra optimalizálni.</P>

        <H4>5. Nincs Events API</H4>
        <P>Nem minden esetben kötelező, de komolyabb hirdetési rendszereknél, webshopoknál és nagyobb költésnél erősen ajánlott.</P>

        <H4>6. Rossz jogosultságokat adnak</H4>
        <P>Gyakori, hogy a PPC-s csak részleges hozzáférést kap: látja a hirdetési fiókot, de nem látja a Pixelt. Vagy látja a kampányokat, de nem tudja kezelni a fizetési beállításokat.</P>

        <H4>7. A TikTok-profil nincs rendesen beállítva</H4>
        <P>Minimum legyen rendben: profilkép, felhasználónév, bio, weboldal link, néhány organikus tartalom, egységes vizuális megjelenés.</P>

        <HR />

        <H2>Gyakorlati példák</H2>

        <H3>Helyi szolgáltató: fogászat TikTok kampánya</H3>
        <P>Cél: konzultációs időpontfoglalások szerzése Budapesten.</P>
        <CodeBlock>{`Fogászat Business Center
│
├── Fogászat TikTok-fiók
├── Fogászat hirdetési fiók
├── TikTok Pixel
├── Events API
└── Lead kampányok`}</CodeBlock>
        <CodeBlock>{`Kampány: Fogászati konzultáció – Lead
│
├── Hirdetéscsoport 1: Budapest 25–45
│   ├── Hirdetés: Orvos bemutatkozó videó
│   └── Hirdetés: Páciens edukációs videó
│
├── Hirdetéscsoport 2: Weboldal látogatók remarketing
│   └── Hirdetés: „Foglalj konzultációt" üzenet
│
└── Hirdetéscsoport 3: Űrlapmegnyitók, de nem beküldők
    └── Hirdetés: Bizalomépítő videó`}</CodeBlock>

        <H3>Webshop TikTok hirdetése</H3>
        <P>Egy divat webshop TikTokon szeretne értékesíteni. A kampánylogika:</P>
        <CodeBlock>{`Kampány 1: Hideg célközönség – Új vásárlók
Kampány 2: Remarketing – Termékmegtekintők
Kampány 3: Kosárelhagyók
Kampány 4: Visszatérő vásárlók`}</CodeBlock>
        <P>Kreatívok: UGC videók, outfit inspirációk, termékbemutatók, vásárlói visszajelzések, unboxing videók. TikTokon különösen fontos, hogy a kreatív ne tűnjön túl steril reklámnak – a natív, emberi és gyorsan fogyasztható videók általában jobban működnek.</P>

        <HR />

        <H2>TikTok kampányindítás előtti ellenőrzőlista</H2>

        <H3>Business Center</H3>
        <UL items={[
          "Van saját TikTok Business Centere a cégnek?",
          "A cég a tulajdonos, nem régi freelancer vagy ügynökség?",
          "Vannak megfelelő adminok?",
          "Be vannak állítva a partnerek és jogosultságok?",
          "Nincs bent felesleges régi hozzáférés?",
        ]} />

        <H3>Hirdetési fiók</H3>
        <UL items={[
          "A megfelelő Business Centerhez tartozik?",
          "Jó az ország, pénznem és időzóna?",
          "Rendben van a fizetési mód?",
          "A PPC-s vagy ügynökség hozzáfér?",
        ]} />

        <H3>TikTok-fiók</H3>
        <UL items={[
          "Össze van kapcsolva a Business Centerrel?",
          "Rendben van a profilkép, bio és weboldal link?",
          "Vannak organikus tartalmak?",
          "A hirdetések megfelelő márkanév alatt jelennek meg?",
        ]} />

        <H3>Pixel és Events API</H3>
        <UL items={[
          "Telepítve van a Pixel?",
          "Jól mérnek az események?",
          "Webshopnál mérődik a vásárlás?",
          "Leadkampánynál mérődik az űrlapbeküldés?",
          "Be van kötve az Events API?",
          "Tesztelve vannak az események?",
        ]} />

        <H3>Kampánystruktúra</H3>
        <UL items={[
          "Egyértelmű a kampánycél?",
          "Külön vannak választva a hideg és remarketing célközönségek?",
          "Jó optimalizálási esemény van kiválasztva?",
          "Van elég kreatív teszteléshez?",
          "Be van állítva a mérés és riportálás?",
        ]} />

        <HR />

        <H2>Gyors összefoglaló: mi micsoda?</H2>
        <Table
          headers={["Fogalom", "Mit jelent?", "Miért fontos?"]}
          rows={[
            ["TikTok Business Center", "Céges admin és asset-kezelő központ", "Tulajdonjog, jogosultságok, partnerek"],
            ["TikTok Ads Manager", "Kampánykezelő felület", "Itt hozod létre és kezeled a kampányokat"],
            ["Hirdetési fiók", "Konkrét ad account kampányokkal és költésekkel", "Itt vannak az adatok, riportok, számlázás"],
            ["TikTok-fiók", "Márka nyilvános TikTok-profilja", "Hitelesség, organikus jelenlét, márkaidentitás"],
            ["TikTok Pixel", "Weboldali mérőkód", "Konverziómérés és optimalizálás"],
            ["Events API", "Szerveroldali eseményküldés", "Stabilabb és pontosabb adatkapcsolat"],
            ["Katalógus", "Termékadatok rendszere", "Webshopos és dinamikus hirdetésekhez"],
            ["Partnerhozzáférés", "Ügynökségi hozzáférési modell", "Biztonságos együttműködés"],
          ]}
        />

        <div className="mt-12 rounded-[2rem] border border-rose-500/20 bg-rose-500/5 p-8">
          <p className="text-xl font-black text-white leading-relaxed">A legfontosabb tanulság:</p>
          <p className="mt-4 text-lg leading-8 text-rose-200 font-semibold">
            A stabil és skálázható TikTok hirdetési rendszer alapja a saját céges Business Center, a saját hirdetési fiók, a helyesen beállított TikTok-fiók, a pontos Pixel-mérés, lehetőség szerint az Events API, a rendezett jogosultságok és a jól átgondolt kampánystruktúra.
          </p>
          <p className="mt-3 text-neutral-300">Ha ezek rendben vannak, a kampányok sokkal átláthatóbban, mérhetőbben és hatékonyabban kezelhetők.</p>
        </div>

      </article>

      {/* CTA Section */}
      <section className="px-6 pb-10 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-white text-neutral-950 shadow-2xl">
          <div className="grid gap-0 lg:grid-cols-[1fr_0.85fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-600">Kezdjük el</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Szeretnéd, hogy a TikTok hirdetéseid profi rendszerben működjenek?
              </h2>
              <p className="mt-5 text-lg leading-8 text-neutral-700">
                A TikTokon nem elég egyszerűen jelen lenni. Fontos, hogy a hirdetési fiók, a mérés, a kampánystruktúra és a kreatív stratégia is jól legyen felépítve.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:hello@blummarketing.hu?subject=TikTok%20hirdet%C3%A9sek%20%E2%80%93%20Blummarketing"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-7 py-4 font-bold text-white transition hover:bg-neutral-800"
                >
                  Email küldése
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
              <h3 className="mt-6 text-3xl font-black">Mit teszünk rendbe nálad?</h3>
              <ul className="mt-6 space-y-4 text-neutral-300">
                {ctaItems.map((item) => (
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
