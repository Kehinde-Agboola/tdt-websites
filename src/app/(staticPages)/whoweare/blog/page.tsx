'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Container from "@/app/_component/shared";
import { articles } from "@/app/constant";
import { recentPosts } from "@/app/constant";
import Image from "next/image";
import Children from "../../../../../public/assets/blog/children.png";
import Link from "next/link";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Email from "@/app/_component/atom/Email";

const BlogPage = () => {
  

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate total pages
  const totalPages = Math.ceil(articles.length / itemsPerPage);

  // Get paginated articles
  const paginatedArticles = articles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

// function slugify(title: string): string {
//   return title
//     .toLowerCase()
//     .replace(/[^a-z0-9]+/g, "-")
//     .replace(/^-+|-+$/g, "");
// }



  return (
    <main className="bg-[#F4F4F4] py-10">
      <Container>
        <section className="mb-10 text-center">
          <div className="mb-10">
            <h1 className="text-2xl md:text-3xl text-gray-800 mb-4">
              Inside Transformation: Stories and Interviews
            </h1>
            <p className="text-[#333333]">
              Enter your email to stay up to date on how we make a difference
              together
            </p>
          </div>
          <Email />
        </section>
        <section className="mb-10 mt-[5rem]">
          <h2 className="text-[24px] text-[#000] mb-6">Recent Blog Post</h2>
          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Featured Post */}
            <div className=" overflow-hidden">
              <Image
                src={Children}
                width={574}
                height={392}
                alt="school children"
                className="object-cover mb-4"
              />
              <p className="text-sm text-[#333333] mb-2">
                Samuel Adeshina • September 12, 2024
              </p>
              <a className="text-lg font-medium text-[#232323] mb-2">
                A Thousand Smiles: How Our NGO’s Back-to-School Outreach
                Transformed the Lives of 1,000 Children
              </a>
              <p className="text-sm text-[#333333]">
                As the sun rose on a crisp August morning, excitement buzzed in
                the air. For months, our team at The Destiny Trust had been
                planning and preparing for this day, and finally, it had
                arrived.
              </p>
            </div>

            {/* Recent Posts (List of Posts) */}
            <div className="space-y-6">
              {recentPosts.map((post, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row overflow-hidden"
                >
                  {/* Post Image */}
                  <Image
                    src={post.image}
                    alt={post.title}
                    className=" object-cover"
                    width={314}
                    height={202}
                  />
                  {/* Post Content */}
                  <div className="ml-4">
                    <Link href={`/blogs/${post.title}`}>
                      <h3 className="text-lg font-[500] text-[18px] text-[#232323] hover:underline">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-[#333333] my-2">{post.author}</p>
                    <p className="text-sm text-[#333333]">{post.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Blog Post Section */}
        <section>
          <div className="py-10 bg-[#F4F4F4]">
            <Container>
              <h2 className="text-2xl font-bold mb-6">All Blog Posts</h2>

              {/* Desktop Cards */}
              <motion.div
                className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.2 },
                  },
                }}
              >
                {paginatedArticles.map((article, index) => (
                  <motion.div
                    key={index}
                    className="overflow-hidden"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <Image
                      src={article.imgSrc}
                      alt={article.title}
                      className="object-cover w-full h-60"
                    />
                    <div className="pt-4">
                      <h3 className="text-lg font-[500] text-[18px] text-[#232323]">
                        {article.title}
                      </h3>
                      <p className="text-sm text-[#333333] mb-2 py-4">
                        {article.author} • {article.date}
                      </p>
                      <p className="text-sm text-[#333333] mb-4">
                        {article.description}
                      </p>
                      <Link href={`#/`}>
                        <button className="bg-[#FFB400] text-black py-2 px-4">
                          Read More
                        </button>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Pagination */}
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 ${
                    currentPage === 1
                      ? "bg-gray-300 text-gray-500"
                      : "bg-black text-white"
                  } rounded-md mx-1`}
                >
                  Previous
                </button>

                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    className={`px-4 py-2 text-black border border-gray-500 rounded-md mx-1 ${
                      currentPage === i + 1
                        ? "bg-yellow text-white"
                        : "hover:bg-yellow"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 ${
                    currentPage === totalPages
                      ? "bg-gray-300 text-gray-500"
                      : "bg-black text-white"
                  } rounded-md mx-1`}
                >
                  Next
                </button>
              </div>
            </Container>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default BlogPage;
