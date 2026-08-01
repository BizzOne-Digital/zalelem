import Link from "next/link";
import { CheckCircle2, Phone } from "lucide-react";
import { CtaPair } from "@/components/CtaPair";
import { siteConfig } from "@/config/site";

const introPoints = [
  "Specialists in Integrated Pest Management (IPM), combining advanced chemical-free solutions with targeted, minimal pesticide treatments only when necessary.",
  "Calgary’s original pioneers of 100% chemical-free bed bug heat treatments with unmatched international experience.",
  "Deep understanding of pest biology, habits, and resistance patterns from solving the worst infestations across Canada and internationally.",
  "Completely toxicity-free options for elderly, newborns, pregnant individuals, and anyone sensitive to chemicals.",
  "Customized treatments that target only the pests while protecting your loved ones.",
];

const treatmentStrategies = [
  {
    type: "100% Chemical-Free EcoHeat",
    how: "High-temperature thermal remediation kills all life stages in a 1-day process.",
    advantages: "No toxic residues; immediate re-entry; 100% eco-friendly.",
    bestFor: "Families, pets, and immediate total eradication.",
  },
  {
    type: "Aprehend® Biological",
    how: "Non-toxic, natural fungal spore application that pests carry back to the nest.",
    advantages:
      "Safe for sensitive individuals; no need to leave home during application.",
    bestFor: "Elderly, pregnant individuals, and newborns.",
  },
  {
    type: "Advanced Hybrid Method",
    how: "Traditional pesticide boosted with industrial steaming and specialized HEPA vacuuming.",
    advantages:
      "Double-action physical and chemical removal; destroys hidden eggs.",
    bestFor: "Severe infestations requiring multi-layered elimination.",
  },
  {
    type: "Traditional Pesticide",
    how: "Targeted application of professional-grade, government-registered liquid residuals.",
    advantages:
      "Budget-friendly; long-lasting protective barrier against perimeter pests.",
    bestFor: "Standard pest control and preventative maintenance.",
  },
];

const trustPoints = [
  {
    label: "1-Year Written Warranty",
    text: "Complete protection ensures your property stays pest-free long after we leave.",
  },
  {
    label: "Money-Back Guarantee",
    text: "Honest, results-driven service backed by a genuine satisfaction policy.",
  },
  {
    label: "Maximum Discretion",
    text: "Unmarked vehicles and equipment protect your privacy in the neighborhood.",
  },
  {
    label: "Global Expertise",
    text: "International experience solving complex pesticide-resistance patterns.",
  },
  {
    label: "Integrated Pest Management",
    text: "Smart strategies that minimize chemical use while maximizing results.",
  },
  {
    label: "Local Experts",
    text: "Trusted pest control serving Calgary and surrounding communities.",
  },
  {
    label: "Eco-Friendly IPM",
    text: "Integrated Pest Management prioritizes chemical-free solutions.",
  },
  {
    label: "Licensed Professionals",
    text: "Fully certified technicians ensuring safe, long-lasting results.",
  },
];

const coreServices = [
  {
    title: "Bed Bug Thermal Heat Treatment",
    points: [
      "Employs 100% chemical-free thermal processes.",
      "Safely eliminates infestations in a single day.",
      "Penetrates deep into structures to kill all life stages.",
    ],
  },
  {
    title: "Aprehend® Biotreatments",
    points: [
      "Utilizes a highly effective non-chemical biopesticide alternative.",
      "Allows occupants to remain safely at home during treatment.",
      "Provides a long-lasting barrier against bed bug activity.",
    ],
  },
  {
    title: "General Insect Extermination",
    points: [
      "Delivers rapid eradication of carpenter ants, cockroaches, and wasp nests.",
      "Employs targeted strategies based on specific insect behaviors.",
      "Prevents future structural damage and health hazards.",
    ],
  },
  {
    title: "Rodent & Mice Control",
    points: [
      "Provides complete removal of mice and rats.",
      "Deploys strategic baiting and trapping systems safely.",
      "Conducts structural entry-point exclusion to prevent re-entry.",
    ],
  },
  {
    title: "Pigeon Control & Property Proofing",
    points: [
      "Installs humane deterrents like netting and spikes.",
      "Offers comprehensive attic and balcony dropping cleanup.",
      "Restores sanitation and protects structures from corrosive waste.",
    ],
  },
];

