import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Flame } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/technology", label: "Technology" },
  { to: "/mobile-app", label: "Mobile App" },
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all ${
            scrolled ? "glass shadow-soft" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="grid size-9 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft">
              <Flame className="size-5" />
            </span>
            <span className="text-primary-dark">
              Call<span className="text-primary">Diesel</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-foreground/70 hover:text-primary-dark hover:bg-accent/40 transition"
                activeProps={{ className: "text-primary-dark bg-accent/60" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <a
              href="https://wa.me/919999999999"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 px-4 py-2 text-sm font-medium hover:bg-card transition"
            >
              WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-xl bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-elegant transition"
            >
              Order Fuel
            </Link>
          </div>

          <button
            className="lg:hidden grid place-items-center size-10 rounded-xl bg-card border border-border"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-4 shadow-elegant animate-fade-in">
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
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 text-center rounded-xl bg-gradient-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                Order Fuel
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
