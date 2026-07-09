import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/TiltCard-8L2X_g1c.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function TiltCard({ children, className, intensity = 10 }) {
	const ref = (0, import_react.useRef)(null);
	const onMove = (e) => {
		const el = ref.current;
		if (!el) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const rect = el.getBoundingClientRect();
		const x = (e.clientX - rect.left) / rect.width;
		const y = (e.clientY - rect.top) / rect.height;
		const rx = (.5 - y) * intensity;
		const ry = (x - .5) * intensity;
		el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
		el.style.setProperty("--tilt-x", `${x * 100}%`);
		el.style.setProperty("--tilt-y", `${y * 100}%`);
	};
	const onLeave = () => {
		const el = ref.current;
		if (!el) return;
		el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		onMouseMove: onMove,
		onMouseLeave: onLeave,
		className: cn("tilt-card will-change-transform transition-transform duration-200 ease-out", className),
		style: { transformStyle: "preserve-3d" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tilt-glare pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300" }), children]
	});
}
//#endregion
export { TiltCard as t };
