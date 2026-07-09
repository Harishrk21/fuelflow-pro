import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { A as Mail, T as Phone, ct as Building2, k as MapPin, y as Send } from "../_libs/lucide-react.mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
import { a as WhatsAppIcon, t as COMPANY } from "./WhatsAppIcon-CQzq3ziO.mjs";
import { t as LicensesTrust } from "./LicensesTrust-B4XJObSM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CA8DvQv2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var contact_hero_web_default = "/assets/contact-hero-web-cz5LPiYC.jpg";
var faqs = [
	{
		q: "Can I order through WhatsApp?",
		a: "Yes. Just message our WhatsApp number and follow the guided prompts."
	},
	{
		q: "Do you supply industrial oils?",
		a: "Yes — a full range of industrial oils and lubricants."
	},
	{
		q: "Can I schedule deliveries?",
		a: "Absolutely. Set recurring deliveries daily, weekly or monthly."
	},
	{
		q: "Do you provide GST invoice?",
		a: "Every order receives a digital GST-compliant invoice."
	},
	{
		q: "How does GPS tracking work?",
		a: "You get a live tracking link the moment your order is dispatched."
	},
	{
		q: "How secure is fuel delivery?",
		a: "IoT-authorised dispensing, brake interlock and geo-fenced zones."
	},
	{
		q: "What areas do you serve?",
		a: "Chennai and expanding across Tamil Nadu and South India."
	},
	{
		q: "Can I track previous orders?",
		a: "Yes — full history is available in the app and dashboard."
	},
	{
		q: "Whose fuel do you deliver?",
		a: "Authorised fuel from Hindustan Petroleum (HP), IndianOil and Bharat Petroleum."
	}
];
function Page() {
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-gradient-hero",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: contact_hero_web_default,
					alt: "",
					"aria-hidden": true,
					className: "absolute inset-0 h-full w-full object-cover object-center"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[#214C1F]/20" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-[#F6F2E8]/85 via-[#F6F2E8]/65 to-[#F6F2E8]/35" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[#F6F2E8]/70 via-transparent to-[#F6F2E8]/20" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-20 right-10 size-64 rounded-full bg-primary/20 blur-3xl animate-orb pointer-events-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-primary font-semibold text-sm tracking-wider uppercase",
							children: "Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 text-5xl md:text-6xl font-display font-bold text-primary-dark leading-tight",
							children: "Let's power your operations."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 text-lg text-foreground/70 max-w-lg",
							children: [
								"Tell us what you need. Call us at ",
								COMPANY.phoneDisplay,
								" or message on WhatsApp — our team responds quickly during business hours."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: COMPANY.whatsappUrl,
									className: "flex items-center gap-4 rounded-2xl bg-card border border-border p-4 shadow-soft hover:shadow-elegant transition shine-on-hover",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid size-11 place-items-center rounded-xl bg-primary text-primary-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, {
											variant: "light",
											className: "size-5"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "WhatsApp"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold text-primary-dark",
										children: COMPANY.whatsappDisplay
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `tel:${COMPANY.phoneTel}`,
									className: "flex items-center gap-4 rounded-2xl bg-card border border-border p-4 shadow-soft hover:shadow-elegant transition",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid size-11 place-items-center rounded-xl bg-accent text-primary-dark",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Call Us"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold text-primary-dark",
										children: COMPANY.phoneDisplay
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `mailto:${COMPANY.email}`,
									className: "flex items-center gap-4 rounded-2xl bg-card border border-border p-4 shadow-soft hover:shadow-elegant transition",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid size-11 place-items-center rounded-xl bg-accent text-primary-dark",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold text-primary-dark",
										children: COMPANY.email
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4 rounded-2xl bg-card border border-border p-4 shadow-soft",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid size-11 place-items-center rounded-xl bg-accent text-primary-dark",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Head Office"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold text-primary-dark",
										children: COMPANY.address
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4 rounded-2xl bg-primary-dark text-white p-4 shadow-soft",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid size-11 place-items-center rounded-xl bg-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "size-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-white/60",
											children: "Legal entity"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-semibold",
											children: COMPANY.legalName
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-white/60 mt-0.5",
											children: [
												"PAN ",
												COMPANY.pan,
												" · ",
												COMPANY.domain
											]
										})
									] })]
								})
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						onSubmit: (e) => {
							e.preventDefault();
							setSent(true);
						},
						className: "rounded-3xl bg-card border border-border p-8 shadow-elegant space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-display font-bold text-primary-dark",
								children: "Get a Quote"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid sm:grid-cols-2 gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Company",
										name: "company"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Name",
										name: "name",
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Phone",
										name: "phone",
										type: "tel",
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Email",
										name: "email",
										type: "email"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Fuel Type",
										name: "fuel",
										placeholder: "Diesel / Oil"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Quantity (L)",
										name: "qty",
										type: "number"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "sm:col-span-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Delivery Location",
											name: "loc"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "sm:col-span-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-sm font-medium text-primary-dark mb-1.5",
											children: "Message"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											name: "msg",
											rows: 4,
											className: "w-full rounded-xl border border-border bg-background px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/40"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "w-full inline-flex justify-center items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant hover:scale-[1.01] transition shine-on-hover",
								children: sent ? "Sent — we'll be in touch!" : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Send Request ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" })] })
							})
						]
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LicensesTrust, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-4xl px-6 py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-primary font-semibold text-sm tracking-wider uppercase",
					children: "FAQ"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-4xl md:text-5xl font-display font-bold text-primary-dark",
					children: "Answers, quickly."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 space-y-3",
				children: faqs.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
					className: "group rounded-2xl bg-card border border-border p-5 shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
						className: "cursor-pointer list-none flex items-center justify-between font-semibold text-primary-dark",
						children: [f.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary transition group-open:rotate-45 text-xl",
							children: "+"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-foreground/70 text-sm leading-relaxed",
						children: f.a
					})]
				}, f.q))
			})]
		})
	] });
}
function Field({ label, name, type = "text", required, placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block text-sm font-medium text-primary-dark mb-1.5",
		children: [label, required && " *"]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		name,
		type,
		required,
		placeholder,
		className: "w-full rounded-xl border border-border bg-background px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/40"
	})] });
}
//#endregion
export { Page as component };
