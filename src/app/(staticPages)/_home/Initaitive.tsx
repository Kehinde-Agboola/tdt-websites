"use client";
import React from "react";
import Container from "@/app/_component/shared";
import Education from "../../../../public/assets/home/education.png";
import Shelter from "../../../../public/assets/home/shelter.png";
import Steam from "../../../../public/assets/home/stem.png";
// import Support from "../../../public/assets/home/support.png";
// import Accelerated from "../../../public/assets/home/accelerated.png";
import Family from "../../../../public/assets/home/family.png";
import { Button } from "../../_component/atom/button";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import arrow icons

type BoxProps = {
  iconSrc: string | StaticImageData;
  title: string;
  text: string;
  buttonText: string;
};

const Box = ({ iconSrc, title, text, buttonText }: BoxProps) => {
  return (
    <motion.div
      className="group relative inline-block transition duration-800 ease-in-out"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
    >
      <div className="p-6 hover:bg-[#fff7e5] h-full border bg-white  flex flex-col items-center text-center text-[14px] text-[#333333] hover:text-[#000]">
        <Image
          src={iconSrc}
          alt="SDG Icon"
          width={54}
          height={54}
          className="object-cover pb-5 transition duration-300 ease-in-out "
        />
        <div className="flex flex-col items-center h-[80%]">
          <h3 className="text-[24px] font-[500] mb-2 text-black">{title}</h3>
          <p className=" mb-4">{text}</p>
        </div>
        <Button
          className="hover:text-white hover:bg-black bg-white hover:border-2 hover:border-black outline-1 border-2 border-[#f4f4f4f4] w-[177px] py-2 transition duration-300 ease-in-out"
          btnFlex={true}
          icon={<GoArrowRight />}
        >
          {buttonText}
        </Button>
      </div>
    </motion.div>
  );
};

const NavigationButtons = () => {
  const swiper = useSwiper();

  return (
    <>
      <button
        onClick={() => swiper.slidePrev()}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2  rounded-full text-black shadow-lg hover:bg-[#e6a200] transition duration-300"
      >
        <FaArrowLeft size={24} />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full text-black shadow-lg hover:bg-[#e6a200] transition duration-300"
      >
        <FaArrowRight size={24} />
      </button>
    </>
  );
};

const Initaitive = () => {
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
    // {
    //   imgSrc: Support,
    //   heading: "School Support",
    //   text: "We break down the barriers that prevent homeless and disadvantaged children from accessing quality education. We enroll out-of-school children, reintegrate dropouts, and provide ongoing support to ensure they stay in school and thrive.",
    // },
    // {
    //   imgSrc: Accelerated,
    //   heading: "Accelerated Education",
    //   text: "We empower underprivileged kids by providing in-demand tech through our Kids Innovation initiative, focusing on STEAM to create a creative space for street children transitioning from and low-income backgrounds.",
    // },
    {
      imgSrc: Family,
      heading: "Family Empowerment",
      text: "We empower underprivileged kids by providing in-demand tech through our Kids Innovation initiative, focusing on STEAM to create a creative space for street children transitioning from and low-income backgrounds.",
    },
  ];

  return (
    <Container>
      <section>
        <div className="text-center md:text-left">
          <p className="text-[40px] md:text-[64px] font-[400]">What We Do.</p>
          <p className="text-[14px] md:text-[16px] text-[#555555] md:w-[45rem]">
            Our initiatives support the overall development of children,
            ensuring we are always there for them where they need us the most.
          </p>
        </div>
        <div className="relative mt-10">
          <Swiper
            modules={[Navigation, Pagination, Keyboard]}
            spaceBetween={50}
            slidesPerView={3}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            // pagination={{ clickable: true }}
            keyboard={{ enabled: true }}
            grabCursor={true}
          >
            {support.map((box, index) => (
              <SwiperSlide key={index}>
                <Box
                  iconSrc={box.imgSrc}
                  title={box.heading}
                  text={box.text}
                  buttonText={"Read More"}
                />
              </SwiperSlide>
            ))}
            <NavigationButtons />
          </Swiper>
        </div>
      </section>
    </Container>
  );
};

export default Initaitive;
