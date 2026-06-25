import CookieSettingsLink from "@/components/CookieSettingsLink";

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-sm text-neutral-300 sm:flex-row sm:items-center sm:justify-between lg:px-8">
      <p>© {new Date().getFullYear()} Blummarketing. Minden jog fenntartva.</p>
      <div className="flex items-center gap-4">
        <p>Havidíjas tartalomgyártás és hirdetéskezelés TikTokra és Metára.</p>
        <a href="/webp/" className="text-neutral-400 underline hover:text-white transition">Ingyenes WebP konvertáló</a>
        <a href="/img-compress/" className="text-neutral-400 underline hover:text-white transition">Kép tömörítő</a>
        <CookieSettingsLink />
      </div>
    </footer>
  );
}
