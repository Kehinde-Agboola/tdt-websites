'use client'
import React from 'react'
import { motion } from "framer-motion";
import Image from "next/image";
import Ourteam from "../../../../../public/assets/team/hero.png"
import TeamSection from './TeamSection';
import Container from '@/app/_component/shared';
import { boardMembers, managementTeam } from "../../../constant";
import Volunteer from './Volunteer';
// import { Button } from '@/app/_component/atom/button';
const OurPeoplePage = () => {
  // Destructure board members data
  const boardMembersData = boardMembers.map(member => ({
    name: member.name,
    role: member.role,
    description: member.description,
    image: member.image
  }));

  // Destructure management team data  
  const managementTeamData = managementTeam.map(member => ({
    name: member.name,
    role: member.role,
    description: member.description,
    image: member.image
  }));
    
  return (
    <main className="min-w-0 bg-[#F4F4F4]">
      <section className="relative min-h-[260px] h-[38vh] max-h-[480px] sm:h-[400px] md:h-[550px] w-full overflow-hidden">
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
            priority
            sizes="100vw"
            className="object-cover object-[center_25%] sm:object-center bg-no-repeat"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/35 md:bg-black/25" aria-hidden />

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 text-white">
          <motion.h1
            className="text-3xl leading-tight sm:text-5xl md:text-6xl font-bold max-w-[18ch] sm:max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
          Our <span className="text-yellow">People</span>
          </motion.h1>

          <motion.p
            className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg max-w-4xl leading-relaxed text-white/95 px-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            Meet the dedicated individuals who drive our mission forward
          </motion.p>
        </div>
      </section>
      <Container>
        {/* Board Members Section */}
        <section className="py-4 sm:py-8 text-left">
          <TeamSection 
            title="Board" 
            members={boardMembersData} 
          />
        </section>
      </Container>
      
      <Volunteer />
      
      <Container>
        {/* Management Team Section */}
        <section className="py-4 sm:py-8 text-left">
          <TeamSection
            title=""
            paragraph="Our Management Team members bring experience from diverse professional backgrounds. We take pride in the commitment of a volunteer-driven management team supported by a full-time workforce. Management Team members give their time and expertise at no cost to us."
            members={managementTeamData}
          />
        </section>
        <hr className="my-4 sm:my-8 border-gray-300" />
      </Container>
    </main>
  );
}

export default OurPeoplePage;