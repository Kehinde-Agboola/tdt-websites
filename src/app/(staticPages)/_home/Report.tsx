"use client";

import React from "react";
import Link from "next/link";
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
    <section className="relative bg-white pb-[5rem] pt-12 md:pt-16">
      <Container>
        {/* Heading Animation */}
        {/* <motion.h1
          className="text-yellow text-[32px] text-center md:text-left md:text-[40px] font-[500] my-8"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Reporting progress
        </motion.h1> */}

        {/* Impact quote + CTAs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div
            variants={childVariants}
            className="relative bg-white p-8 md:p-10 lg:p-12"
          >
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
              <div className="min-w-0 flex-1 text-left">
               
                <blockquote
                  id="report-impact-quote"
                  className="border-l-4 border-[#FFB400] pl-4 text-xl font-medium leading-snug text-[#1a1a1a] md:text-2xl md:leading-relaxed"
                >
                  &ldquo;Investing in children is investing in the future we all
                  share.&rdquo;
                </blockquote>
              </div>

              {/* Button order + styles aligned with SustainableEducationCTA */}
              <div className="flex w-full shrink-0 flex-col gap-4 sm:flex-row sm:justify-end lg:w-auto lg:gap-4">
                <Link
                  href="/get-involve"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-landing btn-landing--primary"
                >
                Take Action With Us
                </Link>
                <Link
                  href="https://paystack.shop/pay/1000Hands"
                  className="btn-landing btn-landing--outline"
                >
                  Donate
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Report;
