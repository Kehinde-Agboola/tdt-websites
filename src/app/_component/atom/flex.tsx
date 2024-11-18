import { Button } from "./button";
import Image, { StaticImageData } from "next/image";
import Container from "../shared/index"
type FlexComponentProps = {
  buttonClassName?: string;
  columnReversed?: boolean;
  data?: Array<{
    description?: string;
    imageSrc?: string | StaticImageData;
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
              <div className="text-purple text-[1.5rem] pb-3">
                <span className="text-[#FFB400] font-bold">{el.spanText}</span>{" "}
                {el.heading}
              </div>
              <p className={`pb-3 font-extralight ${descClassName}`}>
                {el?.description}
              </p>
              <div className="xl:max-w-[100%]">
            
                  <p className="pb-4">{el.text1}</p>
                  <p>{el.text2}</p>
                
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
