import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Send, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { COMPANY } from "@/lib/company";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { LicensesTrust } from "@/components/site/LicensesTrust";
import contactHeroBg from "@/assets/contact-hero-web.jpg";

export const Route = createFileRoute("/contact")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Contact & Get a Quote — Call Diesel" },
      { name: "description", content: "Contact Jeyaveer Fuels / Call Diesel — Chennai. Call 044-4311 4311 or email calldiesel@yahoo.com for doorstep diesel delivery." },
      { property: "og:title", content: "Contact — Call Diesel" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const faqs = [
  { q: "Can I order through WhatsApp?", a: "Yes. Just message our WhatsApp number and follow the guided prompts." },
  { q: "Do you supply industrial oils?", a: "Yes — a full range of industrial oils and lubricants." },
  { q: "Can I schedule deliveries?", a: "Absolutely. Set recurring deliveries daily, weekly or monthly." },
  { q: "Do you provide GST invoice?", a: "Every order receives a digital GST-compliant invoice." },
  { q: "How does GPS tracking work?", a: "You get a live tracking link the moment your order is dispatched." },
  { q: "How secure is fuel delivery?", a: "IoT-authorised dispensing, brake interlock and geo-fenced zones." },
  { q: "What areas do you serve?", a: "Chennai and expanding across Tamil Nadu and South India." },
  { q: "Can I track previous orders?", a: "Yes — full history is available in the app and dashboard." },
  { q: "Whose fuel do you deliver?", a: "Authorised fuel from Hindustan Petroleum (HP), IndianOil and Bharat Petroleum." },
];

function Page() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-hero">
        <img
          src={contactHeroBg}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#214C1F]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F6F2E8]/85 via-[#F6F2E8]/65 to-[#F6F2E8]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F6F2E8]/70 via-transparent to-[#F6F2E8]/20" />
        <div className="absolute -top-20 right-10 size-64 rounded-full bg-primary/20 blur-3xl animate-orb pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-14">
          <div>
            <p className="text-primary font-semibold text-sm tracking-wider uppercase">Contact</p>
            <h1 className="mt-3 text-5xl md:text-6xl font-display font-bold text-primary-dark leading-tight">
              Let&apos;s power your operations.
            </h1>
            <p className="mt-5 text-lg text-foreground/70 max-w-lg">
              Tell us what you need. Call us at {COMPANY.phoneDisplay} or message on WhatsApp —
              our team responds quickly during business hours.
            </p>
            <div className="mt-10 space-y-4">
              <a href={COMPANY.whatsappUrl} className="flex items-center gap-4 rounded-2xl bg-card border border-border p-4 shadow-soft hover:shadow-elegant transition shine-on-hover">
                <div className="grid size-11 place-items-center rounded-xl bg-primary text-primary-foreground"><WhatsAppIcon variant="light" className="size-5" /></div>
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
                  <p className="font-semibold text-primary-dark">{COMPANY.email}</p>
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

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-3xl bg-card border border-border p-8 shadow-elegant space-y-4"
          >
            <h2 className="text-2xl font-display font-bold text-primary-dark">Get a Quote</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Company" name="company" />
              <Field label="Name" name="name" required />
              <Field label="Phone" name="phone" type="tel" required />
              <Field label="Email" name="email" type="email" />
              <Field label="Fuel Type" name="fuel" placeholder="Diesel / Oil" />
              <Field label="Quantity (L)" name="qty" type="number" />
              <div className="sm:col-span-2"><Field label="Delivery Location" name="loc" /></div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-primary-dark mb-1.5">Message</label>
                <textarea name="msg" rows={4} className="w-full rounded-xl border border-border bg-background px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/40" />
              </div>
            </div>
            <button type="submit" className="w-full inline-flex justify-center items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant hover:scale-[1.01] transition shine-on-hover">
              {sent ? "Sent — we'll be in touch!" : <>Send Request <Send className="size-4" /></>}
            </button>
          </motion.form>
        </div>
      </section>

      <LicensesTrust />

      <section className="mx-auto max-w-4xl px-6 py-24">
        <div className="text-center">
          <p className="text-primary font-semibold text-sm tracking-wider uppercase">FAQ</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold text-primary-dark">Answers, quickly.</h2>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl bg-card border border-border p-5 shadow-soft">
              <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-primary-dark">
                {f.q}
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

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-primary-dark mb-1.5">{label}{required && " *"}</label>
      <input name={name} type={type} required={required} placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/40" />
    </div>
  );
}
