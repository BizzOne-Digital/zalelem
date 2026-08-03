import type { PricingContent } from "@/types/cms";

/** Default structured pricing used by /pricing and admin Pricing tab. */
export const defaultPricingContent: PricingContent = {
  heroEyebrow: "Clear, Honest Pricing",
  heroTitle: "Bed Bug and General Pest Control Pricing",
  heroSubtitle: "Transparent, Competitive Rates for Effective Pest Management",
  heroDescription:
    "At our core, we believe in upfront honesty. You will never experience hidden fees, surprise surcharges, or vague estimates. The price we quote reflects the true cost of premium materials, certified expertise, and a meticulous job well done.",
  heroImage: "/images/pricing-2.png",
  honestyTitle: "Upfront Honesty, Long-Term Value.",
  honestyContent:
    "We focus on delivering long-term value, ensuring you receive complete peace of mind and total satisfaction for every dollar spent. The price we quote reflects premium materials, certified expertise, and a meticulous job well done—never hidden fees or vague estimates.",
  honestyImage: "/images/pricing-1.png",
  bedBugSectionTitle: "Bed Bug Eradication Services Prices",
  bedBugTreatments: [
    {
      id: "thermal",
      title: "Thermal Bed Bug Heat Treatment",
      priceRange: "$850 – $1,500+",
      note: "For average homes under 2,000 sq. ft.",
      intro:
        "This is our premier, eco-friendly solution and the gold standard in bed bug eradication. Using specialized, high-output industrial heaters, we raise the ambient temperature of your property to a level that is lethal to bed bugs but safe for your structure.",
      image: "/images/pricing-2.png",
      featured: true,
      bullets: [
        {
          label: "How it Works",
          text: "Industrial convection heaters circulate clean, dry heat throughout the structure, penetrating deep inside mattresses, walls, furniture, and baseboards.",
        },
        {
          label: "The Ultimate Benefit",
          text: "It eliminates all life stages of bed bugs—including adults, nymphs, and eggs—in a single day.",
        },
        {
          label: "Why It Is Recommended",
          text: "Zero chemical residue, minimal prep compared to traditional sprays, and immediate results.",
        },
        {
          label: "Pricing Factors",
          text: "Total cubic footage, layout complexity, and the volume of heavy furnishings.",
        },
      ],
    },
    {
      id: "aprehend",
      title: "Aprehend® Biopesticide Treatment",
      priceRange: "$350 – $850+",
      note: "Size & Property Dependent",
      intro:
        "This cutting-edge, non-toxic biological treatment utilizes the power of Beauveria bassiana fungal spores, a natural enemy of bed bugs. It provides long-lasting, strategic protection.",
      image: "/images/pricing-3.png",
      bullets: [
        {
          label: "How it Works",
          text: "A certified technician applies a precise perimeter barrier around beds, seating, and baseboards. When bed bugs cross this barrier, they carry the spores back to their hidden nesting colonies.",
        },
        {
          label: "The Ultimate Benefit",
          text: 'It creates a "domino effect" that wipes out the entire hidden population within days and provides up to 3 months of residual protection.',
        },
        {
          label: "Why Choose This",
          text: "Excellent for proactive management, lower upfront costs, and highly effective for early-stage infestations.",
        },
        {
          label: "Pricing Factors",
          text: "Number of rooms, total square footage, and property layout.",
        },
      ],
    },
    {
      id: "combination",
      title: "Dual-Action Combination Treatment",
      priceRange: "$450 – $850+",
      note: "Size & Property Dependent",
      intro:
        "This hybrid strategy blends the immediate knockdown power of traditional chemical treatments with the long-lasting residual defense of modern biopesticides or growth regulators.",
      image: "/images/pricing-4.png",
      bullets: [
        {
          label: "How it Works",
          text: "We target visible hot spots with immediate-contact agents while applying long-term residual barriers in structural voids to catch stragglers.",
        },
        {
          label: "The Ultimate Benefit",
          text: "It offers a balanced approach that tackles heavy infestations through multiple biological pathways, minimizing the risk of pesticide resistance.",
        },
        {
          label: "Why Choose This",
          text: "Ideal for properties with deep-rooted infestations where a multi-layered chemical and biological defense is required.",
        },
        {
          label: "Pricing Factors",
          text: "Severity of the infestation, number of heavily infested rooms, and property size.",
        },
      ],
    },
  ],
  comparisonTitle: "Compare Bed Bug Treatment Options",
  comparisonIntro:
    "A simple, direct comparison of the treatments to help you choose the best option.",
  comparisonRows: [
    {
      treatment: "Chemical",
      price: "$150 – $300",
      speed: "Slow (weeks)",
      bestFor: "Small budgets & early, localized bugs",
      highlight: false,
    },
    {
      treatment: "Thermal Heat",
      price: "$850 – $1,500",
      speed: "Fast (1 day)",
      bestFor: "Whole house & severe infestations",
      highlight: true,
    },
    {
      treatment: "Combination (IPM)",
      price: "$350 – $850",
      speed: "Varied",
      bestFor: "Maximum power using multiple methods",
      highlight: false,
    },
    {
      treatment: "Aprehend® Bio",
      price: "$450 – $850",
      speed: "Long-lasting",
      bestFor: "Prevention & final shield after heat",
      highlight: false,
    },
  ],
  keyDifferences: [
    {
      title: "Speed",
      text: "Heat kills all bugs and eggs in one day. Chemical requires multiple visits over several weeks.",
    },
    {
      title: "Coverage",
      text: "Heat penetrates deep into walls and mattresses. Chemical only works where the liquid is directly applied.",
    },
    {
      title: "Toxicity",
      text: "Aprehend® uses a natural fungus and is non-toxic. Chemical treatments use synthetic pesticides.",
    },
    {
      title: "Cost",
      text: "Chemical is the most budget-friendly upfront. Heat and combination treatments fix the problem faster.",
    },
  ],
  generalSectionTitle: "General Pest Control Pricing",
  generalPests: [
    {
      id: "mice",
      title: "Mice Control Services",
      priceRange: "$90 – $250+",
      note: "Size & Property Dependent",
      intro:
        "Effective rodent management requires strategy tailored to the layout of the structure. Multi-unit buildings demand comprehensive perimeters, while single-family homes focus on localized entry points.",
      image: "/images/pricing-5.png",
      bullets: [
        {
          label: "Multi-Unit Buildings & Condos",
          text: "Priced per unit or via commercial contract. Focuses on preventing cross-contamination between walls.",
        },
        {
          label: "Townhouses",
          text: "Mid-tier pricing. Treatment addresses shared firewall risks and common structural gaps.",
        },
        {
          label: "Detached Houses",
          text: "Priced strictly by square footage. Includes comprehensive interior baiting and exterior perimeter inspections.",
        },
        {
          label: "What Impacts the Price",
          text: "Total square footage, severity of the infestation, and the number of structural exclusion points needed.",
        },
      ],
    },
    {
      id: "cockroach",
      title: "Cockroach Control Services",
      priceRange: "$152 – $230+",
      note: "Size & Property Dependent",
      intro:
        "Cockroaches reproduce rapidly and hide in deep structural voids. Pricing reflects the intensive labor and specialized growth regulators required to break the breeding cycle.",
      image: "/images/pricing-6.png",
      bullets: [
        {
          label: "Apartments & Condos",
          text: "Entry-level pricing. Focuses on kitchen and bathroom plumbing hubs to stop movement between units.",
        },
        {
          label: "Townhouses & Single Houses",
          text: "Higher-tier pricing due to increased square footage and multiple food-source zones (basements, kitchens, dining areas).",
        },
        {
          label: "What Impacts the Price",
          text: "Number of rooms treated, level of sanitation, and whether a follow-up flush-out service is required.",
        },
      ],
    },
    {
      id: "ants",
      title: "Ant Control Services",
      priceRange: "$150 – $260+",
      note: "Size & Property Dependent",
      intro:
        "Ant infestations range from simple nuisance ants to structurally damaging Carpenter ants. Treatment involves localized baiting and extensive perimeter barriers.",
      image: "/images/pricing-7.png",
      bullets: [
        {
          label: "Apartments & Hotels",
          text: "Focuses on targeted interior baiting and localized chemical barriers around utility lines.",
        },
        {
          label: "Townhouses & Detached Houses",
          text: "Requires deep exterior perimeter spraying, lawn treatments, and interior nest tracking.",
        },
        {
          label: "What Impacts the Price",
          text: "The specific ant species (e.g., Pharaoh vs. Carpenter) and the total exterior perimeter footage.",
        },
      ],
    },
    {
      id: "wasps",
      title: "Wasp Control Services",
      priceRange: "$90 – $250+",
      note: "Infestation Dependent",
      intro:
        "Wasp removal is a high-risk service requiring specialized safety gear and rapid-knockdown professional materials to ensure immediate safety.",
      image: "/images/pricing-8.png",
      bullets: [
        {
          label: "Standard Nests",
          text: "Lower-end pricing for easily accessible nests on first-story eaves, porches, or low tree branches.",
        },
        {
          label: "Complex Infestations",
          text: "Higher-end pricing for hidden nests inside brick voids, soffits, attics, or at heights requiring specialized ladder work.",
        },
        {
          label: "What Impacts the Price",
          text: "Nest location, height, accessibility, and the specific equipment required for safe removal.",
        },
      ],
    },
  ],
  midBannerTitle: "Professional Treatment. Transparent Value.",
  midBannerCta: "Get My Quote Now",
  warrantiesTitle: "Our Care Warranties",
  warrantiesIntro:
    "At Pest Warriors we back our pest control services with robust, clear warranties. When you follow our recommended treatment protocols and preparation steps, your service is fully protected under our comprehensive care policy.",
  warranties: [
    {
      title: "Persistent Elimination Guarantee",
      text: "We provide complimentary return visits if targeted pests resurface during your warranty window.",
    },
    {
      title: "Root-Cause Resolution",
      text: "Our treatment strategies eliminate the source of the infestation rather than offering temporary fixes.",
    },
    {
      title: "Expert Preventative Guidance",
      text: "We equip you with explicit instructions to prepare your space and prevent future pest activity.",
    },
    {
      title: "Multi-Unit Integration",
      text: "Our protocols address adjacent spaces in multi-unit properties to stop pests from migrating.",
    },
  ],
  ctaTitle: "Not Sure Which Treatment Is Right for You?",
  ctaDescription:
    "Tell us about your property and pest concern—we'll recommend the clearest, most effective option with a transparent quote.",
  ctaImage: "/images/pricing-1.png",
};
