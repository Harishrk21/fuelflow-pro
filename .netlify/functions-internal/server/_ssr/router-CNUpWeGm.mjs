import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { L as Instagram, O as Menu, P as Linkedin, Y as Facebook, n as X, o as Twitter } from "../_libs/lucide-react.mjs";
import { a as WhatsAppIcon, n as FUEL_PARTNERS, t as COMPANY } from "./WhatsAppIcon-CQzq3ziO.mjs";
import { t as calldiesel_logo_main_default } from "./calldiesel-logo-main-Db8QkPcY.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CNUpWeGm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-T8Coosc6.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var links = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/technology",
		label: "Technology"
	},
	{
		to: "/mobile-app",
		label: "Mobile App"
	},
	{
		to: "/atf",
		label: "ATF"
	},
	{
		to: "/industries",
		label: "Industries"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all ${scrolled ? "glass shadow-soft" : "bg-transparent"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-2.5 min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/favicon.png",
							alt: "",
							"aria-hidden": true,
							className: "size-10 sm:size-12 shrink-0 rounded-lg object-contain"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "block font-display font-bold text-base sm:text-lg text-primary-dark tracking-tight",
								children: ["Call", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "Diesel"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:block text-[10px] font-medium text-muted-foreground tracking-wide truncate",
								children: COMPANY.tagline
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden lg:flex items-center gap-1",
						children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.to,
							className: "px-3.5 py-2 rounded-lg text-sm font-medium text-foreground/70 hover:text-primary-dark hover:bg-accent/40 transition",
							activeProps: { className: "text-primary-dark bg-accent/60" },
							children: l.label
						}, l.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden lg:flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: COMPANY.whatsappUrl,
							className: "inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 px-4 py-2 text-sm font-medium hover:bg-card transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-4" }), "WhatsApp"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "inline-flex items-center rounded-xl bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-elegant transition shine-on-hover",
							children: "Order Now"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "lg:hidden grid place-items-center size-10 rounded-xl bg-card border border-border",
						onClick: () => setOpen((s) => !s),
						"aria-label": "Toggle menu",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					})
				]
			}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:hidden mt-2 glass rounded-2xl p-4 shadow-elegant animate-fade-in",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex flex-col gap-1",
					children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						onClick: () => setOpen(false),
						className: "px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-accent/60",
						children: l.label
					}, l.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						onClick: () => setOpen(false),
						className: "mt-2 text-center rounded-xl bg-gradient-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground",
						children: "Order Now"
					})]
				})
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-24 bg-primary-dark text-white/80",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: calldiesel_logo_main_default,
							alt: "Call Diesel logo",
							className: "h-14 w-auto object-contain"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs text-primary font-medium",
							children: [COMPANY.tagline, "®"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm leading-relaxed text-white/60",
							children: [
								"Doorstep diesel delivery with live GPS, IoT security and authorised PSU fuel — powered by ",
								COMPANY.legalName,
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 flex flex-wrap gap-3 items-center",
							children: FUEL_PARTNERS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid size-11 place-items-center rounded-lg bg-white p-1.5",
								title: p.name,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.logo,
									alt: p.name,
									className: "max-h-8 max-w-full object-contain"
								})
							}, p.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex gap-3",
							children: [
								Instagram,
								Linkedin,
								Twitter,
								Facebook
							].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "grid size-9 place-items-center rounded-lg bg-white/10 hover:bg-primary transition",
								"aria-label": "social",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
							}, i))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-white font-semibold mb-4",
					children: "Products"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services",
							className: "hover:text-primary",
							children: "Diesel Delivery"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services",
							className: "hover:text-primary",
							children: "Industrial Oils"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services",
							className: "hover:text-primary",
							children: "Lubricants"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/atf",
							className: "hover:text-primary",
							children: "Any Time Fuel"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-white font-semibold mb-4",
					children: "Company"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/technology",
							className: "hover:text-primary",
							children: "Technology"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/industries",
							className: "hover:text-primary",
							children: "Industries"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/mobile-app",
							className: "hover:text-primary",
							children: "Mobile App"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "hover:text-primary",
							children: "Contact"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-white font-semibold mb-4",
					children: "Get in Touch"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-2 text-sm text-white/60",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "font-medium text-white/80",
							children: COMPANY.legalName
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: COMPANY.address }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${COMPANY.phoneTel}`,
							className: "hover:text-primary",
							children: ["Call Us at ", COMPANY.phoneDisplay]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${COMPANY.email}`,
							className: "hover:text-primary",
							children: COMPANY.email
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: COMPANY.website,
							className: "hover:text-primary",
							target: "_blank",
							rel: "noreferrer",
							children: COMPANY.domain
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "24×7 Support" })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between text-xs text-white/50 gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					COMPANY.legalName,
					". ",
					COMPANY.brand,
					" — All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "hover:text-primary",
						children: "Privacy Policy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "hover:text-primary",
						children: "Terms of Service"
					})]
				})]
			})
		})]
	});
}
function WhatsAppFab() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: COMPANY.whatsappUrl,
		target: "_blank",
		rel: "noreferrer",
		"aria-label": "Chat on WhatsApp",
		className: "fixed bottom-6 right-6 z-50 group",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full bg-primary/40 animate-pulse-ring" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "relative grid size-14 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-elegant group-hover:scale-105 transition",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, {
				variant: "light",
				className: "size-6"
			})
		})]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh items-center justify-center bg-gradient-hero px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-8xl font-display font-bold text-primary-dark",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground",
					children: "This page couldn't be found."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mt-6 inline-flex rounded-xl bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground",
					children: "Back home"
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold",
					children: "Something went wrong"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Please try again."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex justify-center gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-xl bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground",
						children: "Try again"
					})
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Call Diesel — Highest Grade Fuel Delivery" },
			{
				name: "description",
				content: "Jeyaveer Fuels / Call Diesel — doorstep diesel from authorised HP, IndianOil & Bharat Petroleum. Live GPS, IoT geo-fencing, ATF fuel management. Call 044-4311 4311."
			},
			{
				name: "author",
				content: "Jeyaveer Fuels Private Limited"
			},
			{
				property: "og:title",
				content: "Call Diesel — Highest Grade Fuel Delivery"
			},
			{
				property: "og:description",
				content: "Doorstep diesel delivery with IoT security, geo-fenced dispensing and authorised PSU fuel partners."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "Call Diesel"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "theme-color",
				content: "#67B548"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			},
			{
				rel: "shortcut icon",
				href: "/favicon.png",
				type: "image/png"
			},
			{
				rel: "apple-touch-icon",
				href: "/favicon.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@500;600;700;800&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-dvh flex flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1 pt-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFab, {})
			]
		})
	});
}
var $$splitComponentImporter$6 = () => import("./technology-C5i4V0K2.mjs");
var Route$6 = createFileRoute("/technology")({
	component: lazyRouteComponent($$splitComponentImporter$6, "component"),
	head: () => ({
		meta: [
			{ title: "Technology — IoT, GPS & Smart Fuel Dispensing | Call Diesel" },
			{
				name: "description",
				content: "Accurate GPS geo-fencing, IoT brake-interlock, mobile petrol pump tech and authorised dispensing from Call Diesel."
			},
			{
				property: "og:title",
				content: "Technology — Call Diesel"
			},
			{
				property: "og:url",
				content: "/technology"
			}
		],
		links: [{
			rel: "canonical",
			href: "/technology"
		}]
	})
});
var $$splitComponentImporter$5 = () => import("./services-CLSjPBzl.mjs");
var Route$5 = createFileRoute("/services")({
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	head: () => ({
		meta: [
			{ title: "Fuel Delivery Services — Call Diesel" },
			{
				name: "description",
				content: "Doorstep diesel, industrial oils, fleet fuel management, generator diesel, bulk delivery, scheduled & emergency fuel service."
			},
			{
				property: "og:title",
				content: "Fuel Delivery Services — Call Diesel"
			},
			{
				property: "og:url",
				content: "/services"
			}
		],
		links: [{
			rel: "canonical",
			href: "/services"
		}]
	})
});
var $$splitComponentImporter$4 = () => import("./mobile-app-Bmq28iMY.mjs");
var Route$4 = createFileRoute("/mobile-app")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => ({
		meta: [
			{ title: "Mobile App — Order & Track Fuel | Call Diesel" },
			{
				name: "description",
				content: "Order diesel from preferred PSU pumps, live track delivery, and access consumption history on the Call Diesel app."
			},
			{
				property: "og:title",
				content: "Call Diesel Mobile App"
			},
			{
				property: "og:url",
				content: "/mobile-app"
			}
		],
		links: [{
			rel: "canonical",
			href: "/mobile-app"
		}]
	})
});
var $$splitComponentImporter$3 = () => import("./industries-UYdC406F.mjs");
var Route$3 = createFileRoute("/industries")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({
		meta: [
			{ title: "Industries We Serve — Call Diesel" },
			{
				name: "description",
				content: "Doorstep diesel for construction, mining, factories, hospitals, warehouses, ports, agriculture, telecom, data centres and more."
			},
			{
				property: "og:title",
				content: "Industries — Call Diesel"
			},
			{
				property: "og:url",
				content: "/industries"
			}
		],
		links: [{
			rel: "canonical",
			href: "/industries"
		}]
	})
});
var $$splitComponentImporter$2 = () => import("./contact-CA8DvQv2.mjs");
var Route$2 = createFileRoute("/contact")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({
		meta: [
			{ title: "Contact & Get a Quote — Call Diesel" },
			{
				name: "description",
				content: "Contact Jeyaveer Fuels / Call Diesel — Chennai. Call 044-4311 4311 or email calldiesel@yahoo.com for doorstep diesel delivery."
			},
			{
				property: "og:title",
				content: "Contact — Call Diesel"
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	})
});
var $$splitComponentImporter$1 = () => import("./atf-U0EzZN5i.mjs");
var Route$1 = createFileRoute("/atf")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({
		meta: [
			{ title: "ATF — Any Time Fuel Management Device | Call Diesel" },
			{
				name: "description",
				content: "ATF: stationery diesel data management device with live fuel levels, sub-asset consumption, authorised dispensing and savings tracking."
			},
			{
				property: "og:title",
				content: "ATF — Any Time Fuel"
			},
			{
				property: "og:url",
				content: "/atf"
			}
		],
		links: [{
			rel: "canonical",
			href: "/atf"
		}]
	})
});
var $$splitComponentImporter = () => import("./routes-DzVNPHDJ.mjs");
var Route = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => ({
		meta: [
			{ title: "Call Diesel — Doorstep Diesel Delivery via WhatsApp & App" },
			{
				name: "description",
				content: "India's digital fuel delivery platform. Order diesel, industrial oils & lubricants via WhatsApp. Live GPS tracking, IoT security, geo-fenced doorstep delivery."
			},
			{
				property: "og:title",
				content: "Call Diesel — The Future of Fuel Distribution"
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	})
});
var TechnologyRoute = Route$6.update({
	id: "/technology",
	path: "/technology",
	getParentRoute: () => Route$7
});
var ServicesRoute = Route$5.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$7
});
var MobileAppRoute = Route$4.update({
	id: "/mobile-app",
	path: "/mobile-app",
	getParentRoute: () => Route$7
});
var IndustriesRoute = Route$3.update({
	id: "/industries",
	path: "/industries",
	getParentRoute: () => Route$7
});
var ContactRoute = Route$2.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$7
});
var AtfRoute = Route$1.update({
	id: "/atf",
	path: "/atf",
	getParentRoute: () => Route$7
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	AtfRoute,
	ContactRoute,
	IndustriesRoute,
	MobileAppRoute,
	ServicesRoute,
	TechnologyRoute
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
