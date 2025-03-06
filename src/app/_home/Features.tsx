"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const FeaturedLogosMarquee = () => {
  const logos = [
    {
      src: "/assets/features/guardian_logo.png", // Replace with the actual path to the logo
      alt: "The Guardian Logo",
    },
    {
      src: "/assets/features/techpoint-logo.png", // Replace with the actual path to the logo
      alt: "Techpoint.ng Logo",
    },
    {
      src: "/assets/features/the-cable.png", // Replace with the actual path to the logo
      alt: "The Cable Logo",
    },
    {
      src: "/assets/features/Tribune-Online-Homelogo.jpeg", // Replace with the actual path to the logo
      alt: "Nigerian Tribune Logo",
    },
    {
      src: "/assets/features/fij_logo.png", // Replace with the actual path to the logo
      alt: "Foundation for Investigative Journalism Nigeria Logo",
    },
    {
      src: "/assets/features/bella-naija.png", // Replace with the actual path to the logo
      alt: "Bella Naija Logo",
    },
  ];

  return (
    <section className="py-12 bg-[#F9F9F9]">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
          Featured In
        </h2>
        <Marquee speed={50} gradient={false}>
          {logos.map((logo, index) => (
            <div
              key={index}
              className="mx-8 flex items-center justify-center w-[150px] h-[80px]" 
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={150} // Set a fixed width
                height={80} // Set a fixed height
                className="object-contain w-full h-full" 
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default FeaturedLogosMarquee;
