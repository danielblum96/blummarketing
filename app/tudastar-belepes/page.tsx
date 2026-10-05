"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function TudasTarBelepes() {
  const router = useRouter();
  const [pw, setPw] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (pw === "8200") {
      sessionStorage.setItem("tb", "1");
      router.replace("/tudastar/");
    } else {
      setError(true);
      setPw("");
    }
  }

  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#0a0a0a",
      fontFamily: "'Inter', system-ui, sans-serif",
      padding: "1.5rem",
    }}>
      <div style={{
        width: "100%",
        maxWidth: "400px",
        background: "#171717",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "1.5rem",
        padding: "40px",
      }}>
        <div style={{ marginBottom: "28px" }}>
          <a href="https://blummarketing.hu" style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            fontSize: "15px", fontWeight: 700, color: "#fff", textDecoration: "none", marginBottom: "32px"
          }}>
            <div style={{
              width: 36, height: 36, background: "#fff", borderRadius: "12px",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            Blummarketing
          </a>
          <h1 style={{ fontSize: "22px", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", marginBottom: "8px" }}>
            Tudástár
          </h1>
          <p style={{ fontSize: "14px", color: "#a3a3a3", lineHeight: 1.6 }}>
            A tartalom jelszóval védett. Add meg a jelszót a belépéshez.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={pw}
            onChange={e => { setPw(e.target.value); setError(false); }}
            placeholder="Jelszó"
            autoFocus
            style={{
              width: "100%",
              padding: "12px 16px",
              fontSize: "15px",
              fontFamily: "inherit",
              background: "#0a0a0a",
              border: error ? "1px solid #e11d48" : "1px solid rgba(255,255,255,0.12)",
              borderRadius: "0.75rem",
              color: "#fff",
              outline: "none",
              marginBottom: "8px",
              boxSizing: "border-box",
            }}
          />
          {error && (
            <p style={{ fontSize: "13px", color: "#fda4af", marginBottom: "12px" }}>
              Helytelen jelszó. Próbáld újra.
            </p>
          )}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "8px",
              background: "#fff",
              color: "#0a0a0a",
              border: "none",
              borderRadius: "9999px",
              fontSize: "15px",
              fontWeight: 700,
              fontFamily: "inherit",
              cursor: "pointer",
            }}
          >
            Belépés
          </button>
        </form>
      </div>
    </main>
  );
}
