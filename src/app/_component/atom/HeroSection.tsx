import Image, { StaticImageData } from "next/image";
import Container from "../shared";
interface HeroSectionProps {
  title: string;
  description: string;
  imagePath: string | StaticImageData;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  imagePath,
}) => {
  return (
    <main>
      <div className="relative w-full h-[70vh] flex items-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={imagePath}
            alt="Hero background"
            layout="fill"
            objectFit="cover"
            quality={75}
          />
        </div>

        {/* Content */}
        <div className="relative px-4 md:px-16">
          <h1 className="text-5xl font-bold text-yellow">{title}</h1>
          <p className="mt-4 text-lg max-w-[37rem]">{description}</p>
        </div>
      </div>
      <Container>
        <section className="mt-[5rem]">
          <p className="xl:text-[25px] text-[18px] text-[#333333] w-full md:max-w-[60rem] text-justify">
            <span className="text-yellow">
              Our Education Access initiative{" "}
            </span>
            targets children in informal settlements. This unique demography has
            peculiar difficulty in taking advantage of the free education policy
            where it is offered.
          </p>
        </section>
      </Container>
    </main>
  );
};

export default HeroSection;
