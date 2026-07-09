import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { PageHero, BrochureFigure } from "@/components/site/PageParts";
import { WhatsAppMarketingStrip } from "@/components/site/WhatsAppMarketingStrip";
import { VehicleSpecs } from "@/components/site/VehicleSpecs";
import technologyHeroBg from "@/assets/technology-hero-updated.png";
import brochureMobilePump from "@/assets/brochure-mobile-petrol-pump.png";
import {
  MapPin, Radio, LockKeyhole, ShieldCheck, Activity, Gauge,
  Satellite, Cpu, CheckCircle2, Truck, Fuel, FileText, ChevronRight,
  Zap, TrendingDown, History,
} from "lucide-react";

export const Route = createFileRoute("/technology")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Technology — IoT, GPS & Smart Fuel Dispensing | Call Diesel" },
      { name: "description", content: "Accurate GPS geo-fencing, IoT brake-interlock, mobile petrol pump tech and authorised dispensing from Call Diesel." },
      { property: "og:title", content: "Technology — Call Diesel" },
      { property: "og:url", content: "/technology" },
    ],
    links: [{ rel: "canonical", href: "/technology" }],
  }),
});

const techLayers = [
  {
    id: "gps",
    icon: MapPin,
    label: "GPS Tracking",
    headline: "See every tanker, live.",
    summary: "Real-time vehicle location from dispatch to your site — with ETA updates your team can act on.",
    points: [
      "Live tanker location on every active delivery",
      "ETA updates for site readiness",
      "Full route visibility for operations teams",
      "Reduces idle waiting at delivery points",
    ],
    visual: "gps" as const,
  },
  {
    id: "geofence",
    icon: Satellite,
    label: "Geo-Fencing",
    headline: "Fuel only where it should be.",
    summary: "A virtual boundary around your site. Dispensing unlocks only inside the approved zone — no manual override.",
    points: [
      "Delivery location is virtually geo-fenced",
      "Dispensing allowed only inside the zone",
      "No manual interference during fuel transfer",
      "Authorised deliveries at approved coordinates",
    ],
    visual: "geofence" as const,
  },
  {
    id: "iot",
    icon: Radio,
    label: "IoT Monitoring",
    headline: "Every litre, measured and logged.",
    summary: "Smart sensors and controllers record dispensing volume, timing, and status in real time.",
    points: [
      "Controller-driven mobile petrol pump",
      "Live telemetry on every delivery",
      "Accurate quantity measurement",
      "Digital logs for audit and reconciliation",
    ],
    visual: "iot" as const,
  },
  {
    id: "brake",
    icon: LockKeyhole,
    label: "Brake Interlock",
    headline: "Safety built into dispensing.",
    summary: "When the nozzle is lifted, vehicle brakes engage automatically — preventing movement during fuel transfer.",
    points: [
      "Reliable IoT brake interlocking system",
      "Brakes engage as soon as nozzle is lifted",
      "Prevents vehicle movement during dispensing",
      "Added security for on-site operations",
    ],
    visual: "brake" as const,
  },
  {
    id: "analytics",
    icon: Gauge,
    label: "Live Analytics",
    headline: "Data you can use, instantly.",
    summary: "Dashboards for consumption, fleet status, and delivery history — all in one place.",
    points: [
      "Real-time delivery and fleet dashboards",
      "Consumption trends over time",
      "Instant order and invoice history",
      "Supports procurement and finance reporting",
    ],
    visual: "analytics" as const,
  },
];

