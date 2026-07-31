export type LocationCommunity = {
  name: string;
  href: string;
  blurb: string;
};

export const locationReviews = [
  {
    name: "Linda B.",
    text: "Very reliable, friendly and efficient. They handled our wasp, mouse, and skunk issues without hassle. We do not hesitate to recommend them.",
  },
  {
    name: "Barbara T.",
    text: "Professional inspection and thorough treatment. Follow-up was clear and we finally feel comfortable in our home again.",
  },
  {
    name: "Christopher D.",
    text: "Great communication by phone and email. Quote was reasonable and the technician arrived on time and did a careful job.",
  },
  {
    name: "Michael A.",
    text: "Efficient service with a professional attitude. Situations are handled promptly — we would recommend them to any homeowner or business.",
  },
] as const;

export const serviceTypeCards = [
  {
    title: "Residential Pest Control",
    href: "/property-types",
    description:
      "Homes, rentals, and multi-unit properties — discreet treatment plans built around your family and schedule.",
  },
  {
    title: "Commercial Pest Control",
    href: "/commercial",
    description:
      "Restaurants, offices, retail, and facilities that need reliable, documentation-ready pest management.",
  },
  {
    title: "Industrial Pest Control",
    href: "/commercial",
    description:
      "Warehouses, plants, and larger sites with targeted programs for rodents, birds, and crawling insects.",
  },
] as const;

export const edmontonCommunities: LocationCommunity[] = [
  {
    name: "Windermere",
    href: "/contact?area=windermere",
    blurb:
      "Same-day residential, commercial, and industrial extermination. 1-day chemical-free bed bug heat treatments and carpenter ant removal.",
  },
  {
    name: "Sherwood Park",
    href: "/contact?area=sherwood-park",
    blurb:
      "Strathcona County East — same-day pest extermination with thermal bed bug and carpenter ant specialty services.",
  },
  {
    name: "St. Albert",
    href: "/contact?area=st-albert",
    blurb:
      "Northwest Edmonton region — residential, commercial, and industrial same-day pest control.",
  },
  {
    name: "Leduc",
    href: "/contact?area=leduc",
    blurb:
      "South / Airport Region — fast same-day pest extermination for homes and businesses.",
  },
  {
    name: "Spruce Grove",
    href: "/contact?area=spruce-grove",
    blurb:
      "West Corridor — chemical-free bed bug heat treatments and full pest management.",
  },
  {
    name: "Fort Saskatchewan",
    href: "/contact?area=fort-saskatchewan",
    blurb:
      "Northeast Industrial Hub — residential, commercial, and industrial extermination.",
  },
  {
    name: "Beaumont",
    href: "/contact?area=beaumont",
    blurb:
      "South / French Quarter — same-day pest control with guaranteed cleanup and insulation services.",
  },
  {
    name: "Stony Plain",
    href: "/contact?area=stony-plain",
    blurb:
      "West / Tri-Region — thermal bed bug, carpenter ant, and rodent solutions.",
  },
  {
    name: "Devon",
    href: "/contact?area=devon",
    blurb:
      "Same-day residential, commercial, and industrial pest extermination services.",
  },
  {
    name: "Morinville",
    href: "/contact?area=morinville",
    blurb:
      "Local pest management with chemical-free heat treatments and cleanup services.",
  },
  {
    name: "Calmar",
    href: "/contact?area=calmar",
    blurb:
      "Same-day extermination for homes, businesses, and industrial properties.",
  },
  {
    name: "Millet",
    href: "/contact?area=millet",
    blurb:
      "Chemical-free bed bug heat treatments and carpenter ant removal with guaranteed results.",
  },
  {
    name: "Gibbons",
    href: "/contact?area=gibbons",
    blurb:
      "Same-day residential, commercial, and industrial pest control across Gibbons.",
  },
  {
    name: "Redwater",
    href: "/contact?area=redwater",
    blurb:
      "Fast-response pest extermination with thermal bed bug and rodent solutions.",
  },
  {
    name: "Bon Accord & Legal",
    href: "/contact?area=bon-accord-legal",
    blurb:
      "Same-day pest control for both communities with full residential and commercial coverage.",
  },
  {
    name: "Strathcona County",
    href: "/contact?area=strathcona-county",
    blurb:
      "County-wide residential, commercial, and industrial same-day extermination.",
  },
  {
    name: "Sturgeon County",
    href: "/contact?area=sturgeon-county",
    blurb:
      "Rural and community pest management with chemical-free heat treatments.",
  },
  {
    name: "Parkland County",
    href: "/contact?area=parkland-county",
    blurb:
      "County coverage for homes and businesses with guaranteed cleanup services.",
  },
  {
    name: "Leduc County",
    href: "/contact?area=leduc-county",
    blurb:
      "Same-day pest extermination across Leduc County residential and commercial properties.",
  },
];
