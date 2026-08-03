import { Accordion } from "@/components/Accordion";
import { getCmsContent } from "@/lib/cms";

export default async function FaqsPage() {
  const cms = await getCmsContent();
  return (
    <>
      <section className="relative overflow-hidden bg-base-900 pt-[calc(var(--header-offset)+1.5rem)] pb-16 text-white md:pt-[calc(var(--header-offset)+2.5rem)]">
        <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="font-display text-[1.75rem] font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 max-w-2xl text-white/70">
            Answers to common questions about services, treatment, and timelines.
          </p>
        </div>
      </section>
      <section className="bg-band py-14">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <Accordion items={cms.faqs} tone="light" />
        </div>
      </section>
    </>
  );
}
