import { createFileRoute } from "@tanstack/react-router";
import { PageHero, FeatureGrid } from "@/components/site/PageParts";
import { MapPin, Radio, LockKeyhole, ShieldCheck, Activity, Gauge } from "lucide-react";

export const Route = createFileRoute("/technology")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Technology — IoT, GPS & Smart Fuel Dispensing | Call Diesel" },
      { name: "description", content: "IoT fuel monitoring, live GPS tracking, geo-fenced delivery, brake interlock, smart dispensing and real-time analytics." },
      { property: "og:title", content: "Technology — Call Diesel" },
      { property: "og:url", content: "/technology" },
    ],
    links: [{ rel: "canonical", href: "/technology" }],
  }),
});

const tech = [
  { icon: MapPin, title: "Geo-Fencing", desc: "Deliveries authorised only within approved zones." },
  { icon: Radio, title: "GPS Tracking", desc: "Track every tanker in real time, end to end." },
  { icon: Activity, title: "IoT Fuel Monitoring", desc: "Smart sensors record every drop dispensed." },
  { icon: LockKeyhole, title: "Brake Interlock", desc: "Vehicle locks during dispensing for safety." },
  { icon: ShieldCheck, title: "Smart Fuel Dispensing", desc: "Digital authorisation on every transaction." },
  { icon: Gauge, title: "Live Analytics", desc: "Real-time dashboards for consumption & fleet." },
];

function Page() {
  return (
    <div>
      <PageHero eyebrow="Technology" title="Fuel logistics, engineered like software." subtitle="A stack of IoT, GPS and automation that makes every delivery measurable, trackable and safe." />
      <FeatureGrid items={tech} />
    </div>
  );
}
