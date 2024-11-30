import { Button } from "./button";
import Image, { StaticImageData } from "next/image";

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

export const AltComponent = ({
  buttonClassName,
  columnReversed,
  data,
}: FlexComponentProps) => {
  return (
    <main>
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
            <div className="lg:basis-[75%] w-full md:px-14 px-4 ">
              <div className="">
                {el?.imageSrc1 && (
                  <Image
                    src={el?.imageSrc1}
                    alt={el?.heading || "Image"}
                    className=" object-cover pb-3"
                  />
                )}
                <span className="text-[#ffb400] text-[16px] md:text-[24px]">
                  {el.spanText}
                </span>
                <p className=" text-[16px] md:text-[24px]   text-[#333333] ">
                  {el.heading1}
                </p>
                {el.heading}
              </div>

              <div className="xl:max-w-[100%] lg:text-justify">
                <p className="pt-4">{el.text1}</p>
                <p className="">{el.text2}</p>
                <p className="pb-4">{el.text3}</p>
              </div>
              <div>
                <Button className={buttonClassName}>
                  {`${el?.buttonText}`}
                </Button>
              </div>
            </div>
            <div className="lg:basis-[70%] flex-basis-[50%]">
              {/* Image Section */}
              {el?.imageSrc && (
                <Image
                  src={el?.imageSrc}
                  alt={el?.heading || "Image"}
                  className=" object-cover pl-6 md:pl-0"
                />
              )}
            </div>
          </div>
        );
      })}
    </main>
  );
};
