import { NextResponse } from "next/server";
import { getCmsContent } from "@/lib/cms";

export async function GET() {
  const content = await getCmsContent();
  return NextResponse.json(content);
}
