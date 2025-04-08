"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image, { StaticImageData } from "next/image";
import Latest from "../../../../public/assets/home/latest.png";
import Container from "../../_component/shared";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import the arrow icons

type BoxProps = {
  imgSrc: string | StaticImageData;
  title: string;
  author: string;
  date: string;
  description: string;
  buttonText: string;
};

const Card = ({ title, author, date, description, imgSrc }: BoxProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }} // Animation on load
    whileInView={{ opacity: 1, y: 0 }} // Animation when in viewport
    viewport={{ once: true }} // Trigger animation only once
    transition={{ duration: 0.5, delay: 0.1 }} // Smooth transition
    className="overflow-hidden"
  >
    <motion.div
      className="relative w-full h-60 overflow-hidden"
      whileHover={{ scale: 1.1 }} // Zoom in on hover
      transition={{ duration: 0.8, ease: "easeInOut" }} // Slow zoom-in and zoom-out
    >
      <Image src={imgSrc} alt={title} layout="fill" objectFit="cover" />
    </motion.div>
    <div className="pt-4">
      <h3 className="text-lg font-[500] text-[18px] text-[#232323]">{title}</h3>
      <p className="text-sm text-[#333333] mb-2 py-4">
        {author} • {date}
      </p>
      <p className="text-sm text-[#333333] mb-4">{description}</p>
      <Link href={"/whoweare/blog"}>
        <button className="bg-[#FFB400] text-black py-2 px-4">Read More</button>
      </Link>
    </div>
  </motion.div>
);

const NavigationButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="flex justify-end gap-4 mt-4">
      <button
        onClick={() => swiper.slidePrev()}
        className="p-2 bg-[#FFB400] rounded-full text-black"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="p-2 bg-[#FFB400] rounded-full text-black"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

const Blog = () => {
  const articles = [
    {
      title: "1,000 children benefit as NGO embarks on back-to-school outreach",
      author: "Samuel Adeshina",
      date: "September 12, 2024",
      description:
        "Creating a beautiful indoor garden is a rewarding way to bring nature into your home, enhancing both your living space and your well-being.",
      imgSrc: Latest,
    },
    {
      title: "1,000 children benefit as NGO embarks on back-to-school outreach",
      author: "Samuel Adeshina",
      date: "September 12, 2024",
      description:
        "Creating a beautiful indoor garden is a rewarding way to bring nature into your home, enhancing both your living space and your well-being.",
      imgSrc: Latest,
    },
    {
      title: "1,000 children benefit as NGO embarks on back-to-school outreach",
      author: "Samuel Adeshina",
      date: "September 12, 2024",
      description:
        "Creating a beautiful indoor garden is a rewarding way to bring nature into your home, enhancing both your living space and your well-being.",
      imgSrc: Latest,
    },
    {
      title: "1,000 children benefit as NGO embarks on back-to-school outreach",
      author: "Samuel Adeshina",
      date: "September 12, 2024",
      description:
        "Creating a beautiful indoor garden is a rewarding way to bring nature into your home, enhancing both your living space and your well-being.",
      imgSrc: Latest,
    },
    {
      title: "1,000 children benefit as NGO embarks on back-to-school outreach",
      author: "Samuel Adeshina",
      date: "September 12, 2024",
      description:
        "Creating a beautiful indoor garden is a rewarding way to bring nature into your home, enhancing both your living space and your well-being.",
      imgSrc: Latest,
    },
    {
      title: "1,000 children benefit as NGO embarks on back-to-school outreach",
      author: "Samuel Adeshina",
      date: "September 12, 2024",
      description:
        "Creating a beautiful indoor garden is a rewarding way to bring nature into your home, enhancing both your living space and your well-being.",
      imgSrc: Latest,
    },
  ];

  return (
    <div className="py-10 bg-[#F4F4F4]">
      <Container>
        <h2 className="text-2xl font-bold text-center mb-6">
          <span className="text-yellow-500">Our Stories</span>
        </h2>

        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="pb-6"
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {articles.map((article, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card buttonText={""} {...article} />
              </motion.div>
            </SwiperSlide>
          ))}
          <NavigationButtons />
        </Swiper>
      </Container>
    </div>
  );
};

export default Blog;
