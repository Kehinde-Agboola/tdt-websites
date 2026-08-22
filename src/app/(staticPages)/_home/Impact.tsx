'use client';
import React from 'react';
import Container from '../../_component/shared';
import Teacher from "../../../../public/assets/edu/teacherbg.png";
import Image from 'next/image';
import Line from "../../../../public/assets/home/line.png";
import Link from 'next/link'; 
import { motion } from 'framer-motion';

const BLOB_BASE = process.env.NEXT_PUBLIC_BLOB_BASE_URL ?? "";
const fileUrl = (name: string) =>
  BLOB_BASE
    ? `${BLOB_BASE}/${encodeURIComponent(name)}`
    : `/files/${encodeURIComponent(name)}`;

const report2026 = fileUrl(
  "The Destiny Trust Mid-Year Report 2026 _20260724_131212_0000.pdf"
);

const Impact = () => {
  return (
    <motion.section
      className="bg-payment bg-[#FFB400] overflow-x-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <Container>
        <div className="flex flex-col-reverse items-center justify-between gap-8 px-0 pt-8  sm:gap-10 md:flex-row md:items-center md:gap-12 md:px-0 md:pt-12 md:pb-0 lg:gap-14">
          <motion.div
            className="relative w-full max-w-md shrink-0 md:max-w-[min(100%,480px)] md:flex-1 lg:max-w-[520px]"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          > 
            <div className="relative h-[min(88vw,400px)] min-h-[260px] w-full overflow-hidden rounded-lg sm:min-h-[300px] md:h-[500px] md:min-h-0 md:rounded-none">
              <Image
                src={Teacher}
                alt="Teacher with children in a classroom"
                fill
                sizes="(max-width: 768px) 100vw, 520px"
                className="object-cover object-center"
              />
            </div>
          </motion.div>

          <motion.div
            className="w-full min-w-0 px-1 md:max-w-xl md:flex-1 md:px-0 md:text-left"
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Image src={Line} alt="line" className="pb-3 hidden md:block" />
            <motion.h2
              className="pb-3 text-center text-[1.65rem] font-semibold leading-tight sm:text-[32px] md:text-left md:text-[40px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              Reporting Progress
            </motion.h2>
            <motion.p
              className="mx-auto max-w-xl pb-3 text-center text-base leading-relaxed text-black/90 md:mx-0 md:text-left md:text-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              Beyond numbers, we aim for qualitative impact in the lives of children - making sustained investment in education, wellbeing and the stability they need to thrive. Explore our Impact Reports.
            </motion.p>   
            <motion.div
              className="flex w-full max-w-md flex-col items-stretch gap-3 py-4 sm:mx-auto sm:max-w-sm md:mx-0 md:max-w-none md:flex-row md:flex-wrap md:items-center md:gap-5"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              <a
                href={report2026}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-landing btn-landing--outline inline-flex !w-full min-h-[48px] min-w-0 select-none items-center justify-center bg-transparent px-6 text-center text-sm font-medium transition-all duration-200 ease-out will-change-transform hover:-translate-y-0.5 hover:bg-black hover:text-white active:translate-y-0 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB400] focus-visible:ring-offset-2 md:!w-auto md:shrink-0"
              >
                2026 Mid-Year Report
              </a>
              <Link
                href="/impact-report-financial"
                className="btn-landing btn-landing--outline inline-flex !w-full min-h-[48px] min-w-0 select-none items-center justify-center bg-transparent px-6 text-center text-sm font-medium transition-all duration-200 ease-out will-change-transform hover:-translate-y-0.5 hover:bg-black hover:text-white active:translate-y-0 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB400] focus-visible:ring-offset-2 md:!w-auto md:shrink-0"
              >
                View more
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
};

export default Impact;

