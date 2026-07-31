import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

/** Primary quote CTA + secondary call CTA, reused across sections. */
export function CtaPair({
  primaryLabel = "Request a Free Quote",
  className = "",
  phoneHref,
  phone,
}: {
  primaryLabel?: string;
  className?: string;
  phoneHref?: string;
  phone?: string;
}) {
  const href = phoneHref || siteConfig.contact.phoneHref;
  const label = phone || siteConfig.contact.phone;

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <Link href="/contact" className="btn-primary">
        {primaryLabel}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
      <a href={href} className="btn-secondary">
        <Phone className="h-4 w-4" aria-hidden="true" />
        Call {label}
      </a>
    </div>
  );
}
