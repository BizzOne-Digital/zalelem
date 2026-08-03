import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Bed,
  Bug,
  ChevronRight,
  Clock,
  MapPin,
  Phone,
  Rat,
  Shield,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { FacebookIcon } from "@/components/FacebookIcon";
import { siteConfig } from "@/config/site";
import type { EditableService, SiteSettings } from "@/types/cms";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Pest Services" },
  { href: "/commercial", label: "Commercial" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

const footerServices = [
  {
    href: "/services/mice-rodent-control",
    label: "Rodent Control",
    icon: Rat,
  },
  {
    href: "/services/bed-bug-control",
    label: "Bed Bug Treatment",
    icon: Bed,
  },
  {
    href: "/services/carpenter-ant-control",
    label: "Ant Control",
    icon: Bug,
  },
  {
    href: "/services/wasp-nest-removal",
    label: "Wasp Removal",
    icon: Zap,
  },
  {
    href: "/services/cockroach-control",
    label: "Cockroach Control",
    icon: Bug,
  },
  {
    href: "/services",
    label: "Preventive Pest Care",
    icon: Shield,
  },
];

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function GoogleIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 10.2v3.6h5.1c-.2 1.2-1.5 3.6-5.1 3.6-3.1 0-5.6-2.5-5.6-5.6S8.9 6.2 12 6.2c1.7 0 2.9.7 3.6 1.4l2.4-2.4C16.7 3.9 14.6 3 12 3 7 3 3 7 3 12s4 9 9 9c5.2 0 8.6-3.6 8.6-8.8 0-.6-.1-1-.1-1.4H12z" />
    </svg>
  );
}

function YouTubeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2.5" y="6" width="19" height="12" rx="3" stroke="currentColor" strokeWidth="1.75" />
      <path d="M10 9.5v5l5-2.5-5-2.5z" fill="currentColor" />
    </svg>
  );
}

function CalgarySkyline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 160"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M0 160V110h28v-36h18v-22h14v22h12V70h22v40h16V88h20v-48h10v-14h8v14h12v48h18V52h26v58h14V78h10v-30h8V30h6v18h10v48h20V68h16v-24h22v24h14v42h18V90h12v-20h16v20h10v30h24V70h18v-40h8V18h10v12h8v40h14v50h20V84h16v-36h22v36h14v36h28V96h18v-28h12v-16h8v16h10v28h14v44h40V100h16v-44h10V40h8v16h12v44h18v40h36V88h20v-32h14v32h12v42h24V96h16v-20h20v20h14v44h30V110h40v50H0z"
      />
    </svg>
  );
}

