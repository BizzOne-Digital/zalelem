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
  { icon: KeyRound, label: "Multi-Unit Complexes" },
  { icon: Building, label: "Apartments & Condo Buildings" },
  { icon: Hotel, label: "Hotels & Motels" },
  { icon: GraduationCap, label: "Schools & Daycares" },
  { icon: Building2, label: "Office & Retail" },
  { icon: HeartPulse, label: "Healthcare Facilities" },
  { icon: Factory, label: "Industrial & Warehouse Buildings" },
];

export function PropertyTypes() {
  return (
    <section className="bg-band py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-green-700 uppercase">
            Complete Protection for Every Property
          </p>
          <h2 className="heading-rule font-display mx-auto mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Every Type of Property
          </h2>
        </Reveal>

        <ul className="mt-12 grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
          {types.map((type, i) => (
            <Reveal key={type.label} as="li" delay={i * 0.03}>
              <div className="flex h-full flex-col items-center gap-3 rounded-xl border border-line bg-surface px-4 py-6 text-center shadow-card transition-colors hover:border-green-600">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-600/10 text-green-700">
                  <type.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="text-sm leading-snug font-bold text-ink">{type.label}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
