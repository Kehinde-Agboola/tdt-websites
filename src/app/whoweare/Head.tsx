
import React from "react";
// import background from "../../../public/assets/home/home-hero.png"
import Container from "../_component/shared";
import { Button } from "../_component/atom/button";
const Head = () => {
  return (
    <main className="bg-whero bg-black bg-cover bg-center bg-no-repeat h-[100vh] relative">
      <Container>
        <section className="text-white pt-[4rem] xl:pt-[8rem]">
          <div className="w-full md:w-[48rem]">
            <h1 className="text-4xl text-center md:text-left md:text-6xl font-bold  mb-4">
              We Care. <span className="text-[#FFBC00]">We Educate.</span> We
              Empower.
            </h1>
            <p className="text-lg md:text-xl mb-6 text-center md:text-left">
              Our holistic approach ensures we&apos;re always there for
              children, whenever and wherever they need us, ensuring their
              wellbeing, securing their education, and empowering their future.
            </p>
          <div>
            <Button className="bg-[#FFB400] text-black px-8 py-2">
              Get Involved
            </Button>
          </div>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default Head;
