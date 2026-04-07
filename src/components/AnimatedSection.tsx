"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/** Keep easing local — do not import shared `lib/motion` here, or Next marks that module client-only and breaks Server Components calling `staggerDelay`. */
const motionEase = [0.22, 1, 0.36, 1] as const;

export type RevealVariant = "fade-up" | "fade" | "scale";

const variantMap: Record<RevealVariant, Variants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1 },
  },
};

const mountStates: Record<
  RevealVariant,
  { initial: Record<string, number>; animate: Record<string, number> }
> = {
  "fade-up": {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1 },
  },
};

export type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Stagger when multiple blocks use sequential delays */
  delay?: number;
  /** Hero / above-the-fold: animate on mount */
  animateOnMount?: boolean;
  /** Scroll-triggered style */
  variant?: RevealVariant;
  /** Render as `section` for semantics (default div) */
  as?: "div" | "section";
};

const viewport = {
  once: true,
  amount: 0.15,
  margin: "0px 0px -10% 0px",
} as const;

export function AnimatedSection({
  children,
  className = "",
  id,
  delay = 0,
  animateOnMount = false,
  variant = "fade-up",
  as = "div",
}: AnimatedSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  const transition = {
    duration: prefersReducedMotion ? 0 : 0.55,
    delay: prefersReducedMotion ? 0 : delay,
    ease: motionEase,
  };

  const variants = variantMap[variant];
  const mount = mountStates[variant];

  if (prefersReducedMotion) {
    const Tag = as === "section" ? "section" : "div";
    return (
      <Tag className={className} id={id}>
        {children}
      </Tag>
    );
  }

  if (animateOnMount) {
    if (as === "section") {
      return (
        <motion.section
          className={className}
          id={id}
          initial={mount.initial}
          animate={mount.animate}
          transition={transition}
        >
          {children}
        </motion.section>
      );
    }
    return (
      <motion.div
        className={className}
        id={id}
        initial={mount.initial}
        animate={mount.animate}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }

  if (as === "section") {
    return (
      <motion.section
        className={className}
        id={id}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={variants}
        transition={transition}
      >
        {children}
      </motion.section>
    );
  }

  return (
    <motion.div
      className={className}
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

/** Alias — same component, common naming in design systems */
export const Reveal = AnimatedSection;
