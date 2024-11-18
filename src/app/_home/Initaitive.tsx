import React from 'react'
import Container from '../_component/shared'
import Education from "../../assets/home/education.png"
import Shelter from "../../assets/home/shelter.png"
import Steam from "../../assets/home/stem.png"
import Support from "../../assets/home/support.png"
import Accelerated from "../../assets/home/accelerated.png"
import Family from "../../assets/home/family.png"
import { Button } from '../_component/atom/button'
import Image from 'next/image'
import { GoArrowRight } from "react-icons/go";
import { StaticImageData } from 'next/image'
type BoxProps = {
  iconSrc: string | StaticImageData;
  title: string;
  text: string;
  buttonText: string;
};

const Box = ({ iconSrc, title, text, buttonText }: BoxProps) => {
  return (
    <div className="group relative inline-block  transition duration-800 ease-in-out">
      <div className="p-6 hover:bg-[#FFB400] h-full  bg-white border-2 flex flex-col items-center text-center">
        <Image
          src={iconSrc}
          alt="SDG Icon"
          width={74}
          height={74}
          className="object-cover pb-5 transition duration-300 ease-in-out group-hover:grayscale group-hover:brightness-0"
        />
        <div className="flex flex-col items-center h-[80%]">
          <h3 className="text-[24px] font-[500] mb-2">{title}</h3>
          <p className=" text-black mb-4">{text}</p>
        </div>
        <Button
          className=" hover:text-white hover:bg-black  bg-white border-2 border-black w-[177px] py-2 transition duration-300 ease-in-out"
          btnFlex={true}
          icon={<GoArrowRight />}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

const Initaitive = () => {
    const support = [
      {
        imgSrc: Education,
        heading: "Education Access",
            text: "We break down the barriers that prevent homeless and disadvantaged children from accessing quality education. We enroll out-of-school children, reintegrate dropouts, and provide ongoing support to ensure they stay in school and thrive.",
        
      },
      {
        imgSrc: Shelter,
        heading: "Shelter & Wellbeing",
        text: "We rescue children from the streets offering them a safe, loving home where they can rebuild a happy childhood, receive education, and live, learn, and play in a good environment while we work towards reintegrating them into families.",
      },
      {
        imgSrc: Steam,
        heading: "STEAM Empowerment",
        text: "We empower underprivileged kids by providing in-demand tech  our Kids Innovation initiative, focusing on STEAM to create a creative space for street children transitioning from and low-income backgrounds.",
      },
      {
        imgSrc: Support,
        heading: "School Support",
        text: "We break down the barriers that prevent homeless and disadvantaged children from accessing quality education. We enroll out-of-school children, reintegrate dropouts, and provide ongoing support to ensure they stay in school and thrive.",
      },
      {
        imgSrc: Accelerated,
        heading: "Accelerated Education",
        text: "We empower underprivileged kids by providing in-demand tech  our Kids Innovation initiative, focusing on STEAM to create a creative space for street children transitioning from and low-income backgrounds.",
      },
      {
        imgSrc: Family,
        heading: "Family Empowerment",
        text: "We empower underprivileged kids by providing in-demand tech  our Kids Innovation initiative, focusing on STEAM to create a creative space for street children transitioning from and low-income backgrounds.",
      },
    ];
  return (
    <Container>
      <section>
        <div className="text-center md:text-left">
          <p className="text-[40px] md:text-[64px] font-[400]">What We Do.</p>
          <p className="text-[14px] md:text-[16px] text-[#555555] md:w-[45rem]">
            Our initiatives support the overall development of children,
            ensuring we are always there for them where they need us the most.
          </p>
        </div>
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
      </section>
    </Container>
  );
}

export default Initaitive