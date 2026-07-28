"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MapPin, Menu, Phone, Users, X } from "lucide-react";
import { FacebookIcon } from "@/components/FacebookIcon";
import { Wordmark } from "@/components/Wordmark";
import { siteConfig } from "@/config/site";
import type { SiteSettings } from "@/types/cms";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export function Header({ site }: { site?: SiteSettings }) {
  const runtime = {
    business: {
      tagline: site?.tagline || siteConfig.business.tagline,
    },
    location: {
      serviceAreaLabel:
        site?.serviceAreaLabel || siteConfig.location.serviceAreaLabel,
    },
    contact: {
      phone: site?.phone || siteConfig.contact.phone,
      phoneHref: site?.phoneHref || siteConfig.contact.phoneHref,
      facebook: site?.facebook || siteConfig.contact.facebook,
    },
  };
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer when the route changes (render-time state adjustment).
  const [menuPath, setMenuPath] = useState(pathname);
  if (menuOpen && menuPath !== pathname) {
    setMenuOpen(false);
    setMenuPath(pathname);
  }

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top utility bar */}
      <div className="hidden border-b border-white/8 bg-base-950 text-[0.8rem] text-white/75 md:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 lg:px-8">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-gold-500" aria-hidden="true" />
              {runtime.location.serviceAreaLabel}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Users className="h-3.5 w-3.5 text-gold-500" aria-hidden="true" />
              {runtime.business.tagline}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={runtime.contact.phoneHref}
              className="inline-flex items-center gap-1.5 font-semibold text-white transition-colors hover:text-gold-500"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {runtime.contact.phone}
            </a>
            <a
              href={runtime.contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pest Warriors on Facebook"
              className="text-white/60 transition-colors hover:text-gold-500"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div
        className={`transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-base-950/95 shadow-[0_4px_24px_-8px_rgb(0_0_0/0.7)] backdrop-blur-md"
            : "bg-gradient-to-b from-base-950/85 to-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-[4.25rem] lg:px-8">
          <Link href="/" aria-label="Pest Warriors — home" className="rounded-md">
            <Wordmark variant="light" site={site} />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive(link.href)
                    ? "text-gold-500"
                    : "text-white/85 hover:text-gold-500"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="group ml-3 inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-bold text-base-950 shadow-gold transition-all hover:bg-gold-400"
            >
              Get a Free Quote
            </Link>
          </nav>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={runtime.contact.phoneHref}
              aria-label={`Call ${runtime.contact.phone}`}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-green-600 text-white"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => {
                setMenuPath(pathname);
                setMenuOpen((v) => !v);
              }}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white"
            >
              {menuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-base-950 md:hidden"
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 32 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="flex flex-col gap-1 px-5 pt-6 pb-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-xl px-4 py-4 text-lg font-bold ${
                    isActive(link.href)
                      ? "bg-white/5 text-gold-500"
                      : "text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center justify-center rounded-full bg-gold-500 px-6 py-4 text-base font-bold text-base-950"
              >
                Get a Free Quote
              </Link>
              <a
                href={runtime.contact.phoneHref}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/25 px-6 py-3.5 text-base font-bold text-white"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {runtime.contact.phone}
              </a>
              <p className="mt-6 flex items-center gap-2 text-sm text-muted">
                <MapPin className="h-4 w-4 text-green-500" aria-hidden="true" />
                {runtime.location.serviceAreaLabel}
              </p>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
