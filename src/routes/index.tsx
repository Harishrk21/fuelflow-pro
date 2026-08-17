import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, MapPin, ShieldCheck, Radio, Fuel, Truck,
  Gauge, Clock, Leaf, Activity, LockKeyhole, Sparkles, CheckCircle2,
  Building2, Factory, HardHat, Hospital, Warehouse, Ship, Wheat, Signal,
  ServerCog, Hotel, GraduationCap, Landmark, Bus, Zap, TrendingDown,
  Wallet, Timer, Package, FileText, History, Star,
} from "lucide-react";
import heroImg from "@/assets/hero-illustration.png";
import procurementComparison from "@/assets/procurement-system-comparison.png";
import { BrochureFigure } from "@/components/site/PageParts";
import { PartnerLogos } from "@/components/site/PartnerLogos";
import { VehicleSpecs } from "@/components/site/VehicleSpecs";
import { LicensesTrust } from "@/components/site/LicensesTrust";
import { AppDownload } from "@/components/site/AppDownload";
import { WhatsAppDemo } from "@/components/site/WhatsAppDemo";
import { BrandWordmark } from "@/components/site/BrandLogo";
import { COMPANY } from "@/lib/company";
import { pageHead } from "@/lib/seo";
import { WhatsAppIcon, WhatsAppIconBadge } from "@/components/site/WhatsAppIcon";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () =>
    pageHead({
      title: "Call Diesel — Doorstep Diesel Delivery via WhatsApp & App",
      description:
        "India's digital fuel delivery platform. Order diesel, industrial oils & lubricants via WhatsApp. Live GPS tracking, IoT security, geo-fenced doorstep delivery.",
      path: "/",
    }),
});

