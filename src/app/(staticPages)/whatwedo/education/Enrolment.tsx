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
import Leverage from "./Leverage"
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
           "Millions of out-of-school children in Nigeria are between the ages of 10 and 18. Most have either never started school or dropped out without completing basic education. Due to their age, they are unable to fit into conventional schooling, leading to shame, exclusion, and loss of motivation.",
         text2:
           "Our Bridge Learning Centre offers a solution for this forgotten group. We run an accelerated basic education programme for over-aged learners. Our model helps them catch up on foundational literacy and numeracy, reintegrate into formal schools at appropriate levels, or move on to vocational skills training. We are changing the face of education for Nigeria’s over-aged children.",
         imageSrc: TeacherStudent,
         buttonText: "",
       },
     ];
     const data3 = [
       {
         imageSrc1: WhiteLine,
         spanText: "Scholarships",
         heading:
           "Providing scholarships and school sponsorships to ensure that every child has the opportunity to learn, grow, and thrive, regardless of their background. ",
         text1:
           "We provide educational scholarships from primary to university levels to talented and committed children and young people from disadvantaged backgrounds. Our scholarships cover tuition, learning materials, uniforms, and in some cases, welfare support for children whose families cannot afford continued education. This programme is focused on giving every child who desires to learn the opportunity to do so without limitations.",
         imageSrc: Scholar,
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
          buttonClassName=""
        />
      </section>
      <section className="mt-[4rem] bg-black py-[4rem] text-white">
        <FlexComponent
          data={data3}
          columnReversed={false}
          buttonClassName="bg-yellow py-2 px-4"
        />
      </section>
      {/* <section className="mt-[4rem]">
        <FlexComponent
          data={data4}
          columnReversed={true}
          buttonClassName=""
        />
      </section> */}
      <Leverage />
    </main>
  );
}

export default Enrolment