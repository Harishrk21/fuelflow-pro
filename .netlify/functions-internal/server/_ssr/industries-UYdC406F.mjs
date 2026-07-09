import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { G as Fuel, H as HardHat, I as Landmark, J as Factory, R as Hotel, U as GraduationCap, _ as ShieldCheck, ct as Building2, h as Ship, i as Warehouse, k as MapPin, m as Signal, mt as ArrowRight, r as Wheat, rt as CircleCheck, st as Bus, v as ServerCog, z as Hospital } from "../_libs/lucide-react.mjs";
import { i as AnimatePresence, r as motion } from "../_libs/framer-motion.mjs";
import { r as PageHero } from "./PageParts-CLY-M-VH.mjs";
import { t as COMPANY } from "./WhatsAppIcon-CQzq3ziO.mjs";
import { t as WhatsAppMarketingStrip } from "./WhatsAppMarketingStrip-e2rV0_Hn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/industries-UYdC406F.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var industries_hero_web_default = "/assets/industries-hero-web-DwQUf8eI.jpg";
var industries = [
	{
		id: "construction",
		icon: HardHat,
		title: "Construction",
		headline: "Keep projects moving without fuel downtime.",
		desc: "Construction sites run on tight schedules. Call Diesel delivers authorised diesel directly to your project yard — with live GPS tracking and geo-fenced dispensing so fuel reaches the right equipment at the right time.",
		points: [
			"On-site delivery for excavators, mixers & gensets",
			"Scheduled top-ups for multi-site projects",
			"Digital invoices for project accounting"
		]
	},
	{
		id: "mining",
		icon: Factory,
		title: "Mining",
		headline: "Reliable fuel for remote and high-demand operations.",
		desc: "Mining operations consume diesel at scale. Our mobile petrol pump fleet brings PSU-authorised fuel to your site with IoT-secured dispensing and consumption records your operations team can trust.",
		points: [
			"Bulk delivery for heavy machinery",
			"Secure dispensing in remote locations",
			"Consumption tracking for cost control"
		]
	},
	{
		id: "factories",
		icon: Factory,
		title: "Factories",
		headline: "Industrial fuel supply without production interruptions.",
		desc: "Factories need uninterrupted power and process fuel. Call Diesel supports manufacturing units with doorstep diesel, industrial oils, and scheduled deliveries aligned to your shift patterns.",
		points: [
			"Generator and boiler fuel supply",
			"Industrial lubricants on request",
			"Recurring delivery schedules"
		]
	},
	{
		id: "hospitals",
		icon: Hospital,
		title: "Hospitals",
		headline: "Critical backup power, delivered on time.",
		desc: "Hospitals cannot afford generator downtime. We provide priority diesel delivery for backup gensets with live tracking and verified quantity — so patient care never depends on a fuel run.",
		points: [
			"24×7 emergency fuel support",
			"Priority dispatch for healthcare sites",
			"Compliant digital invoicing"
		]
	},
	{
		id: "warehouses",
		icon: Warehouse,
		title: "Warehouses",
		headline: "Fuel for fleets, forklifts and backup power.",
		desc: "Distribution centres and warehouses run forklifts, trucks and gensets around the clock. Call Diesel simplifies procurement with app or WhatsApp ordering and trackable doorstep delivery.",
		points: [
			"Fleet yard fuel delivery",
			"Generator backup for cold storage",
			"Order history for logistics teams"
		]
	},
	{
		id: "ports",
		icon: Ship,
		title: "Ports",
		headline: "Fuel logistics for port-side operations.",
		desc: "Port operations depend on heavy equipment and vehicle fleets. We deliver authorised diesel to port-adjacent yards and facilities with GPS-enabled tankers and secure dispensing controls.",
		points: [
			"Equipment and vehicle fuel supply",
			"Live delivery tracking",
			"Authorised HP / IOCL / BPCL fuel"
		]
	},
	{
		id: "shipping",
		icon: Ship,
		title: "Shipping",
		headline: "Support for maritime-adjacent fuel needs.",
		desc: "Shipping companies and marine service providers need dependable onshore fuel. Call Diesel bridges the gap with doorstep delivery, digital records, and enterprise-grade security.",
		points: [
			"Onshore diesel for support fleets",
			"Scheduled deliveries for terminals",
			"Digital proof of every delivery"
		]
	},
	{
		id: "agriculture",
		icon: Wheat,
		title: "Agriculture",
		headline: "Diesel for farms, harvesters and irrigation.",
		desc: "Agricultural operations need fuel at the field, not at the pump. Order via app or WhatsApp and get diesel delivered to your farm or storage point with quantity you can verify.",
		points: [
			"Tractor and harvester fuel supply",
			"Seasonal delivery planning",
			"Rural and semi-urban coverage"
		]
	},
	{
		id: "infrastructure",
		icon: Building2,
		title: "Infrastructure",
		headline: "Fuel for roads, bridges and public works.",
		desc: "Large infrastructure projects span multiple locations and timelines. Call Diesel provides trackable, authorised fuel delivery that scales with your project phases and site requirements.",
		points: [
			"Multi-location project support",
			"GPS-tracked tanker dispatch",
			"Enterprise reporting and invoices"
		]
	},
	{
		id: "telecom",
		icon: Signal,
		title: "Telecom",
		headline: "Genset fuel for towers and network sites.",
		desc: "Telecom towers and network facilities rely on diesel gensets for uptime. We deliver to tower sites and hubs with live tracking so field teams know exactly when fuel arrives.",
		points: [
			"Tower site diesel delivery",
			"Scheduled replenishment",
			"Remote site fuel management"
		]
	},
	{
		id: "datacenters",
		icon: ServerCog,
		title: "Data Centers",
		headline: "Zero-compromise fuel for always-on power.",
		desc: "Data centres demand the highest reliability. Call Diesel supplies authorised diesel for backup generators with IoT-secured dispensing, geo-fencing, and full audit trails.",
		points: [
			"Priority genset fuel delivery",
			"IoT-verified dispensing",
			"Compliance-ready documentation"
		]
	},
	{
		id: "hotels",
		icon: Hotel,
		title: "Hotels",
		headline: "Discreet, reliable fuel for hospitality operations.",
		desc: "Hotels and resorts depend on backup generators and kitchen fuel systems. We deliver quietly and professionally, with scheduling that fits your guest operations.",
		points: [
			"Generator fuel for hospitality",
			"Flexible delivery windows",
			"GST-ready digital invoices"
		]
	},
	{
		id: "education",
		icon: GraduationCap,
		title: "Education",
		headline: "Fuel for campuses, labs and backup power.",
		desc: "Schools, colleges and universities need dependable diesel for generators and transport fleets. Call Diesel offers simple ordering and tracked delivery for institutional buyers.",
		points: [
			"Campus generator supply",
			"Institutional fleet fuel",
			"Transparent billing for accounts"
		]
	},
	{
		id: "government",
		icon: Landmark,
		title: "Government",
		headline: "Compliant fuel delivery for public sector.",
		desc: "Government departments and PSUs require authorised fuel, proper documentation, and audit-ready records. Call Diesel meets these standards with PSU-partner sourcing and digital invoicing.",
		points: [
			"Authorised PSU fuel channels",
			"Digital invoices and history",
			"PESO-compliant operations"
		]
	},
	{
		id: "transport",
		icon: Bus,
		title: "Transport",
		headline: "Fleet fuel without the pump queue.",
		desc: "Transport companies and fleet operators save time and dead mileage with doorstep diesel. Track every delivery, manage consumption, and order through app or WhatsApp.",
		points: [
			"Fleet yard and depot delivery",
			"Live GPS on every tanker",
			"Consumption history for fleet managers"
		]
	}
];
var sharedBenefits = [
	{
		icon: Fuel,
		title: "Authorised PSU fuel",
		desc: "HP, IndianOil and Bharat Petroleum partner channels."
	},
	{
		icon: MapPin,
		title: "Live GPS tracking",
		desc: "Know when your tanker arrives, every time."
	},
	{
		icon: ShieldCheck,
		title: "Secure dispensing",
		desc: "IoT controls, geo-fencing and brake interlock."
	}
];
function IndustryExplorer() {
	const [active, setActive] = (0, import_react.useState)(0);
	const industry = industries[active];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-6 py-16 md:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-2xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-primary font-semibold text-sm tracking-wider uppercase",
						children: "Sectors we serve"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-4xl md:text-5xl font-display font-bold text-primary-dark",
						children: "Fuel solutions built for your industry."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-foreground/65",
						children: "Select a sector to see how Call Diesel supports your operations."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 flex flex-wrap justify-center gap-2 max-h-[280px] overflow-y-auto sm:max-h-none sm:overflow-visible pr-1",
				children: industries.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setActive(i),
					className: `inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-semibold transition ${active === i ? "bg-gradient-primary text-primary-foreground shadow-soft" : "bg-card border border-border text-primary-dark hover:bg-accent/50"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-4 shrink-0" }), item.title]
				}, item.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "wait",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						y: -12
					},
					transition: { duration: .3 },
					className: "mt-10 rounded-3xl border border-border bg-card p-6 md:p-10 shadow-soft overflow-hidden relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-20 -right-20 size-56 rounded-full bg-primary/10 blur-3xl pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative grid lg:grid-cols-[1fr,1.2fr] gap-8 items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "inline-grid size-14 place-items-center rounded-2xl bg-accent text-primary-dark mb-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(industry.icon, { className: "size-7" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-primary text-sm font-semibold uppercase tracking-wider",
								children: industry.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 text-3xl md:text-4xl font-display font-bold text-primary-dark leading-tight",
								children: industry.headline
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-foreground/70 leading-relaxed",
							children: industry.desc
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 space-y-3",
							children: industry.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3 text-sm text-foreground/75",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-primary shrink-0 mt-0.5" }), point]
							}, point))
						})] })]
					})]
				}, industry.id)
			})
		]
	});
}
function IndustryHighlights() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-6 pb-16 md:pb-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5",
			children: industries.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 24
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-40px"
				},
				transition: {
					delay: i % 3 * .06,
					duration: .45
				},
				className: "group rounded-2xl border border-border bg-card p-5 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid size-11 place-items-center rounded-xl bg-accent text-primary-dark group-hover:bg-gradient-primary group-hover:text-primary-foreground transition",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display font-bold text-primary-dark",
						children: item.title
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-foreground/65 leading-relaxed line-clamp-3",
					children: item.desc
				})]
			}, item.id))
		})
	});
}
function SharedValue() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-6 pb-20 md:pb-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-3xl bg-primary-dark text-white p-8 md:p-12 shadow-elegant relative overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_30%,#67B548,transparent_50%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative grid lg:grid-cols-2 gap-10 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-wider text-white/70",
						children: "Why every sector chooses us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl md:text-4xl font-display font-bold leading-tight",
						children: "One platform. Every industry. Same trusted delivery."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-white/75 leading-relaxed",
						children: "Whether you run a construction site, a hospital, or a 200-vehicle fleet — Call Diesel brings authorised fuel, live tracking, and secure dispensing to your doorstep."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "inline-flex items-center gap-2 rounded-xl bg-white text-primary-dark px-5 py-2.5 text-sm font-semibold hover:scale-[1.02] transition",
							children: ["Get a Quote ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: COMPANY.whatsappUrl,
							className: "inline-flex items-center gap-2 rounded-xl bg-primary text-white px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition",
							children: "Order on WhatsApp"
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4",
					children: sharedBenefits.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							x: 20
						},
						whileInView: {
							opacity: 1,
							x: 0
						},
						viewport: { once: true },
						transition: { delay: i * .08 },
						className: "rounded-2xl bg-white/10 backdrop-blur border border-white/15 p-5 flex items-start gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-10 place-items-center rounded-xl bg-primary shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b.icon, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold",
							children: b.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-white/70",
							children: b.desc
						})] })]
					}, b.title))
				})]
			})]
		})
	});
}
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Industries",
			title: "Powering the industries that power India.",
			subtitle: "From construction yards to data centres — authorised doorstep diesel with GPS tracking, IoT security, and digital records for every sector.",
			backgroundImage: industries_hero_web_default,
			cta: {
				to: "/contact",
				label: "Talk to Our Team"
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppMarketingStrip, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndustryExplorer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndustryHighlights, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SharedValue, {})
	] });
}
//#endregion
export { Page as component };
