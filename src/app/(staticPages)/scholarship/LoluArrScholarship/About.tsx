import React from "react";
import Image from "next/image";
import ScholarsHero from "../../../../../public/assets/scholarship/about.png";
// import Henry from "../../../../../../../public/assets/scholarship/henrry.png";
import Henry from "../../../../../public/assets/scholarship/henrry.png"
import Line from "../../../../../public/assets/scholarship/line.png";
import Container from "@/app/_component/shared";

const About = () => {
  return (
    <main className="bg-[#F2F3FF] pb-[4rem]">
      <div className="md:h-[500px]">
        <Image
          src={ScholarsHero}
          alt="graduating scholars"
          objectFit="cover"
          priority
        />
      </div>

      <Container>
        <section className="md:-mt-[12rem] bg-white shadow-md pb-[2rem]">
          <div className="text-black md:text-white p-8 md:p-0">
            <div className="text-center">
              <p className="uppercase">About</p>
              <h1 className="text-[32px] font-bold mb-4">
                The Henry Chijioke Ofili Foundation
              </h1>
              <p className="mb-4 w-full md:max-w-[50rem] mx-auto">
                We recognize the innate potential of every young person to
                achieve lifelong fulfillment and collectively invest in
                resilient youth who are taking up the power to transform the
                social and economic circumstances of their families and
                communities.
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-[5rem] mt-[4rem] px-2 pt-0 md:pt-16 md:px-16 text-[#555555]">
              <div className="w-full md:w-[45rem]">
                <p className="mb-4">
                  <span className="font-bold">
                    The Henry Chijioke Ofili Foundation
                  </span>{" "}
                  is dedicated to supporting the education of young people from
                  disadvantaged backgrounds who demonstrate exceptional academic
                  potential and are pursuing undergraduate degrees in Science,
                  Technology, Engineering, and Mathematics (STEM) disciplines.
                </p>
                <p className="mb-4">
                  Through this collaboration, we recognize the innate potential
                  of every young person to achieve lifelong fulfillment and
                  collectively invest in resilient youth who are taking up the
                  power to transform the social and economic circumstances of
                  their families and communities.
                </p>
                <p>
                  This policy and procedure document provides general
                  information on the selection processes, principles, and
                  framework for the implementation of the scholarship.
                </p>
              </div>
              <Image src={Henry} alt="henry boy" />
            </div>
          </div>
          <div>
            <Image src={Line} alt="horizontal line" className="py-[5rem]" />
            <div className="flex flex-col md:flex-row justify-around items-center px-8 md:px-0">
              <div className="w-full md:w-[55%] text-[#555555]">
                <h1 className="text-[32px] text-black">Our Purpose</h1>
                <p>
                  The scholarship identifies and supports outstanding talents in
                  Science, Technology, Engineering, and Mathematics (STEM)
                  disciplines who may be unable to start or continue their
                  undergraduate degree programs due to economic challenges. It
                  aims to enable these students to pursue their degrees by
                  providing essential financial assistance and resources.
                </p>
                <p className="py-4">
                  As a broader goal, we are contributing to nurturing
                  Africa&apos;s next generation of leaders in STEM fields,
                  particularly from the demographic of youth who may be the
                  first in their families to acquire higher degrees; students
                  who are taking on leadership, breaking boundaries, and setting
                  new possibilities to inspire change.
                </p>
              </div>
              <div className="w-full md:w-[20%] text-center text-[#555555] leading-7">
                &quot;Together, we are writing stories of greatness, enabling
                academically exceptional STEM students to dream boldly and
                thrive.&quot;
                <button className="bg-black text-white px-6 py-2 mt-8">
                  Join our Scholars
                </button>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default About;
