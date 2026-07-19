import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-gold-500/20 bg-base-950 py-14 lg:py-16">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgb(244_197_66/0.1),transparent_60%)]"
        aria-hidden="true"
      />
      <Reveal className="relative mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 text-center sm:flex-row sm:text-left lg:px-8">
        <div>
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            Ready for a <span className="text-gold-500">Pest-Free</span> Space?
          </h2>
          <p className="mt-2 text-muted">
            Contact Pest Warriors today and let us protect what matters most.
          </p>
        </div>
        <Link
          href="/contact"
          className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-base font-bold text-base-950 shadow-gold transition-all hover:bg-gold-400"
        >
          Get Your Free Quote
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </Reveal>
    </section>
  );
}
