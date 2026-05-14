import { ArrowRight, Check, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Meta üzleti portfólió, Hirdetéskezelő és Facebook-oldal: mi micsoda? | Blummarketing",
  description: "Megmutatjuk mi a különbség az üzleti portfólió, hirdetési fiók és Facebook-oldal között – és miért kritikus ez a PPC-kampányaidhoz.",
  keywords: [
    "meta üzleti portfólió",
    "hirdetéskezelő",
    "facebook oldal",
    "meta ads manager",
    "ppc",
    "hirdetési fiók",
  ],
  openGraph: {
    title: "Meta üzleti portfólió, Hirdetéskezelő és Facebook-oldal: mi micsoda? | Blummarketing",
    description: "Megmutatjuk mi a különbség az üzleti portfólió, hirdetési fiók és Facebook-oldal között – és miért kritikus ez a PPC-kampányaidhoz.",
    type: "website",
    locale: "hu_HU",
    siteName: "Blummarketing",
  },
};

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Meta üzleti portfólió, Hirdetéskezelő és Facebook-oldal: mi micsoda, és miért fontos PPC-ben?",
    description: "Megmutatjuk mi a különbség az üzleti portfólió, hirdetési fiók és Facebook-oldal között – és miért kritikus ez a PPC-kampányaidhoz.",
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

const ctaChecklistItems = [
  "Üzleti portfólió átnézése",
  "Hirdetési fiók beállításainak ellenőrzése",
  "Pixel- és eseménymérés auditja",
  "Kampánystruktúra felépítése",
  "Meta-kampányok kezelése és optimalizálása",
  "Hirdetési eredmények javítása",
];

