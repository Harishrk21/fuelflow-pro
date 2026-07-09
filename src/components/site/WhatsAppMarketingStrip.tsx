import { Clock3, Bot, ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/company";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

export function WhatsAppMarketingStrip({ className = "" }: { className?: string }) {
  return (
    <section className={`mx-auto max-w-7xl px-6 py-8 ${className}`}>
      <div className="rounded-2xl border border-border bg-gradient-hero p-5 md:p-6 shadow-soft">
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
          <div>
            <p className="text-primary text-xs font-semibold tracking-wider uppercase">
              WhatsApp First Ordering
            </p>
            <h3 className="mt-1 text-xl md:text-2xl font-display font-bold text-primary-dark">
              Book diesel in under 60 seconds on WhatsApp.
            </h3>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 border border-border">
                <Bot className="size-3.5 text-primary" /> Automated 24/7
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 border border-border">
                <Clock3 className="size-3.5 text-primary" /> Live status updates
              </span>
            </div>
          </div>
          <a
            href={COMPANY.whatsappUrl}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-elegant hover:scale-[1.02] transition"
          >
            <WhatsAppIcon variant="light" className="size-4" />
            Order on WhatsApp
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
