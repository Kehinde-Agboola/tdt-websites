"use client";

import Container from "@/app/_component/shared";
import PageHero from "@/app/_component/PageHero";
import { AltComponent } from "@/app/_component/atom/altFlex";
import { FlexComponent } from "@/app/_component/atom/eduFlex";
import { motion } from "framer-motion";
import WhoBoy from "../../../../../public/assets/who/boy.png";
import WhoReading from "../../../../../public/assets/who/reading.png";
import WhoTwo from "../../../../../public/assets/who/two.jpg";
import WhoDestiny from "../../../../../public/assets/who/destiny.png";
import WhoHero from "../../../../../public/assets/who/whero.png";
import EduClass from "../../../../../public/assets/edu/edu1.jpg";
import CareWellbeing from "../../../../../public/assets/care/wellbeing.jpg";
import EmpowerFamily from "../../../../../public/assets/empower/family.png";

const HeroImage = "/cares.png";



const whoWeAreData = [
  {
    spanText: "Who We Are",
    text1:
      "We work with children who are often invisible to systems—those on the streets, in informal settlements, displaced communities, and unstable homes—repositioning their future through education, care, and skills empowerment.",
    imageSrc: WhoBoy,
  },
];

const commitmentData = [
  {
    spanText: "Our Commitment",
    text1: "Our commitment is to the whole child.",
    text2:
      "We educate, protect, nurture, and empower—but more importantly, we stay for the long term. Real transformation requires consistency, trust, and time.",
    imageSrc: WhoReading,
  },
];

const visionData = [
  {
    spanText: "Our Vision",
    text1:
      "A world where every child—regardless of circumstance—can dream freely, grow fully, and realise their full potential. A world where education is a guaranteed pathway to opportunity, dignity, and lifelong fulfilment.",
    imageSrc: WhoTwo,
  },
];

const missionData = [
  {
    spanText: "Our Mission",
    text1:
      "To give at-risk children a new start and a fair chance to thrive through integrated, holistic support, with education as a sustainable means of empowerment.",
    text2:
      "We are breaking cycles of poverty, restoring dignity, and building futures that extend beyond the individual child.",
    imageSrc: WhoDestiny,
  },
];

const whyInvestData = [
  {
    spanText: "Why We Invest in Children",
    text1: "Children are not just the future, they are the foundation of it.",
    text2:
      "Breaking cycles of poverty begins with children. Early intervention transforms lives and prevents long-term social and economic costs.",
    text3:
      "With the right support, children at risk today become tomorrow's contributors, leaders, and changemakers.",
    text4: "Investing in children is investing in the future we all share.",
    imageSrc: WhoHero,
  },
];

const modelData = [
  {
    spanText: "Our Model — Beyond Education",
    text1:
      "Access to school is not enough for a child who is hungry, homeless, or traumatised. Our model integrates education, wellbeing, and skills to deliver sustainable transformation—not temporary relief.",
    imageSrc: EduClass,
  },
];

const educationData = [
  {
    spanText: "Education — Restoring the Right to Learn",
    text1:
      "We bring children out of vulnerable environments and back into school, removing barriers such as instability, displacement, and hidden costs. Through accelerated learning, digital education, scholarships, and literacy programmes, we ensure children are not only enrolled—but supported to succeed.",
    text4:
      "No child should be excluded from education because of circumstances beyond their control.",
    imageSrc: EduClass,
  },
];

const wellbeingData = [
  {
    spanText: "Wellbeing — Making Learning Possible",
    text1:
      "We provide the stability children need to learn through rescue and rehabilitation, safe shelter, healthcare, nutrition, and ongoing support. Healing, safety, and care create the foundation for education to take root.",
    imageSrc: CareWellbeing,
  },
];

const skillsData = [
  {
    spanText: "Skills & Empowerment — Building the Future",
    text1:
      "We equip children and families with the tools to build sustainable futures through digital skills, life skills, and economic empowerment. From STEAM education to family livelihood support, we ensure progress is not temporary—but lasting.",
    imageSrc: EmpowerFamily,
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        image={HeroImage}
        alt="About The Destiny Trust"
        layout="center"
        imageClassName="object-cover object-right md:object-center"
        priority
      >
        <motion.blockquote
          className="w-full max-w-6xl px-2 text-sm sm:text-base md:max-w-[75%] md:text-xl lg:max-w-[65%] lg:text-2xl leading-relaxed text-white border-l-4 border-[#FFB400] pl-4 md:pl-6 italic text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          We are a people who say no to the barriers that hold children
          back—homelessness, hunger, illiteracy, poverty, abuse, and
          neglect—and yes to possibility, dignity, and opportunity.
        </motion.blockquote>
      </PageHero>

      <section className="py-8 md:py-12 space-y-8 md:space-y-10">
        <FlexComponent data={whoWeAreData} columnReversed={false} buttonClassName="" />
        {/* <SectionRule /> */}
        <AltComponent data={commitmentData} columnReversed={true} buttonClassName="" />
        {/* <SectionRule /> */}
        <FlexComponent data={visionData} columnReversed={false} buttonClassName="" />
        {/* <SectionRule /> */} 
        <AltComponent data={missionData} columnReversed={true} buttonClassName="" />
        {/* <SectionRule /> */} 
        <FlexComponent data={whyInvestData} columnReversed={false} buttonClassName="" />
        {/* <SectionRule /> */}     
        <Container>
          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 text-[#FFB400] tracking-wide"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Our Work
          </motion.h2>
        </Container>
        <FlexComponent data={modelData} columnReversed={false} buttonClassName="" />
        {/* <SectionRule /> */}
        <AltComponent data={educationData} columnReversed={true} buttonClassName="" />
        {/* <SectionRule /> */} 
        <FlexComponent data={wellbeingData} columnReversed={false} buttonClassName="" />
        {/* <SectionRule /> */} 
        <AltComponent data={skillsData} columnReversed={true} buttonClassName="" />
      </section>

      <Container>
        {/* <SectionRule /> */}
        <motion.section
          className="pb-4 md:pb-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-[#FFB400] tracking-wide"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Get Involved
          </motion.h2>
          <motion.p
            className="text-gray-800 text-base md:text-lg font-medium leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Give. Sponsor. Partner. Volunteer. Advocate.
          </motion.p>
        </motion.section>
      </Container>
    </main>
  );
}
