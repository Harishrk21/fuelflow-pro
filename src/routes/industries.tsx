import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { PageHero } from "@/components/site/PageParts";
import { WhatsAppMarketingStrip } from "@/components/site/WhatsAppMarketingStrip";
import {
  HardHat, Factory, Hospital, Warehouse, Ship, Wheat, Building2, Signal,
  ServerCog, Hotel, GraduationCap, Landmark, Bus, CheckCircle2, ArrowRight,
  Fuel, MapPin, ShieldCheck,
} from "lucide-react";
import technologyHeroBg from "@/assets/technology-hero-updated.png";
import { COMPANY } from "@/lib/company";
import { WhatsAppIconBadge } from "@/components/site/WhatsAppIcon";

export const Route = createFileRoute("/industries")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Industries We Serve — Call Diesel" },
      { name: "description", content: "Doorstep diesel for construction, mining, factories, hospitals, warehouses, ports, agriculture, telecom, data centres and more." },
      { property: "og:title", content: "Industries — Call Diesel" },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
});

const industries = [
  {
    id: "construction",
    icon: HardHat,
    title: "Construction",
    headline: "Keep projects moving without fuel downtime.",
    desc: "Construction sites run on tight schedules. Call Diesel delivers authorised diesel directly to your project yard — with live GPS tracking and geo-fenced dispensing so fuel reaches the right equipment at the right time.",
    points: ["On-site delivery for excavators, mixers & gensets", "Scheduled top-ups for multi-site projects", "Digital invoices for project accounting"],
  },
  {
    id: "mining",
    icon: Factory,
    title: "Mining",
    headline: "Reliable fuel for remote and high-demand operations.",
    desc: "Mining operations consume diesel at scale. Our mobile petrol pump fleet brings PSU-authorised fuel to your site with IoT-secured dispensing and consumption records your operations team can trust.",
    points: ["Bulk delivery for heavy machinery", "Secure dispensing in remote locations", "Consumption tracking for cost control"],
  },
  {
    id: "factories",
    icon: Factory,
    title: "Factories",
    headline: "Industrial fuel supply without production interruptions.",
    desc: "Factories need uninterrupted power and process fuel. Call Diesel supports manufacturing units with doorstep diesel, industrial oils, and scheduled deliveries aligned to your shift patterns.",
    points: ["Generator and boiler fuel supply", "Industrial lubricants on request", "Recurring delivery schedules"],
  },
  {
    id: "hospitals",
    icon: Hospital,
    title: "Hospitals",
    headline: "Critical backup power, delivered on time.",
    desc: "Hospitals cannot afford generator downtime. We provide priority diesel delivery for backup gensets with live tracking and verified quantity — so patient care never depends on a fuel run.",
    points: ["24×7 emergency fuel support", "Priority dispatch for healthcare sites", "Compliant digital invoicing"],
  },
  {
    id: "warehouses",
    icon: Warehouse,
    title: "Warehouses",
    headline: "Fuel for fleets, forklifts and backup power.",
    desc: "Distribution centres and warehouses run forklifts, trucks and gensets around the clock. Call Diesel simplifies procurement with app or WhatsApp ordering and trackable doorstep delivery.",
    points: ["Fleet yard fuel delivery", "Generator backup for cold storage", "Order history for logistics teams"],
  },
  {
    id: "ports",
    icon: Ship,
    title: "Ports",
    headline: "Fuel logistics for port-side operations.",
    desc: "Port operations depend on heavy equipment and vehicle fleets. We deliver authorised diesel to port-adjacent yards and facilities with GPS-enabled tankers and secure dispensing controls.",
    points: ["Equipment and vehicle fuel supply", "Live delivery tracking", "Authorised HP / IOCL / BPCL fuel"],
  },
  {
    id: "shipping",
    icon: Ship,
    title: "Shipping",
    headline: "Support for maritime-adjacent fuel needs.",
    desc: "Shipping companies and marine service providers need dependable onshore fuel. Call Diesel bridges the gap with doorstep delivery, digital records, and enterprise-grade security.",
    points: ["Onshore diesel for support fleets", "Scheduled deliveries for terminals", "Digital proof of every delivery"],
  },
  {
    id: "agriculture",
    icon: Wheat,
    title: "Agriculture",
    headline: "Diesel for farms, harvesters and irrigation.",
    desc: "Agricultural operations need fuel at the field, not at the pump. Order via app or WhatsApp and get diesel delivered to your farm or storage point with quantity you can verify.",
    points: ["Tractor and harvester fuel supply", "Seasonal delivery planning", "Rural and semi-urban coverage"],
  },
  {
    id: "infrastructure",
    icon: Building2,
    title: "Infrastructure",
    headline: "Fuel for roads, bridges and public works.",
    desc: "Large infrastructure projects span multiple locations and timelines. Call Diesel provides trackable, authorised fuel delivery that scales with your project phases and site requirements.",
    points: ["Multi-location project support", "GPS-tracked tanker dispatch", "Enterprise reporting and invoices"],
  },
  {
    id: "telecom",
    icon: Signal,
    title: "Telecom",
    headline: "Genset fuel for towers and network sites.",
    desc: "Telecom towers and network facilities rely on diesel gensets for uptime. We deliver to tower sites and hubs with live tracking so field teams know exactly when fuel arrives.",
    points: ["Tower site diesel delivery", "Scheduled replenishment", "Remote site fuel management"],
  },
  {
    id: "datacenters",
    icon: ServerCog,
    title: "Data Centers",
    headline: "Zero-compromise fuel for always-on power.",
    desc: "Data centres demand the highest reliability. Call Diesel supplies authorised diesel for backup generators with IoT-secured dispensing, geo-fencing, and full audit trails.",
    points: ["Priority genset fuel delivery", "IoT-verified dispensing", "Compliance-ready documentation"],
  },
  {
    id: "hotels",
    icon: Hotel,
    title: "Hotels",
    headline: "Discreet, reliable fuel for hospitality operations.",
    desc: "Hotels and resorts depend on backup generators and kitchen fuel systems. We deliver quietly and professionally, with scheduling that fits your guest operations.",
    points: ["Generator fuel for hospitality", "Flexible delivery windows", "GST-ready digital invoices"],
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Education",
    headline: "Fuel for campuses, labs and backup power.",
    desc: "Schools, colleges and universities need dependable diesel for generators and transport fleets. Call Diesel offers simple ordering and tracked delivery for institutional buyers.",
    points: ["Campus generator supply", "Institutional fleet fuel", "Transparent billing for accounts"],
  },
  {
    id: "government",
    icon: Landmark,
    title: "Government",
    headline: "Compliant fuel delivery for public sector.",
    desc: "Government departments and PSUs require authorised fuel, proper documentation, and audit-ready records. Call Diesel meets these standards with PSU-partner sourcing and digital invoicing.",
    points: ["Authorised PSU fuel channels", "Digital invoices and history", "PESO-compliant operations"],
  },
  {
    id: "transport",
    icon: Bus,
    title: "Transport",
    headline: "Fleet fuel without the pump queue.",
    desc: "Transport companies and fleet operators save time and dead mileage with doorstep diesel. Track every delivery, manage consumption, and order through app or WhatsApp.",
    points: ["Fleet yard and depot delivery", "Live GPS on every tanker", "Consumption history for fleet managers"],
  },
];

