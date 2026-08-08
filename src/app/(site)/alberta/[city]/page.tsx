import type { Metadata } from "next";
import {
  CityPageRenderer,
  getCityMetadata,
} from "@/components/locations/CityPageRenderer";
import { citiesForProvince } from "@/config/regions";

export function generateStaticParams() {
  return citiesForProvince("AB").map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  return getCityMetadata("AB", city);
}

export default async function AlbertaCityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  return <CityPageRenderer province="AB" city={city} />;
}
