import type { SVGProps } from "react";

const WHATSAPP_GREEN = "#25D366";

type WhatsAppIconProps = SVGProps<SVGSVGElement> & {
  /** @deprecated Always uses full brand icon now */
  variant?: "brand" | "light";
};

export function WhatsAppIcon({ className, ...props }: WhatsAppIconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <circle cx="16" cy="16" r="16" fill={WHATSAPP_GREEN} />
      <path
        d="M16 6.5c-5.4 0-9.8 4.4-9.8 9.8 0 1.7.5 3.4 1.3 4.9L6.5 25.5l4.5-1.2c1.4.8 3 1.2 4.6 1.2 5.4 0 9.8-4.4 9.8-9.8S21.4 6.5 16 6.5Zm0 17.9c-1.4 0-2.7-.4-3.9-1l-.3-.2-2.7.7.7-2.6-.2-.3c-1-1.2-1.5-2.7-1.5-4.3 0-4.1 3.3-7.4 7.4-7.4s7.4 3.3 7.4 7.4-3.3 7.4-7.4 7.4Z"
        fill="#fff"
      />
      <path
        d="M19.2 17.8c-.2-.1-1.3-.6-1.5-.7-.2-.1-.4-.1-.5.1l-.5.6c-.1.1-.3.2-.5.1-.2-.1-.8-.3-1.6-1-.6-.5-1-1.1-1.1-1.3-.1-.2 0-.4.1-.5l.3-.4.2-.3c.1-.1.1-.3 0-.4l-.7-1.6c-.1-.3-.3-.3-.5-.3h-.4c-.2 0-.4.1-.6.3-.2.2-.8.7-.8 1.7s.8 2 1 2.1c.1.2 1.6 2.5 3.8 3.4 2.2 1 2.2.6 2.6.6.5-.1 1.3-.5 1.5-1 .2-.5.2-.9.1-1-.1-.1-.2-.2-.5-.3Z"
        fill="#fff"
      />
    </svg>
  );
}

/** Full green WhatsApp icon on a white disc — use on green/dark buttons */
export function WhatsAppIconBadge({
  iconClassName = "size-4",
  className = "p-1",
}: {
  iconClassName?: string;
  className?: string;
}) {
  return (
    <span className={`inline-grid shrink-0 place-items-center rounded-full bg-white shadow-sm ${className}`}>
      <WhatsAppIcon className={iconClassName} />
    </span>
  );
}
