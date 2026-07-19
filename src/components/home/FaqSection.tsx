import { Accordion } from "@/components/Accordion";
import { Reveal } from "@/components/Reveal";
import { homeFaqs } from "@/config/services";

export function FaqSection() {
  return (
    <section id="faq" className="bg-base-950 py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-gold-500 uppercase">
            Common Questions
          </p>
          <h2 className="heading-rule font-display mx-auto mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <Accordion items={homeFaqs} tone="dark" />
        </Reveal>
      </div>
    </section>
  );
}
