"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "../../../../public/assets/Logowhite.png";
import Email from "../atom/Email";

function ContactBlock() {
  return (
    <div>
      <p className="text-sm underline mb-2">
        <a href="mailto:info@destinytrust.org">info@destinytrust.org</a>
      </p>
      <p className="text-sm mb-2">+234 813 800 2859</p>
      <div className="space-y-3 text-sm">
        <div>
          <p className="font-semibold text-[#FFB400]">Lagos:</p>
          <p className="mt-1">
            TDT Centre, 6, Brilla F.M Road, Off Bola Tinubu Road, Bogije Town,
            Ibeju-Lekki, Lagos
          </p>
        </div>
        <div>
          <p className="font-semibold text-[#FFB400]">Ibadan:</p>
          <p className="mt-1">
            9, Kunle Abass Street, off Soun Ajagungbade Avenue, New Bodija,
            Ibadan
          </p>
        </div>
      </div>
    </div>
  );
}

const Footer = () => {
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
    <footer className="shrink-0 bg-black text-white py-10 px-2 pb-[max(2.5rem,env(safe-area-inset-bottom))]">
      <div className="max-w-6xl mx-auto xl:px-0 md:px-4 px-4">
        <motion.section
          className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:items-start lg:gap-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Logo — mobile first; desktop: start of left column */}
          <motion.div
            className="w-full lg:flex-[2] lg:text-left space-y-4"
            variants={fadeIn}
          >
            <Image
              src={Logo}
              alt="The Destiny Trust"
              className="w-[70%] md:mx-auto lg:mx-0"
            />
            <div className="hidden lg:block">
              <ContactBlock />
            </div>
          </motion.div>

          {/* Explore — second on mobile (after logo) */}
          <motion.div
            className="w-full lg:flex-1 lg:text-left order-2 lg:order-none"
            variants={staggerContainer}
          >
            <motion.div className="w-full md:max-w-[60%] md:mx-auto lg:mx-0 lg:w-[60%]" variants={fadeIn}>
              <h4 className="text-yellow font-semibold mb-4">Explore</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/whoweare">Who Are We</a>
                </li>
                <li>
                  <a href="/whatwedo">What We Do</a>
                </li>
                <li>
                  <a href="/OurProject">Projects</a>
                </li>
                <li>
                  <a href="/scholarship">Scholarship</a>
                </li>
                <li>
                  <a href="/ShopForGood">Shop for Good</a>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact — third on mobile only */}
          <motion.div
            className="w-full lg:hidden order-3"
            variants={fadeIn}
          >
            <ContactBlock />
          </motion.div>

          {/* Newsletter */}
          <motion.div
            className="flex flex-col items-center w-full lg:flex-[2] order-4 lg:order-none"
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

        <motion.div
          className="text-center text-sm mt-10 w-full mb-0"
          variants={fadeIn}
          custom={0.8}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          &copy; 2025 The Destiny Trust. All Rights Reserved.
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
              Kids Innovation Africa
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
