import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/config/site";

export function OfferSection() {
  return (
    <section className="bg-surface py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-green-600/20 bg-band">
            <div className="relative flex flex-col items-center gap-8 px-6 py-10 lg:flex-row lg:px-12">
              <div className="flex h-32 w-32 shrink-0 flex-col items-center justify-center rounded-full border-2 border-green-600/40 bg-green-600/10 text-center">
                <span className="font-display text-3xl leading-none font-extrabold text-green-700">
                  20%
                </span>
                <span className="mt-1 text-xs font-bold tracking-[0.18em] text-ink uppercase">
                  Off
                </span>
              </div>

              <div className="flex-1 text-center lg:text-left">
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                  New to Pest Warriors?
                </h2>
                <p className="mt-2 text-lg font-semibold text-green-700">
                  {siteConfig.offer.long}
                </p>
                <p className="mt-2 text-sm text-muted">{siteConfig.offer.termsLong}</p>
              </div>

              <div className="flex shrink-0 flex-wrap items-center justify-center gap-3">
                <Link href="/contact" className="btn-primary !py-3 text-sm">
                  {siteConfig.offer.ctaLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a href={siteConfig.contact.phoneHref} className="btn-secondary !py-3 text-sm">
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
