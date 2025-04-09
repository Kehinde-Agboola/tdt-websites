'use client'
import { Button } from "./button";
import Image, { StaticImageData } from "next/image";
import Container from "../shared/index";
import { motion } from "framer-motion";

type FlexComponentProps = {
  buttonClassName?: string;
  columnReversed?: boolean;
  data?: Array<{
    description?: string;
    heading1?: string;
    heading3?: string;
    heading4?: string;
    imageSrc?: string | StaticImageData;
    imageSrc1?: string | StaticImageData;
    text3?: string;
    text1?: string;
    text2?: string;
    spanText?: string;
    spanText1?: string;
    spanText2?: string;
    heading?: string;
    buttonText?: string;
  }>;
  descClassName?: string;
};

export const FlexComponent = ({
  buttonClassName,
  columnReversed,
  data,
  descClassName,
}: FlexComponentProps) => {
  return (
    <Container>
      {data?.map((el, index) => {
        return (
          <motion.div
            key={index}
            className={`flex ${
              columnReversed
                ? "flex-col-reverse lg:flex-row-reverse"
                : "flex-col-reverse lg:flex-row"
            } justify-center items-center gap-10 lg:gap-10 lg:justify-between`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              delay: index * 0.2, // Stagger animations for sequential appearance
            }}
          >
            <motion.div
              className="lg:basis-[50%] w-full lg:text-justify"
              initial={{ x: columnReversed ? 50 : -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <div className="pb-3">
                {el?.imageSrc1 && (
                  <Image
                    src={el?.imageSrc1}
                    alt={el?.heading || "Image"}
                    className="object-cover"
                  />
                )}
                <p className="text-[2.5rem] text-[#FFB400]">{el.heading1}</p>
                <p className="pt-2">{el.heading}</p>
                <span className="text-[#ffb400]  text-[1.5rem]">
                  {el.spanText}
                </span>
                <span className="text-[#ffb400]   text-[2.5rem]">
                  {el.spanText1}
                </span>
                <p>{ el.heading4}</p>
                <h1 className="text-[18px] md:text-[25px]">
                  <span className="text-[#ffb400]">{el.spanText2}</span>
                  {el.heading3}
                </h1>
              </div>
              <p className={`pb-3 font-extralight ${descClassName}`}>
                {el?.description}
              </p>
              <div className="xl:max-w-[100%]">
                <p className="pb-4">{el.text1}</p>
                <p className="pb-4">{el.text2}</p>
                <p className="pb-4">{el.text3}</p>
              </div>
              <div>
                <Button className={buttonClassName}>
                  {`${el?.buttonText}`}
                </Button>
              </div>
            </motion.div>
            <motion.div
              className="lg:basis-[40%] flex-basis-[50%]"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {el?.imageSrc && (
                <Image
                  src={el?.imageSrc}
                  alt={el?.heading || "Image"}
                  className="object-cover h-[450px] w-full" 
                />
              )}
            </motion.div>
          </motion.div>
        );
      })}
    </Container>
  );
};
