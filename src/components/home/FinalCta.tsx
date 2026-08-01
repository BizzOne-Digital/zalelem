import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function FinalCta() {
  return (
    <section className="border-t border-line bg-band py-14 lg:py-16">
      <Reveal className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 text-center sm:flex-row sm:text-left lg:px-8">
        <div>
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            Ready for a <span className="text-green-700">Pest-Free</span> Space?
          </h2>
          <p className="mt-2 text-muted">
            Contact Pest Warriors today and let us protect what matters most.
          </p>
        </div>
        <Link href="/contact" className="btn-primary shrink-0">
          Request Your Free Quote
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </Reveal>
    </section>
  );
}