const sharedBenefits = [
  { icon: Fuel, title: "Authorised PSU fuel", desc: "HP, IndianOil and Bharat Petroleum partner channels." },
  { icon: MapPin, title: "Live GPS tracking", desc: "Know when your tanker arrives, every time." },
  { icon: ShieldCheck, title: "Secure dispensing", desc: "IoT controls, geo-fencing and brake interlock." },
];

function IndustryExplorer() {
  const [active, setActive] = useState(0);
  const industry = industries[active];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-primary font-semibold text-sm tracking-wider uppercase">Sectors we serve</p>
        <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold text-primary-dark">
          Fuel solutions built for your industry.
        </h2>
        <p className="mt-4 text-foreground/65">
          Select a sector to see how Call Diesel supports your operations.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-2 max-h-[280px] overflow-y-auto sm:max-h-none sm:overflow-visible pr-1">
        {industries.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActive(i)}
            className={`inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-semibold transition ${
              active === i
                ? "bg-gradient-primary text-primary-foreground shadow-soft"
                : "bg-card border border-border text-primary-dark hover:bg-accent/50"
            }`}
          >
            <item.icon className="size-4 shrink-0" />
            {item.title}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={industry.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="mt-10 rounded-3xl border border-border bg-card p-6 md:p-10 shadow-soft overflow-hidden relative"
        >
          <div className="absolute -top-20 -right-20 size-56 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          <div className="relative grid lg:grid-cols-[1fr,1.2fr] gap-8 items-start">
            <div>
              <div className="inline-grid size-14 place-items-center rounded-2xl bg-accent text-primary-dark mb-5">
                <industry.icon className="size-7" />
              </div>
              <p className="text-primary text-sm font-semibold uppercase tracking-wider">{industry.title}</p>
              <h3 className="mt-2 text-3xl md:text-4xl font-display font-bold text-primary-dark leading-tight">
                {industry.headline}
              </h3>
            </div>
            <div>
              <p className="text-foreground/70 leading-relaxed">{industry.desc}</p>
              <ul className="mt-6 space-y-3">
                {industry.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-foreground/75">
                    <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

function IndustryHighlights() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {industries.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: (i % 3) * 0.06, duration: 0.45 }}
            className="group rounded-2xl border border-border bg-card p-5 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition"
          >
            <div className="flex items-center gap-3">
              <div className="grid size-11 place-items-center rounded-xl bg-accent text-primary-dark group-hover:bg-gradient-primary group-hover:text-primary-foreground transition">
                <item.icon className="size-5" />
              </div>
              <h3 className="font-display font-bold text-primary-dark">{item.title}</h3>
            </div>
            <p className="mt-3 text-sm text-foreground/65 leading-relaxed line-clamp-3">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function SharedValue() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-28">
      <div className="rounded-3xl bg-primary-dark text-white p-8 md:p-12 shadow-elegant relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_30%,#67B548,transparent_50%)]" />
        <div className="relative grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white/70">Why every sector chooses us</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold leading-tight">
              One platform. Every industry. Same trusted delivery.
            </h2>
            <p className="mt-4 text-white/75 leading-relaxed">
              Whether you run a construction site, a hospital, or a 200-vehicle fleet —
              Call Diesel brings authorised fuel, live tracking, and secure dispensing to your doorstep.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white text-primary-dark px-5 py-2.5 text-sm font-semibold hover:scale-[1.02] transition"
              >
                Get a Quote <ArrowRight className="size-4" />
              </Link>
              <a
                href={COMPANY.whatsappUrl}
                className="inline-flex items-center gap-2 rounded-xl bg-primary text-white px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition"
              >
                <WhatsAppIconBadge iconClassName="size-4" /> Order on WhatsApp
              </a>
            </div>
          </div>
          <div className="grid gap-4">
            {sharedBenefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl bg-white/10 backdrop-blur border border-white/15 p-5 flex items-start gap-4"
              >
                <div className="grid size-10 place-items-center rounded-xl bg-primary shrink-0">
                  <b.icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{b.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{b.desc}</p>
                </div>
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
        eyebrow="Industries"
        title="Powering the industries that power India."
        subtitle="From construction yards to data centres — authorised doorstep diesel with GPS tracking, IoT security, and digital records for every sector."
        backgroundImage={technologyHeroBg}
        subtitleClassName="text-primary-dark/95 font-medium"
        cta={{ to: "/contact", label: "Talk to Our Team" }}
      />
      <WhatsAppMarketingStrip />
      <IndustryExplorer />
      <IndustryHighlights />
      <SharedValue />
    </div>
  );
}
