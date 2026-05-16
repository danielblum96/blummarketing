import { ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ogImage } from "@/lib/og";

export const metadata = {
  title: "PPC fogalomtár érthetően: a legfontosabb hirdetési kifejezések egy helyen",
  description: "CPC, CPM, CTR, CPA, CPL, ROAS, konverzió, remarketing, attribúció, pixel, kampánystruktúra – érthetően magyarázva.",
  keywords: [
    "ppc fogalomtár",
    "cpc cpm ctr cpa",
    "roas magyarázat",
    "remarketing fogalom",
    "konverzió hirdetés",
    "attribúció marketing",
    "kampányaudit fogalom",
  ],
  openGraph: {
    title: "PPC fogalomtár érthetően: a legfontosabb hirdetési kifejezések egy helyen",
    description: "CPC, CPM, CTR, CPA, CPL, ROAS, konverzió, remarketing, attribúció, pixel, kampánystruktúra – érthetően magyarázva.",
    type: "article",
    locale: "hu_HU",
    siteName: "Blummarketing",
    images: ogImage,
  },
  alternates: { canonical: "/tudastar/fogalomtar/" },
};

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "PPC fogalomtár érthetően: a legfontosabb hirdetési kifejezések egy helyen",
    description: "CPC, CPM, CTR, CPA, CPL, ROAS, konverzió, remarketing, attribúció, pixel – érthetően magyarázva.",
    author: { "@type": "Organization", name: "Blummarketing" },
    publisher: { "@type": "Organization", name: "Blummarketing", url: "https://blummarketing.hu" },
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
    <pre className="my-6 overflow-x-auto rounded-2xl bg-neutral-900 p-5 text-sm leading-7 text-neutral-300 border border-white/10">
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

function Def({ term, abbr, children }: { term: string; abbr?: string; children: React.ReactNode }) {
  return (
    <div className="mt-12 mb-2 scroll-mt-24" id={term.toLowerCase().replace(/\s+/g, "-")}>
      <div className="flex flex-wrap items-baseline gap-3 mb-5">
        <h2 className="text-3xl font-black tracking-tight text-white">{term}</h2>
        {abbr && (
          <span className="rounded-full bg-rose-500/10 px-3 py-1 text-sm font-black text-rose-300">{abbr}</span>
        )}
      </div>
      {children}
    </div>
  );
}

