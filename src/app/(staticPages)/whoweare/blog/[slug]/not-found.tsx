'use client'
import React from "react";
import { motion } from "framer-motion";
import Container from "@/app/_component/shared";
import Link from "next/link";
// import Image from "next/image";

const NotFoundPage = () => {
  return (
    <main className="bg-white min-h-screen flex items-center justify-center py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* 404 Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="text-8xl font-bold text-[#FFB400] mb-4">404</div>
            <svg 
              className="w-24 h-24 mx-auto text-gray-300"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Blog Post Not Found
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Sorry, we couldn&#39;t find the blog post you&#39;re looking for. 
              It may have been moved, deleted, or the link might be incorrect.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/whoweare/blog"
              className="inline-flex items-center px-6 py-3 bg-[#FFB400] text-black font-medium rounded-lg hover:bg-[#e6a200] transition-colors duration-300"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blog
            </Link>
            
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-300"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Go Home
            </Link>
          </motion.div>

          {/* Suggestions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 p-6 bg-gray-50 rounded-lg"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              What you can do:
            </h3>
            <ul className="text-gray-600 space-y-2 text-left max-w-md mx-auto">
              <li className="flex items-start">
                <span className="text-[#FFB400] mr-2">•</span>
                Check the URL for any typos
              </li>
              <li className="flex items-start">
                <span className="text-[#FFB400] mr-2">•</span>
                Browse our latest blog posts
              </li>
              <li className="flex items-start">
                <span className="text-[#FFB400] mr-2">•</span>
                Return to the homepage
              </li>
              <li className="flex items-start">
                <span className="text-[#FFB400] mr-2">•</span>
                Contact us if you believe this is an error
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </Container>
    </main>
  );
};

export default NotFoundPage;