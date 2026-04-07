import React from "react";
// import Head from "@/app/whoweare/Head"
import Head from "@/app/(staticPages)/whoweare/Head"
import Cause from "./Cause";
import Leverage from "./Leverage";
import Invest from "./Invest";
import { AnimatedSection } from "@/components/AnimatedSection";
import { staggerDelay } from "@/lib/motion";

const page = () => {
  return (
    <div>
      <AnimatedSection animateOnMount>
        <Head />
      </AnimatedSection>
      <AnimatedSection delay={staggerDelay(0)}>
        <Cause />
      </AnimatedSection>
      <AnimatedSection delay={staggerDelay(1)}>
        <Leverage />
      </AnimatedSection>
      <AnimatedSection delay={staggerDelay(2)}>
        <Invest />
      </AnimatedSection>
    </div>
  );
};

export default page;
