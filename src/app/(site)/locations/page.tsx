import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { provinceMeta } from "@/config/regions";
import { getCmsContent, getLocationLinksByProvince } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Service Locations | Alberta & British Columbia | Pest Warriors",
  description:
    "Find pest control across Alberta and British Columbia — Edmonton, Calgary, Fort McMurray, Red Deer, Lethbridge, Vancouver, Victoria, and surrounding areas.",
  alternates: { canonical: "/locations" },
};

export default async function LocationsPage() {
  const cms = await getCmsContent();
  const byProvince = getLocationLinksByProvince(cms.pages);

  return (
    <>
      <section className="relative overflow-hidden bg-base-900 pt-[calc(var(--header-offset)+1.5rem)] pb-16 text-white md:pt-[calc(var(--header-offset)+2.5rem)]">
        <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { label: "Locations" },
            ]}
            tone="dark"
          />
          <h1 className="font-display mt-6 text-[1.75rem] font-extrabold sm:text-4xl md:text-5xl">
            Choose Your Region
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
            We serve Alberta and British Columbia. Pick your province, then your
            city — surrounding communities available by request.
          </p>
        </div>
      </section>

      <section className="bg-band py-14">
        <div className="mx-auto max-w-7xl space-y-12 px-4 lg:px-8">
          {(["AB", "BC"] as const).map((code) => {
            const meta = provinceMeta[code];
            const cities = byProvince[code];
            return (
              <div key={code}>
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
                      {meta.name}
                    </h2>
                    <p className="mt-2 max-w-2xl text-muted">{meta.description}</p>
                  </div>
                  <Link
                    href={meta.href}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-green-700 hover:text-lime-500"
                  >
                    View {meta.shortLabel} hub
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {cities.map((loc) => (
                    <Link
                      key={loc.href}
                      href={loc.href}
                      className="group rounded-2xl border border-line bg-surface p-6 shadow-card transition hover:border-green-600/50"
                    >
                      <h3 className="flex items-center gap-2 font-display text-xl font-bold text-ink group-hover:text-green-700">
                        <MapPin
                          className="h-5 w-5 text-green-700"
                          aria-hidden="true"
                        />
                        {loc.label}
                      </h3>
                      <p className="mt-2 text-sm text-muted">
                        View {loc.label} pest control services →
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
