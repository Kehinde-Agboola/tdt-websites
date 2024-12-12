'use client'
import React from "react";
import { motion } from "framer-motion";
import Container from "../_component/shared";
import future from "../../../public/assets/home/future.png";
import Image from "next/image";

const Future = () => {
  return (
    <motion.section
    className="bg-[#F9F9F9] my-[5rem] py-[5rem]"
    transition={{ duration: 0.5 }}
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    >
      <Container>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="pb-10 w-full md:w-[90%] ml-auto text-right text-[25px] md:text-[34px] xl:text-[64px] font-400">
            A future where more children prosper because we care.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image
            src={future}
            alt="children-with-the-desting-trust-bag h-[445px] md:h-[0]"
            width={1280}
            height={568}
          />
        </motion.div>
      </Container>
    </motion.section>
  );
};

export default Future;
