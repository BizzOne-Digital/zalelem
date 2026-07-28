import { NextResponse } from "next/server";
import { getCmsContent, updateCmsContent } from "@/lib/cms";

export async function GET() {
  const content = await getCmsContent();
  return NextResponse.json(content.site);
}

export async function PUT(request: Request) {
  const payload = await request.json();
  const current = await getCmsContent();
  const next = { ...current.site, ...payload };
  const updated = await updateCmsContent({ site: next });
  return NextResponse.json(updated?.site ?? next);
}
