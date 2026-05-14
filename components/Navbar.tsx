import { Sparkles } from "lucide-react";

interface NavbarProps {
  basePath?: string;
}

export default function Navbar({ basePath = "" }: NavbarProps) {
  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
      <a href={`${basePath}/`} className="flex items-center gap-3" aria-label="Blummarketing főoldal">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-neutral-950 shadow-lg">
          <Sparkles className="h-5 w-5" aria-hidden="true" />
        </div>
        <span className="text-lg font-bold tracking-tight">Blummarketing</span>
      </a>
      <nav className="hidden items-center gap-8 text-sm text-neutral-300 md:flex" aria-label="Fő navigáció">
        <a href={`${basePath}/#szolgaltatasok`} className="hover:text-white">Szolgáltatások</a>
        <a href={`${basePath}/#ajanlat`} className="hover:text-white">Csomag</a>
        <a href={`${basePath}/#folyamat`} className="hover:text-white">Folyamat</a>
        <a href="/blog/" className="hover:text-white">Blog</a>
        <a href={`${basePath}/#kapcsolat`} className="rounded-full bg-white px-5 py-2.5 font-semibold text-neutral-950 transition hover:bg-neutral-200">Ajánlatkérés</a>
      </nav>
    </div>
  );
}
