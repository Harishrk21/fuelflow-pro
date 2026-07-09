import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { lt as Bot, mt as ArrowRight, tt as Clock3 } from "../_libs/lucide-react.mjs";
import { a as WhatsAppIcon, t as COMPANY } from "./WhatsAppIcon-CQzq3ziO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/WhatsAppMarketingStrip-e2rV0_Hn.js
var import_jsx_runtime = require_jsx_runtime();
function WhatsAppMarketingStrip({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: `mx-auto max-w-7xl px-6 py-8 ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-2xl border border-border bg-gradient-hero p-5 md:p-6 shadow-soft",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-primary text-xs font-semibold tracking-wider uppercase",
						children: "WhatsApp First Ordering"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 text-xl md:text-2xl font-display font-bold text-primary-dark",
						children: "Book diesel in under 60 seconds on WhatsApp."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap gap-2 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 border border-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "size-3.5 text-primary" }), " Automated 24/7"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 border border-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { className: "size-3.5 text-primary" }), " Live status updates"]
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: COMPANY.whatsappUrl,
					className: "inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-elegant hover:scale-[1.02] transition",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, {
							variant: "light",
							className: "size-4"
						}),
						"Order on WhatsApp",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
					]
				})]
			})
		})
	});
}
//#endregion
export { WhatsAppMarketingStrip as t };
