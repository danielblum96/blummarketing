"use client";

import { useState } from "react";
import { Menu, Sparkles, X } from "lucide-react";

const navLinks = [
  { href: "/szolgaltatasok/", label: "Szolgáltatások" },
  { href: "/esettanulmanyok/", label: "Esettanulmányok" },
  { href: "/tudastar/", label: "Tudástár" },
  { href: "/rolunk/", label: "Rólunk" },
  { href: "/#kapcsolat", label: "Kapcsolat" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="/" className="flex items-center gap-3" aria-label="Blummarketing főoldal">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-neutral-950 shadow-lg">
            <Sparkles className="h-5 w-5" aria-hidden="true" />
          </div>
          <span className="text-lg font-bold tracking-tight">Blummarketing</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm text-neutral-300 lg:flex" aria-label="Fő navigáció">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition-colors">{l.label}</a>
          ))}
          <a href="/#kapcsolat" className="ml-2 rounded-full bg-white px-5 py-2.5 font-semibold text-neutral-950 transition hover:bg-neutral-200">
            Ajánlatkérés
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="absolute inset-x-0 top-full mx-4 rounded-2xl border border-white/10 bg-neutral-900 p-5 shadow-2xl lg:hidden"
          aria-label="Mobil navigáció"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-neutral-300 transition hover:bg-white/10 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="/#kapcsolat"
                className="block rounded-full bg-white px-4 py-3 text-center text-sm font-bold text-neutral-950 transition hover:bg-neutral-200"
                onClick={() => setOpen(false)}
              >
                Ajánlatkérés
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
