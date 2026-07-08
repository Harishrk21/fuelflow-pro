import { createFileRoute } from "@tanstack/react-router";
import { PageHero, FeatureGrid } from "@/components/site/PageParts";
import { HardHat, Factory, Hospital, Warehouse, Ship, Wheat, Building2, Signal, ServerCog, Hotel, GraduationCap, Landmark, Bus } from "lucide-react";

export const Route = createFileRoute("/industries")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Industries We Serve — Call Diesel" },
      { name: "description", content: "Construction, mining, factories, hospitals, warehouses, ports, shipping, agriculture, telecom, data centres and more." },
      { property: "og:title", content: "Industries — Call Diesel" },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
});

const items = [
  { icon: HardHat, title: "Construction" }, { icon: Factory, title: "Mining" },
  { icon: Factory, title: "Factories" }, { icon: Hospital, title: "Hospitals" },
  { icon: Warehouse, title: "Warehouses" }, { icon: Ship, title: "Ports" },
  { icon: Ship, title: "Shipping" }, { icon: Wheat, title: "Agriculture" },
  { icon: Building2, title: "Infrastructure" }, { icon: Signal, title: "Telecom" },
  { icon: ServerCog, title: "Data Centers" }, { icon: Hotel, title: "Hotels" },
  { icon: GraduationCap, title: "Education" }, { icon: Landmark, title: "Government" },
  { icon: Bus, title: "Transport" },
];

function Page() {
  return (
    <div>
      <PageHero eyebrow="Industries" title="Powering the industries that power India." subtitle="Trusted by fleets, factories, sites and enterprises across critical sectors." />
      <FeatureGrid items={items} cols={4} />
    </div>
  );
}
