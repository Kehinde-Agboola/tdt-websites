"use client";

import React from "react";
import Link from "next/link";
import Container from "@/app/_component/shared";
import { motion } from "framer-motion";

const teasers = [
  {
    kicker: "About us",
    title: "Who We Are",
    body:
      "We are a people who say no to the barriers that hold children back—homelessness, hunger, illiteracy, poverty, abuse, and neglect—and yes to possibility, dignity, and opportunity.",
    href: "/whoweare/about-us",
    cta: "About us",
  },
  {
    kicker: "Our work",
    title: "Beyond Education",
    body:
      "Access to school is not enough for a child who is hungry, homeless, or traumatised. Our model integrates education, wellbeing, and skills to deliver sustainable transformation—not temporary relief.",
    href: "/whoweare",
    cta: "Our work",
  },
  {
    kicker: "Get involved",
    title: "Give. Sponsor. Partner.",
    body:
      "Give. Sponsor. Partner. Volunteer. Advocate. Nigeria’s education crisis is vast, but change is within reach when we act together.",
    href: "/get-involve",
    cta: "Get involved",
  },
];

const HomeTeasers = () => {
  return (
    <section className="bg-white py-16 md:py-24 border-t border-black/10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
          {teasers.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="flex flex-col h-full"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-[#FFB400] mb-2">
                {t.kicker}
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                {t.title}
              </h2>
              <p className="text-[15px] md:text-base text-[#444] leading-relaxed flex-1 mb-6">
                {t.body}
              </p>
              <Link
                href={t.href}
                className="inline-flex w-fit items-center text-sm font-medium border-b-2 border-black pb-0.5 hover:text-[#FFB400] hover:border-[#FFB400] transition-colors duration-200"
              >
                {t.cta} →
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HomeTeasers;