const deliverySteps = [
  {
    step: 1,
    icon: Fuel,
    title: "You place an order",
    short: "Order",
    desc: "Book diesel via the Call Diesel app or WhatsApp. Choose fuel type, quantity, and delivery location.",
  },
  {
    step: 2,
    icon: Truck,
    title: "Tanker is dispatched",
    short: "Dispatch",
    desc: "A GPS-enabled tanker is assigned. You receive live tracking and ETA updates on your phone.",
  },
  {
    step: 3,
    icon: Satellite,
    title: "Geo-fence activates",
    short: "Geo-Fence",
    desc: "When the tanker enters your approved delivery zone, the geo-fence unlocks dispensing permissions.",
  },
  {
    step: 4,
    icon: LockKeyhole,
    title: "Secure dispensing",
    short: "Dispense",
    desc: "Brake interlock engages. IoT sensors measure every litre dispensed — safely and accurately.",
  },
  {
    step: 5,
    icon: FileText,
    title: "Digital proof delivered",
    short: "Invoice",
    desc: "You get a digital invoice, quantity confirmation, and the order is saved to your history.",
  },
];

const customerWins = [
  { icon: ShieldCheck, title: "Right quality & quantity", desc: "Authorized PSU fuel, measured by IoT sensors." },
  { icon: TrendingDown, title: "No spillages or pilferages", desc: "Geo-fenced, controlled dispensing at your site." },
  { icon: History, title: "Instant consumption history", desc: "Every order logged digitally for easy tracking." },
  { icon: Zap, title: "Big savings", desc: "5–10% savings through efficient fuel management." },
];

function BrakeInterlockDemo() {
  const [engaged, setEngaged] = useState(false);
  return (
    <div className="relative aspect-square max-w-sm mx-auto rounded-2xl bg-card border border-border p-6 flex flex-col items-center justify-center gap-6">
      <button
        type="button"
        onClick={() => setEngaged((v) => !v)}
        className="text-xs font-semibold text-primary hover:underline"
      >
        Tap to {engaged ? "reset" : "lift nozzle"}
      </button>
      <div className="flex items-end gap-6">
        <div className="text-center">
          <div className={`grid size-14 place-items-center rounded-2xl transition-colors ${engaged ? "bg-destructive/10 text-destructive" : "bg-accent text-primary-dark"}`}>
            <Truck className="size-7" />
          </div>
          <p className="mt-2 text-[10px] font-semibold text-muted-foreground">Vehicle</p>
        </div>
        <ChevronRight className="size-5 text-muted-foreground mb-6" />
        <div className="text-center">
          <motion.div
            animate={engaged ? { y: -8 } : { y: 0 }}
            className={`grid size-14 place-items-center rounded-2xl transition-colors ${engaged ? "bg-primary text-white" : "bg-accent text-primary-dark"}`}
          >
            <Fuel className="size-7" />
          </motion.div>
          <p className="mt-2 text-[10px] font-semibold text-muted-foreground">Nozzle</p>
        </div>
      </div>
      <motion.div
        animate={{ opacity: engaged ? 1 : 0.4, scale: engaged ? 1 : 0.95 }}
        className={`rounded-xl px-4 py-3 text-center text-sm font-semibold w-full ${engaged ? "bg-primary-dark text-white" : "bg-secondary text-primary-dark"}`}
      >
        {engaged ? (
          <span className="inline-flex items-center gap-2"><LockKeyhole className="size-4" /> Brakes engaged — safe to dispense</span>
        ) : (
          "Nozzle down — vehicle can move"
        )}
      </motion.div>
    </div>
  );
}

