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
    <section className="bg-skyline bg-base-900 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-gold-500 uppercase">
            Complete Protection for Every Property
          </p>
          <h2 className="heading-rule font-display mx-auto mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Every Type of Property
          </h2>
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-3.5 sm:grid-cols-4 lg:grid-cols-8">
          {types.map((type, i) => (
            <Reveal key={type.label} as="li" delay={i * 0.04}>
              <div className="flex h-full flex-col items-center gap-3 rounded-xl border border-white/8 bg-base-800/70 px-3 py-6 text-center shadow-card transition-colors hover:border-green-500/40">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-600/15 text-green-400">
                  <type.icon
                    className="h-5 w-5"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </span>
                <span className="text-[0.8rem] leading-snug font-bold text-white">
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
