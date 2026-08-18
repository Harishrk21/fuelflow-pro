import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ScrollReveal } from "./ScrollReveal";

export function PageHero({
  eyebrow, title, subtitle, cta, backgroundImage, subtitleClassName, backgroundImageClassName, softOverlay,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  cta?: { to: string; label: string };
  backgroundImage?: string;
  subtitleClassName?: string;
  backgroundImageClassName?: string;
  softOverlay?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      {backgroundImage && (
        <>
          <img
            src={backgroundImage}
            alt=""
            aria-hidden
            loading="lazy"
            decoding="async"
            className={backgroundImageClassName ?? "absolute inset-0 h-full w-full object-cover object-right md:object-center"}
          />
          <div className={softOverlay ? "absolute inset-0 bg-[#F6F2E8]/35" : "absolute inset-0 bg-[#214C1F]/20"} />
          <div className={softOverlay
            ? "absolute inset-0 bg-gradient-to-t from-[#F6F2E8]/80 via-[#F6F2E8]/25 to-[#F6F2E8]/10"
            : "absolute inset-0 bg-gradient-to-r from-[#F6F2E8]/75 via-[#F6F2E8]/45 to-transparent"} />
          {!softOverlay && (
            <div className="absolute inset-0 bg-gradient-to-t from-[#F6F2E8]/55 via-transparent to-[#F6F2E8]/15" />
          )}
        </>
      )}
      {!backgroundImage && <div className="absolute inset-0 bg-gradient-mesh" />}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 md:py-28 lg:py-32 text-center">
        <p className="text-primary font-semibold text-xs sm:text-sm tracking-wider uppercase">{eyebrow}</p>
        <h1 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-dark leading-tight max-w-4xl mx-auto text-balance px-1">
          {title}
        </h1>
        <p className={`mt-4 sm:mt-6 text-base sm:text-lg max-w-2xl mx-auto text-pretty px-1 ${subtitleClassName ?? "text-foreground/70"}`}>{subtitle}</p>
        {cta && (
          <Link to={cta.to} className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant hover:scale-[1.02] transition">
            {cta.label} <ArrowRight className="size-4" />
          </Link>
        )}
      </div>
    </section>
  );
}

export function BrochureFigure({
  src,
  alt,
  className = "",
  wide = false,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  wide?: boolean;
  priority?: boolean;
}) {
  const widthClass = wide
    ? "max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl"
    : "max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl";

  return (
    <div className={`mx-auto w-full ${widthClass} ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className="w-full h-auto rounded-xl"
      />
    </div>
  );
}

export function FeatureGrid({
  items, cols = 3,
}: { items: { icon: LucideIcon; title: string; desc?: string }[]; cols?: 2 | 3 | 4 }) {
  const grid = cols === 4 ? "lg:grid-cols-4" : cols === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3";
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 md:py-20">
      <div className={`grid grid-cols-1 sm:grid-cols-2 ${grid} gap-6 sm:gap-5`}>
        {items.map((f, i) => (
          <ScrollReveal key={f.title} index={i}>
            <div className="group relative rounded-2xl bg-card border border-border p-6 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition shine-on-hover h-full">
              <div className="grid size-12 place-items-center rounded-xl bg-accent text-primary-dark group-hover:bg-gradient-primary group-hover:text-primary-foreground transition">
                <f.icon className="size-6" />
              </div>
              <h3 className="mt-5 text-lg font-display font-bold text-primary-dark">{f.title}</h3>
              {f.desc && <p className="mt-2 text-sm text-foreground/60">{f.desc}</p>}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
