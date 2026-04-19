import React from "react";
import Head from "./Head";
import { FlexComponent } from "@/app/_component/atom/eduFlex";
import { AltComponent } from "@/app/_component/atom/altFlex";
import Line from "../../../../../public/assets/edu/Lineyellow.png";
import Rehab from "../../../../../public/assets/care/rehab.jpg";
import SupportedIndependentLiving from "../../../../../public/assets/care/children.png";
import ChildHealth from "../../../../../public/assets/care/eyecheck.png";
import Wellbeing from "../../../../../public/assets/care/wellbeing.jpg";
import HungerRelief from "../../../../../public/assets/care/hunger.jpg";
import { AnimatedSection } from "@/components/AnimatedSection";
import { staggerDelay } from "@/lib/motion";

const page = () => {
  const data = [
    {
      imageSrc1: Line,
      spanText: "Rescue, Rehabilitation & Care",
      text1:
        "We intervene in situations of abuse, neglect, and homelessness—giving children from the streets and other vulnerable environments a second chance.",
      text2:
        "Our goal is simple: to rescue, restore, and rebuild. We provide immediate rescue and a clear pathway to recovery, creating the conditions for learning to begin.",
      text3:
        "Through trauma-informed care, counselling, and psychosocial support, we help children heal, regain a sense of safety and dignity, and begin again.",
      text4:
        "Every child deserves a second chance—and a safe place to begin again.",
      imageSrc: Rehab,
      buttonText: "",
    },
  ];
  const data5 = [
    {
      imageSrc1: Line,
      spanText: "Shelter & Wellbeing",
      text1:
        "For many children, education begins with having a stable home.",
      text2:
        "Our residential learning centres provide safe, nurturing environments where children can live, learn, and grow without disruption. We support their physical, emotional, and educational wellbeing—giving them the stability they need to go through school and focus on learning.",
      text4:
        "Every child deserves a safe and stable home to learn and thrive.",
      imageSrc: Wellbeing,
      buttonText: "",
    },
  ];
  const data2 = [
    {
      imageSrc1: Line,
      spanText: "Supported Independent Living",
      text1:
        "As children grow, we support their transition into adulthood.",
      text2:
        "Our Supported Independent Living spaces provide safe, structured environments for older teenagers transitioning from residential care or in need of stable accommodation. Through mentorship, life skills development, and continued support, we help young people move from care into independence.",
      text3:
        "We equip them to make responsible decisions and build sustainable, self-reliant lives.",
      text4:
        "From care to independence—helping young people thrive.",
      imageSrc: SupportedIndependentLiving,
      buttonText: "",
    },
  ];
  const data3 = [
    {
      imageSrc1: Line,
      spanText: "Child Healthcare — Hands of Care",
      text1:
        "A child's wellbeing is essential for development and the ability to learn.",
      text2:
        "We provide access to essential healthcare services, including routine care, emergency treatment, and mental health support. Through our Hands of Care outreach, we extend these services to underserved communities—ensuring the children we support are healthy, stable, and able to learn.",
      text4:
        "Every child deserves to be healthy to learn and grow.",
      imageSrc: ChildHealth,
      buttonText: "",
    },
  ];
  const data4 = [
    {
      imageSrc1: Line,
      spanText: "School Feeding & Hunger Relief",
      text1: "No child should have to learn on an empty stomach.",
      text2:
        "We provide consistent nutrition through meals in our homes, learning centres, and partner public schools, while also supporting vulnerable families. This ensures children are physically ready to learn, able to stay focused, and supported to remain in school.",
      text3:
        "For children enrolled in public schools, a daily meal is critical—it reduces hunger, improves attendance, and helps prevent dropouts or the need to work for survival.",
      text4:
        "Nutrition creates the foundation for learning and stability.",
      imageSrc: HungerRelief,
      buttonText: "",
    },
  ];
  return (
    <main>
      <Head />
      <AnimatedSection
        as="section"
        id="rehabilitation-care"
        className="scroll-mt-28 bg-[#F9F9F9] py-[4rem]"
        delay={staggerDelay(0)}
      >
        <FlexComponent
          data={data}
          columnReversed={true}
          buttonClassName=""
        />
      </AnimatedSection>
      <AnimatedSection
        as="section"
        id="shelter-wellbeing"
        className="scroll-mt-28 py-[4rem]"
        delay={staggerDelay(1)}
      >
        <FlexComponent data={data5} columnReversed={false} buttonClassName="" />
      </AnimatedSection>
      <AnimatedSection
        as="section"
        id="supported-independent-living"
        className="scroll-mt-28 py-[4rem]"
        delay={staggerDelay(2)}
      >
        <FlexComponent data={data2} columnReversed={false} buttonClassName="" />
      </AnimatedSection>
      <AnimatedSection
        as="section"
        id="child-healthcare"
        className="scroll-mt-28 py-[4rem]"
        delay={staggerDelay(3)}
      >
        <AltComponent data={data3} columnReversed={true} buttonClassName="" />
      </AnimatedSection>
      <AnimatedSection
        as="section"
        id="hunger-relief"
        className="scroll-mt-28 bg-[#F9F9F9] py-[4rem]"
        delay={staggerDelay(4)}
      >
        <FlexComponent data={data4} columnReversed={false} buttonClassName="" />
      </AnimatedSection>
    </main>
  );
};

export default page;
