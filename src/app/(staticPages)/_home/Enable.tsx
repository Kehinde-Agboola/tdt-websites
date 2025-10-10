"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "../../_component/atom/button";
import Container from "../../_component/shared";
import { motion, useAnimation, useInView } from "framer-motion";
import Committed from "../../../../public/assets/home/commited.png";
// import DonationModal from "@/app/_component/ui/DonationModal";
// import { useModal } from "@/app/_component/ui/useModal";

// Animation variants
const variants = {
  container: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  },
  text: {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  },
  image: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },
  button: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  },
};

const Enable: React.FC = () => {
  const [amount] = useState("1000");
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: false, // Replay animations on scroll
    margin: "0px 0px -100px 0px", // Trigger slightly before fully in view
  });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // Reset animations when out of view
    }
  }, [controls, isInView]);

  return (
    <Container>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants.container}
        className="flex flex-col-reverse lg:flex-row justify-center items-center gap-8 lg:gap-12 py-16 px-2 md:px-0"
      >
        <motion.div
          variants={variants.text}
          className="w-full lg:w-1/2 text-justify"
        >
          <div className="pb-6">
            <span className="text-black text-[1.6rem] md:text-[2rem] leading-[2rem] md:leading-[2.5rem]">
              We are committed to
              <span className="text-[#ffb400]"> one cause: </span>
              enabling every child to be the best he or she can be regardless of
              where he or she was born.
            </span>
          </div>
          <p className="pb-3 text-black">
            At <span className="font-bold">The Destiny Trust</span>, we are all about the wellbeing, education and
            empowerment of homeless children and other classes of young people
            in disadvantaged circumstances. We give children at-risk a new
            start, nurture them and hold their hands into the future through our
            integrated initiatives which focus mainly on using education to
            create tangible empowerment and lifting children from extreme
            poverty and conditions that hold them back.
          </p>
          <motion.div
            variants={variants.button}
            className="flex flex-col lg:flex-row gap-4 pt-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button className="bg-[#ffb400] hover:bg-[#e6a200] text-black w-full sm:w-40 py-4  transition-colors duration-200">
                Join Us
              </Button>
            </motion.div>
            <motion.a
              href={`https://paystack.com/pay/ie-pg23h4p?amount=${amount}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="button"
                className="bg-black hover:bg-gray-800 text-white w-full sm:w-44 py-4 border-2 border-black hover:border-gray-800  transition-colors duration-200"
              >
                Donate
              </Button>
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          variants={variants.image}
          className="w-full lg:w-5/12"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[450px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={Committed}
              alt="Children empowerment illustration"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
              loading="lazy"
              quality={85}
            />
          </div>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Enable;
