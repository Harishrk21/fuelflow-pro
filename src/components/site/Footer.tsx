import { Link } from "@tanstack/react-router";
import { Flame, Instagram, Linkedin, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary-dark text-white/80">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 font-display font-bold text-xl text-white">
            <span className="grid size-9 place-items-center rounded-xl bg-primary">
              <Flame className="size-5" />
            </span>
            CallDiesel
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            India's next-generation digital fuel delivery and fuel management
            platform. Order via WhatsApp, App, or Web.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Linkedin, Twitter, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid size-9 place-items-center rounded-lg bg-white/10 hover:bg-primary transition"
                aria-label="social"
              >
                <Icon className="size-4" />
              </a>
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
            <li><Link to="/mobile-app" className="hover:text-primary">Mobile App</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li>Chennai, Tamil Nadu, India</li>
            <li>+91 99999 99999</li>
            <li>hello@calldiesel.com</li>
            <li>24×7 Support</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between text-xs text-white/50 gap-2">
          <p>© {new Date().getFullYear()} Call Diesel. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
