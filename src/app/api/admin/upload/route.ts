import { randomUUID } from "crypto";
import { mkdir, writeFile } from "fs/promises";
import { extname, join } from "path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);
const MAX_BYTES = 8 * 1024 * 1024;

export async function POST(request: Request) {
  const form = await request.formData();
  const file = form.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Missing file." }, { status: 400 });
  }
  if (!ALLOWED_TYPES.has(file.type)) {
    return NextResponse.json(
      { error: "Only JPEG, PNG and WebP are allowed." },
      { status: 400 },
    );
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: "File size exceeds 8MB." }, { status: 400 });
  }

  const uploadsDir = join(process.cwd(), "public", "uploads");
  await mkdir(uploadsDir, { recursive: true });
  const ext = extname(file.name) || ".webp";
  const fileName = `${Date.now()}-${randomUUID()}${ext}`;
  const fullPath = join(uploadsDir, fileName);
  await writeFile(fullPath, Buffer.from(await file.arrayBuffer()));

  return NextResponse.json({ url: `/uploads/${fileName}` });
}
