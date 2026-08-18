import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero, FeatureGrid, BrochureFigure } from "@/components/site/PageParts";
import { AppDownload } from "@/components/site/AppDownload";
import { WhatsAppDemo } from "@/components/site/WhatsAppDemo";
import { WhatsAppIcon, WhatsAppIconBadge } from "@/components/site/WhatsAppIcon";
import { COMPANY } from "@/lib/company";
import { pageHead, crumbs } from "@/lib/seo";
import orderHeroBg from "@/assets/mobile-app-hero-tracking.png";
import brochureAppPlatform from "@/assets/brochure-mobile-app-platform.png";
import {
  Fuel, MapPin, Bell, History, Clock, FileText, Smartphone,
  CheckCircle2, Bot, ArrowDown,
} from "lucide-react";

export const Route = createFileRoute("/order")({
  component: Page,
  head: () =>
    pageHead({
      title: "Order Doorstep Diesel — WhatsApp & App | Call Diesel Chennai",
      description:
        "Order doorstep diesel from Call Diesel on WhatsApp in 60 seconds or via the app. Live GPS tracking, digital invoices, and authorised HP / IOCL / BPCL fuel in Chennai.",
      path: "/order",
      breadcrumbs: [...crumbs.order],
    }),
});

const whatsappSteps = [
  {
    step: "1",
    title: "Say Hi on WhatsApp",
    desc: "Open WhatsApp and message Call Diesel. No forms, no waiting — our assistant replies instantly.",
  },
  {
    step: "2",
    title: "Share address & location",
    desc: "Send your delivery address and live location pin so we know exactly where to deliver.",
  },
  {
    step: "3",
    title: "Choose diesel quantity",
    desc: "Pick how much diesel you need. Add engine oil or other products if required.",
  },
  {
    step: "4",
    title: "Confirm & relax",
    desc: "Review your order summary, pay now or choose COD. Get live updates until fuel reaches you.",
  },
];

const appFeats = [
  { icon: Fuel, title: "Order Fuel", desc: "Book from preferred HP / IOCL / BPCL pumps in a few taps." },
  { icon: MapPin, title: "Track Live", desc: "See your tanker on a live map from dispatch to delivery." },
  { icon: Bell, title: "Order Alerts", desc: "Get notified at every stage — placed, dispatched, on the way, delivered." },
  { icon: History, title: "Order History", desc: "View past orders, quantities, rates, and invoices anytime." },
  { icon: Clock, title: "Schedule Delivery", desc: "Pick a time slot that works for your site or operations." },
  { icon: FileText, title: "Digital Invoices", desc: "GST-ready invoices saved in your account for easy records." },
];

