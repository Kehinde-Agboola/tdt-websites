"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  /** Stagger when multiple sections mount in sequence */
  delay?: number;
  /** Use for hero / above-the-fold blocks that should animate on load */
  animateOnMount?: boolean;
};

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  animateOnMount = false,
}: AnimatedSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  const transition = {
    duration: prefersReducedMotion ? 0 : 0.6,
    delay: prefersReducedMotion ? 0 : delay,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  if (animateOnMount) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -60px 0px" }}
      variants={sectionVariants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
