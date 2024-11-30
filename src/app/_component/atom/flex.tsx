import { Button } from "./button";
import Image, { StaticImageData } from "next/image";
import Container from "../shared/index"
type FlexComponentProps = {
  buttonClassName?: string;
  columnReversed?: boolean;
  data?: Array<{
    description?: string;
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
  descClassName,
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
            <div className="lg:basis-[50%] w-full lg:text-justify">
              <div className=" pb-3">
                {el?.imageSrc1 && (
                  <Image
                    src={el?.imageSrc1}
                    alt={el?.heading || "Image"}
                    className=" object-cover"
                  />
                )}
                <p className="text-[2.5rem] text-[#FFB400] ">{el.heading1}</p>
                <p className="pt-2">{el.heading}</p>
                <span className="text-[#ffb400] font-bold text-[1.5rem] ">
                  {el.spanText}
                </span>
                <h1 className="text-[18px] md:text-[26px]">{el.heading3}</h1>
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
            </div>
            <div className="lg:basis-[40%] flex-basis-[50%]">
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
