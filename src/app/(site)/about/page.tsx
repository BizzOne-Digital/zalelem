import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about/AboutPageContent";

export const metadata: Metadata = {
  title: "Eco Pest Control Calgary | Bed Bug Heat Treatment | Ecoheat",
  description:
    "Calgary’s trusted eco-friendly exterminator since 2010, providing professional chemical-free bed bug heat treatments and traditional pest control for homes and businesses.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Eco Pest Control Calgary | Bed Bug Heat Treatment | Ecoheat",
    description:
      "Calgary’s trusted eco-friendly exterminator since 2010, providing professional chemical-free bed bug heat treatments and traditional pest control for homes and businesses.",
    url: "/about",
    type: "website",
    images: [{ url: "/images/about-hero.png" }],
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
