import React from "react";
import Image from "next/image";
import { Button } from "../../_component/atom/button"; // Adjust path as needed
import Link from 'next/link';
const reports = [
  {
    year: 2024,
    title: "2024 Mid-year Report",
    file: "/../../../../../files/The Destiny Trust Mid-year Report 2024_.pdf",
  }
];
const Head = () => {
  return (
    <main className="h-full">
      <div className="bg-black h-[100vh] w-full relative">
        {/* Background Image */}
        <Image
          src="/assets/heos.png"
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
            <div>
              <h1 className="text-4xl leading-8 mb-4 md:text-6xl">CARE. </h1>
              <p className="text-4xl font-semibold mb-4 md:text-6xl">
                <span className="text-[#FFBC00]">EDUCATION.</span>
              </p>
              <h1 className="text-4xl mb-4 md:text-6xl">EMPOWERMENT.</h1>
            </div>
            <p className="text-[16px] mb-6">
              Empowering children to be their best, recreating our future.
            </p>

            <div className="flex flex-col gap-6 md:flex-row md:px-0 px-8">
              {/* <Button className="border border-[#FFB400] text-white duration-700 ease-in-out hover:bg-[#FFB400] hover:text-white px-8 py-2 transition-all">
                Get Involved
              </Button> */}
              <Link 
  href="/get-involve"
  className="inline-block border border-[#FFB400] text-white duration-700 ease-in-out hover:bg-[#FFB400] hover:text-white px-8 py-2 transition-all text-center"
>
  Get Involved
</Link>
              <Button className="border border-[#FFB400] text-white duration-700 ease-in-out hover:bg-[#FFB400] hover:text-white px-8 py-2 transition-all">
                <a
                  href={reports[0].file}
                  download
                  className=""
                >
                  Read 2024 Impact report
                </a>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Head;
