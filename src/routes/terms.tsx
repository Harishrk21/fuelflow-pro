import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { COMPANY } from "@/lib/company";

export const Route = createFileRoute("/terms")({
  component: Page,
  head: () =>
    pageHead({
      title: "Terms of Service — Call Diesel",
      description: "Terms for using the Call Diesel website and requesting doorstep fuel delivery from Jeyaveer Fuels.",
      path: "/terms",
    }),
});

function Page() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <p className="text-primary font-semibold text-sm tracking-wider uppercase">Legal</p>
      <h1 className="mt-3 text-4xl md:text-5xl font-display font-bold text-primary-dark">Terms of Service</h1>
      <p className="mt-4 text-sm text-foreground/55">Last updated: 17 August 2026</p>
      <div className="mt-10 space-y-6 text-foreground/75 leading-relaxed">
        <p>
          These terms govern use of {COMPANY.website} and enquiries submitted to {COMPANY.legalName}. By sending a
          quote request or ordering fuel you agree to them.
        </p>
        <h2 className="text-xl font-display font-bold text-primary-dark">Quotes and orders</h2>
        <p>
          Website and WhatsApp submissions are requests, not a binding supply until we confirm product, quantity, rate,
          delivery slot, and location. Fuel is supplied through authorised HP, IndianOil, and Bharat Petroleum channels
          subject to availability, PESO and Weights &amp; Measures rules, and site access.
        </p>
        <h2 className="text-xl font-display font-bold text-primary-dark">Your responsibilities</h2>
        <p>
          Provide accurate delivery coordinates and a safe receiving point. Dispensing may be geo-fenced and can be
          refused if the site is unsafe or outside the approved zone.
        </p>
        <h2 className="text-xl font-display font-bold text-primary-dark">Liability</h2>
        <p>
          To the extent permitted by Indian law, we are not liable for delays caused by traffic, weather, force majeure,
          or incorrect information you provide. Statutory rights remain unaffected.
        </p>
        <h2 className="text-xl font-display font-bold text-primary-dark">Contact</h2>
        <p>
          {COMPANY.legalName}, {COMPANY.address}. {COMPANY.email} · {COMPANY.phoneDisplay}.
        </p>
      </div>
    </article>
  );
}
