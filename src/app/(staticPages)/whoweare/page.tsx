import React from "react";
// import Head from "@/app/whoweare/Head"
import Head from "@/app/(staticPages)/whoweare/Head"
import Cause from "./Cause";
import Leverage from "./Leverage";
import Invest from "./Invest";
const page = () => {
  return <div>
    <Head />
    <Cause />
    <Leverage />
    <Invest/>
  </div>;
};

export default page;
