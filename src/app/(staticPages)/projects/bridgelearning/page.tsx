"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Importing motion for animations
import PageHero from "@/app/_component/PageHero";
import Container from "@/app/_component/shared";
import BlcHero from "../../../../../public/assets/blc/blchero.png";
import BlcLogo from "../../../../../public/assets/blc/logo.png";
import BlcImage from "../../../../../public/assets/blc/students.png";
import Hope from "../../../../../public/assets/blc/ajoke.jpg";
import { FlexComponent } from "@/app/_component/atom/flex";
import Cards from "./Cards";
import Banner from "./Banner";
import { AnimatedSection } from "@/components/AnimatedSection";
import { staggerDelay } from "@/lib/motion";

const Page = () => {
  const data2 = [
    {
      heading3: "Mariah - From the Sreet to School​",
      text1:
        "At 16, Mariah had never been to school, moving between relatives who couldn’t support her education and back to the streets. By the time we met  her  during  our  school  enrollment drive,  she  believed  her  chance  at education had passed. She thought no school would accept a 16-year-old into nursery class.",
      text2:
        "At  our  BridgeLearning  Centre,  she  found  a  place among peers  her age.  Despite  having no  prior  schooling,  Ajoke  is  catching up  at  an  impressive  rate,  even out pacing  some  peers  with  previous experience.  With  access  to  digital learning afterschool, she is on track to integrate  into  secondary  school, proving it’s never too late to start.",
      imageSrc: Hope,
      buttonText: "",
    },
  ];

  const data = [
    {
      spanText2: "Education",
      heading3: " for Over-aged Out-of-School Children​",
      text1:
        "According to UNICEF, over 18.3 million Nigerian children are out of school. The term “out-of-school children” covers various demographics and unique circumstances, each requiring tailored interventions. Our over a decade of experience working with housing-insecure children and youths has highlighted a staggering number of children aged 10-18 who missed out on or had their education disrupted due to displacement.",
      imageSrc: BlcImage,
      buttonText: "",
    },
  ];

  return (
    <main>
      <AnimatedSection animateOnMount>
      <PageHero
        image={BlcHero}
        alt="Bridge Learning Centre"
        layout="left"
        imageClassName="object-cover object-right md:object-center"
        priority
      >
        <div className="mx-auto w-full max-w-6xl text-white md:text-left">
          <div className="text-center md:text-left">
            <Image
              src={BlcLogo}
              alt="Bridge Learning Centre logo"
              width={200}
              height={80}
              className="mx-auto pb-6 h-auto w-[min(200px,70vw)] md:mx-0 md:pb-8"
            />
            <motion.h1
              className="font-heading text-3xl leading-tight text-yellow sm:text-4xl md:text-5xl xl:text-[64px]"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Welcome to
            </motion.h1>
            <motion.h1
              className="font-heading mt-1 text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-[64px]"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Bridge Learning Centre
            </motion.h1>
            <motion.p
              className="mt-4 max-w-full pt-2 pb-6 text-base leading-relaxed sm:text-lg md:max-w-[48rem] md:pt-4 md:pb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              At the Bridge Learning Centre, we run Nigeria’s first structured
              accelerated education school, providing an alternative and
              bespoke education pathway that meets the unique needs of
              over-age children.
            </motion.p>
          </div>
          <motion.button
            type="button"
            className="mt-2 w-full max-w-xs rounded bg-yellow px-4 py-3 text-center text-sm font-medium text-black sm:w-auto md:mt-0 md:max-w-none md:px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Work With Us
          </motion.button>
        </div>
      </PageHero>
      </AnimatedSection>

      {/* First Content Section */}
      <AnimatedSection
        as="section"
        className="py-4 md:py-[4rem] mt-[4rem] bg-scholar"
        delay={staggerDelay(0)}
      >
        <FlexComponent data={data} columnReversed={false} buttonClassName="" />
      </AnimatedSection>

      {/* Empower their Dreams Section */}
      <Container>
        <AnimatedSection
          as="section"
          className="mb-[5rem] bg-black bg-payment"
          delay={staggerDelay(1)}
        >
          <div className="flex flex-col items-center justify-between px-8 py-8 md:flex-row">
            <motion.h2
              className="mb-4 text-center text-2xl text-white md:text-[40px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Empower their Dreams
            </motion.h2>
            <div className="flex flex-col gap-4 text-center md:flex-row md:text-right">
              <button className="w-full border-2 border-yellow py-2 px-4 text-white md:w-[15rem]">
                Sponsor a Scholarship
              </button>
              <button className="mt-4 w-full bg-yellow py-2 px-4 text-white md:mt-0 md:w-[15rem] md:px-0 md:py-0">
                Sponsor a Child
              </button>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection as="section" delay={staggerDelay(2)}>
          <Cards />
        </AnimatedSection>
      </Container>

      <AnimatedSection delay={staggerDelay(3)}>
        <Banner />
      </AnimatedSection>

      <AnimatedSection
        as="section"
        className="mt-[4rem] bg-scholar py-4 md:py-[4rem]"
        delay={staggerDelay(4)}
      >
        <FlexComponent data={data2} columnReversed={true} buttonClassName="" />
      </AnimatedSection>

      <AnimatedSection
        as="section"
        className="mb-[8rem] bg-yellow bg-payment"
        delay={staggerDelay(5)}
      >
        <div className="flex flex-col items-center justify-between px-8 py-8 md:flex-row">
          <motion.h2
            className="mb-4 text-center text-2xl text-white md:text-[40px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Empower their Dreams
          </motion.h2>
          <div className="flex flex-col gap-4 text-center md:flex-row md:text-right">
            <button className="w-full border-2 border-black py-2 px-4 text-white md:w-[15rem]">
              Sponsor a Scholarship
            </button>
            <button className="mt-4 w-full bg-black py-2 px-4 text-white md:mt-0 md:w-[15rem] md:px-0 md:py-0">
              Sponsor a Child
            </button>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
};

export default Page;
