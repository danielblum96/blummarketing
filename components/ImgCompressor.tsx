"use client";

import { useRef, useState } from "react";
import { UploadCloud } from "lucide-react";

type LogEntry = {
  id: number;
  message: string;
  status: "ok" | "err";
};

type OutputFormat = "keep" | "webp" | "jpeg" | "png";

let logCounter = 0;

const FORMAT_MIME: Record<Exclude<OutputFormat, "keep">, string> = {
  webp: "image/webp",
  jpeg: "image/jpeg",
  png: "image/png",
};

const FORMAT_EXT: Record<Exclude<OutputFormat, "keep">, string> = {
  webp: "webp",
  jpeg: "jpg",
  png: "png",
};

export default function ImgCompressor() {
  const [dragOver, setDragOver] = useState(false);
  const [maxWidth, setMaxWidth] = useState(1920);
  const [maxHeight, setMaxHeight] = useState(1920);
  const [quality, setQuality] = useState(80);
  const [format, setFormat] = useState<OutputFormat>("keep");
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
    return bytes >= 1024 * 1024 ? `${(bytes / (1024 * 1024)).toFixed(1)} MB` : `${Math.round(bytes / 1024)} KB`;
  }

  function compressImage(file: File) {
    return new Promise<void>((resolve, reject) => {
      const reader = new FileReader();

      reader.onerror = () => reject(new Error("Could not read the file."));

      reader.onload = () => {
        const img = new Image();

        img.onerror = () => reject(new Error("Could not load the image."));

        img.onload = () => {
          const scale = Math.min(maxWidth / img.naturalWidth, maxHeight / img.naturalHeight, 1);
          const targetWidth = Math.round(img.naturalWidth * scale);
          const targetHeight = Math.round(img.naturalHeight * scale);

          const canvas = document.createElement("canvas");
          canvas.width = targetWidth;
          canvas.height = targetHeight;

          const ctx = canvas.getContext("2d");
          if (!ctx) {
            reject(new Error("Canvas context is not available."));
            return;
          }
          ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

          const outputFormat = format === "keep"
            ? (["image/png"].includes(file.type) ? "png" : "jpeg")
            : format;
          const mime = FORMAT_MIME[outputFormat];
          const ext = FORMAT_EXT[outputFormat];

          canvas.toBlob(
            (blob) => {
              if (!blob) {
                reject(new Error("Your browser could not create the compressed image."));
                return;
              }

              const outputName = file.name.replace(/\.[^.]+$/, "") + `-compressed.${ext}`;
              downloadBlob(blob, outputName);

              addLog(
                `${file.name} → ${outputName} (${img.naturalWidth}×${img.naturalHeight} → ${targetWidth}×${targetHeight}, ${formatKb(file.size)} → ${formatKb(blob.size)})`,
                "ok"
              );
              resolve();
            },
            mime,
            mime === "image/png" ? undefined : quality / 100
          );
        };

        img.src = reader.result as string;
      };

      reader.readAsDataURL(file);
    });
  }

  async function compressFiles(files: File[]) {
    const images = files.filter((file) => ["image/png", "image/jpeg", "image/webp"].includes(file.type));

    if (!images.length) {
      addLog("No convertible PNG/JPG/WebP files found.", "err");
      return;
    }

    for (const file of images) {
      try {
        await compressImage(file);
      } catch (error) {
        addLog(`${file.name} — error: ${error instanceof Error ? error.message : "unknown error"}`, "err");
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
          compressFiles([...e.dataTransfer.files]);
        }}
        className={`cursor-pointer rounded-[1.5rem] border-2 border-dashed px-6 py-12 text-center transition ${
          dragOver ? "border-rose-400 bg-rose-500/[0.06] scale-[1.01]" : "border-white/15 bg-white/[0.02]"
        }`}
      >
        <UploadCloud className="mx-auto mb-4 h-10 w-10 text-rose-300" aria-hidden="true" />
        <p className="text-lg font-black text-white mb-1">Drop images here</p>
        <p className="text-sm text-neutral-400">PNG, JPG or WebP files — compress multiple images at once</p>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/png,image/jpeg,image/webp"
          multiple
          className="hidden"
          onChange={(e) => {
            compressFiles([...(e.target.files ?? [])]);
            e.target.value = "";
          }}
        />
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="flex items-center gap-3">
          <span className="whitespace-nowrap text-sm font-bold text-white">Max width (px)</span>
          <input
            type="number"
            min={50}
            max={10000}
            value={maxWidth}
            onChange={(e) => setMaxWidth(Number(e.target.value) || 1)}
            className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-3 py-2 text-sm text-white"
          />
        </label>
        <label className="flex items-center gap-3">
          <span className="whitespace-nowrap text-sm font-bold text-white">Max height (px)</span>
          <input
            type="number"
            min={50}
            max={10000}
            value={maxHeight}
            onChange={(e) => setMaxHeight(Number(e.target.value) || 1)}
            className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-3 py-2 text-sm text-white"
          />
        </label>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
        <label className="flex flex-1 min-w-[240px] items-center gap-3">
          <span className="whitespace-nowrap text-sm font-bold text-white">Quality: {quality}%</span>
          <input
            type="range"
            min={1}
            max={100}
            value={quality}
            onChange={(e) => setQuality(Number(e.target.value))}
            className="w-full accent-rose-500"
          />
        </label>
        <label className="flex items-center gap-2">
          <span className="whitespace-nowrap text-sm font-bold text-white">Output format</span>
          <select
            value={format}
            onChange={(e) => setFormat(e.target.value as OutputFormat)}
            className="rounded-xl border border-white/15 bg-white/[0.04] px-3 py-2 text-sm text-white"
          >
            <option value="keep">Keep original</option>
            <option value="webp">WebP</option>
            <option value="jpeg">JPEG</option>
            <option value="png">PNG</option>
          </select>
        </label>
      </div>

      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-neutral-950 transition hover:bg-neutral-200"
        >
          Choose images
        </button>
        <button
          type="button"
          onClick={() => setLog([])}
          className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white/10"
        >
          Clear list
        </button>
      </div>

      <p className="mt-3 text-sm text-neutral-500">
        Tip: a photo straight out of a phone camera is often 3000–5000px wide. For most websites, 1920px max width is more than enough and cuts the file size dramatically.
      </p>

      {log.length > 0 && (
        <div className="mt-6 max-h-72 overflow-auto rounded-2xl border border-white/10 bg-white/[0.02] p-4">
          {log.map((entry) => (
            <div key={entry.id} className="flex items-center justify-between gap-3 border-b border-white/5 py-2.5 last:border-0">
              <span className="text-sm text-neutral-300">{entry.message}</span>
              <span className={`text-xs font-bold ${entry.status === "ok" ? "text-emerald-400" : "text-rose-400"}`}>
                {entry.status === "ok" ? "done" : "error"}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
