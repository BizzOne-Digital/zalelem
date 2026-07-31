import { NextResponse } from "next/server";
import {
  getFolderUpload,
  isUploadFolder,
} from "@/lib/upload/store";

export const runtime = "nodejs";

type Params = { params: Promise<{ folder: string; filename: string }> };

function isUnsafePathSegment(value: string) {
  return (
    !value ||
    value.includes("..") ||
    value.includes("/") ||
    value.includes("\\") ||
    value.includes("%2e") ||
    value.includes("%2f") ||
    value.includes("%5c")
  );
}

export async function GET(_request: Request, { params }: Params) {
  const { folder, filename } = await params;

  if (isUnsafePathSegment(folder) || isUnsafePathSegment(filename)) {
    return NextResponse.json({ error: "Invalid path." }, { status: 400 });
  }
  if (!isUploadFolder(folder)) {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }

  const upload = await getFolderUpload(folder, filename);
  if (!upload?.data) {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }

  const raw = upload.data as unknown;
  let bytes: Buffer;
  if (Buffer.isBuffer(raw)) {
    bytes = raw;
  } else if (raw instanceof Uint8Array) {
    bytes = Buffer.from(raw);
  } else if (
    raw &&
    typeof raw === "object" &&
    "buffer" in raw &&
    (raw as { buffer: unknown }).buffer instanceof ArrayBuffer
  ) {
    bytes = Buffer.from(new Uint8Array((raw as { buffer: ArrayBuffer }).buffer));
  } else if (raw instanceof ArrayBuffer) {
    bytes = Buffer.from(new Uint8Array(raw));
  } else {
    bytes = Buffer.from(String(raw));
  }

  return new NextResponse(new Uint8Array(bytes), {
    status: 200,
    headers: {
      "Content-Type": upload.mimeType || "application/octet-stream",
      "Content-Length": String(bytes.length),
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
