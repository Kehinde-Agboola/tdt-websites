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
        {/* Subscription Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="w-full md:w-[510px]"
            variants={fadeIn}
            custom={0.2}
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Be part of a better tomorrow
            </h2>
            <p className="text-sm sm:text-base text-[#CACBCF] mb-6">
              Enter your email to stay up to date on how we make a difference
              together
            </p>
          </motion.div>
          <Email/>
        </motion.div>
      </Container>

      <Container>
        {/* Footer Main Section */}
        <motion.section
          className="mt-[10rem] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Section: Logo and Description */}
          <motion.div className="lg:w-1/3 space-y-4" variants={fadeIn}>
            <Image src={Logo} alt="The Destiny Trust" className="w-[70%]" />
            <p className="text-sm text-justify w-[300px]">
              Lorem ipsum dolor sit amet consectetur. Urna ornare pretium
              placerat nibh amet nulla consequat habitasse.
            </p>
          </motion.div>

          {/* Right Section: Links and Contact */}
          <motion.div
            className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
            variants={staggerContainer}
          >
            {/* Explore Links */}
            <motion.div variants={fadeIn}>
              <h4 className="text-yellow font-semibold mb-4">Explore</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#">Get Involved</a>
                </li>
                <li>
                  <a href="#">Company services</a>
                </li>
                <li>
                  <a href="#">Job opportunities</a>
                </li>
                <li>
                  <a href="#">Creative people</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </motion.div>

            {/* Support Links */}
            <motion.div variants={fadeIn}>
              <h4 className="text-yellow font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#">About company</a>
                </li>
                <li>
                  <a href="#">Company services</a>
                </li>
                <li>
                  <a href="#">Job opportunities</a>
                </li>
                <li>
                  <a href="#">Creative people</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={fadeIn}>
              <h4 className="text-yellow font-semibold mb-4">Contact Us</h4>
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
        </motion.section>

        {/* Footer Bottom Section */}
        <motion.div
          className="text-center text-sm mt-10"
          variants={fadeIn}
          custom={0.8}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          &copy; 2024 The Destiny Trust. All Rights Reserved.
          <p className="text-white text-center md:text-right">
            powered by the{" "}
            <a href="https://www.kidsinnovation.africa/" className="underline">
              Kid&apos;s Innovation Hub Africa
            </a>
          </p>
        </motion.div>
      </Container>
    </footer>
  );
};

export default Footer;
