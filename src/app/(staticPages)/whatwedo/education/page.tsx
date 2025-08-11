import { FlexComponent } from "@/app/_component/atom/flex";
// import HeroSection from "@/app/_component/atom/HeroSection";
import Head from "./Head";
import Container from "@/app/_component/shared";
// import Hero from "../../../../../public/assets/edu/landing.png"
import Teacher from "../../../../../public/assets/edu/teacher.png";
// import Line from "../../../../public/assets/edu/Lineyellow.png";
import BoyWithTap from "../../../../../public/assets/edu/BoywithTap.png";
import Line from "../../../../../public/assets/edu/Lineyellow.png"
import Cards from "./Cards";
import Enrolment from "./Enrolment";
import Empower from "@/app/_component/ui/Empower";
// import { Card } from "@/components/ui/card";
const Home: React.FC = () => {
     const data = [
       {
         imageSrc1: Line,
         heading3: "School Enrolment and Back-to-School",
         spanText3: "Education Access",
         text1:
           "We take children off the streets and slums and get them back in school. Through our Education Access programme, thousands of out-of-school children across Nigeria are enrolled or reintegrated into school every year.",
         text2: "Children in informal settlements and homeless communities often face multiple barriers to education: frequent displacement, lack of documentation, and the absence of a stable home. These challenges make it difficult to benefit from even free education where it is available.",
         text3:"We walk with them, every step of the way providing school supplies, and covering hidden costs of schooling. We ensure that nothing stands in the way of a child’s right to education.",
         imageSrc: Teacher,
         buttonText: "",
       },
  ];
      const data4 = [
         {
           imageSrc1: Line,
           spanText: "Education Technology",
           heading1: "OurSchool Africa",
           text1:
             "We embrace technology to democratise learning and reach even the most remote and underserved communities. Our digital learning initiative, OurSchool.africa, delivers quality learning resources to children who are out of school.",
           text2:
             "OurSchool.Africa is one digital school for out-of-school children, created to bring learning to children wherever they are. With pre recorded video lessons, animation, games, offline access, and AI support for personalised learning, we’re reaching children who are often forgotten those in slums, remote villages, and displacement camps.",
           text3:
             "We’re helping them learn in their own way, at their own pace, and in a language they understand. OurSchool is more than just a platform—it’s a chance for every child to catch up, keep up, and dream again.",
           imageSrc: BoyWithTap,
           buttonText: "",
         },
       ];
     const support = [
       {
         imageSrc1: Line,
         heading3: "School Support",
         text1:
           "To ensure that the children we enrol in school have a rewarding learning experience, we also support under-resourced schools that serve poor communities. We work with these schools to improve the learning environment through improvising school infrastructure, Supply of books and teaching aids, access to clean water and personnel support. ",

         imageSrc: Teacher,
         buttonText: "",
       },
     ];
     const literacy = [
       {
         imageSrc1: Line,
         heading3: "Literacy Campaign – Back2Basics",
         text1:
           "Back2Basics is our flagship literacy campaign to help children learn to read and write in a fun and simple way. Many children in underserved communities lack basic literacy even in upper primary classes. Without the ability to read, learning becomes nearly impossible.",
         text2:
           "Our literacy programme uses inclusive, play-based learning methods to make reading enjoyable. We also provide teacher training, incentives, and resources to improve literacy outcomes in schools.",
         imageSrc: Teacher,
         buttonText: "",
       },
     ];
  return (
    <main>
      <Head />
      {/* Hero Section */}
      {/* <HeroSection
        title="Transforming Lives With Education
"
        description="
Education is at the heart of our mission to empower disadvantaged children. We believe in the power of education to break the cycle of transgenerational poverty."
        imagePath={Hero}
      /> */}
      <Container>
        <section className="mt-[5rem]">
          <p className="xl:text-[25px] text-[18px] text-[#333333] w-full md:max-w-[60rem] text-justify">
            <span className="text-yellow">
              Educating homeless and out-of-school children {""}
            </span>
            through tailored education initiatives, driven by technology.
          </p>
        </section>
      </Container>
      <section className="my-[4rem]">
        <FlexComponent data={data} columnReversed={true} buttonClassName="" />
      </section>
      <section className="my-[4rem]">
        <FlexComponent data={data4} columnReversed={false} buttonClassName="" />
      </section>
      {/* <Container>
        <section className="bg-black bg-payment mb-[5rem]">
          <div className="py-8 px-8 flex flex-col md:flex-row justify-between items-center">
            <h2 className=" text-center text-2xl md:text-[40px] mb-4 text-white">
              Empower their Dreams
            </h2>
            <div className="text-center md:text-right flex flex-col md:flex-row gap-4">
              <button className="border-2 border-yellow text-white  w-full md:w-[15rem]  py-2 px-4 ">
                Sponsor a Scholarship
              </button>
              <button className="bg-yellow text-white  w-full md:w-[15rem]  mt-4 md:mt-0 px-4 py-2 md:px-0 md:py-0">
                Sponsor a Child
              </button>
            </div>
          </div>
        </section>
      </Container> */}
      <Empower/>
      <Enrolment />
      <div className="mt-[2rem]">
        <Cards />
      </div>
      <section className="my-[4rem]">
        <FlexComponent data={support} columnReversed={false} buttonClassName="" />
      </section>
      <section className="my-[4rem]">
        <FlexComponent data={literacy} columnReversed={true} buttonClassName="" />
      </section>
      {/* <section className="my-[4rem]">
        <FlexComponent data={literacy} columnReversed={true} buttonClassName="" />
      </section> */}
    </main>
  );
};

export default Home;
