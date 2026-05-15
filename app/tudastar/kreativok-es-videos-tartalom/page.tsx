import { ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Hirdetési kreatívok PPC kampányokhoz: mitől működik egy kép, videó vagy UGC tartalom?",
  description: "Hook, videóstruktúra, UGC, képes hirdetések, carousel, kreatívtesztelés és platform-specifikus szempontok PPC kampányokhoz.",
  keywords: [
    "hirdetési kreatív",
    "ugc videó",
    "hook ppc",
    "videós hirdetés",
    "meta kreatív",
    "tiktok hirdetés",
    "kreatívtesztelés",
    "ppc kampány kreatív",
  ],
  openGraph: {
    title: "Hirdetési kreatívok PPC kampányokhoz: mitől működik egy kép, videó vagy UGC tartalom?",
    description: "Hook, videóstruktúra, UGC, képes hirdetések, carousel, kreatívtesztelés és platform-specifikus szempontok PPC kampányokhoz.",
    type: "article",
    locale: "hu_HU",
    siteName: "Blummarketing",
  },
  alternates: {
    canonical: "/tudastar/kreativok-es-videos-tartalom/",
  },
};

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Hirdetési kreatívok PPC kampányokhoz: mitől működik egy kép, videó vagy UGC tartalom?",
    description: "Hook, videóstruktúra, UGC, képes hirdetések, carousel, kreatívtesztelés és platform-specifikus szempontok PPC kampányokhoz.",
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

function ExampleCard({ label, weak, strong }: { label: string; weak: string; strong: string }) {
  return (
    <div className="my-6 grid gap-3 sm:grid-cols-2">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
        <p className="mb-2 text-xs font-black uppercase tracking-widest text-neutral-500">Gyenge</p>
        <p className="text-sm leading-7 text-neutral-400">{weak}</p>
      </div>
      <div className="rounded-2xl border border-rose-500/20 bg-rose-500/5 p-5">
        <p className="mb-2 text-xs font-black uppercase tracking-widest text-rose-400">Erősebb</p>
        <p className="text-sm leading-7 text-neutral-300">{strong}</p>
      </div>
    </div>
  );
}

const ctaChecklistItems = [
  "milyen üzenetre reagálhat a célcsoportod",
  "milyen hookkal érdemes indítani",
  "milyen formátum illik a platformhoz",
  "milyen kreatívokat érdemes tesztelni",
  "hogyan kapcsolódjon a hirdetés a céloldalhoz",
  "hogyan lehet rendszeresen friss kreatívokat gyártani",
];

