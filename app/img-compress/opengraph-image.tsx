import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #0a0a0a 0%, #171717 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 20,
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
            }}
          >
            🗜️
          </div>
          <span style={{ fontSize: 28, fontWeight: 700, color: "#fda4af" }}>FREE ONLINE TOOL</span>
        </div>
        <div style={{ fontSize: 64, fontWeight: 900, textAlign: "center", padding: "0 80px", lineHeight: 1.15 }}>
          Image Compressor &amp; Resizer
        </div>
        <div style={{ fontSize: 28, color: "#a3a3a3", marginTop: 24 }}>
          No limits · No upload · 100% free
        </div>
      </div>
    ),
    { ...size }
  );
}
