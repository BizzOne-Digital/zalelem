import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronRight, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { FacebookIcon } from "@/components/FacebookIcon";
import { Wordmark } from "@/components/Wordmark";
import { primaryServices } from "@/config/services";
import { siteConfig } from "@/config/site";
import type { EditableService, SiteSettings } from "@/types/cms";

const companyLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
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
      : primaryServices.map((item) => ({ ...item, heroTitle: item.name, heroDescription: item.cardDescription, heroImage: "", sections: [] }));
  const runtime = {
    businessName: site?.businessName || siteConfig.business.name,
    legalName: site?.legalName || siteConfig.business.legalName,
    city: site?.city || siteConfig.location.city,
    province: site?.province || siteConfig.location.province,
    country: site?.country || siteConfig.location.country,
    serviceAreas: site?.serviceAreas || siteConfig.location.serviceAreas,
    phone: site?.phone || siteConfig.contact.phone,
    phoneHref: site?.phoneHref || siteConfig.contact.phoneHref,
    email: site?.email || siteConfig.contact.email,
    emailHref: site?.emailHref || siteConfig.contact.emailHref,
    facebook: site?.facebook || siteConfig.contact.facebook,
  };

  return (
    <footer className="relative overflow-hidden bg-base-950 text-white/75">
      <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
      <div className="relative border-t border-gold-500/25">
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-4 py-14 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-xl">
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Need Help With a Pest Problem?
            </h2>
            <p className="mt-3 text-white/60">
              Contact {runtime.businessName} for a custom quote.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-4 text-base font-bold text-base-950 shadow-gold transition-all hover:bg-gold-400">
              Request a Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <a href={runtime.phoneHref} className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 px-7 py-4 text-base font-bold text-white transition-colors hover:border-gold-500 hover:text-gold-500">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {runtime.phone}
            </a>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/8">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-12 px-4 py-16 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.85fr_1fr_1.15fr] lg:px-8">
          <div>
            <Wordmark variant="light" site={site} />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              Family-owned and operated pest control serving {runtime.city} and surrounding communities.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href={runtime.facebook} target="_blank" rel="noopener noreferrer" className="group inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all hover:border-gold-500/50 hover:bg-gold-500 hover:text-base-950" aria-label="Pest Warriors on Facebook"><FacebookIcon className="h-5 w-5" /></a>
              <a href={runtime.emailHref} className="group inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all hover:border-gold-500/50 hover:bg-gold-500 hover:text-base-950" aria-label={`Email ${runtime.businessName}`}><Mail className="h-5 w-5" aria-hidden="true" /></a>
              <a href={runtime.phoneHref} className="group inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all hover:border-gold-500/50 hover:bg-gold-500 hover:text-base-950" aria-label={`Call ${runtime.phone}`}><Phone className="h-5 w-5" aria-hidden="true" /></a>
            </div>
          </div>
          <nav aria-label="Footer — pages">
            <h3 className="font-display flex items-center gap-2 text-sm font-bold tracking-[0.14em] text-white uppercase">Company<span className="h-px w-8 bg-gold-500" aria-hidden="true" /></h3>
            <ul className="mt-5 space-y-3 text-sm">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="group inline-flex items-center gap-1.5 transition-colors hover:text-gold-500">
                    <ChevronRight className="h-3.5 w-3.5 text-green-500 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Footer — services">
            <h3 className="font-display flex items-center gap-2 text-sm font-bold tracking-[0.14em] text-white uppercase">Our Services<span className="h-px w-8 bg-gold-500" aria-hidden="true" /></h3>
            <ul className="mt-5 space-y-3 text-sm">
              {serviceList.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="group inline-flex items-center gap-1.5 transition-colors hover:text-gold-500">
                    <ChevronRight className="h-3.5 w-3.5 text-green-500 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="group mt-1 inline-flex items-center gap-1.5 font-bold text-gold-500 transition-colors hover:text-gold-400">
                  View All Services
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <h3 className="font-display flex items-center gap-2 text-sm font-bold tracking-[0.14em] text-white uppercase">Get In Touch<span className="h-px w-8 bg-gold-500" aria-hidden="true" /></h3>
            <ul className="mt-5 space-y-4">
              <li><a href={runtime.phoneHref} className="group flex items-center gap-3.5"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-600/15 text-green-400 transition-colors group-hover:bg-green-600 group-hover:text-white"><Phone className="h-4.5 w-4.5" aria-hidden="true" /></span><span><span className="block text-xs text-white/45">Call or text</span><span className="text-sm font-bold text-white transition-colors group-hover:text-gold-500">{runtime.phone}</span></span></a></li>
              <li><a href={runtime.emailHref} className="group flex items-center gap-3.5"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-600/15 text-green-400 transition-colors group-hover:bg-green-600 group-hover:text-white"><Mail className="h-4.5 w-4.5" aria-hidden="true" /></span><span><span className="block text-xs text-white/45">Email</span><span className="text-sm font-bold break-all text-white transition-colors group-hover:text-gold-500">{runtime.email}</span></span></a></li>
              <li className="flex items-start gap-3.5"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-600/15 text-green-400"><MapPin className="h-4.5 w-4.5" aria-hidden="true" /></span><span><span className="block text-xs text-white/45">Service area</span><span className="mt-1.5 flex flex-wrap gap-1.5">{runtime.serviceAreas.map((area) => (<span key={area} className="rounded-md bg-white/6 px-2 py-1 text-xs font-semibold text-white/80">{area}</span>))}</span></span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-white/40 sm:flex-row lg:px-8">
          <p>&copy; {year} {runtime.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="transition-colors hover:text-gold-500">Privacy</Link>
            <span className="h-3 w-px bg-white/15" aria-hidden="true" />
            <Link href="/terms" className="transition-colors hover:text-gold-500">Terms</Link>
            <span className="h-3 w-px bg-white/15" aria-hidden="true" />
            <p className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-green-500" aria-hidden="true" />{runtime.city}, {runtime.province}, {runtime.country}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
