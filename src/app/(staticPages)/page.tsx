import Head from "@/app/(staticPages)/_home/Head";
import Payment from "@/app/(staticPages)/_home/Payment";
import MissionQuote from "@/app/(staticPages)/_home/MissionQuote";
import SustainableEducationCTA from "@/app/(staticPages)/_home/SustainableEducationCTA";
import WhyMatters from "@/app/(staticPages)/_home/WhyMatters";
import HowWeWorkSection from "@/app/(staticPages)/_home/HowWeWorkSection";
import Impact from "@/app/(staticPages)/_home/Impact";
import Report from "@/app/(staticPages)/_home/Report";
import Numbers from "@/app/(staticPages)/_home/Numbers";
import Community from "@/app/(staticPages)/_home/Community";
import HomeTeasers from "@/app/(staticPages)/_home/HomeTeasers";
import Blog from "@/app/(staticPages)/_home/Blog";
import Features from "@/app/(staticPages)/_home/Features";
import Banner from "@/app/(staticPages)/_home/Banner";
import { AnimatedSection } from "@/components/AnimatedSection";

const stagger = (i: number) => i * 0.06;

const page = () => {
  return (
    <div>
      <AnimatedSection animateOnMount>
        <Head />
      </AnimatedSection>
      <AnimatedSection delay={stagger(0)}>
        <Payment />
      </AnimatedSection>
      <AnimatedSection delay={stagger(1)}>
        <MissionQuote />
      </AnimatedSection>
      <AnimatedSection delay={stagger(2)}>
        <SustainableEducationCTA />
      </AnimatedSection>
      <AnimatedSection delay={stagger(3)}>
        <WhyMatters />
      </AnimatedSection>
      <AnimatedSection delay={stagger(4)}>
        <HowWeWorkSection />
      </AnimatedSection>
      <AnimatedSection delay={stagger(5)}>
        <Numbers />
      </AnimatedSection>
      <AnimatedSection delay={stagger(6)}>
        <Impact />
      </AnimatedSection>
      <AnimatedSection delay={stagger(7)}>
        <Report />
      </AnimatedSection>
      <AnimatedSection delay={stagger(8)}>
        <Community />
      </AnimatedSection>
      <AnimatedSection delay={stagger(9)}>
        <HomeTeasers />
      </AnimatedSection>
      <AnimatedSection delay={stagger(10)}>
        <Banner />
      </AnimatedSection>
      <AnimatedSection delay={stagger(11)}>
        <Blog />
      </AnimatedSection>
      <AnimatedSection delay={stagger(12)}>
        <Features />
      </AnimatedSection>
    </div>
  );
};

export default page;
