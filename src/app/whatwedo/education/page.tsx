import { FlexComponent } from "@/app/_component/atom/flex";
import HeroSection from "@/app/_component/atom/HeroSection";
import Container from "@/app/_component/shared";
import Hero from "@/assets/edu/hero.png"
import Teacher from "@/assets/edu/teacher.png"
const Home: React.FC = () => {
     const data = [
       {
         text1:
           "Homeless families in urban centers have little motivation to send their children to school, even if education is said to be free because there is no guarantee of a stable home. When informal settlements are demolished, they relocate without preparation and the new location may not be within school vicinity. After repeated experience displacement, children have a great sense of loss that diminishes interest in going back to school. We provide the materials the children need to enroll or reintegrate into school. We eliminate all the barriers to schooling and hold their hands into the classroom. ",
         imageSrc: Teacher,
         buttonText: "",
       },
     ];
  return (
    <main>
      <HeroSection
        title="EDUCATION"
        description="This initiative allows youths to experience independent living as young adults while adhering to the same standards of discipline instilled during their upbringing."
        imagePath={Hero}
      />
      <section className="my-[4rem]">
        <FlexComponent data={data} columnReversed={true} buttonClassName="" />
      </section>
      <Container>
        <section className="bg-black bg-payment">
          <div className="py-8 px-8 flex flex-col md:flex-row justify-between items-center">
            <h2 className=" text-center text-2xl md:text-[44px] mb-4 text-white">
              Empower their Dreams
            </h2>
            <div className="text-center md:text-right flex gap-4">
              <button className="border-2 border-yellow text-white  w-full">
                Sponsor a Scholarship
              </button>
              <button className="bg-yellow text-white  w-full  mt-4 md:mt-0">
                Sponsor a Child
              </button>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default Home;
