import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero, FeatureGrid } from "@/components/site/PageParts";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { WhatsAppMarketingStrip } from "@/components/site/WhatsAppMarketingStrip";
import { VehicleSpecs } from "@/components/site/VehicleSpecs";
import { Truck, Fuel, Gauge, HardHat, Zap, Package, Clock, Radio, Smartphone, MapPin, ShieldCheck, FileText } from "lucide-react";
import operationsTruck from "@/assets/operations-delivery-truck.png";
import milestoneFlagOff from "@/assets/milestone-flag-off.png";

export const Route = createFileRoute("/services")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Fuel Delivery Services — Call Diesel" },
      { name: "description", content: "Doorstep diesel, industrial oils, fleet fuel management, generator diesel, bulk delivery, scheduled & emergency fuel service." },
      { property: "og:title", content: "Fuel Delivery Services — Call Diesel" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const services = [
  { icon: Truck, title: "Doorstep Diesel Delivery", desc: "Fast and secure diesel delivery to your site or premises." },
  { icon: Fuel, title: "Industrial Oils", desc: "High-quality industrial lubricants and specialty oils." },
  { icon: Gauge, title: "Fleet Fuel Management", desc: "End-to-end fuel management for transport companies." },
  { icon: HardHat, title: "Construction Fuel Supply", desc: "Reliable supply for construction and infrastructure projects." },
  { icon: Zap, title: "Generator Fuel Supply", desc: "24/7 generator diesel supply for critical operations." },
  { icon: Package, title: "Bulk Fuel Delivery", desc: "Large-scale commercial delivery with tanker fleet." },
  { icon: Clock, title: "Scheduled Deliveries", desc: "Recurring automatic deliveries with smart replenishment." },
  { icon: Radio, title: "Emergency Fuel Delivery", desc: "Rapid response fuel service, day or night." },
  { icon: WhatsAppIcon as any, title: "WhatsApp Fuel Booking", desc: "Order fuel in seconds through WhatsApp automation." },
];

const detailPillars = [
  {
    icon: Smartphone,
    title: "Order on App or WhatsApp",
    desc:
      "Place orders in minutes using the Call Diesel app or WhatsApp workflow. Select product, quantity, and delivery location through a guided booking flow.",
  },
  {
    icon: MapPin,
    title: "Live GPS Tracking",
    desc:
      "Track your assigned fuel vehicle with live location and ETA updates so site teams can plan receiving and reduce waiting time.",
  },
  {
    icon: Radio,
    title: "IoT-Enabled Security",
    desc:
      "IoT-assisted controls and monitored delivery states improve dispensing discipline and provide higher transparency during operations.",
  },
  {
    icon: ShieldCheck,
    title: "Geo-Fenced Delivery",
    desc:
      "Fuel dispensing is aligned to approved delivery coordinates, strengthening compliance and reducing operational risk in enterprise sites.",
  },
  {
    icon: Fuel,
    title: "Authorized PSU Fuel",
    desc:
      "Fuel is sourced via authorized HP, IndianOil, and Bharat Petroleum channels to ensure trusted quality and continuity.",
  },
  {
    icon: FileText,
    title: "Digital Records & Invoices",
    desc:
      "Every order is documented with digital confirmations and invoice history to simplify audits, reconciliation, and reporting.",
  },
];

function Page() {
  return (
    <div>
      <PageHero
        eyebrow="Services"
        title="Every fuel need. One trusted partner."
        subtitle="From single generators to enterprise fleets, we deliver authorised HP / IOCL / BPCL fuel — and the technology to manage it."
        cta={{ to: "/contact", label: "Get a Quote" }}
        backgroundImageClassName="absolute inset-0 h-full w-full object-cover object-[center_35%]"
        backgroundImage={operationsTruck}
      />
      <WhatsAppMarketingStrip />
      <FeatureGrid items={services} />
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="rounded-3xl border border-border bg-card p-6 md:p-10 shadow-soft">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border border-border bg-gradient-to-br from-primary/10 via-white to-secondary/50 p-5 md:p-7">
                <img
                  src={milestoneFlagOff}
                  alt="Call Diesel FuelEnt flag-off ceremony with PESO-approved mobile fuel delivery truck and Bharat Petroleum partnership"
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <p className="mt-3 text-xs text-foreground/55 text-center">
                  PESO-approved fleet launch — authorised Bharat Petroleum doorstep fuel delivery in Chennai.
                </p>
                <div className="mt-5 grid sm:grid-cols-2 gap-3">
                  {[
                    "App + WhatsApp Ordering",
                    "Live GPS Visibility",
                    "IoT Delivery Security",
                    "Geo-Fenced Dispensing",
                  ].map((point) => (
                    <div
                      key={point}
                      className="rounded-xl bg-white/80 border border-border px-3 py-2 text-xs font-semibold text-primary-dark"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-primary font-semibold text-sm tracking-wider uppercase">
                Secure digital delivery
              </p>
              <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold text-primary-dark leading-tight">
                Order diesel and relax. We handle the secure delivery workflow.
              </h2>
              <p className="mt-5 text-foreground/70 leading-relaxed">
                Order diesel through the app or WhatsApp and get safe, secure doorstep fuel delivery with live GPS tracking, IoT-enabled controls, and geo-fenced dispensing.
              </p>
              <p className="mt-3 text-foreground/70 leading-relaxed">
                Call Diesel supplies authorized fuel through HP, IndianOil, and Bharat Petroleum partner channels with a fully trackable, enterprise-ready operating model.
              </p>
            </motion.div>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {detailPillars.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="rounded-2xl border border-border bg-background p-5 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition"
              >
                <div className="grid size-11 place-items-center rounded-xl bg-accent text-primary-dark">
                  <item.icon className="size-5" />
                </div>
                <h3 className="mt-4 font-display font-bold text-primary-dark text-lg leading-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-foreground/65 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <VehicleSpecs />
    </div>
  );
}
