"use client";

import React, { useRef, useEffect, useState } from "react";
import Container from "@/app/_component/shared";
import Education from "../../../../public/assets/home/education.png";
import Shelter from "../../../../public/assets/home/shelter.png";
import Steam from "../../../../public/assets/home/stem.png";
import Family from "../../../../public/assets/home/family.png";
import { Button } from "../../_component/atom/button";
import Image, { StaticImageData } from "next/image";
import { GoArrowRight } from "react-icons/go";
import { motion, useAnimation, useInView, useReducedMotion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { Navigation, Keyboard } from "swiper/modules";
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
          group h-full w-full  bg-white
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
                w-44  border border-[#e5e5e5] bg-white py-2.5 text-[#333]
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


// Navigation buttons are rendered below the swiper (centered) instead of
// using absolute side buttons.

const Initiative: React.FC = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

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
          {/* capture swiper instance so we can control it from custom controls */}
          <Swiper
            modules={[Navigation, Keyboard]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            keyboard={{ enabled: true }}
            grabCursor
            className="pb-12"
            onSwiper={(s) => {
              setSwiperInstance(s);
              setCurrentIndex(s.activeIndex ?? 0);
            }}
            onSlideChange={(s) => setCurrentIndex(s.activeIndex)}
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
          </Swiper>

          {/* Centered navigation controls below the cards */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={() => swiperInstance?.slidePrev()}
              disabled={!swiperInstance || currentIndex <= 0}
              className="w-10 h-10 bg-[#FFB400] text-black rounded-full hover:bg-[#e0a800] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              aria-label="Previous"
            >
              <FaArrowLeft size={16} />
            </button>

            <button
              onClick={() => swiperInstance?.slideNext()}
              disabled={!swiperInstance || (swiperInstance ? (() => {
                const slidesLen = swiperInstance.slides?.length ?? 0;
                const perView = typeof swiperInstance.params.slidesPerView === 'number' ? swiperInstance.params.slidesPerView : 1;
                const maxIndex = Math.max(0, slidesLen - perView);
                return currentIndex >= maxIndex;
              })() : true)}
              className="w-10 h-10 bg-[#FFB400] text-black rounded-full hover:bg-[#e0a800] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              aria-label="Next"
            >
              <FaArrowRight size={16} />
            </button>
          </div>
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
