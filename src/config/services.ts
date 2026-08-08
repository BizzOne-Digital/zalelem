/**
 * Service catalogue and FAQ content. Copy is region-agnostic where possible;
 * city-specific wording pulls from location pages / siteConfig.
 */

export type ServiceCategory = "pest" | "rodent" | "bird" | "specialty";

export const serviceCategoryLabels: Record<ServiceCategory, string> = {
  pest: "Pest Control",
  rodent: "Rodent Treatment",
  bird: "Bird Control",
  specialty: "Specialty Services",
};

export const serviceCategoryOrder: ServiceCategory[] = [
  "pest",
  "rodent",
  "bird",
  "specialty",
];

/** Designer brief core catalogue (excludes product list / DIY and non-listed extras). */
export const coreServiceSlugs = [
  "bed-bug-control",
  "cockroach-control",
  "ant-control",
  "carpenter-ant-control",
  "termite-control",
  "wasp-nest-removal",
  "mice-rodent-control",
  "pigeon-control",
  "droppings-cleanup",
  "disinfection-services",
] as const;

export const coreServiceSlugSet = new Set<string>(coreServiceSlugs);

export function filterCoreServices<T extends { slug: string }>(services: T[]): T[] {
  return services.filter((s) => coreServiceSlugSet.has(s.slug));
}

export type PrimaryService = {
  slug: string;
  name: string;
  shortName: string;
  category: ServiceCategory;
  cardDescription: string;
  whoFor: string;
  warningSigns: string[];
  approach: string[];
  faq: { question: string; answer: string }[];
};

