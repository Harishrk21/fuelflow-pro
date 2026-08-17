import { COMPANY } from "./company";

export const SITE_URL = COMPANY.website.replace(/\/$/, "");
export const OG_IMAGE = `${SITE_URL}/og-image.png`;

export function absUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageHead({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = absUrl(path);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: COMPANY.brand },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: COMPANY.brand,
      legalName: COMPANY.legalName,
      url: SITE_URL,
      telephone: COMPANY.phoneTel,
      email: COMPANY.email,
      image: OG_IMAGE,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "No 726 Anna Salai, Nanthanam",
        addressLocality: "Chennai",
        postalCode: "600035",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
      areaServed: ["Chennai", "Tamil Nadu", "South India"],
      sameAs: [SITE_URL],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: COMPANY.brand,
      publisher: { "@id": `${SITE_URL}/#business` },
    },
  ],
};
