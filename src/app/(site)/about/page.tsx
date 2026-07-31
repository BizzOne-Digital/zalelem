import type { Metadata } from "next";
import { DetailPage } from "@/components/content/DetailPage";
import { getCmsContent } from "@/lib/cms";

export async function generateMetadata(): Promise<Metadata> {
  const cms = await getCmsContent();
  const page = cms.pages.find((item) => item.slug === "about");
  return {
    title: page?.title ?? "About Us",
    description: page?.description ?? "",
    alternates: { canonical: "/about" },
  };
}

export default function AboutPage() {
  return <DetailPage slug="about" />;
}
