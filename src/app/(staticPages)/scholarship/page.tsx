import React from 'react'
import ScholarshipHero from "../../../../public/assets/scholarship/scholarshiphero.png";
import Image, { StaticImageData } from 'next/image'
import Container from '../../_component/shared'
import { GoArrowRight } from 'react-icons/go';
import { Button } from '@/app/_component/atom/button';
import Symbol from "../../../../public/assets/scholarship/henry.png";
import { FlexComponent } from "@/app/_component/atom/eduFlex";
import WritingGirl from  "../../../../public/assets/scholarship/girlwriting.png"
import Scholars from './ScholarCard';


type BoxProps = {
  iconSrc: string | StaticImageData;
  title: string;
  text: string;
  buttonText: string;
};

const Box = ({ iconSrc, title, text, buttonText }: BoxProps) => {
  return (
    <div className="group relative inline-block  transition duration-800 ease-in-out">
      <div className="p-6 hover:bg-[#FFB400] h-full  bg-[#F8F8F8]  flex flex-col items-center text-center">
        <Image
          src={iconSrc}
          alt="SDG Icon"
          width={33}
          height={33}
          className="object-cover pb-5 transition duration-300 ease-in-out group-hover:grayscale group-hover:brightness-0"
        />
        <div className="flex flex-col items-center text-center h-[80%]">
          <h3 className="text-[16px] font-[500] mb-2">{title}</h3>
          <p className=" text-black mb-4">{text}</p>
        </div>
        <Button
          className=" hover:text-white hover:bg-black  w-[177px] py-2 transition duration-300 ease-in-out"
          btnFlex={true}
          icon={<GoArrowRight />}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};
const page = () => {
     const data = [
       {
         spanText2: "Let’s work together!",
         heading1:
           "Do you want to live a ​legacy or honor the ​memory of a loved one? ​",
         text1:
           "Together, we can make a difference in the lives of children ​and create legacies of compassion that impact generations ​to come.",
         text2:
           "Whether you are looking to establish personal, family, or ​corporate philanthropy, or seeking to honor the memory of ​a loved one, we are here to partner with you to achieve ​your goals. We relieve our partners of administrative ​burdens and implement transparent and efficient ​processes to help you transform lives and change society.",
         imageSrc: WritingGirl,
         buttonText: "Talk to Us",
       },
     ];
    const support = [
      {
        imgSrc: Symbol,
        heading: "The Henry Ofili STEM ​Scholarship",
        text: "The Henry Ofili Scholarship ​empowers academically ​exceptional children and youths ​from disadvantaged ​backgrounds to pursue career ​excellence in STEM",
      },
      {
        imgSrc: Symbol,
        heading: "Lolu Arr Scholarship",
        text: "The scholarship aims at providing ​education support to children ​within vulnerable groups as a ​means of ensuring their social ​and economic inclusion.",
      },
      {
        imgSrc: Symbol,
        heading: "Subomi Plumptre Trust Scholarship",
        text: "Subomi Plumptre Trust provides ​education opportunities for ​rehabilitated street children and ​orphans under residential care ​and supports them from primary ​school to the university.",
      },
    ];
  return (
    <main>
      <section className="relative h-[86vh] w-full">
        <Image
          src={ScholarshipHero} 
          alt="Our Team"
          fill
          className="object-cover object-center bg-no-repeat"
        />

        {/* Text Content */}
        <Container>
          <div className="absolute inset-0 flex flex-col  justify-center px-8 md:px-16 text-white">
            <div className="">
              <h1 className=" md:text-left text-4xl md:text-5xl xl:text-[64px] md:w-[40rem]  leading-10">
                Let’s Invest In Our <span className="text-yellow">​Future</span>
                 Together
              </h1>
              <p className="mt-4 text-base md:text-lg  md:text-left w-full md:w-[45rem] pt-4 pb-8">
                We partner with compassionate individuals and organisations to
                ​administer scholarship programmes that meet our shared goal of
                ​empowering children with education from primary school to the
                ​university.
              </p>
            </div>
            <div className="text-center md:text-right flex flex-col md:flex-row gap-4">
              <button className="border-2 border-yellow text-white  w-full md:w-[15rem]  py-2 px-4 ">
                Sponsor a Scholarship
              </button>
              <button className="bg-yellow text-black  w-full md:w-[10rem]  mt-4 md:mt-0 px-4 py-2 md:px-0 md:py-0">
                Sponsor a Child
              </button>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 ">
            {support.map((box, index) => (
              <Box
                key={index}
                iconSrc={box.imgSrc}
                title={box.heading}
                text={box.text}
                buttonText={"Read More"}
              />
            ))}
          </div>
        </Container>
      </section>
      <section className="py-[4rem] mt-[4rem] bg-scholar">
        <FlexComponent
          data={data}
          columnReversed={true}
          buttonClassName="border-yellow border-2 px-6 py-2"
        />
      </section>
      <section>
       <Scholars/>
      </section>
    </main>
  );
}

export default page