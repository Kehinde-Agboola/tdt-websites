'use client'
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

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
      <div className="relative w-full h-[86vh] flex items-center text-white">
        {/* Background Image with Animation */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Image
            src={imagePath}
            alt="Hero background"
            layout="fill"
            objectFit="cover"
            quality={75}
          />
        </motion.div>

        {/* Content with animations */}
        <div className="relative px-4 md:px-16">
          <motion.h1
            className="md:text-[64px] text-[40px] text-yellow"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="mt-4 text-lg max-w-[37rem]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          >
            {description}
          </motion.p>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
