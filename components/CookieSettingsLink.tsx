"use client";

const CONSENT_KEY = "blum_cookie_consent";

export default function CookieSettingsLink() {
  function handleClick() {
    localStorage.removeItem(CONSENT_KEY);
    window.location.reload();
  }

  return (
    <button
      onClick={handleClick}
      className="text-neutral-300 hover:text-neutral-300 transition text-sm"
    >
      Cookie beállítások
    </button>
  );
}
