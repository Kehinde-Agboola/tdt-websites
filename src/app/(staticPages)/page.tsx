import Head from "@/app/(staticPages)/_home/Head";
import Payment from "@/app/(staticPages)/_home/Payment";
import Enable from "@/app/(staticPages)/_home/Enable";
import Initaitive from "@/app/(staticPages)/_home/Initaitive";
import Future from "@/app/(staticPages)/_home/Future";
import Impact from "@/app/(staticPages)/_home/Impact";
import Report from "@/app/(staticPages)/_home/Report";
import Numbers from "@/app/(staticPages)/_home/Numbers";
import Empower from "@/app/(staticPages)/_home/Empower";
import Community from "@/app/(staticPages)/_home/Community";
import Blog from "@/app/(staticPages)/_home/Blog";
import Features from "@/app/(staticPages)/_home/Features";
import Banner from "@/app/(staticPages)/_home/Banner";
const page = () => {
  return (
    <div>
      <Head />
      <Payment />
      <Enable />
      <Initaitive />
      <Future />
      <Impact />
      <Report />
      <Numbers />
      <Empower />
      <Community />
      <Banner/>
      <Blog />
      <Features/>
    </div>
  );
};

export default page;
