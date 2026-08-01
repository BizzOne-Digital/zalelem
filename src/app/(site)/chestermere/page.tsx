import type { Metadata } from "next";
import { LocationPage } from "@/components/content/LocationPage";
import { getCmsContent } from "@/lib/cms";

export async function generateMetadata(): Promise<Metadata> {
  const cms = await getCmsContent();
  const page = cms.pages.find((item) => item.slug === "chestermere");
  return {
    title: page?.title ?? "Pest Control Chestermere",
    description: page?.description ?? "",
    alternates: { canonical: "/chestermere" },
  };
}

export default function ChestermerePage() {
  return (
    <LocationPage slug="chestermere" cityLabel="Chestermere" contactArea="chestermere" />
  );
}
