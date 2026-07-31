import type { Metadata } from "next";
import Link from "next/link";
import { DetailPage } from "@/components/content/DetailPage";
import { getCmsContent } from "@/lib/cms";

export async function generateMetadata(): Promise<Metadata> {
  const cms = await getCmsContent();
  const page = cms.pages.find((item) => item.slug === "bed-bug-heat-treatment");
  return {
    title: page?.title ?? "Bed Bug Heat Treatment",
    description: page?.description ?? "",
    alternates: { canonical: "/bed-bug-heat-treatment" },
  };
}

export default function BedBugHeatTreatmentPage() {
  return (
    <>
      <DetailPage slug="bed-bug-heat-treatment" />
      <section className="bg-band pb-16 pt-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Link href="/contact" className="btn-primary">
            Request a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
