"use client";
import React from "react";
import Image from "next/image";
import { Button } from "./button";
import { motion } from "framer-motion";

type HeroPropsType = {
  heading?: string;
  heading2?: string;
  buttonText: string;
  buttonText2?: string;
  image: string; // Background image URL
  spanText?: string;
  spanText2?: string;
  subtext?: string;
};

export const HeroComponent = ({
  heading,
  heading2,
  buttonText,
  buttonText2,
  image,
  spanText,
  spanText2,
  subtext,
}: HeroPropsType) => {
  return (
    <div className="relative w-full h-[500px]">
      {/* Background Image */}
      <Image
        src={image}
        alt="Background Image"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        priority
        className="z-0"
      />


      <div className="absolute inset-0 flex items-center text-white text-center md:text-left md:pl-[4rem] pl-0 px-8 md:px-0 z-10">

          <section>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {heading}{" "}
                {spanText2 && (
                  <motion.span
                    initial={{ color: "#ffffff" }}
                    animate={{ color: "#FFBC00" }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="text-[#FFBC00]"
                  >
                    {spanText2}
                  </motion.span>
                )}
              </h1>
              <p className="text-4xl md:text-6xl font-bold mb-4">
                {spanText && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-[#FFBC00]"
                  >
                    {spanText}
                  </motion.span>
                )}
              </p>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {heading2}
              </h1>
            </motion.div>
            {subtext && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
                className="text-lg md:text-xl mb-6"
              >
                {subtext}
              </motion.p>
            )}

            <motion.div
              className="flex flex-col md:flex-row gap-6 "
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
            >
              <Button className="bg-[#FFB400] text-black px-8 py-2">
                {buttonText}
              </Button>
              {buttonText2 && (
                <Button className="transition-all ease-in-out duration-700 border border-[#FFB400] hover:bg-[#FFB400] hover:text-white text-white px-8 py-2">
                  {buttonText2}
                </Button>
              )}
            </motion.div>
          </section>
        {/* </Container> */}
      </div>
    </div>
  );
};
