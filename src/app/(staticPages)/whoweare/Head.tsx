import React from "react";
import Container from "@/app/_component/shared";
import Link from "next/link";
import { Button } from "@/app/_component/atom/button";
import PageHero from "@/app/_component/PageHero";

const Head = () => {
  return (
    <PageHero
      image="/assets/who/whero.png"
      alt="Who we are — we care, we educate, we empower"
      layout="left"
      imageClassName="object-cover object-center"
      priority
    >
      <Container>
        <div className="text-white py-16 sm:py-20 xl:pt-28 xl:pb-24">
          <div>
            <h1 className="font-heading text-3xl text-center font-bold sm:text-4xl md:text-left md:text-6xl mb-1">
              We Care.
            </h1>
            <h1 className="font-heading text-3xl text-center font-bold sm:text-4xl md:text-left md:text-6xl mb-1">
              <span className="text-[#FFBC00]">We Educate.</span>
            </h1>
            <h1 className="font-heading text-3xl text-center font-bold sm:text-4xl md:text-left md:text-6xl mb-1">
              We Empower.
            </h1>
          </div>
          <p className="mx-auto w-full max-w-lg text-base text-center leading-relaxed md:mx-0 md:text-left md:text-xl md:max-w-[32rem] mb-6">
            Our holistic approach ensures we&apos;re always there for children,
            wherever they need us, ensuring their wellbeing, securing their
            education, and empowering their future.
          </p>
          <div className="text-center md:text-left">
            <Link href="/get-involve">
              <Button className="bg-[#FFB400] text-black px-8 py-2">
                Get Involved
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </PageHero>
  );
};

export default Head;
