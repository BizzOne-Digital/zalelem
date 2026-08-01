import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/config/site";

export function OfferSection() {
  return (
    <section className="bg-base-900">
      <Reveal>
        <div className="mx-auto flex max-w-7xl flex-col items-stretch overflow-hidden lg:flex-row">
          <div className="flex shrink-0 items-center justify-center bg-gold-500 px-10 py-10 lg:w-48 lg:px-6">
            <p className="font-display text-center text-4xl leading-none font-extrabold tracking-tight text-base-950 sm:text-5xl">
              20%
              <span className="mt-1 block text-2xl tracking-wide uppercase">
                Off
              </span>
            </p>
          </div>

          <div className="flex flex-1 flex-col items-center justify-between gap-6 px-6 py-8 text-center lg:flex-row lg:gap-10 lg:px-10 lg:text-left">
            <p className="max-w-xl text-lg font-semibold text-white sm:text-xl">
              New to Pest Warriors? Receive{" "}
              <span className="text-lime-400">20% off</span> your first pest
              control service.
            </p>

            <div className="flex w-full shrink-0 flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center lg:justify-start">
              <Link href="/contact" className="btn-primary w-full !py-3 text-sm sm:w-auto">
                Claim 20% Offer
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={siteConfig.contact.phoneHref}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-lime-500/70 px-5 py-3 text-sm font-bold text-white transition hover:border-lime-400 hover:text-lime-400 sm:w-auto"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {siteConfig.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
