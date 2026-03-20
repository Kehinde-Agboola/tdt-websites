"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Container from "@/app/_component/shared";
import { motion, useAnimation, useInView } from "framer-motion";
import Committed from "../../../../public/assets/home/commited.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
        staggerChildren: 0.15,
      },
    },
  },
  text: {
    hidden: { opacity: 0, x: -16 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" } },
  },
  image: {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  },
};

const MissionQuote = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "0px 0px -100px 0px" });

  useEffect(() => {
    if (isInView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, isInView]);

  return (
    <Container>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants.container}
        className="flex flex-col-reverse lg:flex-row justify-center items-start gap-10 lg:gap-14 py-16 md:py-20 px-2 md:px-0"
      >
        <motion.div
          variants={variants.text}
          className="w-full lg:w-1/2 space-y-5 text-[#222]"
        >
          <p className="text-base md:text-lg leading-relaxed text-justify md:text-left">
            The Destiny Trust secures access to quality education for
            Nigeria&apos;s most vulnerable children—those who are homeless,
            displaced, migrant, or living in informal and low-resource
            communities, often excluded from opportunity.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-justify md:text-left">
            We bring children back into school and position education as a
            pathway to tangible empowerment. This is not temporary relief—it is
            a sustained commitment to each child, supporting their learning
            journey and enabling them to rise beyond the conditions that limit
            their potential.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-justify md:text-left">
            By integrating education with care and skills development, we enable
            children to succeed and build sustainable futures.
          </p>
          <Link href="/get-involve">
                <Button className="w-[200px] rounded-none border-2 border-black bg-black text-white py-6 mt-4 hover:bg-black/90">
                  Get Involved
                </Button>
              </Link>
        </motion.div>

        <motion.div
          variants={variants.image}
          className="w-full lg:w-5/12 shrink-0"
        >
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[420px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={Committed}
              alt="Children supported by The Destiny Trust"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
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

export default MissionQuote;
