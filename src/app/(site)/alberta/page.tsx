import type { Metadata } from "next";
import { ProvinceHub } from "@/components/locations/ProvinceHub";
import { getCmsContent, getLocationLinksByProvince } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Pest Control Alberta | Edmonton, Calgary & More | Pest Warriors",
  description:
    "Pest Warriors serves Edmonton, Calgary, Fort McMurray, Red Deer, Lethbridge, and surrounding Alberta communities.",
  alternates: { canonical: "/alberta" },
};

export default async function AlbertaHubPage() {
  const cms = await getCmsContent();
  const { AB } = getLocationLinksByProvince(cms.pages);
  return <ProvinceHub province="AB" cities={AB} />;
}
