import { createFileRoute } from "@tanstack/react-router";
import { PageHero, FeatureGrid } from "@/components/site/PageParts";
import { Truck, Fuel, Gauge, HardHat, Zap, Package, Clock, Radio, MessageCircle } from "lucide-react";

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
  { icon: MessageCircle, title: "WhatsApp Fuel Booking", desc: "Order fuel in seconds through WhatsApp automation." },
];

function Page() {
  return (
    <div>
      <PageHero eyebrow="Services" title="Every fuel need. One trusted partner." subtitle="From single generators to enterprise fleets, we deliver the fuel, and the technology to manage it." cta={{ to: "/contact", label: "Get a Quote" }} />
      <FeatureGrid items={services} />
    </div>
  );
}
