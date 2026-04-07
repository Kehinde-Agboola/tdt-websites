import { FlexComponent } from "@/app/_component/atom/flex";
import Head from "./Head";
import Teacher from "../../../../../public/assets/edu/teacher.png";
import Edu1 from  "../../../../../public/assets/edu/edu1.jpg";
import Edu5 from  "../../../../../public/assets/edu/edu5.png";
import Edu2 from  "../../../../../public/assets/edu/edu2.jpg";
import Line from "../../../../../public/assets/edu/Lineyellow.png"
import BlcStudents from "../../../../../public/assets/blc/students.png";
import Scholar from "../../../../../public/assets/edu/scholar.png";
import Empower from "@/app/_component/ui/Empower";
import { AnimatedSection } from "@/components/AnimatedSection";
import { staggerDelay } from "@/lib/motion";

const Home: React.FC = () => {
     const data = [
       {
         imageSrc1: Line,
         heading3: "School Enrolment and Back-to-School",
         spanText3: "Education Access",
         text1:
           "We take children off the streets, out of slums, and from vulnerable environments and bring them back into school—but our work does not stop at enrolment.",
         text2:
           "Many children face challenges such as displacement and unstable living conditions, which make it difficult to remain in school or learn effectively. We address these barriers and provide continuous support to ensure children stay in school and make meaningful progress.",
         text3:
           "We focus on strengthening school retention and improving learning outcomes-helping children build foundational skills and succeed academically.",
         text4:
           "No child should be excluded from education—and every child in school should be supported to learn and thrive.",
         imageSrc: Teacher,
         buttonText: "",
       },
     ];
     const educationTechnology = [
       {
         imageSrc1: Line,
         heading3: "Education Technology — OurSchool.Africa",
         text1:
           "We use technology to take learning to children—wherever they are. OurSchool.Africa delivers accessible, engaging, and personalised learning through offline-first digital solutions, including video lessons, animation, and interactive content.",
         text2:
           "From slums to remote communities to displacement camps, we are expanding access to quality education at scale and enabling children to learn at their own pace.",
         text4:
           "Learning, anywhere. For every child.",
         imageSrc: Edu2,
         buttonText: "Learn More",
         buttonHref: "/whatwedo/education#ourschool-africa",
         buttonText2: "Explore OurSchool Africa",
         buttonHref2: "https://ourschool.africa",
       },
     ];
     const support = [
       {
         imageSrc1: Line,
         heading3: "School Support",
         text1:
           "We strengthen under-resourced schools to improve the quality of education for children in underserved communities.",
         text2:
           "By improving infrastructure, supporting teacher capacity where gaps exist, providing learning materials, and expanding access to essential resources, we create environments where children can learn effectively and teachers can deliver better outcomes.",
         text4: "Stronger schools lead to stronger learning outcomes.",
         imageSrc: Edu1,
         buttonText: "",
       },
     ];
     const literacy = [
       {
         imageSrc1: Line,
         heading3: "Back2Basics — Literacy Catch-Up",
         text1:
           "Approximately 75% of children aged 7 to 14 in Nigeria cannot read with understanding, reflecting a deep learning crisis where only one in four children has basic foundational literacy.",
         text2:
           "Through our Back2Basics programme, we support children in upper primary classes to catch up on reading and writing using inclusive, play-based methods, while equipping teachers with the training and resources to improve classroom instruction.",
         text4:
           "Reading is the foundation of all learning—we are rebuilding that foundation.",
         imageSrc: Edu5,
         buttonText: "",
       },
     ];
     const acceleratedEducation = [
       {
         imageSrc1: Line,
         heading3: "Accelerated Education",
         text1:
           "Millions of children aged 10–17 are unable to return to conventional schooling. They make up the largest group of children we encounter on the streets and in informal settlements.",
         text2:
           "Our Bridge Learning Centre provides accelerated education that helps them catch up on foundational literacy and numeracy, reintegrate into formal school at the appropriate level, or transition into skills-based pathways.",
         text3:
           "Through this model, we deliver up to 9 years of basic education in 3 years, enabling over-aged children to recover lost learning and move forward with confidence.",
         text4:
           "We are redefining education for children who have been left behind.",
         imageSrc: BlcStudents,
         buttonText: "Learn More",
         buttonHref: "/projects/bridgelearning",
         buttonText2: "Explore Bridge Learning Centre",
         buttonHref2: "/projects/bridgelearning",
       },
     ];
     const scholarships = [
       {
         imageSrc1: Line,
         heading3: "Scholarships",
         text1:
           "We provide scholarships from primary to university level for children from disadvantaged backgrounds—ensuring that poverty does not stand in their way.",
         text2:
           "Many of our beneficiaries are the first in their families to attend university. Through education, they become catalysts for change within their households and communities.",
         text3:
           "Our scholarship programme is central to breaking transgenerational poverty—empowering the next generation with the knowledge and skills to participate fully in social and economic life.",
         imageSrc: Scholar,
         buttonText: "Learn More",
         buttonHref: "/scholarship",
         buttonText2: "Sponsor a Scholarship",
         buttonHref2: "/scholarship#scholarship-sponsor",
       },
     ];
  return (
    <main>
      <AnimatedSection animateOnMount>
        <Head />
      </AnimatedSection>
      {/* <Container> */}
      {/* <section className="mt-[5rem]">
          <p className="xl:text-[35px] text-[18px] text-[#333333] w-full md:max-w-[60rem] mx-auto text-center">
            <span className="text-yellow">
              Educating homeless and out-of-school children {""}
            </span>
            through tailored education initiatives, driven by technology.
            
          </p>
        </section> */}
      {/* <section className="my-[5rem]">
          <p className="xl:text-[35px] text-[18px] text-[#333333] w-full md:max-w-[60rem] mx-auto text-center">
            No child should be excluded {""}
            <span className="text-yellow">from education</span>
            —and every child in school should be supported to learn and thrive.
          </p>
        </section> */}
      {/* </Container> */}

      <AnimatedSection
        as="section"
        id="education-access"
        className="scroll-mt-28 my-[5rem]"
        delay={staggerDelay(0)}
      >
        <FlexComponent data={data} columnReversed={true} buttonClassName="" />
      </AnimatedSection>
      <AnimatedSection
        as="section"
        id="bridge-learning"
        className="scroll-mt-28 my-[5rem]"
        delay={staggerDelay(1)}
      >
        <FlexComponent
          data={acceleratedEducation}
          columnReversed={false}
          buttonClassName=""
        />
      </AnimatedSection>
      <AnimatedSection
        as="section"
        id="literacy-campaign"
        className="scroll-mt-28 my-[4rem]"
        delay={staggerDelay(2)}
      >
        <FlexComponent
          data={literacy}
          columnReversed={true}
          buttonClassName=""
        />
      </AnimatedSection>

      <AnimatedSection
        as="section"
        className="scroll-mt-28 my-[5rem]"
        id="ourschool-africa"
        delay={staggerDelay(3)}
      >
        <FlexComponent
          data={educationTechnology}
          columnReversed={false}
          buttonClassName=""
        />
      </AnimatedSection>
      <AnimatedSection delay={staggerDelay(4)}>
        <Empower />
      </AnimatedSection>
      {/* <Enrolment /> */}
      <AnimatedSection
        as="section"
        className="scroll-mt-28 my-[5rem] w-full bg-black bg-scholar bg-cover bg-center bg-no-repeat py-12 text-white md:py-16"
        id="scholarships"
        delay={staggerDelay(5)}
      >
        <FlexComponent
          data={scholarships}
          columnReversed={false}
          buttonClassName="!bg-yellow !text-black  focus-visible:ring-white focus-visible:ring-offset-black"
          buttonClassName2="!border-2 !border-yellow !bg-transparent !text-white focus-visible:ring-white focus-visible:ring-offset-black"
        />
      </AnimatedSection>
      {/* <div className="mt-[2rem]">
        <Cards />
      </div> */}
      <AnimatedSection
        as="section"
        id="school-support"
        className="scroll-mt-28 my-[5rem]"
        delay={staggerDelay(6)}
      >
        <FlexComponent
          data={support}
          columnReversed={true}
          buttonClassName=""
        />
      </AnimatedSection>
    </main>
  );
};

export default Home;
