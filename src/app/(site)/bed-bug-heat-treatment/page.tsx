import type { Metadata } from "next";
import { BedBugHeatPageContent } from "@/components/bed-bug-heat/BedBugHeatPageContent";

export const metadata: Metadata = {
  title:
    "Professional Bed Bug Heat Treatment Services in Calgary & Edmonton | Ecoheat",
  description:
    "Eco-Friendly Thermal Remediation for Absolute Pest Elimination. Chemical-free bed bug heat treatment serving Calgary, Edmonton, and surrounding areas.",
  alternates: { canonical: "/bed-bug-heat-treatment" },
  openGraph: {
    title: "Professional Bed Bug Heat Treatment in Calgary & Edmonton",
    description:
      "Chemical-free thermal remediation that eliminates bed bugs in a single treatment. Serving Calgary, Edmonton, and surrounding communities.",
    url: "/bed-bug-heat-treatment",
    type: "website",
    images: [{ url: "/images/bed-bug-heat-hero.png" }],
  },
};

export default function BedBugHeatTreatmentPage() {
  return <BedBugHeatPageContent />;
}
