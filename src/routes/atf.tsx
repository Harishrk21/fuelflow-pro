import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero, BrochureFigure } from "@/components/site/PageParts";
import { pageHead, crumbs } from "@/lib/seo";
import { WhatsAppMarketingStrip } from "@/components/site/WhatsAppMarketingStrip";
import { TiltCard } from "@/components/site/TiltCard";
import atfHeroBg from "@/assets/atf-hero-dashboard.png";
import brochureAtfOverview from "@/assets/brochure-atf-overview.png";
import brochureAtfFeatures from "@/assets/brochure-atf-features.png";
import {
  Gauge, TrendingUp, Wallet, ShieldCheck, Bell, LineChart,
  CheckCircle2, ArrowRight, Droplets, Activity, LockKeyhole, Database,
} from "lucide-react";

export const Route = createFileRoute("/atf")({
  component: Page,
  head: () =>
    pageHead({
      title: "ATF Fuel Management Device | Call Diesel Chennai",
      description:
        "Call Diesel ATF (Any Time Fuel): live diesel tank levels, sub-asset consumption tracking, authorised dispensing, and savings analytics for Chennai industries.",
      path: "/atf",
      breadcrumbs: [...crumbs.atf],
    }),
});

const cards = [
  { i: Gauge, t: "Live Fuel Level", v: "78%", d: "Real-time tank telemetry" },
  { i: TrendingUp, t: "Diesel Consumption", v: "1,245 L", d: "Last 7 days" },
  { i: LineChart, t: "Sub Asset Consumption", v: "12 assets", d: "Per-machine breakdown" },
  { i: Wallet, t: "Savings", v: "₹ 84,200", d: "Vs previous quarter" },
  { i: ShieldCheck, t: "Authorised Dispensing", v: "100%", d: "Digital authorisation" },
  { i: Bell, t: "Alerts", v: "3 active", d: "Level, tamper, refill" },
];

const benefits = [
  {
    icon: Activity,
    t: "Live tracking of fuel levels",
    d: "Automatic alerts on your mobile app when diesel levels are low — reorder via Call Diesel Mobile Petrol Pump.",
  },
  {
    icon: Droplets,
    t: "Overall fuel consumption through ATF",
    d: "Always know the exact amount of diesel filled into your on-site storage connected to ATF.",
  },
  {
    icon: Database,
    t: "Sub-asset consumption patterns",
    d: "Track diesel dispensed into DG sets and other sub-assets — daily, weekly, monthly and yearly.",
  },
  {
    icon: Wallet,
    t: "Tracking of your overall savings",
    d: "See what authorised, measured dispensing saves versus traditional procurement.",
  },
  {
    icon: LockKeyhole,
    t: "Dispensing authorised by you",
    d: "Diesel dispensing is possible only with authorisation from the ATF customer — ultimate security.",
  },
];

