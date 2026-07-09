import {
  GraduationCap, Beaker, Ruler, Lock, Headphones, BadgeCheck,
  Satellite, Gauge, Droplets, ScrollText,
} from "lucide-react";
import { VEHICLE_SPECS } from "@/lib/company";
import { TiltCard } from "./TiltCard";
import { ScrollReveal } from "./ScrollReveal";

const icons = [
  GraduationCap, Beaker, Ruler, Lock, Headphones,
  BadgeCheck, Satellite, Gauge, Droplets, ScrollText,
];

export function VehicleSpecs() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-28">
      <ScrollReveal direction="up">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-primary font-semibold text-sm tracking-wider uppercase">Our Vehicle Specification</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold text-primary-dark">
            Call Diesel Mobile Petrol Pump
          </h2>
          <p className="mt-4 text-foreground/70">
            PESO-ready tankers with IoT controllers, geo-locked dispensing and Weights &amp; Measures certified meters.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-12 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-mesh rounded-3xl opacity-60" />
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
          {VEHICLE_SPECS.map((s, i) => {
            const Icon = icons[i] ?? BadgeCheck;
            return (
              <ScrollReveal key={s.title} index={i}>
                <TiltCard intensity={12} className="relative h-full rounded-2xl bg-card border border-border p-4 md:p-5 shadow-soft overflow-hidden">
                  <div className="grid size-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft mb-4">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-display font-bold text-primary-dark text-sm leading-snug">{s.title}</h3>
                  <p className="mt-2 text-xs text-foreground/60 leading-relaxed">{s.desc}</p>
                </TiltCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
