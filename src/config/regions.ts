export type ProvinceCode = "AB" | "BC";

export type RegionCity = {
  slug: string;
  label: string;
  province: ProvinceCode;
};

export const provinceMeta: Record<
  ProvinceCode,
  {
    code: ProvinceCode;
    name: string;
    slug: string;
    href: string;
    shortLabel: string;
    description: string;
  }
> = {
  AB: {
    code: "AB",
    name: "Alberta",
    slug: "alberta",
    href: "/alberta",
    shortLabel: "Alberta",
    description:
      "Serving Edmonton, Calgary, Fort McMurray, Red Deer, Lethbridge, and surrounding Alberta communities.",
  },
  BC: {
    code: "BC",
    name: "British Columbia",
    slug: "british-columbia",
    href: "/british-columbia",
    shortLabel: "British Columbia",
    description:
      "Serving Vancouver, Victoria, and surrounding British Columbia communities.",
  },
};

export const regionCities: RegionCity[] = [
  { slug: "calgary", label: "Calgary", province: "AB" },
  { slug: "edmonton", label: "Edmonton", province: "AB" },
  { slug: "lethbridge", label: "Lethbridge", province: "AB" },
  { slug: "red-deer", label: "Red Deer", province: "AB" },
  { slug: "fort-mcmurray", label: "Fort McMurray", province: "AB" },
  { slug: "vancouver", label: "Vancouver", province: "BC" },
  { slug: "victoria", label: "Victoria", province: "BC" },
];

export function provincePath(province: ProvinceCode): string {
  return provinceMeta[province].href;
}

export function cityPath(slug: string, province?: ProvinceCode): string {
  const city = regionCities.find((c) => c.slug === slug);
  const code = province ?? city?.province ?? "AB";
  return `${provinceMeta[code].href}/${slug}`;
}

export function citiesForProvince(province: ProvinceCode): RegionCity[] {
  return regionCities.filter((c) => c.province === province);
}

export function provinceFromSlug(provinceSlug: string): ProvinceCode | null {
  if (provinceSlug === "alberta") return "AB";
  if (provinceSlug === "british-columbia") return "BC";
  return null;
}
