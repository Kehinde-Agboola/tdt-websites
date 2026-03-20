'use client'
import React from "react";
import { motion } from "framer-motion";
import Container from "../../_component/shared";

const Report = () => {
  // Animation variants for scroll-triggered effect
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.3 },
    },
  };
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative bg-white pb-[5rem] pt-10 md:pt-[2rem] md:-mt-[20rem]">
      <Container>
        {/* Heading Animation */}
        <motion.h1
          className="text-yellow text-[32px] text-center md:text-left md:text-[40px] font-[500] my-8"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Reporting progress
        </motion.h1>

        {/* Content Animation */}
        <motion.div
          className="flex flex-col xl:flex-row items-center justify-between gap-[3rem]"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Left Paragraph */}
          <motion.div
            className="lg:basis-[40%] flex-basis-[50%] text-justify"
            variants={childVariants}
          >
            <p>
              Beyond numbers, we aim for qualitative impact in children&apos;s
              lives—sustained investment in education, wellbeing, and the
              stability each child needs to thrive.
            </p>
          </motion.div>

          {/* Right Paragraph */}
          <motion.div
            className="lg:basis-[50%] flex-basis-[50%] text-justify"
            variants={childVariants}
          >
            <p className="italic font-[400] text-xl md:text-2xl border-l-0 md:border-l-4 border-yellow pt-3 md:pt-0 md:px-3 border-t-4 md:border-t-0">
              &ldquo;Investing in children is investing in the future we all
              share.&rdquo;
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Report;
