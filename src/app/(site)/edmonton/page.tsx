import type { Metadata } from "next";
import { LocationPage } from "@/components/content/LocationPage";
import { edmontonCommunities } from "@/config/locations";
import { getCmsContent } from "@/lib/cms";

export async function generateMetadata(): Promise<Metadata> {
  const cms = await getCmsContent();
  const page = cms.pages.find((item) => item.slug === "edmonton");
  return {
    title: page?.title ?? "Pest Control Edmonton",
    description: page?.description ?? "",
    alternates: { canonical: "/edmonton" },
  };
}

export default function EdmontonPage() {
  return (
    <LocationPage
      slug="edmonton"
      cityLabel="Edmonton"
      contactArea="edmonton"
      communities={edmontonCommunities}
    />
  );
}
