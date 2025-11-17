"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image, { StaticImageData } from "next/image";
import Container from "../../_component/shared";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import the arrow icons
import { articles as blogArticles } from "../../constant"; // Import articles from constants

// Slugify function to create URL-friendly slugs
function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

type BoxProps = {
  imgSrc: string | StaticImageData;
  title: string;
  author?: string;
  date?: string;
  description: string;
  buttonText: string;
};

const Card = ({ title, author, date, description, imgSrc }: BoxProps) => {
  const blogSlug = slugify(title);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Animation on load
      whileInView={{ opacity: 1, y: 0 }} // Animation when in viewport
      viewport={{ once: true }} // Trigger animation only once
      transition={{ duration: 0.5, delay: 0.1 }} // Smooth transition
      className="overflow-hidden bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col"
    >
      <Link href={`/whoweare/blog/${blogSlug}`} className="block h-full">
        <motion.div
          className="relative w-full h-60 overflow-hidden"
          whileHover={{ scale: 1.05 }} // Reduced scale for better UX
          transition={{ duration: 0.3, ease: "easeInOut" }} // Faster, smoother transition
        >
          <Image src={imgSrc} alt={title} fill className="object-cover" />
        </motion.div>
        <div className="pt-4 px-4 pb-6 flex flex-col h-full">
          <h3 className="text-lg font-[500] text-[18px] text-[#232323] hover:text-[#FFB400] transition-colors duration-300 line-clamp-2">
            {title}
          </h3>
          {(author || date) && (
            <p className="text-sm text-[#333333] mb-2 py-2">
              {author}{author && date ? ` • ${date}` : date}
            </p>
          )}
          <p className="text-sm text-[#333333] mb-4 line-clamp-3 flex-1">{description}</p>
          <span className="mt-4 inline-flex items-center justify-center bg-[#FFB400] text-black py-2 px-4 rounded hover:bg-[#e6a200] transition-colors duration-300">
            Read More
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

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
  // Use the first 6 articles from constants for the carousel
  const displayArticles = blogArticles.slice(0, 6);

  return (
    <div className="py-10 bg-[#F4F4F4]">
      <Container>
        <h2 className="text-2xl font-bold text-center mb-6">
          <span className="text-yellow-500 text-[1.5rem] md:text-[2.5rem]">Our Stories</span>
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
          {displayArticles.map((article, index) => (
            <SwiperSlide key={article.id || index}>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="h-full"
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
