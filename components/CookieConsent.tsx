"use client";

import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

type ConsentState = {
  necessary: boolean;
  statistics: boolean;
  marketing: boolean;
  timestamp: string;
  version: string;
};

const CONSENT_KEY = "blum_cookie_consent";

function saveConsent(consent: ConsentState) {
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  window.dispatchEvent(new Event("cookieConsentUpdated"));
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [statistics, setStatistics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) setVisible(true);
    setMounted(true);
  }, []);

  if (!visible) return null;

  function acceptAll() {
    saveConsent({
      necessary: true,
      statistics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
      version: "1.0",
    });
    setVisible(false);
  }

  function rejectAll() {
    saveConsent({
      necessary: true,
      statistics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
      version: "1.0",
    });
    setVisible(false);
  }

  function saveCustom() {
    saveConsent({
      necessary: true,
      statistics,
      marketing,
      timestamp: new Date().toISOString(),
      version: "1.0",
    });
    setVisible(false);
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center px-4 bg-neutral-950/95 backdrop-blur-xl transition-opacity duration-500 ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-full max-w-lg rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 shadow-2xl">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-neutral-950 shadow-lg">
            <Sparkles className="h-6 w-6" aria-hidden="true" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-black text-white text-center mb-3">
          Sütiket használunk
        </h2>

        {/* Description */}
        <p className="text-sm leading-7 text-neutral-300 text-center mb-8">
          Az oldal cookie-kat használ a jobb felhasználói élmény és a hirdetési
          teljesítmény mérése érdekében. Kérjük válassz az alábbi lehetőségek
          közül.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          {/* Accept all */}
          <button
            onClick={acceptAll}
            className="w-full rounded-full bg-white py-4 text-sm font-bold text-neutral-950 shadow-2xl transition hover:scale-[1.02]"
          >
            Elfogadom az összes sütit
          </button>

          {/* More settings */}
          <button
            onClick={() => setExpanded((v) => !v)}
            className="w-full rounded-full border border-white/15 bg-white/5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
          >
            További beállítások
          </button>

          {/* Reject – text link style */}
          <p
            onClick={rejectAll}
            className="mt-1 cursor-pointer text-center text-xs text-neutral-600 transition hover:text-neutral-400"
          >
            Csak a szükséges sütiket fogadom el
          </p>
        </div>

        {/* Expanded settings */}
        {expanded && (
          <div className="mt-8 border-t border-white/10 pt-6 space-y-5">
            {/* Szükséges */}
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-neutral-200">Szükséges</p>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Az oldal működéséhez elengedhetetlen
                </p>
              </div>
              {/* Disabled toggle */}
              <div className="flex h-6 w-11 shrink-0 cursor-not-allowed items-center rounded-full bg-neutral-700 opacity-50">
                <div className="ml-0.5 h-5 w-5 rounded-full bg-white" />
              </div>
            </div>

            {/* Statisztikai */}
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-neutral-200">Statisztikai (GA4)</p>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Segít megérteni hogyan használják az oldalt
                </p>
              </div>
              <button
                role="switch"
                aria-checked={statistics}
                onClick={() => setStatistics((v) => !v)}
                className={`flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${
                  statistics ? "bg-emerald-400" : "bg-neutral-700"
                }`}
              >
                <div
                  className={`h-5 w-5 rounded-full bg-white shadow transition-transform ${
                    statistics ? "translate-x-5" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>

            {/* Marketing */}
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-neutral-200">Marketing</p>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Facebook, TikTok hirdetések személyre szabása
                </p>
              </div>
              <button
                role="switch"
                aria-checked={marketing}
                onClick={() => setMarketing((v) => !v)}
                className={`flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${
                  marketing ? "bg-emerald-400" : "bg-neutral-700"
                }`}
              >
                <div
                  className={`h-5 w-5 rounded-full bg-white shadow transition-transform ${
                    marketing ? "translate-x-5" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>

            {/* Save custom */}
            <button
              onClick={saveCustom}
              className="w-full rounded-full bg-white px-6 py-3 text-sm font-bold text-neutral-950 transition hover:bg-neutral-100"
            >
              Beállítások mentése
            </button>
          </div>
        )}

        {/* Footer link */}
        <p className="mt-6 text-center text-xs text-neutral-600">
          Az adatkezelésről bővebben:{" "}
          <a href="#" className="underline hover:text-neutral-400 transition">
            Adatkezelési tájékoztató
          </a>
        </p>
      </div>
    </div>
  );
}
