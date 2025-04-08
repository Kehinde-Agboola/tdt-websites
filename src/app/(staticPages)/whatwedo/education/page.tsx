import { FlexComponent } from "@/app/_component/atom/flex";
import HeroSection from "@/app/_component/atom/HeroSection";
import Container from "@/app/_component/shared";
import Hero from "../../../../../public/assets/edu/landing.png"
import Teacher from "../../../../../public/assets/edu/teacher.png";
// import Line from "../../../../public/assets/edu/Lineyellow.png";
import Line from "../../../../../public/assets/edu/Lineyellow.png"
import Enrolment from "./Enrolment";
const Home: React.FC = () => {
     const data = [
       {
          imageSrc1: Line,
         spanText: "School Enrolment & Back-to-School",
         heading1: "School Enrolment & Back-to-School",
         text1:
           "Homeless families in urban centers have little motivation to send their children to school, even if education is said to be free because there is no guarantee of a stable home. When informal settlements are demolished, they relocate without preparation and the new location may not be within school vicinity. After repeated experience displacement, children have a great sense of loss that diminishes interest in going back to school. We provide the materials the children need to enroll or reintegrate into school. We eliminate all the barriers to schooling and hold their hands into the classroom. ",
         imageSrc: Teacher,
         buttonText: "",
       },
     ];
  return (
    <main>
      <HeroSection
        title="Educating for a Brighter Future
"
        description="
Education is at the heart of our mission to empower disadvantaged children. We believe in the power of education to break the cycle of transgenerational poverty."
        imagePath={Hero}
      />
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
      <Container>
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
      </Container>
      <Enrolment />
    </main>
  );
};

export default Home;
