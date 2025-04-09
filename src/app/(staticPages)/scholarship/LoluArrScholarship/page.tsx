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
const page = () => {
  return (
    <main>
      <section className="relative mb-[10rem]">
      <div className="relative w-full h-[80vh]">
        <Image
          src={BackgroundPciture}
          alt="Scholarship Background"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 z-0"
        />

        
        <div className="relative z-10  pt-20 pb-20 px-4 sm:px-8">
          <Container>
            <section className="flex flex-col md:flex-row justify-between items-center">
              {/* Text and Button */}
              <div className="max-w-[100%] md:max-w-[60%]">
                <h1 className="text-[30px] sm:text-[48px]">
                  <span className="text-[#676CCE]">Empowering</span>
                  <span className="font-bold"> STEM Talents</span>, Recreating
                  our Future
                </h1>
                <p className="text-[#555555] w-[100%] sm:w-[100%] mt-4">
                  In collaboration with
                  <span className="font-bold">
                    The Destiny Trust, The Henry Ofili Scholarship
                  </span>
                  empowers academically exceptional children and youths from
                  disadvantaged backgrounds to pursue career excellence in STEM.
                </p>
                <button className="flex items-center gap-2 bg-black text-white px-4 py-2 mt-4">
                  Apply Now
                  <span>
                    <FaArrowRight />
                  </span>
                </button>
              </div>

              {/* Hero Images */}
              <div className="relative w-[100%] md:w-[40%] mt-6 md:mt-0">
                <Image
                  src={Hero}
                  alt="Hero Image "
                  className="absolute -top-10 left-1/2 transform -translate-x-1/2"
                />
                <Image src={Hero1} alt="Hero Image 2" className="w-full" />
              </div>
            </section>
          </Container>
        </div>
      </div>
      </section>
      <EligibilityCriteria />
      <About />
      <Empowes/>
    </main>
  );
};

export default page;
