import type { Metadata } from "next";
import { DetailPage } from "@/components/content/DetailPage";
import { getCmsContent } from "@/lib/cms";

export async function generateMetadata(): Promise<Metadata> {
  const cms = await getCmsContent();
  const page = cms.pages.find((item) => item.slug === "commercial");
  return {
    title: page?.title ?? "Commercial Pest Control",
    description: page?.description ?? "",
    alternates: { canonical: "/commercial" },
  };
}

export default function CommercialPage() {
  return <DetailPage slug="commercial" />;
}
