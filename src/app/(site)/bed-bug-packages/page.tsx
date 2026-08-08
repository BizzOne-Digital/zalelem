import type { Metadata } from "next";
import { BedBugPackagesPageContent } from "@/components/packages/BedBugPackagesPageContent";
import { siteConfig } from "@/config/site";
import { getCmsContent } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Bed Bug Treatment Packages | Gold Silver Bronze | Pest Warriors",
  description:
    "Compare Pest Warriors Gold, Silver, and Bronze bed bug packages — thermal heat, combination treatment, and Aprehend® — plus a fact questionnaire for a tailored quote across Alberta and BC.",
  alternates: { canonical: "/bed-bug-packages" },
  openGraph: {
    title: "Bed Bug Treatment Packages | Pest Warriors",
    description:
      "Gold, Silver, and Bronze bed bug packages with transparent pricing and a fact questionnaire.",
    url: `${siteConfig.seo.siteUrl}/bed-bug-packages`,
    siteName: siteConfig.business.name,
    locale: "en_CA",
    type: "website",
  },
};

export default async function BedBugPackagesPage() {
  const cms = await getCmsContent();
  return (
    <BedBugPackagesPageContent
      phone={cms.site.phone}
      phoneHref={cms.site.phoneHref}
    />
  );
}
