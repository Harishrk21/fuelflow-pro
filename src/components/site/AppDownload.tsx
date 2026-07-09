import { motion } from "framer-motion";
import { COMPANY } from "@/lib/company";

function GooglePlayBadge() {
  return (
    <a
      href="https://play.google.com/store"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-3 rounded-xl bg-black text-white px-5 py-3 hover:scale-[1.02] transition shadow-elegant"
      aria-label="Get it on Google Play"
    >
      <svg viewBox="0 0 24 24" className="size-7 fill-current" aria-hidden>
        <path d="M3.6 2.2c-.3.2-.5.6-.5 1.1v17.4c0 .5.2.9.5 1.1l9.7-9.8L3.6 2.2zm12.1 7.4-2.5 2.5 2.5 2.5 3.1-1.8c.9-.5.9-1.4 0-1.9l-3.1-1.3zM4.6 21.5l9-9 2.5 2.5-9.4 5.4c-.8.5-1.6.2-2.1-.1.0.0zm0-19l2.1-.1c.5-.3 1.3-.6 2.1-.1l9.4 5.4-2.5 2.5-9-9z" />
      </svg>
      <div className="text-left leading-tight">
        <p className="text-[10px] uppercase tracking-wide text-white/70">Get it on</p>
        <p className="text-sm font-semibold">Google Play</p>
      </div>
    </a>
  );
}

function AppStoreBadge() {
  return (
    <a
      href="https://apps.apple.com"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-3 rounded-xl bg-black text-white px-5 py-3 hover:scale-[1.02] transition shadow-elegant"
      aria-label="Download on the App Store"
    >
      <svg viewBox="0 0 24 24" className="size-7 fill-current" aria-hidden>
        <path d="M16.7 12.6c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.6.8-3.3.8-.7 0-1.7-.8-2.9-.8-1.5 0-2.9.9-3.6 2.2-1.6 2.7-.4 6.7 1.1 8.9.7 1.1 1.6 2.3 2.7 2.2 1.1-.1 1.5-.7 2.8-.7s1.7.7 2.8.7c1.2 0 1.9-1.1 2.6-2.2.8-1.2 1.1-2.3 1.1-2.4-.1 0-2.1-.8-2.1-3.6zm-2.3-6.1c.6-.7 1-1.7.9-2.7-.9.1-1.9.6-2.5 1.3-.6.6-1.1 1.6-1 2.5 1 .1 1.9-.4 2.6-1.1z" />
      </svg>
      <div className="text-left leading-tight">
        <p className="text-[10px] uppercase tracking-wide text-white/70">Download on the</p>
        <p className="text-sm font-semibold">App Store</p>
      </div>
    </a>
  );
}

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
            <p className="text-primary font-semibold text-sm tracking-wider uppercase">Download the Call Diesel App</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-white leading-tight">
              Just order your diesel on app and relax
            </h2>
            <p className="mt-4 text-white/70 text-sm leading-relaxed">
              {COMPANY.tagline}® — order from preferred PSU pumps, track live, and keep consumption history at your fingertips.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <GooglePlayBadge />
            <AppStoreBadge />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
