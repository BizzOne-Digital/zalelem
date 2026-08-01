import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin-auth";
import {
  isUploadFolder,
  saveFolderUpload,
  UploadError,
} from "@/lib/upload/store";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const form = await request.formData();
    const file = form.get("file");
    const folderRaw = String(form.get("folder") || "misc");

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "Missing file." }, { status: 400 });
    }
    if (!isUploadFolder(folderRaw)) {
      return NextResponse.json(
        { error: "Invalid folder. Use pages, products, gallery, or misc." },
        { status: 400 },
      );
    }

    const saved = await saveFolderUpload(file, folderRaw);
    return NextResponse.json({
      success: true,
      url: saved.url,
      filename: saved.filename,
      folder: saved.folder,
      size: saved.size,
    });
  } catch (error) {
    if (error instanceof UploadError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }
    console.error("Upload failed:", error);
    return NextResponse.json({ error: "Upload failed." }, { status: 500 });
  }
}