const vehiclePoints = [
  {
    label: "Targeted Application",
    text: "Focuses on high-risk zones like fabric seats, carpets, floor mats, and trunk spaces.",
  },
  {
    label: "Thermal or Bio-Barrier Options",
    text: "Adapts our proven residential technology safely to automotive interiors.",
  },
  {
    label: "Proactive Defense",
    text: "Creates a protective shield that eradicates incoming bed bugs before they can establish.",
  },
  {
    label: "Rapid Turnaround",
    text: "Minimized downtime ensures your vehicle is safe to drive shortly after application.",
  },
];

const communities = [
  {
    name: "Airdrie",
    text: "Proactive pest elimination and thermal bed bug removal for north Calgary's largest commuter city.",
  },
  {
    name: "Cochrane",
    text: "Specialized residential and commercial pest management along the scenic Bow River valley.",
  },
  {
    name: "Chestermere",
    text: "Effective spider, rodent, and thermal bed bug solutions for lakefront and residential properties.",
  },
  {
    name: "Okotoks",
    text: "Premium, eco-friendly pest control servicing families and businesses across the Sheep River region.",
  },
  {
    name: "Strathmore",
    text: "Comprehensive structural pest control and extermination services customized for eastern communities.",
  },
  {
    name: "High River",
    text: "Trusted wildlife management, rodent control, and thermal bed bug eradication solutions.",
  },
  {
    name: "Crossfield",
    text: "Reliable, fast-response insect and rodent control for residential and commercial spaces.",
  },
  {
    name: "Carstairs",
    text: "Dedicated pest management safeguarding local homes, businesses, and agricultural structures.",
  },
  {
    name: "Diamond Valley",
    text: "Comprehensive extermination services serving the historic Black Diamond and Turner Valley areas.",
  },
  {
    name: "Springbank",
    text: "Specialized large-scale acreage pest management, spider control, and wildlife mitigation.",
  },
  {
    name: "Bearspaw",
    text: "Discretion-assured luxury home pest protection and thermal bed bug remediation.",
  },
  {
    name: "Langdon",
    text: "Targeted seasonal insect control and mice elimination for this rapidly growing hamlet.",
  },
  {
    name: "Balzac",
    text: "High-capacity commercial pest control and warehouse monitoring near the industrial corridor.",
  },
  {
    name: "De Winton",
    text: "Rural acreage pest management strategies protecting properties south of the city limits.",
  },
  {
    name: "Heritage Pointe",
    text: "Elite residential pest prevention and prompt insect extermination services.",
  },
];

