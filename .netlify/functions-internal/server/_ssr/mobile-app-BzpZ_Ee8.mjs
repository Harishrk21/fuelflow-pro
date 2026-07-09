import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { B as History, G as Fuel, K as FileText, Q as CreditCard, V as Headphones, et as Clock, k as MapPin, ot as ChartColumn, rt as CircleCheck, ut as Bell, w as Radio } from "../_libs/lucide-react.mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
import { n as FeatureGrid, r as PageHero, t as BrochureFigure } from "./PageParts-CLY-M-VH.mjs";
import { t as COMPANY } from "./WhatsAppIcon-CQzq3ziO.mjs";
import { t as WhatsAppMarketingStrip } from "./WhatsAppMarketingStrip-e2rV0_Hn.mjs";
import { t as AppDownload } from "./AppDownload-C4UyAFh2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mobile-app-BzpZ_Ee8.js
var import_jsx_runtime = require_jsx_runtime();
var mobile_app_hero_web_default = "/assets/mobile-app-hero-web-ElpFd_2u.jpg";
var brochure_mobile_app_platform_default = "/assets/brochure-mobile-app-platform-DHZ3qvg5.png";
var feats = [
	{
		icon: Fuel,
		title: "Order Fuel",
		desc: "Book preferred IOCL / BPCL / HPCL pumps in a few taps."
	},
	{
		icon: MapPin,
		title: "Track Live",
		desc: "Real-time GPS map from dispatch to doorstep."
	},
	{
		icon: Bell,
		title: "Notifications",
		desc: "Order Placed → Confirmed → Dispatch → Dispensing."
	},
	{
		icon: History,
		title: "Fuel History",
		desc: "Past orders, quantities, rates and invoices."
	},
	{
		icon: Clock,
		title: "Scheduled Orders",
		desc: "Pick delivery slots that suit your site."
	},
	{
		icon: FileText,
		title: "Digital Invoices",
		desc: "GST-ready invoices with convenience charges."
	},
	{
		icon: Headphones,
		title: "Live Support",
		desc: "Chat with our team when you need help."
	},
	{
		icon: Radio,
		title: "Driver & Vehicle",
		desc: "Driver name, vehicle number and OTP on dispatch."
	},
	{
		icon: ChartColumn,
		title: "Consumption Reports",
		desc: "Understand where every litre goes."
	},
	{
		icon: CreditCard,
		title: "Digital Payments",
		desc: "Cash on delivery or pay in-app securely."
	}
];
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Mobile App",
			title: "Your fuel operations, in your pocket.",
			subtitle: "Order from preferred PSU pumps, live-track tankers, and keep full consumption history — just order and relax.",
			cta: {
				to: "/contact",
				label: "Request Access"
			},
			backgroundImage: mobile_app_hero_web_default
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppMarketingStrip, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-6 py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-2xl mx-auto mb-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-primary font-semibold text-sm tracking-wider uppercase",
							children: "The Call Diesel App Platform"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl md:text-4xl font-display font-bold text-primary-dark",
							children: "Order · Track · Delivered"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-foreground/65",
							children: "Choose your preferred PSU pump, track live delivery, and access full order history."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 24
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					className: "rounded-3xl border border-border bg-card p-3 md:p-4 shadow-elegant mb-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrochureFigure, {
						src: brochure_mobile_app_platform_default,
						alt: "Call Diesel mobile app: order diesel, track live delivery, and view order history"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-3 gap-6",
					children: [
						{
							step: "1",
							title: "Order Diesel",
							desc: "Book from your preferred HP / IOCL / BPCL pump with quantity, asset, and delivery slot."
						},
						{
							step: "2",
							title: "Track Live",
							desc: "Follow your order from placement to dispatch to dispensing — with live map updates."
						},
						{
							step: "3",
							title: "Diesel Delivered",
							desc: "Get fuel at your doorstep with digital invoice, driver details, and consumption history."
						}
					].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { delay: i * .1 },
						className: "rounded-2xl border border-border bg-card p-6 shadow-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex size-8 items-center justify-center rounded-full bg-gradient-primary text-white text-sm font-bold",
								children: item.step
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display font-bold text-primary-dark",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-foreground/65 leading-relaxed",
								children: item.desc
							})
						]
					}, item.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-12 text-center text-foreground/70 max-w-3xl mx-auto",
					children: [
						"The Call Diesel app connects customers with authorised fuel sellers. Order in a few taps and get it delivered to your doorstep. Hotline ",
						COMPANY.hotline,
						" · ",
						COMPANY.domain
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureGrid, {
			items: feats,
			cols: 4
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppDownload, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-6 pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-3xl bg-gradient-hero border border-border p-8 flex flex-wrap gap-4 justify-center",
				children: [
					"Preferred PSU pump selection",
					"Density & rating visible",
					"Time-slot booking",
					"Live map tracking",
					"Driver OTP on dispatch",
					"Invoice & history"
				].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-2 rounded-xl bg-card border border-border px-4 py-2 text-sm font-medium text-primary-dark shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-primary" }),
						" ",
						t
					]
				}, t))
			})
		})
	] });
}
//#endregion
export { Page as component };
