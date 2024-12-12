'use client'
import React from "react";
import { motion } from "framer-motion";
import Container from "../_component/shared";

const Report = () => {
  // Define animation variants
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
    <section className="relative bg-white pb-[5rem] pt-[2rem] md:-mt-[20rem] -mt-[10rem]">
      <Container>
        {/* Heading Animation */}
        <motion.h1
          className="text-yellow text-[32px] text-center md:text-left md:text-[40px] font-[500] my-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
          }}
        >
          Reporting Progress
        </motion.h1>

        {/* Content Animation */}
        <motion.div
          className="flex flex-col xl:flex-row items-center justify-between gap-[3rem]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Paragraph */}
          <motion.div
            className="lg:basis-[40%] flex-basis-[50%] text-justify"
            variants={childVariants}
          >
            <p>
              Beyond numbers, we aim at making a qualitative impact in the lives
              of children. This requires sustained long-term investment in their
              education and well-being and meeting their most critical needs for
              total development
            </p>
          </motion.div>

          {/* Right Paragraph */}
          <motion.div
            className="lg:basis-[50%] flex-basis-[50%] text-justify"
            variants={childVariants}
          >
            <p className="italic font-[400] text-[24px] border-l-0 md:border-l-4 border-yellow pt-3 md:pt-0 md:px-3 border-t-4 md:border-t-0">
              “We are convinced that a change in the life of one child makes far
              bigger change for the society. this is our inspiration for a
              future of greater impact before us”
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Report;
