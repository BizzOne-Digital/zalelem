import {
  Building,
  Building2,
  Factory,
  GraduationCap,
  HeartPulse,
  Home,
  Hotel,
  KeyRound,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

const types = [
  { icon: Home, label: "Residential Homes" },
  { icon: KeyRound, label: "Property Management" },
  { icon: Building, label: "Apartments & Multi-Unit Buildings" },
  { icon: GraduationCap, label: "Schools & Daycares" },
  { icon: Building2, label: "Office & Retail Spaces" },
  { icon: Hotel, label: "Hotels" },
  { icon: HeartPulse, label: "Healthcare Facilities" },
  { icon: Factory, label: "Industrial & Commercial Buildings" },
];

export function PropertyTypes() {
  return (
    <section className="bg-skyline bg-band py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="text-center">
          <p className="section-eyebrow">Pest Protection for Every Property</p>
          <h2 className="font-display mx-auto mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Every Type of Property
          </h2>
        </Reveal>

        <ul className="mt-14 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-8">
          {types.map((type, i) => (
            <Reveal key={type.label} as="li" delay={i * 0.03}>
              <div className="flex h-full flex-col items-center gap-3 text-center">
                <type.icon
                  className="h-9 w-9 text-base-800"
                  strokeWidth={1.4}
                  aria-hidden="true"
                />
                <span className="text-xs leading-snug font-bold text-ink sm:text-sm">
                  {type.label}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
