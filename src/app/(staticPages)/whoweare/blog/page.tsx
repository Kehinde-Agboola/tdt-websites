"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Container from "@/app/_component/shared";
import { featuredPost } from "@/app/constant";
import { articles } from "@/app/constant";
import { recentPosts } from "@/app/constant";
import Image from "next/image";
// import Children from "../../../../../public/assets/blog/ourschool.png";
import Link from "next/link";
import Email from "@/app/_component/atom/Email";

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const totalPages = Math.ceil(articles.length / itemsPerPage);

  const paginatedArticles = articles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // featuredPost may be exported as an object or an array (compatibility with older code)
  // Ensure we always have a single featured object to read from
  const featured = Array.isArray(featuredPost) ? featuredPost[0] : featuredPost;

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Inside Transformation
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Stories, insights, and interviews on how we make a difference
                together
              </p>
              <div className="max-w-md mx-auto">
                <Email />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Featured Post Section */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Featured Story
            </h2>
            <div className="h-px bg-gradient-to-r from-[#FFB400] to-transparent flex-grow ml-6"></div>
          </div>

            <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={featured.Image}
                width={574}
                height={392}
                alt={featured.title || "featured image"}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="space-y-4">
              <span className="inline-block px-4 py-1 bg-[#FFB400] text-sm font-medium rounded-full">
              Featured
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                {featured.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {featured.description}
              </p>
              <Link
                href={`/whoweare/blog/${featured.slug}`}
              className="inline-flex items-center text-[#FFB400] font-semibold hover:text-[#e6a200] transition-colors group"
              >
              Read the full story
              <svg
                className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
              </Link>
            </div>
            </motion.div>
        </Container>
      </section>

      {/* Recent Posts Grid */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Recent Posts
            </h2>
            <div className="h-px bg-gradient-to-r from-[#FFB400] to-transparent flex-grow ml-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <Link
                  href={`/whoweare/blog/${post.slug}`}
                  className="block focus:outline-none focus:ring-2 focus:ring-[#FFB400] focus:ring-offset-2 rounded-xl"
                  aria-label={`Read article: ${post.title}`}
                >
                  <div className="relative overflow-hidden h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      width={314}
                      height={202}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#FFB400] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                      {post.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* All Blog Posts Section */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              All Stories
            </h2>
            <div className="h-px bg-gradient-to-r from-[#FFB400] to-transparent flex-grow ml-6"></div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {paginatedArticles.map((article, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#FFB400] hover:shadow-xl transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Link href={`/whoweare/blog/${article.slug}`}>
                  <div className="relative overflow-hidden h-56">
                    <Image
                      src={article.imgSrc}
                      alt={article.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                      Article
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#FFB400] transition-colors line-clamp-2 leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                      {article.description}
                    </p>
                    <div className="flex items-center text-[#FFB400] font-medium text-sm group-hover:translate-x-2 transition-transform">
                      Read more
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Pagination */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-12">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                currentPage === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-900 text-white hover:bg-gray-800"
              }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`w-10 h-10 rounded-lg font-medium transition-all ${
                  currentPage === i + 1
                    ? "bg-[#FFB400] text-white shadow-lg scale-110"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-[#FFB400] hover:text-[#FFB400]"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                currentPage === totalPages
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-900 text-white hover:bg-gray-800"
              }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default BlogPage;
