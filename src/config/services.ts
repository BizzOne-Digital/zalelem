/**
 * Service catalogue and FAQ content. Copy here is Calgary-agnostic where
 * possible; city-specific wording pulls from `siteConfig.location`.
 */

export type PrimaryService = {
  slug: string;
  name: string;
  shortName: string;
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
    slug: "carpenter-ant-control",
    name: "Carpenter Ant Control",
    shortName: "Carpenter Ants",
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
    slug: "wasp-nest-removal",
    name: "Wasp & Nest Removal",
    shortName: "Wasps",
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
    name: "Mice & Rodent Control",
    shortName: "Mice & Rodents",
    cardDescription:
      "Inspection, exclusion, and control programs that remove rodents and seal the entry points they used to get in.",
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
        question: "Why do mice keep coming back?",
        answer:
          "Rodent problems usually persist because entry points remain open. Our approach pairs control with exclusion recommendations so the pathway into the building is addressed, not just the animals inside it.",
      },
    ],
  },
  {
    slug: "cockroach-control",
    name: "Cockroach Control",
    shortName: "Cockroaches",
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
    slug: "spider-control",
    name: "Spider Control",
    shortName: "Spiders",
    cardDescription:
      "Reduce spider activity around your property with web removal, targeted treatment, and prevention guidance.",
    whoFor:
      "Homeowners and businesses noticing frequent webs, egg sacs, or spider activity around windows, basements, garages, and exterior lighting.",
    warningSigns: [
      "Frequent webs around windows, eaves, decks, and light fixtures",
      "Spiders appearing regularly in basements, garages, or storage areas",
      "Egg sacs in corners, window frames, or undisturbed spaces",
      "An increase in other insects, which attract spiders as prey",
    ],
    approach: [
      "Inspection to identify activity areas and contributing conditions",
      "Web and egg-sac removal from key areas",
      "Targeted treatment where activity is concentrated",
      "Reducing the insect prey that attracts spiders",
      "Prevention guidance for lighting, sealing, and storage",
    ],
    faq: [
      {
        question: "Are the spiders in my Calgary home dangerous?",
        answer:
          "Most spiders found in Alberta homes are nuisance species rather than a health concern. We identify what is present during inspection and recommend a treatment plan suited to the actual level of risk and activity.",
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
    name: "Pigeon & Bird Control",
    description:
      "Humane deterrent and exclusion options, including netting recommendations for ledges and structures.",
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
    name: "Vehicle Treatment",
    description:
      "Assessment and treatment options for personal and work vehicles affected by bed bugs or other pests.",
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
    question: "Which Calgary areas do you serve?",
    answer:
      "We serve Calgary along with Airdrie, Chestermere, Cochrane, and Okotoks. Nearby communities may also be available by request — just ask when you contact us.",
  },
];
