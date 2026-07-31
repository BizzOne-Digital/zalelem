import Link from "next/link";
import { ArrowRight, Mail, Phone, ShieldCheck } from "lucide-react";
import { FacebookIcon } from "@/components/FacebookIcon";
import { Wordmark } from "@/components/Wordmark";
import { locationLinks, primaryNav } from "@/config/navigation";
import { primaryServices } from "@/config/services";
import { siteConfig } from "@/config/site";
import type { EditableService, SiteSettings } from "@/types/cms";

const companyLinks = [
  ...primaryNav
    .filter((item) => !("children" in item && item.children))
    .map((item) => ({ href: item.href, label: item.label })),
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
];

export function Footer({
  site,
  services,
}: {
  site?: SiteSettings;
  services?: EditableService[];
}) {
  const year = new Date().getFullYear();
  const serviceList =
    services && services.length > 0
      ? services
      : primaryServices.map((item) => ({
          ...item,
          heroTitle: item.name,
          heroDescription: item.cardDescription,
          heroImage: "",
          sections: [],
        }));
  const runtime = {
    businessName: site?.businessName || siteConfig.business.name,
    legalName: site?.legalName || siteConfig.business.legalName,
    city: site?.city || siteConfig.location.city,
    province: site?.province || siteConfig.location.province,
    country: site?.country || siteConfig.location.country,
    phone: site?.phone || siteConfig.contact.phone,
    phoneHref: site?.phoneHref || siteConfig.contact.phoneHref,
    email: site?.email || siteConfig.contact.email,
    emailHref: site?.emailHref || siteConfig.contact.emailHref,
    facebook: site?.facebook || siteConfig.contact.facebook,
  };

  return (
    <footer className="border-t border-line bg-band text-muted">
      <div className="border-b border-line bg-surface">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Need Help With a Pest Problem?
            </h2>
            <p className="mt-3 text-muted">
              Contact {runtime.businessName} for a free consultation and custom quote.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/contact" className="btn-primary">
              Request a Free Quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a href={runtime.phoneHref} className="btn-secondary">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {runtime.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.85fr_1fr_1.15fr] lg:px-8">
        <div>
          <Wordmark variant="dark" site={site} />
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            Family-owned and operated pest control serving {runtime.city} and
            surrounding communities.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={runtime.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-surface text-ink transition hover:border-green-600 hover:text-green-700"
              aria-label={`${runtime.businessName} on Facebook`}
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a
              href={runtime.emailHref}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-surface text-ink transition hover:border-green-600 hover:text-green-700"
              aria-label={`Email ${runtime.businessName}`}
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={runtime.phoneHref}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-surface text-ink transition hover:border-green-600 hover:text-green-700"
              aria-label={`Call ${runtime.phone}`}
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <nav aria-label="Footer — pages">
          <h3 className="font-display text-sm font-bold tracking-[0.14em] text-ink uppercase">
            Pages
          </h3>
          <ul className="mt-4 space-y-1 text-sm">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-10 items-center py-1 transition-colors hover:text-green-700"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer — locations">
          <h3 className="font-display text-sm font-bold tracking-[0.14em] text-ink uppercase">
            Locations
          </h3>
          <ul className="mt-4 space-y-1 text-sm">
            {locationLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-flex min-h-10 items-center py-1 transition-colors hover:text-green-700"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-sm font-bold tracking-[0.14em] text-ink uppercase">
            Our Services
          </h3>
          <ul className="mt-4 space-y-1 text-sm">
            {serviceList.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="inline-flex min-h-10 items-center py-1 transition-colors hover:text-green-700"
                >
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/services"
                className="inline-flex min-h-10 items-center py-1 font-bold text-green-700 hover:text-green-600"
              >
                View All Services
              </Link>
            </li>
          </ul>
          <div className="mt-6 space-y-3">
            <a href={runtime.phoneHref} className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-600/10 text-green-700">
                <Phone className="h-4 w-4" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs">Call or text</span>
                <span className="text-sm font-bold text-ink">{runtime.phone}</span>
              </span>
            </a>
            <a href={runtime.emailHref} className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-600/10 text-green-700">
                <Mail className="h-4 w-4" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs">Email</span>
                <span className="text-sm font-bold break-all text-ink">{runtime.email}</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs sm:flex-row lg:px-8">
          <p>
            &copy; {year} {runtime.legalName}. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-green-600" aria-hidden="true" />
            {runtime.city}, {runtime.province}, {runtime.country}
          </p>
        </div>
      </div>
    </footer>
  );
}
