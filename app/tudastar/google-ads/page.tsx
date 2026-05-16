import { ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ogImage } from "@/lib/og";
import CampaignHierarchy from "@/components/illustrations/CampaignHierarchy";

export const metadata = {
  title: "Google Ads hirdetéskezelés érthetően: mikor működik, mire jó, és mire kell figyelni?",
  description: "Mikor érdemes Google Ads-ben gondolkodni? Kampánytípusok, mérés, kulcsszavak, hibák és audit – érthetően PPC-ben.",
  keywords: [
    "google ads hirdetéskezelés",
    "google ads kampány",
    "search kampány",
    "performance max",
    "google ads audit",
    "ppc ügynökség",
    "google ads beállítás",
  ],
  openGraph: {
    title: "Google Ads hirdetéskezelés érthetően: mikor működik, mire jó, és mire kell figyelni?",
    description: "Mikor érdemes Google Ads-ben gondolkodni? Kampánytípusok, mérés, kulcsszavak, hibák és audit – érthetően PPC-ben.",
    type: "article",
    locale: "hu_HU",
    siteName: "Blummarketing",
    images: ogImage,
  },
  alternates: {
    canonical: "/tudastar/google-ads/",
  },
};

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Google Ads hirdetéskezelés érthetően: mikor működik, mire jó, és mire kell figyelni?",
    description: "Mikor érdemes Google Ads-ben gondolkodni? Kampánytípusok, mérés, kulcsszavak, hibák és audit – érthetően PPC-ben.",
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

const auditItems = [
  "konverziómérés",
  "kampánystruktúra",
  "kulcsszavak",
  "keresési kifejezések",
  "negatív kulcsszavak",
  "hirdetésszövegek",
  "céloldalak",
  "költéselosztás",
  "Shopping feed",
  "Performance Max beállítások",
  "remarketing",
  "riportálás",
];

const ctaChecklistItems = [
  "jól mérődnek-e a konverziók",
  "mire költ a fiók",
  "melyik kampány hoz valódi eredményt",
  "hol veszhet el a büdzsé",
  "mit érdemes javítani",
  "milyen lépésekkel lehetne hatékonyabb a hirdetésed",
];

