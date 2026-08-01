import { homeFaqs, primaryServices } from "@/config/services";
import { siteConfig } from "@/config/site";
import type { CmsContent, EditablePage } from "@/types/cms";

const detailPages: EditablePage[] = [
  {
    slug: "about",
    title: "Eco Pest Control Calgary | Bed Bug Heat Treatment | Ecoheat",
    description:
      "Calgary’s trusted eco-friendly exterminator since 2010, providing professional chemical-free bed bug heat treatments and traditional pest control for homes and businesses.",
    heroTitle: "About EcoHeat Pest Control",
    heroDescription:
      "Calgary’s trusted eco-friendly exterminator since 2010, providing professional chemical-free bed bug heat treatments and traditional pest control for homes and businesses.",
    heroImage: siteConfig.images.about.src,
    sections: [
      {
        id: "story",
        title: "Our Story",
        content:
          "EcoHeat Pest Control is Alberta’s premier eco-friendly exterminator, founded in 2010 by Dr. Sharon Launouette to deliver safe, reliable, and affordable pest management.",
        image: siteConfig.images.about.src,
        bullets: [],
      },
      {
        id: "why-choose",
        title: "Why Choose Ecoheat?",
        content:
          "We specialize in safe, chemical-free solutions and deliver premium residential and commercial pest control across Calgary and surrounding areas.",
        image: siteConfig.images.about.src,
        bullets: [
          "Eco-Friendly First: We specialize in safe, chemical-free solutions and pioneered specialized bed bug heat treatments in Western Canada.",
          "Global Expertise: Our background with international pest control companies brings deep insight into successfully managing extreme infestations.",
          "Family-Owned Value: We treat your property like our own, offering premium residential and commercial services alongside DIY pest control products.",
          "Proven Experts: Serving Calgary & Edmonton surrounding area for 16 years.",
          "Eco-Friendly Options: Advanced chemical-free bed bug heat treatments.",
          "Full-Service Support: Tailored residential and commercial pest control.",
        ],
      },
    ],
  },
  {
    slug: "commercial",
    title: "Commercial Pest Control Alberta | EcoHeat Pest Control",
    description:
      "EcoHeat Pest Control provides expert commercial pest control and industrial pest management programs across Alberta. We specialize in serving Edmonton, Calgary, Lethbridge, Red Deer, Fort McMurray, and all surrounding areas.",
    heroTitle: "Commercial Pest Control Alberta",
    heroDescription:
      "Pests threaten your facility, safety, and brand reputation. We deliver specialized, budget-friendly pest management solutions for hotels, motels, work camps, senior living buildings, construction sites, long-term care homes, and retail locations.",
    heroImage: siteConfig.images.hero.src,
    sections: [
      {
        id: "overview",
        title: "Commercial & Industrial Pest Management",
        content:
          "EcoHeat Pest Control provides expert commercial pest control and industrial pest management programs across Alberta. We specialize in serving Edmonton, Calgary, Lethbridge, Red Deer, Fort McMurray, and all surrounding areas.",
        image: siteConfig.images.hero.src,
        bullets: [],
      },
      {
        id: "services",
        title: "Our Commercial Pest Management Services",
        content:
          "From small local shops to large industrial complexes, our licensed team protects your business. We custom-fit our treatments to your structural needs and strict compliance requirements.",
        image: siteConfig.images.hero.src,
        bullets: [
          "Targeted Pest Elimination: Fast, permanent removal of public health pests including bed bugs, cockroaches, ants, carpenter ants, mice, spiders, wasps, termites, hornets and much more.",
          "Rodent Control Programs: Advanced baiting, trapping, and exclusion work to stop mice and rats from entering your facility.",
          "Bird Control & Exclusion: Professional pigeon netting, spiking, and deterrence to protect your building's exterior and roof.",
          "Biohazard Cleanup & Disinfection: Expert sanitization and safe removal of hazardous bird droppings and rodent feces.",
        ],
      },
      {
        id: "industry-solutions",
        title: "Specialized Industry Solutions",
        content:
          "Different industries face unique structural vulnerabilities and strict regulatory standards. We customize our commercial pest control protocols to keep you compliant and operational.",
        image: siteConfig.images.about.src,
        bullets: [],
      },
      {
        id: "hospitality",
        title: "Hospitality & Lodging (Hotels, Motels & Work Camps)",
        content:
          "Discreet, rapid-response commercial pest control built for guest-facing and high-occupancy properties.",
        image: siteConfig.images.hero.src,
        bullets: [
          "Discreet Bed Bug Elimination: Rapid-response thermal heat treatments and chemical solutions that protect your guest ratings.",
          "Camp Infrastructure Protection: High-volume pest management built to secure remote work camps from rodents and wildlife.",
        ],
      },
      {
        id: "senior-care",
        title: "Senior Living Buildings & Long-Term Care Homes",
        content:
          "Low-impact protocols designed for sensitive healthcare and residential care environments.",
        image: siteConfig.images.about.src,
        bullets: [
          "Low-Impact Eco-Treatments: Ultra-safe, low-toxicity pest control methods tailored for sensitive healthcare environments.",
          "Proactive Monitoring: Continuous monitoring loops to catch infestations before they affect patients or residents.",
        ],
      },
      {
        id: "construction-industrial",
        title: "Construction Sites & Industrial Facilities",
        content:
          "Prevention and long-term monitoring for construction, warehouses, and manufacturing sites.",
        image: siteConfig.images.hero.src,
        bullets: [
          "Pre-Construction Prevention: Vector control setups that prevent displacement infestations during excavation.",
          "Heavy-Industrial Maintenance: Rugged, long-term monitoring networks for vast warehouses and manufacturing plants in northern and central Alberta.",
        ],
      },
      {
        id: "service-areas",
        title: "Regional Service Areas Across Alberta",
        content:
          "We offer fast emergency response times and routine maintenance routes throughout Alberta’s major economic corridors.",
        image: "/images/pest-warriors-service-map.webp",
        bullets: [
          "Edmonton Capital Region: Including Sherwood Park, St. Albert, Spruce Grove, Stony Plain, Leduc, and Nisku.",
          "Calgary Metropolitan Region: Including Airdrie, Cochrane, Okotoks, and Chestermere.",
          "Red Deer & Central Alberta: Serving businesses throughout the Queen Elizabeth II highway corridor.",
          "Lethbridge & Southern Alberta: Comprehensive pest management for southern hospitality and retail sectors.",
          "Fort McMurray & Wood Buffalo: Specialized industrial and camp pest management for the northern sectors.",
        ],
      },
    ],
  },
  {
    slug: "bed-bug-heat-treatment",
    title:
      "Professional Bed Bug Heat Treatment Services in Calgary & Edmonton",
    description:
      "Eco-Friendly Thermal Remediation for Absolute Pest Elimination. Chemical-free bed bug heat treatment across Calgary, Edmonton, and surrounding areas.",
    heroTitle:
      "Professional Bed Bug Heat Treatment Services in Calgary & Edmonton",
    heroDescription:
      "Eco-Friendly Thermal Remediation for Absolute Pest Elimination. Are you struggling with a bed bug infestation? Traditional chemical treatments can be stressful, slow, and disruptive. Ecoheat Pest Control offers a superior alternative.",
    heroImage: siteConfig.images.hero.src,
    sections: [
      {
        id: "overview",
        title: "Advanced Bed Bug Heat Treatment (Thermal Remediation)",
        content:
          "Our advanced Bed Bug Heat Treatment (Thermal Remediation) penetrates every corner of your home. We safely eliminate bed bugs in a single, chemical-free service.\n\nWe proudly serve Calgary, Edmonton, and all surrounding areas. Our team delivers a safe, discreet, and permanent solution to protect your family and property.",
        image: siteConfig.images.hero.src,
        bullets: [],
      },
      {
        id: "safe-for-family",
        title: "100% Safe for Vulnerable Family Members",
        content:
          "Traditional pesticides leave chemical residues that can linger for weeks. Our thermal treatment is completely chemical-free and non-toxic. It is the safest choice for households with:",
        image: siteConfig.images.about.src,
        bullets: [
          "Newborns and infants",
          "Pregnant individuals",
          "Elderly family members",
          "Anyone with chemical sensitivities or respiratory issues",
          "Beloved household pets",
        ],
      },
      {
        id: "all-life-stages",
        title: "Kills All Life Stages—Including Eggs",
        content:
          "Chemical treatments often fail because they only kill adult bugs. This leaves eggs behind to hatch and restart the infestation. Our high-temperature process destroys bed bugs at every stage of life.",
        image: siteConfig.images.hero.src,
        bullets: [
          "Eradicates adult bed bugs instantly",
          "Destroys nymphs (juveniles)",
          "Lethally penetrates and kills bed bug eggs",
          "Guarantees a one-time treatment success",
        ],
      },
      {
        id: "reaches-hiding-spots",
        title: "Reaches Cracks, Crevices, and Electronics",
        content:
          "Bed bugs are experts at hiding where liquids and powders cannot reach. Heat expands and flows into every microscopic hiding spot. Our thermal method safely penetrates:",
        image: siteConfig.images.about.src,
        bullets: [
          "Deep inside electronics (TVs, computers, outlets)",
          "Mattress cores and box springs",
          "Baseboards, wall voids, and floorboards",
          "Deep cracks and crevices in furniture",
        ],
      },
      {
        id: "minimal-prep",
        title: "Minimal Preparation & Zero Furniture Loss",
        content:
          "Traditional chemical spraying requires weeks of bagging clothes and exhausting laundry cycles. Worse, many companies force you to throw away expensive furniture. With Ecoheat's thermal remediation:",
        image: siteConfig.images.hero.src,
        bullets: [
          "No need to discard furniture or mattresses",
          "Minimal preparation required by the homeowner",
          "No tedious, repetitive laundry cycles",
          "No multiple evacuations of your home over several weeks",
        ],
      },
      {
        id: "technology",
        title: "Our Cutting-Edge Thermal Technology",
        content:
          "At Ecoheat Pest Control, we never compromise on safety or power. We use top-tier, certified thermal remediation systems from industry leaders like Quest and Heat Assault.\n\nWhy Our System is Superior:",
        image: siteConfig.images.about.src,
        bullets: [
          "Zero Fire Risk: Advanced engineering eliminates the fire hazards of standard propane heaters.",
          "Zero Electrical Risks: Controlled, self-contained power prevents household electrical overloads.",
          "Uniform Heat Distribution: High-powered fans circulate heat evenly to prevent “cool spots” where bugs could hide.",
          "Rapid Ambient Heating: Reaches lethal target temperatures quickly, reducing the time you need to be away from home.",
        ],
      },
      {
        id: "service-areas",
        title: "Serving Calgary, Edmonton, and Surrounding Communities",
        content:
          "We provide fast, responsive, and professional bed bug heat treatments across Alberta.",
        image: "/images/pest-warriors-service-map.webp",
        bullets: [
          "Calgary Region: Calgary, Airdrie, Cochrane, Chestermere, Okotoks, High River, and Strathmore.",
          "Edmonton Region: Edmonton, Sherwood Park, St. Albert, Spruce Grove, Stony Plain, Leduc, and Fort Saskatchewan.",
        ],
      },
      {
        id: "cta",
        title: "Contact Alberta’s Bed Bug Experts Today",
        content:
          "Do not live with the stress of bed bugs for another night. Get a permanent, safe, and chemical-free solution with Ecoheat Pest Control.",
        image: siteConfig.images.hero.src,
        bullets: [],
      },
    ],
  },
  {
    slug: "how-heat-treatment-works",
    title: "How Heat Treatment Works | Professional Bed Bug Heat Treatment",
    description:
      "Complete bed bug elimination in Calgary & Edmonton. Our advanced thermal process kills all bed bug life stages, including eggs, in a single day.",
    heroTitle: "Professional Bed Bug Heat Treatment",
    heroDescription:
      "We provide absolute bed bug elimination across Calgary and Edmonton. Our advanced thermal process kills all bed bug life stages, including eggs, in a single day.",
    heroImage: siteConfig.images.hero.src,
    sections: [
      {
        id: "why-thermal",
        title: "Why Choose Our Thermal Process?",
        content:
          "Our thermal process is designed for total elimination with safety and eco-friendly results.",
        image: siteConfig.images.hero.src,
        bullets: [
          "100% Fire-Safe: Unlike dangerous propane heaters, our system uses a contained, customized, and professionally designed heating system with zero fire risk.",
          "Total Elimination: Heat penetrates deep into walls, mattresses, and furniture where sprays cannot reach.",
          "Eco-Friendly: A powerful, non-toxic alternative to chemical treatments.",
        ],
      },
      {
        id: "equipment",
        title: "Industry-Leading Equipment",
        content:
          "We bring elite, commercial-grade technology directly to your property:",
        image: siteConfig.images.about.src,
        bullets: [
          "Heat Assault: A fully contained, high-output heating system engineered for rapid lethal temperature deployment.",
          "Quest Bed Bug Heaters: Precision-engineered electric systems that distribute uniform, high-velocity airflow.",
        ],
      },
      {
        id: "process-steps",
        title: "Our Step-by-Step Process",
        content:
          "Every treatment follows a controlled process to ensure lethal temperatures are reached and held throughout the property.",
        image: siteConfig.images.hero.src,
        bullets: [
          "1. Targeted Setup: We place specialized heating units strategically inside your home.",
          "2. Continuous Monitoring: Technicians use remote sensors to ensure every corner reaches the critical bed bug killing zone (48°C to 54°C).",
          "3. Lethal Heat Maintenance: We hold the target temperature for several hours to guarantee a 100% kill rate of all bugs and hidden eggs.",
        ],
      },
      {
        id: "why-it-works",
        title: "Why Our Process Works",
        content:
          "Complete Bed Bug Elimination in Calgary & Edmonton. Our advanced thermal process kills all bed bug life stages—including eggs—in a single day.",
        image: siteConfig.images.about.src,
        bullets: [
          "100% Fire-Safe: We use a customized, professionally designed system with zero fire risk.",
          "Total Penetration: Heat forces its way deep into walls and mattresses where sprays fail.",
          "Continuous Monitoring: Technicians use remote sensors to ensure every corner reaches the lethal killing zone.",
        ],
      },
      {
        id: "prep-electronics",
        title: "Required Home Preparation — Electronics & Plastics",
        content:
          "To ensure a successful treatment, please complete these steps before our team arrives:",
        image: siteConfig.images.hero.src,
        bullets: [
          "Unplug all electronics: Disconnect TVs, computers, and appliances from wall outlets.",
          "Remove heat-sensitive items: Take out vinyl blinds, oil paintings, and soft plastics.",
        ],
      },
      {
        id: "prep-flammable",
        title: "Required Home Preparation — Pressurized & Flammable Items",
        content:
          "Clear pressurized and flammable items from treatment areas before our arrival.",
        image: siteConfig.images.about.src,
        bullets: [
          "Clear out aerosols: Remove hairspray, spray paint, and deodorant cans.",
          "Remove ammunition: Take out all firearms, ammunition, and lighters.",
        ],
      },
      {
        id: "prep-food",
        title: "Required Home Preparation — Food & Medications",
        content:
          "Protect medications and heat-sensitive food items during treatment.",
        image: siteConfig.images.hero.src,
        bullets: [
          "Protect medications: Place vitamins and prescription drugs in the refrigerator.",
          "Secure melting food: Put chocolate, candies, and wax candles in the fridge.",
        ],
      },
      {
        id: "guarantee",
        title: "Our 1-Year Guarantee",
        content:
          "We are completely confident in what we do. Every heat treatment comes backed by an industry-leading 1-Year Warranty. If the bed bugs return, so do we—at absolutely no extra cost to you.",
        image: siteConfig.images.about.src,
        bullets: [],
      },
      {
        id: "service-areas",
        title:
          "Complete Bed Bug Elimination in Calgary, Edmonton & Surrounding Areas",
        content:
          "Our advanced thermal process kills all bed bug life stages—including eggs—in a single day. We proudly serve the major metropolitan regions and all surrounding communities, including:",
        image: "/images/pest-warriors-service-map.webp",
        bullets: [
          "Calgary Region: Airdrie, Cochrane, Okotoks, Chestermere, and Strathmore.",
          "Edmonton Region: Sherwood Park, St. Albert, Spruce Grove, Stony Plain, and Leduc.",
        ],
      },
    ],
  },
  {
    slug: "aprehend-bed-bugs",
    title: "Aprehend® Bed Bug Treatment | Professional Biological Pest Control",
    description:
      "Aprehend® Bed Bug Treatment: Greater Calgary & Edmonton regional solution. A modern, biological, non-toxic bed bug treatment with up to 3 months of continuous protection.",
    heroTitle: "Aprehend® Bed Bug Treatment: The Modern, Biological Solution",
    heroDescription:
      "Aprehend® is a highly effective, modern biological treatment specifically designed to eliminate bed bug infestations. It works completely differently than traditional chemical sprays, offering a long-term, non-toxic solution to your pest problems.",
    heroImage: siteConfig.images.hero.src,
    sections: [
      {
        id: "regional",
        title: "Greater Calgary & Edmonton Regional Solution",
        content:
          "Professional Aprehend® bed bug treatment for homes and properties across the greater Calgary and Edmonton regions.",
        image: siteConfig.images.hero.src,
        bullets: [],
      },
      {
        id: "how-it-works",
        title: "How Aprehend Works",
        content:
          "Unlike synthetic chemical pesticides that kill bugs on contact, Aprehend is a biopesticide made from a naturally occurring fungus called Beauveria bassiana.",
        image: siteConfig.images.about.src,
        bullets: [
          "The Trap: A pest professional sprays a narrow, invisible 2-inch barrier around your bed frame, box spring, and baseboards.",
          "The Transfer: When a bed bug crawls across this barrier to find a meal, microscopic fungal spores stick to its body like wet sand.",
          "The Colony Kill: The infected bug walks back to its hidden nesting area and rubs against other bugs, spreading the fungus throughout the entire colony.",
          "The Result: The fungus germinates and safely kills the bed bugs within 4 to 10 days, providing ongoing protection for up to 3 months.",
        ],
      },
      {
        id: "advantages",
        title: "Key Customer Advantages",
        content:
          "Choosing Aprehend® offers significant benefits over traditional chemical extermination methods:",
        image: siteConfig.images.hero.src,
        bullets: [
          "Destroys Hidden Colonies: Eliminates the bed bugs you cannot see by using infected bugs to carry the treatment back to their secret nesting areas.",
          "Chemical-Free Peace of Mind: Uses a natural, non-toxic fungal biopesticide instead of harsh, synthetic chemical sprays inside your home.",
          "Three Months of Continuous Protection: Keeps working long after application, protecting your home against missed bugs or new introductions for up to 90 days.",
          "Zero Chemical Resistance: Prevents bugs from building immunity, a major issue with traditional chemical sprays that often fail.",
          "Minimal Home Preparation: Requires very little prep work from you compared to traditional treatments, saving you hours of stressful packing and cleaning.",
          "Odourless and Invisible: Leaves no unpleasant chemical smells or unsightly residue on your furniture, baseboards, or bedding.",
        ],
      },
      {
        id: "fact-check",
        title: "Fact-Checking the Claims: What You Need to Know",
        content:
          "Clear expectations help you prepare correctly and stay safe during treatment.",
        image: siteConfig.images.about.src,
        bullets: [
          "No Vacating Required? False. You must vacate the premises during the application and remain away for a minimum of 4 hours until the spray completely dries. This prevents anyone from breathing in the fine airborne mist while it is being applied.",
          "No Preparation Necessary? Mostly True. It requires “minimal prep” rather than “no prep”. You do not have to empty your dressers, bag all your clean clothes, or move heavy furniture. However, you must strip the bedding to launder it on high heat and clear clutter off the floor so the technician can access the baseboards.",
          "Safe for Chemical Sensitivity? True. Because it is non-toxic, biological, and contains no harsh chemical insecticides, it is an excellent choice for individuals sensitive to traditional chemicals. It is entirely odorless.",
          "Safe for Elderly, Newborns & Pregnancy? True (With Caution). Once the product dries completely after 4 hours, it is entirely non-toxic and safe for vulnerable individuals. However, official safety protocols dictate that pregnant women, newborns, and those with severe respiratory issues should consult a physician and consider waiting a bit longer before re-entering.",
        ],
      },
      {
        id: "prep-checklist",
        title: "The “Minimal Prep” Checklist",
        content:
          "Before the technician arrives to apply Aprehend, you only need to complete these basic steps:",
        image: siteConfig.images.hero.src,
        bullets: [
          "Strip the bed: Remove all sheets, pillowcases, and blankets.",
          "High-heat laundry: Wash and dry the bedding on the highest heat setting for at least 40 minutes to kill any bugs actively on the sheets.",
          "Clear the floors: Pick up items, toys, and clutter from the floors and from directly under the bed.",
          "Protect pets: Remove pets from the home for 4 hours, cover fish tanks, and turn off air filters during spraying.",
        ],
      },
    ],
  },
  {
    slug: "pricing",
    title: "Bed Bug and General Pest Control Pricing",
    description:
      "Transparent, competitive rates for effective pest management. Upfront honesty with no hidden fees—bed bug heat treatment, Aprehend, combination treatments, and general pest control pricing.",
    heroTitle: "Bed Bug and General Pest Control Pricing",
    heroDescription:
      "Transparent, Competitive Rates for Effective Pest Management. At our core, we believe in upfront honesty. You will never experience hidden fees, surprise surcharges, or vague estimates. The price we quote reflects the true cost of premium materials, certified expertise, and a meticulous job well done.",
    heroImage: siteConfig.images.hero.src,
    sections: [
      {
        id: "intro",
        title: "Upfront Honesty. Long-Term Value.",
        content:
          "We focus on delivering long-term value, ensuring you receive complete peace of mind and total satisfaction for every dollar spent.",
        image: "/images/pricing-1.png",
        bullets: [],
      },
      {
        id: "thermal",
        title: "Thermal Bed Bug Heat Treatment (Number 1 Recommended)",
        content:
          "Price Range: $850 – $1,500+ (For average homes under 2,000 sq. ft.)\n\nThis is our premier, eco-friendly solution and the gold standard in bed bug eradication. Using specialized, high-output industrial heaters, we raise the ambient temperature of your property to a level that is lethal to bed bugs but safe for your structure.",
        image: "/images/pricing-2.png",
        bullets: [
          "How it Works: Industrial convection heaters circulate clean, dry heat throughout the structure, penetrating deep inside mattresses, walls, furniture, and baseboards.",
          "The Ultimate Benefit: It eliminates all life stages of bed bugs—including adults, nymphs, and eggs—in a single day.",
          "Why It Is Recommended: Zero chemical residue, minimal prep compared to traditional sprays, and immediate results.",
          "Pricing Factors: Total cubic footage, layout complexity, and the volume of heavy furnishings.",
        ],
      },
      {
        id: "aprehend",
        title: "Aprehend® Biopesticide Treatment",
        content:
          "Price Range: $350 – $850+ (Size & Property Dependent)\n\nThis cutting-edge, non-toxic biological treatment utilizes the power of Beauveria bassiana fungal spores, a natural enemy of bed bugs. It provides long-lasting, strategic protection.",
        image: "/images/pricing-3.png",
        bullets: [
          "How it Works: A certified technician applies a precise perimeter barrier around beds, seating, and baseboards. When bed bugs cross this barrier, they carry the spores back to their hidden nesting colonies.",
          "The Ultimate Benefit: It creates a “domino effect” that wipes out the entire hidden population within days and provides up to 3 months of residual protection.",
          "Why Choose This: Excellent for proactive management, lower upfront costs, and highly effective for early-stage infestations.",
          "Pricing Factors: Number of rooms, total square footage, and property layout.",
        ],
      },
      {
        id: "combination",
        title: "Dual-Action Combination Treatment",
        content:
          "Price Range: $450 – $850+ (Size & Property Dependent)\n\nThis hybrid strategy blends the immediate knockdown power of traditional chemical treatments with the long-lasting residual defense of modern biopesticides or growth regulators.",
        image: "/images/pricing-4.png",
        bullets: [
          "How it Works: We target visible hot spots with immediate-contact agents while applying long-term residual barriers in structural voids to catch stragglers.",
          "The Ultimate Benefit: It offers a balanced approach that tackles heavy infestations through multiple biological pathways, minimizing the risk of pesticide resistance.",
          "Why Choose This: Ideal for properties with deep-rooted infestations where a multi-layered chemical and biological defense is required.",
          "Pricing Factors: Severity of the infestation, number of heavily infested rooms, and property size.",
        ],
      },
      {
        id: "comparison-notes",
        title: "Key Differences",
        content:
          "Here is a simple, direct comparison of the treatments to help you choose the best option.",
        image: siteConfig.images.about.src,
        bullets: [
          "Speed: Heat kills all bugs and eggs in one day. Chemical requires multiple visits over several weeks.",
          "Coverage: Heat penetrates deep into walls and mattresses. Chemical only works where the liquid is directly applied.",
          "Toxicity: Aprehend® uses a natural fungus and is non-toxic. Chemical treatments use synthetic pesticides.",
          "Cost: Chemical is the most budget-friendly upfront. Heat and combination treatments have a higher upfront cost but fix the problem faster.",
        ],
      },
      {
        id: "mice",
        title: "Mice Control Services",
        content:
          "Price Range: $90 – $250+ (Size & Property Dependent)\n\nEffective rodent management requires strategy tailored to the layout of the structure. Multi-unit buildings demand comprehensive perimeters, while single-family homes focus on localized entry points.",
        image: "/images/pricing-5.png",
        bullets: [
          "Multi-Unit Buildings & Condos: Priced per unit or via commercial contract. Focuses on preventing cross-contamination between walls.",
          "Townhouses: Mid-tier pricing. Treatment addresses shared firewall risks and common structural gaps.",
          "Detached Houses: Priced strictly by square footage. Includes comprehensive interior baiting and exterior perimeter inspections.",
          "What Impacts the Price: Total square footage, severity of the infestation, and the number of structural exclusion points needed.",
        ],
      },
      {
        id: "cockroach",
        title: "Cockroach Control Services",
        content:
          "Price Range: $152 – $230+ (Size & Property Dependent)\n\nCockroaches reproduce rapidly and hide in deep structural voids. Pricing reflects the intensive labor and specialized growth regulators required to break the breeding cycle.",
        image: "/images/pricing-6.png",
        bullets: [
          "Apartments & Condos: Entry-level pricing. Focuses on kitchen and bathroom plumbing hubs to stop movement between units.",
          "Townhouses & Single Houses: Higher-tier pricing due to increased square footage and multiple food-source zones (basements, kitchens, dining areas).",
          "What Impacts the Price: Number of rooms treated, level of sanitation, and whether a follow-up flush-out service is required.",
        ],
      },
      {
        id: "ants",
        title: "Ant Control Services",
        content:
          "Price Range: $150 – $260+ (Size & Property Dependent)\n\nAnt infestations range from simple nuisance ants to structurally damaging Carpenter ants. Treatment involves localized baiting and extensive perimeter barriers.",
        image: "/images/pricing-7.png",
        bullets: [
          "Apartments & Hotels: Focuses on targeted interior baiting and localized chemical barriers around utility lines.",
          "Townhouses & Detached Houses: Requires deep exterior perimeter spraying, lawn treatments, and interior nest tracking.",
          "What Impacts the Price: The specific ant species (e.g., Pharaoh vs. Carpenter) and the total exterior perimeter footage.",
        ],
      },
      {
        id: "wasps",
        title: "Wasp Control Services",
        content:
          "Price Range: $90 – $250+ (Infestation Dependent)\n\nWasp removal is a high-risk service requiring specialized safety gear and rapid-knockdown professional materials to ensure immediate safety.",
        image: "/images/pricing-8.png",
        bullets: [
          "Standard Nests: Lower-end pricing for easily accessible nests on first-story eaves, porches, or low tree branches.",
          "Complex Infestations: Higher-end pricing for hidden nests inside brick voids, soffits, attics, or at heights requiring specialized ladder work.",
          "What Impacts the Price: Nest location, height, accessibility, and the specific equipment required for safe removal.",
        ],
      },
      {
        id: "warranties",
        title: "Our Core Warranties",
        content:
          "At Ecoheat Pest Control we back our pest control services with robust, clear warranties. When you follow our recommended treatment protocols and preparation steps, your service is fully protected under our comprehensive care policy.",
        image: siteConfig.images.hero.src,
        bullets: [
          "Persistent Elimination Guarantee: We provide complimentary return visits if targeted pests resurface during your warranty window.",
          "Root-Cause Resolution: Our treatment strategies eliminate the source of the infestation rather than offering temporary fixes.",
          "Expert Preventative Guidance: We equip you with explicit instructions to prepare your space and prevent future pest activity.",
          "Multi-Unit Integration: Our protocols address adjacent spaces in multi-unit properties to stop pests from migrating.",
        ],
      },
    ],
  },
  {
    slug: "calgary",
    title: "EcoHeat Pest Control Calgary | Eco-Friendly Pest Control",
    description:
      "EcoHeat Pest Control Calgary is your trusted choice for professional, reliable, and eco-friendly pest control in Calgary and surrounding communities. Specialists in IPM and 100% chemical-free bed bug heat treatments.",
    heroTitle: "EcoHeat Pest Control Calgary",
    heroDescription:
      "Your trusted choice for professional, reliable, and eco-friendly pest control in Calgary and surrounding communities. We specialize in Integrated Pest Management (IPM), combining advanced chemical-free solutions with targeted, minimal pesticide treatments only when necessary.",
    heroImage: siteConfig.images.hero.src,
    sections: [
      {
        id: "intro",
        title: "Calgary’s Original Chemical-Free Bed Bug Heat Pioneers",
        content:
          "As Calgary’s original pioneers of 100% chemical-free bed bug heat treatments, we bring unmatched international experience to every job. Operating in Canada and internationally, we have dealt with the absolute worst pest infestations across different regions. This global exposure gives us a deep understanding of pest biology, habits, and resistance patterns, allowing us to implement the most effective extermination strategies available today.\n\nWe offer completely toxicity-free solutions, especially for the elderly, newborns, and pregnant individuals. For anybody sensitive to chemicals, we customize our treatments to target only the pests, protecting your loved ones.",
        image: siteConfig.images.about.src,
        bullets: [],
      },
      {
        id: "why-trust",
        title: "Why Calgary Homeowners Trust EcoHeat Pest Control",
        content:
          "EcoHeat Pest Control Calgary offers expert, eco-friendly pest extermination in Calgary and surrounding areas.",
        image: siteConfig.images.hero.src,
        bullets: [
          "1-Year Written Warranty: Complete protection ensures your property stays pest-free long after we leave.",
          "Money-Back Guarantee: Honest, results-driven service backed by a genuine satisfaction policy.",
          "Maximum Discretion: Unmarked vehicles and equipment protect your privacy in the neighborhood.",
          "Global Expertise: International experience solving complex pesticide-resistance patterns.",
          "Integrated Pest Management: Smart strategies that minimize chemical use while maximizing results.",
          "Local Experts: Trusted pest control serving Calgary and surrounding communities.",
          "Eco-Friendly IPM: Integrated Pest Management prioritizes chemical-free solutions.",
          "Licensed Professionals: Fully certified technicians ensuring safe, long-lasting results.",
        ],
      },
      {
        id: "core-services",
        title: "Professional Pest Control Services in Calgary",
        content:
          "Core Pest Control Services delivers industry-leading, highly effective pest management solutions for residential and commercial properties in Calgary. Our professional treatments combine advanced technology with environmentally conscious methods to guarantee a safe and pest-free environment.",
        image: siteConfig.images.about.src,
        bullets: [
          "Bed Bug Thermal Heat Treatment: Employs 100% chemical-free thermal processes. Safely eliminates infestations in a single day. Penetrates deep into structures to kill all life stages.",
          "Aprehend® Biotreatments: Utilizes a highly effective non-chemical biopesticide alternative. Allows occupants to remain safely at home during treatment. Provides a long-lasting barrier against bed bug activity.",
          "General Insect Extermination: Delivers rapid eradication of carpenter ants, cockroaches, and wasp nests. Employs targeted strategies based on specific insect behaviors. Prevents future structural damage and health hazards.",
          "Rodent & Mice Control: Provides complete removal of mice and rats. Deploys strategic baiting and trapping systems safely. Conducts structural entry-point exclusion to prevent re-entry.",
          "Pigeon Control & Property Proofing: Installs humane deterrents like netting and spikes. Offers comprehensive attic and balcony dropping cleanup. Restores sanitation and protects structures from corrosive waste.",
        ],
      },
      {
        id: "vehicle",
        title: "Specialized Vehicle Bed Bug Prevention Treatment",
        content:
          "Vehicles are highly susceptible to hitchhiking pests from luggage, clothing, and passengers. Our professional vehicle prevention treatment safeguards your car, truck, or fleet against infestations.",
        image: siteConfig.images.hero.src,
        bullets: [
          "Targeted Application: Focuses on high-risk zones like fabric seats, carpets, floor mats, and trunk spaces.",
          "Thermal or Bio-Barrier Options: Adapts our proven residential technology safely to automotive interiors.",
          "Proactive Defense: Creates a protective shield that eradicates incoming bed bugs before they can establish.",
          "Rapid Turnaround: Minimized downtime ensures your vehicle is safe to drive shortly after application.",
        ],
      },
      {
        id: "communities",
        title: "Calgary & Surrounding Commuter Communities",
        content:
          "We proudly provide industry-leading pest control and 100% effective bed bug heat treatments throughout Calgary and all surrounding commuter communities. Whether you manage a commercial warehouse in Balzac, live on a sprawling acreage in Springbank or Bearspaw, or run a household in Airdrie, Cochrane, Chestermere, or Okotoks, our local technicians are just a phone call away.",
        image: "/images/pest-warriors-service-map.webp",
        bullets: [
          "Airdrie: Proactive pest elimination and thermal bed bug removal for north Calgary's largest commuter city.",
          "Cochrane: Specialized residential and commercial pest management along the scenic Bow River valley.",
          "Chestermere: Effective spider, rodent, and thermal bed bug solutions for lakefront and residential properties.",
          "Okotoks: Premium, eco-friendly pest control servicing families and businesses across the Sheep River region.",
          "Strathmore: Comprehensive structural pest control and extermination services customized for eastern communities.",
          "High River: Trusted wildlife management, rodent control, and thermal bed bug eradication solutions.",
          "Crossfield: Reliable, fast-response insect and rodent control for residential and commercial spaces.",
          "Carstairs: Dedicated pest management safeguarding local homes, businesses, and agricultural structures.",
          "Diamond Valley: Comprehensive extermination services serving the historic Black Diamond and Turner Valley areas.",
          "Springbank: Specialized large-scale acreage pest management, spider control, and wildlife mitigation.",
          "Bearspaw: Discretion-assured luxury home pest protection and thermal bed bug remediation.",
          "Langdon: Targeted seasonal insect control and mice elimination for this rapidly growing hamlet.",
          "Balzac: High-capacity commercial pest control and warehouse monitoring near the industrial corridor.",
          "De Winton: Rural acreage pest management strategies protecting properties south of the city limits.",
          "Heritage Pointe: Elite residential pest prevention and prompt insect extermination services.",
        ],
      },
    ],
  },
  {
    slug: "edmonton",
    title:
      "Edmonton Pest Control | Chemical-Free Heat Treatment | Ecoheat",
    description:
      "Edmonton’s premier choice for advanced, chemical-free pest eradication and traditional treatments. 16+ years of expertise, 1-year warranty, and unmarked vehicles for complete privacy.",
    heroTitle:
      "Edmonton’s Premier Choice for Advanced, Chemical-Free Pest Eradication",
    heroDescription:
      "Welcome to Ecoheat Pest Control, Canada’s most experienced pest eradication team. With over 16 years of local expertise serving homes and businesses across Western Canada, we are your trusted partners in pest management.",
    heroImage: siteConfig.images.hero.src,
    sections: [
      {
        id: "intro",
        title: "Pioneers of Chemical-Free Heat Treatment in Alberta",
        content:
          "As the pioneers who first introduced chemical-free heat treatments to Alberta, we seamlessly blend cutting-edge eco-friendly methods with traditional techniques to deliver permanent results. Our extensive international experience means we have successfully tackled the world's worst infestations. We deeply understand pest biology and habits, ensuring we deploy the most effective solutions for your property.\n\nWe stand behind our work with a 1-year warranty and a 100% money-back satisfaction guarantee for our Edmonton clients. To ensure your complete privacy, we always use unmarked vehicles and equipment so your neighbours will never know we are there.",
        image: siteConfig.images.about.src,
        bullets: [],
      },
      {
        id: "why-edmonton",
        title: "Why Edmonton Chooses Ecoheat Pest Control",
        content:
          "Local specialists with global expertise and flexible treatment options for every property.",
        image: siteConfig.images.hero.src,
        bullets: [
          "Certified Local Specialists: Every Edmonton technician is a fully licensed, insured, and certified exterminator.",
          "Global Pest Expertise: Our international background gives us a deeper biological understanding of pest behaviour.",
          "Flexible Treatment Solutions: We offer full-service eradication tailored to your needs, as well as commercial-grade DIY options.",
          "Exclusive DIY Products: Gain exclusive access to professional-grade pest control products not available on the open retail market.",
          "Advanced Equipment: As industry pioneers, we utilize top-tier, certified Heat Assault systems for precise digital heat treatments.",
        ],
      },
      {
        id: "core-services",
        title: "Our Core Edmonton Pest Control Services",
        content:
          "Same-day residential, commercial, and industrial pest solutions across Edmonton and neighboring communities.",
        image: siteConfig.images.about.src,
        bullets: [
          "Bed Bug Heat Treatment: Safe, 100% chemical-free thermal remediation that eliminates bed bugs in a single cycle.",
          "Carpenter Ant Removal: Fast, targeted elimination of structurally destructive ant colonies.",
          "Rodent & Mice Control: Complete eradication combined with long-term structural exclusion.",
          "Cockroach Control: Quick, highly effective treatments designed to wipe out stubborn infestations.",
          "Pigeon & Wildlife Proofing: Professional exclusion installations to keep pests out of your property permanently.",
          "Dropping Cleanup & Disinfection: Deep-cleaning services to restore safe, sanitary, and hazard-free spaces.",
          "Safe Extraction: Entirely non-chemical, eco-friendly removal of wildlife nests and insect hives.",
        ],
      },
      {
        id: "service-areas",
        title: "Our Service Areas",
        content:
          "Ecoheat Pest Control proudly provides same-day residential, commercial, and industrial extermination services across Edmonton, Gibbons, and all neighboring communities. Check your city below and call us today to schedule your appointment.",
        image: "/images/pest-warriors-service-map.webp",
        bullets: [        ],
      },
    ],
  },
  {
    slug: "lethbridge",
    title: "Eco-Friendly Pest Control & Extermination in Lethbridge | Ecoheat",
    description:
      "Welcome to Ecoheat Pest Control, your trusted local choice for safe, reliable, and affordable extermination services in Lethbridge and surrounding areas. Eco-friendly IPM, bed bug heat treatments, and discreet service.",
    heroTitle: "Eco-Friendly Pest Control & Extermination in Lethbridge",
    heroDescription:
      "Welcome to Ecoheat Pest Control, your trusted local choice for safe, reliable, and affordable extermination services in Lethbridge and surrounding areas. We protect your home, family, and business from unwanted pests using advanced, environmentally responsible methods.",
    heroImage: siteConfig.images.hero.src,
    sections: [
      {
        id: "intro",
        title: "Discreet Residential & Commercial Pest Management",
        content:
          "Whether you need residential or commercial pest management, our discreet technicians target infestations at the source to ensure long-lasting prevention.",
        image: siteConfig.images.about.src,
        bullets: [],
      },
      {
        id: "why-choose",
        title: "Why Choose Ecoheat in Southern Alberta?",
        content:
          "Trusted local service with privacy, guarantees, and eco-friendly focus across Lethbridge and nearby communities.",
        image: siteConfig.images.hero.src,
        bullets: [
          "Total Privacy: All services are delivered in unmarked vehicles for 100% discretion.",
          "Guaranteed Results: Most treatments feature a 1-year warranty and a money-back guarantee.",
          "Local Expertise: Proudly serving Lethbridge, Coaldale, Coalhurst, and nearby communities.",
          "Eco-Friendly Focus: Advanced treatments that minimize chemical use.",
        ],
      },
      {
        id: "ipm",
        title: "Safe & Environmentally Responsible Pest Control",
        content:
          "We prioritize your family's safety by utilizing an Integrated Pest Management (IPM) approach. This method combines advanced non-chemical techniques with minimal, targeted pesticide use to effectively eradicate infestations.\n\nOur eco-friendly treatments are specifically designed to protect vulnerable loved ones, including:",
        image: siteConfig.images.about.src,
        bullets: [
          "Seniors",
          "Newborns and infants",
          "Pregnant individuals",
          "Family pets",
        ],
      },
      {
        id: "bed-bugs",
        title: "Lethbridge Bed Bug Removal Specialists",
        content:
          "As Lethbridge’s leading bed bug heat treatment experts, we offer versatile removal options tailored to your budget and preferences:",
        image: siteConfig.images.hero.src,
        bullets: [
          "Thermal Heat Treatments: Eco-friendly and 100% chemical-free. Kills all life stages (including eggs) in a single visit. Penetrates deep into walls, mattresses, and furniture.",
          "Aprehend® Bio-Pesticide Treatments: Non-toxic fungal spore technology. Safe for sensitive individuals (elderly, newborns, pregnant women). No evacuation required during the application process.",
          "Traditional Pesticide & Steam Integration: Maximum efficacy achieved by combining targeted pesticides with professional steam heat and specialized vacuuming. Ideal value option for budget-conscious property owners.",
        ],
      },
      {
        id: "services",
        title: "Our Specialized Pest Control Services",
        content:
          "Full-service pest management for Southern Alberta homes and businesses.",
        image: siteConfig.images.about.src,
        bullets: [
          "Bed Bug Extermination: Bed bugs spread quickly and require specialized treatment. We use advanced, eco-friendly heat and targeted techniques to eliminate bed bugs at all life stages, from eggs to adults, ensuring your bedroom is safe and liveable again.",
          "Ant & Carpenter Ant Control: From standard nuisance ants to destructive carpenter ants, we locate the colony and eliminate the queen. Carpenter ants can damage your property's wooden structure, making early detection and localized treatment critical for Southern Alberta homes.",
          "Mice & Rodent Control: Mice and rats multiply rapidly and pose serious health risks. Our team identifies entry points, seals your home against future intruders, and implements safe, pet-friendly baiting and trapping strategies to clear the infestation.",
          "Pigeon Control & Removal: Pigeons can cause extensive property damage and carry diseases. We provide humane pigeon exclusion services, using netting, spikes, and deterrents to keep them off your roof, balconies, and commercial ledges permanently.",
          "Rodent Cleanup & Disinfection Service: Once the mice are gone, the danger isn’t. We offer full-service mice cleanup and decontamination. Our team safely removes droppings, replaces contaminated insulation, and uses hospital-grade disinfectants to eliminate dangerous airborne pathogens and odors.",
        ],
      },
      {
        id: "service-areas",
        title: "Lethbridge & Surrounding Service Areas",
        content:
          "We proudly provide prompt, professional pest control services to Lethbridge and all neighboring communities across Southern Alberta. Contact us today for reliable service in your area.",
        image: "/images/pest-warriors-service-map.webp",
        bullets: [],
      },
      {
        id: "cta",
        title: "Contact Lethbridge's Pest Experts Today",
        content:
          "Don't let pests take over your property. Contact Ecoheat Pest Control today for a free quote and discover how our eco-friendly, discreet extermination services can restore your peace of mind.",
        image: siteConfig.images.hero.src,
        bullets: [        ],
      },
    ],
  },
  {
    slug: "red-deer",
    title: "Eco-Friendly Pest Control & Extermination in Red Deer | Ecoheat",
    description:
      "Welcome to Ecoheat Pest Control, Red Deer’s premier choice for safe, effective, and affordable pest management. Eco-friendly residential and commercial extermination across Red Deer and surrounding communities.",
    heroTitle: "Eco-Friendly Pest Control & Extermination in Red Deer",
    heroDescription:
      "Welcome to Ecoheat Pest Control, Red Deer’s premier choice for safe, effective, and affordable pest management. We provide eco-friendly residential and commercial extermination services across Red Deer and its surrounding communities.",
    heroImage: siteConfig.images.hero.src,
    sections: [
      {
        id: "intro",
        title: "Protecting Families, Property & the Environment",
        content:
          "By minimizing chemical use and utilizing advanced, non-toxic techniques, we protect your family, property, and the environment while delivering fast, lasting results.",
        image: siteConfig.images.about.src,
        bullets: [],
      },
      {
        id: "bed-bugs",
        title: "Leading Bed Bug Treatment in Red Deer",
        content:
          "We are Alberta’s original pioneers in bed bug heat treatment (thermal remediation). As the first company to introduce this technology to the province, our expertise is unmatched. We target and eliminate all life stages of bed bugs—including eggs—using a powerful, comprehensive approach:",
        image: siteConfig.images.hero.src,
        bullets: [
          "Bed Bug Thermal Heat Treatment: We use specialized heaters to safely raise the temperature of your indoor air to a level that is lethal to bed bugs but safe for your home structure. Think of it like a high-powered, professional sauna for a room—heat penetrates deep into walls, mattresses, and furniture cracks, killing bugs instantly without chemical spray.",
          "Aprehend® Biopesticide Treatment: A natural, non-toxic spray made from fungal spores. We spray an invisible barrier in strategic spots. When a bed bug walks across it, the spores stick to its body and are carried back to the hidden nest, wiping out the colony within days.",
          "Professional Steam & Vacuuming: Industrial-strength physical cleaning tools instantly remove visible pests. Super-heated steam kills bugs on contact, while heavy-duty vacuums extract them from mattress seams for immediate relief and long-term protection prep.",
        ],
      },
      {
        id: "services",
        title: "Complete Pest Control & Removal Services",
        content:
          "Our licensed and insured exterminators are fully equipped to handle all Central Alberta pest challenges safely:",
        image: siteConfig.images.about.src,
        bullets: [
          "Cockroach Control & Eradication: Fast elimination of infestations using safe, targeted baits and gels.",
          "Carpenter Ant Treatments: Stopping structural damage by finding and destroying the main colony.",
          "Wasp Removal & Nest Elimination: Safe removal of stinging hazards from your eaves, decks, and yards.",
          "Rodent & Mice Control: Complete removal combined with professional exclusion and proofing (sealing up entry holes so mice can never get back inside).",
          "Pigeon Control & Bird Proofing: Installing humane deterrents to keep birds off your roof and commercial property.",
          "Hazardous Dropping Disinfection Service: Specialized, deep-cleaning decontamination to safely remove toxic mess left behind by mice, rats, and pigeons.",
        ],
      },
      {
        id: "guarantee",
        title: "Our Guarantee",
        content:
          "We stand behind our work. Ecoheat Pest Control offers a 1-year warranty and a money-back guarantee for our genuine clients in Red Deer and the surrounding areas.",
        image: siteConfig.images.hero.src,
        bullets: [],
      },
      {
        id: "service-areas",
        title: "Central Alberta Mobile Service Areas",
        content:
          "We provide reliable, fast, and eco-friendly pest control directly to your doorstep. Our fully equipped mobile extermination teams routinely service Red Deer County and the surrounding municipalities. We proudly serve Red Deer and the entire surrounding Central Alberta region.",
        image: "/images/pest-warriors-service-map.webp",
        bullets: [],
      },
      {
        id: "cta",
        title: "Get a Free Estimate Today",
        content:
          "Contact Red Deer's trusted eco-friendly exterminators to book your inspection.",
        image: siteConfig.images.about.src,
        bullets: [        ],
      },
    ],
  },
  {
    slug: "fort-mcmurray",
    title:
      "Eco-Friendly Pest Control & Extermination in Fort McMurray | Ecoheat",
    description:
      "Welcome to Ecoheat Pest Control, your trusted local choice for safe, reliable, and affordable extermination services in Fort McMurray and surrounding areas. Residential, commercial, and industrial pest management.",
    heroTitle:
      "Eco-Friendly Pest Control & Extermination in Fort McMurray",
    heroDescription:
      "Welcome to Ecoheat Pest Control, your trusted local choice for safe, reliable, and affordable extermination services in Fort McMurray and surrounding areas. We protect your home, family, and business from unwanted pests using advanced, environmentally responsible methods.",
    heroImage: siteConfig.images.hero.src,
    sections: [
      {
        id: "intro",
        title: "Residential, Commercial & Industrial Pest Management",
        content:
          "Whether you need residential, commercial, or industrial pest management, our discreet technicians target infestations at the source to ensure long-lasting prevention and complete peace of mind.",
        image: siteConfig.images.about.src,
        bullets: [],
      },
      {
        id: "why-choose",
        title: "Why Choose Ecoheat in the Wood Buffalo Region?",
        content:
          "Trusted service for homes, businesses, and heavy industrial sites across Fort McMurray and surrounding communities.",
        image: siteConfig.images.hero.src,
        bullets: [
          "Total Privacy: All services are delivered in unmarked vehicles for 100% secret and discreet operations.",
          "Guaranteed Results: Most treatments feature a 1-year warranty and a money-back guarantee for genuine clients.",
          "Industry & Camp Experts: Specializing in residential, commercial, and heavy industrial site pest management.",
          "Eco-Friendly Focus: Advanced treatments that minimize chemical use to protect the environment.",
        ],
      },
      {
        id: "ipm",
        title: "Our Safe & Environmentally Responsible Approach",
        content:
          "We prioritize your safety by utilizing an Integrated Pest Management (IPM) approach. This method combines advanced non-chemical techniques with minimal, targeted pesticide use to effectively eradicate infestations while safeguarding the local environment.\n\nOur eco-friendly treatments are specifically designed to protect vulnerable loved ones, including:",
        image: siteConfig.images.about.src,
        bullets: [
          "Seniors",
          "Newborns and infants",
          "Pregnant individuals",
          "Family pets",
        ],
      },
      {
        id: "services",
        title: "Our Specialized Pest Control Services",
        content:
          "Full-service pest management for Fort McMurray homes, work camps, and industrial sites.",
        image: siteConfig.images.hero.src,
        bullets: [
          "Bed Bug Extermination: Bed bugs spread rapidly in residential properties and work camps. We use advanced, eco-friendly heat treatments and targeted techniques to eliminate bed bugs at all life stages—from eggs to adults—ensuring your living spaces are safe and comfortable again.",
          "Ant & Carpenter Ant Control: From standard nuisance ants to destructive carpenter ants, we locate the colony and eliminate the queen. Carpenter ants can severely damage your property's wooden structure, making early detection and localized treatment critical for Wood Buffalo homes.",
          "Mice & Rodent Control: Mice and rats multiply quickly and pose serious health risks. Our team identifies entry points, seals your property against future intruders, and implements safe, pet-friendly baiting and trapping strategies tailored for Northern Alberta winters.",
          "Pigeon Control & Removal: Pigeons can cause extensive property damage and carry dangerous airborne pathogens. We provide humane pigeon exclusion services, using high-durability netting, spikes, and deterrents to keep them off your roof, balconies, and industrial ledges permanently.",
          "Rodent Cleanup & Disinfection Service: Once the mice are gone, the biological hazards remain. We offer full-service mice cleanup and decontamination. Our team safely removes droppings, replaces contaminated insulation, and uses hospital-grade disinfectants to eliminate dangerous pathogens and foul odors.",
        ],
      },
      {
        id: "service-areas",
        title: "Our Service Areas",
        content:
          "We provide professional pest control and extermination services throughout the Fort McMurray region.",
        image: "/images/pest-warriors-service-map.webp",
        bullets: [],
      },
      {
        id: "cta",
        title: "Contact Fort McMurray's Pest Experts Today",
        content:
          "Don't let pests take over your property. Contact Ecoheat Pest Control today for a free quote and discover how our eco-friendly, discreet extermination services can restore your peace of mind.",
        image: siteConfig.images.about.src,
        bullets: [        ],
      },
    ],
  },
  {
    slug: "diy-pest-control",
    title:
      "Professional-Grade DIY Pest Control Solutions in Calgary and Edmonton",
    description:
      "Shop professional-grade, safe pest control products in Calgary and Edmonton. Skip weak, diluted retail sprays. Gain direct access to exclusive, technician-tested formulas designed for maximum knockdown power.",
    heroTitle:
      "Professional-Grade DIY Pest Control Solutions in Calgary and Edmonton",
    heroDescription:
      "Shop professional-grade, safe pest control products in Calgary and Edmonton. Skip weak, diluted retail sprays. Gain direct access to exclusive, technician-tested formulas designed for maximum knockdown power.",
    heroImage: siteConfig.images.hero.src,
    sections: [
      {
        id: "overview",
        title: "DIY Support or Full-Service — Your Choice",
        content:
          "Whether you want to manage the problem yourself or need an expert eye, we support you. Visit our upcoming specialized pest control depots in Alberta, or book full-service, on-site inspections for total peace of mind. We also supply heavy-duty mice bait stations and commercial pest control equipment.",
        image: siteConfig.images.about.src,
        bullets: [],
      },
      {
        id: "why-diy",
        title: "Why Choose Professional DIY Pest Control?",
        content:
          "Taking control of your own pest management is highly effective when you have the right tools. Standard retail store products often fail to eliminate the root of an infestation, leading to repeated outbreaks and higher long-term costs.\n\nChoosing our professional-grade DIY solutions provides distinct advantages:",
        image: siteConfig.images.hero.src,
        bullets: [
          "Commercial-Strength Formulas: Eliminate pests faster with concentrations stronger than standard retail items.",
          "Technician-Trusted Quality: Deploy the exact solutions used by licensed exterminators in the field.",
          "Safe & Effective Protocols: Protect your property with proprietary blends built for high efficacy and safety.",
          "Budget-Friendly Savings: Eliminate expensive service fees by solving infestations on your own terms.",
          "Root-Cause Eradication: Stop breeding cycles instead of just masking the symptoms of a pest issue.",
        ],
      },
      {
        id: "depots",
        title: "Coming Soon: Local Alberta Pest Control Depots",
        content:
          "We are expanding our physical footprint to provide Albertans with immediate access to commercial extermination supplies.",
        image: "/images/pest-warriors-service-map.webp",
        bullets: [
          "Calgary Depot Location: Opening soon for convenient local pickup and Southern Alberta support.",
          "Edmonton Depot Location: Opening soon to serve Northern Alberta communities and businesses.",
          "Exclusive Inventory: Access premium stock and equipment completely unavailable on the open market.",
          "Expert On-Site Support: Receive tailored application advice directly from licensed pest professionals.",
        ],
      },
    ],
  },
  {
    slug: "airdrie",
    title: "Pest Control Airdrie | Ecoheat Pest Control",
    description:
      "Proactive pest elimination and thermal bed bug removal for Airdrie — north Calgary's largest commuter city. Eco-friendly residential and commercial pest control.",
    heroTitle: "Pest Control in Airdrie",
    heroDescription:
      "Proactive pest elimination and thermal bed bug removal for north Calgary's largest commuter city. Ecoheat delivers same-day residential and commercial pest control in Airdrie.",
    heroImage: siteConfig.images.hero.src,
    sections: [
      {
        id: "overview",
        title: "Trusted Pest Control for Airdrie Homes & Businesses",
        content:
          "Ecoheat Pest Control provides professional, eco-friendly pest management for Airdrie residents and businesses. From bed bug heat treatments to rodent control, our local technicians are ready to help.",
        image: siteConfig.images.about.src,
        bullets: [
          "1-day chemical-free bed bug heat treatments",
          "Residential and commercial pest control",
          "Discreet unmarked vehicles",
          "1-year warranty options on qualifying treatments",
        ],
      },
    ],
  },
  {
    slug: "chestermere",
    title: "Pest Control Chestermere | Ecoheat Pest Control",
    description:
      "Effective spider, rodent, and thermal bed bug solutions for lakefront and residential properties in Chestermere. Eco-friendly pest control by Ecoheat.",
    heroTitle: "Pest Control in Chestermere",
    heroDescription:
      "Effective spider, rodent, and thermal bed bug solutions for lakefront and residential properties in Chestermere. Ecoheat provides eco-friendly pest control across the community.",
    heroImage: siteConfig.images.hero.src,
    sections: [
      {
        id: "overview",
        title: "Lakefront & Residential Pest Solutions",
        content:
          "Ecoheat Pest Control serves Chestermere with professional bed bug heat treatments, rodent control, and general pest management tailored for homes and local businesses.",
        image: siteConfig.images.about.src,
        bullets: [
          "Thermal bed bug eradication",
          "Spider and rodent control",
          "Eco-friendly IPM approach",
          "Fast local response for Chestermere residents",
        ],
      },
    ],
  },
  {
    slug: "property-types",
    title: "Property Types We Serve",
    description: "Residential, commercial, and multi-unit pest control coverage.",
    heroTitle: "Every Type of Property Covered",
    heroDescription:
      "From homes to industrial facilities, our treatment plans are adapted to how each space is used.",
    heroImage: siteConfig.images.hero.src,
    sections: [
      {
        id: "coverage",
        title: "Coverage",
        content:
          "We support homeowners, property managers, and business operators with targeted pest control programs.",
        image: siteConfig.images.hero.src,
        bullets: [
          "Residential homes",
          "Apartments and condos",
          "Hotels and motels",
          "Healthcare and schools",
          "Industrial and commercial",
        ],
      },
    ],
  },
  {
    slug: "why-choose",
    title: "Why Choose Pest Warriors",
    description: "Fast, discreet, and practical pest control in Calgary.",
    heroTitle: "Smart Solutions. Lasting Protection.",
    heroDescription:
      "Our approach combines accurate inspections, transparent recommendations, and accountable service.",
    heroImage: siteConfig.images.about.src,
    sections: [
      {
        id: "benefits",
        title: "What You Get",
        content:
          "Every plan is designed to solve the current issue and reduce the risk of recurrence.",
        image: siteConfig.images.about.src,
        bullets: [
          "Fast and discreet response",
          "Qualified technicians",
          "Practical prevention guidance",
        ],
      },
    ],
  },
  {
    slug: "how-it-works",
    title: "How It Works",
    description: "Simple 4-step process from request to follow-up.",
    heroTitle: "Our Simple 4-Step Process",
    heroDescription:
      "Share your issue, get a plan, receive treatment, and move forward with confidence.",
    heroImage: siteConfig.images.hero.src,
    sections: [
      {
        id: "steps",
        title: "Process",
        content:
          "We keep every project structured and transparent so you always know what happens next.",
        image: siteConfig.images.hero.src,
        bullets: [
          "1) Quote request and intake",
          "2) Initial assessment",
          "3) Targeted treatment",
          "4) Follow-up guidance",
        ],
      },
    ],
  },
  {
    slug: "offers",
    title: "Offers",
    description: "Current promotional offers from Pest Warriors.",
    heroTitle: "Current Promotions",
    heroDescription:
      "See active offers and eligibility notes before booking your service.",
    heroImage: siteConfig.images.hero.src,
    sections: [
      {
        id: "promo",
        title: "New Customer Offer",
        content: `${siteConfig.offer.long} ${siteConfig.offer.termsLong}`,
        image: siteConfig.images.hero.src,
        bullets: [siteConfig.offer.headline],
      },
    ],
  },
  {
    slug: "service-area",
    title: "Service Area",
    description: "Calgary and nearby communities served by Pest Warriors.",
    heroTitle: "Proudly Serving Calgary & Nearby Communities",
    heroDescription: "Local coverage with nearby service available by request.",
    heroImage: "/images/pest-warriors-service-map.webp",
    sections: [
      {
        id: "areas",
        title: "Areas We Serve",
        content: "We currently serve Calgary and selected surrounding communities.",
        image: "/images/pest-warriors-service-map.webp",
        bullets: [...siteConfig.location.serviceAreas],
      },
    ],
  },
];

