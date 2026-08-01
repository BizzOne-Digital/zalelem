"use client";

import { useId, useRef, useState } from "react";
import Image from "next/image";
import type { UploadFolder } from "@/lib/upload/folders";
import { resolveCmsImage } from "@/lib/cms-image";

const MAX_CLIENT_BYTES = Math.floor(4.5 * 1024 * 1024);
const MAX_WIDTH = 2000;
const QUALITY = 0.8;

type Props = {
  value: string;
  onChange: (url: string) => void;
  folder: UploadFolder;
  label?: string;
};

async function compressImage(file: File): Promise<File> {
  if (!file.type.startsWith("image/") || file.type === "image/gif") {
    return file;
  }

  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, MAX_WIDTH / Math.max(bitmap.width, 1));
  const width = Math.max(1, Math.round(bitmap.width * scale));
  const height = Math.max(1, Math.round(bitmap.height * scale));

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return file;
  ctx.drawImage(bitmap, 0, 0, width, height);
  bitmap.close();

  const preferWebp = file.type === "image/webp" || file.type === "image/png";
  const mime = preferWebp ? "image/webp" : "image/jpeg";
  const blob = await new Promise<Blob | null>((resolve) =>
    canvas.toBlob(resolve, mime, QUALITY),
  );
  if (!blob) return file;

  const ext = mime === "image/webp" ? ".webp" : ".jpg";
  const base = file.name.replace(/\.[^.]+$/, "") || "upload";
  return new File([blob], `${base}${ext}`, { type: mime });
}

export function ImageUploadField({
  value,
  onChange,
  folder,
  label = "Image",
}: Props) {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const previewSrc = value ? resolveCmsImage(value) : "";

  const showError = (message: string) => {
    setError(message);
    window.setTimeout(() => setError(""), 5000);
  };

  const uploadFile = async (file: File) => {
    setUploading(true);
    setError("");
    try {
      let prepared = file;
      try {
        prepared = await compressImage(file);
      } catch {
        prepared = file;
      }

      if (prepared.size > MAX_CLIENT_BYTES) {
        throw new Error(
          `Image is still over ${(MAX_CLIENT_BYTES / (1024 * 1024)).toFixed(1)}MB after compression. Try a smaller photo.`,
        );
      }

      const formData = new FormData();
      formData.append("file", prepared);
      formData.append("folder", folder);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = (await res.json()) as { url?: string; error?: string };
      if (!res.ok || !data.url) {
        throw new Error(data.error || "Image upload failed.");
      }
      onChange(data.url);
    } catch (err) {
      showError(err instanceof Error ? err.message : "Image upload failed.");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-2">
      <p className="text-sm font-semibold text-white/80">{label}</p>
      <div className="flex flex-col gap-3 sm:flex-row">
        {previewSrc ? (
          <div className="relative h-28 w-40 shrink-0 overflow-hidden rounded-lg border border-white/15 bg-base-800">
            <Image
              src={previewSrc}
              alt=""
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        ) : (
          <div className="flex h-28 w-40 shrink-0 items-center justify-center rounded-lg border border-dashed border-white/20 text-xs text-white/40">
            No image
          </div>
        )}
        <div className="min-w-0 flex-1 space-y-2">
          <input
            className="w-full rounded-lg border border-white/20 bg-base-800 px-3 py-2 text-sm"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="/api/uploads/... or /images/..."
          />
          <div className="flex flex-wrap gap-2">
            <label
              htmlFor={inputId}
              className={`inline-flex cursor-pointer items-center rounded-lg bg-white/10 px-3 py-2 text-xs font-bold text-white hover:bg-white/15 ${
                uploading ? "pointer-events-none opacity-60" : ""
              }`}
            >
              {uploading
                ? "Uploading..."
                : value
                  ? "Replace Image"
                  : "Upload Image"}
            </label>
            <input
              id={inputId}
              ref={inputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif"
              className="hidden"
              disabled={uploading}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) void uploadFile(file);
              }}
            />
            {value ? (
              <button
                type="button"
                disabled={uploading}
                onClick={() => onChange("")}
                className="rounded-lg border border-red-500/40 px-3 py-2 text-xs font-semibold text-red-300 hover:bg-red-500/10 disabled:opacity-50"
              >
                Remove
              </button>
            ) : null}
          </div>
          {error ? (
            <p
              role="status"
              className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-xs text-red-200"
            >
              {error}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
