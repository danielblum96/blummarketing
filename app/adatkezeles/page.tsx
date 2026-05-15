import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ogImage } from "@/lib/og";

export const metadata = {
  title: "Adatkezelési tájékoztató | Blummarketing",
  description:
    "Adatkezelési és süti tájékoztató a blummarketing.hu weboldalhoz – GA4, Meta Pixel és TikTok Pixel használata, GDPR jogok, adatkezelő adatai.",
  openGraph: {
    title: "Adatkezelési tájékoztató | Blummarketing",
    description:
      "Adatkezelési és süti tájékoztató a blummarketing.hu weboldalhoz – GA4, Meta Pixel és TikTok Pixel használata, GDPR jogok.",
    type: "website",
    locale: "hu_HU",
    siteName: "Blummarketing",
    images: ogImage,
  },
  alternates: { canonical: "/adatkezeles/" },
  robots: { index: false, follow: false },
};

/* ─── helpers ─────────────────────────────────────────────────────────── */

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-12 mb-4 text-xl font-black text-white">{children}</h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-sm leading-7 text-neutral-300 mb-4">{children}</p>;
}

function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="mb-4 space-y-1.5 pl-5 text-sm leading-7 text-neutral-300 list-disc marker:text-rose-400">
      {children}
    </ul>
  );
}

function OL({ children }: { children: React.ReactNode }) {
  return (
    <ol className="mb-4 space-y-1.5 pl-5 text-sm leading-7 text-neutral-300 list-decimal marker:text-rose-400">
      {children}
    </ol>
  );
}

function Table({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 overflow-x-auto">
      <table className="w-full text-sm text-left border-collapse">{children}</table>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="border border-white/10 bg-white/[0.04] px-4 py-2.5 font-bold text-neutral-200 text-xs uppercase tracking-wide">
      {children}
    </th>
  );
}

function Td({ children }: { children: React.ReactNode }) {
  return (
    <td className="border border-white/10 px-4 py-2.5 text-neutral-400 align-top">
      {children}
    </td>
  );
}

function Strong({ children }: { children: React.ReactNode }) {
  return <strong className="font-bold text-neutral-200">{children}</strong>;
}

/* ─── page ────────────────────────────────────────────────────────────── */

