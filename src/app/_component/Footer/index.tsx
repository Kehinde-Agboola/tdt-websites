"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Container from "../shared";
import Logo from "../../../../public/assets/Logowhite.png";
import Email from "../atom/Email";
const Footer = () => {
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay },
    }),
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  return (
    <footer className="bg-black text-white py-10 px-2">
      <Container>
        {/* Footer Main Section */}
        {/* Footer Main Section */}
        {/* Footer Main Section */}
        <motion.section
          className="mt-[10rem] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Section: Logo and Description */}
          <motion.div
            className="w-full lg:flex-[2] space-y-4 text-center lg:text-left  "
            variants={fadeIn}
          >
            <Image
              src={Logo}
              alt="The Destiny Trust"
              className="w-[70%] mx-auto lg:mx-0"
            />
            <motion.div variants={fadeIn}>
              <p className="text-sm underline mb-2">
                <a href="mailto:info@destinytrust.org">info@destinytrust.org</a>
              </p>
              <p className="text-sm mb-2">+234 813 800 2859</p>
              <p className="text-sm">
                TDT Centre, 6, Brilla F.M Road, Off Bola Tinubu Road, Bogije
                Town, Ibeju-Lekki, Lagos.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Section: Links and Contact */}
          <motion.div
            className="w-full lg:flex-1 text-center lg:text-left"
            variants={staggerContainer}
          >
            <motion.div className="w-[60%] mx-auto" variants={fadeIn}>
              <h4 className="text-yellow font-semibold mb-4">Explore</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="/whowearem">who we are</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/projects/bridgelearning">Bridge Learning</a>
                </li>
                <li>
                  <a href="/scholarship">Scholarship</a>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Subscription Section (Larger) */}
          <motion.div
            className="flex flex-col items-center w-full lg:flex-[2] "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeIn} custom={0.2}>
              <h2 className="text-[1rem] sm:text-[1rem] font-bold mb-2">
                Be part of a better tomorrow
              </h2>
              <p className="text-base sm:text-lg text-[#CACBCF] mb-2 max-w-[500px]">
                Enter your email to stay up to date on how we make a difference
                together.
              </p>
            </motion.div>
            <div className="w-full max-w-[450px]">
              <Email />
            </div>
          </motion.div>
        </motion.section>

        {/* Footer Bottom Section */}
        <motion.div
          className="text-center text-sm mt-10 w-full"
          variants={fadeIn}
          custom={0.8}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          &copy; 2024 The Destiny Trust. All Rights Reserved.
          <p className="text-white text-center md:text-right">
            Developed by the Destiny Trust Children at
          </p>
          <p className="text-white text-center md:text-right">
             the{" "}
            <a
              href="https://www.kidsinnovation.africa/"
              target="_blank"
              className="underline"
            >
              Kid's Innovation Africa
            </a>
          </p>
        </motion.div>
      </Container>
    </footer>
  );
};

export default Footer;
