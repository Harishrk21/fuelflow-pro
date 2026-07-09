import { COMPANY } from "@/lib/company";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

export function WhatsAppFab() {
  return (
    <a
      href={COMPANY.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-primary/40 animate-pulse-ring" />
      <span className="relative grid size-14 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-elegant group-hover:scale-105 transition">
        <WhatsAppIcon variant="light" className="size-6" />
      </span>
    </a>
  );
}
