"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Wordmark } from "@/components/Wordmark";
import { primaryNav, locationLinks } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import type { SiteSettings } from "@/types/cms";

/** Shorter labels so the desktop bar fits without crushing the CTA. */
const desktopLabels: Record<string, string> = {
  "/commercial": "Commercial",
  "/bed-bug-heat-treatment": "Bed Bugs",
  "/how-heat-treatment-works": "Heat Process",
  "/diy-pest-control": "DIY",
};

export function Header({ site }: { site?: SiteSettings }) {
  const runtime = {
    contact: {
      phone: site?.phone || siteConfig.contact.phone,
      phoneHref: site?.phoneHref || siteConfig.contact.phoneHref,
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
      : pathname === href;

  const linkClass = (href: string) =>
    `rounded-md px-1.5 py-2 text-[0.75rem] font-semibold whitespace-nowrap transition-colors xl:px-2 xl:text-[0.8rem] ${
      isActive(href) ? "text-green-700" : "text-ink/80 hover:text-green-700"
    }`;

  const navLabel = (href: string, label: string) =>
    desktopLabels[href] ?? label;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="hidden border-b border-line bg-band text-[0.8rem] text-muted xl:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 lg:px-8">
          <p>Professional pest control across Alberta</p>
          <a
            href={runtime.contact.phoneHref}
            className="inline-flex items-center gap-1.5 font-semibold text-green-700 transition-colors hover:text-green-600"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {runtime.contact.phone}
          </a>
        </div>
      </div>

      <div
        className={`border-b border-line bg-surface transition-shadow duration-300 ${
          scrolled || menuOpen ? "shadow-soft" : ""
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[90rem] items-center justify-between gap-4 overflow-hidden px-4 md:h-[4.25rem] lg:px-6">
          <Link href="/" aria-label="Home" className="shrink-0 rounded-md">
            <Wordmark
              variant="dark"
              site={site}
              className="max-w-[9.5rem] sm:max-w-[11rem]"
            />
          </Link>

          <nav
            aria-label="Main"
            className="hidden min-w-0 flex-1 items-center justify-end gap-0.5 xl:flex"
          >
            {primaryNav.map((item) =>
              "children" in item && item.children ? (
                <div
                  key={item.href}
                  className="relative shrink-0"
                  onMouseEnter={() => setLocationsOpen(true)}
                  onMouseLeave={() => setLocationsOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={`${linkClass(item.href)} inline-flex items-center gap-0.5`}
                    aria-expanded={locationsOpen}
                    aria-haspopup="true"
                  >
                    {navLabel(item.href, item.label)}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform ${locationsOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </Link>
                  <AnimatePresence>
                    {locationsOpen && (
                      <motion.div
                        initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full right-0 z-50 min-w-[12rem] rounded-xl border border-line bg-surface py-2 shadow-soft"
                      >
                        {item.children.map((child) => (
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
            <Link
              href="/contact"
              className="btn-primary ml-3 shrink-0 !px-4 !py-2.5 text-sm whitespace-nowrap"
            >
              Get a Quote
            </Link>
          </nav>

          <div className="flex shrink-0 items-center gap-2 xl:hidden">
            <a
              href={runtime.contact.phoneHref}
              aria-label={`Call ${runtime.contact.phone}`}
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-green-600 text-white"
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
            className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-line bg-surface md:top-[4.25rem] xl:hidden"
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 32 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="flex flex-col gap-1 px-5 pt-6 pb-10">
              {primaryNav.map((item) =>
                "children" in item && item.children ? (
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
                        {item.children.map((child) => (
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
                Request a Free Quote
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
