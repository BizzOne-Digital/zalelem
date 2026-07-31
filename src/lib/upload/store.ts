import { randomUUID } from "crypto";
import { extname } from "path";
import { connectDb } from "@/lib/db";
import { StoredUploadModel } from "@/lib/models/StoredUpload";
import {
  isUploadFolder,
  type UploadFolder,
} from "@/lib/upload/folders";

export { isUploadFolder, type UploadFolder } from "@/lib/upload/folders";
export { UPLOAD_FOLDERS } from "@/lib/upload/folders";

export const MAX_UPLOAD_BYTES = Math.floor(4.5 * 1024 * 1024);

const ALLOWED_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
]);

const EXT_BY_MIME: Record<string, string> = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
  "image/gif": ".gif",
};

export function buildUploadUrl(folder: UploadFolder, filename: string) {
  return `/api/uploads/${folder}/${filename}`;
}

export function parseUploadUrl(url: string): {
  folder: UploadFolder;
  filename: string;
} | null {
  if (!url.startsWith("/api/uploads/")) return null;
  const parts = url.slice("/api/uploads/".length).split("/");
  if (parts.length !== 2) return null;
  const [folder, filename] = parts;
  if (!folder || !filename) return null;
  if (!isUploadFolder(folder)) return null;
  if (filename.includes("..") || filename.includes("/") || filename.includes("\\")) {
    return null;
  }
  return { folder, filename };
}

function sanitizeFilename(originalName: string, mimeType: string) {
  const preferredExt = EXT_BY_MIME[mimeType] || ".bin";
  const rawExt = extname(originalName).toLowerCase();
  const ext =
    rawExt === ".jpg" ||
    rawExt === ".jpeg" ||
    rawExt === ".png" ||
    rawExt === ".webp" ||
    rawExt === ".gif"
      ? rawExt === ".jpeg"
        ? ".jpg"
        : rawExt
      : preferredExt;
  return `${Date.now()}-${randomUUID()}${ext}`;
}

export async function saveFolderUpload(file: File, folder: UploadFolder) {
  if (!ALLOWED_TYPES.has(file.type)) {
    throw new UploadError(
      "Only JPEG, PNG, WebP, and GIF images are allowed.",
      400,
    );
  }
  if (file.size > MAX_UPLOAD_BYTES) {
    throw new UploadError(
      `File size exceeds ${(MAX_UPLOAD_BYTES / (1024 * 1024)).toFixed(1)}MB.`,
      400,
    );
  }

  const db = await connectDb();
  if (!db) {
    throw new UploadError("Database is not configured (MONGODB_URI).", 500);
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = sanitizeFilename(file.name, file.type);

  await StoredUploadModel.create({
    folder,
    filename,
    mimeType: file.type,
    size: buffer.length,
    data: buffer,
  });

  return {
    url: buildUploadUrl(folder, filename),
    filename,
    folder,
    size: buffer.length,
    mimeType: file.type,
  };
}

export async function getFolderUpload(folder: UploadFolder, filename: string) {
  const db = await connectDb();
  if (!db) return null;
  return StoredUploadModel.findOne({ folder, filename }).lean();
}

export async function deleteFolderUploadByUrl(url: string) {
  const parsed = parseUploadUrl(url);
  if (!parsed) return false;
  const db = await connectDb();
  if (!db) return false;
  const result = await StoredUploadModel.deleteOne({
    folder: parsed.folder,
    filename: parsed.filename,
  });
  return result.deletedCount > 0;
}

export class UploadError extends Error {
  status: number;
  constructor(message: string, status = 400) {
    super(message);
    this.name = "UploadError";
    this.status = status;
  }
}
