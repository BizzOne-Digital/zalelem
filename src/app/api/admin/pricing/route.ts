import { NextResponse } from "next/server";
import { getCmsContent, updateCmsContent } from "@/lib/cms";
import type { PricingContent } from "@/types/cms";

export async function GET() {
  const content = await getCmsContent();
  return NextResponse.json(content.pricing);
}

export async function PUT(request: Request) {
  const payload = (await request.json()) as PricingContent;
  if (!payload || typeof payload !== "object") {
    return NextResponse.json({ error: "Pricing payload must be an object." }, { status: 400 });
  }
  const updated = await updateCmsContent({ pricing: payload });
  return NextResponse.json(updated?.pricing ?? payload);
}
