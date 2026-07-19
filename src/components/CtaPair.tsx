import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

/** Primary quote CTA + secondary call CTA, reused across sections. */
export function CtaPair({
  primaryLabel = "Get a Free Quote",
  className = "",
}: {
  primaryLabel?: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <Link
        href="/contact"
        className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-base font-bold text-base-950 shadow-gold transition-all hover:bg-gold-400"
      >
        {primaryLabel}
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      </Link>
      <a
        href={siteConfig.contact.phoneHref}
        className="inline-flex items-center gap-2 rounded-full border-2 border-white/25 px-7 py-3.5 text-base font-bold text-white transition-colors hover:border-gold-500 hover:text-gold-500"
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        Call {siteConfig.contact.phone}
      </a>
    </div>
  );
}
