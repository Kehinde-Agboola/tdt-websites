import React from "react";
// import ScholarCard from "../../../_component/atom/Cards";
import ScholarCard from "@/app/_component/atom/Cards";
import GraduateGirl from "../../../../public/assets/scholarship/graduategirl.png"
import Container from "../../_component/shared";
import Background from "../../../../public/assets/scholarship/scholarsbg.png"
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
                  course="Medicine and Surgery"
                  school="University of Lagos"
                  imageSrc={GraduateGirl}
                  buttonText=""
                />
              </div>
              <div className="snap-center flex-shrink-0">
                <ScholarCard
                  name="Ademola Deborah"
                  course="Computer Science"
                  school="University of Lagos"
                 
                  imageSrc={GraduateGirl}
                  buttonText=""
                />
              </div>
              <div className="snap-center flex-shrink-0">
                <ScholarCard
                  name="Ademola Deborah"
                  course="Computer Science"
                  school="University of Lagos"
                  imageSrc={GraduateGirl}
                  buttonText=""
                />
              </div>
            </div>
          </Container>
        </div>
      </section>
    
    </main>
  );
};

export default Scholars;
