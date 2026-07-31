import type { Metadata } from "next";
import { LocationPage } from "@/components/content/LocationPage";
import { getCmsContent } from "@/lib/cms";

export async function generateMetadata(): Promise<Metadata> {
  const cms = await getCmsContent();
  const page = cms.pages.find((item) => item.slug === "red-deer");
  return {
    title: page?.title ?? "Pest Control Red Deer",
    description: page?.description ?? "",
    alternates: { canonical: "/red-deer" },
  };
}

export default function RedDeerPage() {
  return <LocationPage slug="red-deer" cityLabel="Red Deer" contactArea="red-deer" />;
}
