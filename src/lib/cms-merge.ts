import { cityPath, regionCities, type ProvinceCode } from "@/config/regions";
import { defaultCmsContent } from "@/lib/default-content";
import { defaultPricingContent } from "@/lib/default-pricing";
import type {
  CmsContent,
  EditablePage,
  EditableSection,
  EditableService,
  PricingContent,
} from "@/types/cms";

function isPageEmpty(page: EditablePage): boolean {
  return !page.heroTitle && !page.heroDescription && page.sections.length === 0;
}

function mergeSections(
  existing: EditableSection[],
  defaults: EditableSection[],
): { sections: EditableSection[]; changed: boolean } {
  let changed = false;
  const sections = [...existing];
  for (const def of defaults) {
    if (!sections.some((s) => s.id === def.id)) {
      sections.push(def);
      changed = true;
    }
  }
  return { sections, changed };
}

function mergePricing(
  existing: PricingContent | undefined,
): { pricing: PricingContent; changed: boolean } {
  if (!existing) {
    return { pricing: defaultPricingContent, changed: true };
  }

  let changed = false;
  const pricing: PricingContent = { ...defaultPricingContent, ...existing };

  const mergeList = <T extends { id?: string; title?: string; treatment?: string }>(
    key: keyof PricingContent,
    idKey: "id" | "title" | "treatment",
  ) => {
    const defArr = defaultPricingContent[key] as unknown as T[];
    const curArr = ((existing[key] as unknown as T[] | undefined) ?? []) as T[];
    if (!Array.isArray(defArr)) return;
    if (!Array.isArray(existing[key]) || (existing[key] as unknown as unknown[]).length === 0) {
      (pricing as unknown as Record<string, unknown>)[key as string] = defArr;
      changed = true;
      return;
    }
    const merged = [...curArr];
    for (const item of defArr) {
      const id = item[idKey];
      if (id && !merged.some((m) => m[idKey] === id)) {
        merged.push(item);
        changed = true;
      }
    }
    (pricing as unknown as Record<string, unknown>)[key as string] = merged;
  };

  mergeList("bedBugTreatments", "id");
  mergeList("generalPests", "id");
  mergeList("comparisonRows", "treatment");
  mergeList("keyDifferences", "title");
  mergeList("warranties", "title");

  for (const key of Object.keys(defaultPricingContent) as (keyof PricingContent)[]) {
    if (pricing[key] === undefined || pricing[key] === null || pricing[key] === "") {
      (pricing as Record<string, unknown>)[key] = defaultPricingContent[key];
      changed = true;
    }
  }

  return { pricing, changed };
}

