import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { ct as Building2, g as Shield, pt as Award, q as FileCheck } from "../_libs/lucide-react.mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
import { r as LICENSES, t as COMPANY } from "./WhatsAppIcon-CQzq3ziO.mjs";
import { t as TiltCard } from "./TiltCard-8L2X_g1c.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/LicensesTrust-B4XJObSM.js
var import_jsx_runtime = require_jsx_runtime();
function LicensesTrust() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-6 py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid lg:grid-cols-2 gap-12 items-start",
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
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-primary font-semibold text-sm tracking-wider uppercase",
						children: "Our Licenses"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-4xl md:text-5xl font-display font-bold text-primary-dark leading-tight",
						children: "Fully licensed. Fully transparent."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5 text-foreground/70 leading-relaxed",
						children: [COMPANY.legalName, " operates with incorporation, DPIIT recognition, Weights & Measures verification, and authorised PSU fuel partnerships."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 rounded-2xl bg-primary-dark text-white p-6 shadow-elegant relative overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-8 -top-8 size-32 rounded-full bg-primary/30 blur-2xl animate-orb" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "size-8 text-primary mb-3" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display font-bold text-lg",
								children: COMPANY.legalName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-white/70",
								children: COMPANY.address
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm text-white/70",
								children: ["PAN: ", COMPANY.pan]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4",
				children: LICENSES.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 16
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { delay: i * .05 },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
						className: "h-full rounded-2xl bg-card border border-border p-4 md:p-5 shadow-soft",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid size-10 shrink-0 place-items-center rounded-xl bg-accent text-primary-dark",
								children: i % 2 === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "size-5" }) : i % 3 === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCheck, { className: "size-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold text-primary-dark text-sm",
								children: l.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-foreground/60 leading-relaxed",
								children: l.body
							})] })]
						})
					})
				}, l.title))
			})]
		})
	});
}
//#endregion
export { LicensesTrust as t };
