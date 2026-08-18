import { Link } from "@tanstack/react-router";
import { COMPANY, FUEL_PARTNERS } from "@/lib/company";
import { BrandWordmark } from "@/components/site/BrandLogo";

export function Footer() {
  return (
    <footer className="mt-16 sm:mt-24 bg-primary-dark text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <BrandWordmark className="h-12 sm:h-14 w-auto object-contain max-w-full" />
          <p className="mt-1 text-xs text-primary font-medium">{COMPANY.tagline}®</p>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Call Diesel — doorstep diesel delivery in Chennai with live GPS, IoT security and authorised
            HP · IOCL · BPCL fuel. {COMPANY.legalName}.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 items-center">
            {FUEL_PARTNERS.map((p) => (
              <div
                key={p.id}
                className="grid size-11 place-items-center rounded-lg bg-white p-1.5"
                title={p.name}
              >
                <img src={p.logo} alt={p.name} className="max-h-8 max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Products</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-primary">Diesel Delivery</Link></li>
            <li><Link to="/services" className="hover:text-primary">Industrial Oils</Link></li>
            <li><Link to="/services" className="hover:text-primary">Lubricants</Link></li>
            <li><Link to="/atf" className="hover:text-primary">Any Time Fuel</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/technology" className="hover:text-primary">Technology</Link></li>
            <li><Link to="/industries" className="hover:text-primary">Industries</Link></li>
            <li><Link to="/order" className="hover:text-primary">Order Fuel</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li className="font-medium text-white/80">{COMPANY.legalName}</li>
            <li>{COMPANY.address}</li>
            <li>
              <a href={`tel:${COMPANY.phoneTel}`} className="hover:text-primary">
                Call Us at {COMPANY.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${COMPANY.email}`} className="hover:text-primary break-all">
                {COMPANY.email}
              </a>
            </li>
            <li>
              <a href={COMPANY.website} className="hover:text-primary" target="_blank" rel="noreferrer">
                {COMPANY.domain}
              </a>
            </li>
            <li>24×7 Support</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 flex flex-col md:flex-row items-center justify-between text-xs text-white/50 gap-3 text-center md:text-left">
          <p className="max-w-prose">© {new Date().getFullYear()} {COMPANY.legalName}. {COMPANY.brand} — All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
