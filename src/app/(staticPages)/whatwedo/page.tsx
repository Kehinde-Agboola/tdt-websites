import React from "react";
import Link from "next/link";
import Container from "@/app/_component/shared";
import { AnimatedSection } from "@/components/AnimatedSection";

const page = () => {
  return (
    <main className="min-w-0 bg-white">
      <AnimatedSection
        as="section"
        className="border-b border-gray-100 bg-gradient-to-b from-gray-50 to-white px-4 py-16 sm:py-20"
      >
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
              What we do
            </h1>
            <p className="mt-4 text-base text-gray-600 sm:text-lg">
              Explore our programmes:{" "}
              <Link
                href="/whatwedo/education"
                className="text-[#FFB400] underline-offset-2 hover:underline"
              >
                Education
              </Link>
              ,{" "}
              <Link
                href="/whatwedo/wellbeing"
                className="text-[#FFB400] underline-offset-2 hover:underline"
              >
                Wellbeing
              </Link>
              , and{" "}
              <Link
                href="/whatwedo/empowerment"
                className="text-[#FFB400] underline-offset-2 hover:underline"
              >
                Empowerment
              </Link>
              .
            </p>
          </div>
        </Container>
      </AnimatedSection>
    </main>
  );
};

export default page;
