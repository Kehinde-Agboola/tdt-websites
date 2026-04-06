import React from "react";
import Container from "@/app/_component/shared";

const EducationBanner = () => {
  return (
    <section
      aria-labelledby="education-page-banner-heading"
      className="w-full border-y border-[#FFB400]/30 bg-yellow bg-payment py-10 md:py-14"
    >
      <Container>
        <p
          id="education-page-banner-heading"
          className="mx-auto w-full max-w-[60rem] text-center text-[18px] text-[#1a1a1a] xl:text-[35px]"
        >
          <span className="font-semibold text-black">
            Educating homeless and out-of-school children{" "}
          </span>
          through tailored education initiatives, driven by technology.
        </p>
      </Container>
    </section>
  );
};

export default EducationBanner;
