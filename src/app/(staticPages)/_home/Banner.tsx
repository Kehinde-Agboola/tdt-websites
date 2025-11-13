"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion} from "framer-motion";
import Container from "@/app/_component/shared";
import Bag from "../../../../public/assets/ecommerce/bags.png";

const Banner = () => {
  // const reduceMotion = useReducedMotion();

  // // gentle float for the image
  // // const floatAnim = reduceMotion
  // //   ? {}
  // //   : {
  // //       y: [0, -8, 0],
  // //       transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  // //     };

  return (
    <Container>
      <section className="bg-yellow bg-payment pt-8  my-[6rem] md:my-[8rem]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-6">
          {/* Image: bigger on mobile + animated */}
          <div
            
            className="order-1 md:order-none w-full flex justify-center"
          >
            <Image
              src={Bag}
              alt="The Destiny Trust bag"
              priority
              className="
                w-[85%] xs:w-[80%] sm:w-[65%] md:w-[75%] 
                max-w-[520px] drop-shadow-lg
              "
              sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 520px"
            />
          </div>

          {/* Copy */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.08 }}
            className="w-full md:max-w-[38rem] text-center md:text-left"
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
              }}
              className="text-white font-bold tracking-wide"
            >
              30% Of All Sales To Children
            </motion.p>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
              }}
              className="text-[28px] sm:text-[32px] md:text-[40px] leading-tight mt-2 text-black"
            >
              Shop For Good
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
              }}
              className="mt-3 text-[15px] sm:text-[16px] text-black/90"
            >
              Discover beautifully crafted wears, bags, and lifestyle
              accessories made with love by our children and low-income women.
              {/* Every purchase directly supports a child’s education and future. */}
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
              }}
              className="pt-3 text-black"
            >
              {/* Shop with purpose. Give hope. */}
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
              }}
              className="mt-5 flex justify-center md:justify-start"
            >
              <Link
                href="/ShopForGood"
                className="py-2.5 px-6 bg-white/90 hover:bg-black hover:text-white transition-colors duration-200 inline-block text-center"
              >
                Start Shopping
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Container>
  );
};

export default Banner;
