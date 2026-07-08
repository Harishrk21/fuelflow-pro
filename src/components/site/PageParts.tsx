import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export function PageHero({
  eyebrow, title, subtitle, cta,
}: { eyebrow: string; title: string; subtitle: string; cta?: { to: string; label: string } }) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 text-center">
        <p className="text-primary font-semibold text-sm tracking-wider uppercase">{eyebrow}</p>
        <h1 className="mt-4 text-5xl md:text-6xl font-display font-bold text-primary-dark leading-tight max-w-4xl mx-auto">
          {title}
        </h1>
        <p className="mt-6 text-lg text-foreground/70 max-w-2xl mx-auto">{subtitle}</p>
        {cta && (
          <Link to={cta.to} className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant hover:scale-[1.02] transition">
            {cta.label} <ArrowRight className="size-4" />
          </Link>
        )}
      </div>
    </section>
  );
}

export function FeatureGrid({
  items, cols = 3,
}: { items: { icon: LucideIcon; title: string; desc?: string }[]; cols?: 2 | 3 | 4 }) {
  const grid = cols === 4 ? "lg:grid-cols-4" : cols === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3";
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className={`grid sm:grid-cols-2 ${grid} gap-5`}>
        {items.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group rounded-2xl bg-card border border-border p-6 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition"
          >
            <div className="grid size-12 place-items-center rounded-xl bg-accent text-primary-dark group-hover:bg-gradient-primary group-hover:text-primary-foreground transition">
              <f.icon className="size-6" />
            </div>
            <h3 className="mt-5 text-lg font-display font-bold text-primary-dark">{f.title}</h3>
            {f.desc && <p className="mt-2 text-sm text-foreground/60">{f.desc}</p>}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