export const defaultCmsContent: CmsContent = {
  site: {
    businessName: siteConfig.business.name,
    legalName: siteConfig.business.legalName,
    tagline: siteConfig.business.tagline,
    logoSrc: siteConfig.business.logoSrc ?? "",
    city: siteConfig.location.city,
    province: siteConfig.location.province,
    country: siteConfig.location.country,
    serviceAreaLabel: siteConfig.location.serviceAreaLabel,
    serviceAreas: [...siteConfig.location.serviceAreas],
    serviceAreasNote: siteConfig.location.serviceAreasNote,
    phone: siteConfig.contact.phone,
    phoneHref: siteConfig.contact.phoneHref,
    email: siteConfig.contact.email,
    emailHref: siteConfig.contact.emailHref,
    facebook: siteConfig.contact.facebook,
    formRecipient: siteConfig.contact.formRecipient,
    responseMessage: siteConfig.contact.responseMessage,
  },
  pages: detailPages,
  services: primaryServices.map((service) => ({
    slug: service.slug,
    name: service.name,
    shortName: service.shortName,
    cardDescription: service.cardDescription,
    heroTitle: service.name,
    heroDescription: service.cardDescription,
    heroImage: siteConfig.images.hero.src,
    whoFor: service.whoFor,
    warningSigns: [...service.warningSigns],
    approach: [...service.approach],
    sections: [
      {
        id: "overview",
        title: "Service Overview",
        content: service.cardDescription,
        image: siteConfig.images.hero.src,
        bullets: [],
      },
    ],
    faq: service.faq.map((item) => ({ ...item })),
  })),
  faqs: homeFaqs.map((item) => ({ ...item })),
};
