"use client";

import React from 'react'
import ScholarshipHero from "../../../../public/assets/scholarship/heros.png";
import Image, { StaticImageData } from 'next/image'
import Container from '../../_component/shared'
import { GoArrowRight } from 'react-icons/go';
import { Button } from '@/app/_component/atom/button';
import Symbol from "../../../../public/assets/scholarship/henry.png";
import { FlexComponent } from "@/app/_component/atom/eduFlex";
import WritingGirl from  "../../../../public/assets/scholarship/girlwriting.png"
import Scholars from './ScholarCard';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Modal from '../../_component/ui/Modal';
import ScholarshipModal from '../../_component/ui/ScholarshipModal';
import { SponsorScholarshipButton, SponsorChildButton } from '@/app/_component/ui/Button';
import Empower from '@/app/_component/ui/Empower';

type ScholarshipData = {
  imgSrc: string | StaticImageData;
  heading: string;
  text: string;
  fullDescription?: string;
  eligibility?: string[];
  benefits?: string[];
  applicationDeadline?: string;
  contactEmail?: string;
  website?: string;
};

type BoxProps = {
  scholarship: ScholarshipData;
  onLearnMore: () => void;
};

const Box = ({ scholarship, onLearnMore }: BoxProps) => {
  return (
    <div className="group relative inline-block transition duration-800 ease-in-out h-full">
      <div className="p-6 hover:bg-[#FFB400] h-full bg-[#F8F8F8] flex flex-col items-center text-center">
        <Image
          src={scholarship.imgSrc}
          alt="SDG Icon"
          width={33}
          height={33}
          className="object-cover pb-5 transition duration-300 ease-in-out group-hover:grayscale group-hover:brightness-0"
        />
        <div className="flex flex-col items-center text-center h-[80%]">
          <h3 className="text-[16px] font-[500] mb-2">{scholarship.heading}</h3>
          <p className="text-black mb-4">{scholarship.text}</p>
        </div>
        <Button
          className="hover:text-white hover:bg-black w-[177px] py-2 transition duration-300 ease-in-out"
          btnFlex={true}
          icon={<GoArrowRight />}
          onClick={onLearnMore}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

const ScholarshipSlider = ({ support }: { support: ScholarshipData[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [selectedScholarship, setSelectedScholarship] = useState<ScholarshipData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Update slides to show based on screen size
  React.useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 640) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  const maxSlide = Math.max(0, support.length - slidesToShow);

  const nextSlide = () => {
    setCurrentSlide(prev => Math.min(prev + 1, maxSlide));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(Math.min(index, maxSlide));
  };

  const handleLearnMore = (scholarship: ScholarshipData) => {
    setSelectedScholarship(scholarship);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedScholarship(null);
  };

  return (
    <>
      <div className="relative">
        {/* Slider Container */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out gap-6"
            style={{
              transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
            }}
          >
            {support.map((scholarship, index) => (
              <div 
                key={index}
                className="flex-shrink-0"
                style={{ width: `calc(${100 / slidesToShow}% - ${(slidesToShow - 1) * 24 / slidesToShow}px)` }}
              >
                <Box
                  scholarship={scholarship}
                  onLearnMore={() => handleLearnMore(scholarship)}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="w-10 h-10 bg-[#FFB400] text-black rounded-full hover:bg-[#e0a800] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            <ChevronLeft size={20} />
          </button>
          
          {/* Pagination Dots */}
          <div className="flex gap-2">
            {Array.from({ length: maxSlide + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-[#FFB400]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          <button 
            onClick={nextSlide}
            disabled={currentSlide === maxSlide}
            className="w-10 h-10 bg-[#FFB400] text-black rounded-full hover:bg-[#e0a800] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedScholarship?.heading || "Scholarship Details"}
        maxWidth="2xl"
      >
        {selectedScholarship && (
          <ScholarshipModal scholarship={selectedScholarship} />
        )}
      </Modal>
    </>
  );
};

const page = () => {
  const data = [
    {
      spanText2: "Let's work together!",
      heading1:
        "Do you want to live a ​legacy or honor the ​memory of a loved one? ​",
      text1:
        "Together, we can make a difference in the lives of children ​and create legacies of compassion that impact generations ​to come.",
      text2:
        "Whether you are looking to establish personal, family, or ​corporate philanthropy, or seeking to honor the memory of ​a loved one, we are here to partner with you to achieve ​your goals. We relieve our partners of administrative ​burdens and implement transparent and efficient ​processes to help you transform lives and change society.",
      imageSrc: WritingGirl,
      buttonText: "",
    },
  ];

  const support: ScholarshipData[] = [
    {
      imgSrc: Symbol,
      heading: "The Henry Ofili STEM ​Scholarship",
      text: "The Henry Ofili Scholarship ​empowers academically ​exceptional children and youths ​from disadvantaged ​backgrounds to pursue career ​excellence in STEM",
      fullDescription:
        "The Henry Ofili STEM Scholarship is a comprehensive program designed to support academically exceptional students from disadvantaged backgrounds in pursuing STEM careers. This scholarship covers tuition, books, and living expenses while providing mentorship and career guidance.",
      eligibility: [
        "Must be from a disadvantaged economic background",
        "Minimum GPA of 3.5 in STEM subjects",
        "Demonstrated interest in STEM career paths",
        "Must be enrolled or accepted into a recognized institution",
      ],
      benefits: [
        "Full tuition coverage",
        "Monthly stipend for living expenses",
        "Textbook and equipment allowance",
        "One-on-one mentorship program",
        "Internship opportunities",
      ],
      applicationDeadline: "Applications close on March 31st, 2024",
      contactEmail: "hello@destinytrust.org",
      website: "https://ofilischolarship.destinytrust.org/",
    },
    {
      imgSrc: Symbol,
      heading: "Lolu Arr Scholarship",
      text: "The scholarship aims at providing ​education support to children ​within vulnerable groups as a ​means of ensuring their social ​and economic inclusion.",
      fullDescription:
        "The Lolu Arr Scholarship focuses on providing comprehensive educational support to children from vulnerable communities. This program aims to break the cycle of poverty through education and ensure social and economic inclusion for marginalized groups.",
      eligibility: [
        "Must be from a vulnerable or marginalized community",
        "Demonstrated financial need",
        "Good academic standing",
        "Age between 12-25 years",
      ],
      benefits: [
        "School fees coverage",
        "Educational materials",
        "Nutritional support",
        "Counseling and guidance services",
      ],
      applicationDeadline: "Rolling admissions throughout the year",
      contactEmail: "info@loluarr-scholarship.org",
    },
    {
      imgSrc: Symbol,
      heading: "GA Scholarship",
      text: "The scholarship aims at providing ​education support to children ​within vulnerable groups as a ​means of ensuring their social ​and economic inclusion.",
      fullDescription:
        "The GA Scholarship focuses on providing comprehensive educational support to children from vulnerable communities. This program aims to break the cycle of poverty through education and ensure social and economic inclusion for marginalized groups.",
      eligibility: [
        "Must be from a vulnerable or marginalized community",
        "Demonstrated financial need",
        "Good academic standing",
        "Age between 12-25 years",
      ],
      benefits: [
        "School fees coverage",
        "Educational materials",
        "Nutritional support",
        "Counseling and guidance services",
      ],
      applicationDeadline: "Rolling admissions throughout the year",
      contactEmail: "info@ga-scholarship.org",
    },
    {
      imgSrc: Symbol,
      heading: "Subomi Plumptre Trust Scholarship",
      text: "Subomi Plumptre Trust provides ​education opportunities for ​rehabilitated street children and ​orphans under residential care ​and supports them from primary ​school to the university.",
      fullDescription:
        "Subomi Plumptre Trust provides ​education opportunities for ​rehabilitated street children and ​orphans under residential care ​and supports them from primary ​school to the university.",
      eligibility: [
        "Must be from a vulnerable or marginalized community",
        "Demonstrated financial need",
        "Good academic standing",
        "Age between 12-25 years",
      ],
      benefits: [
        "School fees coverage",
        "Educational materials",
        "Nutritional support",
        "Counseling and guidance services",
      ],
      applicationDeadline: "Rolling admissions throughout the year",
      contactEmail: "subomiplumter-scholarship.org",
    },
    // Add more detailed scholarship data...
  ];

  return (
    <main>
      <section className="relative h-[86vh] w-full">
        <Image
          src={ScholarshipHero}
          alt="Our Team"
          fill
          className="object-cover object-center bg-no-repeat"
        />

        {/* Text Content */}
        <Container>
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 text-white">
            <div className="">
              <h1 className="md:text-left text-4xl md:text-5xl xl:text-[64px] md:w-[40rem] leading-10">
                Let&apos;s Invest In Our{" "}
                <span className="text-yellow">​Future</span>
                Together
              </h1>
              <p className="mt-4 text-base md:text-lg md:text-left w-full md:w-[37rem] pt-4 pb-8">
                We partner with compassionate individuals and organisations to
                ​administer scholarship programmes that meet our shared goal of
                ​empowering children with education from primary school to the
                ​university.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 w-[40%]">
              <SponsorScholarshipButton className='border border-white' />
              <SponsorChildButton className='bg-yellow hover:bg-yellow' />
            </div>
          </div>
        </Container>
      </section>

      {/* Scholarship Cards Slider */}
      <section className="py-10">
        <Container>
          <ScholarshipSlider support={support} />
        </Container>
      </section>

      <section className="py-[4rem] mt-[4rem] bg-scholar">
        <FlexComponent
          data={data}
          columnReversed={true}
          buttonClassName=""
        />
      </section>
      <section>
        <Scholars />
      </section>
      <section className="">
        <Empower />
      </section>
    </main>
  );
}

export default page