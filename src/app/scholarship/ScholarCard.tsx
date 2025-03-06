import React from "react";
import ScholarCard from "../_component/atom/Cards";
import GraduateGirl from "../../../public/assets/scholarship/graduategirl.png"
import Container from "../_component/shared";
import Background from "../../../public/assets/scholarship/scholarsbg.png"
// import Sponsor from "../../../public/assets/scholarship/sponsor.jpg"
import Image from "next/image";
const Scholars = () => {
  return (
    <main>
      <section className="relative h-[150vh] w-full">
        <Image
          src={Background}
          alt="Our Team"
          fill
          className="object-cover object-center bg-no-repeat"
        />
        <div className="absolute inset-0">
          <Container>
            <div className="mt-[8rem] md:mt-[4rem] text-justify">
              <h1 className="text-[32px] md:text-[64px]">Meet Our Scholars</h1>
              <p className="w-full md:w-[46rem] pt-4 pb-12">
                We take pride in the stories of children who embrace the
                educational opportunities provided by our partners ​and excel in
                their studies. Their achievements inspire us to do even more,
                collaborating with you to educate ​more children who would
                otherwise be left behind.
              </p>
            </div>
            <div className="overflow-x-scroll md:overflow-hidden flex space-x-8 snap-x snap-mandatory ">
              <div className="snap-center flex-shrink-0">
                <ScholarCard
                  name="Ademola Deborah"
                  description="Deborah favorite subject at school is Mathematics and her goal is to pursue a degree in engineering upon her completion of high school."
                  imageSrc={GraduateGirl}
                  buttonText=""
                />
              </div>
              <div className="snap-center flex-shrink-0">
                <ScholarCard
                  name="Ademola Deborah"
                  description="Deborah favorite subject at school is Mathematics and her goal is to pursue a degree in engineering upon her completion of high school."
                  imageSrc={GraduateGirl}
                  buttonText=""
                />
              </div>
              <div className="snap-center flex-shrink-0">
                <ScholarCard
                  name="Ademola Deborah"
                  description="Deborah favorite subject at school is Mathematics and her goal is to pursue a degree in engineering upon her completion of high school."
                  imageSrc={GraduateGirl}
                  buttonText=""
                />
              </div>
            </div>
          </Container>
        </div>
      </section>
      <Container>
        <section className="my-[4rem]">
          <div className="text-center">
            <h1 className="text-[32px] md:text-[64px] ">
              Sponsor a <span className="text-yellow">Scholar.</span>
            </h1>
            <p className="w-full md:w-[46rem] mx-auto pt-4 pb-12">
              Help build a brighter future by making a difference today. Whether
              it&apos;s through innovation, education, or community support,
              every small action contributes to a better tomorrow. Let&apos;s
              work together to create a world where everyone has the opportunity
              to shine.
            </p>
          </div>
          <div className="overflow-x-scroll md:overflow-hidden flex space-x-8 snap-x snap-mandatory ">
            <div className="snap-center flex-shrink-0">
              <ScholarCard
                name="Ademola Deborah"
                description="Deborah favorite subject at school is Mathematics and her goal is to pursue a degree in engineering upon her completion of high school. We’re proud of Deborah commitment to her education and we look forward to watching her achieve great things through our scholarship program."
                imageSrc={GraduateGirl}
                buttonText="Sponsor Me"
              />
            </div>
            <div className="snap-center flex-shrink-0">
              <ScholarCard
                name="Ademola Deborah"
                description="Deborah favorite subject at school is Mathematics and her goal is to pursue a degree in engineering upon her completion of high school. We’re proud of Deborah commitment to her education and we look forward to watching her achieve great things through our scholarship program."
                imageSrc={GraduateGirl}
                buttonText="Sponsor Me"
              />
            </div>
            <div className="snap-center flex-shrink-0">
              <ScholarCard
                name="Ademola Deborah"
                description="Deborah favorite subject at school is Mathematics and her goal is to pursue a degree in engineering upon her completion of high school. We’re proud of Deborah commitment to her education and we look forward to watching her achieve great things through our scholarship program."
                imageSrc={GraduateGirl}
                buttonText="Sponsor Me"
              />
            </div>
          </div>
          {/* <Image src={Sponsor} alt="smiling girl" /> */}
        </section>
      </Container>
    </main>
  );
};

export default Scholars;
