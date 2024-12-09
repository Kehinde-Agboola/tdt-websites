import Container from "@/app/_component/shared";
import React from "react";
import BlcHero from "../../../../public/assets/blc/blchero.png"
import BlcLogo from "../../../../public/assets/blc/logo.png";
import Image from "next/image";
import BlcImage from "../../../../public/assets/blc/students.png";
import { FlexComponent } from "@/app/_component/atom/flex";
import Cards from "./Cards";
import Banner from "./Banner";
const Page = () => {
   const data = [
     {
       spanText2: "Education",
       heading3:
         " for Over-aged Out-of-School Children ​",
       text1:
         "According to UNESCO, over 20 million Nigerian children are out of school. The term “out-of-school children” covers various demographics and unique circumstances, each requiring tailored interventions. Our over a decade of experience working with housing-insecure children and youths has highlighted a staggering number of children aged 10-18 who missed out on or had their education disrupted due to displacement. These children are the most educationally disadvantaged, often deemed too old for nursery classes and lacking the foundational education for age-appropriate grades. If admitted to conventional schools, they struggle to complete primary education before their twenties and often lose motivation shortly after enrolment.",
       imageSrc: BlcImage,
       buttonText:""
      
     },
   ];
  return (
    <main>
      <section className="relative h-[90vh] w-full">
        <Image
          src={BlcHero} // Replace with your image path
          alt="Blc hero section"
          fill
          className="object-cover object-center bg-no-repeat bg-center"
        />

        {/* Text Content */}
        <Container>
          <div className="absolute inset-0 flex flex-col  justify-center px-8 md:px-16 text-white">
            <div className="">
              <Image src={BlcLogo} alt="Blc logo" className="pb-8" />
              <h1 className=" md:text-left text-4xl md:text-5xl xl:text-[64px]  leading-10 text-yellow">
                Welcome to
              </h1>
              <h1 className=" md:text-left text-4xl md:text-5xl xl:text-[64px]  leading-10">
                Bridge Learning Centre
              </h1>
              <p className="mt-4 text-base  md:text-left w-full md:w-[48rem] pt-4 pb-8">
                At the Bridge Learning Centre, we run Nigeria’s first structured
                accelerated education school, providing an alternative and
                bespoke education pathway that meets the unique needs of
                over-age children.
              </p>
            </div>

            <button className="bg-yellow text-black  w-1/2 md:w-[10rem]  mt-4 md:mt-0 px-4 py-2 ">
              Work With Us
            </button>
          </div>
        </Container>
      </section>
      <section className="py-4 md:py-[4rem] mt-[4rem] bg-scholar">
        <FlexComponent data={data} columnReversed={false} buttonClassName="" />
      </section>
      <Container>
        <section className="bg-black bg-payment mb-[5rem]">
          <div className="py-8 px-8 flex flex-col md:flex-row justify-between items-center">
            <h2 className=" text-center text-2xl md:text-[40px] mb-4 text-white">
              Empower their Dreams
            </h2>
            <div className="text-center md:text-right flex flex-col md:flex-row gap-4">
              <button className="border-2 border-yellow text-white  w-full md:w-[15rem]  py-2 px-4 ">
                Sponsor a Scholarship
              </button>
              <button className="bg-yellow text-white  w-full md:w-[15rem]  mt-4 md:mt-0 px-4 py-2 md:px-0 md:py-0">
                Sponsor a Child
              </button>
            </div>
          </div>
        </section>
        <section>
          <Cards/>
        </section>
      </Container>
      <Banner/>
    </main>
  );
};

export default Page;
