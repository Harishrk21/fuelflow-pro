import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { S as Ruler, U as GraduationCap, V as Headphones, W as Gauge, X as Droplets, b as ScrollText, dt as Beaker, ft as BadgeCheck, j as Lock, x as Satellite } from "../_libs/lucide-react.mjs";
import { i as ScrollReveal } from "./PageParts-CLY-M-VH.mjs";
import { i as VEHICLE_SPECS } from "./WhatsAppIcon-CQzq3ziO.mjs";
import { t as TiltCard } from "./TiltCard-8L2X_g1c.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/VehicleSpecs-DXdJ3lRT.js
var import_jsx_runtime = require_jsx_runtime();
var icons = [
	GraduationCap,
	Beaker,
	Ruler,
	Lock,
	Headphones,
	BadgeCheck,
	Satellite,
	Gauge,
	Droplets,
	ScrollText
];
function VehicleSpecs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-6 py-16 md:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
			direction: "up",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-2xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-primary font-semibold text-sm tracking-wider uppercase",
						children: "Our Vehicle Specification"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-4xl md:text-5xl font-display font-bold text-primary-dark",
						children: "Call Diesel Mobile Petrol Pump"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-foreground/70",
						children: "PESO-ready tankers with IoT controllers, geo-locked dispensing and Weights & Measures certified meters."
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-mesh rounded-3xl opacity-60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4",
				children: VEHICLE_SPECS.map((s, i) => {
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
						index: i,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TiltCard, {
							intensity: 12,
							className: "relative h-full rounded-2xl bg-card border border-border p-4 md:p-5 shadow-soft overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid size-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft mb-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icons[i] ?? BadgeCheck, { className: "size-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display font-bold text-primary-dark text-sm leading-snug",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs text-foreground/60 leading-relaxed",
									children: s.desc
								})
							]
						})
					}, s.title);
				})
			})]
		})]
	});
}
//#endregion
export { VehicleSpecs as t };
