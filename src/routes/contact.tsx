import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Building2 } from "lucide-react";
import { COMPANY } from "@/lib/company";
import { pageHead, faqJsonLd, crumbs } from "@/lib/seo";
import { WhatsAppIconBadge } from "@/components/site/WhatsAppIcon";
import { LicensesTrust } from "@/components/site/LicensesTrust";
import { LeadForm } from "@/components/site/LeadForm";
import operationsTruck from "@/assets/operations-delivery-truck.png";

const faqs = [
  { q: "Does Call Diesel offer doorstep diesel delivery in Chennai?", a: "Yes. Call Diesel delivers authorised HP, IndianOil, and Bharat Petroleum diesel directly to your site across Chennai with live GPS tracking." },
  { q: "Can I order diesel through WhatsApp?", a: "Yes. Message Call Diesel on WhatsApp at 044-4311 4311 and follow the guided prompts to place a doorstep diesel order." },
  { q: "Do you supply industrial oils?", a: "Yes — Call Diesel supplies a full range of industrial oils and lubricants alongside doorstep diesel delivery." },
  { q: "Can I schedule diesel deliveries?", a: "Absolutely. Set recurring doorstep diesel deliveries daily, weekly, or monthly through the Call Diesel app or WhatsApp." },
  { q: "Do you provide GST invoice?", a: "Every Call Diesel order receives a digital GST-compliant invoice." },
  { q: "How does GPS tracking work?", a: "You get a live tracking link the moment your Call Diesel order is dispatched from our Chennai fleet." },
  { q: "How secure is fuel delivery?", a: "IoT-authorised dispensing, brake interlock, and geo-fenced zones protect every Call Diesel delivery." },
  { q: "What areas do you serve?", a: "Call Diesel serves Chennai and is expanding across Tamil Nadu and South India for doorstep diesel delivery." },
  { q: "Can I track previous orders?", a: "Yes — full order history is available in the Call Diesel app and customer dashboard." },
  { q: "Whose fuel do you deliver?", a: "Authorised fuel from Hindustan Petroleum (HP), IndianOil, and Bharat Petroleum through Call Diesel." },
];

export const Route = createFileRoute("/contact")({
  component: Page,
  head: () =>
    pageHead({
      title: "Contact Call Diesel — Doorstep Diesel Quotes & Support | Chennai",
      description:
        "Contact Call Diesel / Jeyaveer Fuels for doorstep diesel delivery in Chennai. Call 044-4311 4311, WhatsApp, or email jeyaveerfuels@gmail.com for a quote.",
      path: "/contact",
      breadcrumbs: [...crumbs.contact],
      extraScripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(faqJsonLd(faqs)),
        },
      ],
    }),
});

function Page() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-hero">
        <img
          src={operationsTruck}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 bg-[#214C1F]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F6F2E8]/85 via-[#F6F2E8]/65 to-[#F6F2E8]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F6F2E8]/70 via-transparent to-[#F6F2E8]/20" />
        <div className="absolute -top-20 right-10 size-64 rounded-full bg-primary/20 blur-3xl animate-orb pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 md:py-24 grid lg:grid-cols-2 gap-8 lg:gap-14">
          <div className="min-w-0">
            <p className="text-primary font-semibold text-xs sm:text-sm tracking-wider uppercase">Contact</p>
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-dark leading-tight text-balance">
              Let&apos;s power your operations.
            </h1>
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-foreground/70 max-w-lg text-pretty">
              Tell us what you need. Call us at {COMPANY.phoneDisplay} or message on WhatsApp —
              our team responds quickly during business hours.
            </p>
            <div className="mt-10 space-y-4">
              <a href={COMPANY.whatsappUrl} className="flex items-center gap-4 rounded-2xl bg-card border border-border p-4 shadow-soft hover:shadow-elegant transition shine-on-hover">
                <div className="grid size-11 place-items-center rounded-xl bg-primary text-primary-foreground"><WhatsAppIconBadge iconClassName="size-5" className="p-1" /></div>
                <div>
                  <p className="text-xs text-muted-foreground">WhatsApp</p>
                  <p className="font-semibold text-primary-dark">{COMPANY.whatsappDisplay}</p>
                </div>
              </a>
              <a href={`tel:${COMPANY.phoneTel}`} className="flex items-center gap-4 rounded-2xl bg-card border border-border p-4 shadow-soft hover:shadow-elegant transition">
                <div className="grid size-11 place-items-center rounded-xl bg-accent text-primary-dark"><Phone className="size-5" /></div>
                <div>
                  <p className="text-xs text-muted-foreground">Call Us</p>
                  <p className="font-semibold text-primary-dark">{COMPANY.phoneDisplay}</p>
                </div>
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-4 rounded-2xl bg-card border border-border p-4 shadow-soft hover:shadow-elegant transition">
                <div className="grid size-11 place-items-center rounded-xl bg-accent text-primary-dark"><Mail className="size-5" /></div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="font-semibold text-primary-dark break-all">{COMPANY.email}</p>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-2xl bg-card border border-border p-4 shadow-soft">
                <div className="grid size-11 place-items-center rounded-xl bg-accent text-primary-dark"><MapPin className="size-5" /></div>
                <div>
                  <p className="text-xs text-muted-foreground">Head Office</p>
                  <p className="font-semibold text-primary-dark">{COMPANY.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-2xl bg-primary-dark text-white p-4 shadow-soft">
                <div className="grid size-11 place-items-center rounded-xl bg-primary"><Building2 className="size-5" /></div>
                <div>
                  <p className="text-xs text-white/60">Legal entity</p>
                  <p className="font-semibold">{COMPANY.legalName}</p>
                  <p className="text-xs text-white/60 mt-0.5">PAN {COMPANY.pan} · {COMPANY.domain}</p>
                </div>
              </div>
            </div>
          </div>

          <LeadForm />
        </div>
      </section>

      <LicensesTrust />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center">
          <p className="text-primary font-semibold text-xs sm:text-sm tracking-wider uppercase">FAQ</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary-dark text-balance">Answers, quickly.</h2>
        </div>
        <div className="mt-8 sm:mt-10 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl bg-card border border-border p-4 sm:p-5 shadow-soft">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-3 font-semibold text-primary-dark text-sm sm:text-base">
                <span className="text-pretty">{f.q}</span>
                <span className="text-primary transition group-open:rotate-45 text-xl">+</span>
              </summary>
              <p className="mt-3 text-foreground/70 text-sm leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
