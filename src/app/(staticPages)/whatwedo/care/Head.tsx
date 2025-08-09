import React from "react";
import Image from "next/image";
import CareHero from "../../../../../public/assets/care/carehero.png"
// import { Button } from "../../_component/atom/button"; // Adjust path as needed
const Head = () => {
  return (
    <main className="h-full">
      <div className="bg-black h-[100vh] w-full relative">
        {/* Background Image */}
        <Image
          src={CareHero}
          alt="Background Image"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          priority
          className="z-0"
        />

        <div className="flex text-center text-white absolute inset-0 items-center md:pl-[4rem] md:px-0 md:text-left pl-0 z-10">
          <section className="-leading-16">
            <div className="max-w-[100%] md:max-w-[65%]">
              <h1 className="text-4xl leading-8 mb-4 md:text-6xl">
                Providing <span className="text-[#FFBC00]"> Safe Shelter</span>{" "}
                and
                <span className="text-[#FFBC00]"> Care </span>
                for Sustainable
                <span className="text-[#FFBC00]"> Education</span>
              </h1>
              <p className="text-4xl font-semibold mb-4 md:text-6xl"></p>
              <h1 className="text-4xl mb-4 md:text-6xl"></h1>
            </div>
            <p className="text-[16px] mb-6 max-w-[100%] md:max-w-[65%]">
              We offer comprehensive care services to rescue, rehabilitate, and
              support children removed from the streets, slums, and other
              vulnerable situations. Through our holistic care programme, we
              provide the safety and stability children need to stay in school
              and succeed.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Head;
