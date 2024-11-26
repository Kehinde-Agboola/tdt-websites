import React from 'react'
import Image from "next/image";
import Ourteam from "@/assets/team/hero.png"
import Abimbola from "@/assets/team/abimbola.png"
import TeamSection from './TeamSection';
import Container from '@/app/_component/shared';
import Volunteer from './Volunteer';
const page = () => {
    const boardMembers = [
      {
        name: "Abimbola Ojenike",
        role: "Co-founder & CEO",
        description: "Lorem ipsum dolor sit amet consectetur.",
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
    <main>
      <section className="relative h-[400px] md:h-[500px] w-full">
        {/* Background Image */}
        <Image
          src={Ourteam} // Replace with your image path
          alt="Our Team"
          fill
          className="object-cover object-center bg-no-repeat"
        />

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white">
          <h1 className="text-4xl md:text-5xl">
            Meet Our <span className="text-yellow">Team</span>
          </h1>
          <p className="mt-4 text-base md:text-lg max-w-4xl">
            Our Management Team members bring experience from diverse
            professional backgrounds. We take pride in the commitment of a
            volunteer-driven management team supported by a full-time workforce.
            Management Team members give their time and expertise at no cost to
            us.
          </p>
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
      </Container>
    </main>
  );
}

export default page