// ----- Counter -----
function Counter({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / (duration * 1000), 1);
      setN(Math.floor(end * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);
  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-20 lg:py-28 ${className}`}>{children}</section>;
}

// ----- HERO -----
function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="absolute inset-x-0 -top-24 h-[500px] bg-[radial-gradient(60%_60%_at_50%_0%,color-mix(in_oklab,#67B548_18%,transparent)_0%,transparent_70%)] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-12 pb-16 md:pt-24 md:pb-32 grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
        <motion.div initial="hidden" animate="show" variants={fadeUp} className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-primary-dark shadow-soft">
            <Sparkles className="size-3.5 text-primary" />
            {COMPANY.tagline}® · Doorstep Diesel Delivery
          </div>
          <BrandWordmark className="mt-5 h-16 md:h-20 w-auto object-contain" />
          <h1 className="mt-3 text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-[1.05] text-primary-dark">
            The Future of{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Fuel Distribution</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 10">
                <path d="M0 5 Q 100 -5 200 5" stroke="#67B548" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            </span>{" "}
            is Here!
          </h1>
          <p className="mt-6 text-lg text-foreground/70 max-w-xl leading-relaxed">
            Order on app or WhatsApp. Authorized HP · IOCL · BPCL fuel — live-tracked,
            IoT-secured, and delivered to your doorstep.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/order" className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant hover:scale-[1.02] transition shine-on-hover">
              Order Fuel <ArrowRight className="size-4" />
            </Link>
            <a href={COMPANY.whatsappUrl} className="inline-flex items-center gap-2 rounded-xl bg-card border border-border px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-accent/40 transition">
              <WhatsAppIcon className="size-4" /> Order on WhatsApp
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-foreground/70">
            {[
              "Authorized HP · IOCL · BPCL", "GPS Enabled", "IoT Enabled",
              "Geo-Fenced Delivery", "PESO Approved",
            ].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-primary" /> {t}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9, rotateY: 12 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="lg:col-span-5 relative scene-3d">
          <div className="absolute -inset-6 rounded-full bg-primary/15 blur-3xl animate-orb" />
          <div className="relative mx-auto aspect-square max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none animate-float">
            <img src={heroImg} alt="Fuel delivery truck with WhatsApp ordering and GPS tracking" width={1200} height={1200} className="w-full h-full object-contain drop-shadow-2xl" />
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 lg:hidden">
            <div className="glass rounded-2xl px-4 py-3 shadow-elegant flex items-center gap-3">
              <MapPin className="size-5 text-primary shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Live tracking</p>
                <p className="text-sm font-semibold text-primary-dark">ETA 12 min</p>
              </div>
            </div>
            <div className="glass rounded-2xl px-4 py-3 shadow-elegant flex items-center gap-3">
              <Radio className="size-5 text-primary shrink-0 animate-pulse" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">IoT sensor</p>
                <p className="text-sm font-semibold text-primary-dark">Secure dispensing</p>
              </div>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="absolute top-6 left-0 hidden lg:flex glass rounded-2xl px-4 py-3 shadow-elegant items-center gap-3">
            <MapPin className="size-5 text-primary" />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Live tracking</p>
              <p className="text-sm font-semibold text-primary-dark">ETA 12 min</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }} className="absolute bottom-10 right-0 hidden lg:flex glass rounded-2xl px-4 py-3 shadow-elegant items-center gap-3">
            <Radio className="size-5 text-primary animate-pulse" />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground">IoT sensor</p>
              <p className="text-sm font-semibold text-primary-dark">Secure dispensing</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Trust logo strip */}
      <div className="relative border-t border-border/60 bg-white/40 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-6 overflow-hidden">
          <div className="flex gap-14 animate-marquee whitespace-nowrap text-primary-dark/60 font-display font-semibold text-lg">
            {[...Array(2)].flatMap((_, k) => [
              "L&T Construction", "Ashok Leyland", "TATA Projects", "Mahindra Logistics",
              "Reliance Infra", "JSW Steel", "Adani Ports", "Ultratech Cement",
            ].map((n, i) => (
              <span key={`${k}-${i}`} className="opacity-70">◆ {n}</span>
            )))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ----- STATS -----
function Stats() {
  const stats = [
    { end: 10000, suffix: "+", label: "Successful Deliveries" },
    { end: 500, suffix: "+", label: "Business Customers" },
    { end: 24, suffix: "/7", label: "Support" },
    { end: 99.9, suffix: "%", label: "Safe Delivery" },
    { end: 100, suffix: "%", label: "Authorized Fuel" },
  ];
  return (
    <Section className="!py-16">
      <div className="rounded-3xl bg-primary-dark p-8 md:p-12 shadow-elegant relative overflow-hidden">
        <div className="absolute -top-20 -right-20 size-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-8">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`text-center ${i === stats.length - 1 ? "col-span-2 sm:col-span-1" : ""}`}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white leading-none">
                {s.end === 24 ? "24/7" : <><Counter end={Math.floor(s.end)} />{s.suffix}</>}
              </div>
              <p className="mt-2 text-xs sm:text-sm text-white/70">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ----- ABOUT -----
function About() {
  const features = [
    { icon: Truck, t: "Doorstep Delivery" },
    { icon: Fuel, t: "Industrial Oil Supply" },
    { icon: Gauge, t: "Fuel Management" },
    { icon: Package, t: "Fleet Fuel Solutions" },
    { icon: Clock, t: "Scheduled Deliveries" },
    { icon: MapPin, t: "Live GPS Tracking" },
    { icon: Radio, t: "Smart IoT Monitoring" },
    { icon: ShieldCheck, t: "Secure & Authorized" },
  ];
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <p className="text-primary font-semibold text-sm tracking-wider uppercase">About Call Diesel</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold text-primary-dark leading-tight">
            A smart digital fuel platform — not just another supplier.
          </h2>
          <p className="mt-6 text-foreground/70 leading-relaxed">
            Call Diesel is a technology-driven fuel distribution platform serving
            enterprises, fleets, factories and construction sites. From WhatsApp
            ordering to IoT-secured dispensing, every step is measurable, trackable
            and safe.
          </p>
          <Link to="/technology" className="mt-6 inline-flex items-center gap-1 text-primary-dark font-semibold hover:gap-2 transition-all">
            Explore our technology <ArrowRight className="size-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl bg-card border border-border p-5 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition"
            >
              <div className="grid size-10 place-items-center rounded-xl bg-accent text-primary-dark">
                <f.icon className="size-5" />
              </div>
              <p className="mt-3 font-semibold text-primary-dark text-sm">{f.t}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ----- PROBLEM / SOLUTION -----
function ProblemSolution() {
  const problems = [
    { icon: TrendingDown, t: "Dead Mileage" },
    { icon: Fuel, t: "Fuel Spillages" },
    { icon: LockKeyhole, t: "Pilferages" },
    { icon: Timer, t: "Man-hour Loss" },
    { icon: Clock, t: "Time Loss" },
    { icon: Leaf, t: "Carbon Emissions" },
    { icon: Activity, t: "Unorganized Tracking" },
    { icon: FileText, t: "Manual Operations" },
  ];
  const solutions = [
    "Doorstep Delivery", "Live Tracking", "Secure Fuel Dispensing",
    "Scheduled Deliveries", "WhatsApp Ordering", "Fuel Analytics",
    "Consumption History", "IoT Security", "Geo-Fenced Operations",
  ];
  return (
    <Section>
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-primary font-semibold text-sm tracking-wider uppercase">Problem & Solution</p>
        <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold text-primary-dark">
          Fuel procurement is broken. We fixed it.
        </h2>
        <p className="mt-4 text-foreground/65">
          The traditional pump-to-site model creates loss at every step.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 md:mt-12 rounded-3xl border border-border bg-card p-3 md:p-4 shadow-soft overflow-hidden"
      >
        <BrochureFigure
          wide
          src={procurementComparison}
          alt="Side-by-side comparison of the current diesel procurement system with pump visits and winding routes versus the direct Call Diesel doorstep delivery path"
        />
        <p className="mt-4 text-center text-sm text-foreground/60 max-w-3xl mx-auto">
          The traditional pump-to-site route wastes time, fuel, and manpower. Call Diesel replaces
          the winding procurement path with a direct doorstep delivery line to your operations.
        </p>
      </motion.div>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {problems.map((p, i) => (
          <motion.div
            key={p.t}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="glass rounded-2xl p-4 md:p-5 shadow-soft"
          >
            <div className="grid size-11 place-items-center rounded-xl bg-destructive/10 text-destructive">
              <p.icon className="size-5" />
            </div>
            <p className="mt-3 font-semibold text-primary-dark">{p.t}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 rounded-3xl bg-gradient-primary p-8 md:p-12 shadow-elegant text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%)]" />
        <div className="relative">
          <h3 className="text-3xl md:text-4xl font-display font-bold">Our Solution</h3>
          <p className="mt-2 text-white/80">A complete digital fuel operating system.</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {solutions.map((s) => (
              <div key={s} className="flex items-center gap-3 rounded-xl bg-white/10 backdrop-blur px-4 py-3">
                <CheckCircle2 className="size-5 shrink-0" />
                <span className="text-sm font-medium">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

// ----- HOW IT WORKS -----
function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    { icon: WhatsAppIcon as any, t: "Book on App / WhatsApp", short: "Book" },
    { icon: Fuel, t: "Choose Fuel Type", short: "Fuel" },
    { icon: Package, t: "Select Quantity", short: "Qty" },
    { icon: MapPin, t: "Delivery Location", short: "Location" },
    { icon: Truck, t: "Track Live", short: "Track" },
    { icon: ShieldCheck, t: "Secure Delivery", short: "Deliver" },
    { icon: FileText, t: "Digital Invoice", short: "Invoice" },
    { icon: History, t: "History Saved", short: "History" },
  ];
  const step = steps[activeStep];

  return (
    <Section>
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-primary font-semibold text-sm tracking-wider uppercase">How it works</p>
        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary-dark">
          Fuel in 8 simple steps.
        </h2>
        <p className="mt-3 md:mt-4 text-sm md:text-base text-foreground/65">
          A guided, trackable flow from booking to digital proof of delivery.
        </p>
      </div>

      <div className="mt-8 md:hidden max-w-sm mx-auto">
        <div className="grid grid-cols-4 gap-2">
          {steps.map((s, i) => (
            <button
              key={s.t}
              type="button"
              onClick={() => setActiveStep(i)}
              aria-label={`Step ${i + 1}: ${s.t}`}
              aria-current={activeStep === i ? "step" : undefined}
              className="flex flex-col items-center gap-1 min-w-0"
            >
              <div
                className={`grid size-9 place-items-center rounded-full text-xs font-bold transition ${
                  activeStep === i
                    ? "bg-gradient-primary text-white shadow-elegant"
                    : "bg-card border border-border text-muted-foreground"
                }`}
              >
                {i + 1}
              </div>
              <span
                className={`w-full text-center text-[10px] leading-tight font-semibold truncate ${
                  activeStep === i ? "text-primary-dark" : "text-muted-foreground"
                }`}
              >
                {s.short}
              </span>
            </button>
          ))}
        </div>

        <motion.div
          key={step.t}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="mt-4 rounded-2xl border border-border bg-card p-4 shadow-soft text-center"
        >
          <div className="mx-auto grid size-11 place-items-center rounded-xl bg-accent text-primary-dark">
            <step.icon className="size-5" />
          </div>
          <p className="mt-3 text-xs font-bold text-primary uppercase tracking-wider">
            Step {activeStep + 1} of {steps.length}
          </p>
          <p className="mt-1 font-semibold text-primary-dark text-sm leading-snug">{step.t}</p>
        </motion.div>
      </div>

      <div className="mt-8 md:mt-12 hidden md:block rounded-3xl border border-border bg-card/70 p-4 sm:p-6 md:p-8 shadow-soft relative overflow-hidden">
        <div className="absolute inset-x-0 top-1/2 hidden lg:block h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 relative">
          {steps.map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative rounded-2xl border border-border/80 bg-background/80 p-4 md:p-5 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="grid size-11 place-items-center rounded-xl bg-accent text-primary-dark group-hover:bg-gradient-primary group-hover:text-primary-foreground transition">
                  <s.icon className="size-5" />
                </div>
                <span className="inline-flex items-center justify-center min-w-8 h-8 px-2 rounded-full bg-primary-dark text-primary-foreground text-xs font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-4 font-semibold text-primary-dark text-sm md:text-base leading-snug">
                {s.t}
              </p>
              <div className="mt-4 h-1.5 rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full bg-gradient-primary rounded-full"
                  style={{ width: `${((i + 1) / steps.length) * 100}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ----- WHATSAPP DEMO -----

// ----- SERVICES PREVIEW -----
function ServicesPreview() {
  const services = [
    { icon: Truck, t: "Doorstep Diesel", d: "Fast, secure diesel delivery to your site." },
    { icon: Fuel, t: "Industrial Oils", d: "High-grade industrial oils & lubricants." },
    { icon: Gauge, t: "Fleet Fuel Mgmt", d: "End-to-end fuel management for fleets." },
    { icon: HardHat, t: "Construction Supply", d: "Reliable supply for construction projects." },
    { icon: Zap, t: "Generator Fuel", d: "24/7 diesel for gensets & backup." },
    { icon: Package, t: "Bulk Delivery", d: "Large-scale commercial fuel delivery." },
    { icon: Clock, t: "Scheduled Delivery", d: "Recurring automatic top-ups." },
    { icon: Radio, t: "Emergency Fuel", d: "Rapid-response emergency service." },
    { icon: WhatsAppIcon as any, t: "WhatsApp Booking", d: "Order in seconds via WhatsApp." },
  ];
  return (
    <Section>
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <p className="text-primary font-semibold text-sm tracking-wider uppercase">Services</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold text-primary-dark">Every fuel need. One platform.</h2>
        </div>
        <Link to="/services" className="text-primary-dark font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
          View all <ArrowRight className="size-4" />
        </Link>
      </div>
      <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.t}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group rounded-2xl bg-card border border-border p-4 md:p-6 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition"
          >
            <div className="grid size-12 place-items-center rounded-xl bg-accent text-primary-dark group-hover:bg-gradient-primary group-hover:text-primary-foreground transition">
              <s.icon className="size-6" />
            </div>
            <h3 className="mt-5 text-lg font-display font-bold text-primary-dark">{s.t}</h3>
            <p className="mt-2 text-sm text-foreground/60">{s.d}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

// ----- INDUSTRIES -----
function Industries() {
  const items = [
    { i: HardHat, t: "Construction" }, { i: Factory, t: "Mining" },
    { i: Factory, t: "Factories" }, { i: Hospital, t: "Hospitals" },
    { i: Warehouse, t: "Warehouses" }, { i: Ship, t: "Ports" },
    { i: Ship, t: "Shipping" }, { i: Wheat, t: "Agriculture" },
    { i: Building2, t: "Infrastructure" }, { i: Signal, t: "Telecom" },
    { i: ServerCog, t: "Data Centers" }, { i: Hotel, t: "Hotels" },
    { i: GraduationCap, t: "Education" }, { i: Landmark, t: "Government" },
    { i: Bus, t: "Transport" },
  ];
  const highlighted = items.slice(0, 8);
  return (
    <Section>
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-primary font-semibold text-sm tracking-wider uppercase">Industries</p>
        <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold text-primary-dark">Trusted across sectors.</h2>
        <p className="mt-3 text-sm text-foreground/65">
          We serve multiple sectors. Here are the most active ones.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {highlighted.map((x) => (
          <div key={x.t} className="group rounded-2xl bg-card border border-border p-6 text-center hover:bg-gradient-primary hover:text-primary-foreground transition shadow-soft">
            <x.i className="size-7 mx-auto text-primary group-hover:text-primary-foreground" />
            <p className="mt-3 font-semibold text-sm">{x.t}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          to="/industries"
          className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary-dark hover:bg-accent/50 transition"
        >
          View all industries <ArrowRight className="size-4" />
        </Link>
      </div>
    </Section>
  );
}

// ----- WHY US -----
function WhyUs() {
  const reasons = [
    "GPS Enabled", "Geo Fencing", "IoT Technology", "Doorstep Delivery",
    "WhatsApp Ordering", "Mobile App", "Safe Fuel", "Digital History",
    "Cost Savings", "24×7 Support", "Trusted Supply", "Enterprise Ready",
  ];
  return (
    <Section>
      <div className="rounded-3xl bg-card border border-border p-8 md:p-14 shadow-soft">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-primary font-semibold text-sm tracking-wider uppercase">Why choose us</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold text-primary-dark leading-tight">
              Enterprise-grade fuel logistics, done right.
            </h2>
            <p className="mt-6 text-foreground/70">
              Built for scale, engineered for safety, priced for savings. From a
              single generator to a 500-vehicle fleet, Call Diesel adapts.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-primary-dark">
                <Wallet className="size-4" /> 5–10% Savings on Diesel Bills
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-primary-dark">
                <Leaf className="size-4" /> Reduce CO₂ emissions
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {reasons.map((r) => (
              <div key={r} className="flex items-center gap-2 rounded-xl bg-secondary/60 px-4 py-3 text-sm font-medium text-primary-dark">
                <CheckCircle2 className="size-4 text-primary shrink-0" /> {r}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

// ----- TESTIMONIALS -----
function Testimonials() {
  const t = [
    { name: "Ravi Kumar", role: "Ops Head, L&T Site", quote: "Call Diesel cut our fuel downtime to zero. The WhatsApp ordering is a game-changer." },
    { name: "Priya Menon", role: "Fleet Manager, Blue Dart", quote: "Live tracking and digital invoices finally gave us fuel visibility across 200 vehicles." },
    { name: "Ajay Sharma", role: "Facilities, DataCentric", quote: "24×7 generator fuel with IoT dispensing. Peace of mind for our data centre." },
  ];
  const marqueeItems = [...t, ...t];

  return (
    <Section>
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-primary font-semibold text-sm tracking-wider uppercase">Testimonials</p>
        <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold text-primary-dark">Loved by operations teams.</h2>
      </div>

      <div className="mt-12 overflow-hidden">
        <div className="flex w-max gap-4 md:gap-6 animate-marquee">
          {marqueeItems.map((x, i) => (
            <div
              key={`${x.name}-${i}`}
              className="w-[280px] sm:w-[320px] rounded-2xl bg-card border border-border p-5 md:p-6 shadow-soft"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="size-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mt-4 text-foreground/80 leading-relaxed text-sm md:text-base">"{x.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="size-10 rounded-full bg-gradient-primary grid place-items-center text-primary-foreground font-bold">
                  {x.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-primary-dark text-sm">{x.name}</p>
                  <p className="text-xs text-muted-foreground">{x.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ----- CTA -----
function CTA() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-10 md:p-16 shadow-elegant text-center">
        <div className="absolute -top-24 -left-24 size-72 rounded-full bg-white/15 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 size-72 rounded-full bg-primary-dark/40 blur-3xl" />
        <div className="relative">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground max-w-3xl mx-auto leading-tight">
            Ready to modernise your fuel operations?
          </h2>
          <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
            Talk to our team. Get a demo, a pilot, and a quote — all in 24 hours.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-white text-primary-dark px-6 py-3.5 text-sm font-semibold hover:scale-[1.02] transition">
              Get a Quote <ArrowRight className="size-4" />
            </Link>
            <a href={COMPANY.whatsappUrl} className="inline-flex items-center gap-2 rounded-xl bg-primary-dark text-white px-6 py-3.5 text-sm font-semibold hover:scale-[1.02] transition">
              <WhatsAppIconBadge iconClassName="size-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

function WhyDoorstep() {
  const items = [
    { t: "Hassle-free Fuel Procurement", d: "Order diesel with a click — no pump queues or barrel logistics." },
    { t: "No Wastages of Fuel", d: "Eliminate spillages, pilferages and dead mileage from your process." },
    { t: "Safe and Reliable Operations", d: "IoT brake interlock, geo-fenced dispensing and PESO-ready fleet." },
    { t: "5–10% Savings on Diesel Bills", d: "Right quality, right quantity and measurable consumption savings." },
  ];
  return (
    <Section>
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-primary font-semibold text-sm tracking-wider uppercase">Why choose doorstep diesel</p>
        <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold text-primary-dark">
          An innovation in your service
        </h2>
        <p className="mt-4 text-foreground/70">
          Diesel procurement is a matter of just a click on your Call Diesel App.
        </p>
      </div>
      <div className="mt-8 md:mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
        {items.map((x, i) => (
          <motion.div
            key={x.t}
            initial={{ opacity: 0, y: 20, rotateX: -6 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-2xl bg-card border border-border p-6 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition shine-on-hover"
          >
            <div className="size-10 rounded-xl bg-gradient-primary text-primary-foreground grid place-items-center font-bold mb-4">
              {i + 1}
            </div>
            <h3 className="font-display font-bold text-primary-dark">{x.t}</h3>
            <p className="mt-2 text-sm text-foreground/60 leading-relaxed">{x.d}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function HomePage() {
  return (
    <div>
      <Hero />
      <PartnerLogos />
      <WhatsAppDemo className="!pt-10 md:!pt-14" />
      <Stats />
      <About />
      <ProblemSolution />
      <WhyDoorstep />
      <HowItWorks />
      <ServicesPreview />
      <VehicleSpecs />
      <Industries />
      <WhyUs />
      <LicensesTrust />
      <AppDownload />
      <Testimonials />
      <CTA />
    </div>
  );
}
