import React from "react";
import Image from "next/image";
import EmpowerHero from "../../../../../public/assets/empower/empowerhero.png";
// import { Button } from "../../_component/atom/button"; // Adjust path as needed
const Head = () => {
  return (
    <main className="h-full">
      <div className="bg-black h-[100vh] w-full relative">
        {/* Background Image */}
        <Image
          src={EmpowerHero}
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
          <section className="">
            <div className="max-w-[100%] md:max-w-[65%]">
              <h1 className="text-4xl leading-8 mb-4 md:text-6xl">
                <span className="text-[#FFBC00]"> Empowering</span> Children and
                Families to Thrive.
              </h1>
              <p className="text-4xl font-semibold mb-4 md:text-6xl"></p>
              <h1 className="text-4xl mb-4 md:text-6xl"></h1>
            </div>
            <p className="text-[16px] mb-6 max-w-[100%] md:max-w-[65%]">
              We believe that every child should have the freedom and capacity
              to make the right life choices and the power to pursue them with
              responsibility and self-determination.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Head;
