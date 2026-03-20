"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: "easeOut" },
  }),
};

const zoomVariant = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.1, 1],
    transition: { duration: 10, ease: "easeInOut", repeat: Infinity },
  },
};

const Head = () => {
  return (
    <section aria-label="Homepage hero">
      <div className="relative min-h-screen min-h-[100dvh] w-full bg-black overflow-hidden">
        <motion.div
          className="absolute inset-0 hidden md:block"
          variants={zoomVariant}
          initial="initial"
          animate="animate"
        >
          <Image
            src="/assets/care/carem.png"
            alt="Children in a learning environment"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 block md:hidden"
          variants={zoomVariant}
          initial="initial"
          animate="animate"
        >
          <Image
            src="/assets/mobilebg.png"
            alt="Children in a learning environment"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>

        <div
          className="absolute inset-0 bg-black/45 z-[1]"
          aria-hidden
        />

        <div className="absolute inset-0 flex flex-col justify-end md:justify-center items-center text-center md:text-left md:items-start md:pl-[4rem] bottom-[40px] md:bottom-0 z-10 px-6 pb-8 md:pb-0">
          <section
            className="text-white flex flex-col items-center md:items-start max-w-3xl"
            aria-label="Hero"
          >
            <motion.p
              className="text-lg md:text-xl tracking-wide text-white/90"
              variants={fadeUpVariant}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              Education. Wellbeing. Skills.
            </motion.p>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mt-2 text-[#FFBC00]"
              variants={fadeUpVariant}
              custom={0.15}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              For Every Child.
            </motion.h1>

            <motion.p
              className="text-sm md:text-lg leading-relaxed max-w-xl mt-4 text-white/95 mx-auto md:mx-0"
              variants={fadeUpVariant}
              custom={0.35}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              Empowering children to reach their full potential, shaping a better
              future through education.
            </motion.p>

            <motion.div
              className="flex flex-col items-stretch sm:items-center gap-4 sm:flex-row sm:gap-6 mt-8 w-full sm:w-auto"
              variants={fadeUpVariant}
              custom={0.55}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <a
                href="#donate"
                className="border w-full sm:w-[180px] h-[50px] border-[#FFBC00] px-6 py-2 text-white text-center flex items-center justify-center transition-colors duration-200 hover:bg-[#FFBC00] hover:text-black focus:outline-none focus:ring-2 focus:ring-[#FFBC00] focus:ring-offset-2 focus:ring-offset-black/50"
              >
                Give
              </a>
              <Link
                href="/get-involve"
                className="bg-[#FFBC00] w-full sm:w-[180px] h-[50px] px-6 py-2 text-black text-center flex items-center justify-center transition-colors duration-200 hover:bg-[#e0a800] focus:outline-none focus:ring-2 focus:ring-[#FFBC00] focus:ring-offset-2 focus:ring-offset-black/50"
              >
                Get Involved
              </Link>
            </motion.div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Head;
