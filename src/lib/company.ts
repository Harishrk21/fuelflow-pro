export const COMPANY = {
  brand: "Call Diesel",
  tagline: "Highest grade fuel delivery",
  legalName: "JEYAVEER FUELS PRIVATE LIMITED",
  address: "No 726 Anna Salai, Nanthanam, Chennai 600035",
  phoneDisplay: "044 - 4311 4311",
  phoneTel: "+914443114311",
  whatsappDisplay: "044 - 4311 4311",
  whatsapp: "914443114311",
  whatsappUrl: "https://wa.me/914443114311",
  email: "jeyaveerfuels@gmail.com",
  formEmail: "jeyaveerfuels@gmail.com",
  website: "https://www.calldiesel.in",
  domain: "www.calldiesel.in",
  pan: "AAFCJ0415L",
  hotline: "4311-4311",
} as const;

export const FUEL_PARTNERS = [
  {
    id: "hpcl",
    name: "Hindustan Petroleum",
    short: "HP",
    logo: "/partners/hpcl.svg",
  },
  {
    id: "iocl",
    name: "IndianOil",
    short: "IOCL",
    logo: "/partners/iocl.svg",
  },
  {
    id: "bpcl",
    name: "Bharat Petroleum",
    short: "BPCL",
    logo: "/partners/bpcl.svg",
  },
] as const;

export const VEHICLE_SPECS = [
  { title: "Trained Drivers", desc: "Certified operators for safe doorstep dispensing" },
  { title: "5 Liter W&M Jar", desc: "Weights & Measures approved verification jar" },
  { title: "40ft Hose", desc: "Extended reach hose for on-site tank access" },
  { title: "Geo Locked", desc: "Dispensing enabled only inside the geo-fence" },
  { title: "24 × 7 Service", desc: "Round-the-clock delivery across service areas" },
  { title: "PESO Approved", desc: "Compliant mobile petrol pump operations" },
  { title: "GPS Tracking", desc: "Live vehicle location from dispatch to delivery" },
  { title: "~1% Accurate Meters", desc: "Precision metering for right quantity every time" },
  { title: "Density Check", desc: "Quality verification before and during dispense" },
  { title: "W&M Certificate", desc: "Weights and Measures certified equipment" },
] as const;

export const LICENSES = [
  { title: "Certificate of Incorporation", body: "Ministry of Corporate Affairs — Jeyaveer Fuels Pvt. Ltd." },
  { title: "Startup India / DPIIT", body: "Recognised startup under Government of India" },
  { title: "PAN — AAFCJ0415L", body: "Income Tax Department, Government of India" },
  { title: "Udyam Registration", body: "MSME / Udyam registered enterprise" },
  { title: "TN Certificate of Verification", body: "Government of Tamil Nadu Weights & Measures" },
  { title: "HPCL Authorisation Docs", body: "Authorised fuel partnership documentation" },
] as const;
