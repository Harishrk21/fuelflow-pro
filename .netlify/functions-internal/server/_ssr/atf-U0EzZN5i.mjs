import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { M as LockKeyhole, W as Gauge, X as Droplets, Z as Database, _ as ShieldCheck, a as Wallet, at as ChartLine, c as TrendingUp, ht as Activity, mt as ArrowRight, rt as CircleCheck, ut as Bell } from "../_libs/lucide-react.mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
import { r as PageHero, t as BrochureFigure } from "./PageParts-CLY-M-VH.mjs";
import { t as WhatsAppMarketingStrip } from "./WhatsAppMarketingStrip-e2rV0_Hn.mjs";
import { t as TiltCard } from "./TiltCard-8L2X_g1c.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/atf-U0EzZN5i.js
var import_jsx_runtime = require_jsx_runtime();
var atf_hero_web_default = "/assets/atf-hero-web-B0hrJAKL.jpg";
var brochure_atf_overview_default = "/assets/brochure-atf-overview-ByXOOIb4.png";
var brochure_atf_features_default = "/assets/brochure-atf-features-DHkM8oSR.png";
var cards = [
	{
		i: Gauge,
		t: "Live Fuel Level",
		v: "78%",
		d: "Real-time tank telemetry"
	},
	{
		i: TrendingUp,
		t: "Diesel Consumption",
		v: "1,245 L",
		d: "Last 7 days"
	},
	{
		i: ChartLine,
		t: "Sub Asset Consumption",
		v: "12 assets",
		d: "Per-machine breakdown"
	},
	{
		i: Wallet,
		t: "Savings",
		v: "₹ 84,200",
		d: "Vs previous quarter"
	},
	{
		i: ShieldCheck,
		t: "Authorised Dispensing",
		v: "100%",
		d: "Digital authorisation"
	},
	{
		i: Bell,
		t: "Alerts",
		v: "3 active",
		d: "Level, tamper, refill"
	}
];
var benefits = [
	{
		icon: Activity,
		t: "Live tracking of fuel levels",
		d: "Automatic alerts on your mobile app when diesel levels are low — reorder via Call Diesel Mobile Petrol Pump."
	},
	{
		icon: Droplets,
		t: "Overall fuel consumption through ATF",
		d: "Always know the exact amount of diesel filled into your on-site storage connected to ATF."
	},
	{
		icon: Database,
		t: "Sub-asset consumption patterns",
		d: "Track diesel dispensed into DG sets and other sub-assets — daily, weekly, monthly and yearly."
	},
	{
		icon: Wallet,
		t: "Tracking of your overall savings",
		d: "See what authorised, measured dispensing saves versus traditional procurement."
	},
	{
		icon: LockKeyhole,
		t: "Dispensing authorised by you",
		d: "Diesel dispensing is possible only with authorisation from the ATF customer — ultimate security."
	}
];
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Any Time Fuel",
			title: "ATF — Smart Fuel Management Device.",
			subtitle: "A stationary equipment that acts as a diesel data management device — procurement and consumption information at a click on your phone.",
			cta: {
				to: "/contact",
				label: "Book a Demo"
			},
			backgroundImage: atf_hero_web_default
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppMarketingStrip, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-6 py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				className: "rounded-3xl border border-border bg-card p-3 md:p-4 shadow-soft mb-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrochureFigure, {
					src: brochure_atf_overview_default,
					alt: "What is Call Diesel ATF — diesel data management device with live tracking and consumption insights"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-2 gap-12 items-center",
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
							children: "What is Call Diesel ATF"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl md:text-4xl font-display font-bold text-primary-dark leading-tight",
							children: "A diesel data management device on your site."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-foreground/70 leading-relaxed",
							children: "ATF is stationary equipment that tracks diesel procurement and consumption. Get fuel levels, usage patterns, and savings data — all on your phone."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 space-y-3",
							children: [
								"Live tracking of fuel levels in your ATF",
								"Overall fuel consumption through ATF",
								"Fuel consumption pattern of your sub-assets",
								"Tracking of your overall savings",
								"Dispensing authorised by you"
							].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2 text-sm text-foreground/80",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-primary shrink-0 mt-0.5" }),
									" ",
									x
								]
							}, x))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TiltCard, {
					className: "rounded-3xl bg-primary-dark text-white p-8 shadow-elegant relative overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-mesh opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-wider text-white/50",
								children: "ATF Unit Preview"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 text-2xl font-display font-bold",
								children: "2000 Litres Total Capacity"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 grid grid-cols-2 gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl bg-white/10 p-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-white/50",
											children: "Total Refill"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xl font-bold",
											children: "67,500 L"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl bg-white/10 p-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-white/50",
											children: "Total Dispensed"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xl font-bold",
											children: "59,500 L"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl bg-white/10 p-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-white/50",
											children: "Tank 1"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xl font-bold text-primary",
											children: "60% · 597 L"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl bg-white/10 p-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-white/50",
											children: "Tank 2"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xl font-bold text-primary",
											children: "80% · 803 L"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold text-white/70",
									children: "Sub Assets · DG Set 1 / DG Set 2"
								}), [
									"16/03 — 350 L",
									"12/02 — 400 L",
									"15/02 — 450 L"
								].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between rounded-lg bg-white/5 px-3 py-2 text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Refill history" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary font-semibold",
										children: r
									})]
								}, r))]
							})
						]
					})]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-6 pb-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-2xl mx-auto mb-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-primary font-semibold text-sm tracking-wider uppercase",
						children: "Any Time Fuel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl md:text-4xl font-display font-bold text-primary-dark",
						children: "Monitor, control, and save — from your phone."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					className: "rounded-3xl border border-border bg-card p-3 md:p-4 shadow-soft mb-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrochureFigure, {
						src: brochure_atf_features_default,
						alt: "ATF features: overall consumption, sub-asset patterns, live fuel level alerts, and authorised dispensing"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-2 gap-5",
					children: benefits.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 18
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { delay: i * .06 },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TiltCard, {
							className: "h-full rounded-2xl bg-card border border-border p-6 shadow-soft",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid size-11 place-items-center rounded-xl bg-accent text-primary-dark mb-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b.icon, { className: "size-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display font-bold text-primary-dark",
									children: b.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-foreground/60 leading-relaxed",
									children: b.d
								})
							]
						})
					}, b.t))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-6 py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl bg-card border border-border shadow-elegant p-6 md:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wider text-muted-foreground",
							children: "Dashboard"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-display font-bold text-primary-dark",
							children: "ATF Live Overview"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-primary/10 text-primary text-xs font-semibold px-3 py-1",
							children: "● Live"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
						children: cards.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								scale: .95
							},
							whileInView: {
								opacity: 1,
								scale: 1
							},
							viewport: { once: true },
							transition: { delay: i * .05 },
							className: "rounded-2xl bg-gradient-hero border border-border p-6 shadow-soft shine-on-hover",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid size-10 place-items-center rounded-xl bg-white text-primary-dark shadow-soft",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.i, { className: "size-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] uppercase tracking-wider text-muted-foreground",
										children: c.d
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm text-muted-foreground",
									children: c.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-3xl font-display font-bold text-primary-dark",
									children: c.v
								})
							]
						}, c.t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid lg:grid-cols-3 gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-2 rounded-2xl bg-gradient-hero border border-border p-6 shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold text-primary-dark mb-4",
								children: "Consumption trend (30 days)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								viewBox: "0 0 400 140",
								className: "w-full h-40",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
										id: "atf-g",
										x1: "0",
										x2: "0",
										y1: "0",
										y2: "1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "0%",
											stopColor: "#67B548",
											stopOpacity: "0.4"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "100%",
											stopColor: "#67B548",
											stopOpacity: "0"
										})]
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "M0 100 C 40 60, 80 80, 120 55 S 200 30, 240 60 S 320 90, 400 40 L 400 140 L 0 140 Z",
										fill: "url(#atf-g)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "M0 100 C 40 60, 80 80, 120 55 S 200 30, 240 60 S 320 90, 400 40",
										stroke: "#214C1F",
										strokeWidth: "2",
										fill: "none"
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-2xl bg-gradient-hero border border-border p-6 shadow-soft grid place-items-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative size-40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									viewBox: "0 0 100 100",
									className: "size-40 -rotate-90 animate-spin-slow",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "50",
										cy: "50",
										r: "42",
										stroke: "#EEF8E7",
										strokeWidth: "10",
										fill: "none"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "50",
										cy: "50",
										r: "42",
										stroke: "#67B548",
										strokeWidth: "10",
										fill: "none",
										strokeDasharray: "264",
										strokeDashoffset: "70",
										strokeLinecap: "round"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0 grid place-items-center text-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-3xl font-display font-bold text-primary-dark",
										children: "74%"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Tank Full"
									})] })
								})]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant hover:scale-[1.02] transition",
							children: ["Book a Demo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					})
				]
			})
		})
	] });
}
//#endregion
export { Page as component };
