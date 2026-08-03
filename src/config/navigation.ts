export const locationLinks = [
  { href: "/calgary", label: "Calgary" },
  { href: "/edmonton", label: "Edmonton" },
  { href: "/lethbridge", label: "Lethbridge" },
  { href: "/red-deer", label: "Red Deer" },
  { href: "/fort-mcmurray", label: "Fort McMurray" },
] as const;

/** Primary site navigation — location children come from CMS at runtime. */
export const primaryNav = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Pest Service" },
  { href: "/commercial", label: "Commercial Pest Control" },
  { href: "/bed-bug-heat-treatment", label: "Bed Bugs Heat" },
  { href: "/how-heat-treatment-works", label: "Heat Process" },
  { href: "/aprehend-bed-bugs", label: "Aprehend" },
  { href: "/pricing", label: "Pricing" },
  { href: "/locations", label: "Locations" },
  { href: "/diy-pest-control", label: "DIY Products" },
  { href: "/contact", label: "Contact" },
] as const;

export type NavItem = (typeof primaryNav)[number];
