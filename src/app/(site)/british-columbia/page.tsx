import type { Metadata } from "next";
import { ProvinceHub } from "@/components/locations/ProvinceHub";
import { getCmsContent, getLocationLinksByProvince } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Pest Control British Columbia | Vancouver & Victoria | Pest Warriors",
  description:
    "Pest Warriors serves Vancouver, Victoria, and surrounding British Columbia communities with residential and commercial pest control.",
  alternates: { canonical: "/british-columbia" },
};

export default async function BritishColumbiaHubPage() {
  const cms = await getCmsContent();
  const { BC } = getLocationLinksByProvince(cms.pages);
  return <ProvinceHub province="BC" cities={BC} />;
}
