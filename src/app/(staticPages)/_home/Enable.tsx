"use client";
import { Button } from "../../_component/atom/button";
import React, { useState } from "react";
import Image from "next/image";
import Container from "../../_component/shared";
import { motion } from "framer-motion";
import Committed from "../../../../public/assets/home/commited.png";

const Enable = () => {
    const [amount] = useState("1000"); 
  return (
    <Container>
      <motion.div
        className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10 lg:gap-10 lg:justify-between mt-[22rem] mb-[3rem]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="lg:basis-[50%] w-full lg:text-justify"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="pb-6">
            <span className="text-black text-[2rem] leading-[3rem] md:leading-[2.5rem]">
              We are committed to
              <span className="text-[#ffb400]"> one cause: </span>
              enabling every child to be the best he or she can be regardless of
              where he or she was born.
            </span>
            {/* <p className="text-black text-[2rem]"></p> */}
          </div>
          <p className="pb-3 text-black">
            At The Destiny Trust, we are all about the wellbeing, education and
            empowerment of homeless children and other classes of young people
            in disadvantaged circumstances. We give children at-risk a new
            start, nurture them and hold their hands into the future through our
            integrated initiatives which focus mainly on using education to
            create tangible empowerment and lifting children from extreme
            poverty and conditions that hold them back.
          </p>
          <div className="flex flex-col lg:flex-row gap-4 pt-2">
            <Button className="bg-[#FFB400] text-black w-[160px] py-2">
              Join Us
            </Button>
            <a
              href={`https://paystack.com/pay/ie-pg23h4p?amount=${amount}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                type={"button"}
                className="bg-black block text-white w-[187px] px-5 py-4 border-4 border-black"
              >
                Donate
              </Button>
            </a>
          </div>
        </motion.div>
        <motion.div
          className="lg:basis-[40%] flex-basis-[50%]"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="relative h-[450px] w-full">
            <Image
              src={Committed}
              alt="Children empowerment illustration"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Enable;