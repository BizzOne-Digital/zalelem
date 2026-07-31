import type { Metadata } from "next";
import { LocationPage } from "@/components/content/LocationPage";
import { getCmsContent } from "@/lib/cms";

export async function generateMetadata(): Promise<Metadata> {
  const cms = await getCmsContent();
  const page = cms.pages.find((item) => item.slug === "lethbridge");
  return {
    title: page?.title ?? "Pest Control Lethbridge",
    description: page?.description ?? "",
    alternates: { canonical: "/lethbridge" },
  };
}

export default function LethbridgePage() {
  return (
    <LocationPage slug="lethbridge" cityLabel="Lethbridge" contactArea="lethbridge" />
  );
}
