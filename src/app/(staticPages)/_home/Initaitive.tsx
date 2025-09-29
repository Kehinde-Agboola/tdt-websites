"use client";

import React, { useRef, useEffect } from "react";
import Container from "@/app/_component/shared";
import Education from "../../../../public/assets/home/education.png";
import Shelter from "../../../../public/assets/home/shelter.png";
import Steam from "../../../../public/assets/home/stem.png";
import Family from "../../../../public/assets/home/family.png";
import { Button } from "../../_component/atom/button";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { StaticImageData } from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type BoxProps = {
  iconSrc: string | StaticImageData;
  title: string;
  text: string;
  buttonText: string;
};

const Box: React.FC<BoxProps> = ({ iconSrc, title, text, buttonText }) => {
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
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      }}
      whileHover={{ scale: 1.05, boxShadow: "0px 8px 16px rgba(0,0,0,0.15)" }}
      transition={{ duration: 0.2 }}
      className="h-full w-full group"
    >
      <div className="p-6 bg-white border flex flex-col items-center text-center text-[14px] text-[#333333] hover:bg-[#fff7e5] transition-colors duration-300 h-full w-full">
        <Image
          src={iconSrc}
          alt="SDG Icon"
          width={54}
          height={54}
          className="object-cover pb-5"
          loading="lazy"
          quality={85}
        />
        <div className="flex flex-col items-center h-[80%]">
          <h3 className="text-[24px] font-[500] mb-2 text-black">{title}</h3>
          <p className="mb-4">{text}</p>
        </div>
        <Button
          className="bg-white text-[#333333] border-2 border-[#e5e5e5] group-hover:bg-black group-hover:text-white group-hover:border-black w-44 py-2.5 transition-colors duration-300"
          btnFlex={true}
          icon={<GoArrowRight />}
        >
          {buttonText}
        </Button>
      </div>
    </motion.div>
  );
};

const NavigationButtons: React.FC = () => {
  const swiper = useSwiper();

  return (
    <>
      <button
        onClick={() => swiper.slidePrev()}
        className="absolute left-[-2.5rem] md:left-[-3rem] top-1/2 transform -translate-y-1/2 z-10 p-2 bg-[#ffb400] hover:bg-[#e6a200] rounded-full text-black shadow-md transition-colors duration-300"
        aria-label="Previous slide"
      >
        <FaArrowLeft size={20} />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="absolute right-[-2.5rem] md:right-[-3rem] top-1/2 transform -translate-y-1/2 z-10 p-2 bg-[#ffb400] hover:bg-[#e6a200] rounded-full text-black shadow-md transition-colors duration-300"
        aria-label="Next slide"
      >
        <FaArrowRight size={20} />
      </button>
    </>
  );
};

const Initiative: React.FC = () => {
  const support = [
    {
      imgSrc: Education,
      heading: "Education Access",
      text: "We break down the barriers that prevent homeless and disadvantaged children from accessing quality education. We enroll out-of-school children, reintegrate dropouts, and provide ongoing support to ensure they stay in school and thrive.",
    },
    {
      imgSrc: Shelter,
      heading: "Shelter & Wellbeing",
      text: "We rescue children from the streets offering them a safe, loving home where they can rebuild a happy childhood, receive education, and live, learn, and play in a good environment while we work towards reintegrating them into families.",
    },
    {
      imgSrc: Steam,
      heading: "STEAM Empowerment",
      text: "We empower underprivileged kids by providing in-demand tech through our Kids Innovation initiative, focusing on STEAM to create a creative space for street children transitioning from and low-income backgrounds.",
    },
    {
      imgSrc: Family,
      heading: "Family Empowerment",
      text: "We empower underprivileged kids by providing in-demand tech through our Kids Innovation initiative, focusing on STEAM to create a creative space for street children transitioning from and low-income backgrounds.",
    },
  ];

  return (
    <Container>
      <section className="mb-10">
        <div className="text-center md:text-left">
          <p className="text-[40px] md:text-[64px] font-[400]">What We Do</p>
          <p className="text-[14px] md:text-[16px] text-[#555555] md:w-[45rem]">
            Our initiatives support the overall development of children,
            ensuring we are always there for them where they need us the most.
          </p>
        </div>
        <div className="relative mt-10 px-2 md:px-12">
          <Swiper
            modules={[Navigation, Pagination, Keyboard]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            keyboard={{ enabled: true }}
            grabCursor={true}
            className="pb-12"
          >
            {support.map((box, index) => (
              <SwiperSlide key={index}>
                <Box
                  iconSrc={box.imgSrc}
                  title={box.heading}
                  text={box.text}
                  buttonText="Read More"
                />
              </SwiperSlide>
            ))}
            <NavigationButtons />
          </Swiper>
        </div>
        <style jsx global>{`
          .swiper-pagination-bullet {
            background: #ffb400 !important;
            opacity: 0.7 !important;
          }
          .swiper-pagination-bullet-active {
            background: #ffb400 !important;
            opacity: 1 !important;
            transform: scale(1.2);
          }
        `}</style>
      </section>
    </Container>
  );
};

export default Initiative;
