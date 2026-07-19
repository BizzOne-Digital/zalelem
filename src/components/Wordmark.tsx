import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";

/**
 * Temporary typographic wordmark. When the client supplies a final logo,
 * set `siteConfig.business.logoSrc` and this component renders it instead —
 * no other code changes required.
 */
export function Wordmark({
  variant = "light",
  className = "",
}: {
  /** "dark" = navy text on light bg, "light" = white text on dark bg */
  variant?: "dark" | "light";
  className?: string;
}) {
  if (siteConfig.business.logoSrc) {
    return (
      <Image
        src={siteConfig.business.logoSrc}
        alt={siteConfig.business.name}
        width={180}
        height={48}
        className={className}
        priority
      />
    );
  }

  const text = variant === "light" ? "text-white" : "text-base-950";

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-600 text-white shadow-sm">
        <ShieldCheck className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className={`font-display leading-none ${text}`}>
        <span className="block text-[1.05rem] font-extrabold tracking-wide">
          PEST&nbsp;WARRIORS
        </span>
        <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-gold-500">
          Pest Control &middot; {siteConfig.location.city}
        </span>
      </span>
    </span>
  );
}
