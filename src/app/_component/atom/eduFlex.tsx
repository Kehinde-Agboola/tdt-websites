import { Button } from "./button";
import Image, { StaticImageData } from "next/image";
import Container from "../shared/index";
type FlexComponentProps = {
  buttonClassName?: string;
  columnReversed?: boolean;
  data?: Array<{
    heading1?: string;
    heading3?: string;
    imageSrc?: string | StaticImageData;
    imageSrc1?: string | StaticImageData;
    text3?: string;
    text1?: string;
    text2?: string;
    spanText?: string;
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
          <div
            key={index}
            className={`flex ${
              columnReversed
                ? "flex-col-reverse lg:flex-row-reverse"
                : "flex-col-reverse lg:flex-row"
            } justify-center items-center gap-10 lg:gap-10 lg:justify-between`}
          >
            <div className="lg:basis-[65%] w-full ">
              <div className="">
                {el?.imageSrc1 && (
                  <Image
                    src={el?.imageSrc1}
                    alt={el?.spanText || "Image"}
                    className=" object-cover pb-3"
                  />
                )}
                <span className="text-[#ffb400] text-[16px] md:text-[24px]">
                  {el.spanText}
                </span>
                <p className=" text-[16px] md:text-[24px]   text-[#333333] ">
                  {el.heading1}
                </p>
                <p className=" text-[16px] md:text-[24px]   text-[#fff]"> {el.heading}</p>
              </div>

              <div className="xl:max-w-[100%] lg:text-justify">
                <p className="pt-4">{el.text1}</p>
                <p className="pt-4">{el.text2}</p>
                <p className="pb-4">{el.text3}</p>
              </div>
              <div>
                <Button className={buttonClassName}>
                  {`${el?.buttonText}`}
                </Button>
              </div>
            </div>
            <div className="lg:basis-[50%] flex-basis-[50%]">
              {/* Image Section */}
              {el?.imageSrc && (
                <Image
                  src={el?.imageSrc}
                  alt={el?.heading || "Image"}
                  className=" object-cover"
                />
              )}
            </div>
          </div>
        );
      })}
    </Container>
  );
};
