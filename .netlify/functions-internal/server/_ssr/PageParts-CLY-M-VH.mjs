import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { mt as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as useReducedMotion, r as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageParts-CLY-M-VH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
	const [isMobile, setIsMobile] = import_react.useState(void 0);
	import_react.useEffect(() => {
		const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
		const onChange = () => {
			setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		};
		mql.addEventListener("change", onChange);
		setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		return () => mql.removeEventListener("change", onChange);
	}, []);
	return !!isMobile;
}
var ease = [
	.22,
	1,
	.36,
	1
];
function ScrollReveal({ children, className, direction = "left", index = 0 }) {
	const isMobile = useIsMobile();
	if (useReducedMotion()) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className,
		children
	});
	const mobileDir = index % 2 === 0 ? "left" : "right";
	const hidden = {
		left: {
			x: isMobile ? -72 : -28,
			y: 0,
			opacity: 0,
			scale: isMobile ? .96 : 1
		},
		right: {
			x: isMobile ? 72 : 28,
			y: 0,
			opacity: 0,
			scale: isMobile ? .96 : 1
		},
		up: {
			x: 0,
			y: isMobile ? 40 : 22,
			opacity: 0,
			scale: isMobile ? .96 : 1
		}
	}[isMobile ? mobileDir : direction];
	const transition = isMobile ? {
		type: "spring",
		stiffness: 120,
		damping: 20,
		mass: .85
	} : {
		duration: .45,
		delay: index * .05,
		ease
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className: cn(className),
		initial: hidden,
		whileInView: {
			x: 0,
			y: 0,
			opacity: 1,
			scale: 1
		},
		viewport: {
			once: true,
			amount: isMobile ? .2 : .3,
			margin: isMobile ? "0px 0px -10% 0px" : "0px 0px -12% 0px"
		},
		transition,
		children
	});
}
function PageHero({ eyebrow, title, subtitle, cta, backgroundImage, subtitleClassName, backgroundImageClassName }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-gradient-hero",
		children: [
			backgroundImage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: backgroundImage,
					alt: "",
					"aria-hidden": true,
					className: backgroundImageClassName ?? "absolute inset-0 h-full w-full object-cover object-right md:object-center"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[#214C1F]/20" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-[#F6F2E8]/75 via-[#F6F2E8]/45 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[#F6F2E8]/55 via-transparent to-[#F6F2E8]/15" })
			] }),
			!backgroundImage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-mesh" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-6 py-24 md:py-32 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-primary font-semibold text-sm tracking-wider uppercase",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 text-5xl md:text-6xl font-display font-bold text-primary-dark leading-tight max-w-4xl mx-auto",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `mt-6 text-lg max-w-2xl mx-auto ${subtitleClassName ?? "text-foreground/70"}`,
						children: subtitle
					}),
					cta && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: cta.to,
						className: "mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant hover:scale-[1.02] transition",
						children: [
							cta.label,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
						]
					})
				]
			})
		]
	});
}
function BrochureFigure({ src, alt, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			className: "w-full h-auto rounded-xl"
		})
	});
}
function FeatureGrid({ items, cols = 3 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-6 py-16 md:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `grid grid-cols-1 sm:grid-cols-2 ${cols === 4 ? "lg:grid-cols-4" : cols === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"} gap-10 sm:gap-5`,
			children: items.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
				index: i,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative rounded-2xl bg-card border border-border p-6 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition shine-on-hover h-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-12 place-items-center rounded-xl bg-accent text-primary-dark group-hover:bg-gradient-primary group-hover:text-primary-foreground transition",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "size-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 text-lg font-display font-bold text-primary-dark",
							children: f.title
						}),
						f.desc && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-foreground/60",
							children: f.desc
						})
					]
				})
			}, f.title))
		})
	});
}
//#endregion
export { ScrollReveal as i, FeatureGrid as n, PageHero as r, BrochureFigure as t };
