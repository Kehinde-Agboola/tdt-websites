'use client'
import { Button } from "./button";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Container from "../shared/index";
import { motion } from "framer-motion";

type FlexComponentProps = {
  buttonClassName?: string;
  buttonClassName2?: string;
  columnReversed?: boolean;
  data?: Array<{
    description?: string;
    heading1?: string;
    heading3?: string;
    heading4?: string;
    imageSrc?: string | StaticImageData;
    imageSrc1?: string | StaticImageData;
    text3?: string;
    text4?: string;
    text1?: string;
    text2?: string;
    spanText?: string;
    spanText1?: string;
    spanText2?: string;
    spanText3?: string;
    heading?: string;
    buttonText?: string;
    /** If set, first CTA renders as a Next.js Link */
    buttonHref?: string;
    buttonText2?: string;
    buttonHref2?: string;
  }>;
  descClassName?: string;
};

const ctaBase =
  "inline-flex min-h-[44px] select-none items-center justify-center px-5 py-2.5 text-center text-sm font-medium transition-all duration-200 ease-out hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB400] focus-visible:ring-offset-2";

function isExternalHref(href: string) {
  return /^https?:\/\//i.test(href);
}

export const FlexComponent = ({
  buttonClassName,
  buttonClassName2,
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
              delay: index * 0.2,
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
                    className="object-cover mb-2"
                  />
                )}
                {el.spanText3 ? (
                  <span className="text-[#ffb400] text-[1.5rem]">
                    {el.spanText3}
                  </span>
                ) : null}
                {el.heading1 ? (
                  <p className="text-[2.5rem] text-[#FFB400] leading-8">
                    {el.heading1}
                  </p>
                ) : null}
                {el.heading ? <p className="">{el.heading}</p> : null}
                {el.spanText ? (
                  <span className="text-[#ffb400]  text-[1.5rem]">
                    {el.spanText}
                  </span>
                ) : null}
                {el.spanText1 ? (
                  <span className="text-[#ffb400]  text-[2.5rem]">
                    {el.spanText1}
                  </span>
                ) : null}
                {el.heading4 ? <p>{el.heading4}</p> : null}
                {el.heading3 || el.spanText2 ? (
                  <h1 className="text-[18px] md:text-[25px]">
                    {el.spanText2 ? (
                      <span className="text-[#ffb400]">{el.spanText2}</span>
                    ) : null}
                    {el.heading3}
                  </h1>
                ) : null}
              </div>
              <p className={` font-extralight ${descClassName}`}>
                {el?.description}
              </p>
              <div className="xl:max-w-[100%]">
                {el.text1 ? <p className="pb-4">{el.text1}</p> : null}
                {el.text2 ? <p className="pb-4">{el.text2}</p> : null}
                {el.text3 ? <p className="pb-4">{el.text3}</p> : null}
                {el.text4 ? (
                  <p className="mt-3 border-l-4 border-[#FFBC00] pl-5 text-xl font-medium leading-snug text-inherit md:mt-4 md:pl-6 md:text-2xl mb-8 md:mb-10">
                    {el.text4}
                  </p>
                ) : null}
              </div>
              {(el?.buttonText || el?.buttonText2) && (
                <div
                  className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center ${el.text4 ? "mt-0" : "mt-2"}`}
                >
                  {el?.buttonText &&
                    (el.buttonHref ? (
                      isExternalHref(el.buttonHref) ? (
                        <a
                          href={el.buttonHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${ctaBase} bg-[#FFB400] text-black hover:bg-[#e5a300] ${buttonClassName ?? ""}`}
                        >
                          {el.buttonText}
                        </a>
                      ) : (
                        <Link
                          href={el.buttonHref}
                          className={`${ctaBase} bg-[#FFB400] text-black hover:bg-[#e5a300] ${buttonClassName ?? ""}`}
                        >
                          {el.buttonText}
                        </Link>
                      )
                    ) : (
                      <Button className={buttonClassName}>
                        {`${el?.buttonText}`}
                      </Button>
                    ))}
                  {el?.buttonText2 && el?.buttonHref2 && (
                    isExternalHref(el.buttonHref2) ? (
                      <a
                        href={el.buttonHref2}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${ctaBase} border-2 border-[#FFB400] bg-transparent text-[#1a1a1a] hover:bg-[#FFB400]/10 ${buttonClassName2 ?? ""}`}
                      >
                        {el.buttonText2}
                      </a>
                    ) : (
                      <Link
                        href={el.buttonHref2}
                        className={`${ctaBase} border-2 border-[#FFB400] bg-transparent text-[#1a1a1a] hover:bg-[#FFB400]/10 ${buttonClassName2 ?? ""}`}
                      >
                        {el.buttonText2}
                      </Link>
                    )
                  )}
                </div>
              )}
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
