"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Container from "../../_component/shared";
import Email from "@/app/_component/atom/Email";

const viewport = { once: false, amount: 0.28 } as const;

const EmailSection = () => {
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.18,
        delayChildren: reduceMotion ? 0 : 0.06,
      },
    },
  };

  const copyVariants = {
    hidden: reduceMotion
      ? { opacity: 0 }
      : { opacity: 0, x: -36, filter: "blur(6px)" },
    visible: reduceMotion
      ? { opacity: 1, transition: { duration: 0.35 } }
      : {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          transition: {
            type: "spring",
            stiffness: 76,
            damping: 20,
            mass: 0.85,
          },
        },
  };

  const formVariants = {
    hidden: reduceMotion
      ? { opacity: 0 }
      : { opacity: 0, x: 36, scale: 0.96 },
    visible: reduceMotion
      ? { opacity: 1, transition: { duration: 0.35 } }
      : {
          opacity: 1,
          x: 0,
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 68,
            damping: 18,
            mass: 0.9,
          },
        },
  };

  return (
    <section
      aria-labelledby="email-section-heading"
      className="relative bg-white pb-[5rem] pt-12 text-black md:pb-20 md:pt-16"
    >
      <Container>
        <motion.div
          className="flex w-full flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-10 lg:gap-14"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={viewport}
        >
          <motion.div
            variants={copyVariants}
            className="flex min-w-0 flex-1 flex-col items-center text-center md:items-start md:text-left"
          >
            <h2
              id="email-section-heading"
              className="text-[32px] font-medium leading-tight md:text-[40px]"
            >
              Be part of a better{" "}
              <span className="text-yellow">tomorrow</span>
            </h2>
            <p className="mt-4 max-w-[500px] text-base leading-relaxed text-neutral-600 md:max-w-none md:text-lg">
              Enter your email to stay up to date on how we make a difference
              together.
            </p>
          </motion.div>
          <motion.div
            variants={formVariants}
            className="w-full max-w-[450px] shrink-0 md:max-w-[min(100%,420px)] lg:max-w-[450px]"
          >
            <Email />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default EmailSection;
