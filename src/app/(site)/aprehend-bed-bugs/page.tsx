import type { Metadata } from "next";
import Link from "next/link";
import { DetailPage } from "@/components/content/DetailPage";
import { getCmsContent } from "@/lib/cms";

export async function generateMetadata(): Promise<Metadata> {
  const cms = await getCmsContent();
  const page = cms.pages.find((item) => item.slug === "aprehend-bed-bugs");
  return {
    title: page?.title ?? "Aprehend® Bed Bug Treatment",
    description: page?.description ?? "",
    alternates: { canonical: "/aprehend-bed-bugs" },
  };
}

export default function AprehendBedBugsPage() {
  return (
    <>
      <DetailPage slug="aprehend-bed-bugs" />
      <section className="bg-band pb-16 pt-8">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-4 lg:px-8">
          <Link href="/contact" className="btn-primary">
            Request a Free Quote
          </Link>
          <Link href="/bed-bug-heat-treatment" className="btn-secondary">
            Compare Heat Treatment
          </Link>
        </div>
      </section>
    </>
  );
}
