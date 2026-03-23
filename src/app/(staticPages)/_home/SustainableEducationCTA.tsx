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
              href="https://paystack.shop/pay/1000Hands"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-landing btn-landing--primary"
            >
              Donate
            </a>
            <Link
              href="/get-involve"
              className="btn-landing btn-landing--outline"
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
