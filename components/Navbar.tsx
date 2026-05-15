"use client";

import { useState } from "react";
import { ChevronDown, Menu, Sparkles, X } from "lucide-react";

const szolgaltatasok = {
  label: "Szolgáltatások",
  href: "/szolgaltatasok/",
  children: [
    { href: "/szolgaltatasok/havi-videos-tartalom-hirdeteskezeles/", label: "Havi videós tartalom + hirdetéskezelés" },
    { href: "/szolgaltatasok/google-hirdeteskezeles/", label: "Google hirdetéskezelés" },
    { href: "/szolgaltatasok/tiktok-hirdeteskezeles/", label: "TikTok hirdetéskezelés" },
    { href: "/szolgaltatasok/meta-hirdeteskezeles/", label: "Meta hirdetéskezelés" },
    { href: "/szolgaltatasok/weboldal-keszites/", label: "Weboldal készítés" },
  ],
};

const tudastar = {
  label: "Tudástár",
  href: "/tudastar/",
  sectionLabel: "PPC cikkek",
  children: [
    { href: "/tudastar/google-ads/", label: "Google Ads" },
    { href: "/tudastar/meta-hirdetesek/", label: "Meta hirdetések" },
    { href: "/tudastar/tiktok-hirdetesek/", label: "TikTok hirdetések" },
    { href: "/tudastar/meres-es-analitika/", label: "Mérés és analitika" },
    { href: "/tudastar/kreativok-es-videos-tartalom/", label: "Kreatívok és videós tartalom" },
    { href: "/tudastar/fogalomtar/", label: "Fogalomtár" },
  ],
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSzolgOpen, setMobileSzolgOpen] = useState(false);
  const [mobileTudasOpen, setMobileTudasOpen] = useState(false);

  const closeAll = () => setMobileOpen(false);

  return (
    <header className="relative z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3" aria-label="Blummarketing főoldal">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-neutral-950 shadow-lg">
            <Sparkles className="h-5 w-5" aria-hidden="true" />
          </div>
          <span className="text-lg font-bold tracking-tight">Blummarketing</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm text-neutral-300 lg:flex" aria-label="Fő navigáció">

          {/* Szolgáltatások dropdown */}
          <div className="relative group">
            <a href="/szolgaltatasok/" className="flex items-center gap-1 hover:text-white transition-colors">
              Szolgáltatások
              <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" aria-hidden="true" />
            </a>
            <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-150 absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 rounded-2xl border border-white/10 bg-neutral-900 p-3 shadow-2xl">
              {szolgaltatasok.children.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-3 py-2 text-sm font-semibold text-neutral-300 transition hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <a href="/esettanulmanyok/" className="hover:text-white transition-colors">Esettanulmányok</a>

          {/* Tudástár dropdown */}
          <div className="relative group">
            <a href="/tudastar/" className="flex items-center gap-1 hover:text-white transition-colors">
              Tudástár
              <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" aria-hidden="true" />
            </a>
            <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-150 absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 rounded-2xl border border-white/10 bg-neutral-900 p-3 shadow-2xl">
              <p className="mb-2 px-3 text-xs font-black uppercase tracking-widest text-neutral-500">
                {tudastar.sectionLabel}
              </p>
              {tudastar.children.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-3 py-2 text-sm font-semibold text-neutral-300 transition hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <a href="/rolunk/" className="hover:text-white transition-colors">Rólunk</a>
          <a href="/#kapcsolat" className="hover:text-white transition-colors">Kapcsolat</a>
          <a href="/#kapcsolat" className="ml-2 rounded-full bg-white px-5 py-2.5 font-semibold text-neutral-950 transition hover:bg-neutral-200">
            Ajánlatkérés
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white lg:hidden"
          onClick={() => { setMobileOpen((v) => !v); setMobileSzolgOpen(false); setMobileTudasOpen(false); }}
          aria-label={mobileOpen ? "Menü bezárása" : "Menü megnyitása"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          className="absolute inset-x-0 top-full mx-4 rounded-2xl border border-white/10 bg-neutral-900 p-5 shadow-2xl lg:hidden"
          aria-label="Mobil navigáció"
        >
          <ul className="flex flex-col gap-1">

            {/* Szolgáltatások */}
            <li>
              <button
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-neutral-300 transition hover:bg-white/10 hover:text-white"
                onClick={() => setMobileSzolgOpen((v) => !v)}
              >
                Szolgáltatások
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileSzolgOpen ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>
              {mobileSzolgOpen && (
                <ul className="mt-1 ml-4 flex flex-col gap-1 border-l border-white/10 pl-4">
                  {szolgaltatasok.children.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="block rounded-xl px-3 py-2 text-sm font-semibold text-neutral-400 transition hover:bg-white/10 hover:text-white"
                        onClick={closeAll}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <a href="/esettanulmanyok/" className="block rounded-xl px-4 py-3 text-sm font-semibold text-neutral-300 transition hover:bg-white/10 hover:text-white" onClick={closeAll}>
                Esettanulmányok
              </a>
            </li>

            {/* Tudástár */}
            <li>
              <button
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-neutral-300 transition hover:bg-white/10 hover:text-white"
                onClick={() => setMobileTudasOpen((v) => !v)}
              >
                Tudástár
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileTudasOpen ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>
              {mobileTudasOpen && (
                <ul className="mt-1 ml-4 flex flex-col gap-1 border-l border-white/10 pl-4">
                  <li>
                    <p className="px-2 py-1 text-xs font-black uppercase tracking-widest text-neutral-500">{tudastar.sectionLabel}</p>
                  </li>
                  {tudastar.children.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="block rounded-xl px-3 py-2 text-sm font-semibold text-neutral-400 transition hover:bg-white/10 hover:text-white"
                        onClick={closeAll}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <a href="/rolunk/" className="block rounded-xl px-4 py-3 text-sm font-semibold text-neutral-300 transition hover:bg-white/10 hover:text-white" onClick={closeAll}>Rólunk</a>
            </li>
            <li>
              <a href="/#kapcsolat" className="block rounded-xl px-4 py-3 text-sm font-semibold text-neutral-300 transition hover:bg-white/10 hover:text-white" onClick={closeAll}>Kapcsolat</a>
            </li>
            <li className="mt-2">
              <a href="/#kapcsolat" className="block rounded-full bg-white px-4 py-3 text-center text-sm font-bold text-neutral-950 transition hover:bg-neutral-200" onClick={closeAll}>
                Ajánlatkérés
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
