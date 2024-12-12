'use client'
import React from "react";
import Pic1 from "../../../public/assets/home/pic1.png";
import Pic2 from "../../../public/assets/home/pic2.png";
import Pic3 from "../../../public/assets/home/pic3.png";
import Pic4 from "../../../public/assets/home/pic4.png";
import Container from "@/app/_component/shared";
import { Button } from "../_component/atom/button";
import Image from "next/image";
import { motion } from "framer-motion";

const Empower = () => {
  // Animation Variants
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

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
      <div className="grid grid-cols-2 sm:grid-cols-4 w-full">
        {[Pic1, Pic2, Pic3, Pic4].map((pic, index) => (
          <motion.div
            key={index}
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Image
              src={pic}
              alt={`school children ${index + 1}`}
              objectFit="cover"
            />
          </motion.div>
        ))}
      </div>
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
              <Button className="border-2 border-black w-full md:w-[238px] mx-auto md:py-2 py-4">
                Sponsor a Scholarship
              </Button>
              <Button className="bg-black text-white w-full md:w-[187px] mx-auto md:py-2 py-4">
                Sponsor a Child
              </Button>
            </motion.div>
          </motion.section>
        </Container>
      </section>
    </section>
  );
};

export default Empower;
