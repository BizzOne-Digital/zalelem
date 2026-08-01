import type { Metadata } from "next";
import { HowHeatWorksPageContent } from "@/components/how-heat-works/HowHeatWorksPageContent";

export const metadata: Metadata = {
  title: "How Heat Treatment Works | Bed Bug Heat | Calgary & Edmonton",
  description:
    "Professional bed bug heat treatment across Calgary and Edmonton. Fire-safe thermal process kills all life stages including eggs in a single day, backed by a 1-year warranty.",
  alternates: { canonical: "/how-heat-treatment-works" },
  openGraph: {
    title: "How Heat Treatment Works | Professional Bed Bug Heat Treatment",
    description:
      "Advanced thermal process kills all bed bug life stages, including eggs, in a single day. Serving Calgary, Edmonton, and surrounding areas.",
    url: "/how-heat-treatment-works",
    type: "website",
    images: [{ url: "/images/how-heat-works-hero.png" }],
  },
};

export default function HowHeatTreatmentWorksPage() {
  return <HowHeatWorksPageContent />;
}
