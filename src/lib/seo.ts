import { COMPANY } from "./company";

export const SITE_URL = COMPANY.website.replace(/\/$/, "");
export const OG_IMAGE = `${SITE_URL}/og-image.png`;

/** Primary keywords for meta tags and schema knowsAbout */
export const SEO_KEYWORDS = [
  "Call Diesel",
  "CallDiesel",
  "doorstep diesel",
  "doorstep diesel delivery",
  "diesel delivery Chennai",
  "fuel delivery Chennai",
  "mobile diesel delivery",
  "diesel on call",
  "HP diesel delivery",
  "IOCL diesel delivery",
  "BPCL diesel delivery",
  "industrial fuel delivery",
  "generator diesel supply",
  "PESO approved fuel delivery",
  "WhatsApp diesel order",
].join(", ");

export function absUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

type Breadcrumb = { name: string; path: string };

export function pageHead({
  title,
  description,
  path,
  keywords = SEO_KEYWORDS,
  robots = "index, follow",
  breadcrumbs,
  extraScripts = [],
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  robots?: string;
  breadcrumbs?: Breadcrumb[];
  extraScripts?: { type: string; children: string }[];
}) {
  const url = absUrl(path);
  const scripts = [...extraScripts];

  if (breadcrumbs?.length) {
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify(breadcrumbJsonLd(breadcrumbs)),
    });
  }

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { name: "robots", content: robots },
      { name: "googlebot", content: robots },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "Call Diesel — doorstep diesel delivery truck and operations team" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: COMPANY.brand },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts,
  };
}

export function noindexHead({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return pageHead({
    title,
    description,
    path,
    robots: "noindex, follow",
    keywords: SEO_KEYWORDS,
  });
}

export function breadcrumbJsonLd(items: Breadcrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export const HOME_FAQS = [
  {
    q: "What is Call Diesel doorstep diesel delivery?",
    a: "Call Diesel is a Chennai-based doorstep diesel delivery service by Jeyaveer Fuels. Order authorised HP, IndianOil, or Bharat Petroleum diesel to your site via WhatsApp or app with live GPS tracking and IoT-secured dispensing.",
  },
  {
    q: "How do I order diesel from Call Diesel?",
    a: "Message us on WhatsApp at 044-4311 4311, use the Call Diesel app, or request a quote on our website. Share your delivery location, fuel quantity, and preferred time slot.",
  },
  {
    q: "Do you deliver diesel in Chennai?",
    a: "Yes. Call Diesel delivers doorstep diesel across Chennai and is expanding across Tamil Nadu and South India for factories, construction sites, fleets, and generators.",
  },
  {
    q: "Is Call Diesel fuel authorised and PESO approved?",
    a: "Yes. We supply fuel through authorised HP, IOCL, and BPCL channels using a PESO-ready mobile delivery fleet with Weights & Measures certified metering.",
  },
  {
    q: "Can I track my diesel delivery live?",
    a: "Every Call Diesel order includes live GPS tracking from dispatch to delivery, plus digital invoices and order history in the app.",
  },
] as const;

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "Organization"],
      "@id": `${SITE_URL}/#business`,
      name: COMPANY.brand,
      alternateName: ["Call Diesel", "CallDiesel", "Jeyaveer Fuels"],
      legalName: COMPANY.legalName,
      description:
        "Call Diesel provides doorstep diesel delivery in Chennai — authorised HP, IOCL, and BPCL fuel with live GPS tracking, IoT geo-fenced dispensing, and WhatsApp ordering.",
      url: SITE_URL,
      telephone: COMPANY.phoneTel,
      email: COMPANY.email,
      image: OG_IMAGE,
      logo: `${SITE_URL}/favicon.png`,
      priceRange: "$$",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Bank Transfer, UPI",
      address: {
        "@type": "PostalAddress",
        streetAddress: "No 726 Anna Salai, Nanthanam",
        addressLocality: "Chennai",
        postalCode: "600035",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 13.0408,
        longitude: 80.234,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      ],
      areaServed: [
        { "@type": "City", name: "Chennai" },
        { "@type": "State", name: "Tamil Nadu" },
        { "@type": "Country", name: "India" },
      ],
      knowsAbout: [
        "doorstep diesel delivery",
        "mobile fuel delivery",
        "industrial diesel supply",
        "generator diesel",
        "fleet fuel management",
        "PESO approved fuel delivery",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Call Diesel fuel services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Doorstep diesel delivery", areaServed: "Chennai" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Industrial oils and lubricants delivery" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Generator and fleet diesel supply" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "ATF fuel management device" },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: COMPANY.brand,
      alternateName: "Call Diesel doorstep diesel delivery",
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE_URL}/#business` },
    },
  ],
};

/** Breadcrumb presets for inner pages */
export const crumbs = {
  services: [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ],
  order: [
    { name: "Home", path: "/" },
    { name: "Order Fuel", path: "/order" },
  ],
  technology: [
    { name: "Home", path: "/" },
    { name: "Technology", path: "/technology" },
  ],
  atf: [
    { name: "Home", path: "/" },
    { name: "ATF", path: "/atf" },
  ],
  industries: [
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
  ],
  contact: [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ],
} as const;
