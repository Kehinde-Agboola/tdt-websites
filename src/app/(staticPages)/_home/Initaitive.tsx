"use client";

import React, { useRef, useEffect } from "react";
import Container from "@/app/_component/shared";
import Education from "../../../../public/assets/home/education.png";
import Shelter from "../../../../public/assets/home/shelter.png";
import Steam from "../../../../public/assets/home/stem.png";
import Family from "../../../../public/assets/home/family.png";
import { Button } from "../../_component/atom/button";
import Image, { StaticImageData } from "next/image";
import { GoArrowRight } from "react-icons/go";
import { motion, useAnimation, useInView, useReducedMotion } from "framer-motion";
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
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [controls, isInView]);

  const variants = reduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2 } },
      }
    : {
        hidden: { opacity: 0, y: 8 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.28, ease: "easeOut" },
        },
      };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="h-full w-full"
    >
      <div
        className="
          group h-full w-full rounded-lg border bg-white
          p-6 text-center text-[14px] text-[#333]
          shadow-sm transition-all duration-200
          hover:bg-[#fff7e5] hover:-translate-y-[2px] hover:scale-[1.01]
        "
      >
        {/* Centered icon */}
        <div className="flex justify-center mb-5">
          <Image
            src={iconSrc}
            alt="SDG Icon"
            width={54}
            height={54}
            className="object-cover"
            loading="lazy"
            quality={85}
          />
        </div>

        {/* Content */}
        <div className="flex flex-col items-center justify-between h-[80%]">
          <h3 className="mb-2 text-[22px] font-[600] text-black">{title}</h3>
          <p className="mb-6 text-[14px] leading-relaxed text-[#333]">{text}</p>

          {/* Centered button */}
          <div className="flex justify-center">
            <Button
              className="
                w-44  border-2 border-[#e5e5e5] bg-white py-2.5 text-[#333]
                transition-colors duration-200
                group-hover:border-black group-hover:bg-black group-hover:text-white
              "
              btnFlex
              icon={<GoArrowRight />}
            >
              {buttonText}
            </Button>
          </div>
        </div>
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
        className="absolute left-[-2.2rem] md:left-[-2.8rem] top-1/2 -translate-y-1/2 z-10  bg-[#ffb400] p-2 text-black shadow-md transition-colors hover:bg-[#e6a200]"
        aria-label="Previous slide"
      >
        <FaArrowLeft size={18} />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="absolute right-[-2.2rem] md:right-[-2.8rem] top-1/2 -translate-y-1/2 z-10  bg-[#ffb400] p-2 text-black shadow-md transition-colors hover:bg-[#e6a200]"
        aria-label="Next slide"
      >
        <FaArrowRight size={18} />
      </button>
    </>
  );
};

const Initiative: React.FC = () => {
  const support = [
    {
      imgSrc: Education,
      heading: "Education Access",
      text:
        "We break down the barriers that prevent homeless and disadvantaged children from accessing quality education. We enroll out-of-school children, reintegrate dropouts, and provide ongoing support to ensure they stay in school and thrive.",
    },
    {
      imgSrc: Shelter,
      heading: "Shelter & Wellbeing",
      text:
        "We rescue children from the streets offering them a safe, loving home where they can rebuild a happy childhood, receive education, and live, learn, and play in a good environment while we work towards reintegrating them into families.",
    },
    {
      imgSrc: Steam,
      heading: "STEAM Empowerment",
      text:
        "We empower underprivileged kids by providing in-demand tech through our Kids Innovation initiative, focusing on STEAM to create a creative space for street children transitioning from and low-income backgrounds.",
    },
    {
      imgSrc: Family,
      heading: "Family Empowerment",
      text:
        "We empower underprivileged kids by providing in-demand tech through our Kids Innovation initiative, focusing on STEAM to create a creative space for street children transitioning from and low-income backgrounds.",
    },
  ];

  return (
    <Container>
      <section className="mb-10">
        <div className="text-center md:text-left">
          <p className="text-[36px] md:text-[56px] font-[500] leading-tight">What We Do</p>
          <p className="text-[14px] md:text-[16px] text-[#555] md:w-[45rem]">
            Our initiatives support the overall development of children,
            ensuring we are always there for them where they need us the most.
          </p>
        </div>

        <div className="relative mt-10 px-2 md:px-12">
          <Swiper
            modules={[Navigation, Pagination, Keyboard]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            pagination={{ clickable: true }}
            keyboard={{ enabled: true }}
            grabCursor
            className="pb-12"
          >
            {support.map((box) => (
              <SwiperSlide key={box.heading}>
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
            transform: scale(1.1);
          }
        `}</style>
      </section>
    </Container>
  );
};

export default Initiative;
