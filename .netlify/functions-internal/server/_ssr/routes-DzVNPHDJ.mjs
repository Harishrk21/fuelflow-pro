import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as History, C as ReceiptText, D as PackageCheck, E as Package, F as Leaf, G as Fuel, H as HardHat, I as Landmark, J as Factory, K as FileText, M as LockKeyhole, N as LocateFixed, R as Hotel, U as GraduationCap, W as Gauge, _ as ShieldCheck, a as Wallet, ct as Building2, d as Star, et as Clock, f as Sparkles, h as Ship, ht as Activity, i as Warehouse, k as MapPin, l as TrendingDown, m as Signal, mt as ArrowRight, nt as CircleDollarSign, r as Wheat, rt as CircleCheck, s as Truck, st as Bus, t as Zap, u as Timer, v as ServerCog, w as Radio, y as Send, z as Hospital } from "../_libs/lucide-react.mjs";
import { r as motion, t as useInView } from "../_libs/framer-motion.mjs";
import { i as ScrollReveal, t as BrochureFigure } from "./PageParts-CLY-M-VH.mjs";
import { a as WhatsAppIcon, n as FUEL_PARTNERS, t as COMPANY } from "./WhatsAppIcon-CQzq3ziO.mjs";
import { t as TiltCard } from "./TiltCard-8L2X_g1c.mjs";
import { t as LicensesTrust } from "./LicensesTrust-B4XJObSM.mjs";
import { t as AppDownload } from "./AppDownload-C4UyAFh2.mjs";
import { t as calldiesel_logo_main_default } from "./calldiesel-logo-main-Db8QkPcY.mjs";
import { t as hero_illustration_default } from "./hero-illustration-Dz3OGZgu.mjs";
import { t as VehicleSpecs } from "./VehicleSpecs-DXdJ3lRT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DzVNPHDJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var brochure_fuel_procurement_system_default = "/assets/brochure-fuel-procurement-system-CE70hZm6.png";
function PartnerLogos({ compact = false, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: compact ? "" : "mx-auto max-w-7xl px-6 py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
				direction: "up",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-primary font-semibold text-sm tracking-wider uppercase",
						children: "Authorized Fuel Ent Partners"
					}), !compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl md:text-4xl font-display font-bold text-primary-dark",
						children: "Fuel from India's most trusted PSUs"
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5 ${compact ? "mt-6" : ""}`,
				children: FUEL_PARTNERS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollReveal, {
					index: i,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TiltCard, {
						className: "relative rounded-2xl bg-card border border-border p-4 md:p-8 shadow-soft hover:shadow-elegant overflow-hidden h-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-10 -right-10 size-28 rounded-full bg-primary/10 blur-2xl animate-orb" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex flex-col items-center text-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid size-16 md:size-24 place-items-center rounded-2xl bg-white border border-border shadow-soft p-2 md:p-3 animate-float-delayed",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.logo,
									alt: `${p.name} logo`,
									className: "max-h-10 md:max-h-16 max-w-full object-contain",
									loading: "lazy"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display font-bold text-primary-dark text-sm md:text-lg",
								children: p.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground mt-1",
								children: [p.short, " · Authorized Partner"]
							})] })]
						})]
					})
				}, p.id))
			})]
		})
	});
}
function Counter({ end, suffix = "", duration = 2 }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-50px"
	});
	const [n, setN] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		const start = performance.now();
		let raf = 0;
		const tick = (t) => {
			const p = Math.min((t - start) / (duration * 1e3), 1);
			setN(Math.floor(end * (1 - Math.pow(1 - p, 3))));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [
		inView,
		end,
		duration
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [n.toLocaleString(), suffix]
	});
}
var fadeUp = {
	hidden: {
		opacity: 0,
		y: 30
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .6,
			ease: [
				.22,
				1,
				.36,
				1
			]
		}
	}
};
function Section({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: `mx-auto max-w-7xl px-6 py-20 md:py-28 ${className}`,
		children
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-hero" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-mesh" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 -top-24 h-[500px] bg-[radial-gradient(60%_60%_at_50%_0%,color-mix(in_oklab,#67B548_18%,transparent)_0%,transparent_70%)] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-6 pt-16 pb-24 md:pt-24 md:pb-32 grid lg:grid-cols-12 gap-12 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: "hidden",
					animate: "show",
					variants: fadeUp,
					className: "lg:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-primary-dark shadow-soft",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5 text-primary" }),
								COMPANY.tagline,
								"® · Doorstep Diesel Delivery"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: calldiesel_logo_main_default,
							alt: "Call Diesel logo",
							className: "mt-5 h-16 md:h-20 w-auto object-contain"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-3 text-5xl md:text-7xl font-display font-bold leading-[1.05] text-primary-dark",
							children: [
								"The Future of",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative inline-block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "bg-gradient-primary bg-clip-text text-transparent",
										children: "Fuel Distribution"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										className: "absolute -bottom-2 left-0 w-full",
										viewBox: "0 0 200 10",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M0 5 Q 100 -5 200 5",
											stroke: "#67B548",
											strokeWidth: "2",
											fill: "none",
											strokeLinecap: "round"
										})
									})]
								}),
								" ",
								"is Here!"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-lg text-foreground/70 max-w-xl leading-relaxed",
							children: "Order on app or WhatsApp. Authorized HP · IOCL · BPCL fuel — live-tracked, IoT-secured, and delivered to your doorstep."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/mobile-app",
								className: "inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant hover:scale-[1.02] transition shine-on-hover",
								children: ["Order on App ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: COMPANY.whatsappUrl,
								className: "inline-flex items-center gap-2 rounded-xl bg-card border border-border px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-accent/40 transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-4" }), " Order on WhatsApp"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-foreground/70",
							children: [
								"Authorized HP · IOCL · BPCL",
								"GPS Enabled",
								"IoT Enabled",
								"Geo-Fenced Delivery",
								"PESO Approved"
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5 text-primary" }),
									" ",
									t
								]
							}, t))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						scale: .9,
						rotateY: 12
					},
					animate: {
						opacity: 1,
						scale: 1,
						rotateY: 0
					},
					transition: {
						duration: .8,
						delay: .2
					},
					className: "lg:col-span-5 relative scene-3d",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-6 rounded-full bg-primary/15 blur-3xl animate-orb" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative aspect-square animate-float",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: hero_illustration_default,
								alt: "Fuel delivery truck with WhatsApp ordering and GPS tracking",
								width: 1200,
								height: 1200,
								className: "w-full h-full object-contain drop-shadow-2xl"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								x: -20
							},
							animate: {
								opacity: 1,
								x: 0
							},
							transition: { delay: .6 },
							className: "absolute top-6 -left-2 glass rounded-2xl px-4 py-3 shadow-elegant flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] uppercase tracking-wider text-muted-foreground",
								children: "Live tracking"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold text-primary-dark",
								children: "ETA 12 min"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								x: 20
							},
							animate: {
								opacity: 1,
								x: 0
							},
							transition: { delay: .9 },
							className: "absolute bottom-10 -right-2 glass rounded-2xl px-4 py-3 shadow-elegant flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radio, { className: "size-5 text-primary animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] uppercase tracking-wider text-muted-foreground",
								children: "IoT sensor"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold text-primary-dark",
								children: "Secure dispensing"
							})] })]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative border-t border-border/60 bg-white/40 backdrop-blur",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-6 py-6 overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-14 animate-marquee whitespace-nowrap text-primary-dark/60 font-display font-semibold text-lg",
						children: [...Array(2)].flatMap((_, k) => [
							"L&T Construction",
							"Ashok Leyland",
							"TATA Projects",
							"Mahindra Logistics",
							"Reliance Infra",
							"JSW Steel",
							"Adani Ports",
							"Ultratech Cement"
						].map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "opacity-70",
							children: ["◆ ", n]
						}, `${k}-${i}`)))
					})
				})
			})
		]
	});
}
function Stats() {
	const stats = [
		{
			end: 1e4,
			suffix: "+",
			label: "Successful Deliveries"
		},
		{
			end: 500,
			suffix: "+",
			label: "Business Customers"
		},
		{
			end: 24,
			suffix: "/7",
			label: "Support"
		},
		{
			end: 99.9,
			suffix: "%",
			label: "Safe Delivery"
		},
		{
			end: 100,
			suffix: "%",
			label: "Authorized Fuel"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		className: "!py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-3xl bg-primary-dark p-8 md:p-12 shadow-elegant relative overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-20 -right-20 size-64 rounded-full bg-primary/20 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-8",
				children: stats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `text-center ${i === stats.length - 1 ? "col-span-2 sm:col-span-1" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white leading-none",
						children: s.end === 24 ? "24/7" : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { end: Math.floor(s.end) }), s.suffix] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs sm:text-sm text-white/70",
						children: s.label
					})]
				}, s.label))
			})]
		})
	});
}
function About() {
	const features = [
		{
			icon: Truck,
			t: "Doorstep Delivery"
		},
		{
			icon: Fuel,
			t: "Industrial Oil Supply"
		},
		{
			icon: Gauge,
			t: "Fuel Management"
		},
		{
			icon: Package,
			t: "Fleet Fuel Solutions"
		},
		{
			icon: Clock,
			t: "Scheduled Deliveries"
		},
		{
			icon: MapPin,
			t: "Live GPS Tracking"
		},
		{
			icon: Radio,
			t: "Smart IoT Monitoring"
		},
		{
			icon: ShieldCheck,
			t: "Secure & Authorized"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid lg:grid-cols-2 gap-14 items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: "hidden",
			whileInView: "show",
			viewport: { once: true },
			variants: fadeUp,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-primary font-semibold text-sm tracking-wider uppercase",
					children: "About Call Diesel"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-4xl md:text-5xl font-display font-bold text-primary-dark leading-tight",
					children: "A smart digital fuel platform — not just another supplier."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-foreground/70 leading-relaxed",
					children: "Call Diesel is a technology-driven fuel distribution platform serving enterprises, fleets, factories and construction sites. From WhatsApp ordering to IoT-secured dispensing, every step is measurable, trackable and safe."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/technology",
					className: "mt-6 inline-flex items-center gap-1 text-primary-dark font-semibold hover:gap-2 transition-all",
					children: ["Explore our technology ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-4",
			children: features.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: { delay: i * .05 },
				className: "rounded-2xl bg-card border border-border p-5 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid size-10 place-items-center rounded-xl bg-accent text-primary-dark",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-semibold text-primary-dark text-sm",
					children: f.t
				})]
			}, f.t))
		})]
	}) });
}
function ProblemSolution() {
	const problems = [
		{
			icon: TrendingDown,
			t: "Dead Mileage"
		},
		{
			icon: Fuel,
			t: "Fuel Spillages"
		},
		{
			icon: LockKeyhole,
			t: "Pilferages"
		},
		{
			icon: Timer,
			t: "Man-hour Loss"
		},
		{
			icon: Clock,
			t: "Time Loss"
		},
		{
			icon: Leaf,
			t: "Carbon Emissions"
		},
		{
			icon: Activity,
			t: "Unorganized Tracking"
		},
		{
			icon: FileText,
			t: "Manual Operations"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center max-w-2xl mx-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-primary font-semibold text-sm tracking-wider uppercase",
					children: "Problem & Solution"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-4xl md:text-5xl font-display font-bold text-primary-dark",
					children: "Fuel procurement is broken. We fixed it."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-foreground/65",
					children: "The traditional pump-to-site model creates loss at every step."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 24
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: { once: true },
			className: "mt-12 rounded-3xl border border-border bg-card p-3 md:p-4 shadow-soft overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrochureFigure, {
				src: brochure_fuel_procurement_system_default,
				alt: "Traditional fuel procurement flow showing pilferage, spillage, time loss, storage issues, quality problems and dead mileage"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-center text-sm text-foreground/60 max-w-3xl mx-auto",
				children: "From petrol pump to your site — pilferage, spillage, wasted time, storage burden, quality gaps, and dead mileage add up. Call Diesel replaces this with doorstep delivery."
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4",
			children: problems.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: { delay: i * .04 },
				className: "glass rounded-2xl p-4 md:p-5 shadow-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid size-11 place-items-center rounded-xl bg-destructive/10 text-destructive",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-semibold text-primary-dark",
					children: p.t
				})]
			}, p.t))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-16 rounded-3xl bg-gradient-primary p-8 md:p-12 shadow-elegant text-primary-foreground relative overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-3xl md:text-4xl font-display font-bold",
						children: "Our Solution"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-white/80",
						children: "A complete digital fuel operating system."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3",
						children: [
							"Doorstep Delivery",
							"Live Tracking",
							"Secure Fuel Dispensing",
							"Scheduled Deliveries",
							"WhatsApp Ordering",
							"Fuel Analytics",
							"Consumption History",
							"IoT Security",
							"Geo-Fenced Operations"
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 rounded-xl bg-white/10 backdrop-blur px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium",
								children: s
							})]
						}, s))
					})
				]
			})]
		})
	] });
}
function HowItWorks() {
	const steps = [
		{
			icon: WhatsAppIcon,
			t: "Book on App / WhatsApp"
		},
		{
			icon: Fuel,
			t: "Choose Fuel Type"
		},
		{
			icon: Package,
			t: "Select Quantity"
		},
		{
			icon: MapPin,
			t: "Delivery Location"
		},
		{
			icon: Truck,
			t: "Track Live"
		},
		{
			icon: ShieldCheck,
			t: "Secure Delivery"
		},
		{
			icon: FileText,
			t: "Digital Invoice"
		},
		{
			icon: History,
			t: "History Saved"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-center max-w-2xl mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-primary font-semibold text-sm tracking-wider uppercase",
				children: "How it works"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-4xl md:text-5xl font-display font-bold text-primary-dark",
				children: "Fuel in 8 simple steps."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm md:text-base text-foreground/65",
				children: "A guided, trackable flow from booking to digital proof of delivery."
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-12 rounded-3xl border border-border bg-card/70 p-4 sm:p-6 md:p-8 shadow-soft relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-1/2 hidden lg:block h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 relative",
			children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: { delay: i * .05 },
				className: "group relative rounded-2xl border border-border/80 bg-background/80 p-4 md:p-5 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-11 place-items-center rounded-xl bg-accent text-primary-dark group-hover:bg-gradient-primary group-hover:text-primary-foreground transition",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex items-center justify-center min-w-8 h-8 px-2 rounded-full bg-primary-dark text-primary-foreground text-xs font-bold",
							children: String(i + 1).padStart(2, "0")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-semibold text-primary-dark text-sm md:text-base leading-snug",
						children: s.t
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 h-1.5 rounded-full bg-secondary overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full bg-gradient-primary rounded-full",
							style: { width: `${(i + 1) / steps.length * 100}%` }
						})
					})
				]
			}, s.t))
		})]
	})] });
}
function WhatsAppDemo() {
	const chatRef = (0, import_react.useRef)(null);
	const messagesRef = (0, import_react.useRef)(null);
	const inView = useInView(chatRef, { amount: .45 });
	const flow = [
		{
			from: "bot",
			text: "Hi! Welcome to Call Diesel 👋"
		},
		{
			from: "bot",
			text: "Please share your delivery address."
		},
		{
			from: "user",
			text: "No 726 Anna Salai, Nandanam, Chennai"
		},
		{
			from: "bot",
			text: "Great. Please share your live location 📍"
		},
		{
			from: "user",
			text: "Location shared"
		},
		{
			from: "bot",
			text: "Select products: Diesel + Add-ons (Engine Oil)."
		},
		{
			from: "bot",
			text: "Booking confirmed ✅ Invoice shared. Track live in WhatsApp."
		}
	];
	const statusUpdates = [
		{
			icon: Send,
			title: "Order Started",
			desc: "Your order has been started and assigned to a vehicle."
		},
		{
			icon: Truck,
			title: "On The Way",
			desc: "Your fuel truck is on the way with live ETA updates."
		},
		{
			icon: PackageCheck,
			title: "Delivered",
			desc: "Order delivered successfully with quantity & invoice proof."
		}
	];
	const [visibleCount, setVisibleCount] = (0, import_react.useState)(0);
	const [typingSender, setTypingSender] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		let cancelled = false;
		const timers = [];
		const total = flow.length;
		const runLoop = () => {
			if (cancelled) return;
			setVisibleCount(0);
			setTypingSender(null);
			const run = (idx) => {
				if (cancelled) return;
				if (idx >= total) {
					timers.push(window.setTimeout(runLoop, 1800));
					return;
				}
				const sender = flow[idx].from;
				setTypingSender(sender);
				timers.push(window.setTimeout(() => {
					if (cancelled) return;
					setVisibleCount(idx + 1);
					setTypingSender(null);
					run(idx + 1);
				}, sender === "bot" ? 900 : 650));
			};
			timers.push(window.setTimeout(() => run(0), 280));
		};
		runLoop();
		return () => {
			cancelled = true;
			timers.forEach((t) => clearTimeout(t));
		};
	}, [inView]);
	(0, import_react.useEffect)(() => {
		const el = messagesRef.current;
		if (!el) return;
		el.scrollTo({
			top: el.scrollHeight,
			behavior: "smooth"
		});
	}, [visibleCount, typingSender]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		className: "!pt-10 md:!pt-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-3xl bg-card border border-border p-6 md:p-10 shadow-elegant relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-24 -left-24 size-72 rounded-full bg-primary/15 blur-3xl animate-orb" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-28 -right-20 size-72 rounded-full bg-primary-dark/10 blur-3xl animate-orb-delayed" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative grid lg:grid-cols-2 gap-12 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-primary font-semibold text-sm tracking-wider uppercase",
							children: "WhatsApp Automation · 24×7"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-4xl md:text-5xl font-display font-bold text-primary-dark leading-tight",
							children: "Order fuel on WhatsApp in under 60 seconds."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-foreground/70 leading-relaxed",
							children: "Customers just say “Hi”. Our automated flow collects address and location, offers diesel + add-ons like engine oil, sends instant order summary, supports Pay Now / COD, confirms booking, and keeps sending live updates until delivery — fully automated 24/7."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-7 grid sm:grid-cols-2 gap-3",
							children: [
								"Address + location capture",
								"Diesel + engine oil add-ons",
								"Instant order summary",
								"Pay Now / COD options",
								"Automated booking confirmation",
								"Live order status updates"
							].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 rounded-xl bg-secondary/60 px-3 py-2 text-sm text-primary-dark",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-primary shrink-0" }),
									" ",
									x
								]
							}, x))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: COMPANY.whatsappUrl,
							className: "mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant hover:scale-[1.02] transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, {
								variant: "light",
								className: "size-4"
							}), " Start on WhatsApp"]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						ref: chatRef,
						initial: {
							opacity: 0,
							y: 24
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto w-full max-w-[280px] sm:max-w-[320px] rounded-[2.35rem] bg-primary-dark p-2.5 shadow-elegant animate-depth-pulse",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex h-[520px] sm:h-[560px] flex-col rounded-[2rem] overflow-hidden bg-[#E5DDD5] border border-white/30",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "shrink-0 bg-[#075E54] text-white px-4 py-3 flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: calldiesel_logo_main_default,
											alt: "Call Diesel",
											className: "h-8 w-auto object-contain mix-blend-screen"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-semibold",
											children: "Call Diesel Assistant"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-white/70",
											children: "automated • 24/7"
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										ref: messagesRef,
										className: "flex-1 overflow-y-auto overscroll-contain p-4 space-y-2",
										children: [
											flow.slice(0, visibleCount).map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
												initial: {
													opacity: 0,
													x: m.from === "user" ? 20 : -20,
													y: 8
												},
												animate: {
													opacity: 1,
													x: 0,
													y: 0
												},
												transition: { duration: .28 },
												className: `max-w-[88%] rounded-xl px-3 py-2 text-sm shadow-sm ${m.from === "user" ? "ml-auto bg-[#DCF8C6] text-[#1f2937]" : "bg-white text-[#1f2937]"}`,
												children: m.text
											}, i)),
											typingSender && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
												initial: {
													opacity: 0,
													y: 6
												},
												animate: {
													opacity: 1,
													y: 0
												},
												className: `max-w-[45%] rounded-xl px-3 py-2 shadow-sm ${typingSender === "user" ? "ml-auto bg-[#DCF8C6]" : "bg-white"}`,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-1.5",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-foreground/35 animate-bounce [animation-delay:-0.2s]" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-foreground/35 animate-bounce [animation-delay:-0.1s]" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-foreground/35 animate-bounce" })
													]
												})
											}),
											visibleCount >= flow.length && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
												initial: {
													opacity: 0,
													y: 12
												},
												animate: {
													opacity: 1,
													y: 0
												},
												transition: { duration: .35 },
												className: "rounded-xl bg-white p-3 border border-border",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs font-semibold text-primary-dark",
														children: "Order Summary"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "mt-2 space-y-1 text-[11px] text-foreground/70",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																className: "flex items-center justify-between",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																	className: "inline-flex items-center gap-1",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fuel, { className: "size-3.5" }), " Diesel"]
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "500 L" })]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																className: "flex items-center justify-between",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																	className: "inline-flex items-center gap-1",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReceiptText, { className: "size-3.5" }), " Engine Oil Add-on"]
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "2 Cans" })]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																className: "flex items-center justify-between",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "font-semibold text-primary-dark",
																	children: "₹41,950"
																})]
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "mt-3 grid grid-cols-2 gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
															className: "rounded-lg bg-primary text-white text-[11px] py-1.5 font-semibold inline-flex items-center justify-center gap-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleDollarSign, { className: "size-3.5" }), " Pay Now"]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
															className: "rounded-lg bg-secondary text-primary-dark text-[11px] py-1.5 font-semibold inline-flex items-center justify-center gap-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5" }), " COD"]
														})]
													})
												]
											})
										]
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 grid sm:grid-cols-3 gap-3",
								children: statusUpdates.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: 0,
										y: 12
									},
									whileInView: {
										opacity: 1,
										y: 0
									},
									viewport: { once: true },
									transition: { delay: .1 + i * .12 },
									className: "rounded-xl bg-card border border-border px-3 py-3 shadow-soft",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "inline-flex items-center gap-1 text-xs font-semibold text-primary-dark",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "size-3.5 text-primary" }),
											" ",
											s.title
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-[11px] text-foreground/60 leading-relaxed",
										children: s.desc
									})]
								}, s.title))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold text-primary-dark",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocateFixed, { className: "size-3.5 text-primary animate-pulse" }), "Automated WhatsApp order updates · 24×7"]
							})
						]
					})]
				})
			]
		})
	});
}
function ServicesPreview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-end justify-between flex-wrap gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-primary font-semibold text-sm tracking-wider uppercase",
			children: "Services"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-3 text-4xl md:text-5xl font-display font-bold text-primary-dark",
			children: "Every fuel need. One platform."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/services",
			className: "text-primary-dark font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all",
			children: ["View all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-10 grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5",
		children: [
			{
				icon: Truck,
				t: "Doorstep Diesel",
				d: "Fast, secure diesel delivery to your site."
			},
			{
				icon: Fuel,
				t: "Industrial Oils",
				d: "High-grade industrial oils & lubricants."
			},
			{
				icon: Gauge,
				t: "Fleet Fuel Mgmt",
				d: "End-to-end fuel management for fleets."
			},
			{
				icon: HardHat,
				t: "Construction Supply",
				d: "Reliable supply for construction projects."
			},
			{
				icon: Zap,
				t: "Generator Fuel",
				d: "24/7 diesel for gensets & backup."
			},
			{
				icon: Package,
				t: "Bulk Delivery",
				d: "Large-scale commercial fuel delivery."
			},
			{
				icon: Clock,
				t: "Scheduled Delivery",
				d: "Recurring automatic top-ups."
			},
			{
				icon: Radio,
				t: "Emergency Fuel",
				d: "Rapid-response emergency service."
			},
			{
				icon: WhatsAppIcon,
				t: "WhatsApp Booking",
				d: "Order in seconds via WhatsApp."
			}
		].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 20
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: { once: true },
			transition: { delay: i * .05 },
			className: "group rounded-2xl bg-card border border-border p-4 md:p-6 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid size-12 place-items-center rounded-xl bg-accent text-primary-dark group-hover:bg-gradient-primary group-hover:text-primary-foreground transition",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "size-6" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-5 text-lg font-display font-bold text-primary-dark",
					children: s.t
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-foreground/60",
					children: s.d
				})
			]
		}, s.t))
	})] });
}
function Industries() {
	const highlighted = [
		{
			i: HardHat,
			t: "Construction"
		},
		{
			i: Factory,
			t: "Mining"
		},
		{
			i: Factory,
			t: "Factories"
		},
		{
			i: Hospital,
			t: "Hospitals"
		},
		{
			i: Warehouse,
			t: "Warehouses"
		},
		{
			i: Ship,
			t: "Ports"
		},
		{
			i: Ship,
			t: "Shipping"
		},
		{
			i: Wheat,
			t: "Agriculture"
		},
		{
			i: Building2,
			t: "Infrastructure"
		},
		{
			i: Signal,
			t: "Telecom"
		},
		{
			i: ServerCog,
			t: "Data Centers"
		},
		{
			i: Hotel,
			t: "Hotels"
		},
		{
			i: GraduationCap,
			t: "Education"
		},
		{
			i: Landmark,
			t: "Government"
		},
		{
			i: Bus,
			t: "Transport"
		}
	].slice(0, 8);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center max-w-2xl mx-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-primary font-semibold text-sm tracking-wider uppercase",
					children: "Industries"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-4xl md:text-5xl font-display font-bold text-primary-dark",
					children: "Trusted across sectors."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-foreground/65",
					children: "We serve multiple sectors. Here are the most active ones."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4",
			children: highlighted.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "group rounded-2xl bg-card border border-border p-6 text-center hover:bg-gradient-primary hover:text-primary-foreground transition shadow-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(x.i, { className: "size-7 mx-auto text-primary group-hover:text-primary-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-semibold text-sm",
					children: x.t
				})]
			}, x.t))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/industries",
				className: "inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary-dark hover:bg-accent/50 transition",
				children: ["View all industries ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
			})
		})
	] });
}
function WhyUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-3xl bg-card border border-border p-8 md:p-14 shadow-soft",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid lg:grid-cols-2 gap-10 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-primary font-semibold text-sm tracking-wider uppercase",
					children: "Why choose us"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-4xl md:text-5xl font-display font-bold text-primary-dark leading-tight",
					children: "Enterprise-grade fuel logistics, done right."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-foreground/70",
					children: "Built for scale, engineered for safety, priced for savings. From a single generator to a 500-vehicle fleet, Call Diesel adapts."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-primary-dark",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "size-4" }), " 5–10% Savings on Diesel Bills"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-primary-dark",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "size-4" }), " Reduce CO₂ emissions"]
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-3",
				children: [
					"GPS Enabled",
					"Geo Fencing",
					"IoT Technology",
					"Doorstep Delivery",
					"WhatsApp Ordering",
					"Mobile App",
					"Safe Fuel",
					"Digital History",
					"Cost Savings",
					"24×7 Support",
					"Trusted Supply",
					"Enterprise Ready"
				].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 rounded-xl bg-secondary/60 px-4 py-3 text-sm font-medium text-primary-dark",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-primary shrink-0" }),
						" ",
						r
					]
				}, r))
			})]
		})
	}) });
}
function Testimonials() {
	const t = [
		{
			name: "Ravi Kumar",
			role: "Ops Head, L&T Site",
			quote: "Call Diesel cut our fuel downtime to zero. The WhatsApp ordering is a game-changer."
		},
		{
			name: "Priya Menon",
			role: "Fleet Manager, Blue Dart",
			quote: "Live tracking and digital invoices finally gave us fuel visibility across 200 vehicles."
		},
		{
			name: "Ajay Sharma",
			role: "Facilities, DataCentric",
			quote: "24×7 generator fuel with IoT dispensing. Peace of mind for our data centre."
		}
	];
	const marqueeItems = [...t, ...t];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-center max-w-2xl mx-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-primary font-semibold text-sm tracking-wider uppercase",
			children: "Testimonials"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-3 text-4xl md:text-5xl font-display font-bold text-primary-dark",
			children: "Loved by operations teams."
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-12 overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex w-max gap-4 md:gap-6 animate-marquee",
			children: marqueeItems.map((x, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-[280px] sm:w-[320px] rounded-2xl bg-card border border-border p-5 md:p-6 shadow-soft",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-0.5",
						children: Array.from({ length: 5 }).map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 fill-primary text-primary" }, k))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-foreground/80 leading-relaxed text-sm md:text-base",
						children: [
							"\"",
							x.quote,
							"\""
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "size-10 rounded-full bg-gradient-primary grid place-items-center text-primary-foreground font-bold",
							children: x.name[0]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold text-primary-dark text-sm",
							children: x.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: x.role
						})] })]
					})
				]
			}, `${x.name}-${i}`))
		})
	})] });
}
function CTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden rounded-3xl bg-gradient-primary p-10 md:p-16 shadow-elegant text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-24 -left-24 size-72 rounded-full bg-white/15 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-24 -right-24 size-72 rounded-full bg-primary-dark/40 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-4xl md:text-6xl font-display font-bold text-primary-foreground max-w-3xl mx-auto leading-tight",
						children: "Ready to modernise your fuel operations?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-primary-foreground/80 max-w-xl mx-auto",
						children: "Talk to our team. Get a demo, a pilot, and a quote — all in 24 hours."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3 justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "inline-flex items-center gap-2 rounded-xl bg-white text-primary-dark px-6 py-3.5 text-sm font-semibold hover:scale-[1.02] transition",
							children: ["Get a Quote ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: COMPANY.whatsappUrl,
							className: "inline-flex items-center gap-2 rounded-xl bg-primary-dark text-white px-6 py-3.5 text-sm font-semibold hover:scale-[1.02] transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, {
								variant: "light",
								className: "size-4"
							}), " WhatsApp Us"]
						})]
					})
				]
			})
		]
	}) });
}
function WhyDoorstep() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-center max-w-2xl mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-primary font-semibold text-sm tracking-wider uppercase",
				children: "Why choose doorstep diesel"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-4xl md:text-5xl font-display font-bold text-primary-dark",
				children: "An innovation in your service"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-foreground/70",
				children: "Diesel procurement is a matter of just a click on your Call Diesel App."
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5",
		children: [
			{
				t: "Hassle-free Fuel Procurement",
				d: "Order diesel with a click — no pump queues or barrel logistics."
			},
			{
				t: "No Wastages of Fuel",
				d: "Eliminate spillages, pilferages and dead mileage from your process."
			},
			{
				t: "Safe and Reliable Operations",
				d: "IoT brake interlock, geo-fenced dispensing and PESO-ready fleet."
			},
			{
				t: "5–10% Savings on Diesel Bills",
				d: "Right quality, right quantity and measurable consumption savings."
			}
		].map((x, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 20,
				rotateX: -6
			},
			whileInView: {
				opacity: 1,
				y: 0,
				rotateX: 0
			},
			viewport: { once: true },
			transition: { delay: i * .08 },
			className: "rounded-2xl bg-card border border-border p-6 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition shine-on-hover",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "size-10 rounded-xl bg-gradient-primary text-primary-foreground grid place-items-center font-bold mb-4",
					children: i + 1
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display font-bold text-primary-dark",
					children: x.t
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-foreground/60 leading-relaxed",
					children: x.d
				})
			]
		}, x.t))
	})] });
}
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PartnerLogos, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppDemo, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProblemSolution, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyDoorstep, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesPreview, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VehicleSpecs, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Industries, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyUs, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LicensesTrust, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppDownload, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {})
	] });
}
//#endregion
export { HomePage as component };
