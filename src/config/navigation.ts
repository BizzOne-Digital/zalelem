import {
  coreServiceSlugSet,
  primaryServices,
  serviceCategoryLabels,
  serviceCategoryOrder,
  type ServiceCategory,
} from "@/config/services";
import { provinceMeta } from "@/config/regions";

export const locationLinks = [
  { href: "/alberta/calgary", label: "Calgary", province: "AB" as const },
  { href: "/alberta/edmonton", label: "Edmonton", province: "AB" as const },
  { href: "/alberta/lethbridge", label: "Lethbridge", province: "AB" as const },
  { href: "/alberta/red-deer", label: "Red Deer", province: "AB" as const },
  {
    href: "/alberta/fort-mcmurray",
    label: "Fort McMurray",
    province: "AB" as const,
  },
  { href: "/british-columbia/vancouver", label: "Vancouver", province: "BC" as const },
  { href: "/british-columbia/victoria", label: "Victoria", province: "BC" as const },
] as const;

export type NavChild = { href: string; label: string };

export type NavItem = {
  href: string;
  label: string;
  children?: NavChild[];
  groups?: { label: string; children: NavChild[] }[];
};

export const serviceNavGroups: { label: string; children: NavChild[] }[] =
  serviceCategoryOrder.map((category: ServiceCategory) => ({
    label: serviceCategoryLabels[category],
    children: primaryServices
      .filter((s) => s.category === category && coreServiceSlugSet.has(s.slug))
      .map((s) => ({ href: `/services/${s.slug}`, label: s.shortName })),
  }));

export const bedBugsNavChildren: NavChild[] = [
  { href: "/bed-bug-packages", label: "Packages (Gold / Silver / Bronze)" },
  { href: "/bed-bug-heat-treatment", label: "Heat Treatment" },
  { href: "/how-heat-treatment-works", label: "How Heat Works" },
  { href: "/aprehend-bed-bugs", label: "Aprehend®" },
  { href: "/pricing", label: "Pricing" },
  { href: "/services/bed-bug-control", label: "Bed Bug Service" },
];

export const locationsNavGroups: { label: string; children: NavChild[] }[] = [
  {
    label: provinceMeta.AB.name,
    children: [
      { href: provinceMeta.AB.href, label: "Alberta Overview" },
      ...locationLinks
        .filter((l) => l.province === "AB")
        .map((l) => ({ href: l.href, label: l.label })),
    ],
  },
  {
    label: provinceMeta.BC.name,
    children: [
      { href: provinceMeta.BC.href, label: "BC Overview" },
      ...locationLinks
        .filter((l) => l.province === "BC")
        .map((l) => ({ href: l.href, label: l.label })),
    ],
  },
];

/** Primary site navigation — location children also come from CMS at runtime. */
export const primaryNav: NavItem[] = [
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Services",
    groups: serviceNavGroups,
  },
  {
    href: "/bed-bug-packages",
    label: "Bed Bugs",
    children: bedBugsNavChildren,
  },
  { href: "/commercial", label: "Commercial" },
  { href: "/pricing", label: "Pricing" },
  {
    href: "/locations",
    label: "Locations",
    groups: locationsNavGroups,
  },
  { href: "/contact", label: "Contact" },
];
