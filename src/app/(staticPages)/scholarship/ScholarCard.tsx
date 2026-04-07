"use client";

import React from "react";
import ScholarCard from "@/app/_component/atom/Cards";
import GraduateGirl from "../../../../public/assets/scholarship/graduategirl.png";
import Container from "../../_component/shared";
import Background from "../../../../public/assets/scholarship/scholarsbg.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const scholars = [
  {
    name: "Ademola Deborah",
    course: "Medicine and Surgery",
    school: "University of Lagos",
    imageSrc: GraduateGirl,
    buttonText: "",
  },
  {
    name: "Ademola Deborah",
    course: "Computer Science",
    school: "University of Lagos",
    imageSrc: GraduateGirl,
    buttonText: "",
  },
  {
    name: "Ademola Deborah",
    course: "Computer Science",
    school: "University of Lagos",
    imageSrc: GraduateGirl,
    buttonText: "",
  },
] as const;

const Scholars = () => {
  return (
    <main>
      <section className="relative min-h-[110vh] w-full md:min-h-[150vh]">
        <Image
          src={Background}
          alt=""
          fill
          className="bg-no-repeat object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0">
          <Container>
            <div className="mt-[8rem] text-center md:mt-[4rem] md:text-justify">
              <h1 className="text-[32px] md:text-[64px]">Meet Our Scholars</h1>
              <p className="mx-auto w-full pt-4 pb-8 md:mx-0 md:w-[46rem] md:pb-12">
                We take pride in the stories of children who embrace the
                educational opportunities provided by our partners and excel in
                their studies. Their achievements inspire us to do even more,
                collaborating with you to educate more children who would
                otherwise be left behind.
              </p>
            </div>

            {/* Mobile: Swiper with dots + swipe */}
            <div className="md:hidden">
              <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                spaceBetween={20}
                centeredSlides
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                className="scholars-swiper pb-12 [&_.swiper-pagination-bullet]:h-2 [&_.swiper-pagination-bullet]:w-2 [&_.swiper-pagination-bullet]:bg-white/50 [&_.swiper-pagination-bullet-active]:w-5 [&_.swiper-pagination-bullet-active]:bg-[#FFB400]"
              >
                {scholars.map((s, i) => (
                  <SwiperSlide key={`${s.name}-${s.course}-${i}`}>
                    <div className="flex justify-center px-1">
                      <div className="w-full max-w-[23rem]">
                        <ScholarCard {...s} />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* md+: static row */}
            <div className="hidden flex-wrap justify-center gap-8 md:flex md:overflow-hidden">
              {scholars.map((s, i) => (
                <div key={`${s.name}-${s.course}-desktop-${i}`} className="shrink-0">
                  <ScholarCard {...s} />
                </div>
              ))}
            </div>
          </Container>
        </div>
      </section>
    </main>
  );
};

export default Scholars;
