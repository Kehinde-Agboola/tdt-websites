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

const page = () => {
  return (
    <div>
      <Head />
      <Payment />
      <MissionQuote />
      <SustainableEducationCTA />
      <WhyMatters />
      <HowWeWorkSection />
      <Numbers />
      <Impact />
      <Report />
      <Community />
      <HomeTeasers />
      <Banner />
      <Blog />
      <Features />
    </div>
  );
};

export default page;
