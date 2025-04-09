'use client'
import React from 'react'
import { motion } from "framer-motion";
import Image from "next/image";
import Ourteam from "../../../../../public/assets/team/hero.png"
import Abimbola from "../../../../../public/assets/team/abimbola.png";
import TeamSection from './TeamSection';
import Container from '@/app/_component/shared';
import Volunteer from './Volunteer';
import { Button } from '@/app/_component/atom/button';
const page = () => {
    const boardMembers = [
      {
        name: "Abimbola Ojenike",
        role: "Co-founder & CEO",
        description: "Expert in technology and innovation.",
        image: Abimbola,
      },
      {
        name: "Abimbola Ojenike",
        role: "Co-founder & CEO",
        description: "Expert in technology and innovation.",
        image: Abimbola,
      },
      {
        name: "Abimbola Ojenike",
        role: "Co-founder & CEO",
        description: "Expert in technology and innovation.",
        image: Abimbola,
      },
      {
        name: "Abimbola Ojenike",
        role: "Co-founder & CEO",
        description: "Expert in technology and innovation.",
        image: Abimbola,
      },
      {
        name: "Abimbola Ojenike",
        role: "Co-founder & CEO",
        description: "Expert in technology and innovation.",
        image: Abimbola,
      },
      {
        name: "Abimbola Ojenike",
        role: "Co-founder & CEO",
        description: "Expert in technology and innovation.",
        image: Abimbola,
      },
      {
        name: "Abimbola Ojenike",
        role: "Co-founder & CEO",
        description: "Expert in technology and innovation.",
        image: Abimbola,
      },
      {
        name: "Abimbola Ojenike",
        role: "Co-founder & CEO",
        description: "Expert in technology and innovation.",
        image: Abimbola,
      },
    ];
  return (
    <main className="bg-[#F4F4F4]">
      <section className="relative h-[400px] md:h-[500px] w-full">
        {/* Background Image with Framer Motion for slight movement */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <Image
            src={Ourteam}
            alt="Our Team"
            fill
            className="object-cover object-center bg-no-repeat"
          />
        </motion.div>

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white">
          <motion.h1
            className="text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Meet Our <span className="text-yellow">Team</span>
          </motion.h1>

          <motion.p
            className="mt-4 text-base md:text-lg max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            Our Management Team members bring experience from diverse
            professional backgrounds. We take pride in the commitment of a
            volunteer-driven management team supported by a full-time workforce.
            Management Team members give their time and expertise at no cost to
            us.
          </motion.p>
        </div>
      </section>
      <Container>
        <section className="">
          <TeamSection
            title="Board of Trustees and Advisors"
            members={boardMembers}
          />
        </section>
      </Container>
      <Volunteer />
      <Container>
        <section className="">
          <TeamSection title="Management" members={boardMembers} />
        </section>
        <hr />
        <div className="max-w-[12rem] mx-auto mt-8 pb-16">
          <Button className="border-2 border-yellow   text-center px-4 py-2">
            View all memebers
          </Button>
        </div>
      </Container>
    </main>
  );
}

export default page