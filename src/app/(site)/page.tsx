import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { AboutSection } from "@/components/home/AboutSection";
import { PropertyTypes } from "@/components/home/PropertyTypes";
import { WhyChoose } from "@/components/home/WhyChoose";
import { HowItWorks } from "@/components/home/HowItWorks";
import { OfferSection } from "@/components/home/OfferSection";
import { ServiceArea } from "@/components/home/ServiceArea";
import { FaqSchema, LocalBusinessSchema } from "@/components/StructuredData";
import { StickyQuoteButton } from "@/components/StickyQuoteButton";
import { getCmsContent } from "@/lib/cms";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.seo.home.title,
  description: siteConfig.seo.home.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: siteConfig.seo.home.title,
    description: siteConfig.seo.home.description,
    url: siteConfig.seo.siteUrl,
    siteName: siteConfig.business.name,
    locale: "en_CA",
    type: "website",
    images: [{ url: siteConfig.images.hero.src }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.home.title,
    description: siteConfig.seo.home.description,
    images: [siteConfig.images.hero.src],
  },
};

export default async function HomePage() {
  const cms = await getCmsContent();

  return (
    <>
      <LocalBusinessSchema />
      <FaqSchema />
      <div className="pb-24 md:pb-0">
        <Hero />
        <ServicesPreview services={cms.services} city={cms.site.city} />
        <ServiceArea />
        <AboutSection />
        <PropertyTypes />
        <WhyChoose />
        <HowItWorks />
        <OfferSection />
        <StickyQuoteButton />
      </div>
    </>
  );
}
