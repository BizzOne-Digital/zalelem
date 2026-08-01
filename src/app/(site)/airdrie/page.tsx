import type { Metadata } from "next";
import { LocationPage } from "@/components/content/LocationPage";
import { getCmsContent } from "@/lib/cms";

export async function generateMetadata(): Promise<Metadata> {
  const cms = await getCmsContent();
  const page = cms.pages.find((item) => item.slug === "airdrie");
  return {
    title: page?.title ?? "Pest Control Airdrie",
    description: page?.description ?? "",
    alternates: { canonical: "/airdrie" },
  };
}

export default function AirdriePage() {
  return <LocationPage slug="airdrie" cityLabel="Airdrie" contactArea="airdrie" />;
}