function HR() {
  return <hr className="my-10 border-white/10" />;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mb-5 leading-8 text-neutral-300">{children}</p>;
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

function Example({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <div className="my-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      {label && <p className="mb-2 text-xs font-black uppercase tracking-widest text-rose-400">{label}</p>}
      <div className="text-sm leading-7 text-neutral-300">{children}</div>
    </div>
  );
}

const ctaChecklistItems = [
  "jól mérődnek-e a konverziók",
  "mire költ a kampány",
  "melyik hirdetés hoz valódi ügyfelet",
  "melyik kreatív fáradt ki",
  "hol lehet javítani a megtérülést",
  "mit érdemes tenni a következő hónapban",
];

const summaryRows = [
  ["PPC", "Kattintásalapú fizetett hirdetés"],
  ["CPC", "Egy kattintás költsége"],
  ["CPM", "1 000 megjelenés költsége"],
  ["CTR", "Átkattintási arány"],
  ["CPA", "Egy konverzió költsége"],
  ["CPL", "Egy lead költsége"],
  ["ROAS", "Hirdetési költéshez viszonyított bevétel"],
  ["Konverzió", "Üzletileg fontos művelet"],
  ["Landing oldal", "Ahova a hirdetés után érkezik a látogató"],
  ["CTA", "Cselekvésre ösztönzés"],
  ["Remarketing", "Korábbi érdeklődők újracélzása"],
  ["Pixel", "Weboldali mérőkód"],
  ["Attribúció", "Konverzió jóváírásának logikája"],
  ["UTM", "Kampányforrások címkézése"],
  ["A/B teszt", "Két verzió összehasonlítása"],
  ["Kampányaudit", "Hirdetési rendszer szakmai átvizsgálása"],
];

export default function FogalomtarPage() {
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
            {["Fogalomtár", "PPC", "Alapfogalmak"].map((tag) => (
              <span key={tag} className="rounded-full bg-rose-500/10 px-3 py-1 text-xs font-bold text-rose-300">{tag}</span>
            ))}
          </div>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl leading-tight">
            PPC fogalomtár érthetően: a legfontosabb hirdetési kifejezések egy helyen
          </h1>
          <p className="mt-6 text-xl leading-8 text-neutral-300">
            CPC, CPM, CTR, CPA, CPL, ROAS, remarketing, konverzió, attribúció, kampánystruktúra, pixel. Elsőre bonyolultnak tűnhetnek, de valójában mind ugyanarra a kérdésre segítenek választ adni: a hirdetésed hoz üzleti eredményt, vagy csak viszi a pénzt?
          </p>
          <div className="mt-6 flex items-center gap-4 text-sm text-neutral-300">
            <span>Blummarketing</span>
            <span>·</span>
            <span>2025. január 1.</span>
            <span>·</span>
            <span>~25 perc olvasás</span>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-6 pb-24 lg:px-8">

        <Def term="PPC" abbr="Pay-Per-Click">
          <P>A PPC kattintásalapú hirdetést jelent. A lényege, hogy a hirdető akkor fizet, amikor valaki rákattint a hirdetésére. PPC hirdetés lehet például Google keresési hirdetés, Google Shopping, Facebook, Instagram, TikTok, YouTube, Display és LinkedIn hirdetés.</P>
          <Blockquote>A PPC célja nem az, hogy minél több kattintás legyen. A cél az, hogy a kattintásokból érdeklődő, vásárlás, ajánlatkérés vagy bevétel legyen.</Blockquote>
        </Def>

        <HR />

        <Def term="CPC" abbr="Cost Per Click">
          <P>Azt mutatja meg, hogy átlagosan mennyibe kerül egy kattintás.</P>
          <Example label="Példa">
            Hirdetési költés: 100 000 Ft · Kattintások: 500 → <strong>CPC = 200 Ft</strong>
          </Example>
          <P>A CPC segít látni, mennyire drága a forgalom. De önmagában nem elég — olcsó kattintásból is lehet rossz kampány, ha nem lesz belőle ügyfél. A valódi kérdés: lett-e belőle üzleti eredmény?</P>
        </Def>

        <HR />

        <Def term="CPM" abbr="Cost Per Mille">
          <P>Azt jelenti, mennyibe kerül 1 000 megjelenés.</P>
          <Example label="Példa">
            Hirdetési költés: 50 000 Ft · Megjelenések: 100 000 → <strong>CPM = 500 Ft</strong>
          </Example>
          <P>CPM főleg márkaismertség-építésnél, Meta és TikTok kampányoknál, valamint videós és display kampányok elemzésekor fontos. Ha olcsó a CPM, de senki nem kattint vagy vásárol, a kampány még nem biztos, hogy jó.</P>
        </Def>

        <HR />

        <Def term="CTR" abbr="Click-Through Rate">
          <P>Magyarul átkattintási arány. Azt mutatja meg, hogy a megjelenések hány százalékából lett kattintás.</P>
          <CodeBlock>{`CTR = kattintások / megjelenések × 100`}</CodeBlock>
          <Example label="Példa">
            Megjelenések: 10 000 · Kattintások: 300 → <strong>CTR = 3%</strong>
          </Example>
          <P>Magasabb CTR általában jó kreatívre, erős üzenetre, releváns célzásra utal. De CTR-t mindig konverzióval együtt kell nézni — magas CTR mellett is lehet kevés vásárló.</P>
        </Def>

        <HR />

        <Def term="CPA" abbr="Cost Per Acquisition / Action">
          <P>Azt mutatja meg, mennyibe kerül egy fontos művelet: vásárlás, ajánlatkérés, időpontfoglalás, regisztráció.</P>
          <CodeBlock>{`CPA = hirdetési költés / konverziók száma`}</CodeBlock>
          <Example label="Példa">
            Hirdetési költés: 300 000 Ft · Konverziók: 30 → <strong>CPA = 10 000 Ft</strong>
          </Example>
          <P>A CPA közelebb áll az üzleti eredményhez, mint a kattintási ár. Drágább kattintás is hozhat jobb CPA-t:</P>
          <Table
            headers={["Kampány", "CPC", "Konverzió", "CPA"]}
            rows={[
              ["A kampány", "150 Ft", "5", "30 000 Ft"],
              ["B kampány", "400 Ft", "20", "10 000 Ft"],
            ]}
          />
        </Def>

        <HR />

        <Def term="CPL" abbr="Cost Per Lead">
          <P>Azt mutatja meg, mennyibe kerül egy érdeklődő. Lead lehet ajánlatkérés, űrlapkitöltés, telefonhívás, időpontfoglalás, demo igénylés.</P>
          <Example label="Példa">
            Hirdetési költés: 200 000 Ft · Leadek: 25 → <strong>CPL = 8 000 Ft</strong>
          </Example>
          <Blockquote>Az olcsó lead nem mindig jó lead. Ha egy 3 000 Ft-os leadből soha nem lesz ügyfél, de egy 12 000 Ft-os leadből rendszeresen szerződés lesz, üzletileg a drágább lead lehet értékesebb. Ezért nem csak a leadárat, hanem a leadminőséget is kell nézni.</Blockquote>
        </Def>

        <HR />

        <Def term="ROAS" abbr="Return On Ad Spend">
          <P>Azt mutatja meg, mennyi bevétel jött a hirdetési költéshez képest.</P>
          <CodeBlock>{`ROAS = bevétel / hirdetési költés`}</CodeBlock>
          <Example label="Példa">
            Hirdetési költés: 300 000 Ft · Bevétel: 1 500 000 Ft → <strong>ROAS = 5×</strong>
          </Example>
          <P>A ROAS bevételt mutat, nem profitot. Egy 5x ROAS lehet jó vagy kevés attól függően, mekkora az árrés, a szállítási költség, a visszáru és az ügyfél élettartamértéke. Webshopoknál fontos mutató, de önmagában nem elegendő.</P>
        </Def>

        <HR />

        <Def term="Konverzió">
          <P>Az a művelet, amely üzletileg értékes. Nem minden kattintás konverzió.</P>
          <div className="grid gap-4 sm:grid-cols-3 my-5">
            {[
              { label: "Webshop", items: ["vásárlás", "kosárba helyezés", "fizetés megkezdése", "hírlevél-feliratkozás"] },
              { label: "Szolgáltató", items: ["ajánlatkérés", "telefonhívás", "időpontfoglalás", "kapcsolatfelvétel"] },
              { label: "B2B", items: ["demo kérés", "sales megkeresés", "letöltés", "regisztráció"] },
            ].map((col) => (
              <div key={col.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="mb-3 text-xs font-black uppercase tracking-widest text-rose-400">{col.label}</p>
                <ul className="space-y-1.5">
                  {col.items.map((item) => (
                    <li key={item} className="text-sm text-neutral-300">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Blockquote>Nem az számít, hogy hányan kattintottak — hanem az, hogy a kattintásból lett-e értékes művelet.</Blockquote>
        </Def>

        <HR />

        <Def term="Konverziós arány">
          <P>Azt mutatja meg, hogy a látogatók hány százaléka hajtotta végre a kívánt műveletet.</P>
          <CodeBlock>{`Konverziós arány = konverziók / kattintások × 100`}</CodeBlock>
          <Example label="Példa">
            Kattintások: 1 000 · Ajánlatkérések: 50 → <strong>Konverziós arány = 5%</strong>
          </Example>
          <P>Ha sok kattintás jön, de kevés konverzió, nem biztos, hogy a kampány a hibás. Lehet, hogy a landing oldal nem működik jól.</P>
        </Def>

        <HR />

        <Def term="Landing oldal">
          <P>Az az oldal, ahova a felhasználó érkezik a hirdetésre kattintás után. Egy jó landing oldal kapcsolódik a hirdetés üzenetéhez, gyorsan betölt, mobilon is jól működik, világos ajánlatot ad és tartalmaz CTA-t.</P>
          <Example label="Rossz vs. jó">
            <strong>Hirdetés:</strong> „Kérj Google Ads auditot"<br />
            <strong>Rossz:</strong> A kattintás után az általános főoldalra érkezik az ember.<br />
            <strong>Jó:</strong> Célzott oldal: Mit nézünk át? · Kinek ajánlott? · Kérj auditot.
          </Example>
          <P>A jó landing oldal sokszor jelentősen javítja a kampány megtérülését.</P>
        </Def>

        <HR />

        <Def term="CTA" abbr="Call To Action">
          <P>Magyarul cselekvésre ösztönzés. Megmondja a felhasználónak, mi a következő lépés.</P>
          <UL items={["Kérj ajánlatot", "Vásárolj most", "Foglalj időpontot", "Töltsd le", "Nézd meg a csomagot", "Kérek auditot"]} />
          <P>Ha nincs CTA, a felhasználónak kell kitalálnia, mit tegyen — ez rontja a konverziót.</P>
        </Def>

        <HR />

        <Def term="Remarketing">
          <P>Újra elérjük azokat az embereket, akik korábban már kapcsolatba kerültek a márkával — de még nem vásároltak vagy nem kértek ajánlatot. Például jártak a weboldalon, megnéztek egy terméket, kosárba tettek valamit, de elhagyták az oldalt.</P>
          <Example label="Példa">
            Valaki megnézi a Growth csomag oldaladat, de nem kér ajánlatot. Később lát egy hirdetést:<br /><br />
            <em>„Még gondolkodsz a hirdetéskezelésen? Nézzük meg, hol folyik el a büdzséd."</em>
          </Example>
          <P>A remarketing azért erős, mert nem teljesen hideg közönségnek hirdetsz — olyan embereknek, akik már mutattak érdeklődést.</P>
        </Def>

        <HR />

        <Def term="Célközönség">
          <P>Azoknak az embereknek a csoportja, akiket el szeretnél érni. Épülhet demográfiai adatokból, érdeklődési körökből, viselkedési adatokból, weboldallátogatókból, vásárlókból, ügyféllistából, hasonmás közönségekből vagy keresési szándékból.</P>
          <P>Google Ads-ben sokszor a keresési szándék a legerősebb. Meta és TikTok kampányoknál nagyobb szerepe lehet a kreatívnak és a viselkedésalapú jeleknek.</P>
        </Def>

        <HR />

        <Def term="Lookalike / Hasonmás célközönség">
          <P>Olyan emberek csoportja, akik hasonlítanak egy meglévő közönségedre — például vásárlóidra, leadjeidre vagy weboldallátogatóidra. A rendszer megpróbál új embereket találni, akik hasonló tulajdonságokat mutatnak.</P>
          <Blockquote>Fontos: a hasonmás közönség minősége attól függ, milyen adatból indul. Ha gyenge minőségű leadekből építesz hasonmás közönséget, könnyen több gyenge leadet kaphatsz.</Blockquote>
        </Def>

        <HR />

        <Def term="Kreatív">
          <P>Az, amit a felhasználó lát: kép, videó, carousel, UGC videó, hirdetésszöveg, headline, CTA, első képkocka, hook, vizuális koncepció. A kreatív dönti el, hogy a felhasználó megáll-e, figyel-e, kattint-e.</P>
          <P>Egy jó kreatív: erős hookkal indul, gyorsan érthető, releváns a célcsoportnak, világos ajánlatot mutat, platformhoz illeszkedik, és ad időt a kattintásra.</P>
        </Def>

        <HR />

        <Def term="Hook">
          <P>A hirdetés első figyelemfogó eleme. Videónál általában az első 1–3 másodperc. Feladata, hogy megállítsa a görgetést.</P>
          <UL items={[
            `„Nem az a baj, hogy kevés a kattintásod. Lehet, hogy rossz dolgot mérsz."`,
            `„Hirdetsz, de nem látod, melyik kampány térül meg?"`,
            `„Három jel, hogy a kreatívod már kifáradt."`,
          ]} />
          <P>Ha a hook gyenge, a videó többi része lehet, hogy el sem jut a nézőhöz.</P>
        </Def>

        <HR />

        <Def term="UGC" abbr="User Generated Content">
          <P>Hirdetésben olyan videót jelent, amely természetes, emberi, kevésbé reklámszerű stílusban mutat be egy terméket vagy szolgáltatást. Lehet vásárlói vélemény, termékhasználat, tapasztalatmegosztás, probléma-megoldás bemutatás.</P>
          <P>UGC azért működhet jól, mert hitelesebbnek tűnik, mint egy túl steril reklám. Különösen TikTokon, Reelsen és Meta hirdetésekben lehet erős.</P>
        </Def>

        <HR />

        <Def term="Kampánystruktúra">
          <P>Azt jelenti, hogyan épül fel a hirdetési fiók.</P>
          <div className="grid gap-4 sm:grid-cols-2 my-5">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="mb-3 text-xs font-black uppercase tracking-widest text-rose-400">Google Ads</p>
              <pre className="text-sm leading-7 text-neutral-300">{`Kampány\n↓\nHirdetéscsoport\n↓\nHirdetés / kulcsszó`}</pre>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="mb-3 text-xs font-black uppercase tracking-widest text-rose-400">Meta</p>
              <pre className="text-sm leading-7 text-neutral-300">{`Kampány\n↓\nHirdetéssorozat\n↓\nHirdetés`}</pre>
            </div>
          </div>
          <P>A jó kampánystruktúra segít látni: melyik cél működik, melyik közönség teljesít, melyik kreatív hoz eredményt, melyik kampány viszi a pénzt.</P>
        </Def>

        <HR />

        <Def term="Hirdetéssorozat / Ad set">
          <P>Meta rendszerben a kampány középső szintje. Itt állítjuk be a célközönséget, büdzsét, ütemezést, elhelyezéseket és az optimalizálási eseményt. Például egy Meta kampányban lehet külön ad set hideg célközönségre, remarketingre, hasonmás közönségre és kosárelhagyókra.</P>
        </Def>

        <HR />

        <Def term="Hirdetéscsoport">
          <P>Főleg Google Ads-ben használt fogalom. A kampányon belül kulcsszavakat és hirdetéseket csoportosít. Például egy könyvelőiroda kampányában külön hirdetéscsoport lehet könyvelés egyéni vállalkozóknak, könyvelés kft-knek, bérszámfejtés és adótanácsadás témakörben.</P>
        </Def>

        <HR />

        <Def term="Pixel">
          <P>Egy mérőkód a weboldalon, amely adatokat gyűjt a felhasználói eseményekről: oldalmegtekintés, termékmegtekintés, kosárba helyezés, vásárlás, lead, űrlapkitöltés. Meta Pixel, TikTok Pixel és hasonló kódok segítenek megérteni, mi történik a kattintás után.</P>
          <P>Pixel nélkül nehezebb konverziót mérni, remarketinget építeni, kampányt optimalizálni és vásárlásra vagy leadre tanítani a rendszert.</P>
        </Def>

        <HR />

        <Def term="Szerveroldali mérés">
          <P>Nem csak a böngészőből, hanem a szerver oldaláról is küldünk adatokat a hirdetési rendszereknek. Ilyen például a Meta Conversions API, a TikTok Events API és a Google server-side tagging. Stabilabb mérést adhat, mert a böngészős korlátozások, cookie-vesztés és adblockerek miatt a kliensoldali mérés nem mindig teljes.</P>
          <Blockquote>Fontos: jól kell beállítani, különben duplikációt vagy torz adatokat okozhat.</Blockquote>
        </Def>

        <HR />

        <Def term="Attribúció">
          <P>Azt jelenti, hogy melyik csatornának vagy kampánynak tulajdonítjuk a konverziót.</P>
          <CodeBlock>{`lát egy Facebook hirdetést
↓
rákeres Google-ben a márkára
↓
rákattint egy Google Ads hirdetésre
↓
másnap direktben visszajön
↓
vásárol`}</CodeBlock>
          <P>Kinek írjuk jóvá a vásárlást? A Facebooknak? Google Adsnek? Direkt forgalomnak? Mindegyiknek valamennyire? Ha rosszul értelmezed az attribúciót, lehet, hogy leállítasz egy csatornát, amely fontos szerepet játszik az ügyfélszerzésben.</P>
        </Def>

        <HR />

        <Def term="UTM">
          <P>Olyan címke az URL-ben, amely segít azonosítani, honnan jött a látogató.</P>
          <CodeBlock>{`utm_source=facebook\nutm_medium=cpc\nutm_campaign=nyari_kampany`}</CodeBlock>
          <P>UTM-ekkel tisztábban látható a GA4-ben, melyik kampány, hirdetés vagy csatorna hozott forgalmat és konverziót. UTM nélkül könnyen összemosódhatnak az adatok.</P>
        </Def>

        <HR />

        <Def term="Frekvencia">
          <P>Azt mutatja meg, hogy egy ember átlagosan hányszor látta a hirdetésedet. Ha túl magas, ugyanazok az emberek túl sokszor látják ugyanazt — ez kreatívfáradáshoz vezethet: romló CTR, emelkedő költségek, csökkenő konverzió. Ilyenkor új kreatív vagy új célzás lehet a megoldás.</P>
        </Def>

        <HR />

        <Def term="Kreatívfáradás">
          <P>Egy hirdetési kreatív teljesítménye idővel romlik, mert a célközönség már túl sokszor látta. Jelei: csökkenő CTR, növekvő leadköltség, romló konverziós arány, emelkedő CPM.</P>
          <Blockquote>Nem mindig a kampány rossz. Lehet, hogy a kreatív fáradt ki. Ezért kell rendszeresen új kreatívokat tesztelni.</Blockquote>
        </Def>

        <HR />

        <Def term="A/B teszt">
          <P>Két verziót hasonlítunk össze — például két különböző headline-t, kreatívot, landing oldalt, CTA-t, ajánlatot vagy célközönséget. A cél: ne vélemény alapján döntsünk, hanem adat alapján.</P>
          <Blockquote>Egyszerre ne változtass túl sok mindent — különben nem lesz világos, mi okozta az eredménykülönbséget.</Blockquote>
        </Def>

        <HR />

        <Def term="Kampányoptimalizálás">
          <P>A hirdetések folyamatos javítása: gyenge kampányok leállítása, büdzsé átcsoportosítása, új kreatív tesztelése, negatív kulcsszavak hozzáadása, célközönség módosítása, landing oldal javítása, licitstratégia finomítása.</P>
          <P>Az optimalizálás célja nem az, hogy piszkáljuk a kampányt — hanem az, hogy jobb döntéseket hozzunk az adatok alapján.</P>
        </Def>

        <HR />

        <Def term="Kampányaudit">
          <P>Egy hirdetési fiók szakmai átvizsgálása. Célja, hogy kiderüljön: jól mérünk-e, jó kampányokra megy-e a pénz, melyik hirdetés hoz eredményt, hol folyik el a büdzsé, mit kell javítani, mit kell leállítani, mit lehet skálázni.</P>
          <Blockquote>Egy jó kampányaudit nem csak hibákat sorol fel. Hanem konkrét következő lépéseket ad.</Blockquote>
        </Def>

        <HR />

        <Def term="Riport">
          <P>A kampányok teljesítményének összefoglalása. De egy profi riport nem csak számokat mutat — választ ad arra is, mi történt, mi működött, mi nem, mit állítunk le, mit tesztelünk és mi legyen a következő lépés.</P>
          <Blockquote>Ha a riport után nem világos, mit kell tenni, az nem riport. Csak adatgyűjtemény.</Blockquote>
        </Def>

        <HR />

        {/* Summary table */}
        <h2 className="mt-14 mb-5 text-3xl font-black tracking-tight text-white">Gyors összefoglaló</h2>
        <Table
          headers={["Fogalom", "Mit jelent röviden?"]}
          rows={summaryRows}
        />

        <HR />

        <h2 className="mt-14 mb-5 text-3xl font-black tracking-tight text-white">Összefoglalás</h2>
        <P>A PPC fogalmak nem azért fontosak, hogy szakzsargonban beszéljünk. Hanem azért, hogy tisztábban lásd, mi történik a hirdetéseiddel. Ha érted ezeket az alapfogalmakat, könnyebb megválaszolni a valódi üzleti kérdéseket:</P>
        <UL items={[
          "melyik kampány hoz ügyfelet",
          "melyik kreatív működik",
          "mennyibe kerül egy lead vagy vásárlás",
          "hol folyik el a pénz",
          "mit kell javítani",
          "mit érdemes továbbépíteni",
        ]} />

        <div className="mt-12 rounded-[2rem] border border-rose-500/20 bg-rose-500/5 p-8">
          <p className="text-xl font-black text-white leading-relaxed">
            A cél nem az, hogy több adatod legyen.
          </p>
          <p className="mt-4 text-lg leading-8 text-rose-200 font-semibold">
            Hanem az, hogy jobb döntéseket hozz: melyik kampány hoz ügyfelet, melyik viszi a pénzt, és mit kell tenni a következő hónapban.
          </p>
        </div>

      </article>

      {/* CTA Section */}
      <section className="px-6 pb-10 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-white text-neutral-950 shadow-2xl">
          <div className="grid gap-0 lg:grid-cols-[1fr_0.85fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-600">Kampányaudit</p>
              <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
                Szeretnéd látni, mit mutatnak a kampányaid?
              </h2>
              <p className="mt-5 text-lg leading-8 text-neutral-700">
                Ha futnak hirdetéseid, de nem vagy biztos benne, hogy pontosan érted a számokat, érdemes átnézni a rendszert.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:hello@blummarketing.hu?subject=Kamp%C3%A1nyaudit%20%E2%80%93%20Blummarketing"
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
