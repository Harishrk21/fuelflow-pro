import { motion } from "framer-motion";
import { Shield, FileCheck, Award, Building2 } from "lucide-react";
import { LICENSES, COMPANY } from "@/lib/company";
import { TiltCard } from "./TiltCard";

export function LicensesTrust() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-semibold text-sm tracking-wider uppercase">Our Licenses</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold text-primary-dark leading-tight">
            Fully licensed. Fully transparent.
          </h2>
          <p className="mt-5 text-foreground/70 leading-relaxed">
            {COMPANY.legalName} operates with incorporation, DPIIT recognition,
            Weights &amp; Measures verification, and authorised PSU fuel partnerships.
          </p>
          <div className="mt-8 rounded-2xl bg-primary-dark text-white p-6 shadow-elegant relative overflow-hidden">
            <div className="absolute -right-8 -top-8 size-32 rounded-full bg-primary/30 blur-2xl animate-orb" />
            <Building2 className="size-8 text-primary mb-3" />
            <p className="font-display font-bold text-lg">{COMPANY.legalName}</p>
            <p className="mt-2 text-sm text-white/70">{COMPANY.address}</p>
            <p className="mt-1 text-sm text-white/70">PAN: {COMPANY.pan}</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {LICENSES.map((l, i) => (
            <motion.div
              key={l.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <TiltCard className="h-full rounded-2xl bg-card border border-border p-4 md:p-5 shadow-soft">
                <div className="flex items-start gap-3">
                  <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent text-primary-dark">
                    {i % 2 === 0 ? <Shield className="size-5" /> : i % 3 === 0 ? <Award className="size-5" /> : <FileCheck className="size-5" />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-dark text-sm">{l.title}</h3>
                    <p className="mt-1 text-xs text-foreground/60 leading-relaxed">{l.body}</p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
