import React from 'react'
import HeroSection from '@/app/_component/atom/HeroSection'
import EmpowerHero from "../../../../public/assets/empower/empowerhero.png";
import { FlexComponent } from '@/app/_component/atom/flex';
import BoyWithTap from "../../../../public/assets/edu/BoywithTap.png"
import Line from "../../../../public/assets/edu/Lineyellow.png";
const page = () => {
         const data = [
           {
             imageSrc1: Line,
             heading: "Child’s Empowerment",
             spanText: "Kid INNOVATION AFRICA",
             heading3:
               "Our School is a free digital school. This is one basic school for all to learn with or without internet using any device. ",
             text1:
               "We set up The Bridge Learning Centre (BLC) in October 2021 to provide accelerated education for over-age out-of-school children who missed out on basic education. Through evidence-based assessment of our pilot interventions in the last one year, we were able to estimate the effectiveness of our learning interactions with the pioneer set of 44 children we kicked off the program with.",
             imageSrc: BoyWithTap,
             buttonText: "Learn More",
           },
         ];
         const data1 = [
           {
             imageSrc1: Line,
             heading: "Family Empowerment",
             spanText: "ENABLE",
             heading3:"Our School is a free digital school. This is one basic school for all to learn with or without internet using any device.",
             text1:
               "We set up The Bridge Learning Centre (BLC) in October 2021 to provide accelerated education for over-age out-of-school children who missed out on basic education. Through evidence-based assessment of our pilot interventions in the last one year, we were able to estimate the effectiveness of our learning interactions with the pioneer set of 44 children we kicked off the program with.",
             imageSrc: BoyWithTap,
             buttonText: "Learn More",
           },
         ];
  return (
    <main>
      <HeroSection
        title="EMPOWERMENT"
        description="Our mission is to enable every child to be the best he or she can be regardless of where he or she was born, and we have kept that promise for the past decade of our existence."
        imagePath={EmpowerHero}
      />
      <section className="my-[4rem] ">
        <FlexComponent
          data={data}
          columnReversed={true}
          buttonClassName="bg-yellow py-2 px-4"
        />
      </section>
      <section className="my-[4rem] ">
        <FlexComponent
          data={data1}
          columnReversed={false}
          buttonClassName="bg-yellow py-2 px-4"
        />
      </section>
    </main>
  );
}

export default page