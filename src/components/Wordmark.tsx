import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { resolveCmsImage } from "@/lib/cms-image";
import type { SiteSettings } from "@/types/cms";

/**
 * Temporary typographic wordmark. When the client supplies a final logo,
 * set `siteConfig.business.logoSrc` and this component renders it instead —
 * no other code changes required.
 */
export function Wordmark({
  variant = "light",
  className = "",
  site,
}: {
  /** "dark" = navy text on light bg, "light" = white text on dark bg */
  variant?: "dark" | "light";
  className?: string;
  site?: SiteSettings;
}) {
  const logoSrc = site?.logoSrc || siteConfig.business.logoSrc;
  const businessName = site?.businessName || siteConfig.business.name;
  const city = site?.city || siteConfig.location.city;

  if (logoSrc) {
    return (
      <Image
        src={resolveCmsImage(logoSrc)}
        alt={businessName}
        width={180}
        height={48}
        className={`h-auto max-w-full ${className}`}
        priority
      />
    );
  }

  const text = variant === "light" ? "text-white" : "text-base-800";
  const sub = variant === "light" ? "text-lime-400" : "text-lime-500";

  return (
    <span className={`inline-flex max-w-full items-center gap-2.5 ${className}`}>
      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-base-800 text-lime-400 ring-2 ring-gold-500/80">
        <ShieldCheck className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className={`min-w-0 font-display leading-none ${text}`}>
        <span className="block truncate text-[0.92rem] font-extrabold tracking-wide sm:text-[1.05rem]">
          PEST&nbsp;WARRIORS
        </span>
        <span
          className={`block truncate text-[0.52rem] font-semibold uppercase tracking-[0.14em] sm:text-[0.58rem] sm:tracking-[0.2em] ${sub}`}
        >
          Pest Control &middot; {city}
        </span>
      </span>
    </span>
  );
}
