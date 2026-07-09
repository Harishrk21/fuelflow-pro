import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/WhatsAppIcon-CQzq3ziO.js
var import_jsx_runtime = require_jsx_runtime();
var COMPANY = {
	brand: "Call Diesel",
	tagline: "Highest grade fuel delivery",
	legalName: "JEYAVEER FUELS PRIVATE LIMITED",
	address: "No 726 Anna Salai, Nanthanam, Chennai 600035",
	phoneDisplay: "044 - 4311 4311",
	phoneTel: "+914443114311",
	whatsappDisplay: "+1 (555) 988-1453",
	whatsapp: "15559881453",
	whatsappUrl: "https://wa.me/15559881453",
	email: "calldiesel@yahoo.com",
	website: "https://www.calldiesel.in",
	domain: "www.calldiesel.in",
	pan: "AAFCJ0415L",
	hotline: "4311-4311"
};
var FUEL_PARTNERS = [
	{
		id: "hpcl",
		name: "Hindustan Petroleum",
		short: "HP",
		logo: "/partners/hpcl.svg"
	},
	{
		id: "iocl",
		name: "IndianOil",
		short: "IOCL",
		logo: "/partners/iocl.svg"
	},
	{
		id: "bpcl",
		name: "Bharat Petroleum",
		short: "BPCL",
		logo: "/partners/bpcl.svg"
	}
];
var VEHICLE_SPECS = [
	{
		title: "Trained Drivers",
		desc: "Certified operators for safe doorstep dispensing"
	},
	{
		title: "5 Liter W&M Jar",
		desc: "Weights & Measures approved verification jar"
	},
	{
		title: "40ft Hose",
		desc: "Extended reach hose for on-site tank access"
	},
	{
		title: "Geo Locked",
		desc: "Dispensing enabled only inside the geo-fence"
	},
	{
		title: "24 × 7 Service",
		desc: "Round-the-clock delivery across service areas"
	},
	{
		title: "PESO Approved",
		desc: "Compliant mobile petrol pump operations"
	},
	{
		title: "GPS Tracking",
		desc: "Live vehicle location from dispatch to delivery"
	},
	{
		title: "~1% Accurate Meters",
		desc: "Precision metering for right quantity every time"
	},
	{
		title: "Density Check",
		desc: "Quality verification before and during dispense"
	},
	{
		title: "W&M Certificate",
		desc: "Weights and Measures certified equipment"
	}
];
var LICENSES = [
	{
		title: "Certificate of Incorporation",
		body: "Ministry of Corporate Affairs — Jeyaveer Fuels Pvt. Ltd."
	},
	{
		title: "Startup India / DPIIT",
		body: "Recognised startup under Government of India"
	},
	{
		title: "PAN — AAFCJ0415L",
		body: "Income Tax Department, Government of India"
	},
	{
		title: "Udyam Registration",
		body: "MSME / Udyam registered enterprise"
	},
	{
		title: "TN Certificate of Verification",
		body: "Government of Tamil Nadu Weights & Measures"
	},
	{
		title: "HPCL Authorisation Docs",
		body: "Authorised fuel partnership documentation"
	}
];
var WHATSAPP_GREEN = "#25D366";
function WhatsAppIcon({ className, variant = "brand", ...props }) {
	const glyph = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		d: "M9.6 24.5 11 20.6a9.2 9.2 0 1 1 3.7 3l-5.1.9Z",
		fill: "#fff"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		d: "M21.9 18.8c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2l-.6.9c-.2.2-.3.3-.6.1-.3-.2-1.1-.4-2.1-1.4-.8-.7-1.3-1.5-1.5-1.8-.2-.3 0-.5.2-.7l.4-.5.3-.4c.1-.2 0-.4 0-.6l-1-2.3c-.2-.4-.4-.4-.7-.4h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1-1.1 2.5s1.1 2.8 1.2 3c.1.2 2.2 3.4 5.3 4.7 3.2 1.4 3.2.9 3.7.9.6-.1 1.8-.7 2-1.4.3-.7.3-1.2.2-1.4-.1-.2-.3-.2-.6-.4Z",
		fill: "#fff"
	})] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		className,
		"aria-hidden": "true",
		...props,
		children: [variant === "brand" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "16",
			cy: "16",
			r: "15",
			fill: WHATSAPP_GREEN
		}), glyph]
	});
}
//#endregion
export { WhatsAppIcon as a, VEHICLE_SPECS as i, FUEL_PARTNERS as n, LICENSES as r, COMPANY as t };
