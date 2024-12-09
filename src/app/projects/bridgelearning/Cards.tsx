import React from "react";
import Container from "@/app/_component/shared";
import Explore from "../../../../public/assets/blc/explore.png";
import Create from "../../../../public/assets/blc/create.png";
import Experience from "../../../../public/assets/blc/experience.png";
import Choose from "../../../../public/assets/blc/choose.png"
import Image from "next/image";
import Spira from "../../../../public/assets/blc/arrow.png"
import { StaticImageData } from "next/image";
type BoxProps = {
  iconSrc: string | StaticImageData;
  title: string;
  text: string;
};

const Box = ({ iconSrc, title, text,  }: BoxProps) => {
  return (
    <div className="group relative inline-block  transition duration-800 ease-in-out">
      <div className="p-6 rounded-2xl text-justify hover:bg-[#FFB400] h-full w-auto  bg-[#F4F4F4]  flex flex-col">
        <Image
          src={iconSrc}
          alt="SDG Icon"
          width={74}
          height={74}
          className="object-cover pb-5"
        />
        <div className="flex flex-col">
          <h3 className="text-[24px] font-[500] mb-2 text-[#2D2D2D]">
            {title}
          </h3>
          <p className=" text-[#333333] mb-4">{text}</p>
        </div>
      </div>
    </div>
  );
};

const Cards = () => {
  const support = [
    {
      imgSrc: Explore,
      heading: "Explore",
      text: "Foster an environment for critical inquiry and thinking, encouraging children to explore diverse perspectives on science and social themes.",
    },
    {
      imgSrc: Create,
      heading: "Create",
      text: "Inspire children to create through play and guide them in developing skills for tangible empowerment from activities they love.",
    },
    {
      imgSrc: Experience,
      heading: "Experience",
      text: "Provide opportunities for children to observe and interact with facts, events, and concepts. The goal is to promote hands-on, experiential learning experiences.",
    },
    {
      imgSrc: Choose,
      heading: "Choose",
      text: "Recognize the unique needs of each child by offering flexible learning options and supporting them in making choices about what and how to learn.",
    },
  ];
  return (
    <Container>
      <section className="relative">
        <div className=" flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-[30px] md:text-[50px] font-[400] md:w-[30rem]">
            Our Thinking About <span className="text-yellow font-bold">Education</span>
          </h1>
          <Image src={Spira} alt="curly arrow" className="absolute right-[36rem] top-[5rem] hidden md:block" />
          <p className="text-center  text-[14px] md:text-[16px] text-[#555555] md:w-[35rem]">
            Every lesson at the Bridge Learning Centre is designed, implemented,
            and evaluated based on four essential elements of our approach:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-[3rem] md:mt-[7rem] ">
          {support.map((box, index) => (
            <Box
              key={index}
              iconSrc={box.imgSrc}
              title={box.heading}
              text={box.text}
            />
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Cards;