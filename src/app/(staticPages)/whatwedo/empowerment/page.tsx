import React from 'react'
// import HeroSection from '@/app/_component/atom/HeroSection'
// import EmpowerHero from "../../../../../public/assets/empower/empowerhero.png";
import { FlexComponent } from '@/app/_component/atom/flex';
import BoyWithTap from "../../../../../public/assets/edu/BoywithTap.png"
import Line from "../../../../../public/assets/edu/Lineyellow.png";
import Head from "./Head"
const page = () => {
         const data = [
           {
             imageSrc1: Line,
             heading: "STEAM Empowerment ",
             spanText: "KIDS INNOVATION PROJECT",
             //  heading3:
             //    "Our School is a free digital school. This is one basic school for all to learn with or without internet using any device. ",
             text1:
               "The flagship of our empowerment work with children is the Kids Innovation Project, which focuses on equipping children with technology and arts skills. Through this initiative, we provide free learning in coding, design, robotics, and digital arts to Africa’s next generation of inventors and creators.",
             text2:
               "Learning is delivered through multiple channels: online, in-school, after-school, and through intensive bootcamps making it accessible to underserved children wherever they are.",
             text3:
               "Through Kids Innovation Africa, we are bridging the digital divide and opening doors for underrepresented children to participate meaningfully in the growing digital economy.",
             imageSrc: BoyWithTap,
             buttonText: "",
           },
         ];
         const data1 = [
           {
             imageSrc1: Line,
             heading: "Family Empowerment",
             spanText: "The Enable Approach",
             text1:
               "Our family empowerment programme addresses domestic poverty and other challenges that hinder a child’s development. We adopt creative, case-specific approaches to rebuild households that can support the reintegration of children and provide the stability they need to thrive.",
             text2:
               "While we empower the child to discover the greatness within, we also work to transform the environment around them especially the family unit.",
             text3:
               "At the heart of this programme is Project Enable, which facilitates access to skills training and finance for low-income women many of whom are primary caregivers to the children we serve. We empower these women with the tools and opportunities to start or grow small businesses, helping them build sustainable livelihoods and secure their families' future.  Women hold the greatest potential to reposition the household, and by strengthening their capacity, we directly improve the wellbeing and development outcomes of children in their care.",
             imageSrc: BoyWithTap,
             buttonText: "",
           },
         ];
  return (
    <main>
      {/* <HeroSection
        title="EMPOWERMENT"
        description="Our mission is to enable every child to be the best he or she can be regardless of where he or she was born, and we have kept that promise for the past decade of our existence."
        imagePath={EmpowerHero}
      /> */}

      <Head/>
      <section className="my-[4rem] ">
        <FlexComponent
          data={data}
          columnReversed={true}
          buttonClassName=""
        />
      </section>
      <section className="my-[4rem] ">
        <FlexComponent
          data={data1}
          columnReversed={false}
          buttonClassName=""
        />
      </section>
    </main>
  );
}

export default page