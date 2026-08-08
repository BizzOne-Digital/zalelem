import { notFound } from "next/navigation";
import { CalgaryPageContent } from "@/components/locations/CalgaryPageContent";
import { VancouverPageContent } from "@/components/locations/VancouverPageContent";
import { VictoriaPageContent } from "@/components/locations/VictoriaPageContent";
import { LocationPage } from "@/components/content/LocationPage";
import { edmontonCommunities } from "@/config/locations";
import {
  citiesForProvince,
  cityPath,
  provinceMeta,
  type ProvinceCode,
} from "@/config/regions";
import { getCmsContent, getCmsPage } from "@/lib/cms";

export async function getCityMetadata(province: ProvinceCode, city: string) {
  const allowed = citiesForProvince(province).some((c) => c.slug === city);
  if (!allowed) return {};
  const cms = await getCmsContent();
  const page = getCmsPage(cms.pages, city);
  return {
    title: page?.title ?? `${city} Pest Control`,
    description: page?.description ?? "",
    alternates: { canonical: cityPath(city, province) },
  };
}

export async function CityPageRenderer({
  province,
  city,
}: {
  province: ProvinceCode;
  city: string;
}) {
  const allowed = citiesForProvince(province).some((c) => c.slug === city);
  if (!allowed) notFound();

  const cms = await getCmsContent();
  const page = getCmsPage(cms.pages, city);
  if (!page || page.published === false) notFound();

  if (city === "calgary") {
    return (
      <CalgaryPageContent
        heroTitle={page.heroTitle}
        heroDescription={page.heroDescription}
        phone={cms.site.phone}
        phoneHref={cms.site.phoneHref}
      />
    );
  }

  if (city === "vancouver") {
    return (
      <VancouverPageContent
        heroTitle={page.heroTitle}
        heroDescription={page.heroDescription}
        phone={cms.site.phone}
        phoneHref={cms.site.phoneHref}
      />
    );
  }

  if (city === "victoria") {
    return (
      <VictoriaPageContent
        heroTitle={page.heroTitle}
        heroDescription={page.heroDescription}
        phone={cms.site.phone}
        phoneHref={cms.site.phoneHref}
      />
    );
  }

  return (
    <LocationPage
      slug={city}
      cityLabel={page.cityLabel || page.heroTitle}
      contactArea={city}
      communities={city === "edmonton" ? edmontonCommunities : undefined}
      provinceLabel={provinceMeta[province].name}
    />
  );
}
