import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgePercent,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { FacebookIcon } from "@/components/FacebookIcon";
import { Wordmark } from "@/components/Wordmark";
import { siteConfig } from "@/config/site";
import { primaryServices } from "@/config/services";

const companyLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/#about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-base-950 text-white/75">
      {/* Decorative background */}
      <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -top-32 left-1/4 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-green-600/8 blur-[110px]"
        aria-hidden="true"
      />
      <ShieldCheck
        className="absolute -right-16 -bottom-16 h-96 w-96 text-white/[0.025]"
        strokeWidth={0.75}
        aria-hidden="true"
      />

      {/* CTA band */}
      <div className="relative border-t border-gold-500/25">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,rgb(244_197_66/0.09),transparent_55%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-4 py-14 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-xl">
            <p className="text-xs font-bold tracking-[0.22em] text-gold-500 uppercase">
              {siteConfig.offer.headline}
            </p>
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Need Help With a Pest Problem?
            </h2>
            <p className="mt-3 text-white/60">
              {siteConfig.offer.long}{" "}
              <span className="text-white/40">{siteConfig.offer.terms}</span>
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-4 text-base font-bold text-base-950 shadow-gold transition-all hover:bg-gold-400"
            >
              Request a Quote
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            <a
              href={siteConfig.contact.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 px-7 py-4 text-base font-bold text-white transition-colors hover:border-gold-500 hover:text-gold-500"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative border-t border-white/8">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-12 px-4 py-16 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.85fr_1fr_1.15fr] lg:px-8">
          {/* Brand column */}
          <div>
            <Wordmark variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              Family-owned and operated pest control serving{" "}
              {siteConfig.location.city} and surrounding communities.
              Inspection-led, responsible treatment plans for residential,
              commercial, and multi-unit properties.
            </p>
            {/* Trust chips */}
            <ul className="mt-6 flex flex-wrap gap-2">
              {["Licensed & Insured", "Family-Owned", "Eco-Conscious"].map(
                (chip) => (
                  <li
                    key={chip}
                    className="inline-flex items-center gap-1.5 rounded-full border border-green-500/25 bg-green-600/10 px-3 py-1.5 text-xs font-semibold text-green-400"
                  >
                    <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                    {chip}
                  </li>
                ),
              )}
            </ul>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={siteConfig.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all hover:border-gold-500/50 hover:bg-gold-500 hover:text-base-950"
                aria-label="Pest Warriors on Facebook"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.contact.emailHref}
                className="group inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all hover:border-gold-500/50 hover:bg-gold-500 hover:text-base-950"
                aria-label={`Email ${siteConfig.business.name}`}
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={siteConfig.contact.phoneHref}
                className="group inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all hover:border-gold-500/50 hover:bg-gold-500 hover:text-base-950"
                aria-label={`Call ${siteConfig.contact.phone}`}
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Company links */}
          <nav aria-label="Footer — pages">
            <h3 className="font-display flex items-center gap-2 text-sm font-bold tracking-[0.14em] text-white uppercase">
              Company
              <span
                className="h-px w-8 bg-gold-500"
                aria-hidden="true"
              />
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 transition-colors hover:text-gold-500"
                  >
                    <ChevronRight
                      className="h-3.5 w-3.5 text-green-500 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Service links */}
          <nav aria-label="Footer — services">
            <h3 className="font-display flex items-center gap-2 text-sm font-bold tracking-[0.14em] text-white uppercase">
              Our Services
              <span
                className="h-px w-8 bg-gold-500"
                aria-hidden="true"
              />
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {primaryServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="group inline-flex items-center gap-1.5 transition-colors hover:text-gold-500"
                  >
                    <ChevronRight
                      className="h-3.5 w-3.5 text-green-500 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="group mt-1 inline-flex items-center gap-1.5 font-bold text-gold-500 transition-colors hover:text-gold-400"
                >
                  View All Services
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact column */}
          <div>
            <h3 className="font-display flex items-center gap-2 text-sm font-bold tracking-[0.14em] text-white uppercase">
              Get In Touch
              <span
                className="h-px w-8 bg-gold-500"
                aria-hidden="true"
              />
            </h3>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="group flex items-center gap-3.5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-600/15 text-green-400 transition-colors group-hover:bg-green-600 group-hover:text-white">
                    <Phone className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs text-white/45">
                      Call or text
                    </span>
                    <span className="text-sm font-bold text-white transition-colors group-hover:text-gold-500">
                      {siteConfig.contact.phone}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.emailHref}
                  className="group flex items-center gap-3.5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-600/15 text-green-400 transition-colors group-hover:bg-green-600 group-hover:text-white">
                    <Mail className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs text-white/45">Email</span>
                    <span className="text-sm font-bold break-all text-white transition-colors group-hover:text-gold-500">
                      {siteConfig.contact.email}
                    </span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-600/15 text-green-400">
                  <MapPin className="h-4.5 w-4.5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs text-white/45">
                    Service area
                  </span>
                  <span className="mt-1.5 flex flex-wrap gap-1.5">
                    {siteConfig.location.serviceAreas.map((area) => (
                      <span
                        key={area}
                        className="rounded-md bg-white/6 px-2 py-1 text-xs font-semibold text-white/80"
                      >
                        {area}
                      </span>
                    ))}
                  </span>
                </span>
              </li>
            </ul>
            <p className="mt-6 flex items-start gap-2.5 rounded-xl border border-gold-500/30 bg-gold-500/8 px-4 py-3.5">
              <BadgePercent
                className="mt-0.5 h-5 w-5 shrink-0 text-gold-500"
                aria-hidden="true"
              />
              <span className="text-sm font-semibold text-gold-400">
                {siteConfig.offer.headline}
                <span className="block text-xs font-normal text-white/45">
                  {siteConfig.offer.terms}
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-white/40 sm:flex-row lg:px-8">
          <p>
            &copy; {year} {siteConfig.business.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="transition-colors hover:text-gold-500"
            >
              Privacy
            </Link>
            <span className="h-3 w-px bg-white/15" aria-hidden="true" />
            <Link
              href="/terms"
              className="transition-colors hover:text-gold-500"
            >
              Terms
            </Link>
            <span className="h-3 w-px bg-white/15" aria-hidden="true" />
            <p className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-green-500" aria-hidden="true" />
              {siteConfig.location.city}, {siteConfig.location.province},{" "}
              {siteConfig.location.country}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
