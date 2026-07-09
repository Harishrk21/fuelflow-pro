import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { E as Package, G as Fuel, H as HardHat, K as FileText, W as Gauge, _ as ShieldCheck, et as Clock, k as MapPin, p as Smartphone, s as Truck, t as Zap, w as Radio } from "../_libs/lucide-react.mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
import { n as FeatureGrid, r as PageHero } from "./PageParts-CLY-M-VH.mjs";
import { a as WhatsAppIcon } from "./WhatsAppIcon-CQzq3ziO.mjs";
import { t as WhatsAppMarketingStrip } from "./WhatsAppMarketingStrip-e2rV0_Hn.mjs";
import { t as hero_illustration_default } from "./hero-illustration-Dz3OGZgu.mjs";
import { t as VehicleSpecs } from "./VehicleSpecs-DXdJ3lRT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-CLSjPBzl.js
var import_jsx_runtime = require_jsx_runtime();
var services_hero_truck_default = "/assets/services-hero-truck-Bdh10okw.png";
var services = [
	{
		icon: Truck,
		title: "Doorstep Diesel Delivery",
		desc: "Fast and secure diesel delivery to your site or premises."
	},
	{
		icon: Fuel,
		title: "Industrial Oils",
		desc: "High-quality industrial lubricants and specialty oils."
	},
	{
		icon: Gauge,
		title: "Fleet Fuel Management",
		desc: "End-to-end fuel management for transport companies."
	},
	{
		icon: HardHat,
		title: "Construction Fuel Supply",
		desc: "Reliable supply for construction and infrastructure projects."
	},
	{
		icon: Zap,
		title: "Generator Fuel Supply",
		desc: "24/7 generator diesel supply for critical operations."
	},
	{
		icon: Package,
		title: "Bulk Fuel Delivery",
		desc: "Large-scale commercial delivery with tanker fleet."
	},
	{
		icon: Clock,
		title: "Scheduled Deliveries",
		desc: "Recurring automatic deliveries with smart replenishment."
	},
	{
		icon: Radio,
		title: "Emergency Fuel Delivery",
		desc: "Rapid response fuel service, day or night."
	},
	{
		icon: WhatsAppIcon,
		title: "WhatsApp Fuel Booking",
		desc: "Order fuel in seconds through WhatsApp automation."
	}
];
var detailPillars = [
	{
		icon: Smartphone,
		title: "Order on App or WhatsApp",
		desc: "Place orders in minutes using the Call Diesel app or WhatsApp workflow. Select product, quantity, and delivery location through a guided booking flow."
	},
	{
		icon: MapPin,
		title: "Live GPS Tracking",
		desc: "Track your assigned fuel vehicle with live location and ETA updates so site teams can plan receiving and reduce waiting time."
	},
	{
		icon: Radio,
		title: "IoT-Enabled Security",
		desc: "IoT-assisted controls and monitored delivery states improve dispensing discipline and provide higher transparency during operations."
	},
	{
		icon: ShieldCheck,
		title: "Geo-Fenced Delivery",
		desc: "Fuel dispensing is aligned to approved delivery coordinates, strengthening compliance and reducing operational risk in enterprise sites."
	},
	{
		icon: Fuel,
		title: "Authorized PSU Fuel",
		desc: "Fuel is sourced via authorized HP, IndianOil, and Bharat Petroleum channels to ensure trusted quality and continuity."
	},
	{
		icon: FileText,
		title: "Digital Records & Invoices",
		desc: "Every order is documented with digital confirmations and invoice history to simplify audits, reconciliation, and reporting."
	}
];
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Services",
			title: "Every fuel need. One trusted partner.",
			subtitle: "From single generators to enterprise fleets, we deliver authorised HP / IOCL / BPCL fuel — and the technology to manage it.",
			cta: {
				to: "/contact",
				label: "Get a Quote"
			},
			backgroundImageClassName: "absolute inset-0 h-full w-full object-cover object-center",
			backgroundImage: services_hero_truck_default
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppMarketingStrip, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureGrid, { items: services }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-6 py-20 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-border bg-card p-6 md:p-10 shadow-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid lg:grid-cols-2 gap-10 md:gap-12 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							x: -20
						},
						whileInView: {
							opacity: 1,
							x: 0
						},
						viewport: { once: true },
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative rounded-3xl overflow-hidden border border-border bg-gradient-to-br from-primary/10 via-white to-secondary/50 p-5 md:p-7",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: hero_illustration_default,
								alt: "App and secure doorstep diesel delivery",
								className: "w-full h-auto object-contain"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 grid sm:grid-cols-2 gap-3",
								children: [
									"App + WhatsApp Ordering",
									"Live GPS Visibility",
									"IoT Delivery Security",
									"Geo-Fenced Dispensing"
								].map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-xl bg-white/80 border border-border px-3 py-2 text-xs font-semibold text-primary-dark",
									children: point
								}, point))
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							x: 20
						},
						whileInView: {
							opacity: 1,
							x: 0
						},
						viewport: { once: true },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-primary font-semibold text-sm tracking-wider uppercase",
								children: "Secure digital delivery"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-4xl md:text-5xl font-display font-bold text-primary-dark leading-tight",
								children: "Order diesel and relax. We handle the secure delivery workflow."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-foreground/70 leading-relaxed",
								children: "Order diesel through the app or WhatsApp and get safe, secure doorstep fuel delivery with live GPS tracking, IoT-enabled controls, and geo-fenced dispensing."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-foreground/70 leading-relaxed",
								children: "Call Diesel supplies authorized fuel through HP, IndianOil, and Bharat Petroleum partner channels with a fully trackable, enterprise-ready operating model."
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5",
					children: detailPillars.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 18
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { delay: i * .04 },
						className: "rounded-2xl border border-border bg-background p-5 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid size-11 place-items-center rounded-xl bg-accent text-primary-dark",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display font-bold text-primary-dark text-lg leading-tight",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-foreground/65 leading-relaxed",
								children: item.desc
							})
						]
					}, item.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VehicleSpecs, {})
	] });
}
//#endregion
export { Page as component };
