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
  image,
  spanText,
  spanText2,
  subtext,
}: HeroPropsType) => {
  return (
    <div className="relative min-h-[min(100dvh,900px)] w-full bg-black">
      {/* Background Image */}
      <Image
        src={image}
        alt="Background Image"
        fill
        sizes="100vw"
        priority
        className="z-0 object-cover object-center"
      />

      <div className="absolute inset-0 z-10 flex items-center px-4 py-16 text-center text-white sm:px-6 md:px-12 md:text-left lg:pl-16">
        <section className="-leading-16 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h1 className="font-heading text-3xl leading-tight sm:text-4xl md:text-6xl mb-4">
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
            <p className="text-4xl font-semibold mb-4 md:text-6xl">
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
            <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl mb-4">{heading2}</h1>
          </motion.div>
          {subtext && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="text-[16px] mb-6"
            >
              {subtext}
            </motion.p>
          )}

          <motion.div
            className="flex flex-col gap-6 md:flex-row md:px-0 px-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
          >
            <Button className="border border-[#FFB400] text-white duration-700 ease-in-out hover:bg-[#FFB400] hover:text-white px-8 py-2 transition-all">
              {buttonText}
            </Button>
            {/* {buttonText2 && (
                <Button className="border border-[#FFB400] text-white duration-700 ease-in-out hover:bg-[#FFB400] hover:text-white px-8 py-2 transition-all">
                  {buttonText2}
                </Button>
              )} */}
          </motion.div>
        </section>
        {/* </Container> */}
      </div>
    </div>
  );
};
