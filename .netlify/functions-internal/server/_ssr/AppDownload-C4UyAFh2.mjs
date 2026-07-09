import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
import { t as COMPANY } from "./WhatsAppIcon-CQzq3ziO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AppDownload-C4UyAFh2.js
var import_jsx_runtime = require_jsx_runtime();
function GooglePlayBadge() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: "https://play.google.com/store",
		target: "_blank",
		rel: "noreferrer",
		className: "inline-flex items-center gap-3 rounded-xl bg-black text-white px-5 py-3 hover:scale-[1.02] transition shadow-elegant",
		"aria-label": "Get it on Google Play",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			className: "size-7 fill-current",
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3.6 2.2c-.3.2-.5.6-.5 1.1v17.4c0 .5.2.9.5 1.1l9.7-9.8L3.6 2.2zm12.1 7.4-2.5 2.5 2.5 2.5 3.1-1.8c.9-.5.9-1.4 0-1.9l-3.1-1.3zM4.6 21.5l9-9 2.5 2.5-9.4 5.4c-.8.5-1.6.2-2.1-.1.0.0zm0-19l2.1-.1c.5-.3 1.3-.6 2.1-.1l9.4 5.4-2.5 2.5-9-9z" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-left leading-tight",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[10px] uppercase tracking-wide text-white/70",
				children: "Get it on"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold",
				children: "Google Play"
			})]
		})]
	});
}
function AppStoreBadge() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: "https://apps.apple.com",
		target: "_blank",
		rel: "noreferrer",
		className: "inline-flex items-center gap-3 rounded-xl bg-black text-white px-5 py-3 hover:scale-[1.02] transition shadow-elegant",
		"aria-label": "Download on the App Store",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			className: "size-7 fill-current",
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16.7 12.6c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.6.8-3.3.8-.7 0-1.7-.8-2.9-.8-1.5 0-2.9.9-3.6 2.2-1.6 2.7-.4 6.7 1.1 8.9.7 1.1 1.6 2.3 2.7 2.2 1.1-.1 1.5-.7 2.8-.7s1.7.7 2.8.7c1.2 0 1.9-1.1 2.6-2.2.8-1.2 1.1-2.3 1.1-2.4-.1 0-2.1-.8-2.1-3.6zm-2.3-6.1c.6-.7 1-1.7.9-2.7-.9.1-1.9.6-2.5 1.3-.6.6-1.1 1.6-1 2.5 1 .1 1.9-.4 2.6-1.1z" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-left leading-tight",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[10px] uppercase tracking-wide text-white/70",
				children: "Download on the"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold",
				children: "App Store"
			})]
		})]
	});
}
function AppDownload({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: `mx-auto max-w-7xl px-6 py-16 ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 20
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: { once: true },
			className: "relative overflow-hidden rounded-3xl bg-primary-dark p-8 md:p-12 shadow-elegant",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-20 -left-10 size-56 rounded-full bg-primary/25 blur-3xl animate-orb" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-16 right-0 size-48 rounded-full bg-white/10 blur-3xl animate-orb-delayed" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative grid md:grid-cols-2 gap-8 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-primary font-semibold text-sm tracking-wider uppercase",
							children: "Download the Call Diesel App"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl md:text-4xl font-display font-bold text-white leading-tight",
							children: "Just order your diesel on app and relax"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-white/70 text-sm leading-relaxed",
							children: [COMPANY.tagline, "® — order from preferred PSU pumps, track live, and keep consumption history at your fingertips."]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-3 md:justify-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GooglePlayBadge, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppStoreBadge, {})]
					})]
				})
			]
		})
	});
}
//#endregion
export { AppDownload as t };
