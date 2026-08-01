import type { Metadata } from "next";
import { CommercialPageContent } from "@/components/commercial/CommercialPageContent";

export const metadata: Metadata = {
  title: "Commercial Pest Control Alberta | EcoHeat Pest Control",
  description:
    "EcoHeat Pest Control provides expert commercial pest control and industrial pest management programs across Alberta. We specialize in serving Edmonton, Calgary, Lethbridge, Red Deer, Fort McMurray, and all surrounding areas.",
  alternates: { canonical: "/commercial" },
  openGraph: {
    title: "Commercial Pest Control Alberta | EcoHeat Pest Control",
    description:
      "EcoHeat Pest Control provides expert commercial pest control and industrial pest management programs across Alberta.",
    url: "/commercial",
    type: "website",
    images: [{ url: "/images/commercial-hero.png" }],
  },
};

export default function CommercialPage() {
  return <CommercialPageContent />;
}
