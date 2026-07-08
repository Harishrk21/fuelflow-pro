import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageParts";
import { Gauge, TrendingUp, Wallet, ShieldCheck, Bell, LineChart } from "lucide-react";

export const Route = createFileRoute("/atf")({
  component: Page,
  head: () => ({
    meta: [
      { title: "ATF — Any Time Fuel Management Device | Call Diesel" },
      { name: "description", content: "ATF: Smart Fuel Management Device with live level, consumption, authorised dispensing, alerts and reports." },
      { property: "og:title", content: "ATF — Any Time Fuel" },
      { property: "og:url", content: "/atf" },
    ],
    links: [{ rel: "canonical", href: "/atf" }],
  }),
});

const cards = [
  { i: Gauge, t: "Live Fuel Level", v: "78%", d: "Real-time tank telemetry" },
  { i: TrendingUp, t: "Diesel Consumption", v: "1,245 L", d: "Last 7 days" },
  { i: LineChart, t: "Sub Asset Consumption", v: "12 assets", d: "Per-machine breakdown" },
  { i: Wallet, t: "Savings", v: "₹ 84,200", d: "Vs previous quarter" },
  { i: ShieldCheck, t: "Authorised Dispensing", v: "100%", d: "Digital authorisation" },
  { i: Bell, t: "Alerts", v: "3 active", d: "Level, tamper, refill" },
];

function Page() {
  return (
    <div>
      <PageHero eyebrow="Any Time Fuel" title="ATF — Smart Fuel Management Device." subtitle="A connected on-site fuel controller with live telemetry, authorised dispensing, sub-asset consumption and monthly reports." cta={{ to: "/contact", label: "Book a Demo" }} />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-card border border-border shadow-elegant p-6 md:p-10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Dashboard</p>
              <h2 className="text-2xl font-display font-bold text-primary-dark">ATF Live Overview</h2>
            </div>
            <span className="rounded-full bg-primary/10 text-primary text-xs font-semibold px-3 py-1">● Live</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards.map((c) => (
              <div key={c.t} className="rounded-2xl bg-gradient-hero border border-border p-6 shadow-soft">
                <div className="flex items-center justify-between">
                  <div className="grid size-10 place-items-center rounded-xl bg-white text-primary-dark shadow-soft">
                    <c.i className="size-5" />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{c.d}</span>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{c.t}</p>
                <p className="text-3xl font-display font-bold text-primary-dark">{c.v}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 rounded-2xl bg-gradient-hero border border-border p-6 shadow-soft">
              <p className="text-sm font-semibold text-primary-dark mb-4">Consumption trend (30 days)</p>
              <svg viewBox="0 0 400 140" className="w-full h-40">
                <defs>
                  <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#67B548" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#67B548" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0 100 C 40 60, 80 80, 120 55 S 200 30, 240 60 S 320 90, 400 40 L 400 140 L 0 140 Z" fill="url(#g)" />
                <path d="M0 100 C 40 60, 80 80, 120 55 S 200 30, 240 60 S 320 90, 400 40" stroke="#214C1F" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <div className="rounded-2xl bg-gradient-hero border border-border p-6 shadow-soft grid place-items-center">
              <div className="relative size-40">
                <svg viewBox="0 0 100 100" className="size-40 -rotate-90">
                  <circle cx="50" cy="50" r="42" stroke="#EEF8E7" strokeWidth="10" fill="none" />
                  <circle cx="50" cy="50" r="42" stroke="#67B548" strokeWidth="10" fill="none" strokeDasharray="264" strokeDashoffset="70" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 grid place-items-center text-center">
                  <div>
                    <p className="text-3xl font-display font-bold text-primary-dark">74%</p>
                    <p className="text-xs text-muted-foreground">Tank Full</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
