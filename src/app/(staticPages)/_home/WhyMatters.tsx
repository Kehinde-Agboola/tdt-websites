"use client";

import React from "react";
import Container from "@/app/_component/shared";
import { motion } from "framer-motion";

const WhyMatters = () => {
  return (
    <section className="bg-[#0a0a0a] text-white py-16 md:py-24 mt-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-[#FFBC00] mb-8">
            Why This Matters
          </h2>
          <p className="text-base md:text-lg text-white/90 leading-relaxed mb-6">
            Across Nigeria, millions of children remain out of school—not simply
            because classrooms are unavailable, but because the conditions
            required for learning do not exist.
          </p>

          <p className="text-base md:text-lg text-white/90 leading-relaxed mb-6">
            For many children, daily survival is uncertain, defined by
            homelessness, hunger, abuse, displacement, and extreme poverty. In
            these conditions, access to school alone is not enough. Together, we
            can confront the problems that keep children out of school,
            providing the stability and support needed for learning to begin and
            be sustained; and delivering sustainable solutions to reach that one
            child left out of school.
          </p>
        <p className="text-xl md:text-2xl font-medium text-white leading-snug border-l-4 border-[#FFBC00] pl-5 md:pl-6 mt-10">
          Together, we can confront the problems that keep children out of
          school, providing the stability and support needed for learning to
          begin and be sustained; and delivering sustainable solutions to reach
          that one child left out of school.
        </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default WhyMatters;
