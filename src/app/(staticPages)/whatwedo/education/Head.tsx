import React from "react";
import Image from "next/image";
import Hero from "../../../../../public/assets/edu/landing.png";
const Head = () => {
  return (
    <main className="h-full">
      <div className="bg-black h-[100vh] w-full relative">
        {/* Background Image */}
        <Image
          src={Hero}
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
          <section className="-leading-14">
            <div className="md:max-w-[50%]">
              <h1 className="text-4xl leading-8 mb-4 md:text-6xl">
                Transforming Lives With
                <span className="text-[#FFBC00]"> EDUCATION</span>
              </h1>

              <p className="text-[16px] mb-6">
                We believe that education is the most powerful tool for breaking
                the cycle of poverty and building a better future. We remove
                barriers to learning and provide alternative education pathways
                for disadvantaged children.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Head;
