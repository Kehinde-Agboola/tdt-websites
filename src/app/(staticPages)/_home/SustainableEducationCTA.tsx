"use client";

import React from "react";
import Link from "next/link";
import Container from "@/app/_component/shared";
import { motion } from "framer-motion";

const SustainableEducationCTA = () => {
  return (
    <section
      aria-labelledby="sustainable-education-heading"
      className="bg-[#fff8e8] border-y border-[#FFB400]/30 py-16 md:py-20"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center px-2"
        >
          <h2 id="sustainable-education-heading" className="sr-only">
            Sustainable education
          </h2>
          <blockquote className="text-xl md:text-2xl lg:text-[1.65rem] font-medium text-[#1a1a1a] leading-snug md:leading-relaxed">
            &ldquo;Sustainable education goes beyond access to school—it is
            built on systems that support wellbeing and stability.&rdquo;
          </blockquote>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 md:mt-12">
            <a
              href="#donate"
              className="inline-flex w-full sm:w-auto min-w-[200px] items-center justify-center bg-[#ffb400] hover:bg-[#e6a200] text-black min-h-[48px] px-8 text-sm font-medium transition-colors duration-200"
            >
              Donate Now
            </a>
            <Link
              href="/get-involve"
              className="inline-flex w-full sm:w-auto min-w-[200px] items-center justify-center border-2 border-black text-black min-h-[48px] px-8 text-sm font-medium hover:bg-black hover:text-white transition-colors duration-200"
            >
              Partner With Us
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default SustainableEducationCTA;
