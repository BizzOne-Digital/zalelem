import type { Metadata } from "next";
import { CommercialPageContent } from "@/components/commercial/CommercialPageContent";
import { getCmsContent, getCmsPage } from "@/lib/cms";

export async function generateMetadata(): Promise<Metadata> {
  const cms = await getCmsContent();
  const page = getCmsPage(cms.pages, "commercial");
  return {
    title: page?.title ?? "Commercial Pest Control Alberta",
    description: page?.description ?? "",
    alternates: { canonical: "/commercial" },
  };
}

export default async function CommercialPage() {
  const cms = await getCmsContent();
  const page = getCmsPage(cms.pages, "commercial");
  return (
    <CommercialPageContent
      page={page}
      heroTitle={page?.heroTitle}
      heroDescription={page?.heroDescription}
      heroImage={page?.heroImage}
      phone={cms.site.phone}
      phoneHref={cms.site.phoneHref}
    />
  );
}
