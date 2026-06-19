"use client";

import { useRef, useState } from "react";
import { UploadCloud } from "lucide-react";

type LogEntry = {
  id: number;
  message: string;
  status: "ok" | "err";
};

let logCounter = 0;

export default function WebpConverter() {
  const [dragOver, setDragOver] = useState(false);
  const [quality, setQuality] = useState(85);
  const [log, setLog] = useState<LogEntry[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function addLog(message: string, status: "ok" | "err") {
    logCounter += 1;
    setLog((prev) => [{ id: logCounter, message, status }, ...prev]);
  }

  function downloadBlob(blob: Blob, filename: string) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function formatKb(bytes: number) {
    return `${Math.round(bytes / 1024)} KB`;
  }

  function convertToWebp(file: File, qualityNumber: number) {
    return new Promise<void>((resolve, reject) => {
      const reader = new FileReader();

      reader.onerror = () => reject(new Error("Nem sikerült beolvasni a fájlt."));

      reader.onload = () => {
        const img = new Image();

        img.onerror = () => reject(new Error("A kép nem tölthető be."));

        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;

          const ctx = canvas.getContext("2d");
          if (!ctx) {
            reject(new Error("A canvas kontextus nem elérhető."));
            return;
          }
          ctx.drawImage(img, 0, 0);

          canvas.toBlob(
            (blob) => {
              if (!blob) {
                reject(new Error("A böngésző nem tudott WebP fájlt készíteni."));
                return;
              }

              const outputName = file.name.replace(/\.(png|jpe?g)$/i, "") + ".webp";
              downloadBlob(blob, outputName);

              addLog(`${file.name} → ${outputName} (${formatKb(file.size)} → ${formatKb(blob.size)})`, "ok");
              resolve();
            },
            "image/webp",
            qualityNumber
          );
        };

        img.src = reader.result as string;
      };

      reader.readAsDataURL(file);
    });
  }

  async function convertFiles(files: File[]) {
    const images = files.filter((file) => ["image/png", "image/jpeg"].includes(file.type));

    if (!images.length) {
      addLog("Nincs konvertálható PNG/JPG fájl.", "err");
      return;
    }

    for (const file of images) {
      try {
        await convertToWebp(file, quality / 100);
      } catch (error) {
        addLog(`${file.name} — hiba: ${error instanceof Error ? error.message : "ismeretlen hiba"}`, "err");
      }
    }
  }

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8 shadow-2xl">
      <div
        onClick={() => fileInputRef.current?.click()}
        onDragEnter={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={(e) => { e.preventDefault(); setDragOver(false); }}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          convertFiles([...e.dataTransfer.files]);
        }}
        className={`cursor-pointer rounded-[1.5rem] border-2 border-dashed px-6 py-12 text-center transition ${
          dragOver ? "border-rose-400 bg-rose-500/[0.06] scale-[1.01]" : "border-white/15 bg-white/[0.02]"
        }`}
      >
        <UploadCloud className="mx-auto mb-4 h-10 w-10 text-rose-300" aria-hidden="true" />
        <p className="text-lg font-black text-white mb-1">Képek húzása ide</p>
        <p className="text-sm text-neutral-400">PNG, JPG vagy JPEG fájlok — több kép egyszerre is működik</p>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/png,image/jpeg"
          multiple
          className="hidden"
          onChange={(e) => {
            convertFiles([...(e.target.files ?? [])]);
            e.target.value = "";
          }}
        />
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <label className="flex flex-1 min-w-[240px] items-center gap-3">
          <span className="whitespace-nowrap text-sm font-bold text-white">Minőség: {quality}%</span>
          <input
            type="range"
            min={1}
            max={100}
            value={quality}
            onChange={(e) => setQuality(Number(e.target.value))}
            className="w-full accent-rose-500"
          />
        </label>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-neutral-950 transition hover:bg-neutral-200"
          >
            Képek kiválasztása
          </button>
          <button
            type="button"
            onClick={() => setLog([])}
            className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white/10"
          >
            Lista törlése
          </button>
        </div>
      </div>

      <p className="mt-3 text-sm text-neutral-500">
        Tipp: magasabb minőség = nagyobb fájlméret. Általános webes használatra a 75–85% jó kiindulópont.
      </p>

      {log.length > 0 && (
        <div className="mt-6 max-h-72 overflow-auto rounded-2xl border border-white/10 bg-white/[0.02] p-4">
          {log.map((entry) => (
            <div key={entry.id} className="flex items-center justify-between gap-3 border-b border-white/5 py-2.5 last:border-0">
              <span className="text-sm text-neutral-300">{entry.message}</span>
              <span className={`text-xs font-bold ${entry.status === "ok" ? "text-emerald-400" : "text-rose-400"}`}>
                {entry.status === "ok" ? "kész" : "hiba"}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
