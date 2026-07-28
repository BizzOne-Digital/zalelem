import { siteConfig } from "@/config/site";
import type { SiteSettings } from "@/types/cms";

export function buildRuntimeSiteConfig(site: SiteSettings) {
  return {
    ...siteConfig,
    business: {
      ...siteConfig.business,
      name: site.businessName,
      legalName: site.legalName,
      tagline: site.tagline,
      logoSrc: site.logoSrc || null,
    },
    location: {
      ...siteConfig.location,
      city: site.city,
      province: site.province,
      country: site.country,
      serviceAreaLabel: site.serviceAreaLabel,
      serviceAreas: site.serviceAreas,
      serviceAreasNote: site.serviceAreasNote,
    },
    contact: {
      ...siteConfig.contact,
      phone: site.phone,
      phoneHref: site.phoneHref,
      email: site.email,
      emailHref: site.emailHref,
      facebook: site.facebook,
      formRecipient: site.formRecipient,
      responseMessage: site.responseMessage,
    },
  };
}