export default function GoogleAdsPage() {
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
            {["Google Ads", "PPC", "Kampánykezelés", "Audit"].map((tag) => (
              <span key={tag} className="rounded-full bg-rose-500/10 px-3 py-1 text-xs font-bold text-rose-300">{tag}</span>
            ))}
          </div>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl leading-tight">
            Google Ads hirdetéskezelés érthetően: mikor működik, mire jó, és mire kell figyelni?
          </h1>
          <p className="mt-6 text-xl leading-8 text-neutral-300">
            A Google Ads az egyik legerősebb online hirdetési rendszer, mert sok esetben akkor éri el az embereket, amikor már aktívan keresnek valamit. Nem csak figyelmet próbálunk szerezni, hanem meglévő keresletre tudunk reagálni.
          </p>
          <div className="mt-6 flex items-center gap-4 text-sm text-neutral-300">
            <span>Blummarketing</span>
            <span>·</span>
            <span>2025. január 1.</span>
            <span>·</span>
            <span>~18 perc olvasás</span>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-6 pb-24 lg:px-8">

        <P>Például amikor valaki ezt írja be a Google-be:</P>
        <UL items={[
          `„könyvelő kisvállalkozóknak"`,
          `„fogorvos Budapest"`,
          `„klímaszerelés ár"`,
          `„férfi futócipő akció"`,
          `„Google Ads ügynökség"`,
        ]} />
        <P>
          Ilyenkor a felhasználó sokszor már problémát akar megoldani, szolgáltatót keres, árat hasonlít össze vagy vásárlás előtt áll. Ezért lehet a Google Ads nagyon erős ügyfélszerző eszköz — ha jól van beállítva.
        </P>

        <HR />

        <H2>Mi az a Google Ads?</H2>
        <P>A Google Ads a Google hirdetési rendszere, ahol fizetett hirdetésekkel jelenhetsz meg többek között:</P>
        <UL items={[
          "a Google keresőben",
          "YouTube-on",
          "Gmailben",
          "Google Térképen",
          "Display hálózaton",
          "Shopping találatok között",
        ]} />
        <Blockquote>
          <strong>A Google Ads segítségével akkor érheted el a potenciális ügyfeleket, amikor keresnek, érdeklődnek vagy vásárlás előtt állnak.</strong>
        </Blockquote>
        <P>A legismertebb típusa a keresési hirdetés. Például:</P>
        <CodeBlock>{`Valaki rákeres: "könyvelő egyéni vállalkozóknak"
↓
Megjelenik a hirdetésed
↓
Rákattint
↓
Megérkezik az oldaladra
↓
Ajánlatot kér`}</CodeBlock>

        <HR />

        <H2>Mikor érdemes Google Ads-ben gondolkodni?</H2>
        <P>Google Ads akkor lehet jó választás, ha már van kereslet a termékedre vagy szolgáltatásodra.</P>

        <H3>Érdemes használni, ha:</H3>
        <UL items={[
          "az emberek aktívan keresik, amit kínálsz",
          "van működő weboldalad vagy landing oldalad",
          "tudod, mit szeretnél mérni",
          "fontos a lead, vásárlás vagy ajánlatkérés",
          "gyorsabban szeretnél megjelenni a keresőben, mint SEO-val",
          "van elég büdzséd tesztelni és adatot gyűjteni",
        ]} />

        <H3>Nem biztos, hogy ezzel kell kezdeni, ha:</H3>
        <UL items={[
          "még nincs kész a weboldalad",
          "nincs tiszta ajánlatod",
          "nincs beállítva a mérés",
          "nincs kapacitásod kezelni a beérkező érdeklődőket",
          "olyan terméket árulsz, amire még senki nem keres",
        ]} />
        <P>Ha nincs kereslet, akkor lehet, hogy először edukációra, social hirdetésekre vagy videós tartalomra van szükség.</P>

        <HR />

        <H2>A legfontosabb Google Ads kampánytípusok</H2>

        <H3>Search kampány</H3>
        <P>Ez a klasszikus keresési hirdetés. Akkor jelenik meg, amikor valaki beír egy keresést a Google-be — például: „irodatakarítás Budapest".</P>
        <P>Ez a kampánytípus akkor erős, ha konkrét keresési szándékra szeretnél megjelenni. Jó lehet:</P>
        <UL items={[
          "szolgáltatóknak",
          "webshopoknak",
          "helyi vállalkozásoknak",
          "B2B cégeknek",
          "oktatási vagy egészségügyi szolgáltatóknak",
        ]} />

        <H3>Performance Max kampány</H3>
        <P>A Performance Max egy automatizáltabb kampánytípus, amely több Google-felületen is megjelenhet: keresőben, YouTube-on, Display hálózaton, Gmailben, Discover felületen, Google Térképen, Shopping megjelenésekben.</P>
        <P>Akkor működhet jól, ha van pontos konverziómérés, megfelelő büdzsé, jó kreatívok és elég adat.</P>
        <Blockquote>
          Fontos: a Performance Max nem varázsgomb. Ha rossz adatot kap, rossz irányba optimalizálhat.
        </Blockquote>

        <H3>Shopping kampány</H3>
        <P>A Shopping kampány főleg webshopoknak fontos. Termékképpel, árral és webshopnévvel jelenhet meg a Google-ben. Jól működhet, ha:</P>
        <UL items={[
          "rendben van a termékfeed",
          "pontosan mérődik a vásárlás",
          "versenyképes az ár és az ajánlat",
          "jól strukturáltak a termékkategóriák",
        ]} />
        <P>Webshopoknál gyakran a Shopping és a Performance Max a Google Ads egyik legfontosabb része.</P>

        <H3>YouTube kampány</H3>
        <P>A YouTube kampány videós hirdetésekre való. Hasznos lehet:</P>
        <UL items={[
          "márkaépítésre",
          "edukációra",
          "remarketingre",
          "termékbemutatásra",
          "keresletteremtésre",
        ]} />
        <P>YouTube-nál a kreatív minősége kulcsfontosságú. Az első pár másodpercben el kell kapni a figyelmet, különben a felhasználó továbbmegy.</P>

        <H3>Display kampány</H3>
        <P>A Display hirdetések vizuális bannerek, amelyek weboldalakon és appokban jelenhetnek meg. Leggyakrabban remarketingre használjuk — például valaki járt a weboldaladon, de nem kért ajánlatot, majd más oldalakon újra találkozik a hirdetéseddel.</P>
        <P>Display kampánynál figyelni kell, mert könnyű sok olcsó kattintást szerezni, de ezek nem mindig hoznak üzleti eredményt.</P>

        <HR />

        <H2>Miért a mérés a Google Ads alapja?</H2>
        <P>Google Ads-ben nem az a legfontosabb, hány kattintás jött. Hanem az, hogy mi történt a kattintás után.</P>
        <P>A kampány akkor működik jól, ha tudjuk mérni például:</P>
        <UL items={[
          "vásárlás",
          "ajánlatkérés",
          "kapcsolatfelvétel",
          "telefonhívás",
          "időpontfoglalás",
          "űrlapkitöltés",
        ]} />
        <P>Ezeket nevezzük konverzióknak.</P>

        <H3>Miért nem elég a kattintás?</H3>
        <P>Mert a kattintás még nem ügyfél. Lehet, hogy egy kampány sok kattintást hoz, de kevés ajánlatkérést. Egy másik kampány kevesebb kattintást hoz, mégis több ügyfelet.</P>
        <Table
          headers={["Kampány", "Kattintás", "Költség", "Ajánlatkérés", "Ajánlatkérés ára"]}
          rows={[
            ["A kampány", "1 000", "200 000 Ft", "5", "40 000 Ft"],
            ["B kampány", "400", "160 000 Ft", "16", "10 000 Ft"],
          ]}
        />
        <P>Az A kampány több kattintást hozott, de a B kampány hozott több üzleti eredményt. Ezért nem kattintásra optimalizálunk, hanem eredményre.</P>

        <HR />

        <H2>Mire kell figyelni Google Ads hirdetéskezelésnél?</H2>

        <H4>1. Konverziómérés</H4>
        <P>Ha nem mérjük pontosan, miből lett ajánlatkérés vagy vásárlás, akkor rossz döntéseket hozhatunk. A mérés az alap.</P>

        <H4>2. Kulcsszavak és keresési szándék</H4>
        <P>Nem minden keresés egyformán értékes. Más az, ha valaki ezt keresi:</P>
        <UL items={[
          `„mi az a könyvelés" – inkább edukációs keresés`,
          `„könyvelő egyéni vállalkozóknak ajánlatkérés" – erősebb vásárlási szándék`,
        ]} />

        <H4>3. Negatív kulcsszavak</H4>
        <P>A negatív kulcsszavak segítenek kizárni az irreleváns kereséseket. Például egy könyvelőiroda nem biztos, hogy ilyen keresésekre akar költeni:</P>
        <UL items={[
          "könyvelő állás",
          "könyvelő tanfolyam",
          "ingyenes könyvelő program",
          "könyvelés házilag",
        ]} />
        <P>Ezek viszik a pénzt, de nem feltétlen hoznak ügyfelet.</P>

        <H4>4. Kampánystruktúra</H4>
        <P>Egy jó Google Ads fiókban átlátható, melyik kampány milyen célt szolgál. Az alap hierarchia minden Google Ads fiókon belül ugyanaz:</P>
        <div className="my-8">
          <CampaignHierarchy />
        </div>
        <P>Nem szerencsés mindent egy kampányba tenni. Jobb külön kezelni például:</P>
        <UL items={[
          "fő szolgáltatásokat",
          "termékkategóriákat",
          "brand kereséseket",
          "remarketinget",
          "webshopos kampányokat",
          "leadgeneráló kampányokat",
        ]} />
        <P>Így könnyebb látni, mi működik és mi nem.</P>

        <H4>5. Céloldal</H4>
        <P>A kampány nem a kattintásnál ér véget. Ha valaki rákattint a hirdetésedre, az oldalnak folytatnia kell az ígéretet. Egy jó céloldal:</P>
        <UL items={[
          "gyors",
          "mobilbarát",
          "egyértelmű",
          "bizalmat épít",
          "tartalmaz CTA-t",
          "könnyen lehet rajta ajánlatot kérni vagy vásárolni",
        ]} />
        <P>Ha a hirdetés jó, de az oldal gyenge, a kampány drága lesz.</P>

        <HR />

        <H2>Gyakori Google Ads hibák</H2>

        <H3>Nincs pontos mérés</H3>
        <P>Ez a legnagyobb hiba. Mérés nélkül nem lehet tudni, mi térül meg.</P>

        <H3>Túl általános kulcsszavak</H3>
        <P>Az általános kulcsszavak sok pénzt vihetnek, kevés valódi érdeklődővel.</P>

        <H3>Nincsenek negatív kulcsszavak</H3>
        <P>Ilyenkor irreleváns keresésekre is költhet a kampány.</P>

        <H3>Rossz céloldal</H3>
        <P>A hirdetés ígér valamit, de az oldal nem viszi tovább az üzenetet.</P>

        <H3>Csak a kattintási árat nézik</H3>
        <P>Az olcsó kattintás nem mindig jó. A fontos kérdés az, hogy lesz-e belőle ügyfél.</P>

        <H3>Túl gyorsan vonnak le következtetést</H3>
        <P>Néhány nap adatából nem mindig lehet jó döntést hozni, főleg új kampányoknál.</P>

        <HR />

        <H2>Google Ads webshopoknak</H2>
        <P>Webshopoknál a Google Ads különösen erős lehet, mert sok vásárló konkrét termékre keres. Fontos elemek:</P>
        <UL items={[
          "Shopping vagy Performance Max kampány",
          "Merchant Center feed",
          "pontos vásárlásmérés",
          "termékkategória szerinti elemzés",
          "ROAS figyelése",
          "remarketing",
          "szezonális kampányok",
        ]} />
        <P>Webshopoknál nem elég az összesített ROAS-t nézni. Fontos látni, melyik kategória, termékcsoport vagy ajánlat térül meg igazán.</P>

        <HR />

        <H2>Google Ads szolgáltató cégeknek</H2>
        <P>Szolgáltató cégeknél a Google Ads célja legtöbbször a leadgenerálás. Ilyenkor a konverzió lehet:</P>
        <UL items={[
          "ajánlatkérés",
          "telefonhívás",
          "időpontfoglalás",
          "kapcsolatfelvételi űrlap",
          "konzultációfoglalás",
        ]} />
        <P>
          Itt nem csak az számít, mennyi a lead ára, hanem az is, milyen minőségű az érdeklődő. Egy drágább lead lehet jobb, ha nagyobb eséllyel lesz belőle valódi ügyfél.
        </P>

        <HR />

        <H2>Mennyi idő alatt látszik eredmény?</H2>
        <P>Ez függ:</P>
        <UL items={[
          "az iparágtól",
          "a büdzsétől",
          "a versenytől",
          "a céloldaltól",
          "a kampánytípustól",
          "a mérés pontosságától",
          "attól, van-e korábbi adat a fiókban",
        ]} />
        <P>Search kampányoknál sokszor gyorsabban látszanak első jelek, mert aktív keresletre hirdetünk. Performance Max és automatizált kampányok esetén több tanulási időre lehet szükség.</P>
        <Blockquote>A lényeg: nem érdemes pár nap alapján végleges következtetést levonni.</Blockquote>

        <HR />

        <H2>Mekkora büdzsé kell Google Ads-re?</H2>
        <P>Nincs általános válasz. A szükséges büdzsé függ:</P>
        <UL items={[
          "az iparági kattintási áraktól",
          "a célpiactól",
          "a versenytársaktól",
          "az ügyfélértéktől",
          "a kampánycéltól",
          "a konverziós aránytól",
        ]} />
        <P>A büdzsének elég nagynak kell lennie ahhoz, hogy adatot gyűjtsünk és értelmes döntéseket hozzunk. Ha túl kevés az adat, nehéz megmondani, mi működik.</P>

        <HR />

        <H2>Mit tartalmaz egy jó Google Ads audit?</H2>
        <P>Egy Google Ads audit célja, hogy kiderüljön: mi működik, mi viszi a pénzt, hol hibás a mérés, melyik kampány hoz valódi eredményt, mit kell javítani, mit kell leállítani, mit érdemes továbbépíteni.</P>
        <P>Egy audit során érdemes átnézni:</P>
        <ul className="mb-6 grid gap-2 sm:grid-cols-2">
          {auditItems.map((item) => (
            <li key={item} className="flex gap-3 leading-7 text-neutral-300">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <P>Egy jó audit nem csak hibákat listáz, hanem következő lépéseket ad.</P>

        <HR />

        <H2>Összefoglalás</H2>
        <P>A Google Ads akkor működik jól, ha nem csak hirdetéseket indítunk, hanem teljes rendszert építünk köré. Szükség van:</P>
        <UL items={[
          "pontos mérésre",
          "jó kampánystruktúrára",
          "megfelelő kulcsszavakra",
          "negatív kulcsszavakra",
          "erős céloldalakra",
          "webshopoknál jó termékfeedre",
          "rendszeres optimalizálásra",
          "érthető riportokra",
        ]} />

        <div className="mt-12 rounded-[2rem] border border-rose-500/20 bg-rose-500/5 p-8">
          <p className="text-xl font-black text-white leading-relaxed">
            A cél nem az, hogy sok kattintást szerezzünk.
          </p>
          <p className="mt-4 text-lg leading-8 text-rose-200 font-semibold">
            A cél az, hogy tisztán lássuk: melyik Google Ads kampány hoz ügyfelet, melyik viszi a pénzt, és mit érdemes tenni a következő hónapban.
          </p>
        </div>

      </article>

      {/* CTA Section */}
      <section className="px-6 pb-10 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-white text-neutral-950 shadow-2xl">
          <div className="grid gap-0 lg:grid-cols-[1fr_0.85fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-600">Google Ads audit</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Szeretnéd látni, mit mutatnak a Google Ads számaid?
              </h2>
              <p className="mt-5 text-lg leading-8 text-neutral-700">
                Ha futnak Google Ads kampányaid, de nem vagy biztos benne, hogy valóban megtérülnek, érdemes átnézni a rendszert.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:hello@blummarketing.hu?subject=Google%20Ads%20audit%20%E2%80%93%20Blummarketing"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-7 py-4 font-bold text-white transition hover:bg-neutral-800"
                >
                  Kérek kampányauditot
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
