import brandMark from "@/assets/calldiesel-mark.png";
import brandLogo from "@/assets/calldiesel-logo-main.png";

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
