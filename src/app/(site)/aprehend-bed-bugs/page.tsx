import type { Metadata } from "next";
import { AprehendPageContent } from "@/components/aprehend/AprehendPageContent";
import { getCmsContent, getCmsPage } from "@/lib/cms";

export async function generateMetadata(): Promise<Metadata> {
  const cms = await getCmsContent();
  const page = getCmsPage(cms.pages, "aprehend-bed-bugs");
  return {
    title: page?.title ?? "Aprehend® Bed Bug Treatment",
    description: page?.description ?? "",
    alternates: { canonical: "/aprehend-bed-bugs" },
  };
}

export default async function AprehendBedBugsPage() {
  const cms = await getCmsContent();
  const page = getCmsPage(cms.pages, "aprehend-bed-bugs");
  return (
    <AprehendPageContent
      page={page}
      heroTitle={page?.heroTitle}
      heroDescription={page?.heroDescription}
      heroImage={page?.heroImage}
      phone={cms.site.phone}
      phoneHref={cms.site.phoneHref}
    />
  );
}
