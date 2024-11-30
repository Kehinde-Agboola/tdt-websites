import Image, { StaticImageData } from "next/image";
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
          <h1 className="md:text-[64px] text-[40px] text-yellow">{title}</h1>
          <p className="mt-4 text-lg max-w-[37rem]">{description}</p>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
