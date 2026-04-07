"use client";

import { motion } from "framer-motion";
import PageHero from "@/app/_component/PageHero";
import Well from "../../../../../public/assets/care/carem.png";

const motionEase = [0.22, 1, 0.36, 1] as const;

const heroContent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: motionEase },
  },
};

export default function Head() {
  return (
    <PageHero
      image={Well}
      alt="Wellbeing — children in care"
      layout="left"
      imageClassName="object-cover object-right md:object-center"
      priority
    >
      <motion.div
        className="w-full max-w-2xl text-center text-white md:text-left"
        variants={heroContent}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="font-heading text-3xl font-bold leading-tight sm:text-5xl md:text-6xl"
          variants={heroItem}
        >
          <span className="text-yellow">Care</span> That Makes Learning Possible
        </motion.h1>
        <motion.p
          className="mt-4 max-w-xl text-base leading-relaxed text-white/95 sm:text-lg"
          variants={heroItem}
        >
          We provide the stability children need to learn—through safe shelter,
          healthcare, nutrition, and protection because education cannot thrive
          where survival is uncertain.
        </motion.p>
      </motion.div>
    </PageHero>
  );
}
