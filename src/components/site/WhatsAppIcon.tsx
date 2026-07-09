import type { SVGProps } from "react";

const WHATSAPP_GREEN = "#25D366";

type WhatsAppIconProps = SVGProps<SVGSVGElement> & {
  /** Use on green/dark buttons — white glyph without the green circle */
  variant?: "brand" | "light";
};

export function WhatsAppIcon({ className, variant = "brand", ...props }: WhatsAppIconProps) {
  const glyph = (
    <>
      <path d="M9.6 24.5 11 20.6a9.2 9.2 0 1 1 3.7 3l-5.1.9Z" fill="#fff" />
      <path
        d="M21.9 18.8c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2l-.6.9c-.2.2-.3.3-.6.1-.3-.2-1.1-.4-2.1-1.4-.8-.7-1.3-1.5-1.5-1.8-.2-.3 0-.5.2-.7l.4-.5.3-.4c.1-.2 0-.4 0-.6l-1-2.3c-.2-.4-.4-.4-.7-.4h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1-1.1 2.5s1.1 2.8 1.2 3c.1.2 2.2 3.4 5.3 4.7 3.2 1.4 3.2.9 3.7.9.6-.1 1.8-.7 2-1.4.3-.7.3-1.2.2-1.4-.1-.2-.3-.2-.6-.4Z"
        fill="#fff"
      />
    </>
  );

  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {variant === "brand" && <circle cx="16" cy="16" r="15" fill={WHATSAPP_GREEN} />}
      {glyph}
    </svg>
  );
}
