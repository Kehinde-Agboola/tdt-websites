import React from 'react'
// import School from "../../../../../public/assets/edu/school.png";
import Image from 'next/image';
// import Line from "../../../../../../public/assets/edu/Lineyellow.png";
import Line from "../../../../../public/assets/edu/Lineyellow.png"
import TeacherStudent from "../../../../../public/assets/edu/teacherstudent.png";
import { FlexComponent } from '@/app/_component/atom/eduFlex';
import { AltComponent } from '@/app/_component/atom/altFlex';
import WhiteLine from "../../../../../public/assets/edu/whiteLine.png";
import Scholar from "../../../../../public/assets/edu/scholar.png";
import BoyWithTap from "../../../../../public/assets/edu/BoywithTap.png";
import EnrolmentImage from "../../../../../public/assets/edu/enrolment.jpg";
// import { StaticImageData } from 'next/image';
const Enrolment = () => {

    //  const data = [
    //    {
    //      imageSrc1: Line,
    //      spanText: "School Enrolment & Back-to-School",
    //      heading1:
    //        "Our Education Access initiative targets children in informal settlements. ",
    //      text1:
    //        "Every year, thousands of out-of-school children get the opportunity to be in school for the first time or to return to school with the support of the Destiny Trust. We provide the materials the children need to enrol or reintegrate into school. We eliminate all the barriers to schooling and hold their hands into the classroom. ",
    //      imageSrc: School,
    //      buttonText: "Learn More",
    //    },
    //  ];
     const data2 = [
       {
         imageSrc1: Line,
         spanText: "BRIDGE LEARNING",
         heading1:
           "Our Bridge Learning Centre provides an alternative education pathway for over-aged children who never started school or who dropped out of school without completing basic education. ",
         text1:
           "An estimated 13.2 million Nigerian children are out of school. We love to put a face to this number. A massive part of this statistics is the burgeoning population of children aged 10-18. These children are the most educationally disadvantaged because they cannot access the conventional schools. They are often either considered too old to start from the nursery classes or lacking the foundational education to fit into age-appropriate grades in school. If ever admitted, these children cannot complete primary education before their twenties and often lose the motivation for formal education shortly after enrolment. Through this project, we are changing the face of education for Nigeria’s over-aged children. We provide an accelerated education programme which enables over-aged children to acquire basic education, reintegrate into conventional schools at age-appropriate levels and acquire vocational skills.",
         imageSrc: TeacherStudent,
         buttonText: "Learn More",
       },
     ];
     const data3 = [
       {
         imageSrc1: WhiteLine,
         spanText: "Scholarships",
         heading:
           "Providing scholarships and school sponsorships to ensure that every child has the opportunity to learn, grow, and thrive, regardless of their background. ",
         text1:
           "We partner with compassionate individuals and organisations to ​administer scholarship programmes that meet our shared goal of ​empowering children with education from primary school to the ​university. We are committed to transforming lives by providing scholarships and school sponsorships to underprivileged children. We believe that every child deserves access to quality education, regardless of their financial background. Through this programs, we aim to break the cycle of poverty and create opportunities for a brighter future. ",
         imageSrc: Scholar,
         buttonText: "Learn More",
       },
     ];
     const data4 = [
       {
         imageSrc1: Line,
         spanText: "Scholarships",
         heading1:
           "Providing scholarships and school sponsorships to ensure that every child has the opportunity to learn, grow, and thrive, regardless of their background. ",
         text1:
           "We set up The Bridge Learning Centre (BLC) in October 2021 to provide accelerated education for over-age out-of-school children who missed out on basic education. Through evidence-based assessment of our pilot interventions in the last one year, we were able to estimate the effectiveness of our learning interactions with the pioneer set of 44 children we kicked off the program with.",
         imageSrc: BoyWithTap,
         buttonText: "Learn More",
       },
     ];
  return (
    <main className="py-[4rem] bg-[#F9F9F9]">
      <section className="my-[4rem] ">
        <Image src={EnrolmentImage} alt="children back-to-school" />
        {/* <FlexComponent
          data={data}
          columnReversed={true}
          buttonClassName="bg-yellow py-2 px-4"
        /> */}
      </section>
      <section className="my-[8rem]">
        <AltComponent
          data={data2}
          columnReversed={false}
          buttonClassName="bg-yellow py-2 px-4"
        />
      </section>
      <section className="my-[4rem] bg-black py-[4rem] text-white">
        <FlexComponent
          data={data3}
          columnReversed={false}
          buttonClassName="bg-yellow py-2 px-4"
        />
      </section>
      <section className="mt-[4rem]">
        <FlexComponent
          data={data4}
          columnReversed={true}
          buttonClassName="bg-yellow py-2 px-4"
        />
      </section>
    </main>
  );
}

export default Enrolment