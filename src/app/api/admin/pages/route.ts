import { NextResponse } from "next/server";
import { getCmsContent, updateCmsContent } from "@/lib/cms";

export async function GET() {
  const content = await getCmsContent();
  return NextResponse.json(content.pages);
}

export async function PUT(request: Request) {
  const payload = await request.json();
  if (!Array.isArray(payload)) {
    return NextResponse.json({ error: "Pages payload must be an array." }, { status: 400 });
  }
  const updated = await updateCmsContent({ pages: payload });
  return NextResponse.json(updated?.pages ?? payload);
}