export default function MetaPortfolioArticle() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white antialiased">
      <JsonLd />

      {/* Navbar */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.18),transparent_34%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_32%),linear-gradient(180deg,#0a0a0a_0%,#171717_100%)]" />
        <Navbar basePath="" />

        {/* Article hero */}
        <div className="mx-auto max-w-4xl px-6 pb-16 pt-14 lg:px-8">
          <a href="/blog/" className="mb-6 inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition">
            ← Vissza a blogra
          </a>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Meta Ads", "PPC", "Facebook", "Hirdetéskezelő"].map((tag) => (
              <span key={tag} className="rounded-full bg-rose-500/10 px-3 py-1 text-xs font-bold text-rose-300">{tag}</span>
            ))}
          </div>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl leading-tight">
            Meta üzleti portfólió, Hirdetéskezelő és Facebook-oldal: mi micsoda, és miért fontos PPC-ben?
          </h1>
          <p className="mt-6 text-xl leading-8 text-neutral-300">
            Megmutatjuk mi a különbség az üzleti portfólió, hirdetési fiók és Facebook-oldal között – és miért kritikus ez a PPC-kampányaidhoz.
          </p>
          <div className="mt-6 flex items-center gap-4 text-sm text-neutral-500">
            <span>Blummarketing</span>
            <span>·</span>
            <span>2025. január 1.</span>
            <span>·</span>
            <span>~15 perc olvasás</span>
          </div>
        </div>
      </section>

      {/* Article content */}
      <article className="mx-auto max-w-4xl px-6 pb-24 lg:px-8">

        <P>
          Ha valaha kezeltél már Meta-hirdetéseket, vagy csak megpróbáltál hozzáférést adni egy PPC-snek, ügynökségnek vagy marketingesnek, nagy eséllyel találkoztál ezzel a káosszal:
        </P>
        <UL items={[
          `„Van Facebook-oldalam, akkor van hirdetési fiókom is?"`,
          `„A Business Suite ugyanaz, mint a Hirdetéskezelő?"`,
          `„Mi az az üzleti portfólió?"`,
          `„Miért nem látja az ügynökség a pixelt?"`,
          `„Kié valójában a hirdetési fiók?"`,
        ]} />
        <P>
          Ezek teljesen jogos kérdések. A Meta rendszere elsőre bonyolultnak tűnik, mert több különböző szintből áll. Ráadásul a Meta az évek során átnevezett több fogalmat, így amit régebben Business Managerként ismertünk, az ma sok helyen üzleti portfólióként jelenik meg.
        </P>
        <P>Ebben a cikkben teljesen rendbe tesszük a három legfontosabb alapfogalmat:</P>
        <UL items={[
          <strong key="1">üzleti portfólió</strong>,
          <strong key="2">hirdetéskezelő / hirdetési fiók</strong>,
          <strong key="3">Facebook-oldal</strong>,
        ]} />
        <P>Megnézzük, melyik mire való, hogyan kapcsolódnak egymáshoz, és miért kritikus, hogy egy vállalkozásnál ezek jól legyenek beállítva.</P>

        <HR />

        <H2>A legfontosabb különbség röviden</H2>
        <P>Mielőtt mélyebbre megyünk, érdemes fejben tartani ezt az egyszerű mondatot:</P>
        <Blockquote>
          <strong>Az üzleti portfólió birtokolja és rendszerezi a Meta-eszközöket.<br />
          A hirdetési fiók futtatja a hirdetéseket.<br />
          A Facebook-oldal adja a hirdetések nyilvános márkaidentitását.</strong>
        </Blockquote>
        <P>Ez a három fogalom nem ugyanaz, még akkor sem, ha a mindennapi beszédben sokszor összekeverjük őket.</P>

        <HR />

        <H2>Mi az üzleti portfólió?</H2>
        <P>
          Az <strong>üzleti portfólió</strong> a Meta rendszerében az a felső szintű üzleti egység, ahol egy cég, márka vagy szervezet összefogja a Meta-eszközeit.
        </P>
        <P>Régebben ezt sokan <strong>Business Managerként</strong> ismerték. Ma a Meta több helyen <strong>üzleti portfólióként</strong> hivatkozik rá.</P>
        <Blockquote><strong>Az üzleti portfólió a cég Meta-admin központja.</strong></Blockquote>
        <P>Nem maga a Facebook-oldal. Nem maga a hirdetési fiók. Nem maga az Instagram-fiók. Hanem az a keretrendszer, amelyben ezek az eszközök kezelhetők.</P>

        <H3>Mit tartalmazhat egy üzleti portfólió?</H3>
        <Table
          headers={["Eszköz", "Mire való?"]}
          rows={[
            ["Facebook-oldal", "A cég vagy márka nyilvános Facebook-megjelenése"],
            ["Instagram-fiók", "A márka Instagram-jelenléte"],
            ["Hirdetési fiók", "Itt futnak a Meta-kampányok"],
            ["Pixel / dataset", "Weboldali események mérése"],
            ["Katalógus", "Termékek kezelése dinamikus hirdetésekhez"],
            ["Domain", "Weboldal hitelesítése és eseménypriorizálás"],
            ["Emberek", "Munkatársak, adminok, marketingesek"],
            ["Partnerek", "Ügynökségek, külsős PPC-sek"],
            ["Fizetési adatok", "Hirdetési költések számlázása"],
          ]}
        />
        <P>Az üzleti portfólió tehát nem kampánykezelő felület, hanem <strong>tulajdonosi és jogosultsági központ</strong>.</P>

        <H3>Példa: egy webshop Meta-struktúrája</H3>
        <P>Tegyük fel, hogy van egy cipőket áruló webshopod, a neve legyen: <strong>Blum Shoes</strong></P>
        <P>Ebben az esetben az üzleti portfólió lehet: <em>Blum Shoes Kft. üzleti portfólió</em></P>
        <P>Ebben az üzleti portfólióban lehet:</P>
        <UL items={[
          "Blum Shoes Facebook-oldal",
          "@blumshoes Instagram-fiók",
          "Blum Shoes HU hirdetési fiók",
          "Blum Shoes Meta pixel",
          "Blum Shoes termékkatalógus",
          "blumshoes.hu domain",
          "belsős marketingesek",
          "külsős PPC-ügynökség",
        ]} />

        <H3>PPC-s hasonlat</H3>
        <Blockquote>
          Az <strong>üzleti portfólió</strong> olyan, mint egy cég irodaépülete. Ebben az épületben több szoba is van: hirdetési fiók, Facebook-oldal, Instagram-fiók, pixel, katalógus, jogosultságok.
        </Blockquote>
        <P>Az üzleti portfólió nem az a hely, ahol napi szinten kampányt optimalizálsz. Inkább az a hely, ahol eldől:</P>
        <UL items={[
          "ki a tulajdonos",
          "ki fér hozzá",
          "ki kezelheti az oldalt",
          "ki kezelheti a hirdetési fiókot",
          "melyik pixel melyik hirdetési fiókkal használható",
          "melyik ügynökség kap jogosultságot",
          "ki tud új embereket hozzáadni",
        ]} />

        <HR />

        <H2>Miért fontos az üzleti portfólió?</H2>
        <P>PPC-ben az üzleti portfólió azért kritikus, mert itt dől el a <strong>tulajdonjog</strong>.</P>
        <P>Nem mindegy, hogy:</P>
        <UL items={[
          "a vállalkozás birtokolja a hirdetési fiókot",
          "az ügynökség birtokolja a hirdetési fiókot",
          "egy volt alkalmazott profiljához kötődik minden",
          "vagy egy random freelancer hozta létre évekkel ezelőtt",
        ]} />
        <P>Egy rosszul felépített Meta-struktúra később komoly problémákat okozhat.</P>

        <H3>Tipikus rossz példa</H3>
        <P>Egy vállalkozás elindítja a Meta-hirdetéseket. Megbíznak egy freelancert, aki gyorsan létrehoz mindent.</P>
        <P>A freelancer saját üzleti portfóliójában létrehozza a hirdetési fiókot, saját hozzáférésével beállítja a pixelt, ő kapcsolja össze az oldalt, ő kezeli a fizetési adatokat.</P>
        <P>Elsőre minden működik. Futnak a kampányok, jönnek a vásárlások, van forgalom.</P>
        <P>A probléma akkor kezdődik, amikor a cég később ügynökséget váltana, vagy saját kézbe venné a hirdetéseket. Ekkor kiderülhet, hogy:</P>
        <UL items={[
          "a hirdetési fiók nem a cégé",
          "a pixel nem a cégé",
          "a historikus kampányadatok idegen portfólióban vannak",
          "az új ügynökség nem tud rendesen hozzáférni",
          "a cég nem tudja teljesen kontrollálni a saját marketingrendszerét",
        ]} />
        <P>Ez óriási üzleti kockázat.</P>

        <H3>Helyes felállás</H3>
        <P>A jó struktúra így néz ki:</P>
        <CodeBlock>{`Cég saját üzleti portfóliója
│
├── Cég saját Facebook-oldala
├── Cég saját Instagram-fiókja
├── Cég saját hirdetési fiókja
├── Cég saját pixel / dataset
├── Cég saját katalógusa
├── Cég saját domainje
│
└── Ügynökség vagy PPC-s partnerként hozzáadva`}</CodeBlock>
        <P>
          Ebben a modellben a cég marad a tulajdonos, az ügynökség pedig csak kezelői hozzáférést kap. Ez azért jó, mert ha később ügynökségváltás történik, nem vész el a kampányhistorika, a pixeladat, a katalógus, a domain-hozzáférés, a hirdetési fiók, a mérési infrastruktúra.
        </P>

        <HR />

        <H2>Mi a hirdetéskezelő?</H2>
        <P>
          A <strong>Hirdetéskezelő</strong>, vagyis <strong>Meta Ads Manager</strong>, az a felület, ahol a Meta-kampányokat létrehozod, kezeled és elemzed. Itt dolgozik napi szinten a PPC-s.
        </P>

        <H3>Hirdetéskezelő vs. hirdetési fiók</H3>
        <Table
          headers={["Fogalom", "Mit jelent?"]}
          rows={[
            ["Hirdetéskezelő", "Az a felület, ahol kampányokat kezelsz"],
            ["Hirdetési fiók", "Az a konkrét account, amelyben a kampányok, költések és eredmények vannak"],
          ]}
        />
        <Blockquote>
          A Hirdetéskezelő olyan, mint a szoftver, amit megnyitsz. A hirdetési fiók pedig az a konkrét munkaterület, amelyben dolgozol.
        </Blockquote>

        <H3>Mi található a hirdetési fiókban?</H3>
        <UL items={[
          "kampányok",
          "hirdetéssorozatok",
          "hirdetések",
          "célközönségek",
          "költések",
          "számlázási adatok",
          "fizetési módok",
          "riportok",
          "konverziós eredmények",
          "attribúciós adatok",
        ]} />

        <H3>A kampánystruktúra</H3>
        <P>A hirdetési fiókon belül a kampányok három fő szintből állnak:</P>
        <CodeBlock>{`Hirdetési fiók
│
├── Kampány
│   ├── Hirdetéssorozat
│   │   └── Hirdetés`}</CodeBlock>

        <H4>Kampány</H4>
        <P>A kampány szintjén választod ki a fő célt: értékesítés, leadgenerálás, forgalom, aktivitás, alkalmazástelepítés, márkaismertség.</P>

        <H4>Hirdetéssorozat</H4>
        <P>A hirdetéssorozat szintjén állítod be a célközönséget, a költségkeretet, az ütemezést, az elhelyezéseket, az optimalizálási eseményt, a remarketing vagy hideg célzás logikáját.</P>

        <H4>Hirdetés</H4>
        <P>A hirdetés szintjén van maga a kreatív: kép, videó, carousel, szöveg, címsor, leírás, CTA-gomb, cél URL.</P>

        <H3>Példa: webshop kampánystruktúra</H3>
        <CodeBlock>{`Blum Shoes HU hirdetési fiók
│
├── Kampány: Nyári szandál akció – Sales
│   │
│   ├── Hirdetéssorozat 1: Hideg célközönség – Nők 25–45
│   │   ├── Hirdetés: Videós kreatív
│   │   └── Hirdetés: Carousel termékválogatás
│   │
│   ├── Hirdetéssorozat 2: Remarketing – Kosárelhagyók
│   │   ├── Hirdetés: 10% kedvezmény üzenet
│   │   └── Hirdetés: Ingyenes szállítás üzenet
│   │
│   └── Hirdetéssorozat 3: Lookalike vásárlók alapján
│       └── Hirdetés: Bestseller termékek`}</CodeBlock>

        <HR />

        <H2>Miért kritikus a hirdetési fiók?</H2>
        <P>A hirdetési fiókban van a PPC-munka egyik legértékesebb része: az adat. Ide tartozik, hogy milyen kampányok futottak, milyen célzások működtek, milyen kreatívokra reagált a piac, mennyi volt a költés, mennyi volt a bevétel, milyen konverziós adatok gyűltek, milyen remarketing közönségek épültek.</P>

        <H3>Tipikus hirdetési fiókos hibák</H3>

        <H4>1. Rossz cégnél van a hirdetési fiók</H4>
        <P>Ez akkor történik, amikor a hirdetési fiókot nem az ügyfél üzleti portfóliójában hozták létre, hanem például az ügynökségében. Ez hosszú távon kockázatos.</P>

        <H4>2. Rossz pénznem vagy időzóna</H4>
        <P>A hirdetési fiók létrehozásakor a pénznem és az időzóna különösen fontos. Ha rosszul lett beállítva, kellemetlen riportálási és számlázási problémákat okozhat:</P>
        <UL items={[
          "magyar cég, de USD-ben költ",
          "magyar piac, de amerikai időzónában futnak a riportok",
          "napi költések és konverziók elcsúszva jelennek meg",
        ]} />

        <H4>3. Nincs megfelelő fizetési mód</H4>
        <P>Ha a fizetési mód hibás, lejárt vagy limitált, a kampányok leállhatnak. Ez különösen problémás Black Friday alatt, szezonális kampányban, nagy promóció idején.</P>

        <H4>4. Nincs hozzákapcsolva a megfelelő pixel</H4>
        <P>Ha a hirdetési fiók nem tudja használni a megfelelő pixelt vagy datasetet, akkor a kampányok nem fognak jól optimalizálni. A Meta nem látja rendesen, hogy ki vásárolt, ki tett kosárba, ki küldött ajánlatkérést.</P>

        <HR />

        <H2>Mi a Facebook-oldal?</H2>
        <P>A <strong>Facebook-oldal</strong> a márka, cég, szolgáltatás vagy szervezet nyilvános Facebook-megjelenése. Egy Facebook-oldalon megtalálható a márkanév, profilkép, borítókép, posztok, követők, értékelések, események, Messenger-üzenetek, névjegyadatok, nyitvatartás, weboldal link, organikus tartalmak.</P>
        <Blockquote><strong>A Facebook-oldal a márka nyilvános arca Facebookon.</strong></Blockquote>

        <H3>Miért fontos az oldal hirdetésnél?</H3>
        <P>Amikor egy felhasználó lát egy Meta-hirdetést, nem azt látja, hogy „Hirdetési fiók 123456789", hanem a márka nevét és profilképét. Ezért az oldal és az Instagram-fiók adja a hirdetés látható identitását, míg a hirdetési fiók technikai és pénzügyi háttérrendszer.</P>

        <H3>Az oldal nem ugyanaz, mint a hirdetési fiók</H3>
        <P>Ez az egyik leggyakoribb félreértés. Sokan azt gondolják, hogy ha van Facebook-oldaluk, akkor automatikusan van hirdetési fiókjuk is. Ez nem feltétlenül igaz.</P>
        <Table
          headers={["Kérdés", "Facebook-oldal", "Hirdetési fiók"]}
          rows={[
            ["Láthatják a felhasználók?", "Igen", "Nem"],
            ["Itt vannak a posztok?", "Igen", "Nem"],
            ["Itt fut a kampányköltés?", "Nem", "Igen"],
            ["Itt van a számlázás?", "Nem", "Igen"],
            ["Ez adja a hirdetés látható nevét?", "Igen", "Nem"],
            ["Ez tárolja a kampányeredményeket?", "Nem", "Igen"],
            ["Ez kezeli a követőket?", "Igen", "Nem"],
          ]}
        />

        <HR />

        <H2>Hogyan kapcsolódik össze a három fogalom?</H2>
        <CodeBlock>{`Üzleti portfólió
│
├── Facebook-oldal
├── Instagram-fiók
├── Hirdetési fiók
│   ├── Kampány
│   │   ├── Hirdetéssorozat
│   │   │   └── Hirdetés
│
├── Pixel / dataset
├── Katalógus
├── Domain
├── Emberek és partnerek
└── Fizetési / üzleti beállítások`}</CodeBlock>
        <P>A lényeg: az üzleti portfólió a felső szint, a Facebook-oldal és Instagram-fiók márkaeszközök, a hirdetési fiók a kampánykezelési és költési hely, a pixel / dataset a mérési eszköz.</P>

        <HR />

        <H2>Jogosultságok: itt szokott jönni a káosz</H2>
        <P>A Meta-rendszerben nem elég azt mondani: „Adj hozzá engem adminnak." Mert nem mindegy, hogy mihez adnak hozzá.</P>
        <P>Lehet valaki: oldaladmin, hirdetési fiók kezelő, üzleti portfólió admin, pixelkezelő, katalóguskezelő, partnerügynökség, vagy csak elemző jogosultságú felhasználó. Ezek különböző dolgok.</P>

        <H3>Nem elég Facebook-oldal adminnak lenni</H3>
        <P>Ha valaki admin a Facebook-oldalon, attól még nem biztos, hogy látja a hirdetési fiókot, tud kampányt indítani, hozzáfér a számlázáshoz, látja a pixelt, tud katalógust kezelni.</P>

        <H3>Nem elég hirdetési fiókhoz hozzáférni</H3>
        <P>Ha valaki hozzáfér a hirdetési fiókhoz, attól még nem biztos, hogy tud posztolni az oldalra, válaszolhat Messenger-üzenetekre, módosíthatja az oldal adatait, kezelheti az Instagram-fiókot.</P>

        <H3>Nem elég az üzleti portfólióban szerepelni</H3>
        <P>Attól, hogy valakit hozzáadnak az üzleti portfólióhoz, még nem biztos, hogy automatikusan minden eszközhöz hozzáfér. Külön hozzá kell rendelni a Facebook-oldalt, a hirdetési fiókot, a pixelt, a katalógust, az Instagram-fiókot.</P>

        <HR />

        <H2>Gyakorlati példák</H2>

        <H3>Miért nem látja a PPC-s a kampányokat?</H3>
        <P>Egy ügyfél azt mondja: „Meghívtunk a Metába, de még mindig nem látod a hirdetési fiókot?" Ilyenkor lehetséges, hogy csak az oldalhoz adott hozzáférést, csak a Business Suite-hoz adott részleges hozzáférést, nem a megfelelő üzleti portfólióhoz adott hozzá, vagy a hirdetési fiók másik portfólióban van.</P>

        <H3>Rossz oldalról fut a hirdetés</H3>
        <P>Ha egy cégnek több oldala van (pl. főoldal, outlet, karrieroldal) és a PPC-s véletlenül rossz oldalt választ, a felhasználók a karrieroldal nevében látják a termékhirdetést. Ez rontja a bizalmat, az átkattintási arányt és a kampány teljesítményét.</P>

        <H3>Ügynökségváltás</H3>
        <P>Egy cég évekig dolgozik egy ügynökséggel, majd váltanak. Ha a hirdetési fiók, pixel és katalógus az ügynökség portfóliójában volt, a cég vagy megpróbálja visszaszerezni az eszközöket, vagy nulláról újraépíti – és elveszhet a tanulási előzmény, a remarketing közönség, a kampányhistorika és a mérési stabilitás.</P>

        <HR />

        <H2>Ideális Meta-struktúra vállalkozásoknak</H2>

        <H3>1. A vállalkozásnak saját üzleti portfóliója van</H3>
        <P>Nem az ügynökségé. Nem a freelanceré. Nem egy volt munkatársé. Hanem a cégé.</P>

        <H3>2. A fő üzleti eszközök a cég portfóliójában vannak</H3>
        <UL items={["Facebook-oldal", "Instagram-fiók", "hirdetési fiók", "pixel / dataset", "katalógus", "domain"]} />

        <H3>3. Az ügynökség partnerként kap hozzáférést</H3>
        <P>Az ügynökség nem birtokolja az ügyfél eszközeit, hanem hozzáférést kap azok kezeléséhez.</P>

        <H3>4. A jogosultságok szerepkör szerint vannak kiosztva</H3>
        <Table
          headers={["Szereplő", "Javasolt hozzáférés"]}
          rows={[
            ["Cégvezető / tulajdonos", "Teljes üzleti admin"],
            ["Marketingvezető", "Magas szintű kezelői jogosultság"],
            ["PPC-s", "Hirdetési fiók, pixel, katalógus kezelése"],
            ["Social media manager", "Oldal és Instagram kezelése"],
            ["Könyvelés", "Számlázási adatok, számlák"],
            ["Ügynökség", "Partneri hozzáférés szükséges assetekhez"],
          ]}
        />

        <HR />

        <H2>PPC-s indulás előtti ellenőrzőlista</H2>

        <H3>Üzleti portfólió</H3>
        <UL items={[
          "Van saját üzleti portfóliója a cégnek?",
          "A megfelelő cég birtokolja az asseteket?",
          "Van legalább két megbízható admin?",
          "Be van kapcsolva a kétlépcsős hitelesítés?",
          "Nincs bent felesleges régi ember vagy régi ügynökség?",
          "Az ügynökség partnerként van hozzáadva, nem tulajdonosként?",
        ]} />

        <H3>Facebook-oldal</H3>
        <UL items={[
          "A megfelelő oldal van az üzleti portfólióban?",
          "A cég birtokolja az oldalt?",
          "Friss a profilkép és borítókép?",
          "Rendben van a névjegy, weboldal, elérhetőség?",
          "A hirdetési fiók használhatja az oldalt?",
        ]} />

        <H3>Hirdetési fiók</H3>
        <UL items={[
          "A cég saját portfóliójában van?",
          "Jó a pénznem?",
          "Jó az időzóna?",
          "Be van állítva a fizetési mód?",
          "Van költési limit?",
          "Hozzáfér a PPC-s?",
          "Hozzá van kapcsolva a megfelelő oldal és Instagram-fiók?",
        ]} />

        <H3>Pixel / dataset</H3>
        <UL items={[
          "A megfelelő weboldalra van telepítve?",
          "Jönnek be események?",
          "Mérődik a PageView?",
          "Mérődik a ViewContent?",
          "Mérődik az AddToCart?",
          "Mérődik a Lead vagy Purchase?",
          "A hirdetési fiók jogosult használni?",
        ]} />

        <HR />

        <H2>Gyakori félreértések röviden</H2>

        <H3>„Van Facebook-oldalam, tehát van hirdetési fiókom is."</H3>
        <P>Nem feltétlenül. A Facebook-oldal a nyilvános márkamegjelenés. A hirdetési fiók a kampányok és költések helye.</P>

        <H3>„Ha admin vagyok az oldalon, tudok hirdetni."</H3>
        <P>Nem mindig. Lehet, hogy posztolni tudsz, de a hirdetési fiókhoz nincs hozzáférésed.</P>

        <H3>„Az ügynökség létrehozta, tehát minden rendben."</H3>
        <P>Nem biztos. A legfontosabb kérdés: <strong>ki a tulajdonos?</strong> Ha az ügynökség birtokolja a hirdetési fiókot vagy pixelt, az hosszú távon kockázatos lehet az ügyfélnek.</P>

        <H3>„A Business Suite ugyanaz, mint a Hirdetéskezelő."</H3>
        <P>Nem. A <strong>Meta Business Suite</strong> egy szélesebb üzleti kezelőfelület tartalmakhoz, üzenetekhez, oldalhoz, Instagramhoz. A <strong>Hirdetéskezelő</strong> kifejezetten a kampányok professzionális kezelésére való.</P>

        <HR />

        <H2>Összefoglalás</H2>

        <H3>Üzleti portfólió</H3>
        <P>Ez a cég Meta-admin központja. Itt vannak az üzleti eszközök, jogosultságok, emberek, partnerek és tulajdonosi beállítások.</P>

        <H3>Hirdetési fiók / Hirdetéskezelő</H3>
        <P>Ez a kampányok futtatásának és kezelésének helye. Itt vannak a költések, kampányok, hirdetéssorozatok, hirdetések, riportok és számlázási adatok.</P>

        <H3>Facebook-oldal</H3>
        <P>Ez a márka nyilvános Facebook-megjelenése. Ez adja a hirdetések látható identitását Facebookon.</P>

        <div className="mt-12 rounded-[2rem] border border-rose-500/20 bg-rose-500/5 p-8">
          <p className="text-xl font-black text-white leading-relaxed">
            Ha csak egy dolgot jegyzel meg ebből a cikkből, ez legyen az:
          </p>
          <p className="mt-4 text-lg leading-8 text-rose-200 font-semibold">
            A vállalkozásnak kell birtokolnia a saját üzleti portfólióját, hirdetési fiókját, Facebook-oldalát, pixelét és katalógusát. Az ügynökség vagy PPC-s kezelőként kapjon hozzáférést, ne tulajdonosként.
          </p>
          <p className="mt-3 text-neutral-400">Ez a tiszta, biztonságos és hosszú távon fenntartható Meta-struktúra alapja.</p>
        </div>

      </article>

      {/* CTA Section */}
      <section className="px-6 pb-10 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-white text-neutral-950 shadow-2xl">
          <div className="grid gap-0 lg:grid-cols-[1fr_0.85fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-600">Kezdjük el</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Szeretnéd, hogy a Meta-kampányaid végre átláthatóan és eredményesen működjenek?
              </h2>
              <p className="mt-5 text-lg leading-8 text-neutral-600">
                A jól felépített Meta-struktúra nemcsak technikai kérdés. Közvetlen hatással van a kampányok mérésére, optimalizálására, skálázhatóságára és hosszú távú eredményességére.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:hello@blummarketing.hu?subject=Meta%20strukt%C3%BAra%20%E2%80%93%20Bl%C3%BCmmarketing"
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