function Page() {
  return (
    <div>
      <PageHero
        eyebrow="Order Call Diesel"
        title="Order doorstep diesel on WhatsApp in 60 seconds"
        subtitle="The fastest way to get Call Diesel delivered in Chennai — message us on WhatsApp, share your location, choose quantity, and we handle the rest."
        backgroundImage={orderHeroBg}
        backgroundImageClassName="absolute inset-0 h-full w-full object-cover object-center"
        subtitleClassName="text-primary-dark/90 font-medium"
      />

      <section className="bg-background border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-10 md:pt-14 pb-10">
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <a
            href={COMPANY.whatsappUrl}
            className="group rounded-2xl border-2 border-primary bg-gradient-primary p-6 shadow-elegant hover:scale-[1.01] transition"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white">
              Recommended · Fastest
            </span>
            <div className="mt-4 flex items-center gap-3">
              <WhatsAppIconBadge iconClassName="size-6" className="p-1.5" />
              <div>
                <h2 className="text-xl font-display font-bold text-white">Order on WhatsApp</h2>
                <p className="text-sm text-white/80 mt-0.5">No download needed</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/85 leading-relaxed">
              Message {COMPANY.whatsappDisplay} — our bot guides you through booking 24/7.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
              <WhatsAppIconBadge iconClassName="size-4" /> Start on WhatsApp
            </span>
          </a>

          <a
            href="#app"
            className="group rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary-dark">
              <Smartphone className="size-3.5" /> Also available
            </span>
            <h2 className="mt-4 text-xl font-display font-bold text-primary-dark">Use the Call Diesel App</h2>
            <p className="mt-2 text-sm text-foreground/65 leading-relaxed">
              Best for teams who order often — full dashboard, history, reports, and scheduled deliveries.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-dark">
              See app features <ArrowDown className="size-4" />
            </span>
          </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-16">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-primary font-semibold text-sm tracking-wider uppercase">How WhatsApp ordering works</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-primary-dark">
            Four simple steps. That&apos;s it.
          </h2>
          <p className="mt-4 text-foreground/65">
            No complicated forms. Our WhatsApp assistant walks you through everything.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {whatsappSteps.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-5 shadow-soft"
            >
              <span className="inline-flex size-9 items-center justify-center rounded-full bg-gradient-primary text-white text-sm font-bold">
                {item.step}
              </span>
              <h3 className="mt-4 font-display font-bold text-primary-dark">{item.title}</h3>
              <p className="mt-2 text-sm text-foreground/65 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            { icon: Bot, label: "Automated 24/7" },
            { icon: MapPin, label: "Live delivery tracking" },
            { icon: CheckCircle2, label: "Pay Now or COD" },
            { icon: Bell, label: "Status updates on WhatsApp" },
          ].map((item) => (
            <span
              key={item.label}
              className="inline-flex items-center gap-2 rounded-full bg-secondary/70 border border-border px-4 py-2 text-sm font-medium text-primary-dark"
            >
              <item.icon className="size-4 text-primary" /> {item.label}
            </span>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={COMPANY.whatsappUrl}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-elegant hover:scale-[1.02] transition"
          >
            <WhatsAppIconBadge iconClassName="size-5" className="p-1" />
            Order on WhatsApp — {COMPANY.whatsappDisplay}
          </a>
        </div>
      </section>

      <section className="bg-gradient-hero border-y border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-12 md:pt-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <p className="text-primary font-semibold text-sm tracking-wider uppercase">See it in action</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-primary-dark">
              Watch how easy WhatsApp ordering is
            </h2>
            <p className="mt-4 text-foreground/65">
              From your first message to confirmed delivery — all inside WhatsApp.
            </p>
          </div>
        </div>
        <WhatsAppDemo showHeading={false} className="!pt-0 !pb-12 md:!pb-16" />
      </section>

      <section id="app" className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-20 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-primary font-semibold text-sm tracking-wider uppercase">Call Diesel App</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-primary-dark">
            Prefer an app? We have that too.
          </h2>
          <p className="mt-4 text-foreground/65">
            Same trusted fuel delivery — with a full dashboard for teams that order regularly.
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

        <div className="grid md:grid-cols-3 gap-6 mb-4">
          {[
            { step: "1", title: "Place your order", desc: "Choose fuel type, quantity, and delivery slot from your preferred PSU pump." },
            { step: "2", title: "Track on the map", desc: "Follow your tanker live from dispatch until it reaches your site." },
            { step: "3", title: "Fuel delivered", desc: "Receive diesel at your doorstep with digital invoice and order history." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <span className="inline-flex size-8 items-center justify-center rounded-full bg-accent text-primary-dark text-sm font-bold">
                {item.step}
              </span>
              <h3 className="mt-4 font-display font-bold text-primary-dark">{item.title}</h3>
              <p className="mt-2 text-sm text-foreground/65 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <FeatureGrid items={appFeats} cols={3} />
      <AppDownload />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-20">
        <div className="rounded-3xl bg-primary-dark p-8 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
            Ready to order diesel?
          </h2>
          <p className="mt-3 text-white/75 max-w-xl mx-auto">
            WhatsApp is the quickest way to start. Message us now and get fuel delivered to your doorstep.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={COMPANY.whatsappUrl}
              className="inline-flex items-center gap-2 rounded-xl bg-white text-primary-dark px-6 py-3.5 text-sm font-semibold hover:scale-[1.02] transition"
            >
              <WhatsAppIcon className="size-4" /> Order on WhatsApp
            </a>
            <a
              href="#app"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 text-white px-6 py-3.5 text-sm font-semibold hover:bg-white/10 transition"
            >
              <Smartphone className="size-4" /> Explore the app
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
