import type { Metadata } from "next";
import { HowHeatWorksPageContent } from "@/components/how-heat-works/HowHeatWorksPageContent";
import { getCmsContent, getCmsPage } from "@/lib/cms";

export async function generateMetadata(): Promise<Metadata> {
  const cms = await getCmsContent();
  const page = getCmsPage(cms.pages, "how-heat-treatment-works");
  return {
    title: page?.title ?? "How Heat Treatment Works",
    description: page?.description ?? "",
    alternates: { canonical: "/how-heat-treatment-works" },
  };
}

export default async function HowHeatTreatmentWorksPage() {
  const cms = await getCmsContent();
  const page = getCmsPage(cms.pages, "how-heat-treatment-works");
  return (
    <HowHeatWorksPageContent
      page={page}
      heroTitle={page?.heroTitle}
      heroDescription={page?.heroDescription}
      heroImage={page?.heroImage}
      phone={cms.site.phone}
      phoneHref={cms.site.phoneHref}
    />
  );
}
