import React from "react";
import Image from "next/image";
import ScholarsHero from "../../../../public/assets/scholarship/about.png";
import Henry from "../../../../public/assets/scholarship/henrry.png";
import Container from "@/app/_component/shared";

const About = () => {
  return (
    <main className="">
      {/* Image Section */}
      <div className="h-[500px]">
        <Image
          src={ScholarsHero}
          alt="graduating scholars"
          objectFit="cover"
          priority
        />
      </div>

      {/* Overlay Section */}
      <Container>
        <section className="flex items-center justify-center -mt-[12rem]">
          <div className="bg-white bg-opacity-75 p-8 shadow-md ">
            <div className="text-center">
              <p className="text-[#2D2D2D] uppercase">About</p>
              <h1 className="text-[32px] font-bold  mb-4">
                The Henry Chijioke Ofili Foundation
              </h1>
              <p className="text-[#2D2D2D] mb-4 max-w-[50rem] mx-auto">
                We recognize the innate potential of every young person to
                achieve lifelong fulfillment and collectively invest in
                resilient youth who are taking up the power to transform the
                social and economic circumstances of their families and
                communities.
              </p>
            </div>
            <div>
              <p className="text-gray-600 mb-4">
                The Henry Chijioke Ofili Foundation is dedicated to supporting
                the education of young people from disadvantaged backgrounds who
                demonstrate exceptional academic potential and are pursuing
                undergraduate degrees in Science, Technology, Engineering, and
                Mathematics (STEM) disciplines.
              </p>
              <p className="text-gray-600 mb-4">
                Through this collaboration, we recognize the innate potential of
                every young person to achieve lifelong fulfillment and
                collectively invest in resilient youth who are taking up the
                power to transform the social and economic circumstances of
                their families and communities.
              </p>
              <p className="text-gray-600">
                This policy and procedure document provides general information
                on the selection processes, principles, and framework for the
                implementation of the scholarship.
              </p>
              <Image src={Henry} alt="" />
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default About;
