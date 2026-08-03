"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ChevronDown,
  MapPin,
  Menu,
  Phone,
  Shield,
  X,
} from "lucide-react";
import { FacebookIcon } from "@/components/FacebookIcon";
import { Wordmark } from "@/components/Wordmark";
import { primaryNav, locationLinks as fallbackLocationLinks } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import type { SiteSettings } from "@/types/cms";

type LocationLink = { href: string; label: string };

/** Shorter labels so the desktop bar fits without crushing the CTA. */
const desktopLabels: Record<string, string> = {
  "/commercial": "Commercial",
  "/bed-bug-heat-treatment": "Bed Bugs",
  "/how-heat-treatment-works": "Heat Process",
  "/diy-pest-control": "DIY",
  "/services": "Services",
  "/about": "About",
  "/locations": "Locations",
};

export function Header({
  site,
  locations,
}: {
  site?: SiteSettings;
  locations?: LocationLink[];
}) {
  const locationLinks = locations?.length
    ? locations
    : [...fallbackLocationLinks];
  const runtime = {
    contact: {
      phone: site?.phone || siteConfig.contact.phone,
      phoneHref: site?.phoneHref || siteConfig.contact.phoneHref,
      facebook: site?.facebook || siteConfig.contact.facebook,
    },
  };
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [menuPath, setMenuPath] = useState(pathname);
  if (menuOpen && menuPath !== pathname) {
    setMenuOpen(false);
    setMenuPath(pathname);
    setMobileLocationsOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/locations"
      ? locationLinks.some((l) => pathname === l.href) || pathname === "/locations"
      : href === "/"
        ? pathname === "/"
        : pathname === href || pathname.startsWith(`${href}/`);

  const linkClass = (href: string) =>
    `relative rounded-md px-1.5 py-2 text-[0.75rem] font-semibold whitespace-nowrap transition-colors xl:px-2 xl:text-[0.8rem] ${
      isActive(href)
        ? "text-green-700 after:absolute after:inset-x-1.5 after:bottom-0 after:h-0.5 after:rounded-full after:bg-lime-500"
        : "text-ink/75 hover:text-green-700"
    }`;

  const navLabel = (href: string, label: string) =>
    desktopLabels[href] ?? label;

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)]">
      {/* Top utility bar */}
      <div className="hidden bg-base-900 text-[0.78rem] text-white/90 xl:block">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between gap-4 px-4 lg:px-8">
          <p className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-lime-400" aria-hidden="true" />
            {siteConfig.location.serviceAreaLabel}
          </p>
          <p className="inline-flex items-center gap-1.5">
            <Shield className="h-3.5 w-3.5 text-lime-400" aria-hidden="true" />
            Family Owned &amp; Operated
          </p>
          <div className="flex items-center gap-3">
            <a
              href={runtime.contact.phoneHref}
              className="inline-flex items-center gap-1.5 font-semibold text-white transition-colors hover:text-lime-400"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {runtime.contact.phone}
            </a>
            <a
              href={runtime.contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-7 w-7 items-center justify-center rounded bg-white/10 text-white transition hover:bg-lime-500 hover:text-base-950"
              aria-label="Facebook"
            >
              <FacebookIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      <div
        className={`border-b border-line bg-surface transition-shadow duration-300 ${
          scrolled || menuOpen ? "shadow-soft" : ""
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[90rem] items-center justify-between gap-2 px-3 sm:gap-4 sm:px-4 md:h-[4.25rem] lg:px-6">
          <Link href="/" aria-label="Home" className="min-w-0 shrink rounded-md">
            <Wordmark
              variant="dark"
              site={site}
              className="max-w-[10rem] sm:max-w-[12rem]"
            />
          </Link>

          <nav
            aria-label="Main"
            className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 xl:flex"
          >
            <Link
              href="/"
              aria-current={pathname === "/" ? "page" : undefined}
              className={`${linkClass("/")} shrink-0`}
            >
              Home
            </Link>
            {primaryNav.map((item) =>
              item.href === "/locations" ? (
                <div
                  key={item.href}
                  className="relative shrink-0"
                  onMouseEnter={() => setLocationsOpen(true)}
                  onMouseLeave={() => setLocationsOpen(false)}
                >
                  <button
                    type="button"
                    className={`${linkClass(item.href)} inline-flex items-center gap-0.5`}
                    aria-expanded={locationsOpen}
                    aria-haspopup="true"
                    onClick={() => setLocationsOpen((v) => !v)}
                  >
                    {navLabel(item.href, item.label)}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform ${locationsOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                  <AnimatePresence>
                    {locationsOpen && (
                      <motion.div
                        initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 z-[60] pt-2"
                      >
                        <div className="min-w-[13rem] overflow-hidden rounded-xl border border-line bg-surface py-2 shadow-soft">
                          <Link
                            href={item.href}
                            className={`block px-4 py-2.5 text-sm font-semibold transition-colors ${
                              pathname === item.href
                                ? "bg-band text-green-700"
                                : "text-ink/80 hover:bg-band hover:text-green-700"
                            }`}
                          >
                            All Locations
                          </Link>
                          {locationLinks.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block px-4 py-2.5 text-sm font-semibold transition-colors ${
                                pathname === child.href
                                  ? "bg-band text-green-700"
                                  : "text-ink/80 hover:bg-band hover:text-green-700"
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`${linkClass(item.href)} shrink-0`}
                >
                  {navLabel(item.href, item.label)}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden shrink-0 xl:block">
            <Link
              href="/contact"
              className="btn-primary !px-5 !py-2.5 text-sm whitespace-nowrap"
            >
              Get a Free Quote
              <span aria-hidden="true">&gt;</span>
            </Link>
          </div>

          <div className="flex shrink-0 items-center gap-2 xl:hidden">
            <a
              href={runtime.contact.phoneHref}
              aria-label={`Call ${runtime.contact.phone}`}
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold-500 text-base-950"
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
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-band text-ink"
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

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            className="fixed inset-x-0 top-[var(--header-offset)] bottom-0 z-40 overflow-y-auto border-t border-line bg-surface xl:hidden"
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 32 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="flex flex-col gap-1 px-5 pt-6 pb-[max(2.5rem,env(safe-area-inset-bottom))]">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className={`rounded-xl px-4 py-4 text-lg font-bold ${
                  pathname === "/"
                    ? "bg-band text-green-700"
                    : "text-ink hover:bg-band"
                }`}
              >
                Home
              </Link>
              {primaryNav.map((item) =>
                item.href === "/locations" ? (
                  <div key={item.href}>
                    <button
                      type="button"
                      onClick={() => setMobileLocationsOpen((v) => !v)}
                      className={`flex w-full items-center justify-between rounded-xl px-4 py-4 text-left text-lg font-bold ${
                        isActive(item.href)
                          ? "bg-band text-green-700"
                          : "text-ink hover:bg-band"
                      }`}
                      aria-expanded={mobileLocationsOpen}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${mobileLocationsOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileLocationsOpen ? (
                      <div className="mb-2 ml-3 space-y-1 border-l border-line pl-3">
                        <Link
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className="block rounded-lg px-3 py-2.5 text-base font-semibold text-green-700"
                        >
                          All Locations
                        </Link>
                        {locationLinks.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMenuOpen(false)}
                            className={`block rounded-lg px-3 py-2.5 text-base font-semibold ${
                              pathname === child.href
                                ? "text-green-700"
                                : "text-ink/80 hover:text-green-700"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                    className={`rounded-xl px-4 py-4 text-lg font-bold ${
                      isActive(item.href)
                        ? "bg-band text-green-700"
                        : "text-ink hover:bg-band"
                    }`}
                  >
                    {item.label}
                  </Link>
                ),
              )}
              <Link
                href="/contact"
                className="btn-primary mt-4 w-full"
                onClick={() => setMenuOpen(false)}
              >
                Get a Free Quote
              </Link>
              <a href={runtime.contact.phoneHref} className="btn-secondary mt-2 w-full">
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {runtime.contact.phone}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
