import type { Metadata } from "next";
import { BedBugHeatPageContent } from "@/components/bed-bug-heat/BedBugHeatPageContent";
import { getCmsContent, getCmsPage } from "@/lib/cms";

export async function generateMetadata(): Promise<Metadata> {
  const cms = await getCmsContent();
  const page = getCmsPage(cms.pages, "bed-bug-heat-treatment");
  return {
    title: page?.title ?? "Bed Bug Heat Treatment",
    description: page?.description ?? "",
    alternates: { canonical: "/bed-bug-heat-treatment" },
  };
}

export default async function BedBugHeatTreatmentPage() {
  const cms = await getCmsContent();
  const page = getCmsPage(cms.pages, "bed-bug-heat-treatment");
  return (
    <BedBugHeatPageContent
      page={page}
      heroTitle={page?.heroTitle}
      heroDescription={page?.heroDescription}
      heroImage={page?.heroImage}
      phone={cms.site.phone}
      phoneHref={cms.site.phoneHref}
    />
  );
}
