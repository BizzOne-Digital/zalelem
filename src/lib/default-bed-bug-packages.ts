import { defaultPricingContent } from "@/lib/default-pricing";

export type PackageTierId = "gold" | "silver" | "bronze";

export type BedBugPackageTier = {
  id: PackageTierId;
  tier: string;
  badge: string;
  treatmentId: string;
  title: string;
  priceRange: string;
  note: string;
  intro: string;
  image: string;
  bestFor: string;
  learnMoreHref: string;
  bullets: { label: string; text: string }[];
};

function treatmentById(id: string) {
  return defaultPricingContent.bedBugTreatments.find((t) => t.id === id)!;
}

const thermal = treatmentById("thermal");
const combination = treatmentById("combination");
const aprehend = treatmentById("aprehend");

export const bedBugPackageTiers: BedBugPackageTier[] = [
  {
    id: "gold",
    tier: "Gold",
    badge: "Premier · Same-day kill",
    treatmentId: thermal.id,
    title: thermal.title,
    priceRange: thermal.priceRange,
    note: thermal.note,
    intro: thermal.intro,
    image: thermal.image,
    bestFor: "Whole-home and severe infestations needing fast, chemical-free results",
    learnMoreHref: "/bed-bug-heat-treatment",
    bullets: thermal.bullets,
  },
  {
    id: "silver",
    tier: "Silver",
    badge: "Balanced multi-method",
    treatmentId: combination.id,
    title: combination.title,
    priceRange: combination.priceRange,
    note: combination.note,
    intro: combination.intro,
    image: combination.image,
    bestFor: "Heavy or resistant infestations needing knockdown plus residual defense",
    learnMoreHref: "/pricing",
    bullets: combination.bullets,
  },
  {
    id: "bronze",
    tier: "Bronze",
    badge: "Proactive & residual",
    treatmentId: aprehend.id,
    title: aprehend.title,
    priceRange: aprehend.priceRange,
    note: aprehend.note,
    intro: aprehend.intro,
    image: aprehend.image,
    bestFor: "Early-stage activity, prevention, or a lasting shield after heat",
    learnMoreHref: "/aprehend-bed-bugs",
    bullets: aprehend.bullets,
  },
];

export const packageComparisonRows = [
  {
    tier: "Gold",
    treatment: "Thermal Heat",
    price: "$850 – $1,500",
    speed: "Fast (1 day)",
    bestFor: "Whole house & severe infestations",
    highlight: true,
  },
  {
    tier: "Silver",
    treatment: "Combination (IPM)",
    price: "$350 – $850",
    speed: "Varied",
    bestFor: "Maximum power using multiple methods",
    highlight: false,
  },
  {
    tier: "Bronze",
    treatment: "Aprehend® Bio",
    price: "$350 – $850",
    speed: "Long-lasting",
    bestFor: "Prevention & residual protection",
    highlight: false,
  },
];
