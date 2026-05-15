/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect } from "react";

const GA4_ID = "G-XXXXXXXXXX"; // TODO: replace with real GA4 measurement ID
const FB_PIXEL_ID = "XXXXXXXXXXXXXXXXXX"; // TODO: replace with real Facebook Pixel ID
const TIKTOK_PIXEL_ID = "XXXXXXXXXXXXXXXXXX"; // TODO: replace with real TikTok Pixel ID
const CONSENT_KEY = "blum_cookie_consent";

function loadGA4() {
  if (document.getElementById("ga4-script")) return;
  const s = document.createElement("script");
  s.id = "ga4-script";
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
  s.async = true;
  document.head.appendChild(s);
  (window as any).dataLayer = (window as any).dataLayer || [];
  function gtag(...args: any[]) { (window as any).dataLayer.push(args); }
  gtag("js", new Date());
  gtag("config", GA4_ID);
  (window as any).gtag = gtag;
}

function loadFacebookPixel() {
  if ((window as any).fbq) return;
  const n: any = function (...args: any[]) {
    n.callMethod ? n.callMethod(...args) : n.queue.push(args);
  };
  (window as any).fbq = n;
  n.push = n;
  n.loaded = true;
  n.version = "2.0";
  n.queue = [];
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(s);
  n("init", FB_PIXEL_ID);
  n("track", "PageView");
}

function loadTikTokPixel() {
  if ((window as any).ttq) return;
  const ttq: any = [];
  (window as any).ttq = ttq;
  ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"];
  ttq.setAndDefer = function (t: any, e: string) {
    t[e] = function (...args: any[]) { t.push([e, ...args]); };
  };
  ttq.methods.forEach((e: string) => ttq.setAndDefer(ttq, e));
  ttq.instance = function (t: string) {
    const i = ttq._i || (ttq._i = {});
    if (!i[t]) {
      i[t] = ttq.methods.reduce((acc: any, e: string) => {
        acc[e] = (...args: any[]) => ttq.push([e, t, ...args]);
        return acc;
      }, {});
    }
    return i[t];
  };
  ttq.load = function (e: string) {
    const s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://analytics.tiktok.com/i18n/pixel/events.js?sdkid=" + e;
    document.head.appendChild(s);
  };
  ttq.load(TIKTOK_PIXEL_ID);
  ttq.page();
}

function applyConsent() {
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) return;
    const consent = JSON.parse(stored);
    if (consent.statistics) loadGA4();
    if (consent.marketing) {
      loadFacebookPixel();
      loadTikTokPixel();
    }
  } catch {
    // ignore parse errors
  }
}

export default function CookieScripts() {
  useEffect(() => {
    applyConsent();
    const handler = () => applyConsent();
    window.addEventListener("cookieConsentUpdated", handler);
    return () => window.removeEventListener("cookieConsentUpdated", handler);
  }, []);

  return null;
}
