'use client'
import React from "react";
import Container from "@/app/_component/shared";
import ActionButtons from "./Button";
import { motion } from "framer-motion";

const Empower = () => {
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="max-w-7xl mx-auto">
      <section className="bg-payment bg-cover bg-no-repeat bg-yellow py-[4rem]">
        <Container>
          <motion.section
            className="flex flex-col md:flex-row justify-center md:justify-between"
            variants={textContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              className="text-[40px] font-[400]"
              variants={textItemVariants}
            >
              Empower Their Dreams
            </motion.p>
            <motion.div
              className="flex flex-col md:flex-row gap-4 justify-center"
              variants={textItemVariants}
            >
              <ActionButtons/>
            </motion.div>
          </motion.section>
        </Container>
      </section>
    </section>
  );
};

export default Empower;