export function mergeMissingDefaults(doc: CmsContent): { content: CmsContent; changed: boolean } {
  let changed = false;

  const pages = [...(doc.pages ?? [])];
  for (const defaultPage of defaultCmsContent.pages) {
    const idx = pages.findIndex((item) => item.slug === defaultPage.slug);
    if (idx < 0) {
      pages.push(defaultPage);
      changed = true;
    } else if (isPageEmpty(pages[idx])) {
      pages[idx] = defaultPage;
      changed = true;
    } else {
      const page = pages[idx];
      let pageChanged = false;
      const next: EditablePage = { ...page };

      if (page.kind === undefined && defaultPage.kind) {
        next.kind = defaultPage.kind;
        pageChanged = true;
      }
      if (!page.cityLabel && defaultPage.cityLabel) {
        next.cityLabel = defaultPage.cityLabel;
        pageChanged = true;
      }
      if (page.published === undefined && defaultPage.published !== undefined) {
        next.published = defaultPage.published;
        pageChanged = true;
      }
      if (!page.province && defaultPage.province) {
        next.province = defaultPage.province;
        pageChanged = true;
      }

      // Refresh BC flagship pages when still on short placeholder copy.
      if (
        (defaultPage.slug === "vancouver" &&
          (page.heroTitle === "Pest Control in Vancouver & Surrounding Areas" ||
            (page.sections?.length ?? 0) < 4)) ||
        (defaultPage.slug === "victoria" &&
          (page.heroTitle === "Pest Control in Victoria & Surrounding Areas" ||
            (page.sections?.length ?? 0) < 4))
      ) {
        next.title = defaultPage.title;
        next.description = defaultPage.description;
        next.heroTitle = defaultPage.heroTitle;
        next.heroDescription = defaultPage.heroDescription;
        next.sections = defaultPage.sections;
        pageChanged = true;
      }

      const { sections, changed: sectionsChanged } = mergeSections(
        page.sections ?? [],
        defaultPage.sections ?? [],
      );
      if (sectionsChanged) {
        next.sections = sections;
        pageChanged = true;
      }

      if (pageChanged) {
        pages[idx] = next;
        changed = true;
      }
    }
  }

  const services: EditableService[] = [...(doc.services ?? [])];
  for (const service of defaultCmsContent.services) {
    const idx = services.findIndex((item) => item.slug === service.slug);
    if (idx < 0) {
      services.push(service);
      changed = true;
    } else {
      const existing = services[idx];
      let svcChanged = false;
      const next = { ...existing };
      if (!existing.priceRange && service.priceRange) {
        next.priceRange = service.priceRange;
        svcChanged = true;
      }
      if (!existing.pricingNote && service.pricingNote) {
        next.pricingNote = service.pricingNote;
        svcChanged = true;
      }
      if (!existing.category && service.category) {
        next.category = service.category;
        svcChanged = true;
      }
      const { sections, changed: sectionsChanged } = mergeSections(
        existing.sections ?? [],
        service.sections ?? [],
      );
      if (sectionsChanged) {
        next.sections = sections;
        svcChanged = true;
      }
      if (svcChanged) {
        services[idx] = next;
        changed = true;
      }
    }
  }

  const faqs = [...(doc.faqs ?? [])];
  for (const faq of defaultCmsContent.faqs) {
    if (!faqs.some((item) => item.question === faq.question)) {
      faqs.push(faq);
      changed = true;
    }
  }

  const { pricing, changed: pricingChanged } = mergePricing(doc.pricing);
  if (pricingChanged) changed = true;

  const site = { ...(doc.site ?? defaultCmsContent.site) };
  const defaultAreas = defaultCmsContent.site.serviceAreas ?? [];
  const currentAreas = Array.isArray(site.serviceAreas) ? [...site.serviceAreas] : [];
  let areasChanged = false;
  for (const area of defaultAreas) {
    if (!currentAreas.includes(area)) {
      currentAreas.push(area);
      areasChanged = true;
    }
  }
  if (areasChanged) {
    site.serviceAreas = currentAreas;
    changed = true;
  }
  if (
    !site.serviceAreaLabel ||
    site.serviceAreaLabel === "Serving Calgary & Surrounding Areas"
  ) {
    site.serviceAreaLabel = defaultCmsContent.site.serviceAreaLabel;
    changed = true;
  }
  if (
    !site.serviceAreasNote ||
    site.serviceAreasNote === "Nearby communities available by request."
  ) {
    site.serviceAreasNote = defaultCmsContent.site.serviceAreasNote;
    changed = true;
  }

  return {
    content: {
      site,
      pages,
      services,
      faqs,
      pricing,
    },
    changed,
  };
}

export function getCmsPage(pages: EditablePage[], slug: string): EditablePage | undefined {
  return (
    pages.find((item) => item.slug === slug) ??
    defaultCmsContent.pages.find((item) => item.slug === slug)
  );
}

export function getLocationPages(pages: EditablePage[]): EditablePage[] {
  return pages.filter(
    (p) => (p.kind === "location" || isKnownLocationSlug(p.slug)) && p.published !== false,
  );
}

const KNOWN_LOCATION_SLUGS = new Set(regionCities.map((c) => c.slug));

function isKnownLocationSlug(slug: string) {
  return KNOWN_LOCATION_SLUGS.has(slug);
}

function resolveProvince(page: EditablePage): ProvinceCode {
  if (page.province === "AB" || page.province === "BC") return page.province;
  const known = regionCities.find((c) => c.slug === page.slug);
  return known?.province ?? "AB";
}

export function getLocationLinks(pages: EditablePage[]) {
  return getLocationPages(pages).map((p) => ({
    href: cityPath(p.slug, resolveProvince(p)),
    label: p.cityLabel || p.heroTitle || p.slug,
    province: resolveProvince(p),
  }));
}

export function getLocationLinksByProvince(pages: EditablePage[]) {
  const links = getLocationLinks(pages);
  return {
    AB: links.filter((l) => l.province === "AB"),
    BC: links.filter((l) => l.province === "BC"),
  };
}
