import { FUEL_PARTNERS } from "@/lib/company";
import { TiltCard } from "./TiltCard";
import { ScrollReveal } from "./ScrollReveal";

export function PartnerLogos({
  compact = false,
  className = "",
}: {
  compact?: boolean;
  className?: string;
}) {
  return (
    <section className={className}>
      <div className={compact ? "" : "mx-auto max-w-7xl px-6 py-16"}>
        <ScrollReveal direction="up">
          <div className="text-center">
            <p className="text-primary font-semibold text-sm tracking-wider uppercase">
              Authorized Fuel Ent Partners
            </p>
            {!compact && (
              <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-primary-dark">
                Fuel from India&apos;s most trusted PSUs
              </h2>
            )}
          </div>
        </ScrollReveal>
        <div className={`mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5 ${compact ? "mt-6" : ""}`}>
          {FUEL_PARTNERS.map((p, i) => (
            <ScrollReveal key={p.id} index={i}>
              <TiltCard className="relative rounded-2xl bg-card border border-border p-4 md:p-8 shadow-soft hover:shadow-elegant overflow-hidden h-full">
                <div className="absolute -top-10 -right-10 size-28 rounded-full bg-primary/10 blur-2xl animate-orb" />
                <div className="relative flex flex-col items-center text-center gap-4">
                  <div className="grid size-16 md:size-24 place-items-center rounded-2xl bg-white border border-border shadow-soft p-2 md:p-3 animate-float-delayed">
                    <img
                      src={p.logo}
                      alt={`${p.name} logo`}
                      className="max-h-10 md:max-h-16 max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="font-display font-bold text-primary-dark text-sm md:text-lg">{p.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{p.short} · Authorized Partner</p>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
