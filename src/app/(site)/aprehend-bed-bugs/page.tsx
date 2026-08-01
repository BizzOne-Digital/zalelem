import type { Metadata } from "next";
import { AprehendPageContent } from "@/components/aprehend/AprehendPageContent";

export const metadata: Metadata = {
  title: "Aprehend® Bed Bug Treatment | Professional Biological Pest Control",
  description:
    "Aprehend® bed bug treatment for Greater Calgary and Edmonton — a modern biological biopesticide using Beauveria bassiana for long-term, non-toxic colony elimination with up to 3 months of protection.",
  alternates: { canonical: "/aprehend-bed-bugs" },
  openGraph: {
    title: "Aprehend® Bed Bug Treatment | Biological Pest Control",
    description:
      "Modern biological bed bug treatment that transfers through the colony. Chemical-free peace of mind with up to 90 days of continuous protection.",
    url: "/aprehend-bed-bugs",
    type: "website",
  },
};

export default function AprehendBedBugsPage() {
  return <AprehendPageContent />;
}
