
import React from "react";
// import Container from "@/app/../_component/shared";
import Container from "@/app/_component/shared";
import Link from "next/link";
// import { Button } from "../_component/atom/button";
import {Button} from "@/app/_component/atom/button"
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
              <Link href="/get-involve">
                <Button className="bg-[#FFB400] text-black px-8 py-2">
                  Get Involved
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default Head;


{/* <div className="flex text-center text-white absolute inset-0 items-center md:pl-[4rem] md:px-0 md:text-left pl-0 z-10">
  <section className="-leading-16">
    <div>
      <h1 className="text-4xl leading-8 mb-4 md:text-6xl">We Care.</h1>
      <p className="text-4xl font-semibold mb-4 md:text-6xl">
        <span className="text-[#FFBC00]">We Educate.</span>
      </p>
      <h1 className="text-4xl mb-4 md:text-6xl">We Empower.</h1>
    </div>
    <p className="text-lg md:text-xl mb-6 text-center md:text-left">
      Our holistic approach ensures we&apos;re always there for children,
      whenever and wherever they need us, ensuring their wellbeing, securing
      their education, and empowering their future.
    </p>

    <Button className="border border-[#FFB400] text-white duration-700 ease-in-out hover:bg-[#FFB400] hover:text-white px-8 py-2 transition-all">
                Get Involved
              </Button>
    <Link
      href="/get-involve"
      className="inline-block border border-[#FFB400] text-white duration-700 ease-in-out hover:bg-[#FFB400] hover:text-white px-8 py-2 transition-all text-center"
    >
      Get Involved
    </Link>
  </section>
</div>; */}