import React from "react";
import { Button } from "./button"; // Adjust the import path based on your project structure
import Image from "next/image"
import { StaticImageData } from "next/image";
interface ScholarCardProps {
  name: string;
  description: string;
  imageSrc: string | StaticImageData;
  buttonText: string;
}

const ScholarCard: React.FC<ScholarCardProps> = ({
  name,
  description,
  imageSrc,
  buttonText,
}) => {
  return (
    <div className="bg-[#F8F8F8] shadow-lg  overflow-hidden w-[23rem]">
      <Image src={imageSrc} alt={name} className="w-full h-80 object-cover" />
      <div className="p-6 text-justify">
        <h3 className="text-[24px] font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600 mt-6 text-sm">{description}</p>
        {buttonText && (
          <Button className="mt-4 border-2 border-yellow px-6 py-2">
            {buttonText}
          </Button>
        )}
    
      </div>
    </div>
  );
};

export default ScholarCard;