export default function KreativokEsVideosTartalom() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white antialiased">
      <JsonLd />

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.18),transparent_34%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_32%),linear-gradient(180deg,#0a0a0a_0%,#171717_100%)]" />
        <Navbar />

        <div className="mx-auto max-w-4xl px-6 pb-16 pt-14 lg:px-8">
          <a href="/tudastar/" className="mb-6 inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition">
            ← Vissza a Tudástárba
          </a>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Kreatív", "Videó", "UGC", "Hook", "TikTok", "Meta"].map((tag) => (
              <span key={tag} className="rounded-full bg-rose-500/10 px-3 py-1 text-xs font-bold text-rose-300">{tag}</span>
            ))}
          </div>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl leading-tight">
            Hirdetési kreatívok PPC kampányokhoz: mitől működik egy kép, videó vagy UGC tartalom?
          </h1>
          <p className="mt-6 text-xl leading-8 text-neutral-300">
            A PPC kampányok teljesítményét nem csak a célzás, a büdzsé vagy a kampánybeállítás határozza meg. Sok esetben a kreatív dönti el, hogy egy hirdetésből lesz-e kattintás, érdeklődő, vásárlás vagy ajánlatkérés.
          </p>
          <div className="mt-6 flex items-center gap-4 text-sm text-neutral-500">
            <span>Blummarketing</span>
            <span>·</span>
            <span>2025. január 1.</span>
            <span>·</span>
            <span>~22 perc olvasás</span>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-6 pb-24 lg:px-8">

        <P>Lehet tökéletes a kampánystruktúra. Lehet pontos a mérés. Lehet jó az ajánlat. De ha a kreatív nem állítja meg az embert, nem érthető az üzenet, vagy nem ad okot a kattintásra, a kampány nem fogja kihozni magából a maximumot.</P>
        <Blockquote>
          <strong>A hirdetési kreatív nem dekoráció. A kreatív az egyik legerősebb teljesítménybefolyásoló elem a PPC kampányokban.</strong>
        </Blockquote>

        <HR />

        <H2>Mi az a hirdetési kreatív?</H2>
        <P>A hirdetési kreatív az, amit a felhasználó ténylegesen lát. Ide tartozik:</P>
        <UL items={[
          "kép, videó, carousel, UGC videó",
          "termékfotó, grafika",
          "szöveg, headline, CTA",
          "vizuális koncepció",
          "első képkocka, nyitómondat",
          "ajánlat megjelenítése",
        ]} />
        <Blockquote>
          A kreatív az a pont, ahol a stratégia találkozik a figyelemmel. A kampánybeállítás csak eljuttatja a hirdetést az ember elé. A kreatívnak kell elérnie, hogy megálljon, figyeljen, megértse az ajánlatot, és továbblépjen.
        </Blockquote>

        <HR />

        <H2>A jó kreatív nem csak szép</H2>
        <P>Egy hirdetési kreatívnak nem az a fő feladata, hogy esztétikailag tökéletes legyen — hanem az, hogy működjön. PPC-ben a szépség önmagában kevés.</P>
        <P>Egy kreatív akkor jó, ha:</P>
        <UL items={[
          "megállítja a figyelmet",
          "gyorsan érthető",
          "kapcsolódik a célcsoport problémájához",
          "világos ajánlatot mutat",
          "bizalmat épít",
          "cselekvésre ösztönöz",
          "illeszkedik a platformhoz",
          "tesztelhető és mérhető eredményt hoz",
        ]} />
        <P>A kreatív akkor nem jó, ha csak jól néz ki, de senki nem kattint, nem kér ajánlatot, nem vásárol, és nem reagál rá a célközönség.</P>

        <HR />

        <H2>A hook szerepe: az első 1–3 másodperc dönt</H2>
        <P>Videós hirdetésnél a legfontosabb rész az első pár másodperc — ez a <strong>hook</strong>. A hook célja, hogy az ember ne görgessen tovább. TikTokon, Reelsen, Facebookon, Instagramon vagy YouTube Shortsban nincs idő hosszú felvezetésre.</P>
        <P>Ezért a videó elején nem azzal kell kezdeni, hogy:</P>
        <Blockquote>„Üdvözlünk a cégünknél…" — Ez lassú.</Blockquote>
        <P>Jobb, ha az első mondat rögtön problémára, vágyra vagy konkrét helyzetre nyit.</P>

        <H3>Hook példák</H3>
        <div className="my-6 grid gap-3 sm:grid-cols-2">
          {[
            { label: "Szolgáltató", text: `„Futsz hirdetéseket, de nem tudod, melyik hoz ügyfelet?"` },
            { label: "Webshop", text: `„Ezt a hibát sokan elkövetik futócipő választásnál."` },
            { label: "Fogászat", text: `„Félsz a fogászattól? Akkor ezt érdemes tudnod."` },
            { label: "Marketing", text: `„Nem az a baj, hogy kevés a kattintásod. Lehet, hogy rossz dolgot mérsz."` },
            { label: "UGC", text: `„Őszintén, először nem hittem, hogy ez ennyit számít…"` },
          ].map((ex) => (
            <div key={ex.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="mb-2 text-xs font-black uppercase tracking-widest text-rose-400">{ex.label}</p>
              <p className="text-sm leading-7 text-neutral-300">{ex.text}</p>
            </div>
          ))}
        </div>
        <P>A hook nem dísz. Ha a hook gyenge, a videó többi része már lehet, hogy el sem jut a nézőhöz.</P>

        <H3>Mitől erős egy hook?</H3>
        <P>Egy jó hook általában legalább az egyik dolgot teljesíti ezek közül:</P>
        <UL items={[
          <span key="1"><strong>Problémára nyit:</strong> „Sokan ezért buknak pénzt a hirdetéseiken."</span>,
          <span key="2"><strong>Vágyra épít:</strong> „Így lehet ugyanabból a büdzséből több ajánlatkérést kihozni."</span>,
          <span key="3"><strong>Kíváncsiságot kelt:</strong> „Egy apró mérési hiba miatt teljesen rossz kampányt skálázhatsz."</span>,
          <span key="4"><strong>Konkrét célcsoportot szólít meg:</strong> „Ha webshopod van, ezt a Google Ads hibát érdemes ellenőrizned."</span>,
          <span key="5"><strong>Ellentmond egy megszokott gondolatnak:</strong> „A legtöbb kampány nem a célzás miatt bukik el."</span>,
          <span key="6"><strong>Gyors értéket ígér:</strong> „Három jel, hogy a kreatívod már kifáradt."</span>,
        ]} />

        <HR />

        <H2>A videós hirdetés felépítése</H2>
        <P>Egy jól működő PPC videó nem véletlenszerűen épül fel. Általában van benne:</P>
        <CodeBlock>{`Hook
↓
Probléma vagy vágy
↓
Megoldás
↓
Bizonyíték vagy demonstráció
↓
Ajánlat
↓
CTA
↓
Lezárás`}</CodeBlock>

        <UL items={[
          <span key="1"><strong>Hook</strong> — megállítja a figyelmet</span>,
          <span key="2"><strong>Probléma vagy vágy</strong> — megmutatja, miért releváns a videó</span>,
          <span key="3"><strong>Megoldás</strong> — bemutatja a terméket, szolgáltatást vagy ajánlatot</span>,
          <span key="4"><strong>Bizonyíték</strong> — demonstráció, vélemény, eredmény, előtte-utána, folyamat vagy konkrét példa</span>,
          <span key="5"><strong>Ajánlat</strong> — világossá teszi, mit kap az érdeklődő</span>,
          <span key="6"><strong>CTA</strong> — megmondja, mit tegyen a néző (kérj ajánlatot, foglalj időpontot, vásárolj most)</span>,
          <span key="7"><strong>Lezárás</strong> — nem hirtelen vágás, hanem idő az ajánlat feldolgozására és a kattintásra</span>,
        ]} />

        <H3>Fontos: a videó ne érjen véget hirtelen</H3>
        <P>Ez nagyon gyakori hiba. A videó szépen felépül, elhangzik az ajánlat, majd azonnal vége. A néző még épp feldolgozná, mit látott, de a videó már eltűnik vagy újraindul. A CTA-nak idő kell.</P>
        <P>Jó videólezárásnál a végén maradjon képernyőn: a fő ajánlat, a termék vagy szolgáltatás neve, a kulcsüzenet, a CTA és a weboldal. Például:</P>
        <CodeBlock>{`Kérj kampányauditot
Nézzük meg, hol folyik el a hirdetési pénzed`}</CodeBlock>

        <HR />

        <H2>Milyen hosszú legyen egy videós hirdetés?</H2>
        <P>Nincs egyetlen tökéletes hossz — a megfelelő hossz függ a platformtól, ajánlattól, célcsoporttól, terméktől és funnel szinttől.</P>

        <H4>Rövid videók: 6–15 másodperc</H4>
        <P>Jók lehetnek figyelemfelkeltésre, remarketingre, egyszerű ajánlatokra, gyors termékbemutatásra, TikTokra, Reelsre, Shortsra.</P>

        <H4>Közepes videók: 15–30 másodperc</H4>
        <P>Jók lehetnek probléma-megoldás bemutatásra, UGC videókra, edukációs rövid hirdetésekre, szolgáltatások magyarázására, bizalomépítésre.</P>

        <H4>Hosszabb videók: 30–60+ másodperc</H4>
        <P>Jók lehetnek komplexebb ajánlatokra, B2B szolgáltatásokra, edukációra, ügyfélvéleményre, részletes demonstrációra.</P>

        <Blockquote>A cél nem az, hogy minél rövidebb legyen. A cél az, hogy ne legyen benne felesleges rész.</Blockquote>

        <HR />

        <H2>UGC videók: miért működnek jól hirdetésben?</H2>
        <P>Az UGC (user-generated content) jellegű videó olyan tartalom, amely természetesebbnek, személyesebbnek és kevésbé reklámszerűnek hat. Nem feltétlenül valódi vásárló készíti — lehet UGC-stílusú kreatív is, amely tudatosan úgy épül fel, mintha egy felhasználó, vásárló vagy szakértő beszélne a termékről.</P>
        <P>Mert az emberek gyakran jobban bíznak egy természetes, emberi videóban, mint egy túl steril reklámban. Egy jó UGC videó:</P>
        <UL items={[
          "személyes és gyorsan érthető",
          "valós helyzetből indul",
          "problémát vagy tapasztalatot mutat",
          "nem túlpolírozott, hitelesebb érzetet ad",
          "könnyen illeszkedik TikTokra és Reelsre",
        ]} />

        <H3>UGC struktúra</H3>
        <CodeBlock>{`„Ezzel a problémával találkoztam…"
↓
„Kipróbáltam ezt…"
↓
„Ez változott…"
↓
„Ezért ajánlom / ezért érdemes megnézni…"
↓
CTA`}</CodeBlock>

        <H3>UGC hook példák</H3>
        <UL items={[
          `„Ezt bárcsak előbb tudtam volna…"`,
          `„Ha hirdetsz, ezt mindenképp ellenőrizd."`,
          `„Három dolog, ami miatt nálunk nem működtek a kampányok."`,
          `„Kipróbáltam, és ez volt a legnagyobb különbség."`,
        ]} />

        <Blockquote>Az UGC akkor működik jól, ha emberi, de nem céltalan. Attól még, hogy természetesnek tűnik, stratégia kell mögé.</Blockquote>

        <H3>UGC hibák, amelyek rontják a teljesítményt</H3>
        <UL items={[
          <span key="1"><strong>Túl hosszú felvezetés</strong> — ha az első 5 másodpercben nem történik semmi, a néző elmegy</span>,
          <span key="2"><strong>Túl reklámszerű szöveg</strong> — ha úgy hangzik, mint egy betanult TV-reklám, elveszik a hitelesség</span>,
          <span key="3"><strong>Nincs konkrét probléma</strong> — ha nem derül ki, milyen helyzetre ad választ, a videó nem lesz elég releváns</span>,
          <span key="4"><strong>Nincs CTA</strong> — sokan jó sztorit mesélnek, de nem mondják meg, mit tegyen a néző</span>,
          <span key="5"><strong>Hirtelen befejezés</strong> — a videó véget ér, mielőtt lenne idő kattintani</span>,
        ]} />

        <HR />

        <H2>Képes hirdetések: mikor működnek jól?</H2>
        <P>A képes kreatívok továbbra is fontosak PPC kampányokban — nem mindenhez kell videó. Egy jó statikus kreatív gyorsan átadja az üzenetet, jól működik remarketingben, ajánlatkommunikációban és egyszerű promócióknál.</P>
        <P>Egy jó képes hirdetés:</P>
        <UL items={[
          "egyértelmű fókuszponttal dolgozik",
          "gyorsan olvasható, nem zsúfolt",
          "erős címsort használ",
          "vizuálisan kiemeli az ajánlatot",
          "tartalmaz CTA-t",
          "mobilon is érthető",
          "nem akar mindent egyszerre elmondani",
        ]} />
        <Blockquote>A képen nem kell minden információnak rajta lennie. A kreatív feladata sokszor csak az, hogy eladja a következő lépést.</Blockquote>

        <H3>Üzenet példák</H3>
        <ExampleCard
          label="Szolgáltató"
          weak="Minőségi szolgáltatás kedvező áron"
          strong={`Nem látod, melyik hirdetésed térül meg?\nKérj kampányauditot.`}
        />
        <ExampleCard
          label="Webshop"
          weak="Új kollekció elérhető"
          strong={`Új tavaszi kollekció\nKönnyű darabok hétköznapokra\nNézd meg most`}
        />
        <ExampleCard
          label="Könyvelő"
          weak="Professzionális könyvelés vállalkozóknak"
          strong={`Kinőtted az ad hoc könyvelést?\nKérj ajánlatot vállalkozásodra szabva.`}
        />

        <H3>Képes hirdetések gyakori hibái</H3>
        <UL items={[
          <span key="1"><strong>Túl sok szöveg</strong> — mobilon olvashatatlan lesz</span>,
          <span key="2"><strong>Nincs fókusz</strong> — nem derül ki, mit kell nézni először</span>,
          <span key="3"><strong>Gyenge headline</strong> — a kép jól néz ki, de az üzenet nem állítja meg az embert</span>,
          <span key="4"><strong>Túl általános ígéret</strong> — „minőségi", „megbízható", „profi" önmagukban gyengék</span>,
          <span key="5"><strong>Nincs ajánlat</strong> — a felhasználó nem érti, miért kattintson most</span>,
          <span key="6"><strong>Nincs CTA</strong> — nem derül ki, mi a következő lépés</span>,
        ]} />

        <HR />

        <H2>Carousel hirdetések: mikor érdemes használni?</H2>
        <P>A carousel akkor jó, ha több elemet szeretnénk bemutatni — több termék, több szolgáltatás, folyamat lépései, előtte-utána állapotok, problémák és megoldások, ügyfélsztori vagy kategóriák.</P>

        <H3>Carousel példa — szolgáltató cégnek</H3>
        <CodeBlock>{`1. kártya: Nem látod, melyik kampány térül meg?
2. kártya: Ellenőrizzük a mérést
3. kártya: Megnézzük a kampánystruktúrát
4. kártya: Feltárjuk, hol folyik el a büdzsé
5. kártya: Kérj kampányauditot`}</CodeBlock>

        <H3>Carousel példa — webshopnak</H3>
        <CodeBlock>{`1. kártya: Új futócipők érkeztek
2. kártya: Könnyű városi futásokhoz
3. kártya: Stabil hosszabb távokra
4. kártya: Akciós modellek
5. kártya: Nézd meg a kollekciót`}</CodeBlock>

        <Blockquote>A carousel akkor működik jól, ha minden kártyának van szerepe. Ne csak véletlenszerű képek egymás után legyenek.</Blockquote>

        <HR />

        <H2>Kreatívtesztelés: nem egyetlen kreatívban kell hinni</H2>
        <P>Sokan ott rontják el, hogy készítenek egy hirdetést, elindítják, majd várják az eredményt. A profi PPC kreatívgyártás nem így működik.</P>
        <Blockquote>Nem egy kreatívban kell hinni. Kreatívhipotéziseket kell tesztelni.</Blockquote>

        <P>Például tesztelni érdemes:</P>
        <UL items={[
          "probléma alapú üzenet vs. vágy alapú üzenet",
          "árkommunikáció vs. edukációs kreatív",
          "UGC videó vs. termékdemó vs. ügyfélvélemény",
          "előtte-utána vs. szakértői magyarázat",
        ]} />

        <H3>Mit érdemes tesztelni?</H3>
        <div className="my-6 grid gap-3 sm:grid-cols-2">
          {[
            { title: "Hook", desc: "Melyik nyitás állítja meg jobban az embert?" },
            { title: "Formátum", desc: "Videó, kép, carousel, UGC, termékdemó?" },
            { title: "Üzenet", desc: "Problémára, vágyra, árra, bizalomra vagy edukációra építünk?" },
            { title: "Kreatív stílus", desc: "Letisztult grafika, természetes UGC, profi videó, mobilos felvétel?" },
            { title: "CTA", desc: `Kérj ajánlatot / Nézd meg / Foglalj időpontot / Töltsd le / Vásárolj most` },
            { title: "Ajánlat", desc: "Melyik ajánlat mozgatja meg jobban az embereket?" },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="mb-1 font-black text-white">{item.title}</p>
              <p className="text-sm leading-6 text-neutral-400">{item.desc}</p>
            </div>
          ))}
        </div>

        <P>A tesztelés célja nem az, hogy kinek melyik tetszik jobban — hanem az, hogy kiderüljön, melyik üzenet, formátum és kreatív hoz valódi üzleti eredményt.</P>

        <HR />

        <H2>A kreatív kifáradása</H2>
        <P>Egy kreatív nem fut örökké. Idővel csökkenhet a teljesítménye, mert a célközönség már sokszor látta.</P>
        <P>Jelek, hogy a kreatív kifáradt:</P>
        <UL items={[
          "romló CTR",
          "emelkedő CPM",
          "növekvő CPA vagy CPL",
          "csökkenő konverziós arány",
          "romló engagement",
          "magas frekvencia",
          "kevesebb minőségi lead",
        ]} />
        <Blockquote>Ilyenkor nem feltétlenül a kampány a rossz. Lehet, hogy a kreatív fáradt ki. Ezért kell rendszeresen új kreatívokat gyártani és tesztelni.</Blockquote>

        <HR />

        <H2>Platformonként más működik</H2>
        <P>A kreatív nem lehet minden platformon ugyanaz.</P>

        <H3>Meta (Facebook és Instagram)</H3>
        <P>Jól működhet: erős vizuális kontraszt, UGC, rövid videó, carousel, termékbemutató, probléma-megoldás kreatív, remarketing ajánlat.</P>

        <H3>TikTok</H3>
        <P>Fontos: natív videós stílus, gyors hook, természetes beszéd, emberi jelenlét, trendérzékeny de nem erőltetett forma, gyors tempó, felirat, mobilos érzet. A túl steril reklám TikTokon gyakran idegennek hat.</P>

        <H3>Google Display</H3>
        <P>Fontos: gyors olvashatóság, erős headline, márkaazonosság, egyszerű CTA, kevés szöveg, egyértelmű ajánlat.</P>

        <H3>YouTube</H3>
        <P>Fontos: erős első 5 másodperc, gyors problémafelvetés, vizuális bizonyíték, hang és felirat, tiszta CTA, nem hirtelen lezárt videó.</P>

        <HR />

        <H2>A jó kreatív és a jó landing oldal együtt működik</H2>
        <P>Ha a hirdetés egy konkrét ígéretet tesz, a céloldalnak folytatnia kell azt.</P>
        <div className="my-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-rose-500/20 bg-rose-500/5 p-5">
            <p className="mb-2 text-xs font-black uppercase tracking-widest text-rose-400">Jó összhang</p>
            <p className="text-sm leading-7 text-neutral-300">
              <strong>Hirdetés:</strong> Nem látod, melyik hirdetésed térül meg?<br />
              <strong>Landing:</strong> Kérj kampányauditot, és nézzük meg, hol folyik el a hirdetési pénzed.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="mb-2 text-xs font-black uppercase tracking-widest text-neutral-500">Rossz összhang</p>
            <p className="text-sm leading-7 text-neutral-400">
              A hirdetés kampányauditról szól, de a kattintás után az általános főoldalra érkezik a felhasználó. Megszakad az üzenet, romlik a konverzió.
            </p>
          </div>
        </div>

        <HR />

        <H2>Frequent kreatívhibák PPC kampányokban</H2>
        <ul className="mb-6 grid gap-3 sm:grid-cols-2">
          {[
            { n: "1.", title: "Gyenge hook", desc: "A videó lassan indul, a néző továbbgörget." },
            { n: "2.", title: "Túl sok információ", desc: "A kreatív mindent el akar mondani, semmi nem marad meg." },
            { n: "3.", title: "Nincs egyértelmű ajánlat", desc: "A felhasználó nem érti, miért kattintson." },
            { n: "4.", title: "Nincs CTA", desc: "A kreatív jó, de nem vezet sehová." },
            { n: "5.", title: "Hirtelen videólezárás", desc: "Nincs idő kattintani vagy feldolgozni az ajánlatot." },
            { n: "6.", title: "Túl steril reklám", desc: "Különösen TikTokon és Reelsen idegennek hat." },
            { n: "7.", title: "Nincs tesztelés", desc: "Egyetlen kreatívra épül az egész kampány." },
            { n: "8.", title: "Nincs összhang a landing oldallal", desc: "A hirdetés mást ígér, mint amit az oldal folytat." },
            { n: "9.", title: "Csak esztétikára készül", desc: "Szép, de nem teljesít." },
            { n: "10.", title: "Nem mobilra készül", desc: "Desktopon jól néz ki, mobilon olvashatatlan." },
          ].map((item) => (
            <li key={item.n} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="mb-1 font-black text-white"><span className="text-rose-400 mr-1">{item.n}</span>{item.title}</p>
              <p className="text-sm leading-6 text-neutral-400">{item.desc}</p>
            </li>
          ))}
        </ul>

        <HR />

        <H2>Összefoglalás</H2>
        <P>A PPC hirdetésekben a kreatív nem mellékszereplő. A kreatív dönti el, hogy az ember megáll-e, figyel-e, megérti-e az ajánlatot, és továbbmegy-e a következő lépésre.</P>
        <P>Egy jó kreatív:</P>
        <UL items={[
          "erős hookkal indul",
          "gyorsan érthető, világos problémára vagy vágyra épít",
          "platformhoz illeszkedik",
          "képnél és videónál is tiszta üzenetet ad",
          "UGC esetén emberi és hiteles",
          "nem ér véget hirtelen, hagy időt a kattintásra",
          "tesztelhető és mérhető",
          "üzleti eredményt támogat",
        ]} />

        <div className="mt-12 rounded-[2rem] border border-rose-500/20 bg-rose-500/5 p-8">
          <p className="text-xl font-black text-white leading-relaxed">
            A cél nem az, hogy legyen egy szép hirdetésed.
          </p>
          <p className="mt-4 text-lg leading-8 text-rose-200 font-semibold">
            A cél az, hogy legyen olyan kreatív rendszered, amelyből kiderül: melyik üzenet hoz figyelmet, melyik hoz kattintást, melyik hoz leadet vagy vásárlást — és mit érdemes továbbépíteni.
          </p>
        </div>

      </article>

      {/* CTA Section */}
      <section className="px-6 pb-10 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-white text-neutral-950 shadow-2xl">
          <div className="grid gap-0 lg:grid-cols-[1fr_0.85fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-600">Kreatív ajánlat</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Szükséged van hirdetési kreatívokra, amelyek nem csak jól néznek ki, hanem teljesítenek is?
              </h2>
              <p className="mt-5 text-lg leading-8 text-neutral-600">
                Segítünk olyan képi, videós és UGC jellegű kreatívokat készíteni, amelyek illeszkednek a kampánystratégiához, tesztelhetők, mérhetők, és valódi üzleti célokat támogatnak.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:hello@blummarketing.hu?subject=Kreat%C3%ADv%20aj%C3%A1nlat%20%E2%80%93%20Blummarketing"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-7 py-4 font-bold text-white transition hover:bg-neutral-800"
                >
                  Kérek ajánlatot
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
