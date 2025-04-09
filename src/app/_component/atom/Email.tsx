import React from "react";
import { motion } from "framer-motion"; 

const Email = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay },
    }),
  };

  return (
    <motion.section
      variants={fadeIn}
      custom={0.4}
      initial="hidden"
      animate="visible"
    >
      <form className="pt-4">
        <div className="relative">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="focus:outline-none text-[#777777] px-6 py-3 w-full pr-28 border border-black"
          />
          <button
            type="submit"
            aria-label="Subscribe to newsletter"
            className="bg-[#FFB400] absolute right-2 top-1/2 transform -translate-y-1/2 px-6 text-black py-2 "
          >
            Subscribe
          </button>
        </div>
      </form>
    </motion.section>
  );
};

export default Email;
