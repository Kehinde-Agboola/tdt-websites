'use client';
import React from 'react';
import Container from '../../_component/shared';
import Teacher from "../../../../public/assets/edu/teacher.png";
// import WritingGirl from "../../../../public/assets/scholarship/girlwriting.png";
import Image from 'next/image';
import Line from "../../../../public/assets/home/line.png";
import { Button } from '@/app/_component/atom/button';
import Link from 'next/link'; 
import { motion } from 'framer-motion';

const reports = {
  2025: "/../../../../../files/The Destiny Trust Mid-year Report 2024_.pdf",
};

// Function to open and download a file
const openAndDownloadFile = (fileUrl: string, fileName: string) => {
  const link = document.createElement('a');
  link.href = fileUrl; 
  link.download = fileName; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

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
        <div className="flex flex-col-reverse items-center justify-between gap-10 pt-10 pb-12 md:flex-row md:items-center md:gap-12 md:pt-12 md:pb-16 lg:gap-14">
          <motion.div
            className="relative w-full max-w-md shrink-0 md:max-w-[min(100%,480px)] md:flex-1 lg:max-w-[520px]"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="relative h-[500px] w-full overflow-hidden  shadow-lg ring-1 ring-black/10">
              <Image
                src={Teacher}
                alt="Teacher with children in a classroom"
                fill
               
                className="object-cover object-center"
              />
            </div>
          </motion.div>

          <motion.div
            className="w-full min-w-0 md:max-w-xl md:flex-1 md:text-left"
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Image src={Line} alt="line" className="pb-3 hidden md:block" />
            <motion.h2
              className="text-[32px] text-center md:text-left md:text-[40px] font-semibold pb-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              Reporting Progress
            </motion.h2>
            <motion.p
              className="pb-3 text-center md:text-left text-base md:text-lg text-black/90 max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              Beyond numbers, we aim for qualitative impact in the lives of children - making sustained investment in education, wellbeing and the stability they need to thrive. Explore our Impact Reports.
            </motion.p>   
            <motion.div
              className="flex flex-col items-center md:flex-row md:flex-wrap gap-4 md:gap-5 py-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              <Button
                className="btn-landing btn-landing--outline bg-transparent"
                onClick={() =>
                  openAndDownloadFile(
                    reports[2025],
                    "2024-TDT-Impact-Report.pdf"
                  )
                }
              >
                2025 Impact Reports
              </Button>
              <Link href="/impact-report-financial">
                <Button className="btn-landing btn-landing--outline bg-transparent">
                  View more
                </Button>
              </Link>
              
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
};

export default Impact;