function TechVisual({ type }: { type: (typeof techLayers)[number]["visual"] }) {
  if (type === "gps") {
    return (
      <div className="relative aspect-square max-w-sm mx-auto rounded-2xl bg-primary-dark/5 border border-border overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,#67B54822,transparent_60%)]" />
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 200">
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#214C1F" strokeWidth="0.5" />
          </pattern>
          <rect width="200" height="200" fill="url(#grid)" />
        </svg>
        <motion.div
          animate={{ x: [0, 30, 60, 40, 0], y: [0, 20, 10, 40, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4"
        >
          <div className="relative">
            <div className="size-10 rounded-full bg-primary/30 animate-ping absolute inset-0" />
            <div className="relative grid size-10 place-items-center rounded-full bg-gradient-primary text-white shadow-elegant">
              <Truck className="size-5" />
            </div>
          </div>
        </motion.div>
        <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/90 backdrop-blur px-3 py-2 border border-border text-xs">
          <p className="font-semibold text-primary-dark">Live GPS</p>
          <p className="text-muted-foreground">ETA: 12 min · En route</p>
        </div>
      </div>
    );
  }

  if (type === "geofence") {
    return (
      <div className="relative aspect-square max-w-sm mx-auto rounded-2xl bg-primary-dark/5 border border-border overflow-hidden flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute size-48 rounded-full border-2 border-dashed border-primary"
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
          className="absolute size-36 rounded-full border border-primary/40 bg-primary/5"
        />
        <div className="relative z-10 grid size-12 place-items-center rounded-full bg-gradient-primary text-white shadow-elegant">
          <MapPin className="size-6" />
        </div>
        <div className="absolute top-4 right-4 rounded-lg bg-primary text-white text-[10px] font-bold px-2 py-1">
          ZONE ACTIVE
        </div>
        <p className="absolute bottom-4 text-xs font-medium text-primary-dark bg-white/90 px-3 py-1.5 rounded-lg border border-border">
          Dispensing unlocked inside fence
        </p>
      </div>
    );
  }

  if (type === "iot") {
    return (
      <div className="relative aspect-square max-w-sm mx-auto rounded-2xl bg-primary-dark p-6 text-white overflow-hidden">
        <div className="absolute -top-10 -right-10 size-32 rounded-full bg-primary/30 blur-2xl" />
        <p className="text-xs font-semibold text-white/60 uppercase tracking-wider">IoT Controller</p>
        <div className="mt-6 space-y-4">
          {[
            { label: "Flow rate", value: "42 L/min", pct: 70 },
            { label: "Volume dispensed", value: "312 L", pct: 62 },
            { label: "Sensor status", value: "Active", pct: 100 },
          ].map((row, i) => (
            <div key={row.label}>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-white/70">{row.label}</span>
                <span className="font-semibold">{row.value}</span>
              </div>
              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${row.pct}%` }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                  className="h-full bg-primary rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-2 text-xs">
          <Radio className="size-4 text-primary animate-pulse" />
          <span className="text-white/80">Live telemetry streaming</span>
        </div>
      </div>
    );
  }

  if (type === "brake") return <BrakeInterlockDemo />;

  return (
    <div className="relative aspect-square max-w-sm mx-auto rounded-2xl bg-gradient-hero border border-border p-5">
      <p className="text-xs font-semibold text-primary uppercase tracking-wider">Dashboard</p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {[
          { label: "Deliveries today", val: "24" },
          { label: "Litres dispensed", val: "8,400" },
          { label: "Active fleet", val: "6" },
          { label: "Avg. ETA", val: "18m" },
        ].map((s) => (
          <div key={s.label} className="rounded-xl bg-white border border-border p-3">
            <p className="text-lg font-display font-bold text-primary-dark">{s.val}</p>
            <p className="text-[10px] text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 h-16 rounded-xl bg-white border border-border flex items-end gap-1 px-3 pb-2">
        {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="flex-1 bg-primary/70 rounded-t-sm"
          />
        ))}
      </div>
    </div>
  );
}

function TechExplorer() {
  const [active, setActive] = useState(0);
  const layer = techLayers[active];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-primary font-semibold text-sm tracking-wider uppercase">Explore the stack</p>
        <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold text-primary-dark">
          Five layers. One secure system.
        </h2>
        <p className="mt-4 text-foreground/65">
          Tap a technology layer below to see how it works and why it matters.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {techLayers.map((t, i) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setActive(i)}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
              active === i
                ? "bg-gradient-primary text-primary-foreground shadow-soft"
                : "bg-card border border-border text-primary-dark hover:bg-accent/50"
            }`}
          >
            <t.icon className="size-4" />
            {t.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={layer.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="mt-10 grid lg:grid-cols-2 gap-8 md:gap-12 items-center rounded-3xl border border-border bg-card p-6 md:p-10 shadow-soft"
        >
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-wider">{layer.label}</p>
            <h3 className="mt-2 text-3xl md:text-4xl font-display font-bold text-primary-dark leading-tight">
              {layer.headline}
            </h3>
            <p className="mt-4 text-foreground/70 leading-relaxed">{layer.summary}</p>
            <ul className="mt-6 space-y-3">
              {layer.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-foreground/75">
                  <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <TechVisual type={layer.visual} />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

function DeliveryFlow() {
  const [activeStep, setActiveStep] = useState(0);
  const step = deliverySteps[activeStep];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-24 bg-gradient-hero border-y border-border/60">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-primary font-semibold text-sm tracking-wider uppercase">How it all connects</p>
        <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold text-primary-dark">
          From order to invoice — step by step
        </h2>
        <p className="mt-4 text-foreground/65">
          Click each step to follow the full technology journey.
        </p>
      </div>

      <div className="mt-12 hidden md:flex items-center justify-between max-w-4xl mx-auto relative">
        <div className="absolute top-5 left-8 right-8 h-0.5 bg-border" />
        {deliverySteps.map((s, i) => (
          <button
            key={s.step}
            type="button"
            onClick={() => setActiveStep(i)}
            className="relative z-10 flex flex-col items-center gap-2 group"
          >
            <div
              className={`grid size-10 place-items-center rounded-full font-bold text-sm transition ${
                activeStep === i
                  ? "bg-gradient-primary text-white shadow-elegant scale-110"
                  : activeStep > i
                    ? "bg-primary-dark text-white"
                    : "bg-card border-2 border-border text-muted-foreground group-hover:border-primary"
              }`}
            >
              {activeStep > i ? <CheckCircle2 className="size-5" /> : s.step}
            </div>
            <span className={`text-xs font-semibold ${activeStep === i ? "text-primary-dark" : "text-muted-foreground"}`}>
              {s.short}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-8 md:hidden max-w-sm mx-auto">
        <div className="flex items-center justify-between gap-1">
          {deliverySteps.map((s, i) => (
            <button
              key={s.step}
              type="button"
              onClick={() => setActiveStep(i)}
              aria-label={`Step ${s.step}: ${s.short}`}
              aria-current={activeStep === i ? "step" : undefined}
              className="flex flex-1 flex-col items-center gap-1.5 min-w-0"
            >
              <div
                className={`grid size-9 place-items-center rounded-full text-xs font-bold transition ${
                  activeStep === i
                    ? "bg-gradient-primary text-white shadow-elegant scale-105"
                    : activeStep > i
                      ? "bg-primary-dark text-white"
                      : "bg-card border-2 border-border text-muted-foreground"
                }`}
              >
                {activeStep > i ? <CheckCircle2 className="size-4" /> : s.step}
              </div>
              <span
                className={`w-full text-center text-[10px] leading-tight font-semibold truncate px-0.5 ${
                  activeStep === i ? "text-primary-dark" : "text-muted-foreground"
                }`}
              >
                {s.short}
              </span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step.step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
          className="mt-10 max-w-2xl mx-auto rounded-2xl bg-card border border-border p-6 md:p-8 shadow-elegant text-center"
        >
          <div className="inline-grid size-14 place-items-center rounded-2xl bg-accent text-primary-dark mb-4">
            <step.icon className="size-7" />
          </div>
          <p className="text-xs font-bold text-primary uppercase tracking-wider">Step {step.step} of 5</p>
          <h3 className="mt-2 text-2xl font-display font-bold text-primary-dark">{step.title}</h3>
          <p className="mt-3 text-foreground/70 leading-relaxed">{step.desc}</p>
          <div className="mt-6 flex justify-center gap-2">
            <button
              type="button"
              disabled={activeStep === 0}
              onClick={() => setActiveStep((s) => s - 1)}
              className="rounded-lg border border-border px-4 py-2 text-sm font-medium disabled:opacity-40 hover:bg-accent/50 transition"
            >
              Previous
            </button>
            <button
              type="button"
              disabled={activeStep === deliverySteps.length - 1}
              onClick={() => setActiveStep((s) => s + 1)}
              className="rounded-lg bg-gradient-primary text-white px-4 py-2 text-sm font-semibold disabled:opacity-40 hover:opacity-90 transition"
            >
              Next step
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

function MobilePumpBento() {
  const items = [
    { icon: Satellite, title: "Accurate GPS", desc: "Live tanker location from dispatch to your site with ETA updates.", color: "from-primary/15 to-primary/5" },
    { icon: MapPin, title: "Geo-Fencing", desc: "Fuel dispenses only inside your approved delivery zone.", color: "from-primary-dark/10 to-transparent" },
    { icon: Cpu, title: "IoT Controller", desc: "Controller-driven mobile petrol pump with live telemetry.", color: "from-accent to-secondary/50" },
    { icon: LockKeyhole, title: "Brake Interlock", desc: "Vehicle brakes engage automatically when the nozzle is lifted.", color: "from-primary/10 to-accent/30" },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <p className="text-primary font-semibold text-sm tracking-wider uppercase">Mobile petrol pump</p>
        <h2 className="mt-3 text-4xl font-display font-bold text-primary-dark">
          Important features of Call Diesel Mobile Petrol Pump
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-border bg-card p-3 md:p-4 shadow-soft mb-10"
      >
        <BrochureFigure
          src={brochureMobilePump}
          alt="Call Diesel mobile petrol pump with GPS, geo-fencing, IoT controller and brake interlock features"
        />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <p className="text-foreground/70 leading-relaxed">
            A PESO-approved mobile dispensing unit — not a basic tanker. GPS, geo-fencing,
            IoT controllers, and brake interlock work together as one secure system.
          </p>
          <div className="mt-6 rounded-2xl bg-primary-dark text-white p-5">
            <p className="text-sm font-semibold">In simple terms:</p>
            <p className="mt-2 text-sm text-white/80 leading-relaxed">
              Fuel arrives at your site. Dispensing only happens in the right place,
              with the right safety checks, and every litre is recorded digitally.
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`rounded-2xl bg-gradient-to-br ${item.color} border border-border p-5 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition`}
            >
              <item.icon className="size-7 text-primary mb-3" />
              <h3 className="font-display font-bold text-primary-dark">{item.title}</h3>
              <p className="mt-2 text-sm text-foreground/65 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CustomerBenefits() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-28">
      <div className="rounded-3xl bg-gradient-primary p-8 md:p-12 shadow-elegant text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_80%_20%,white,transparent_50%)]" />
        <div className="relative">
          <p className="text-sm font-semibold uppercase tracking-wider text-white/80">What you get</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold">Diesel customers win on every delivery</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {customerWins.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-5"
              >
                <c.icon className="size-6 mb-3" />
                <h3 className="font-semibold text-sm">{c.title}</h3>
                <p className="mt-2 text-xs text-white/75 leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Page() {
  return (
    <div>
      <PageHero
        eyebrow="Technology"
        title="Fuel logistics, engineered like software."
        subtitle="GPS tracking, geo-fencing, IoT controllers, and brake interlock — built into every Call Diesel delivery. Tap below to explore how it works."
        subtitleClassName="text-primary-dark/95 font-medium"
        backgroundImage={technologyHeroBg}
      />
      <WhatsAppMarketingStrip />
      <TechExplorer />
      <DeliveryFlow />
      <MobilePumpBento />
      <CustomerBenefits />
      <VehicleSpecs />
    </div>
  );
}
