import type { Metadata } from "next";
import { LocationPage } from "@/components/content/LocationPage";
import { getCmsContent } from "@/lib/cms";

export async function generateMetadata(): Promise<Metadata> {
  const cms = await getCmsContent();
  const page = cms.pages.find((item) => item.slug === "calgary");
  return {
    title: page?.title ?? "Pest Control Calgary",
    description: page?.description ?? "",
    alternates: { canonical: "/calgary" },
  };
}

const treatmentStrategies = [
  {
    type: "100% Chemical-Free EcoHeat",
    how: "High-temperature thermal remediation kills all life stages in a 1-day process.",
    advantages: "No toxic residues; immediate re-entry; 100% eco-friendly.",
    bestFor: "Families, pets, and immediate total eradication.",
  },
  {
    type: "Aprehend® Biological",
    how: "Non-toxic, natural fungal spore application that pests carry back to the nest.",
    advantages: "Safe for sensitive individuals; no need to leave home during application.",
    bestFor: "Elderly, pregnant individuals, and newborns.",
  },
  {
    type: "Advanced Hybrid Method",
    how: "Traditional pesticide boosted with industrial steaming and specialized HEPA vacuuming.",
    advantages: "Double-action physical and chemical removal; destroys hidden eggs.",
    bestFor: "Severe infestations requiring multi-layered elimination.",
  },
  {
    type: "Traditional Pesticide",
    how: "Targeted application of professional-grade, government-registered liquid residuals.",
    advantages: "Budget-friendly; long-lasting protective barrier against perimeter pests.",
    bestFor: "Standard pest control and preventative maintenance.",
  },
];

export default function CalgaryPage() {
  return (
    <LocationPage slug="calgary" cityLabel="Calgary" contactArea="calgary">
      <section className="border-y border-line bg-band py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-display text-3xl font-extrabold text-ink">
            Calgary Treatment Strategies
          </h2>
          <p className="mt-3 max-w-3xl text-muted">
            Compare our EcoHeat, biological, hybrid, and traditional options.
          </p>

          <div className="mt-8 space-y-4 md:hidden">
            {treatmentStrategies.map((row) => (
              <article
                key={row.type}
                className="rounded-2xl border border-line bg-surface p-5 shadow-card"
              >
                <h3 className="font-display text-lg font-bold text-ink">{row.type}</h3>
                <dl className="mt-3 space-y-2 text-sm text-muted">
                  <div>
                    <dt className="font-semibold text-ink">How it works</dt>
                    <dd>{row.how}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink">Advantages</dt>
                    <dd>{row.advantages}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink">Best for</dt>
                    <dd>{row.bestFor}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>

          <div className="mt-8 hidden overflow-x-auto md:block">
            <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-line bg-surface">
                  <th className="px-4 py-3 font-bold text-ink">Treatment</th>
                  <th className="px-4 py-3 font-bold text-ink">How it works</th>
                  <th className="px-4 py-3 font-bold text-ink">Advantages</th>
                  <th className="px-4 py-3 font-bold text-ink">Best for</th>
                </tr>
              </thead>
              <tbody>
                {treatmentStrategies.map((row) => (
                  <tr key={row.type} className="border-b border-line">
                    <td className="px-4 py-3 font-semibold text-ink">{row.type}</td>
                    <td className="px-4 py-3 text-muted">{row.how}</td>
                    <td className="px-4 py-3 text-muted">{row.advantages}</td>
                    <td className="px-4 py-3 text-muted">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </LocationPage>
  );
}
