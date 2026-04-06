import React from "react";
import Edu3 from "../../../../../public/assets/empower/edu3.png";
import { FlexComponent } from "@/app/_component/atom/flex";
import BoyWithTap from "../../../../../public/assets/empower/family.png";
import Line from "../../../../../public/assets/edu/Lineyellow.png";
import Head from "./Head";

const page = () => {
  const data = [
    {
      imageSrc1: Line,
      heading3: "STEAM Empowerment — Kids Innovation Africa",
      text1:
        "We prepare children for the future through technology and creative learning.",
      text2:
        "Through coding, AI fluency, robotics, design, and digital arts, children develop practical, in-demand skills that position them for opportunity in the digital economy. Our programmes are delivered across under-resourced schools, online platforms, bootcamps, and after-school tech hubs—making them accessible to underserved communities.",
      text4:
        "We are equipping children to create, innovate, and lead.",
      imageSrc: Edu3,
      buttonText: "Learn More",
      buttonHref: "/whatwedo/empowerment#steam-empowerment",
      buttonText2: "Explore Kids Innovation Africa",
      buttonHref2: "https://www.kidsinnovation.africa/",
    },
  ];
  const data1 = [
    {
      imageSrc1: Line,
      heading3: "Family Empowerment — The Enable Approach",
      text1:
        "A child's education and long-term success is closely linked to the stability of their home.",
      text2:
        "We work with families—particularly women—to strengthen their capacity to support their children, especially those transitioning from residential care. Through skills development and access to livelihood opportunities, we help build stable households that can sustain a child's education and wellbeing.",
      text3:
        "At the heart of this work is Project Enable, through which we provide low-income women with the tools, training, and financial access needed to start or grow small businesses—creating sustainable income and strengthening family wellbeing. By supporting caregivers, we improve outcomes for children and reinforce the conditions for long-term success.",
      text4: "Stronger families create stronger futures.",
      imageSrc: BoyWithTap,
      buttonText: "",
    },
  ];
  return (
    <main>
      <Head />
      <section className="my-[4rem]" id="steam-empowerment">
        <FlexComponent
          data={data}
          columnReversed={true}
          buttonClassName=""
        />
      </section>
      <section className="my-[4rem]" id="family-empowerment">
        <FlexComponent
          data={data1}
          columnReversed={false}
          buttonClassName=""
        />
      </section>
    </main>
  );
};

export default page;