export function Footer({
  site,
}: {
  site?: SiteSettings;
  /** Accepted for layout compatibility; footer uses fixed screenshot service list. */
  services?: EditableService[];
}) {
  const year = new Date().getFullYear();
  const runtime = {
    businessName: site?.businessName || siteConfig.business.name,
    city: site?.city || siteConfig.location.city,
    province: site?.province || siteConfig.location.province,
    phone: site?.phone || siteConfig.contact.phone,
    phoneHref: site?.phoneHref || siteConfig.contact.phoneHref,
    facebook: site?.facebook || siteConfig.contact.facebook,
  };

  return (
    <footer className="relative bg-[#07140c] text-white">
      {/* CTA banner */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-10 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#1a7a35] px-6 py-6 sm:px-8 lg:flex-row lg:items-center lg:gap-8">
          <div className="flex items-start gap-4 sm:items-center">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#0d5c28] ring-2 ring-gold-500/70">
              <ShieldCheck className="h-7 w-7 text-gold-400" aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-display text-balance text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                Ready for a Pest-Free Property?
              </h2>
              <p className="mt-1 text-sm text-white/85">
                Fast, safe, and reliable pest control across {runtime.city}.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gold-500 px-6 py-3.5 text-sm font-bold text-base-950 transition hover:bg-gold-400 sm:w-auto"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={runtime.phoneHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/70 px-5 py-3.5 text-sm font-bold text-white transition hover:border-white hover:bg-white/10 sm:w-auto"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {runtime.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main columns */}
      <div className="relative overflow-hidden">
        <CalgarySkyline className="pointer-events-none absolute inset-x-0 bottom-0 h-28 w-full text-green-500/10 sm:h-36" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:px-8 lg:py-16">
          {/* Brand */}
          <div className="lg:border-r lg:border-white/10 lg:pr-8">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0d5c28] ring-2 ring-gold-500/80">
                <ShieldCheck className="h-5 w-5 text-gold-400" aria-hidden="true" />
              </span>
              <span className="font-display leading-none">
                <span className="block text-lg font-extrabold tracking-wide text-white">
                  PEST
                </span>
                <span className="block text-sm font-bold tracking-[0.18em] text-lime-400">
                  WARRIORS
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/75">
              {runtime.city}&apos;s trusted choice for safe, effective, and
              eco-conscious pest control solutions.
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              <a
                href={runtime.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition hover:border-lime-400 hover:text-lime-400"
                aria-label={`${runtime.businessName} on Facebook`}
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <span
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white/80"
                aria-hidden="true"
                title="Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </span>
              <span
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white/80"
                aria-hidden="true"
                title="Google"
              >
                <GoogleIcon className="h-4 w-4" />
              </span>
              <span
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white/80"
                aria-hidden="true"
                title="YouTube"
              >
                <YouTubeIcon className="h-4 w-4" />
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links" className="lg:border-r lg:border-white/10 lg:px-8">
            <h3 className="font-display text-base font-bold text-lime-400">
              Quick Links
            </h3>
            <ul className="mt-5">
              {quickLinks.map((link) => (
                <li key={link.href} className="border-b border-white/10 last:border-0">
                  <Link
                    href={link.href}
                    className="flex min-h-11 items-center gap-2 py-2.5 text-sm font-medium text-white/85 transition hover:text-lime-400"
                  >
                    <ChevronRight
                      className="h-3.5 w-3.5 shrink-0 text-lime-400"
                      aria-hidden="true"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Our services" className="lg:border-r lg:border-white/10 lg:px-8">
            <h3 className="font-display text-base font-bold text-lime-400">
              Our Services
            </h3>
            <ul className="mt-5">
              {footerServices.map((item) => (
                <li key={item.href + item.label} className="border-b border-white/10 last:border-0">
                  <Link
                    href={item.href}
                    className="flex min-h-11 items-center gap-2.5 py-2.5 text-sm font-medium text-white/85 transition hover:text-lime-400"
                  >
                    <item.icon
                      className="h-4 w-4 shrink-0 text-lime-400"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:pl-8">
            <h3 className="font-display text-base font-bold text-lime-400">
              Contact Us
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-white/90">
              <li>
                <a
                  href={runtime.phoneHref}
                  className="inline-flex items-center gap-3 font-semibold transition hover:text-lime-400"
                >
                  <Phone className="h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
                  {runtime.phone}
                </a>
              </li>
              <li className="inline-flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
                {runtime.city}, {runtime.province}
              </li>
              <li className="inline-flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
                Mon–Sat: 8:00 AM–8:00 PM
              </li>
            </ul>

            <div className="mt-6 inline-flex items-center gap-2.5 rounded-lg border border-gold-500/80 px-4 py-3 text-sm font-semibold text-gold-400">
              <AlertTriangle className="h-4 w-4 shrink-0" aria-hidden="true" />
              Emergency Service Available
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-sm text-white/75 sm:flex-row lg:px-8">
          <p className="inline-flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-lime-400" aria-hidden="true" />
            &copy; {year} {runtime.businessName}. All Rights Reserved.
          </p>
          <p className="flex flex-wrap items-center justify-center gap-x-2">
            <Link href="/privacy" className="transition hover:text-lime-400">
              Privacy Policy
            </Link>
            <span aria-hidden="true" className="text-white/40">
              |
            </span>
            <Link href="/terms" className="transition hover:text-lime-400">
              Terms &amp; Conditions
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
