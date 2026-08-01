import type { Metadata } from "next";
import { CalgaryPageContent } from "@/components/locations/CalgaryPageContent";
import { getCmsContent } from "@/lib/cms";

export async function generateMetadata(): Promise<Metadata> {
  const cms = await getCmsContent();
  const page = cms.pages.find((item) => item.slug === "calgary");
  return {
    title: page?.title ?? "EcoHeat Pest Control Calgary | Eco-Friendly Pest Control",
    description:
      page?.description ??
      "EcoHeat Pest Control Calgary is your trusted choice for professional, reliable, and eco-friendly pest control in Calgary and surrounding communities.",
    alternates: { canonical: "/calgary" },
  };
}

export default function CalgaryPage() {
  return <CalgaryPageContent />;
}
