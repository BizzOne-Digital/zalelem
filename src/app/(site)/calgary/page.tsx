import type { Metadata } from "next";
import { CalgaryPageContent } from "@/components/locations/CalgaryPageContent";
import { getCmsContent, getCmsPage } from "@/lib/cms";

export async function generateMetadata(): Promise<Metadata> {
  const cms = await getCmsContent();
  const page = getCmsPage(cms.pages, "calgary");
  return {
    title: page?.title ?? "EcoHeat Pest Control Calgary | Eco-Friendly Pest Control",
    description:
      page?.description ??
      "EcoHeat Pest Control Calgary is your trusted choice for professional, reliable, and eco-friendly pest control in Calgary and surrounding communities.",
    alternates: { canonical: "/calgary" },
  };
}

export default async function CalgaryPage() {
  const cms = await getCmsContent();
  const page = getCmsPage(cms.pages, "calgary");
  return (
    <CalgaryPageContent
      heroTitle={page?.heroTitle}
      heroDescription={page?.heroDescription}
      phone={cms.site.phone}
      phoneHref={cms.site.phoneHref}
    />
  );
}
