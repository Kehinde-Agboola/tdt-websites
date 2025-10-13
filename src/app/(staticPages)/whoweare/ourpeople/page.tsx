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
    <main className="bg-[#F4F4F4]">
      <section className="relative h-[400px] md:h-[550px] w-full">
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
            className="text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
          Our <span className="text-yellow">People</span>
          </motion.h1>

          <motion.p
            className="mt-4 text-base md:text-lg max-w-4xl"
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
        <section className="py-8">
          <TeamSection 
            title="Board" 
            members={boardMembersData} 
          />
        </section>
      </Container>
      
      <Volunteer />
      
      <Container>
        {/* Management Team Section */}
        <section className="py-8">
          <TeamSection
            title=""
            paragraph="Our Management Team members bring experience from diverse professional backgrounds. We take pride in the commitment of a volunteer-driven management team supported by a full-time workforce. Management Team members give their time and expertise at no cost to us."
            members={managementTeamData}
          />
        </section>
        <hr className="my-8" />
      </Container>
    </main>
  );
}

export default OurPeoplePage;