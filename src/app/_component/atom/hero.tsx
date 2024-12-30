"use client";
import React from "react";
import Container from "../shared";
import { Button } from "./button";
import { motion } from "framer-motion";

type HeroPropsType = {
  heading?: string;
  heading2?: string;
  buttonText: string;
  buttonText2?: string;
  image?: string; // Pass the image URL here
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
    <div
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }} // Use the image prop
    >
      <div className="absolute inset-0 bg-black/50" /> {/* Optional overlay */}
      <Container>
        <section className="relative text-white pt-[4rem] xl:pt-[8rem]">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h1 className="text-4xl leading-6 text-center md:text-left md:text-6xl font-bold mb-4">
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
            <p className="text-4xl leading-6 text-center md:text-left md:text-6xl font-bold mb-4">
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
            <h1 className="text-4xl leading-6 text-center md:text-left md:text-6xl font-bold mb-4">
              {heading2}
            </h1>
          </motion.div>
          {subtext && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="text-lg md:text-xl mb-6 text-center md:text-left"
            >
              {subtext}
            </motion.p>
          )}

          <motion.div
            className="flex flex-col md:flex-row gap-6"
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
      </Container>
    </div>
  );
};
