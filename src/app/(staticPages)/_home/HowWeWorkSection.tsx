"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Container from "@/app/_component/shared";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Parallax, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import EduPhoto from "../../../../public/assets/edu/edu2.jpg";
import EducationHeroImage from "../../../../public/assets/heos.png";
import WellbeingPhoto from "../../../../public/assets/care/wellbeing.jpg";

type Pillar = {
  image: StaticImageData;
  title: string;
  body: string;
  href: string;
};

const pillars: Pillar[] = [
  {
    image: EducationHeroImage,
    title: "Education",
    body:
      "Expanding access to quality education, accelerating learning for children left behind, and delivering digital platforms at scale to help children re-enter schooling, catch up, and attain their full potential.",
    href: "/whatwedo/education",
  },
  {
    image: WellbeingPhoto,
    title: "Wellbeing",
    body:
      "Shelter, care, healthcare and nutrition to give street, displaced and homeless children the necessary stability for schooling; and Supported Independent Living for youths on transition from care.",
    href: "/whatwedo/wellbeing",
  },
  {
    image: EduPhoto,
    title: "Skills & Empowerment",
    body:
      "In-demand digital and creative skills for children, rebuilding household livelihoods to support children for long-term success and independence.",
    href: "/whatwedo/empowerment",
  },
];

function PillarCard({
  p,
  i,
  parallax = false,
}: {
  p: Pillar;
  i: number;
  parallax?: boolean;
}) {
  const imgClass =
    p.href === "/whatwedo/education"
      ? "object-cover object-right transition duration-700 ease-out group-hover:scale-[1.06]"
      : "object-cover object-center transition duration-700 ease-out group-hover:scale-[1.06]";

  return (
    <Link
      href={p.href}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200/90 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300/90 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB400] focus-visible:ring-offset-2"
    >
      <div
        className={`relative aspect-[16/11] w-full overflow-hidden ${
          p.href === "/whatwedo/education"
            ? "bg-neutral-100"
            : "bg-neutral-200"
        }`}
      >
        {parallax ? (
          <>
            {/* Inner layer moves at a different rate than the slide (parallax depth) */}
            <div
              className="pointer-events-none absolute inset-0 will-change-transform"
              data-swiper-parallax="-32%"
              data-swiper-parallax-duration="650"
            >
              <div className="absolute inset-0 scale-[1.2]">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 92vw, 33vw"
                  className={imgClass}
                  priority={i === 0}
                />
              </div>
            </div>
            {p.href !== "/whatwedo/education" && (
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"
                aria-hidden
              />
            )}
            <div
              className="absolute bottom-0 left-0 right-0 p-5 md:p-6"
              data-swiper-parallax="-55"
              data-swiper-parallax-duration="550"
            >
              <h3
                className={
                  p.href === "/whatwedo/education"
                    ? "text-xl font-semibold leading-tight tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] md:text-[1.35rem]"
                    : "text-xl font-semibold leading-tight tracking-tight text-white drop-shadow-sm md:text-[1.35rem]"
                }
              >
                {p.title}
              </h3>
            </div>
          </>
        ) : (
          <>
            <Image
              src={p.image}
              alt={p.title}
              fill
              sizes="(max-width: 768px) 92vw, 33vw"
              className={imgClass}
              priority={i === 0}
            />
            {p.href !== "/whatwedo/education" && (
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"
                aria-hidden
              />
            )}
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
              <h3
                className={
                  p.href === "/whatwedo/education"
                    ? "text-xl font-semibold leading-tight tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] md:text-[1.35rem]"
                    : "text-xl font-semibold leading-tight tracking-tight text-white drop-shadow-sm md:text-[1.35rem]"
                }
              >
                {p.title}
              </h3>
            </div>
          </>
        )}
      </div>

      <div
        className="flex min-h-0 flex-1 flex-col border-t border-[#FFB400]/20 p-6 md:p-7"
        data-swiper-parallax={parallax ? "-28" : undefined}
        data-swiper-parallax-duration={parallax ? "500" : undefined}
      >
        <p className="text-sm md:text-[15px] leading-relaxed text-[#444]">
          {p.body}
        </p>
        <span className="mt-auto inline-flex items-center pt-6 text-sm font-semibold text-neutral-900 transition-colors group-hover:text-[#FFB400]">
          Learn more
          <span
            className="ml-1.5 inline-block transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

const HowWeWorkSection = () => {
  return (
    <section className="bg-[#f7f7f5] py-16 md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl mx-auto text-center  mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-black mb-6">
            How We Work
          </h2>
          <p className="text-base md:text-lg text-[#333] leading-relaxed mb-5">
            We build integrated systems around each child—creating the stability
            required for learning to begin and be sustained because when the
            system works for the child, education works.
          </p>
          <p className="text-base md:text-lg text-[#333] leading-relaxed mb-5">
            Our model goes beyond access to school. We ensure children have the
            stability and support they need to receive education and live to the
            full extent of their potentials. We place a deliberate focus on
            inclusion, targeting at least 60% girls, who are disproportionately
            affected by barriers to education.
          </p>

          <p className="text-base md:text-lg text-[#333] leading-relaxed">
            We combine education, wellbeing, and skills, providing support to
            each child and walking with them on their journey to lifelong
            fulfillment.
          </p>
        </motion.div>

        {/* Mobile: parallax + coverflow depth */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination, Parallax, EffectCoverflow]}
            parallax
            grabCursor
            speed={650}
            centeredSlides
            slidesPerView={1.12}
            spaceBetween={14}
            pagination={{ clickable: true }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 140,
              modifier: 1.15,
              slideShadows: false,
            }}
            className="how-we-work-parallax !overflow-visible !pb-11 [--swiper-pagination-bottom:0] [--swiper-pagination-bullet-inactive-color:rgba(0,0,0,0.22)] [--swiper-pagination-color:#FFB400]"
          >
            {pillars.map((p, i) => (
              <SwiperSlide
                key={p.title}
                className="!h-auto !scale-100 py-1"
                style={{ perspective: "1200px" }}
              >
                <PillarCard p={p} i={i} parallax />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Tablet & up: 3-column grid */}
        <div className="hidden grid-cols-1 gap-7 md:grid md:grid-cols-3 lg:gap-8">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="h-full"
            >
              <PillarCard p={p} i={i} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowWeWorkSection;
