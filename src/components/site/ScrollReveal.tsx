import { motion, useReducedMotion, type Transition } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Direction = "left" | "right" | "up";

const ease = [0.22, 1, 0.36, 1] as const;

export function ScrollReveal({
  children,
  className,
  direction = "left",
  index = 0,
}: {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  index?: number;
}) {
  const isMobile = useIsMobile();
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  const mobileDir: Direction = index % 2 === 0 ? "left" : "right";
  const activeDir = isMobile ? mobileDir : direction;

  const hidden = {
    left: { x: isMobile ? -72 : -28, y: 0, opacity: 0, scale: isMobile ? 0.96 : 1 },
    right: { x: isMobile ? 72 : 28, y: 0, opacity: 0, scale: isMobile ? 0.96 : 1 },
    up: { x: 0, y: isMobile ? 40 : 22, opacity: 0, scale: isMobile ? 0.96 : 1 },
  }[activeDir];

  const transition: Transition = isMobile
    ? { type: "spring", stiffness: 120, damping: 20, mass: 0.85 }
    : { duration: 0.45, delay: index * 0.05, ease };

  return (
    <motion.div
      className={cn(className)}
      initial={hidden}
      whileInView={{ x: 0, y: 0, opacity: 1, scale: 1 }}
      viewport={{
        once: true,
        amount: isMobile ? 0.2 : 0.3,
        margin: isMobile ? "0px 0px -10% 0px" : "0px 0px -12% 0px",
      }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
