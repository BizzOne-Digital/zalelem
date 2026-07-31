import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getCmsContent } from "@/lib/cms";
import { resolveCmsImage } from "@/lib/cms-image";

export async function generateMetadata(): Promise<Metadata> {
  const cms = await getCmsContent();
  const page = cms.pages.find((item) => item.slug === "pricing");
  return {
    title: page?.title ?? "Pricing",
    description: page?.description ?? "",
    alternates: { canonical: "/pricing" },
  };
}

const comparisonRows = [
  {
    treatment: "Chemical",
    price: "$150 – $300",
    speed: "Slow (weeks)",
    bestFor: "Small budgets & early, localized bugs",
  },
  {
    treatment: "Thermal Heat",
    price: "$850 – $1,500",
    speed: "Fast (1 day)",
    bestFor: "Whole house & severe infestations",
  },
  {
    treatment: "Combination (IPM)",
    price: "$350 – $850",
    speed: "Varied",
    bestFor: "Maximum power using multiple methods",
  },
  {
    treatment: "Aprehend® Bio",
    price: "$450 – $850",
    speed: "Long-lasting",
    bestFor: "Prevention & final shield after heat",
  },
];

export default async function PricingPage() {
  const cms = await getCmsContent();
  const page = cms.pages.find((item) => item.slug === "pricing");
  if (!page) {
    return (
      <section className="bg-surface px-4 pt-32 pb-16 text-ink">
        <p>Pricing content is not available yet.</p>
      </section>
    );
  }

  const beforeTable = page.sections.filter((s) =>
    ["intro", "thermal", "aprehend", "combination"].includes(s.id),
  );
  const afterTable = page.sections.filter(
    (s) => !["intro", "thermal", "aprehend", "combination"].includes(s.id),
  );

  return (
    <>
      <section className="relative overflow-hidden bg-base-900 pt-32 pb-16 text-white md:pt-40">
        <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="font-display max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            {page.heroTitle}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/70">
            {page.heroDescription}
          </p>
        </div>
      </section>

      <section className="bg-surface py-14">
        <div className="mx-auto max-w-7xl space-y-10 px-4 lg:px-8">
          {beforeTable.map((section) => (
            <article
              key={section.id}
              className="grid gap-6 rounded-2xl border border-line bg-surface p-6 shadow-card md:grid-cols-2 md:p-8"
            >
              <div>
                <h2 className="font-display text-2xl font-bold text-ink">
                  {section.title}
                </h2>
                <p className="mt-4 whitespace-pre-line text-muted">
                  {section.content}
                </p>
                {section.bullets.length > 0 ? (
                  <ul className="mt-4 space-y-2 text-muted">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <div className="relative min-h-56 overflow-hidden rounded-2xl border border-line">
                <Image
                  src={resolveCmsImage(section.image || page.heroImage)}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
              </div>
            </article>
          ))}

          <article className="overflow-hidden rounded-2xl border border-line bg-surface shadow-card">
            <div className="border-b border-line px-6 py-5">
              <h2 className="font-display text-2xl font-bold text-ink">
                Quick Comparison Table
              </h2>
              <p className="mt-2 text-muted">
                A simple, direct comparison of treatments to help you choose
                the best option.
              </p>
            </div>

            {/* Mobile: card stack */}
            <div className="space-y-4 p-6 md:hidden">
              {comparisonRows.map((row) => (
                <div
                  key={row.treatment}
                  className="rounded-xl border border-line bg-band p-4"
                >
                  <h3 className="font-display font-bold text-ink">
                    {row.treatment}
                  </h3>
                  <dl className="mt-3 space-y-2 text-sm">
                    <div className="flex justify-between gap-4">
                      <dt className="text-muted">Price Range</dt>
                      <dd className="font-semibold text-ink">{row.price}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-muted">Speed</dt>
                      <dd className="font-semibold text-ink">{row.speed}</dd>
                    </div>
                    <div>
                      <dt className="text-muted">Best For</dt>
                      <dd className="mt-1 text-ink">{row.bestFor}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>

            {/* Desktop: table */}
            <div className="hidden overflow-x-auto md:block">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-band text-green-700">
                  <tr>
                    <th className="px-6 py-4 font-bold">Treatment</th>
                    <th className="px-6 py-4 font-bold">Price Range</th>
                    <th className="px-6 py-4 font-bold">Speed</th>
                    <th className="px-6 py-4 font-bold">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line text-muted">
                  {comparisonRows.map((row) => (
                    <tr key={row.treatment} className="hover:bg-band/60">
                      <td className="px-6 py-4 font-semibold text-ink">
                        {row.treatment}
                      </td>
                      <td className="px-6 py-4">{row.price}</td>
                      <td className="px-6 py-4">{row.speed}</td>
                      <td className="px-6 py-4">{row.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          {afterTable.map((section) => (
            <article
              key={section.id}
              className="grid gap-6 rounded-2xl border border-line bg-surface p-6 shadow-card md:grid-cols-2 md:p-8"
            >
              <div>
                <h2 className="font-display text-2xl font-bold text-ink">
                  {section.title}
                </h2>
                <p className="mt-4 whitespace-pre-line text-muted">
                  {section.content}
                </p>
                {section.bullets.length > 0 ? (
                  <ul className="mt-4 space-y-2 text-muted">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <div className="relative min-h-56 overflow-hidden rounded-2xl border border-line">
                <Image
                  src={resolveCmsImage(section.image || page.heroImage)}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-band pb-16 pt-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Link href="/contact" className="btn-primary">
            Get a Custom Quote
          </Link>
        </div>
      </section>
    </>
  );
}
