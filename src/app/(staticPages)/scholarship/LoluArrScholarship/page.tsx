import React from "react";
import Image from "next/image";
import Container from "@/app/_component/shared";
import { FaArrowRight } from "react-icons/fa6";
import BackgroundPciture from "../../../../../public/assets/scholarship/bg.png";
import Hero from "../../../../../public/assets/scholarship/hero.png";
import Hero1 from "../../../../../public/assets/scholarship/hero2.png";
import EligibilityCriteria from "./Eligibility";
import Empowes from "./Empowes";
import About from "./About";
import { AnimatedSection } from "@/components/AnimatedSection";
import { staggerDelay } from "@/lib/motion";

const page = () => {
  return (
    <main className="min-w-0">
      <AnimatedSection animateOnMount as="section" className="relative mb-12 sm:mb-20 md:mb-24">
        <div className="relative min-h-screen min-h-[100dvh] w-full overflow-hidden">
          <Image
            src={BackgroundPciture}
            alt="Scholarship background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-white/80" />

          <div className="relative z-10 px-4 py-12 sm:px-6 sm:py-16 md:py-20">
            <Container>
              <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:items-center">
                <div className="w-full max-w-2xl text-center md:max-w-[60%] md:text-left">
                  <h1 className="font-heading text-[28px] font-bold leading-tight sm:text-[40px] md:text-[48px]">
                    <span className="text-[#676CCE]">Empowering</span>
                    <span className="font-bold"> STEM Talents</span>, Recreating
                    our Future
                  </h1>
                  <p className="mt-4 max-w-full text-[#555555] sm:text-lg">
                    In collaboration with
                    <span className="font-bold">
                      {" "}
                      The Destiny Trust, The Henry Ofili Scholarship
                    </span>{" "}
                    empowers academically exceptional children and youths from
                    disadvantaged backgrounds to pursue career excellence in
                    STEM.
                  </p>
                  <button
                    type="button"
                    className="mt-6 inline-flex w-full max-w-xs items-center justify-center gap-2 bg-black px-4 py-3 text-white sm:w-auto sm:max-w-none"
                  >
                    Apply Now
                    <FaArrowRight aria-hidden />
                  </button>
                </div>

                <div className="relative mt-8 w-full max-w-lg flex-shrink-0 md:mt-0 md:max-w-[40%]">
                  <div className="relative w-full pb-4">
                    <Image
                      src={Hero1}
                      alt="Students in STEM"
                      width={600}
                      height={400}
                      className="h-auto w-full max-w-full object-contain"
                    />
                    <Image
                      src={Hero}
                      alt="Scholarship programme"
                      width={280}
                      height={220}
                      className="absolute -top-6 left-1/2 z-10 h-auto w-[min(200px,42vw)] -translate-x-1/2 object-contain drop-shadow-lg sm:-top-10 sm:w-[min(260px,55vw)]"
                    />
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection delay={staggerDelay(0)}>
        <EligibilityCriteria />
      </AnimatedSection>
      <AnimatedSection delay={staggerDelay(1)}>
        <About />
      </AnimatedSection>
      <AnimatedSection delay={staggerDelay(2)}>
        <Empowes />
      </AnimatedSection>
    </main>
  );
};

export default page;
