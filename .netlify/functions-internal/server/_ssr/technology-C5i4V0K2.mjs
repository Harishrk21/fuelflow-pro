import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { $ as Cpu, B as History, G as Fuel, K as FileText, M as LockKeyhole, W as Gauge, _ as ShieldCheck, it as ChevronRight, k as MapPin, l as TrendingDown, rt as CircleCheck, s as Truck, t as Zap, w as Radio, x as Satellite } from "../_libs/lucide-react.mjs";
import { i as AnimatePresence, r as motion } from "../_libs/framer-motion.mjs";
import { r as PageHero, t as BrochureFigure } from "./PageParts-CLY-M-VH.mjs";
import { t as WhatsAppMarketingStrip } from "./WhatsAppMarketingStrip-e2rV0_Hn.mjs";
import { t as VehicleSpecs } from "./VehicleSpecs-DXdJ3lRT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/technology-C5i4V0K2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var technology_hero_updated_default = "/assets/technology-hero-updated-psBvF_6V.png";
var brochure_mobile_petrol_pump_default = "/assets/brochure-mobile-petrol-pump-DY8Xqe8c.png";
var techLayers = [
	{
		id: "gps",
		icon: MapPin,
		label: "GPS Tracking",
		headline: "See every tanker, live.",
		summary: "Real-time vehicle location from dispatch to your site — with ETA updates your team can act on.",
		points: [
			"Live tanker location on every active delivery",
			"ETA updates for site readiness",
			"Full route visibility for operations teams",
			"Reduces idle waiting at delivery points"
		],
		visual: "gps"
	},
	{
		id: "geofence",
		icon: Satellite,
		label: "Geo-Fencing",
		headline: "Fuel only where it should be.",
		summary: "A virtual boundary around your site. Dispensing unlocks only inside the approved zone — no manual override.",
		points: [
			"Delivery location is virtually geo-fenced",
			"Dispensing allowed only inside the zone",
			"No manual interference during fuel transfer",
			"Authorised deliveries at approved coordinates"
		],
		visual: "geofence"
	},
	{
		id: "iot",
		icon: Radio,
		label: "IoT Monitoring",
		headline: "Every litre, measured and logged.",
		summary: "Smart sensors and controllers record dispensing volume, timing, and status in real time.",
		points: [
			"Controller-driven mobile petrol pump",
			"Live telemetry on every delivery",
			"Accurate quantity measurement",
			"Digital logs for audit and reconciliation"
		],
		visual: "iot"
	},
	{
		id: "brake",
		icon: LockKeyhole,
		label: "Brake Interlock",
		headline: "Safety built into dispensing.",
		summary: "When the nozzle is lifted, vehicle brakes engage automatically — preventing movement during fuel transfer.",
		points: [
			"Reliable IoT brake interlocking system",
			"Brakes engage as soon as nozzle is lifted",
			"Prevents vehicle movement during dispensing",
			"Added security for on-site operations"
		],
		visual: "brake"
	},
	{
		id: "analytics",
		icon: Gauge,
		label: "Live Analytics",
		headline: "Data you can use, instantly.",
		summary: "Dashboards for consumption, fleet status, and delivery history — all in one place.",
		points: [
			"Real-time delivery and fleet dashboards",
			"Consumption trends over time",
			"Instant order and invoice history",
			"Supports procurement and finance reporting"
		],
		visual: "analytics"
	}
];
var deliverySteps = [
	{
		step: 1,
		icon: Fuel,
		title: "You place an order",
		short: "Order",
		desc: "Book diesel via the Call Diesel app or WhatsApp. Choose fuel type, quantity, and delivery location."
	},
	{
		step: 2,
		icon: Truck,
		title: "Tanker is dispatched",
		short: "Dispatch",
		desc: "A GPS-enabled tanker is assigned. You receive live tracking and ETA updates on your phone."
	},
	{
		step: 3,
		icon: Satellite,
		title: "Geo-fence activates",
		short: "Geo-Fence",
		desc: "When the tanker enters your approved delivery zone, the geo-fence unlocks dispensing permissions."
	},
	{
		step: 4,
		icon: LockKeyhole,
		title: "Secure dispensing",
		short: "Dispense",
		desc: "Brake interlock engages. IoT sensors measure every litre dispensed — safely and accurately."
	},
	{
		step: 5,
		icon: FileText,
		title: "Digital proof delivered",
		short: "Invoice",
		desc: "You get a digital invoice, quantity confirmation, and the order is saved to your history."
	}
];
var customerWins = [
	{
		icon: ShieldCheck,
		title: "Right quality & quantity",
		desc: "Authorized PSU fuel, measured by IoT sensors."
	},
	{
		icon: TrendingDown,
		title: "No spillages or pilferages",
		desc: "Geo-fenced, controlled dispensing at your site."
	},
	{
		icon: History,
		title: "Instant consumption history",
		desc: "Every order logged digitally for easy tracking."
	},
	{
		icon: Zap,
		title: "Big savings",
		desc: "5–10% savings through efficient fuel management."
	}
];
function BrakeInterlockDemo() {
	const [engaged, setEngaged] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative aspect-square max-w-sm mx-auto rounded-2xl bg-card border border-border p-6 flex flex-col items-center justify-center gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setEngaged((v) => !v),
				className: "text-xs font-semibold text-primary hover:underline",
				children: ["Tap to ", engaged ? "reset" : "lift nozzle"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `grid size-14 place-items-center rounded-2xl transition-colors ${engaged ? "bg-destructive/10 text-destructive" : "bg-accent text-primary-dark"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "size-7" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[10px] font-semibold text-muted-foreground",
							children: "Vehicle"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5 text-muted-foreground mb-6" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							animate: engaged ? { y: -8 } : { y: 0 },
							className: `grid size-14 place-items-center rounded-2xl transition-colors ${engaged ? "bg-primary text-white" : "bg-accent text-primary-dark"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fuel, { className: "size-7" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[10px] font-semibold text-muted-foreground",
							children: "Nozzle"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: {
					opacity: engaged ? 1 : .4,
					scale: engaged ? 1 : .95
				},
				className: `rounded-xl px-4 py-3 text-center text-sm font-semibold w-full ${engaged ? "bg-primary-dark text-white" : "bg-secondary text-primary-dark"}`,
				children: engaged ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockKeyhole, { className: "size-4" }), " Brakes engaged — safe to dispense"]
				}) : "Nozzle down — vehicle can move"
			})
		]
	});
}
function TechVisual({ type }) {
	if (type === "gps") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative aspect-square max-w-sm mx-auto rounded-2xl bg-primary-dark/5 border border-border overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,#67B54822,transparent_60%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				className: "absolute inset-0 w-full h-full opacity-20",
				viewBox: "0 0 200 200",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pattern", {
					id: "grid",
					width: "20",
					height: "20",
					patternUnits: "userSpaceOnUse",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M 20 0 L 0 0 0 20",
						fill: "none",
						stroke: "#214C1F",
						strokeWidth: "0.5"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "200",
					height: "200",
					fill: "url(#grid)"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: {
					x: [
						0,
						30,
						60,
						40,
						0
					],
					y: [
						0,
						20,
						10,
						40,
						0
					]
				},
				transition: {
					duration: 8,
					repeat: Infinity,
					ease: "easeInOut"
				},
				className: "absolute top-1/3 left-1/4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-10 rounded-full bg-primary/30 animate-ping absolute inset-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative grid size-10 place-items-center rounded-full bg-gradient-primary text-white shadow-elegant",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "size-5" })
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-4 left-4 right-4 rounded-xl bg-white/90 backdrop-blur px-3 py-2 border border-border text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold text-primary-dark",
					children: "Live GPS"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: "ETA: 12 min · En route"
				})]
			})
		]
	});
	if (type === "geofence") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative aspect-square max-w-sm mx-auto rounded-2xl bg-primary-dark/5 border border-border overflow-hidden flex items-center justify-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: {
					scale: [
						1,
						1.05,
						1
					],
					opacity: [
						.6,
						1,
						.6
					]
				},
				transition: {
					duration: 2.5,
					repeat: Infinity
				},
				className: "absolute size-48 rounded-full border-2 border-dashed border-primary"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: { scale: [
					1,
					1.08,
					1
				] },
				transition: {
					duration: 2.5,
					repeat: Infinity,
					delay: .3
				},
				className: "absolute size-36 rounded-full border border-primary/40 bg-primary/5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 grid size-12 place-items-center rounded-full bg-gradient-primary text-white shadow-elegant",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-6" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-4 right-4 rounded-lg bg-primary text-white text-[10px] font-bold px-2 py-1",
				children: "ZONE ACTIVE"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "absolute bottom-4 text-xs font-medium text-primary-dark bg-white/90 px-3 py-1.5 rounded-lg border border-border",
				children: "Dispensing unlocked inside fence"
			})
		]
	});
	if (type === "iot") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative aspect-square max-w-sm mx-auto rounded-2xl bg-primary-dark p-6 text-white overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-10 -right-10 size-32 rounded-full bg-primary/30 blur-2xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold text-white/60 uppercase tracking-wider",
				children: "IoT Controller"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 space-y-4",
				children: [
					{
						label: "Flow rate",
						value: "42 L/min",
						pct: 70
					},
					{
						label: "Volume dispensed",
						value: "312 L",
						pct: 62
					},
					{
						label: "Sensor status",
						value: "Active",
						pct: 100
					}
				].map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between text-xs mb-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-white/70",
						children: row.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold",
						children: row.value
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-2 rounded-full bg-white/10 overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: { width: 0 },
						animate: { width: `${row.pct}%` },
						transition: {
							duration: 1,
							delay: i * .2
						},
						className: "h-full bg-primary rounded-full"
					})
				})] }, row.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex items-center gap-2 text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radio, { className: "size-4 text-primary animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-white/80",
					children: "Live telemetry streaming"
				})]
			})
		]
	});
	if (type === "brake") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrakeInterlockDemo, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative aspect-square max-w-sm mx-auto rounded-2xl bg-gradient-hero border border-border p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold text-primary uppercase tracking-wider",
				children: "Dashboard"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid grid-cols-2 gap-3",
				children: [
					{
						label: "Deliveries today",
						val: "24"
					},
					{
						label: "Litres dispensed",
						val: "8,400"
					},
					{
						label: "Active fleet",
						val: "6"
					},
					{
						label: "Avg. ETA",
						val: "18m"
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-white border border-border p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg font-display font-bold text-primary-dark",
						children: s.val
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] text-muted-foreground",
						children: s.label
					})]
				}, s.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 h-16 rounded-xl bg-white border border-border flex items-end gap-1 px-3 pb-2",
				children: [
					40,
					65,
					45,
					80,
					55,
					90,
					70
				].map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { height: 0 },
					animate: { height: `${h}%` },
					transition: {
						delay: i * .08,
						duration: .5
					},
					className: "flex-1 bg-primary/70 rounded-t-sm"
				}, i))
			})
		]
	});
}
function TechExplorer() {
	const [active, setActive] = (0, import_react.useState)(0);
	const layer = techLayers[active];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-6 py-16 md:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-2xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-primary font-semibold text-sm tracking-wider uppercase",
						children: "Explore the stack"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-4xl md:text-5xl font-display font-bold text-primary-dark",
						children: "Five layers. One secure system."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-foreground/65",
						children: "Tap a technology layer below to see how it works and why it matters."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 flex flex-wrap justify-center gap-2",
				children: techLayers.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setActive(i),
					className: `inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${active === i ? "bg-gradient-primary text-primary-foreground shadow-soft" : "bg-card border border-border text-primary-dark hover:bg-accent/50"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, { className: "size-4" }), t.label]
				}, t.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "wait",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 16
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						y: -12
					},
					transition: { duration: .3 },
					className: "mt-10 grid lg:grid-cols-2 gap-8 md:gap-12 items-center rounded-3xl border border-border bg-card p-6 md:p-10 shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-primary text-sm font-semibold uppercase tracking-wider",
							children: layer.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 text-3xl md:text-4xl font-display font-bold text-primary-dark leading-tight",
							children: layer.headline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-foreground/70 leading-relaxed",
							children: layer.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 space-y-3",
							children: layer.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3 text-sm text-foreground/75",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-primary shrink-0 mt-0.5" }), p]
							}, p))
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechVisual, { type: layer.visual })]
				}, layer.id)
			})
		]
	});
}
function DeliveryFlow() {
	const [activeStep, setActiveStep] = (0, import_react.useState)(0);
	const step = deliverySteps[activeStep];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-6 py-16 md:py-24 bg-gradient-hero border-y border-border/60",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-2xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-primary font-semibold text-sm tracking-wider uppercase",
						children: "How it all connects"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-4xl md:text-5xl font-display font-bold text-primary-dark",
						children: "From order to invoice — step by step"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-foreground/65",
						children: "Click each step to follow the full technology journey."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 hidden md:flex items-center justify-between max-w-4xl mx-auto relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-5 left-8 right-8 h-0.5 bg-border" }), deliverySteps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setActiveStep(i),
					className: "relative z-10 flex flex-col items-center gap-2 group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `grid size-10 place-items-center rounded-full font-bold text-sm transition ${activeStep === i ? "bg-gradient-primary text-white shadow-elegant scale-110" : activeStep > i ? "bg-primary-dark text-white" : "bg-card border-2 border-border text-muted-foreground group-hover:border-primary"}`,
						children: activeStep > i ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-5" }) : s.step
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `text-xs font-semibold ${activeStep === i ? "text-primary-dark" : "text-muted-foreground"}`,
						children: s.short
					})]
				}, s.step))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 flex md:hidden gap-2 overflow-x-auto pb-2 scrollbar-hide",
				children: deliverySteps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setActiveStep(i),
					className: `shrink-0 rounded-xl px-4 py-2 text-sm font-semibold transition ${activeStep === i ? "bg-gradient-primary text-white" : "bg-card border border-border"}`,
					children: s.short
				}, s.step))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "wait",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						x: 20
					},
					animate: {
						opacity: 1,
						x: 0
					},
					exit: {
						opacity: 0,
						x: -20
					},
					transition: { duration: .25 },
					className: "mt-10 max-w-2xl mx-auto rounded-2xl bg-card border border-border p-6 md:p-8 shadow-elegant text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-grid size-14 place-items-center rounded-2xl bg-accent text-primary-dark mb-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(step.icon, { className: "size-7" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs font-bold text-primary uppercase tracking-wider",
							children: [
								"Step ",
								step.step,
								" of 5"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 text-2xl font-display font-bold text-primary-dark",
							children: step.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-foreground/70 leading-relaxed",
							children: step.desc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex justify-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								disabled: activeStep === 0,
								onClick: () => setActiveStep((s) => s - 1),
								className: "rounded-lg border border-border px-4 py-2 text-sm font-medium disabled:opacity-40 hover:bg-accent/50 transition",
								children: "Previous"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								disabled: activeStep === deliverySteps.length - 1,
								onClick: () => setActiveStep((s) => s + 1),
								className: "rounded-lg bg-gradient-primary text-white px-4 py-2 text-sm font-semibold disabled:opacity-40 hover:opacity-90 transition",
								children: "Next step"
							})]
						})
					]
				}, step.step)
			})
		]
	});
}
function MobilePumpBento() {
	const items = [
		{
			icon: Satellite,
			title: "Accurate GPS",
			desc: "Live tanker location from dispatch to your site with ETA updates.",
			color: "from-primary/15 to-primary/5"
		},
		{
			icon: MapPin,
			title: "Geo-Fencing",
			desc: "Fuel dispenses only inside your approved delivery zone.",
			color: "from-primary-dark/10 to-transparent"
		},
		{
			icon: Cpu,
			title: "IoT Controller",
			desc: "Controller-driven mobile petrol pump with live telemetry.",
			color: "from-accent to-secondary/50"
		},
		{
			icon: LockKeyhole,
			title: "Brake Interlock",
			desc: "Vehicle brakes engage automatically when the nozzle is lifted.",
			color: "from-primary/10 to-accent/30"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-6 py-16 md:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-2xl mx-auto mb-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-primary font-semibold text-sm tracking-wider uppercase",
					children: "Mobile petrol pump"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-4xl font-display font-bold text-primary-dark",
					children: "Important features of Call Diesel Mobile Petrol Pump"
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
					src: brochure_mobile_petrol_pump_default,
					alt: "Call Diesel mobile petrol pump with GPS, geo-fencing, IoT controller and brake interlock features"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-2 gap-8 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-foreground/70 leading-relaxed",
					children: "A PESO-approved mobile dispensing unit — not a basic tanker. GPS, geo-fencing, IoT controllers, and brake interlock work together as one secure system."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 rounded-2xl bg-primary-dark text-white p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold",
						children: "In simple terms:"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-white/80 leading-relaxed",
						children: "Fuel arrives at your site. Dispensing only happens in the right place, with the right safety checks, and every litre is recorded digitally."
					})]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-2 gap-4",
					children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 16
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { delay: i * .08 },
						className: `rounded-2xl bg-gradient-to-br ${item.color} border border-border p-5 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-7 text-primary mb-3" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display font-bold text-primary-dark",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-foreground/65 leading-relaxed",
								children: item.desc
							})
						]
					}, item.title))
				})]
			})
		]
	});
}
function CustomerBenefits() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-6 pb-20 md:pb-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-3xl bg-gradient-primary p-8 md:p-12 shadow-elegant text-primary-foreground relative overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_80%_20%,white,transparent_50%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-wider text-white/80",
						children: "What you get"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-3xl md:text-4xl font-display font-bold",
						children: "Diesel customers win on every delivery"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4",
						children: customerWins.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 12
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: { delay: i * .06 },
							className: "rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "size-6 mb-3" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-semibold text-sm",
									children: c.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs text-white/75 leading-relaxed",
									children: c.desc
								})
							]
						}, c.title))
					})
				]
			})]
		})
	});
}
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Technology",
			title: "Fuel logistics, engineered like software.",
			subtitle: "GPS tracking, geo-fencing, IoT controllers, and brake interlock — built into every Call Diesel delivery. Tap below to explore how it works.",
			subtitleClassName: "text-primary-dark/95 font-medium",
			backgroundImage: technology_hero_updated_default
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppMarketingStrip, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechExplorer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeliveryFlow, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobilePumpBento, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomerBenefits, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VehicleSpecs, {})
	] });
}
//#endregion
export { Page as component };
