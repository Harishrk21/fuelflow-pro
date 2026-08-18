import { createFileRoute } from "@tanstack/react-router";
import { noindexHead } from "@/lib/seo";
import { COMPANY } from "@/lib/company";

export const Route = createFileRoute("/privacy")({
  component: Page,
  head: () =>
    noindexHead({
      title: "Privacy Policy — Call Diesel",
      description: "How Jeyaveer Fuels Private Limited / Call Diesel collects and uses enquiry and delivery information.",
      path: "/privacy",
    }),
});

function Page() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16 md:py-24">
      <p className="text-primary font-semibold text-sm tracking-wider uppercase">Legal</p>
      <h1 className="mt-3 text-4xl md:text-5xl font-display font-bold text-primary-dark">Privacy Policy</h1>
      <p className="mt-4 text-sm text-foreground/55">Last updated: 17 August 2026</p>
      <div className="mt-10 space-y-6 text-foreground/75 leading-relaxed">
        <p>
          {COMPANY.legalName} (“Call Diesel”, “we”) operates {COMPANY.website}. This policy explains what we collect
          when you enquire, order, or contact us.
        </p>
        <h2 className="text-xl font-display font-bold text-primary-dark">Information we collect</h2>
        <p>
          Quote and contact forms collect company name, your name, phone, email, fuel type, quantity, delivery location,
          and message. Calls, WhatsApp chats, and emails may include the same operational details needed to fulfil a
          delivery.
        </p>
        <h2 className="text-xl font-display font-bold text-primary-dark">How we use it</h2>
        <p>
          We use this information to respond to enquiries, schedule deliveries, issue invoices, and improve service
          quality. Website forms are delivered to {COMPANY.formEmail} via FormSubmit.
        </p>
        <h2 className="text-xl font-display font-bold text-primary-dark">Sharing</h2>
        <p>
          We do not sell personal data. We share details only with authorised fuel partners, logistics staff, and
          service providers required to complete an order or comply with law.
        </p>
        <h2 className="text-xl font-display font-bold text-primary-dark">Contact</h2>
        <p>
          {COMPANY.legalName}, {COMPANY.address}. Email {COMPANY.email} or call {COMPANY.phoneDisplay}.
        </p>
      </div>
    </article>
  );
}
