import type { Metadata } from "next";
import { PricingPageContent } from "@/components/pricing/PricingPageContent";
import { getCmsContent, getCmsPage } from "@/lib/cms";
import { defaultPricingContent } from "@/lib/default-pricing";

export async function generateMetadata(): Promise<Metadata> {
  const cms = await getCmsContent();
  const page = getCmsPage(cms.pages, "pricing");
  return {
    title: page?.title ?? "Pricing",
    description: page?.description ?? "",
    alternates: { canonical: "/pricing" },
  };
}

export default async function PricingPage() {
  const cms = await getCmsContent();
  return (
    <PricingPageContent
      data={cms.pricing ?? defaultPricingContent}
      phone={cms.site.phone}
      phoneHref={cms.site.phoneHref}
    />
  );
}
