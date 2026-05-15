"use client";

import { useState, useEffect } from "react";

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

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) setVisible(true);
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
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-neutral-950/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-5 lg:px-8">
        {/* Main row */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-neutral-300 max-w-2xl">
            Ez az oldal cookie-kat használ a jobb felhasználói élmény és a hirdetési teljesítmény mérése érdekében.
          </p>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={acceptAll}
              className="rounded-full bg-white px-5 py-2 text-sm font-bold text-neutral-950 transition hover:bg-neutral-200"
            >
              Elfogadom
            </button>
            <button
              onClick={rejectAll}
              className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Elutasítom
            </button>
            <button
              onClick={() => setExpanded((v) => !v)}
              className="text-sm font-medium text-rose-300 hover:text-rose-200 transition"
            >
              További beállítások
            </button>
          </div>
        </div>

        {/* Expanded settings */}
        {expanded && (
          <div className="mt-5 border-t border-white/10 pt-5 space-y-4">
            {/* Szükséges */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-neutral-200">Szükséges cookie-k</p>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Az oldal alapvető működéséhez szükségesek. Nem kapcsolhatók ki.
                </p>
              </div>
              <div className="flex h-6 w-11 shrink-0 items-center rounded-full bg-neutral-700 cursor-not-allowed opacity-50 mt-0.5">
                <div className="ml-0.5 h-5 w-5 rounded-full bg-neutral-400" />
              </div>
            </div>

            {/* Statisztikai */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-neutral-200">Statisztikai cookie-k (GA4)</p>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Névtelen látogatási adatok gyűjtése az oldal fejlesztéséhez.
                </p>
              </div>
              <button
                role="switch"
                aria-checked={statistics}
                onClick={() => setStatistics((v) => !v)}
                className={`flex h-6 w-11 shrink-0 items-center rounded-full transition-colors mt-0.5 ${
                  statistics ? "bg-emerald-500" : "bg-neutral-700"
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
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-neutral-200">Marketing cookie-k (Facebook Pixel, TikTok Pixel)</p>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Hirdetési teljesítmény mérése és remarketing célközönségek felépítése.
                </p>
              </div>
              <button
                role="switch"
                aria-checked={marketing}
                onClick={() => setMarketing((v) => !v)}
                className={`flex h-6 w-11 shrink-0 items-center rounded-full transition-colors mt-0.5 ${
                  marketing ? "bg-emerald-500" : "bg-neutral-700"
                }`}
              >
                <div
                  className={`h-5 w-5 rounded-full bg-white shadow transition-transform ${
                    marketing ? "translate-x-5" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>

            <button
              onClick={saveCustom}
              className="mt-2 rounded-full bg-white px-5 py-2 text-sm font-bold text-neutral-950 transition hover:bg-neutral-200"
            >
              Mentés
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
