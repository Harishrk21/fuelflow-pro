import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  CheckCircle2, CircleDollarSign, Fuel, LocateFixed, MapPin,
  PackageCheck, ReceiptText, Send, Truck,
} from "lucide-react";
import { BrandWordmark } from "@/components/site/BrandLogo";
import { COMPANY } from "@/lib/company";
import { WhatsAppIconBadge } from "@/components/site/WhatsAppIcon";

export function WhatsAppDemo({
  showHeading = true,
  className = "",
}: {
  showHeading?: boolean;
  className?: string;
}) {
  const chatRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);
  const inView = useInView(chatRef, { amount: 0.45 });
  const flow = [
    { from: "bot", text: "Hi! Welcome to Call Diesel 👋" },
    { from: "bot", text: "Please share your delivery address." },
    { from: "user", text: "No 726 Anna Salai, Nandanam, Chennai" },
    { from: "bot", text: "Great. Please share your live location 📍" },
    { from: "user", text: "Location shared" },
    { from: "bot", text: "Select products: Diesel + Add-ons (Engine Oil)." },
    { from: "bot", text: "Booking confirmed ✅ Invoice shared. Track live in WhatsApp." },
  ];

  const statusUpdates = [
    { icon: Send, title: "Order Started", desc: "Your order has been started and assigned to a vehicle." },
    { icon: Truck, title: "On The Way", desc: "Your fuel truck is on the way with live ETA updates." },
    { icon: PackageCheck, title: "Delivered", desc: "Order delivered successfully with quantity & invoice proof." },
  ];

  const [visibleCount, setVisibleCount] = useState(0);
  const [typingSender, setTypingSender] = useState<"bot" | "user" | null>(null);

  useEffect(() => {
    if (!inView) return;
    let cancelled = false;
    const timers: number[] = [];
    const total = flow.length;

    const runLoop = () => {
      if (cancelled) return;
      setVisibleCount(0);
      setTypingSender(null);

      const run = (idx: number) => {
        if (cancelled) return;
        if (idx >= total) {
          timers.push(window.setTimeout(runLoop, 1800));
          return;
        }

        const sender = flow[idx].from as "bot" | "user";
        setTypingSender(sender);
        timers.push(
          window.setTimeout(() => {
            if (cancelled) return;
            setVisibleCount(idx + 1);
            setTypingSender(null);
            run(idx + 1);
          }, sender === "bot" ? 900 : 650),
        );
      };

      timers.push(window.setTimeout(() => run(0), 280));
    };

    runLoop();
    return () => {
      cancelled = true;
      timers.forEach((t) => clearTimeout(t));
    };
  }, [inView]);

  useEffect(() => {
    const el = messagesRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [visibleCount, typingSender]);

  const phoneMockup = (
    <div className="mx-auto w-full max-w-[280px] sm:max-w-[320px] rounded-[2.35rem] bg-primary-dark p-2.5 shadow-elegant animate-depth-pulse">
      <div className="flex h-[520px] sm:h-[560px] flex-col rounded-[2rem] overflow-hidden bg-[#E5DDD5] border border-white/30">
        <div className="shrink-0 bg-[#075E54] text-white px-4 py-3 flex items-center gap-3">
          <BrandWordmark className="h-8 w-auto object-contain mix-blend-screen" />
          <div>
            <p className="text-sm font-semibold">Call Diesel Assistant</p>
            <p className="text-[10px] text-white/70">automated • 24/7</p>
          </div>
        </div>

        <div ref={messagesRef} className="flex-1 overflow-y-auto overscroll-contain p-4 space-y-2">
          {flow.slice(0, visibleCount).map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: m.from === "user" ? 20 : -20, y: 8 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.28 }}
              className={`max-w-[88%] rounded-xl px-3 py-2 text-sm shadow-sm ${
                m.from === "user"
                  ? "ml-auto bg-[#DCF8C6] text-[#1f2937]"
                  : "bg-white text-[#1f2937]"
              }`}
            >
              {m.text}
            </motion.div>
          ))}

          {typingSender && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className={`max-w-[45%] rounded-xl px-3 py-2 shadow-sm ${
                typingSender === "user" ? "ml-auto bg-[#DCF8C6]" : "bg-white"
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-foreground/35 animate-bounce [animation-delay:-0.2s]" />
                <span className="size-1.5 rounded-full bg-foreground/35 animate-bounce [animation-delay:-0.1s]" />
                <span className="size-1.5 rounded-full bg-foreground/35 animate-bounce" />
              </div>
            </motion.div>
          )}

          {visibleCount >= flow.length && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="rounded-xl bg-white p-3 border border-border"
            >
              <p className="text-xs font-semibold text-primary-dark">Order Summary</p>
              <div className="mt-2 space-y-1 text-[11px] text-foreground/70">
                <p className="flex items-center justify-between"><span className="inline-flex items-center gap-1"><Fuel className="size-3.5" /> Diesel</span><span>500 L</span></p>
                <p className="flex items-center justify-between"><span className="inline-flex items-center gap-1"><ReceiptText className="size-3.5" /> Engine Oil Add-on</span><span>2 Cans</span></p>
                <p className="flex items-center justify-between"><span>Total</span><span className="font-semibold text-primary-dark">₹41,950</span></p>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <button type="button" className="rounded-lg bg-primary text-white text-[11px] py-1.5 font-semibold inline-flex items-center justify-center gap-1"><CircleDollarSign className="size-3.5" /> Pay Now</button>
                <button type="button" className="rounded-lg bg-secondary text-primary-dark text-[11px] py-1.5 font-semibold inline-flex items-center justify-center gap-1"><MapPin className="size-3.5" /> COD</button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );

  const statusCards = (
    <>
      <div className="mt-6 grid sm:grid-cols-3 gap-3">
        {statusUpdates.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.12 }}
            className="rounded-xl bg-card border border-border px-3 py-3 shadow-soft"
          >
            <p className="inline-flex items-center gap-1 text-xs font-semibold text-primary-dark">
              <s.icon className="size-3.5 text-primary" /> {s.title}
            </p>
            <p className="mt-1 text-[11px] text-foreground/60 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold text-primary-dark">
          <LocateFixed className="size-3.5 text-primary animate-pulse" />
          Automated WhatsApp order updates · 24×7
        </span>
      </div>
    </>
  );

  return (
    <section className={`mx-auto max-w-7xl px-6 py-12 md:py-16 ${className}`}>
      <div className="rounded-3xl bg-card border border-border p-6 md:p-10 shadow-elegant relative overflow-hidden">
        <div className="absolute -top-24 -left-24 size-72 rounded-full bg-primary/15 blur-3xl animate-orb" />
        <div className="absolute -bottom-28 -right-20 size-72 rounded-full bg-primary-dark/10 blur-3xl animate-orb-delayed" />

        <div className={`relative grid gap-12 items-center ${showHeading ? "lg:grid-cols-2" : ""}`}>
          {showHeading && (
            <div>
              <p className="text-primary font-semibold text-sm tracking-wider uppercase">WhatsApp Automation · 24×7</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold text-primary-dark leading-tight">
                Order fuel on WhatsApp in under 60 seconds.
              </h2>
              <p className="mt-5 text-foreground/70 leading-relaxed">
                Customers just say “Hi”. Our automated flow collects address and location,
                offers diesel + add-ons like engine oil, sends instant order summary,
                supports Pay Now / COD, confirms booking, and keeps sending live updates
                until delivery — fully automated 24/7.
              </p>

              <div className="mt-7 grid sm:grid-cols-2 gap-3">
                {[
                  "Address + location capture",
                  "Diesel + engine oil add-ons",
                  "Instant order summary",
                  "Pay Now / COD options",
                  "Automated booking confirmation",
                  "Live order status updates",
                ].map((x) => (
                  <div key={x} className="flex items-center gap-2 rounded-xl bg-secondary/60 px-3 py-2 text-sm text-primary-dark">
                    <CheckCircle2 className="size-4 text-primary shrink-0" /> {x}
                  </div>
                ))}
              </div>

              <a href={COMPANY.whatsappUrl} className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant hover:scale-[1.02] transition">
                <WhatsAppIconBadge iconClassName="size-4" /> Start on WhatsApp
              </a>
            </div>
          )}

          <motion.div
            ref={chatRef}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-md mx-auto w-full"
          >
            {phoneMockup}
            {statusCards}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