function BulletList({
  items,
}: {
  items: { label?: string; text: string }[] | string[];
}) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((item) => {
        const label = typeof item === "string" ? undefined : item.label;
        const text = typeof item === "string" ? item : item.text;
        const key = label ? `${label}:${text}` : text;
        return (
          <li key={key} className="flex gap-3">
            <CheckCircle2
              className="mt-0.5 h-5 w-5 shrink-0 text-green-600"
              aria-hidden="true"
            />
            <span className="leading-relaxed text-muted">
              {label ? (
                <>
                  <span className="font-semibold text-ink">{label}:</span> {text}
                </>
              ) : (
                text
              )}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export function CalgaryPageContent() {
  const phone = siteConfig.contact.phone;
  const phoneHref = siteConfig.contact.phoneHref;

  return (
    <>
      <section className="relative overflow-hidden bg-base-900 pt-32 pb-16 text-white md:pt-40">
        <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 text-center lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] text-green-400 uppercase">
            Pest Control · Calgary
          </p>
          <h1 className="font-display mt-3 text-[1.75rem] font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            EcoHeat Pest Control Calgary
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-white/75 sm:text-lg">
            Your trusted choice for professional, reliable, and eco-friendly pest
            control in Calgary and surrounding communities.
          </p>
          <div className="mx-auto mt-8 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:flex-wrap">
            <Link href="/contact?area=calgary" className="btn-primary w-full sm:w-auto">
              Contact Us Today
            </Link>
            <a
              href={phoneHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-7 py-3.5 font-bold text-white transition hover:border-green-400 hover:text-green-400 sm:w-auto"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {phone}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-surface py-14 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="font-display text-center text-3xl font-extrabold text-ink sm:text-4xl">
            Why Choose EcoHeat in Calgary
          </h2>
          <p className="mt-5 text-center leading-relaxed text-muted">
            EcoHeat Pest Control Calgary is your trusted choice for professional,
            reliable, and eco-friendly pest control in Calgary and surrounding
            communities.
          </p>
          <BulletList items={introPoints} />
        </div>
      </section>

      <section className="border-y border-line bg-band py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-display text-center text-3xl font-extrabold text-ink">
            Choose Your Calgary Bed Bug Treatment Strategy
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
            Compare EcoHeat, biological, hybrid, and traditional options.
          </p>

          <div className="mt-8 space-y-4 md:hidden">
            {treatmentStrategies.map((row) => (
              <article
                key={row.type}
                className="rounded-2xl border border-line bg-surface p-5 shadow-card"
              >
                <h3 className="font-display text-lg font-bold text-ink">
                  {row.type}
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm text-muted">
                  <li>
                    <span className="font-semibold text-ink">How it works:</span>{" "}
                    {row.how}
                  </li>
                  <li>
                    <span className="font-semibold text-ink">Key advantages:</span>{" "}
                    {row.advantages}
                  </li>
                  <li>
                    <span className="font-semibold text-ink">Best for:</span>{" "}
                    {row.bestFor}
                  </li>
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-8 hidden overflow-x-auto md:block">
            <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-line bg-surface">
                  <th className="px-4 py-3 font-bold text-ink">Treatment Type</th>
                  <th className="px-4 py-3 font-bold text-ink">How It Works</th>
                  <th className="px-4 py-3 font-bold text-ink">Key Advantages</th>
                  <th className="px-4 py-3 font-bold text-ink">Best For</th>
                </tr>
              </thead>
              <tbody>
                {treatmentStrategies.map((row) => (
                  <tr key={row.type} className="border-b border-line align-top">
                    <td className="px-4 py-4 font-semibold text-ink">
                      {row.type}
                    </td>
                    <td className="px-4 py-4 text-muted">{row.how}</td>
                    <td className="px-4 py-4 text-muted">{row.advantages}</td>
                    <td className="px-4 py-4 text-muted">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-surface py-14 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="font-display text-center text-3xl font-extrabold text-ink">
            Why Calgary Homeowners Trust EcoHeat Pest Control
          </h2>
          <p className="mt-4 text-center text-muted">
            EcoHeat Pest Control Calgary offers expert, eco-friendly pest
            extermination in Calgary and surrounding areas.
          </p>
          <BulletList items={trustPoints} />
        </div>
      </section>

      <section className="bg-band py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-extrabold text-ink">
              Professional Pest Control Services in Calgary
            </h2>
            <p className="mt-4 text-muted">
              Core Pest Control Services delivers industry-leading, highly
              effective pest management solutions for residential and commercial
              properties in Calgary. Our professional treatments combine advanced
              technology with environmentally conscious methods to guarantee a
              safe and pest-free environment.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {coreServices.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-line bg-surface p-6 shadow-card"
              >
                <h3 className="font-display text-xl font-bold text-ink">
                  {service.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-14 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="font-display text-center text-3xl font-extrabold text-ink">
            Specialized Vehicle Bed Bug Prevention Treatment
          </h2>
          <p className="mt-4 text-center text-muted">
            Vehicles are highly susceptible to hitchhiking pests from luggage,
            clothing, and passengers. Our professional vehicle prevention
            treatment safeguards your car, truck, or fleet against infestations.
          </p>
          <BulletList items={vehiclePoints} />
        </div>
      </section>

      <section className="border-t border-line bg-band py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-extrabold text-ink">
              Calgary & Surrounding Communities
            </h2>
            <p className="mt-4 text-muted">
              We proudly provide industry-leading pest control and 100% effective
              bed bug heat treatments throughout Calgary and all surrounding
              commuter communities — from Balzac warehouses to Springbank and
              Bearspaw acreages, and households in Airdrie, Cochrane, Chestermere,
              and Okotoks.
            </p>
          </div>
          <ul className="mx-auto mt-10 grid max-w-5xl gap-3 sm:grid-cols-2">
            {communities.map((area) => (
              <li
                key={area.name}
                className="flex gap-3 rounded-xl border border-line bg-surface px-4 py-3.5"
              >
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-green-600"
                  aria-hidden="true"
                />
                <span className="text-sm leading-relaxed text-muted">
                  <span className="font-semibold text-ink">{area.name}:</span>{" "}
                  {area.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h2 className="font-display text-3xl font-extrabold text-ink">
            Request a Free Quote
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Protect your property in Calgary. Call us for a free consultation.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaPair phone={phone} phoneHref={phoneHref} />
          </div>
        </div>
      </section>
    </>
  );
}
