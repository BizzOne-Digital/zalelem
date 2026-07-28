import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Accordion } from "@/components/Accordion";
import { getCmsContent } from "@/lib/cms";

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cms = await getCmsContent();
  const service = cms.services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-base-950 pt-32 pb-16 text-white md:pt-40">
        <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">
            {service.heroTitle}
          </h1>
          <p className="mt-4 max-w-2xl text-white/70">{service.heroDescription}</p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-gold-500 px-6 py-3 font-bold text-base-950"
          >
            Request Quote
          </Link>
        </div>
      </section>
      <section className="bg-base-900 py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[1.2fr_1fr] lg:px-8">
          <div className="space-y-6">
            <article className="rounded-2xl border border-white/10 bg-base-800/70 p-6">
              <h2 className="font-display text-2xl font-bold text-white">Who This Is For</h2>
              <p className="mt-3 text-white/75">{service.whoFor}</p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-base-800/70 p-6">
              <h2 className="font-display text-2xl font-bold text-white">Warning Signs</h2>
              <ul className="mt-3 space-y-2 text-white/75">
                {service.warningSigns.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-2xl border border-white/10 bg-base-800/70 p-6">
              <h2 className="font-display text-2xl font-bold text-white">Our Approach</h2>
              <ul className="mt-3 space-y-2 text-white/75">
                {service.approach.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
            {service.sections.map((section) => (
              <article key={section.id} className="rounded-2xl border border-white/10 bg-base-800/70 p-6">
                <h2 className="font-display text-2xl font-bold text-white">{section.title}</h2>
                <p className="mt-3 whitespace-pre-line text-white/75">{section.content}</p>
                {section.bullets.length > 0 ? (
                  <ul className="mt-3 space-y-2 text-white/75">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>• {bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
            <Accordion items={service.faq} />
          </div>
          <div className="relative min-h-80 overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={service.heroImage}
              alt={service.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