export default function AdatkezelesPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white antialiased">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.12),transparent_34%),linear-gradient(180deg,#0a0a0a_0%,#171717_100%)]" />
        <Navbar />
        <div className="mx-auto max-w-3xl px-6 pb-10 pt-14 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-300 mb-4">
            Jogi dokumentum
          </p>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
            Adatkezelési tájékoztató
          </h1>
          <div className="mt-5 flex flex-wrap gap-x-8 gap-y-1 text-sm text-neutral-500">
            <span>
              <Strong>Hatályos:</Strong> 2024. január 1-től visszavonásig
            </span>
            <span>
              <Strong>Weboldal:</Strong> www.blummarketing.hu
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24 lg:px-8">
        {/* 1 */}
        <H2>1. Az adatkezelő adatai</H2>
        <div className="mb-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm text-neutral-300 space-y-1.5">
          {[
            ["Adatkezelő neve", "Blum Dániel EV"],
            ["Székhely", "8228 Lovas, Kishegyi út 1."],
            ["Nyilvántartási szám", "2341234313124"],
            ["Adószám", "2139876"],
            ["E-mail", "hello@blummarketing.hu"],
            ["Telefon", "06 30 309 8589"],
            ["Képviselő", "Blum Dániel"],
          ].map(([label, value]) => (
            <div key={label} className="flex gap-3">
              <span className="w-44 shrink-0 font-bold text-neutral-400">{label}:</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
        <P>
          A jelen tájékoztató célja, hogy bemutassa, hogyan kezeljük a weboldal
          látogatóinak személyes adatait, különösen a weboldalon használt
          analitikai és marketing célú mérőkódok, sütik és pixelek alkalmazása
          során.
        </P>

        {/* 2 */}
        <H2>2. A weboldalon használt mérési és marketingeszközök</H2>
        <Table>
          <thead>
            <tr>
              <Th>Eszköz</Th>
              <Th>Szolgáltató</Th>
              <Th>Cél</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>Google Analytics 4</Td>
              <Td>Google Ireland Limited</Td>
              <Td>Webanalitika, látogatottságmérés, eseménymérés</Td>
            </tr>
            <tr>
              <Td>Meta Pixel / Facebook Pixel</Td>
              <Td>Meta Platforms Ireland Limited</Td>
              <Td>Hirdetésmérés, konverziókövetés, remarketing</Td>
            </tr>
            <tr>
              <Td>TikTok Pixel</Td>
              <Td>
                TikTok Technology Limited / TikTok Information Technologies UK
                Limited
              </Td>
              <Td>Hirdetésmérés, konverziókövetés, remarketing</Td>
            </tr>
          </tbody>
        </Table>
        <P>
          Ezek az eszközök csak akkor aktiválódnak, ha a látogató a süti panelen
          ehhez előzetesen hozzájárul, kivéve a weboldal működéséhez
          feltétlenül szükséges technikai sütiket.
        </P>

        {/* 3 */}
        <H2>3. A kezelt adatok köre</H2>
        <P>
          Az analitikai és marketingeszközök használata során az alábbi
          adatkategóriák kezelése történhet:
        </P>
        <UL>
          {[
            "IP-cím vagy abból képzett technikai / földrajzi információ",
            "böngésző és eszköz adatai",
            "operációs rendszer",
            "képernyőfelbontás",
            "látogatás időpontja",
            "meglátogatott oldalak",
            "oldalon végzett műveletek, kattintások, görgetések",
            "űrlapbeküldések",
            "vásárlási vagy ajánlatkérési események",
            "egyedi online azonosítók, sütiazonosítók, hirdetési azonosítók",
            "a hozzájárulás státusza",
          ].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </UL>
        <P>
          A weboldal üzemeltetője <Strong>nem tölt fel tudatosan különleges
          adatot</Strong> ezekbe a rendszerekbe, és nem küld a szolgáltatók
          részére olyan közvetlen azonosító adatot, mint például jelszó,
          személyi igazolványszám vagy egészségügyi adat.
        </P>

        {/* 4 */}
        <H2>4. Az adatkezelés céljai</H2>
        <OL>
          {[
            ["Webanalitika", "annak megértése, hogy a látogatók hogyan használják a weboldalt."],
            ["Teljesítménymérés", "kampányok, hirdetések és tartalmak eredményességének mérése."],
            ["Konverziókövetés", "például vásárlás, ajánlatkérés, kapcsolatfelvétel mérése."],
            ["Remarketing", "korábbi látogatók elérése hirdetési rendszerekben."],
            ["Hirdetésoptimalizálás", "relevánsabb hirdetések megjelenítése, a hirdetési költségek hatékonyabb felhasználása."],
            ["Statisztikai elemzés", "összesített, riport szintű kimutatások készítése."],
          ].map(([title, desc]) => (
            <li key={title}>
              <Strong>{title}:</Strong> {desc}
            </li>
          ))}
        </OL>

        {/* 5 */}
        <H2>5. Az adatkezelés jogalapja</H2>
        <P>
          Az analitikai, marketing- és remarketing célú adatkezelés jogalapja{" "}
          <Strong>az érintett hozzájárulása</Strong> az Európai Parlament és a
          Tanács 2016/679 rendelete (GDPR) 6. cikk (1) bekezdés a) pontja
          alapján.
        </P>
        <P>
          A sütik és hasonló technológiák eszközön történő elhelyezésének vagy
          onnan történő kiolvasásának jogalapja szintén a látogató előzetes
          hozzájárulása, kivéve a weboldal működéséhez feltétlenül szükséges
          sütiket.
        </P>
        <P>
          A hozzájárulás bármikor visszavonható a weboldalon elérhető süti
          beállítások módosításával. A hozzájárulás visszavonása nem érinti a
          visszavonás előtt végzett adatkezelés jogszerűségét.
        </P>

        {/* 6 */}
        <H2>6. Google Analytics 4 használata</H2>
        <P>
          A weboldal a Google Analytics 4 szolgáltatást használja. A
          szolgáltatás segítségével statisztikai információt kapunk arról, hogy
          hányan látogatják a weboldalt, mely oldalakat nézik meg, mennyi időt
          töltenek az oldalon, milyen eszközről érkeznek, és milyen eseményeket
          hajtanak végre.
        </P>
        <div className="mb-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm text-neutral-300 space-y-1.5">
          {[
            ["Szolgáltató", "Google Ireland Limited"],
            ["Székhely", "Gordon House, Barrow Street, Dublin 4, Írország"],
            ["Adatkezelés célja", "Webanalitika, statisztika, kampánymérés"],
            ["Jogalap", "Hozzájárulás"],
            ["Adattárolási idő", "14 hónap (GA4 alapértelmezett beállítás)"],
            ["Címzett", "Google Ireland Limited és a Google cégcsoport adatfeldolgozói"],
          ].map(([label, value]) => (
            <div key={label} className="flex gap-3">
              <span className="w-44 shrink-0 font-bold text-neutral-400">{label}:</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
        <P>
          A Google Analytics 4 esetében az IP-címek kezelése korlátozott módon
          történik – a Google tájékoztatása szerint a GA4 nem naplóz és nem
          tárol egyedi IP-címeket. A GA4 kizárólag akkor indul el, ha a látogató
          az analitikai sütikhez hozzájárulást adott.
        </P>

        {/* 7 */}
        <H2>7. Meta Pixel / Facebook Pixel használata</H2>
        <P>
          A weboldal Meta Pixelt használhat. A Meta Pixel segítségével mérhető,
          hogy a látogatók milyen műveleteket végeznek a weboldalon – például
          ajánlatot kérnek-e vagy kapcsolatba lépnek-e.
        </P>
        <div className="mb-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm text-neutral-300 space-y-1.5">
          {[
            ["Szolgáltató", "Meta Platforms Ireland Limited"],
            ["Székhely", "Merrion Road, Dublin 4, D04 X2K5, Írország"],
            ["Adatkezelés célja", "Hirdetésmérés, konverziókövetés, remarketing, célzott hirdetések"],
            ["Jogalap", "Hozzájárulás"],
            ["Címzett", "Meta Platforms Ireland Limited és a Meta cégcsoport"],
          ].map(([label, value]) => (
            <div key={label} className="flex gap-3">
              <span className="w-44 shrink-0 font-bold text-neutral-400">{label}:</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
        <P>
          A Meta Pixel kizárólag akkor aktiválódik, ha a látogató a marketing
          célú sütikhez és pixelekhez hozzájárult. A Meta Pixel használata során
          a weboldal üzemeltetője és a Meta bizonyos adatkezelések tekintetében
          közös adatkezelői minőségben járhat el.
        </P>

        {/* 8 */}
        <H2>8. TikTok Pixel használata</H2>
        <P>
          A weboldal TikTok Pixelt használhat a TikTok hirdetések
          eredményességének mérése, konverziókövetés és remarketing célból.
        </P>
        <div className="mb-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm text-neutral-300 space-y-1.5">
          {[
            ["Szolgáltató", "TikTok Technology Limited / TikTok Information Technologies UK Limited"],
            ["Székhely", "10 Earlsfort Terrace, Dublin 2, D02 T380, Írország"],
            ["Adatkezelés célja", "Hirdetésmérés, konverziókövetés, remarketing, kampányoptimalizálás"],
            ["Jogalap", "Hozzájárulás"],
            ["Címzett", "TikTok Technology Limited és a TikTok-csoport kapcsolódó vállalatai"],
          ].map(([label, value]) => (
            <div key={label} className="flex gap-3">
              <span className="w-44 shrink-0 font-bold text-neutral-400">{label}:</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
        <P>
          A TikTok Pixel kizárólag akkor aktiválódik, ha a látogató a marketing
          célú sütikhez és pixelekhez hozzájárult.
        </P>

        {/* 9 */}
        <H2>9. Adattovábbítás harmadik országba</H2>
        <P>
          A Google, a Meta és a TikTok globális vállalatcsoportok, ezért
          előfordulhat, hogy az adatok az Európai Gazdasági Térségen kívülre is
          továbbításra kerülnek. Ilyen esetben a szolgáltatók megfelelő
          garanciákat alkalmaznak:
        </P>
        <UL>
          {[
            "Európai Bizottság által elfogadott általános szerződési feltételek",
            "megfelelőségi határozaton alapuló adattovábbítási mechanizmus",
            "kiegészítő technikai és szervezési intézkedések",
            "belső adatvédelmi és biztonsági szabályok",
          ].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </UL>

        {/* 10 */}
        <H2>10. Sütik és pixelek kezelése</H2>
        <Table>
          <thead>
            <tr>
              <Th>Kategória</Th>
              <Th>Leírás</Th>
              <Th>Jogalap</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>Feltétlenül szükséges sütik</Td>
              <Td>A weboldal alapvető működéséhez szükségesek</Td>
              <Td>Jogos érdek / szolgáltatás nyújtása</Td>
            </tr>
            <tr>
              <Td>Analitikai sütik</Td>
              <Td>Látogatottság és használat mérése</Td>
              <Td>Hozzájárulás</Td>
            </tr>
            <tr>
              <Td>Marketing sütik és pixelek</Td>
              <Td>Hirdetésmérés, remarketing, célzott hirdetések</Td>
              <Td>Hozzájárulás</Td>
            </tr>
          </tbody>
        </Table>
        <P>
          A hozzájárulás bármikor módosítható vagy visszavonható a{" "}
          <Strong>„Süti beállítások"</Strong> linkre kattintva az oldal alján.
        </P>

        {/* 11 */}
        <H2>11. Hozzájárulás kezelése</H2>
        <P>
          A weboldal csak akkor tölti be az analitikai és marketingeszközöket,
          ha a látogató ehhez előzetesen hozzájárult. A hozzájárulásnak
          önkéntesnek, konkrétnak, megfelelő tájékoztatáson alapulónak,
          egyértelműnek és visszavonhatónak kell lennie. Az „Elfogadom" és az
          „Elutasítom" lehetőségeket azonos könnyedséggel biztosítjuk. Az előre
          bepipált jelölőnégyzet nem minősül érvényes hozzájárulásnak.
        </P>

        {/* 12 */}
        <H2>12. Az adatok megőrzési ideje</H2>
        <Table>
          <thead>
            <tr>
              <Th>Adatkezelés</Th>
              <Th>Megőrzési idő</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>Hozzájárulási napló</Td>
              <Td>5 év (jogi igények elévüléséig)</Td>
            </tr>
            <tr>
              <Td>GA4 analitikai adatok</Td>
              <Td>14 hónap</Td>
            </tr>
            <tr>
              <Td>Meta Pixel eseményadatok</Td>
              <Td>A Meta saját szabályai szerint</Td>
            </tr>
            <tr>
              <Td>TikTok Pixel eseményadatok</Td>
              <Td>A TikTok saját szabályai szerint</Td>
            </tr>
            <tr>
              <Td>Technikai naplóadatok</Td>
              <Td>30 nap</Td>
            </tr>
          </tbody>
        </Table>

        {/* 13 */}
        <H2>13. Adatfeldolgozók és címzettek</H2>
        <Table>
          <thead>
            <tr>
              <Th>Szolgáltató</Th>
              <Th>Szerep</Th>
              <Th>Tevékenység</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>Google Ireland Limited</Td>
              <Td>Adatfeldolgozó / önálló adatkezelő</Td>
              <Td>GA4, mérés, statisztika</Td>
            </tr>
            <tr>
              <Td>Meta Platforms Ireland Limited</Td>
              <Td>Önálló vagy közös adatkezelő</Td>
              <Td>Meta Pixel, hirdetésmérés, remarketing</Td>
            </tr>
            <tr>
              <Td>TikTok Technology Limited</Td>
              <Td>Önálló vagy közös adatkezelő</Td>
              <Td>TikTok Pixel, hirdetésmérés, remarketing</Td>
            </tr>
            <tr>
              <Td>Cloudflare, Inc.</Td>
              <Td>Adatfeldolgozó</Td>
              <Td>Weboldal tárhelye és CDN</Td>
            </tr>
          </tbody>
        </Table>

        {/* 14 */}
        <H2>14. Az érintettek jogai</H2>
        <P>A látogató jogosult:</P>
        <OL>
          {[
            ["hozzáférést kérni", "a róla kezelt személyes adatokhoz"],
            ["helyesbítést kérni", "ha az adat pontatlan"],
            ["törlést kérni", "ha az adatkezelés feltételei fennállnak"],
            ["az adatkezelés korlátozását kérni", ""],
            ["tiltakozni", "bizonyos adatkezelések ellen"],
            ["adathordozhatósághoz való jogot gyakorolni", ""],
            ["hozzájárulását bármikor visszavonni", ""],
            ["panaszt tenni", "a felügyeleti hatóságnál"],
          ].map(([right, desc]) => (
            <li key={right}>
              <Strong>{right}</Strong>
              {desc ? ` – ${desc}` : ""}
            </li>
          ))}
        </OL>
        <P>
          A jogok gyakorlásához fordulj az adatkezelőhöz:{" "}
          <a
            href="mailto:hello@blummarketing.hu"
            className="text-rose-300 hover:text-rose-200 transition underline"
          >
            hello@blummarketing.hu
          </a>
          . A kérelmeket 1 hónapon belül megválaszoljuk (szükség esetén +2
          hónap).
        </P>

        {/* 15 */}
        <H2>15. Panasztételi lehetőség</H2>
        <P>
          Amennyiben az érintett úgy véli, hogy személyes adatainak kezelése
          sérti a GDPR rendelkezéseit, panaszt tehet:
        </P>
        <div className="mb-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm text-neutral-300 space-y-1">
          <p className="font-bold text-neutral-200">
            Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH)
          </p>
          <p>1055 Budapest, Falk Miksa utca 9–11.</p>
          <p>Postacím: 1363 Budapest, Pf. 9.</p>
          <p>
            E-mail:{" "}
            <a
              href="mailto:ugyfelszolgalat@naih.hu"
              className="text-rose-300 hover:text-rose-200 transition underline"
            >
              ugyfelszolgalat@naih.hu
            </a>
          </p>
          <p>
            Weboldal:{" "}
            <a
              href="https://naih.hu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-300 hover:text-rose-200 transition underline"
            >
              naih.hu
            </a>
          </p>
        </div>
        <P>Az érintett jogosult bírósághoz is fordulni.</P>

        {/* 16 */}
        <H2>16. Automatizált döntéshozatal és profilalkotás</H2>
        <P>
          A weboldal üzemeltetője önállóan nem hoz olyan, kizárólag
          automatizált adatkezelésen alapuló döntést, amely a látogatóra
          joghatással járna. A Google, a Meta és a TikTok hirdetési rendszerei
          ugyanakkor végezhetnek profilalkotást és hirdetésoptimalizálást, ez
          kizárólag a látogató hozzájárulása esetén történhet.
        </P>

        {/* 17 */}
        <H2>17. Adatbiztonság</H2>
        <P>
          Az adatkezelő megfelelő technikai és szervezési intézkedéseket
          alkalmaz a személyes adatok védelme érdekében (jogosulatlan hozzáférés,
          megváltoztatás, továbbítás, nyilvánosságra hozatal, törlés, sérülés
          ellen). Az intézkedések közé tartozik a HTTPS kapcsolat, a
          hozzáférések korlátozása, a jogosultságkezelés, a naplózás és a
          rendszeres felülvizsgálat.
        </P>

        {/* 18 */}
        <H2>18. A tájékoztató módosítása</H2>
        <P>
          Az adatkezelő fenntartja a jogot, hogy a jelen tájékoztatót módosítsa.
          A módosított tájékoztatót a weboldalon tesszük közzé. Lényeges
          változás esetén a weboldalon figyelemfelhívást helyezünk el.
        </P>

        {/* Divider */}
        <div className="mt-16 border-t border-white/10 pt-8 text-xs text-neutral-600 space-y-1">
          <p>Hatályos: 2024. január 1-től visszavonásig</p>
          <p>Verzió: 1.0</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
