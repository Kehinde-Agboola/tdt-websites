"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

// Text fade-up variants
const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: "easeOut" },
  }),
};

// Zoom effect for background
const zoomVariant = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.1, 1],
    transition: { duration: 10, ease: "easeInOut", repeat: Infinity },
  },
};

const Head = () => {
  return (
    <main>
      <div className="relative h-screen w-full bg-black overflow-hidden">
        {/* Desktop Background */}
        <motion.div
          className="absolute inset-0 hidden md:block"
          variants={zoomVariant}
          initial="initial"
          animate="animate"
        >
          <Image
            src="/assets/care/carem.png"
            alt="Background desktop"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>

        {/* Mobile Background */}
        <motion.div
          className="absolute inset-0 block md:hidden"
          variants={zoomVariant}
          initial="initial"
          animate="animate"
        >
          <Image
            src="/assets/mobilebg.png"
            alt="Background mobile"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-end md:justify-center items-center text-center md:text-left md:items-start md:pl-[4rem] bottom-[40px] md:bottom-0 z-10 px-6">
          <section className="text-white flex flex-col items-center md:items-start">
            {/* CARE */}
            <motion.h1
              className="text-4xl md:text-6xl leading-tight"
              variants={fadeUpVariant}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              CARE.
            </motion.h1>

            {/* EDUCATION */}
            <motion.h1
              className="text-4xl md:text-6xl text-[#FFBC00] font-semibold"
              variants={fadeUpVariant}
              custom={0.3}
              initial="hidden"
              whileInView="visible"
            >
              EDUCATION.
            </motion.h1>

            {/* EMPOWERMENT */}
            <motion.h1
              className="text-4xl md:text-6xl leading-tight mb-2"
              variants={fadeUpVariant}
              custom={0.6}
              initial="hidden"
              whileInView="visible"
            >
              EMPOWERMENT.
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              className="text-sm md:text-[16px] leading-snug tracking-tight max-w-[70%] md:max-w-[480px] mx-auto md:mx-0"
              variants={fadeUpVariant}
              custom={0.9}
              initial="hidden"
              whileInView="visible"
            >
              Empowering children to be their best, recreating our future.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col items-center gap-4 md:flex-row md:gap-6 mt-6"
              variants={fadeUpVariant}
              custom={1.2}
              initial="hidden"
              whileInView="visible"
            >
              {/* Contact Us (outlined) */}
              <Link
                href="/contact"
                className="border w-[160px] h-[46px] border-[#FFBC00] px-6 py-2 text-white text-center transition hover:bg-[#FFBC00]"
              >
                Contact Us
              </Link>

              {/* Get Involved (filled) */}
              <Link
                href="/get-involve"
                className="bg-[#FFBC00] w-[160px] h-[46px] px-6 py-2 text-black text-center transition hover:bg-[#e0a800]"
              >
                Get Involved
              </Link>
            </motion.div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Head;


