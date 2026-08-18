import brandMark from "@/assets/calldiesel-mark.png";
import brandLogo from "@/assets/calldiesel-logo-main.png";
import navbarLogo from "@/assets/calldiesel-navbar-logo.png";
import { COMPANY } from "@/lib/company";

export function NavbarLogo({
  className = "h-14 sm:h-16 lg:h-[4.5rem] w-auto",
}: {
  className?: string;
}) {
  return (
    <span className="flex flex-col items-center shrink-0 leading-none">
      <img
        src={navbarLogo}
        alt="Call Diesel"
        width={1024}
        height={474}
        className={`object-contain ${className}`}
      />
      <span className="mt-1 font-tagline font-medium text-[11px] sm:text-xs lg:text-[13px] text-primary-dark tracking-wide whitespace-nowrap leading-none">
        {COMPANY.tagline}
      </span>
    </span>
  );
}

export function BrandMark({
  className = "size-10 sm:size-12",
}: {
  className?: string;
}) {
  return (
    <img
      src={brandMark}
      alt="Call Diesel"
      width={48}
      height={48}
      className={`object-contain shrink-0 ${className}`}
    />
  );
}

export function BrandWordmark({
  className = "h-14 w-auto object-contain",
}: {
  className?: string;
}) {
  return (
    <img
      src={brandLogo}
      alt="Call Diesel — Highest grade fuel delivery"
      className={className}
    />
  );
}
