import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

/** Primary quote CTA + secondary call CTA, reused across sections. */
export function CtaPair({
  primaryLabel = "Request a Free Quote",
  className = "",
  phoneHref,
  phone,
  tone = "light",
}: {
  primaryLabel?: string;
  className?: string;
  phoneHref?: string;
  phone?: string;
  /** Use "dark" on photo/dark heroes so the secondary outline stays readable. */
  tone?: "light" | "dark";
}) {
  const href = phoneHref || siteConfig.contact.phoneHref;
  const label = phone || siteConfig.contact.phone;
  const secondaryClass =
    tone === "dark"
      ? "inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-white/40 px-7 py-3.5 font-bold text-white transition hover:border-lime-400 hover:text-lime-400 sm:w-auto"
      : "btn-secondary w-full sm:w-auto";

  return (
    <div
      className={`flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center ${className}`}
    >
      <Link href="/contact" className="btn-primary w-full sm:w-auto">
        {primaryLabel}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
      <a href={href} className={secondaryClass}>
        <Phone className="h-4 w-4" aria-hidden="true" />
        Call {label}
      </a>
    </div>
  );
}
