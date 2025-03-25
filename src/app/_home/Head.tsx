
import React from "react";
import { HeroComponent } from "../_component/atom/hero";
// import background from "../../../public/assets/home/home-hero.png"
const Head = () => {
  return (
    <main className="h-full">
      <HeroComponent
        heading="CARE."
        spanText="EDUCATION."
        heading2="EMPOWERMENT."
        // buttonText=""
        buttonText="Get Involved"
        image="/assets/heos.png"
        subtext="Empowering children to be their best, recreating our future."
      />
    </main>
  );
};

export default Head;
