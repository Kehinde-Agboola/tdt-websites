import React from "react";
import Container from "../shared"; 
import { Button } from "./button"; 

type HeroPropsType = {
heading?: string;
  heading2?: string;
buttonText: string;
buttonText2?: string;
image?: string;
spanText?: string; 
subtext?: string; 
};

export const HeroComponent = ({
  heading,
  heading2,
  buttonText,
  buttonText2,
  spanText,
  subtext,
}: HeroPropsType) => {
  return (
    <div className="relatives">
      <Container>
        <section className="text-white pt-[4rem] xl:pt-[8rem]">
          <div className="">
            <h1 className="text-4xl leading-6 text-center md:text-left md:text-6xl font-bold mb-4">
              {heading}
            </h1>
            <p className="text-4xl leading-6 text-center md:text-left md:text-6xl font-bold mb-4">
              {" "}
              {spanText && <span className="text-[#FFBC00]"> {spanText}</span>}
            </p>
            <h1 className="text-4xl leading-6 text-center md:text-left md:text-6xl font-bold mb-4">
              {heading2}
            </h1>
          </div>
          {subtext && (
            <p className="text-lg md:text-xl mb-6 text-center md:text-left">
              {subtext}
            </p>
          )}

          <div className="flex flex-col md:flex-row gap-6">
            <Button className="transition-all ease-in-out duration-700 border border-[#FFB400] hover:bg-[#FFB400] hover:text-white text-white px-8 py-2">
              {buttonText}
            </Button>
            {buttonText2 && (
              <Button className="bg-[#FFB400] text-black px-8 py-2">
                {buttonText2}
              </Button>
            )}
          </div>
        </section>
      </Container>
    </div>
  );
};
