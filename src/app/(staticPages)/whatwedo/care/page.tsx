import React from 'react'
import Head from './Head'
// import HeroSection from '@/app/_component/atom/HeroSection'
import { FlexComponent } from '@/app/_component/atom/eduFlex'
import { AltComponent } from '@/app/_component/atom/altFlex'
// import CareHero from "../../../../../public/assets/care/carehero.png"
import Line from "../../../../../public/assets/edu/Lineyellow.png";
import Rehab from "../../../../../public/assets/care/children.png";
import Nothing from "../../../../../public/assets/care/nothing.png";
import ChildHealth from "../../../../../public/assets/care/eyecheck.png";
import HungerRelief from "../../../../../public/assets/care/hunger.png";
const page = () => {
      const data = [
        {
          imageSrc1: Line,
          spanText: "Rehabilitation and Care",
          heading1:
            "More Children Rescued and New Hopes for Children on Transition from Residential Care. ",
          text1:
            "We provide urgent rescue and safe spaces for children facing homelessness, abuse, or neglect. But rescue is only the beginning. Through trauma-informed care, counselling, and a structured support system, we help children heal from emotional wounds and regain a sense of safety and self-worth. Our goal is to restore hope, renew confidence, and help every child regain their dignity.",
          imageSrc: Rehab,
          buttonText: "",
        },
      ];
      const data2 = [
        {
          imageSrc1: Line,
          spanText: "Supported Independent Living",
          heading1:
            "Supported Independent Living Programme: Providing Stability for Youths in Transition",
          text1:
            "For teenagers transiting from residential care, we provide transitional support through our Supported Independent Living programme. This initiative equips young people with essential life skills, mentorship, and stable housing while they continue their education. We walk alongside them as they navigate adulthood—supporting their journey to self-reliance, responsible decision making, and long-term stability.",
          imageSrc: Nothing,
          buttonText: "",
        },
      ];
      const data3 = [
        {
          imageSrc1: Line,
          spanText: "Child Healthcare",
          text1:
            "Health is central to a child’s development. That’s why we prioritise timely access to medical care for all children under our care and in the communities we serve. Our child healthcare programme covers routine check-ups, emergency medical treatment, immunisations, mental health support, and access to clean water and hygiene essentials.",
          text2:
            "The flagship of our healthcare initiative is Hands of Care—a medical outreach that brings essential healthcare services to children living in slums, underserved communities, and institutional facilities. By taking care of their health, we give children the strength they need to grow and learn.",
          imageSrc: ChildHealth,
          buttonText: "",
        },
      ];
    const data4 = [
      {
        imageSrc1: Line,
        spanText: "Hunger Relief",
        text1:
          "No child should have to live or learn on an empty stomach. Our hunger relief efforts provide daily nutritious meals for children in our residential homes, education centres, and vulnerable communities. We also extend emergency food aid to families in crisis and under-resourced communities where hunger puts children’s education and health at risk.",
        text2:
          "To further support the education objective, we provide school feeding to ensure children in our learning centres and programme schools are nourished and better able to focus on their learning. This basic provision opens the door to learning, stability, and a chance at a better life.",
        imageSrc: HungerRelief,
        buttonText: "",
      },
    ];
    const data5 = [
      {
        imageSrc1: Line,
        spanText: "Shelter and Wellbeing",
        text1:
          "A stable home is the foundation of every child’s growth. We offer children rescued from the streets, under bridges, or in slums a loving home they can call their own. Our homes are designed as places where children live, learn and play – a nurturing environment where they feel safe, cared for, and free to dream. This ensures a stable and secure environment, enabling them to pursue education without disruption.",
        text2:
          "Our residential homes provide round-the-clock care, nutritious meals, and routines that support physical, emotional, and educational wellbeing. For children who cannot return to family, our homes become the home where they are loved and guided toward a better future ahead of a reintegration.",
        imageSrc: HungerRelief,
        buttonText: "",
      },
    ];
  return (
    <main>
      <Head/>
      <section className="py-[4rem] bg-[#F9F9F9]">
        <FlexComponent
          data={data}
          columnReversed={true}
          buttonClassName="bg-yellow py-2 px-4"
        />
      </section>
      <section className=" my-[4rem]">
        <FlexComponent data={data5} columnReversed={false} buttonClassName="" />
      </section>
      <section className=" my-[4rem]">
        <FlexComponent data={data2} columnReversed={false} buttonClassName="" />
      </section>
      <section className=" mt-[4rem]">
        <AltComponent data={data3} columnReversed={true} buttonClassName="" />
      </section>
      <section className="py-[4rem] bg-[#F9F9F9]">
        <FlexComponent data={data4} columnReversed={false} buttonClassName="" />
      </section>
    </main>
  );
}

export default page