function Page() {
  return (
    <div>
      <PageHero
        eyebrow="Any Time Fuel"
        title="ATF — Smart Fuel Management Device."
        subtitle="A stationary equipment that acts as a diesel data management device — procurement and consumption information at a click on your phone."
        cta={{ to: "/contact", label: "Book a Demo" }}
        backgroundImage={atfHeroBg}
        backgroundImageClassName="absolute inset-0 h-full w-full object-cover object-center"
        subtitleClassName="text-primary-dark/90 font-medium"
      />
      <WhatsAppMarketingStrip />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-border bg-card p-3 md:p-4 shadow-soft mb-12"
        >
          <BrochureFigure
            src={brochureAtfOverview}
            alt="What is Call Diesel ATF — diesel data management device with live tracking and consumption insights"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-primary font-semibold text-sm tracking-wider uppercase">What is Call Diesel ATF</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-primary-dark leading-tight">
              A diesel data management device on your site.
            </h2>
            <p className="mt-5 text-foreground/70 leading-relaxed">
              ATF is stationary equipment that tracks diesel procurement and consumption.
              Get fuel levels, usage patterns, and savings data — all on your phone.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Live tracking of fuel levels in your ATF",
                "Overall fuel consumption through ATF",
                "Fuel consumption pattern of your sub-assets",
                "Tracking of your overall savings",
                "Dispensing authorised by you",
              ].map((x) => (
                <li key={x} className="flex items-start gap-2 text-sm text-foreground/80">
                  <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" /> {x}
                </li>
              ))}
            </ul>
          </motion.div>

          <TiltCard className="rounded-3xl bg-primary-dark text-white p-8 shadow-elegant relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
            <div className="relative">
              <p className="text-xs uppercase tracking-wider text-white/50">ATF Unit Preview</p>
              <h3 className="mt-2 text-2xl font-display font-bold">2000 Litres Total Capacity</h3>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-[10px] text-white/50">Total Refill</p>
                  <p className="text-xl font-bold">67,500 L</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-[10px] text-white/50">Total Dispensed</p>
                  <p className="text-xl font-bold">59,500 L</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-[10px] text-white/50">Tank 1</p>
                  <p className="text-xl font-bold text-primary">60% · 597 L</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-[10px] text-white/50">Tank 2</p>
                  <p className="text-xl font-bold text-primary">80% · 803 L</p>
                </div>
              </div>
              <div className="mt-6 space-y-2">
                <p className="text-xs font-semibold text-white/70">Sub Assets · DG Set 1 / DG Set 2</p>
                {["16/03 — 350 L", "12/02 — 400 L", "15/02 — 450 L"].map((r) => (
                  <div key={r} className="flex justify-between rounded-lg bg-white/5 px-3 py-2 text-xs">
                    <span>Refill history</span>
                    <span className="text-primary font-semibold">{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </TiltCard>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-primary font-semibold text-sm tracking-wider uppercase">Any Time Fuel</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-primary-dark">
            Monitor, control, and save — from your phone.
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-border bg-card p-3 md:p-4 shadow-soft mb-10"
        >
          <BrochureFigure
            src={brochureAtfFeatures}
            alt="ATF features: overall consumption, sub-asset patterns, live fuel level alerts, and authorised dispensing"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={b.t}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <TiltCard className="h-full rounded-2xl bg-card border border-border p-6 shadow-soft">
                <div className="grid size-11 place-items-center rounded-xl bg-accent text-primary-dark mb-4">
                  <b.icon className="size-5" />
                </div>
                <h3 className="font-display font-bold text-primary-dark">{b.t}</h3>
                <p className="mt-2 text-sm text-foreground/60 leading-relaxed">{b.d}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="rounded-3xl bg-card border border-border shadow-elegant p-6 md:p-10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Dashboard</p>
              <h2 className="text-2xl font-display font-bold text-primary-dark">ATF Live Overview</h2>
            </div>
            <span className="rounded-full bg-primary/10 text-primary text-xs font-semibold px-3 py-1">● Live</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards.map((c, i) => (
              <motion.div
                key={c.t}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl bg-gradient-hero border border-border p-6 shadow-soft shine-on-hover"
              >
                <div className="flex items-center justify-between">
                  <div className="grid size-10 place-items-center rounded-xl bg-white text-primary-dark shadow-soft">
                    <c.i className="size-5" />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{c.d}</span>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{c.t}</p>
                <p className="text-3xl font-display font-bold text-primary-dark">{c.v}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 grid lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 rounded-2xl bg-gradient-hero border border-border p-6 shadow-soft">
              <p className="text-sm font-semibold text-primary-dark mb-4">Consumption trend (30 days)</p>
              <svg viewBox="0 0 400 140" className="w-full h-40">
                <defs>
                  <linearGradient id="atf-g" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#67B548" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#67B548" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0 100 C 40 60, 80 80, 120 55 S 200 30, 240 60 S 320 90, 400 40 L 400 140 L 0 140 Z" fill="url(#atf-g)" />
                <path d="M0 100 C 40 60, 80 80, 120 55 S 200 30, 240 60 S 320 90, 400 40" stroke="#214C1F" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <div className="rounded-2xl bg-gradient-hero border border-border p-6 shadow-soft grid place-items-center">
              <div className="relative size-40">
                <svg viewBox="0 0 100 100" className="size-40 -rotate-90 animate-spin-slow">
                  <circle cx="50" cy="50" r="42" stroke="#EEF8E7" strokeWidth="10" fill="none" />
                  <circle cx="50" cy="50" r="42" stroke="#67B548" strokeWidth="10" fill="none" strokeDasharray="264" strokeDashoffset="70" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 grid place-items-center text-center">
                  <div>
                    <p className="text-3xl font-display font-bold text-primary-dark">74%</p>
                    <p className="text-xs text-muted-foreground">Tank Full</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant hover:scale-[1.02] transition">
              Book a Demo <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
