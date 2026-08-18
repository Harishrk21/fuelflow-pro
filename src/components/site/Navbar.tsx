import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { COMPANY } from "@/lib/company";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { BrandMark, BrandWordmarkText } from "@/components/site/BrandLogo";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/technology", label: "Technology" },
  { to: "/order", label: "Order" },
  { to: "/atf", label: "ATF" },
  { to: "/industries", label: "Industries" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      aria-label="Call Diesel — doorstep diesel delivery navigation"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-3 sm:py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-4">
        <div
          className={`flex items-center justify-between gap-2 rounded-2xl px-3 sm:px-4 py-2 sm:py-2.5 transition-all ${
            scrolled ? "glass shadow-soft" : "bg-transparent"
          }`}
        >
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-2.5 min-w-0 shrink"
            aria-label="Call Diesel home — doorstep diesel delivery Chennai"
          >
            <BrandMark className="size-11 sm:size-12 shrink-0" />
            <BrandWordmarkText showTagline className="min-w-0" />
          </Link>

          <nav className="hidden xl:flex items-center gap-0.5 2xl:gap-1 shrink-0">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-2.5 2xl:px-3.5 py-2 rounded-lg text-sm font-medium text-foreground/70 hover:text-primary-dark hover:bg-accent/40 transition whitespace-nowrap"
                activeProps={{ className: "text-primary-dark bg-accent/60" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden xl:flex items-center gap-2 shrink-0">
            <a
              href={COMPANY.whatsappUrl}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 px-3 2xl:px-4 py-2 text-sm font-medium hover:bg-card transition whitespace-nowrap"
            >
              <WhatsAppIcon className="size-4 shrink-0" />
              WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-xl bg-gradient-primary px-3 2xl:px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-elegant transition shine-on-hover whitespace-nowrap"
            >
              Order Now
            </Link>
          </div>

          <button
            className="xl:hidden grid place-items-center size-10 rounded-xl bg-card border border-border shrink-0"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {open && (
          <div className="xl:hidden mt-2 glass rounded-2xl p-4 shadow-elegant animate-fade-in max-h-[calc(100dvh-5.5rem)] overflow-y-auto">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-accent/60"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={COMPANY.whatsappUrl}
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium"
              >
                <WhatsAppIcon className="size-4" />
                WhatsApp
              </a>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 text-center rounded-xl bg-gradient-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                Order Now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
