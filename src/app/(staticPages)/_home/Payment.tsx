"use client";

import React, { useRef, useEffect, useState } from "react";
import { TbCurrencyNaira } from "react-icons/tb";
import { Button } from "../../_component/atom/button";
import { motion, useAnimation, useInView } from "framer-motion";

// Animation variants
const variants = {
  container: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  },
  heading: {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },
  paragraph: {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  },
  form: {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  },
  background: {
    hidden: { scale: 1 },
    visible: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 12,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  },
};

const Payment: React.FC = () => {
  const [amount, setAmount] = useState("1000");
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: false, // Replay animations on scroll
    margin: "0px 0px -100px 0px", // Trigger slightly before fully in view
  });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // Reset animations when out of view
    }
  }, [controls, isInView]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setAmount(value);
    }
  };

  return (
    <main className="mx-6 md:mx-0">
      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants.container} 
        className="relative max-w-6xl mx-auto bg-[#FFB400] text-center p-6 md:p-8 xl:pt-10 overflow-hidden md:bottom-[5rem] bottom-0 "
      >
        {/* Background Zoom Animation */}
        <motion.div
          variants={variants.background}
          className="absolute inset-0 bg-payment bg-cover bg-no-repeat"
          style={{ zIndex: -1 }}
        />

        {/* Headline */}
        <motion.h1
          variants={variants.heading}
          className="text-2xl md:text-3xl xl:text-4xl font-bold"
        >
          Your Giving, Their Hope,{" "}
          <span className="font-normal">Our Collective Future.</span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          variants={variants.paragraph}
          className="max-w-2xl mx-auto py-4 text-sm md:text-base"
        >
          We can collectively ignite hope. By extending a helping hand to
          disadvantaged children, we build a brighter, more inclusive, and safer
          future. Start giving—it’s safe and easy.
        </motion.p>

        {/* Form */}
        <motion.form
          variants={variants.form}
          className="flex flex-col md:flex-row justify-center items-center pt-6 gap-4 md:gap-6"
        >
          <div className="relative w-40">
            <input
              type="text"
              className="w-full bg-[#FFB400] outline-none py-2.5 px-8 text-center border-2 border-black text-sm text-black"
              placeholder="Enter Amount"
              value={amount}
              onChange={handleInputChange}
              aria-label="Donation amount"
            />
            <TbCurrencyNaira
              className="absolute top-1/2 left-3 transform -translate-y-1/2"
              size={20}
            />
          </div>
          <motion.a
            href={`https://paystack.com/pay/ie-pg23h4p?amount=${amount}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            aria-label="Donate via Paystack"
          >
            <Button
              type="button"
              className="bg-black text-white w-40 py-2.5 border-2 border-black text-sm transition-colors duration-300"
            >
              Donate
            </Button>
          </motion.a>
        </motion.form>
      </motion.section>
    </main>
  );
};

export default Payment;
