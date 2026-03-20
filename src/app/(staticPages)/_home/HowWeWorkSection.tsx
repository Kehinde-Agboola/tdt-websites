"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Container from "@/app/_component/shared";
import { motion } from "framer-motion";
import Education from "../../../../public/assets/home/education.png";
import Shelter from "../../../../public/assets/home/shelter.png";
import Steam from "../../../../public/assets/home/stem.png";

type Pillar = {
  icon: StaticImageData;
  title: string;
  body: string;
};

const pillars: Pillar[] = [
  {
    icon: Education,
    title: "Education",
    body:
      "Expanding access to quality education, accelerating learning, and delivering digital education at scale to help children return, catch up, and succeed.",
  },
  {
    icon: Shelter,
    title: "Wellbeing",
    body:
      "Shelter, care, healthcare, nutrition, and supported independent living—creating the stability children need to go through school.",
  },
  {
    icon: Steam,
    title: "Skills & Empowerment",
    body:
      "Digital and creative skills, and family empowerment—equipping children and their families for independence and long-term success.",
  },
];

const HowWeWorkSection = () => {
  return (
    <section className="bg-[#F4F4F4] py-16 md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl mx-auto text-center  mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-black mb-6">
            How We Work
          </h2>
          <p className="text-base md:text-lg text-[#333] leading-relaxed mb-5">
            We build integrated systems around each child—creating the stability
            required for learning to begin and be sustained.
          </p>
          <p className="text-base md:text-lg text-[#333] leading-relaxed mb-5 font-medium">
            Because when the system works for the child, education works.
          </p>
          <p className="text-base md:text-lg text-[#333] leading-relaxed mb-5">
            Our model goes beyond access to school—ensuring children have the
            stability, support, and opportunity they need to succeed. We place a
            deliberate focus on inclusion, targeting at least 60% girls, who
            are disproportionately affected by barriers to education.
          </p>
          <p className="text-base md:text-lg text-[#333] leading-relaxed">
            By integrating education, wellbeing, and skills, we support each
            child&apos;s journey to lifelong fulfillment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white p-6 md:p-8 shadow-sm border border-black/5 flex flex-col items-center text-center h-full"
            >
              <div className="flex justify-center mb-5">
                <Image
                  src={p.icon}
                  alt=""
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">{p.title}</h3>
              <p className="text-sm md:text-[15px] leading-relaxed text-[#444] flex-1">
                {p.body}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <Link
            href="/whatwedo"
            className="inline-flex items-center justify-center bg-black text-white min-h-[48px] px-10 text-sm font-medium tracking-wide hover:bg-[#222] transition-colors duration-200"
          >
            LEARN MORE
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

export default HowWeWorkSection;
