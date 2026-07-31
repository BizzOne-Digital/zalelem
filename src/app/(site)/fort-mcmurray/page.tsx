import type { Metadata } from "next";
import { LocationPage } from "@/components/content/LocationPage";
import { getCmsContent } from "@/lib/cms";

export async function generateMetadata(): Promise<Metadata> {
  const cms = await getCmsContent();
  const page = cms.pages.find((item) => item.slug === "fort-mcmurray");
  return {
    title: page?.title ?? "Pest Control Fort McMurray",
    description: page?.description ?? "",
    alternates: { canonical: "/fort-mcmurray" },
  };
}

export default function FortMcMurrayPage() {
  return (
    <LocationPage
      slug="fort-mcmurray"
      cityLabel="Fort McMurray"
      contactArea="fort-mcmurray"
    />
  );
}
