import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { COMPANY } from "@/lib/company";
import { WhatsAppIconBadge } from "@/components/site/WhatsAppIcon";

export function AppDownload({ className = "" }: { className?: string }) {
  return (
    <section className={`mx-auto max-w-7xl px-6 py-16 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl bg-primary-dark p-8 md:p-12 shadow-elegant"
      >
        <div className="absolute -top-20 -left-10 size-56 rounded-full bg-primary/25 blur-3xl animate-orb" />
        <div className="absolute -bottom-16 right-0 size-48 rounded-full bg-white/10 blur-3xl animate-orb-delayed" />
        <div className="relative grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-primary font-semibold text-sm tracking-wider uppercase">Order diesel now</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-white leading-tight">
              Just order your diesel and relax
            </h2>
            <p className="mt-4 text-white/70 text-sm leading-relaxed">
              {COMPANY.tagline}® — book on WhatsApp or the Call Diesel app flow. Live tracking,
              digital invoices, and authorised HP / IOCL / BPCL fuel.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <a
              href={COMPANY.whatsappUrl}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:scale-[1.02] transition"
            >
              <WhatsAppIconBadge iconClassName="size-4" className="p-0.5" />
              WhatsApp {COMPANY.whatsappDisplay}
            </a>
            <Link
              to="/order"
              className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-primary-dark hover:scale-[1.02] transition"
            >
              Order on the website
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
