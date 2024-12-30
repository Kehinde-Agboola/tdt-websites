
import React from "react";
import { HeroComponent } from "../_component/atom/hero";
// import background from "../../../public/assets/home/home-hero.png"
const Head = () => {
  return (
    <main className="bg-hero bg-black bg-cover bg-center bg-no-repeat h-screen ">
      <HeroComponent
        heading="CARE."
        spanText="EDUCATION."
        heading2="EMPOWERMENT."
        buttonText="Contact Us"
        buttonText2="Get Involved"
        // image="../../../public/assets/home/home-hero.png"
        subtext="Empowering children to be their best, recreating our future"
      />
    </main>
  );
};

export default Head;
