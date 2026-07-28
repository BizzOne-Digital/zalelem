import { Accordion } from "@/components/Accordion";
import { getCmsContent } from "@/lib/cms";

export default async function FaqsPage() {
  const cms = await getCmsContent();
  return (
    <>
      <section className="relative overflow-hidden bg-base-950 pt-32 pb-16 text-white md:pt-40">
        <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 max-w-2xl text-white/70">
            Answers to common questions about services, treatment, and timelines.
          </p>
        </div>
      </section>
      <section className="bg-base-900 py-14">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <Accordion items={cms.faqs} />
        </div>
      </section>
    </>
  );
}
