import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/config/site";

export function OfferSection() {
  return (
    <section className="bg-base-950 py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-gold-500/25 bg-base-800/70">
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_0%_50%,rgb(244_197_66/0.12),transparent_45%)]"
              aria-hidden="true"
            />
            <div className="relative flex flex-col items-center gap-8 px-6 py-10 lg:flex-row lg:px-12">
              {/* Big 20% badge */}
              <div className="flex h-32 w-32 shrink-0 flex-col items-center justify-center rounded-full border-2 border-gold-500/50 bg-gold-500/10 text-center">
                <span className="font-display text-3xl leading-none font-extrabold text-gold-500">
                  20%
                </span>
                <span className="mt-1 text-xs font-bold tracking-[0.18em] text-white uppercase">
                  Off
                </span>
              </div>

              <div className="flex-1 text-center lg:text-left">
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  New to Pest Warriors?
                </h2>
                <p className="mt-2 text-lg font-semibold text-gold-400">
                  {siteConfig.offer.long}
                </p>
                <p className="mt-2 text-sm text-white/50">
                  {siteConfig.offer.termsLong}
                </p>
              </div>

              <div className="flex shrink-0 flex-wrap items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-bold text-base-950 shadow-gold transition-all hover:bg-gold-400"
                >
                  {siteConfig.offer.ctaLabel}
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/25 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:border-gold-500 hover:text-gold-500"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