export const primaryServices: PrimaryService[] = [
  {
    slug: "bed-bug-control",
    name: "Bed Bug Control",
    shortName: "Bed Bugs",
    category: "pest",
    cardDescription:
      "Discreet, inspection-led bed bug treatment for homes, hotels, and multi-unit properties, with heat-treatment availability where applicable.",
    whoFor:
      "Homeowners, tenants, landlords, hotels and motels, senior residences, and property managers dealing with confirmed or suspected bed bug activity.",
    warningSigns: [
      "Small reddish-brown insects along mattress seams, box springs, or headboards",
      "Dark spotting on bedding, mattresses, or nearby furniture",
      "Unexplained bites that appear overnight, often in lines or clusters",
      "Shed skins or small pale eggs in seams and crevices",
    ],
    approach: [
      "Thorough inspection and positive identification before any treatment",
      "Targeted treatment planning based on the level and spread of activity",
      "Heat-treatment availability where applicable to the property and situation",
      "Clear preparation guidance before treatment day",
      "Follow-up recommendations and monitoring advice",
      "Furniture and mattress-related assistance where available",
      "Discreet service for residential, hotel, and multi-unit properties",
    ],
    faq: [
      {
        question: "Do I need to throw out my mattress or furniture?",
        answer:
          "Not necessarily. Many items can be treated successfully. We assess each situation during inspection and advise you before anything is discarded. Infested-furniture removal assistance is available where required.",
      },
      {
        question: "How should I prepare for a bed bug treatment?",
        answer:
          "We provide clear, written preparation guidance before your appointment, covering laundry, clutter, and access to affected rooms. Good preparation significantly improves treatment results.",
      },
    ],
  },
  {
    slug: "cockroach-control",
    name: "Cockroach Control",
    shortName: "Cockroaches",
    category: "pest",
    cardDescription:
      "Systematic cockroach programs for kitchens, multi-unit buildings, and commercial facilities, with monitoring and follow-up.",
    whoFor:
      "Apartments and multi-unit buildings, restaurants, healthcare facilities, and homes where cockroaches have been sighted or suspected.",
    warningSigns: [
      "Live cockroaches in kitchens or bathrooms, especially at night",
      "Small dark droppings resembling coffee grounds or pepper",
      "Egg casings in cupboards, behind appliances, or in drawer tracks",
      "A musty odour in heavily affected areas",
    ],
    approach: [
      "Infestation assessment and species identification",
      "Harbourage identification behind appliances, in voids, and around plumbing",
      "Targeted treatment focused on activity areas",
      "Multi-unit coordination when adjoining suites are affected",
      "Monitoring and follow-up visits as required",
      "Sanitation and prevention recommendations",
    ],
    faq: [
      {
        question: "My building has cockroaches — can you treat just my unit?",
        answer:
          "We can treat individual units, but in multi-unit buildings cockroaches often move between suites. Where possible, we coordinate with property management so adjoining units are assessed and the treatment holds.",
      },
    ],
  },
  {
    slug: "ant-control",
    name: "Ant Control",
    shortName: "Ants",
    category: "pest",
    cardDescription:
      "Trail-focused ant control for kitchens, bathrooms, and outdoor nesting areas — stopping activity at the source.",
    whoFor:
      "Homeowners and businesses seeing ant trails indoors, around sinks, or along foundations and patio edges.",
    warningSigns: [
      "Steady ant trails into kitchens, bathrooms, or food storage areas",
      "Clusters of ants around sinks, drains, or sticky residues",
      "Outdoor nesting mounds near foundations, walkways, or landscaping",
      "Seasonal indoor invasions after rain or temperature swings",
    ],
    approach: [
      "Species and trail identification",
      "Interior hotspot treatment and baiting where appropriate",
      "Exterior nest and perimeter management",
      "Sanitation and exclusion recommendations",
      "Follow-up guidance to reduce re-infestation risk",
    ],
    faq: [
      {
        question: "Are these carpenter ants or regular ants?",
        answer:
          "Carpenter ants are larger and can damage wood; common ants are usually food-seeking nuisances. We identify the species during inspection and recommend carpenter-ant treatment when structural risk is present.",
      },
    ],
  },
  {
    slug: "carpenter-ant-control",
    name: "Carpenter Ant Control",
    shortName: "Carpenter Ants",
    category: "pest",
    cardDescription:
      "Locate the colony, treat the source, and address the moisture conditions that attract carpenter ants to your structure.",
    whoFor:
      "Homeowners and commercial property owners noticing large black ants indoors, wood shavings, or activity around decks, siding, and roof lines.",
    warningSigns: [
      "Large black or dark-red ants indoors, especially in kitchens and bathrooms",
      "Fine, sawdust-like shavings near baseboards, window sills, or wooden structures",
      "Faint rustling sounds inside walls",
      "Winged ants emerging indoors in spring",
    ],
    approach: [
      "Locating ant activity, trails, and entry points around the structure",
      "Identifying moisture or structural conditions supporting the colony",
      "Targeted treatment of active areas and nest sites",
      "Nest and satellite-colony management",
      "Prevention recommendations to reduce the risk of re-infestation",
    ],
    faq: [
      {
        question: "Are carpenter ants as damaging as termites?",
        answer:
          "Carpenter ants excavate wood rather than eating it, so damage develops more slowly — but established colonies can still affect structural wood over time. Early treatment keeps the problem manageable.",
      },
    ],
  },
  {
    slug: "termite-control",
    name: "Termite Control",
    shortName: "Termites",
    category: "pest",
    cardDescription:
      "Advanced pre-construction and post-construction anti-termite treatments using infrared detection and eco-friendly heat options.",
    whoFor:
      "Homeowners, builders, and commercial property managers needing termite proofing or active colony eradication.",
    warningSigns: [
      "Mud tubes along foundations, crawl spaces, or basement walls",
      "Discarded wings near windowsills after a swarm",
      "Wood that sounds hollow when tapped",
      "Cracked or bubbling paint over damaged wood",
    ],
    approach: [
      "Infrared inspection to locate hidden nesting sites",
      "Pre-construction barriers for new builds",
      "Post-construction targeted eradication for active colonies",
      "Eco-friendly heat and safe treatment options where suitable",
      "Residential and commercial programs with minimal disruption",
    ],
    faq: [
      {
        question: "Do you offer both pre- and post-construction termite treatments?",
        answer:
          "Yes. We provide foundational termite proofing for new construction and targeted eradication for existing homes and commercial buildings.",
      },
    ],
  },
  {
    slug: "wasp-nest-removal",
    name: "Wasp & Nest Removal",
    shortName: "Wasps",
    category: "pest",
    cardDescription:
      "Safe assessment and removal of wasp nests from roof lines, decks, wall voids, and commercial exteriors.",
    whoFor:
      "Homeowners, businesses, schools, and property managers with visible nests or high wasp activity around entrances, decks, playgrounds, and patios.",
    warningSigns: [
      "A visible paper nest under eaves, decks, or in trees and shrubs",
      "Steady wasp traffic entering a gap in siding, soffits, or brickwork",
      "Increased wasp activity around doors, garbage areas, or patios",
    ],
    approach: [
      "Nest inspection and identification of the species and access points",
      "Safe treatment planning appropriate to the nest location",
      "Exterior and structural nest removal",
      "Prevention guidance to discourage re-nesting",
      "Residential and commercial assistance, including high-traffic areas",
    ],
    faq: [
      {
        question: "Can I knock a nest down myself?",
        answer:
          "We do not recommend it. Disturbing an active nest can provoke defensive stinging, particularly for nests in wall voids or high locations. Professional removal is safer for you and more effective.",
      },
    ],
  },
  {
    slug: "mice-rodent-control",
    name: "Mice & Rat Control",
    shortName: "Mice & Rats",
    category: "rodent",
    cardDescription:
      "Inspection, exclusion, and control programs that remove mice and rats and seal the entry points they used to get in.",
    whoFor:
      "Homes, restaurants, warehouses, multi-unit buildings, and commercial facilities experiencing droppings, gnawing, or nighttime activity.",
    warningSigns: [
      "Droppings along walls, in cupboards, or under sinks",
      "Gnaw marks on food packaging, wiring, or wood",
      "Scratching or scurrying sounds in walls and ceilings, especially at night",
      "Nesting material such as shredded paper or insulation",
    ],
    approach: [
      "Detailed interior and exterior inspection",
      "Entry-point identification around the foundation, utilities, and roof line",
      "A trapping or control strategy suited to the property and level of activity",
      "Exclusion recommendations to seal entry points",
      "Sanitation and prevention guidance",
      "Ongoing monitoring options for commercial and multi-unit properties",
    ],
    faq: [
      {
        question: "Why do mice or rats keep coming back?",
        answer:
          "Rodent problems usually persist because entry points remain open. Our approach pairs control with exclusion recommendations so the pathway into the building is addressed, not just the animals inside it.",
      },
    ],
  },
  {
    slug: "pigeon-control",
    name: "Pigeon & Bird Control",
    shortName: "Pigeon Control",
    category: "bird",
    cardDescription:
      "Humane pigeon control and exclusion — netting, deterrents, and proofing for roofs, ledges, balconies, and commercial structures.",
    whoFor:
      "Homeowners, strata councils, and businesses dealing with roosting pigeons, nesting on ledges, or recurring bird droppings.",
    warningSigns: [
      "Pigeons roosting on roofs, balconies, signs, or loading docks",
      "Accumulated droppings on walkways, HVAC units, or building façades",
      "Nests in eaves, attics, or equipment housings",
      "Noise and fouling that affects tenants or customers",
    ],
    approach: [
      "Site assessment of roosting and nesting pressure points",
      "Humane deterrent and exclusion planning (netting, spikes, proofing)",
      "Coordination with cleanup and disinfection when droppings are present",
      "Recommendations to prevent re-roosting after exclusion",
    ],
    faq: [
      {
        question: "Do you remove pigeons humanely?",
        answer:
          "Yes. Our focus is exclusion and deterrence that keep birds from roosting, rather than harmful methods. Cleanup of droppings can be scheduled alongside proofing work.",
      },
    ],
  },
  {
    slug: "droppings-cleanup",
    name: "Mice & Pigeon Droppings Cleanup",
    shortName: "Droppings Cleanup",
    category: "specialty",
    cardDescription:
      "Safe removal of mice and pigeon droppings with protective procedures and sanitizing of contaminated areas.",
    whoFor:
      "Properties with attic, crawl-space, balcony, or warehouse contamination after rodent or pigeon activity.",
    warningSigns: [
      "Visible droppings in attics, storage rooms, or mechanical areas",
      "Contaminated insulation or nesting debris",
      "Strong odours from long-term fouling",
      "Dusty droppings that may become airborne when disturbed",
    ],
    approach: [
      "Risk assessment and protective work practices",
      "Careful removal of droppings and contaminated materials where required",
      "Disinfection of affected surfaces",
      "Guidance on sealing and prevention after cleanup",
    ],
    faq: [
      {
        question: "Should I clean droppings myself?",
        answer:
          "Disturbing dried droppings can aerosolize particles. Professional cleanup uses appropriate PPE and procedures — especially important in attics and enclosed spaces.",
      },
    ],
  },
  {
    slug: "disinfection-services",
    name: "Disinfection Services",
    shortName: "Disinfection",
    category: "specialty",
    cardDescription:
      "Targeted disinfection for spaces affected by pests, droppings, or high-touch commercial areas that need sanitizing after treatment.",
    whoFor:
      "Homes, multi-unit buildings, and commercial sites needing sanitizing after rodent, bird, or insect activity — or as a standalone hygiene service.",
    warningSigns: [
      "Residual contamination after pest removal",
      "Odours linked to droppings or nesting areas",
      "High-traffic commercial spaces requiring scheduled sanitizing",
      "Sensitive environments where hygiene after treatment matters",
    ],
    approach: [
      "Assessment of areas requiring disinfection",
      "Application of suitable sanitizing methods for the environment",
      "Coordination with pest treatment or cleanup when needed",
      "Clear guidance on re-entry and follow-up",
    ],
    faq: [
      {
        question: "Is disinfection included with every pest treatment?",
        answer:
          "Not always. Many treatments focus on the pest itself. Droppings cleanup and disinfection can be added when contamination is present — ask when you request a quote.",
      },
    ],
  },
];

