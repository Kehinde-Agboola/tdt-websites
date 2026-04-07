"use client";
import { Button } from "./button";
import Image, { StaticImageData } from "next/image";
import Container from "../shared/index";
import { motion } from "framer-motion";

type FlexComponentProps = {
  buttonClassName?: string;
  columnReversed?: boolean;
  data?: Array<{
    heading1?: string;
    heading3?: string;
    imageSrc?: string | StaticImageData;
    imageSrc1?: string | StaticImageData;
    text3?: string;
    text4?: string;
    text1?: string;
    text2?: string;
    spanText?: string;
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
            } justify-center items-center gap-12 lg:gap-14 lg:justify-between`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              delay: index * 0.2, 
            }}
          >
            <motion.div
              className="w-full min-w-0 lg:basis-[65%]"
              initial={{ x: columnReversed ? 50 : -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <div className="space-y-3 md:space-y-4">
                {el?.imageSrc1 && (
                  <Image
                    src={el?.imageSrc1}
                    alt={el?.spanText || "Image"}
                    className="object-cover pb-1 md:pb-2"
                  />
                )}
                {el.spanText ? (
                  <span className="text-[#ffb400] text-[25px] md:text-[32px]">
                    {el.spanText}
                  </span>
                ) : null}
                {el.heading1 ? (
                  <p className="text-[16px] md:text-[24px] text-[#333333]">
                    {el.heading1}
                  </p>
                ) : null}
                {el.spanText2 ? (
                  <span className="text-[#ffb400] text-[16px] md:text-[32px]">
                    {el.spanText2}
                  </span>
                ) : null}
                {el.heading ? (
                  <p className="text-[16px] md:text-[16px] text-[#fff]">
                    {el.heading}
                  </p>
                ) : null}
              </div>

              <div className="space-y-4 xl:max-w-[100%] lg:text-justify">
                {el.text1 ? <p>{el.text1}</p> : null}
                {el.text2 ? <p>{el.text2}</p> : null}
                {el.text3 ? <p>{el.text3}</p> : null}
                {el.text4 ? (
                  <p className="border-l-4 border-[#FFBC00] pl-5 text-xl font-medium leading-snug text-[#1a1a1a] md:pl-6 md:text-2xl">
                    {el.text4}
                  </p>
                ) : null}
              </div>
              {el?.buttonText ? (
                <div className={el.text4 ? "mt-8 md:mt-10" : "mt-6 md:mt-8"}>
                  <Button className={buttonClassName}>
                    {`${el?.buttonText}`}
                  </Button>
                </div>
              ) : null}
            </motion.div>
            <motion.div
              className="relative h-[min(380px,62vh)] w-full min-w-0 shrink-0 overflow-hidden rounded-sm sm:h-[min(540px,68vh)] md:h-[min(640px,74vh)] lg:h-[min(720px,78vh)] lg:max-h-none lg:basis-[50%]"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {el?.imageSrc && (
                <Image
                  src={el?.imageSrc}
                  alt={el?.spanText || el?.heading || "Section image"}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center"
                />
              )}
            </motion.div>
          </motion.div>
        );
      })}
    </Container>
  );
};
