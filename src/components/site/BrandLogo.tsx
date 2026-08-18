import brandMark from "@/assets/calldiesel-mark.png";
import brandLogo from "@/assets/calldiesel-logo-main.png";
import { COMPANY } from "@/lib/company";

const brandTextSizes = {
  nav: {
    name: "text-[15px] sm:text-[17px] leading-none",
    tagline: "text-[8px] sm:text-[9px] leading-tight mt-0.5",
  },
  md: {
    name: "text-lg sm:text-xl leading-none",
    tagline: "text-[10px] sm:text-[11px] leading-tight mt-0.5",
  },
  lg: {
    name: "text-2xl sm:text-3xl leading-none",
    tagline: "text-xs leading-tight mt-1",
  },
} as const;

/** Text wordmark styled to match the Call Diesel logo (Fredoka, single-line CALLDIESEL). */
export function BrandWordmarkText({
  className = "",
  showTagline = true,
  size = "nav",
}: {
  className?: string;
  showTagline?: boolean;
  size?: keyof typeof brandTextSizes;
}) {
  const s = brandTextSizes[size];
  return (
    <div className={`min-w-0 select-none ${className}`}>
      <p
        className={`font-brand font-bold uppercase text-primary tracking-[-0.04em] whitespace-nowrap ${s.name}`}
        aria-label="Call Diesel"
      >
        CallDiesel
      </p>
      {showTagline && (
        <p className={`hidden sm:block font-brand font-medium text-primary/75 tracking-wide truncate ${s.tagline}`}>
          {COMPANY.tagline}
        </p>
      )}
    </div>
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