export const additionalServices = [
  {
    name: "K9 Bed Bug Inspection",
    description:
      "Trained canine detection to help confirm whether bed bugs are present before treatment decisions are made.",
  },
  {
    name: "Flea Control",
    description:
      "Targeted flea treatment for homes and pet-friendly properties, with preparation and prevention guidance.",
  },
  {
    name: "Bed Bug Preparation Assistance",
    description:
      "Hands-on help getting a property ready for treatment when occupants are unable to prepare on their own.",
  },
  {
    name: "Infested Furniture Removal",
    description:
      "Careful removal and disposal of infested furniture items where treatment is not practical.",
  },
  {
    name: "Moving Treatment",
    description:
      "Treatment options timed around a move so pests are not carried into the new property.",
  },
  {
    name: "Recurring Commercial Programs",
    description:
      "Monthly and quarterly service programs for businesses, property managers, and multi-unit buildings.",
  },
];

export const propertyTypes = [
  "Residential Homes",
  "Property Management",
  "Apartments & Multi-Unit Buildings",
  "Hotels & Motels",
  "Senior Residences",
  "Schools",
  "Healthcare Facilities",
  "Industrial & Commercial Buildings",
];

export const homeFaqs = [
  {
    question: "How quickly can you attend a property?",
    answer:
      "Response times depend on the pest, the location, and current scheduling, but we prioritize fast, discreet service and will give you a realistic timeframe when you contact us. Urgent situations are flagged for the earliest available appointment.",
  },
  {
    question: "Do you serve both homes and businesses?",
    answer:
      "Yes. We provide residential and commercial pest control, including apartments and multi-unit buildings, hotels and motels, senior residences, schools, healthcare facilities, and industrial properties.",
  },
  {
    question: "Are treatment options safe for children and pets?",
    answer:
      "We plan every treatment with families, pets, tenants, and staff in mind. We prioritize non-chemical or reduced-chemical methods where appropriate, use pest-control products registered for use in Canada only where needed, and provide clear instructions before re-entry when required.",
  },
  {
    question: "Do you offer one-time and recurring services?",
    answer:
      "Both. We offer one-time treatments as well as monthly and quarterly service plans, which are popular with businesses, property managers, and multi-unit buildings.",
  },
  {
    question: "Do you handle multi-unit properties?",
    answer:
      "Yes. We regularly work with property managers and landlords on apartments, condominiums, and other multi-unit buildings, and we coordinate with management when adjoining units need to be assessed.",
  },
  {
    question: "What information is needed for a quote?",
    answer:
      "The pest you are seeing (or a photo), the property type and approximate size, the areas affected, and your preferred timing. The more detail you can share, the more accurate our initial assessment will be.",
  },
  {
    question: "Is a warranty available?",
    answer:
      "Service warranty may be available for qualifying treatments. Coverage varies by pest, property, and treatment plan — we will explain exactly what applies to your situation before work begins.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We serve Alberta (Edmonton, Calgary, Fort McMurray, Red Deer, Lethbridge, and surrounding areas) and British Columbia (Vancouver, Victoria, and surrounding areas). Ask when you contact us if your community is nearby.",
  },
];

export function groupServicesByCategory<T extends { slug: string; category?: ServiceCategory }>(
  services: T[],
  options?: { coreOnly?: boolean },
): { category: ServiceCategory; label: string; items: T[] }[] {
  const list = options?.coreOnly === false ? services : filterCoreServices(services);
  const bySlug = new Map(primaryServices.map((s) => [s.slug, s.category]));
  const buckets = new Map<ServiceCategory, T[]>();
  for (const cat of serviceCategoryOrder) buckets.set(cat, []);

  for (const service of list) {
    const cat = (service.category as ServiceCategory | undefined) ?? bySlug.get(service.slug) ?? "pest";
    if (!buckets.has(cat)) continue;
    buckets.get(cat)!.push(service);
  }

  return serviceCategoryOrder
    .map((category) => ({
      category,
      label: serviceCategoryLabels[category],
      items: buckets.get(category) ?? [],
    }))
    .filter((g) => g.items.length > 0);
}
