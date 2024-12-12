"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Importing motion for animations
import Container from "@/app/_component/shared";
import BlcHero from "../../../../public/assets/blc/blchero.png";
import BlcLogo from "../../../../public/assets/blc/logo.png";
import BlcImage from "../../../../public/assets/blc/students.png";
import Hope from "../../../../public/assets/blc/hope.png";
import { FlexComponent } from "@/app/_component/atom/flex";
import Cards from "./Cards";
import Banner from "./Banner";

const Page = () => {
  const data2 = [
    {
      heading3: "A Story of Hope​",
      text1:
        "Meet Naomi. She is 15 years old and has never been to school. Her dream is to become a doctor and return to Chibok, her desolate homeland, to build hospitals and schools for children. Unfortunately, she cannot enroll in a nursery class and isn't ready for an age-appropriate class due to her lack of grade-level competence.",
      text2:
        "The Bridge Learning Centre exists for Naomi and countless other children like her, providing a pathway to the education they deserve and the futures they dream of.",
      imageSrc: Hope,
      buttonText: "",
    },
  ];

  const data = [
    {
      spanText2: "Education",
      heading3: " for Over-aged Out-of-School Children​",
      text1:
        "According to UNESCO, over 20 million Nigerian children are out of school. The term “out-of-school children” covers various demographics and unique circumstances, each requiring tailored interventions. Our over a decade of experience working with housing-insecure children and youths has highlighted a staggering number of children aged 10-18 who missed out on or had their education disrupted due to displacement.",
      imageSrc: BlcImage,
      buttonText: "",
    },
  ];

  return (
    <main>
      {/* Hero Section with Background and Text */}
      <section className="relative h-[90vh] w-full">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={BlcHero}
            alt="Blc hero section"
            fill
            className="object-cover object-center bg-no-repeat bg-center"
          />
        </motion.div>

        <Container>
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 text-white">
            <div className="md:text-left">
              <Image
                src={BlcLogo}
                alt="Blc logo"
                className="pb-8"
               
                
              />
              <motion.h1
                className="text-4xl md:text-5xl xl:text-[64px] leading-10 text-yellow"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Welcome to
              </motion.h1>
              <motion.h1
                className="text-4xl md:text-5xl xl:text-[64px] leading-10"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Bridge Learning Centre
              </motion.h1>
              <motion.p
                className="mt-4 text-base md:text-left w-full md:w-[48rem] pt-4 pb-8"
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
              className="bg-yellow text-black w-1/2 md:w-[10rem] mt-4 md:mt-0 px-4 py-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Work With Us
            </motion.button>
          </div>
        </Container>
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
