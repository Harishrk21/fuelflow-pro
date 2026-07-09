import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero, FeatureGrid, BrochureFigure } from "@/components/site/PageParts";
import { WhatsAppMarketingStrip } from "@/components/site/WhatsAppMarketingStrip";
import { AppDownload } from "@/components/site/AppDownload";
import {
  Fuel, MapPin, Bell, History, Clock, FileText, Headphones, Radio,
  BarChart3, CreditCard, CheckCircle2,
} from "lucide-react";
import { COMPANY } from "@/lib/company";
import mobileAppHeroBg from "@/assets/mobile-app-hero-updated.png";
import brochureAppPlatform from "@/assets/brochure-mobile-app-platform.png";

export const Route = createFileRoute("/mobile-app")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Mobile App — Order & Track Fuel | Call Diesel" },
      { name: "description", content: "Order diesel from preferred PSU pumps, live track delivery, and access consumption history on the Call Diesel app." },
      { property: "og:title", content: "Call Diesel Mobile App" },
      { property: "og:url", content: "/mobile-app" },
    ],
    links: [{ rel: "canonical", href: "/mobile-app" }],
  }),
});

const feats = [
  { icon: Fuel, title: "Order Fuel", desc: "Book preferred IOCL / BPCL / HPCL pumps in a few taps." },
  { icon: MapPin, title: "Track Live", desc: "Real-time GPS map from dispatch to doorstep." },
  { icon: Bell, title: "Notifications", desc: "Order Placed → Confirmed → Dispatch → Dispensing." },
  { icon: History, title: "Fuel History", desc: "Past orders, quantities, rates and invoices." },
  { icon: Clock, title: "Scheduled Orders", desc: "Pick delivery slots that suit your site." },
  { icon: FileText, title: "Digital Invoices", desc: "GST-ready invoices with convenience charges." },
  { icon: Headphones, title: "Live Support", desc: "Chat with our team when you need help." },
  { icon: Radio, title: "Driver & Vehicle", desc: "Driver name, vehicle number and OTP on dispatch." },
  { icon: BarChart3, title: "Consumption Reports", desc: "Understand where every litre goes." },
  { icon: CreditCard, title: "Digital Payments", desc: "Cash on delivery or pay in-app securely." },
];

function Page() {
  return (
    <div>
      <PageHero
        eyebrow="Mobile App"
        title="Your fuel operations, in your pocket."
        subtitle="Order from preferred PSU pumps, live-track tankers, and keep full consumption history — just order and relax."
        cta={{ to: "/contact", label: "Request Access" }}
        backgroundImageClassName="absolute inset-0 h-full w-full object-cover object-left md:object-center"
        subtitleClassName="text-primary-dark/90 font-medium"
        backgroundImage={mobileAppHeroBg}
      />
      <WhatsAppMarketingStrip />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-primary font-semibold text-sm tracking-wider uppercase">The Call Diesel App Platform</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-primary-dark">
            Order · Track · Delivered
          </h2>
          <p className="mt-4 text-foreground/65">
            Choose your preferred PSU pump, track live delivery, and access full order history.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-border bg-card p-3 md:p-4 shadow-elegant mb-12"
        >
          <BrochureFigure
            src={brochureAppPlatform}
            alt="Call Diesel mobile app: order diesel, track live delivery, and view order history"
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              step: "1",
              title: "Order Diesel",
              desc: "Book from your preferred HP / IOCL / BPCL pump with quantity, asset, and delivery slot.",
            },
            {
              step: "2",
              title: "Track Live",
              desc: "Follow your order from placement to dispatch to dispensing — with live map updates.",
            },
            {
              step: "3",
              title: "Diesel Delivered",
              desc: "Get fuel at your doorstep with digital invoice, driver details, and consumption history.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <span className="inline-flex size-8 items-center justify-center rounded-full bg-gradient-primary text-white text-sm font-bold">
                {item.step}
              </span>
              <h3 className="mt-4 font-display font-bold text-primary-dark">{item.title}</h3>
              <p className="mt-2 text-sm text-foreground/65 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-12 text-center text-foreground/70 max-w-3xl mx-auto">
          The Call Diesel app connects customers with authorised fuel sellers.
          Order in a few taps and get it delivered to your doorstep.
          Hotline {COMPANY.hotline} · {COMPANY.domain}
        </p>
      </section>

      <FeatureGrid items={feats} cols={4} />
      <AppDownload />

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-3xl bg-gradient-hero border border-border p-8 flex flex-wrap gap-4 justify-center">
          {[
            "Preferred PSU pump selection",
            "Density & rating visible",
            "Time-slot booking",
            "Live map tracking",
            "Driver OTP on dispatch",
            "Invoice & history",
          ].map((t) => (
            <span key={t} className="inline-flex items-center gap-2 rounded-xl bg-card border border-border px-4 py-2 text-sm font-medium text-primary-dark shadow-soft">
              <CheckCircle2 className="size-4 text-primary" /> {t}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
