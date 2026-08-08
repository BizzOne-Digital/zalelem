import type { Metadata } from "next";
import {
  CityPageRenderer,
  getCityMetadata,
} from "@/components/locations/CityPageRenderer";
import { citiesForProvince } from "@/config/regions";

export function generateStaticParams() {
  return citiesForProvince("BC").map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  return getCityMetadata("BC", city);
}

export default async function BritishColumbiaCityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  return <CityPageRenderer province="BC" city={city} />;
}
