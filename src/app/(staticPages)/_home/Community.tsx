'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Communiti from "../../../../public/assets/home/communities.jpg"
import Container from "@/app/_component/shared";
import { Button } from "@/app/_component/atom/button";

const Community = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main>
      <section className="h-screen w-full relative">
        {/* Background Image with Framer Motion for slight movement */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <Image
            src={Communiti}
            alt="Our Team"
            fill
            className="object-cover object-center bg-no-repeat"
          />
        </motion.div>
        <section className="absolute inset-0 text-white">
          <Container>
            <motion.div
              className="flex flex-col justify-center  pt-[4rem]"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.p
                className="text-[40px] md:text-[64px] font-[400]"
                variants={itemVariants}
              >
                Join Our <span className="text-yellow">Community</span>
              </motion.p>
              <motion.p
                className="w-full md:w-[682px]"
                variants={itemVariants}
              >
                It takes a community to raise a child. Be part of the caring
                community donating to give hope to children.
              </motion.p>
              <motion.div variants={itemVariants}>
                <Button className="mt-4 bg-black text-white w-[224px] mx-auto py-2">
                  Become a Volunteer
                </Button>
              </motion.div>
            </motion.div>
          </Container>
        </section>
      </section>
    </main>
  );
};

export default Community;
