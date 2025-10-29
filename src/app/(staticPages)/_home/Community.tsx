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
      <section className="h-screen w-full relative">
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
        <section className="absolute inset-0 text-white">
          <Container>
            <motion.div
              className="flex flex-col justify-center items-center  pt-[1.5rem]"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.p
                className="text-center text-[30px]  md:text-[64px] font-[400]"
                variants={itemVariants}
              >
                Join Our <span className="text-yellow">Community</span>
              </motion.p>
              <motion.p
                className="w-full md:w-[45%] text-center"
                variants={itemVariants}
              >
                It takes a community to raise a child. Be part of the caring
                community donating to give hope to children.
              </motion.p>
              <motion.div variants={itemVariants}>
                {/* <Button 
                  className="mt-4 bg-[#FFB400] text-black w-[224px] mx-auto py-2"
                 
                >
                  Become a Volunteer
                </Button> */}
                <VolunteerButton className="mt-4 bg-[#FFB400] text-black w-[224px] mx-auto py-2"></VolunteerButton>
              </motion.div>
            </motion.div>
          </Container>
        </section>
      </section>
    </main>
  );
};

export default Community;
