"use client";

import React from "react";
import Link from "next/link";
import Container from "@/app/_component/shared";
import { motion } from "framer-motion";
// import { Container } from "@/app/_component/ui/container";
const SustainableEducationCTA = () => {
  return (
    <Container>
      <section
        aria-labelledby="sustainable-education-heading"
        className="bg-yellow bg-payment border-y border-[#FFB400]/30 py-16 md:py-20"
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

            {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 md:mt-12">
            <a
              href="https://paystack.shop/pay/1000Hands"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-4 rounded-md"
            >
              Donate
            </a>
            <a
              href="/get-involve"
              className="bg-yellow text-black px-8 py-4 rounded-md"
            >
              Partner With Us
            </a>
          </div> */}
            <motion.div
              className="mt-8 flex w-full flex-col justify-center items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center sm:gap-6"
              // variants={fadeUpVariant}
              custom={0.55}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Link
                href="/get-involve"
                className="btn-landing bg-black hover:bg-black/90 text-center text-white transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97]"
              >
                Get Involved
              </Link>
              <a
                href="https://paystack.shop/pay/1000Hands"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-landing border-2 border-black hover:bg-black hover:text-white text-center text-black transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97]"
              >
                Donate
              </a>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </Container>
  );
};

export default SustainableEducationCTA;
