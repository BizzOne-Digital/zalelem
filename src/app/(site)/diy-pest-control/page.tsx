import type { Metadata } from "next";
import { DiyPageContent } from "@/components/diy/DiyPageContent";
import { getCmsContent, getCmsPage } from "@/lib/cms";

export async function generateMetadata(): Promise<Metadata> {
  const cms = await getCmsContent();
  const page = getCmsPage(cms.pages, "diy-pest-control");
  return {
    title: page?.title ?? "DIY Pest Control Solutions",
    description: page?.description ?? "",
    alternates: { canonical: "/diy-pest-control" },
  };
}

export default async function DiyPestControlPage() {
  const cms = await getCmsContent();
  const page = getCmsPage(cms.pages, "diy-pest-control");
  return (
    <DiyPageContent
      page={page}
      heroTitle={page?.heroTitle}
      heroDescription={page?.heroDescription}
      heroImage={page?.heroImage}
      phone={cms.site.phone}
      phoneHref={cms.site.phoneHref}
    />
  );
}
