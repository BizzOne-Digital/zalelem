import type { Metadata } from "next";
import Link from "next/link";
import { DetailPage } from "@/components/content/DetailPage";
import { getCmsContent } from "@/lib/cms";

export async function generateMetadata(): Promise<Metadata> {
  const cms = await getCmsContent();
  const page = cms.pages.find((item) => item.slug === "diy-pest-control");
  return {
    title: page?.title ?? "DIY Pest Control",
    description: page?.description ?? "",
    alternates: { canonical: "/diy-pest-control" },
  };
}

export default function DiyPestControlPage() {
  return (
    <>
      <DetailPage slug="diy-pest-control" />
      <section className="bg-band pb-16 pt-8">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-4 lg:px-8">
          <Link href="/contact" className="btn-primary">
            Ask About DIY Products
          </Link>
          <Link href="/contact" className="btn-secondary">
            Book On-Site Inspection
          </Link>
        </div>
      </section>
    </>
  );
}
