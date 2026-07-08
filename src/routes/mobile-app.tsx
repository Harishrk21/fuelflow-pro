import { createFileRoute } from "@tanstack/react-router";
import { PageHero, FeatureGrid } from "@/components/site/PageParts";
import { Fuel, MapPin, Bell, History, Clock, FileText, Headphones, Radio, BarChart3, CreditCard } from "lucide-react";

export const Route = createFileRoute("/mobile-app")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Mobile App — Order & Track Fuel | Call Diesel" },
      { name: "description", content: "Order fuel, track live, view invoices and manage fuel consumption from the Call Diesel mobile app." },
      { property: "og:title", content: "Call Diesel Mobile App" },
      { property: "og:url", content: "/mobile-app" },
    ],
    links: [{ rel: "canonical", href: "/mobile-app" }],
  }),
});

const feats = [
  { icon: Fuel, title: "Order Fuel", desc: "Book in a few taps." },
  { icon: MapPin, title: "Track Live", desc: "Real-time GPS location." },
  { icon: Bell, title: "Notifications", desc: "Every dispatch update." },
  { icon: History, title: "Fuel History", desc: "Complete order history." },
  { icon: Clock, title: "Scheduled Orders", desc: "Set recurring deliveries." },
  { icon: FileText, title: "Digital Invoices", desc: "GST-ready invoices instantly." },
  { icon: Headphones, title: "Live Support", desc: "Chat with our team." },
  { icon: Radio, title: "GPS Tracking", desc: "Vehicle & driver info." },
  { icon: BarChart3, title: "Consumption Reports", desc: "Understand where fuel goes." },
  { icon: CreditCard, title: "Digital Payments", desc: "Pay in-app securely." },
];

function Page() {
  return (
    <div>
      <PageHero eyebrow="Mobile App" title="Your fuel operations, in your pocket." subtitle="The Call Diesel app puts ordering, tracking, invoices and analytics on your home screen." cta={{ to: "/contact", label: "Request Access" }} />
      <FeatureGrid items={feats} cols={4} />
    </div>
  );
}
