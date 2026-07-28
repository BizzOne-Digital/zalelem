import Image from "next/image";
import { notFound } from "next/navigation";
import { getCmsContent } from "@/lib/cms";

export async function DetailPage({ slug }: { slug: string }) {
  const cms = await getCmsContent();
  const page = cms.pages.find((item) => item.slug === slug);
  if (!page) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-base-950 pt-32 pb-16 text-white md:pt-40">
        <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="font-display max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            {page.heroTitle}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">{page.heroDescription}</p>
        </div>
      </section>
      <section className="bg-base-900 py-14">
        <div className="mx-auto max-w-7xl space-y-10 px-4 lg:px-8">
          {page.sections.map((section) => (
            <article key={section.id} className="grid gap-6 rounded-3xl border border-white/10 bg-base-800/70 p-6 md:grid-cols-2 md:p-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-white">{section.title}</h2>
                <p className="mt-4 whitespace-pre-line text-white/75">{section.content}</p>
                {section.bullets.length > 0 ? (
                  <ul className="mt-4 space-y-2 text-white/75">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>• {bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <div className="relative min-h-56 overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={section.image || page.heroImage}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
