'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Communiti from "../../../../public/assets/home/communities.png"
import CommunityMobile from "../../../../public/assets/home/community-mobile.png"
import Container from "@/app/_component/shared";
// import { Button } from "@/app/_component/atom/button";
import VolunteerButton from "@/app/_component/ui/VolunteerButton";

const Community = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main>
      <section className="relative min-h-[100dvh] w-full">
        {/* Responsive Background Image */}
        <div className="absolute inset-0">
          {/* Desktop Image */}
          <Image
            src={Communiti}
            alt="Our Team"
            fill
            className="object-cover object-center bg-no-repeat hidden md:block"
            priority
          />
          {/* Mobile Image */}
          <Image
            src={CommunityMobile}
            alt="Our Team Mobile"
            fill
            className="object-cover object-center bg-no-repeat block md:hidden"
            priority
          />
        </div>
        <section className="absolute inset-0 flex items-center justify-center px-4 text-white">
          <Container>
            <motion.div
              className="flex w-full flex-col items-center justify-center text-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.h2
                className="text-center text-[38px] md:text-[56px] font-semibold leading-tight"
                variants={itemVariants}
              >
                Join <span className="text-yellow">Us</span>
              </motion.h2>
              <motion.p
                className="w-full md:max-w-2xl text-center text-base md:text-lg text-white/95 leading-relaxed mt-4"
                variants={itemVariants}
              >
                Nigeria&apos;s education crisis is vast and complex but the
                opportunity to change it is within reach. Join us in building a
                future where every child has the chance to learn, grow, and
                thrive.
              </motion.p>
              <motion.p
                className="w-full md:max-w-xl text-center text-lg md:text-xl font-medium text-[#FFBC00] mt-6 "
                variants={itemVariants}
              >
                Every child reached is a future restored.
              </motion.p>
              <motion.div variants={itemVariants}>
                {/* <Button 
                  className="mt-4 bg-[#FFB400] text-black w-[224px] mx-auto py-2"
                 
                >
                  Become a Volunteer
                </Button> */}
                <VolunteerButton className="btn-landing btn-landing--primary text-black mx-auto mt-4"></VolunteerButton>
              </motion.div>
            </motion.div>
          </Container>
        </section>
      </section>
    </main>
  );
};

export default Community;
