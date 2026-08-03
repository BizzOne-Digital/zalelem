import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about/AboutPageContent";
import { getCmsContent, getCmsPage } from "@/lib/cms";

export async function generateMetadata(): Promise<Metadata> {
  const cms = await getCmsContent();
  const page = getCmsPage(cms.pages, "about");
  return {
    title: page?.title ?? "About | Pest Warriors",
    description: page?.description ?? "",
    alternates: { canonical: "/about" },
  };
}

export default async function AboutPage() {
  const cms = await getCmsContent();
  const page = getCmsPage(cms.pages, "about");
  return (
    <AboutPageContent
      page={page}
      heroTitle={page?.heroTitle}
      heroDescription={page?.heroDescription}
      heroImage={page?.heroImage}
      phone={cms.site.phone}
      phoneHref={cms.site.phoneHref}
    />
  );
}
