"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Importing motion for animations
import Container from "@/app/_component/shared";
import BlcHero from "../../../../../public/assets/blc/blchero.png";
import BlcLogo from "../../../../../public/assets/blc/logo.png";
import BlcImage from "../../../../../public/assets/blc/students.png";
import Hope from "../../../../../public/assets/blc/ajoke.jpg";
import { FlexComponent } from "@/app/_component/atom/flex";
import Cards from "./Cards";
import Banner from "./Banner";

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
      {/* Hero Section with Background and Text */}
      <section className="relative min-h-[min(100dvh,880px)] w-full overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={BlcHero}
            alt="Bridge Learning Centre hero"
            fill
            sizes="100vw"
            priority
            className="object-cover object-right sm:object-center"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 flex min-h-[min(100dvh,880px)] flex-col justify-center px-4 py-16 sm:px-6 md:px-12 lg:px-16">
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
        </div>
      </section>

      {/* First Content Section */}
      <section className="py-4 md:py-[4rem] mt-[4rem] bg-scholar">
        <FlexComponent data={data} columnReversed={false} buttonClassName="" />
      </section>

      {/* Empower their Dreams Section */}
      <Container>
        <section className="bg-black bg-payment mb-[5rem]">
          <div className="py-8 px-8 flex flex-col md:flex-row justify-between items-center">
            <motion.h2
              className="text-center text-2xl md:text-[40px] mb-4 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Empower their Dreams
            </motion.h2>
            <div className="text-center md:text-right flex flex-col md:flex-row gap-4">
              <button className="border-2 border-yellow text-white w-full md:w-[15rem] py-2 px-4">
                Sponsor a Scholarship
              </button>
              <button className="bg-yellow text-white w-full md:w-[15rem] mt-4 md:mt-0 px-4 py-2 md:px-0 md:py-0">
                Sponsor a Child
              </button>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section>
          <Cards />
        </section>
      </Container>

      {/* Banner Section */}
      <Banner />

      {/* Second Content Section */}
      <section className="py-4 md:py-[4rem] mt-[4rem] bg-scholar">
        <FlexComponent data={data2} columnReversed={true} buttonClassName="" />
      </section>

      {/* Empower their Dreams Section (Second) */}
      <section className="bg-yellow bg-payment mb-[8rem]">
        <div className="py-8 px-8 flex flex-col md:flex-row justify-between items-center">
          <motion.h2
            className="text-center text-2xl md:text-[40px] mb-4 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Empower their Dreams
          </motion.h2>
          <div className="text-center md:text-right flex flex-col md:flex-row gap-4">
            <button className="border-2 border-black text-white w-full md:w-[15rem] py-2 px-4">
              Sponsor a Scholarship
            </button>
            <button className="bg-black text-white w-full md:w-[15rem] mt-4 md:mt-0 px-4 py-2 md:px-0 md:py-0">
              Sponsor a Child
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
