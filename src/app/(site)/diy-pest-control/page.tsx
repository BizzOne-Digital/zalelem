import type { Metadata } from "next";
import { DiyPageContent } from "@/components/diy/DiyPageContent";
import { getCmsContent } from "@/lib/cms";

export async function generateMetadata(): Promise<Metadata> {
  const cms = await getCmsContent();
  const page = cms.pages.find((item) => item.slug === "diy-pest-control");
  return {
    title:
      page?.title ??
      "Professional-Grade DIY Pest Control Solutions in Calgary and Edmonton",
    description:
      page?.description ??
      "Shop professional-grade, safe pest control products in Calgary and Edmonton. Skip weak, diluted retail sprays.",
    alternates: { canonical: "/diy-pest-control" },
  };
}

export default function DiyPestControlPage() {
  return <DiyPageContent />;
}
