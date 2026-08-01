import type { Metadata } from "next";
import {
  BadgePercent,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Siren,
} from "lucide-react";
import { FacebookIcon } from "@/components/FacebookIcon";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { getCmsContent } from "@/lib/cms";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.seo.contact.title,
  description: siteConfig.seo.contact.description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: siteConfig.seo.contact.title,
    description: siteConfig.seo.contact.description,
    url: `${siteConfig.seo.siteUrl}/contact`,
    siteName: siteConfig.business.name,
    locale: "en_CA",
    type: "website",
    images: [{ url: siteConfig.images.hero.src }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.contact.title,
    description: siteConfig.seo.contact.description,
  },
};

export default async function ContactPage() {
  const cms = await getCmsContent();
  const site = cms.site;
  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-base-900 pt-32 pb-14 text-white md:pt-40 lg:pb-16">
        <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
        <div
          className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-green-600/15 blur-[100px]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h1 className="font-display mx-auto max-w-3xl text-[1.75rem] leading-[1.1] font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Request Pest Control Service in{" "}
            <span className="text-green-400">{site.city}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Tell us what you are experiencing and provide a few details about
            your property. Our team will review your request and contact you
            about the next steps.
          </p>
        </div>
      </section>

      {/* Form + info panel */}
      <section className="bg-band py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1.5fr_1fr] lg:gap-14 lg:px-8">
          <Reveal>
            <div className="rounded-2xl border border-line bg-surface p-6 shadow-card sm:p-10">
              <h2 className="font-display text-2xl font-extrabold text-ink">
                Get Your Free Quote
              </h2>
              <p className="mt-2 mb-8 text-muted">
                The more detail you can share, the more accurate our initial
                assessment will be.
              </p>
              <ContactForm />
            </div>
          </Reveal>

          {/* Info panel */}
          <Reveal delay={0.1}>
            <div className="space-y-5 lg:sticky lg:top-32">
              <div className="rounded-2xl border border-line bg-surface p-7 shadow-card sm:p-8">
                <h2 className="font-display text-lg font-bold text-green-700">
                  Prefer to Talk?
                </h2>
                <ul className="mt-5 space-y-4">
                  <li>
                    <a
                      href={site.phoneHref}
                      className="group flex items-center gap-3.5"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-600/10 text-green-700 transition-colors group-hover:bg-green-600 group-hover:text-white">
                        <Phone className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-xs text-muted">
                          Call or text
                        </span>
                        <span className="font-bold text-ink">
                          {site.phone}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={site.emailHref}
                      className="group flex items-center gap-3.5"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-600/10 text-green-700 transition-colors group-hover:bg-green-600 group-hover:text-white">
                        <Mail className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-xs text-muted">Email</span>
                        <span className="font-bold break-all text-ink">
                          {site.email}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={site.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3.5"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-600/10 text-green-700 transition-colors group-hover:bg-green-600 group-hover:text-white">
                        <FacebookIcon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-xs text-muted">Social</span>
                        <span className="font-bold text-ink">
                          Find us on Facebook
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-line bg-surface p-7 shadow-card">
                <h2 className="font-display flex items-center gap-2 text-base font-bold text-ink">
                  <MapPin className="h-4 w-4 text-green-700" aria-hidden="true" />
                  Service Area
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {site.serviceAreas.join(", ")}. {site.serviceAreasNote}
                </p>
                <h2 className="font-display mt-6 flex items-center gap-2 text-base font-bold text-ink">
                  <Clock3 className="h-4 w-4 text-green-700" aria-hidden="true" />
                  What to Expect
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {site.responseMessage}
                </p>
                <h2 className="font-display mt-6 flex items-center gap-2 text-base font-bold text-ink">
                  <Siren className="h-4 w-4 text-green-700" aria-hidden="true" />
                  Urgent Situations
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  Dealing with an active wasp nest near an entrance or a
                  rapidly spreading infestation? Call us and mention it is
                  urgent — we prioritize time-sensitive requests for the
                  earliest available appointment.
                </p>
              </div>

              <div className="rounded-2xl border border-green-600/25 bg-band p-7">
                <p className="flex items-start gap-3">
                  <BadgePercent
                    className="mt-0.5 h-6 w-6 shrink-0 text-green-700"
                    aria-hidden="true"
                  />
                  <span>
                    <span className="font-display block font-extrabold text-ink">
                      {siteConfig.offer.headline}
                    </span>
                    <span className="mt-1 block text-sm text-muted">
                      Mention this offer when you contact us.{" "}
                      {siteConfig.offer.terms}
                    </span>
                  </span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
