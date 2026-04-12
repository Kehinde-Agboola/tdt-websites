'use client'
import React from 'react'
import { motion } from "framer-motion";
import PageHero from '@/app/_component/PageHero';
import Ourteam from "../../../../../public/assets/team/hero.png"
import TeamSection from './TeamSection';
import Container from '@/app/_component/shared';
import { boardMembers, managementTeam } from "../../../constant";
import Volunteer from './Volunteer';
import { AnimatedSection } from '@/components/AnimatedSection';
import { staggerDelay } from '@/lib/motion';
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
      <PageHero
        image={Ourteam}
        alt="Our people — team and leadership"
        layout="center"
        imageClassName="object-cover object-[center_25%] md:object-center"
        priority
      >
        <motion.h1
          className="text-3xl leading-tight text-white sm:text-5xl md:text-6xl font-bold max-w-[18ch] sm:max-w-none font-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our <span className="text-yellow">People</span>
        </motion.h1>

        <motion.p
          className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg max-w-4xl leading-relaxed text-white px-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          Meet the dedicated individuals who drive our mission forward
        </motion.p>
      </PageHero>
      <Container className="px-2 sm:px-4 md:px-4 xl:px-0">
        <AnimatedSection
          as="section"
          className="py-4 sm:py-8 text-left"
          delay={staggerDelay(0)}
        >
          <TeamSection
            title="Board"
            members={boardMembersData}
          />
        </AnimatedSection>
      </Container>

      <AnimatedSection delay={staggerDelay(1)}>
        <Volunteer />
      </AnimatedSection>

      <Container className="px-2 sm:px-4 md:px-4 xl:px-0">
        <AnimatedSection
          as="section"
          className="py-4 sm:py-8 text-left"
          delay={staggerDelay(2)}
        >
          <TeamSection
            title=""
            paragraph="Our Management Team members bring experience from diverse professional backgrounds. We take pride in the commitment of a volunteer-driven management team supported by a full-time workforce. Management Team members give their time and expertise at no cost to us."
            members={managementTeamData}
          />
        </AnimatedSection>
        <hr className="my-4 sm:my-8 border-gray-300" />
      </Container>
    </main>
  );
}

export default OurPeoplePage;