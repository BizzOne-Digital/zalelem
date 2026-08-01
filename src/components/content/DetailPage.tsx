import Image from "next/image";
import { notFound } from "next/navigation";
import { CtaPair } from "@/components/CtaPair";
import { getCmsContent } from "@/lib/cms";
import { resolveCmsImage } from "@/lib/cms-image";

export async function DetailPage({ slug }: { slug: string }) {
  const cms = await getCmsContent();
  const page = cms.pages.find((item) => item.slug === slug);
  if (!page) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-base-900 pt-28 pb-16 text-white md:pt-36 md:pb-20 xl:pt-44">
        {page.heroImage ? (
          <Image
            src={resolveCmsImage(page.heroImage)}
            alt=""
            fill
            priority
            className="object-cover object-center"
          />
        ) : null}
        <div
          className="absolute inset-0 bg-gradient-to-r from-base-950/92 via-base-900/85 to-base-900/50"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="font-display max-w-3xl text-[1.75rem] font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            {page.heroTitle}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            {page.heroDescription}
          </p>
          <div className="mt-8">
            <CtaPair tone="dark" />
          </div>
        </div>
      </section>

      <section className="bg-surface py-14 lg:py-20">
        <div className="mx-auto max-w-7xl space-y-16 px-4 lg:px-8">
          {page.sections.map((section, index) => {
            const imageFirst = index % 2 === 0;
            return (
              <article
                key={section.id}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
              >
                <div
                  className={`relative min-h-64 overflow-hidden rounded-2xl border border-line shadow-card lg:min-h-80 ${
                    imageFirst ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={resolveCmsImage(section.image || page.heroImage)}
                    alt={section.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className={imageFirst ? "lg:order-2" : "lg:order-1"}>
                  <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
                    {section.title}
                  </h2>
                  <p className="mt-4 whitespace-pre-line leading-relaxed text-muted">
                    {section.content}
                  </p>
                  {section.bullets.length > 0 ? (
                    <ul className="mt-5 space-y-2.5 text-muted">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
