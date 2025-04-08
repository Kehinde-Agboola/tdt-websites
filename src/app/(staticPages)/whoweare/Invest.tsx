import React from 'react'
// import Girl from "@/assets/who/destiny.png"
import Girl from "../../../../public/assets/who/destiny.png"
// import { FlexComponent } from '../_component/atom/flex';
import { FlexComponent } from '@/app/_component/atom/flex';
const Invest = () => {
         const data = [
           {
             heading3: "Why we invest in children",
             text1:
               "We believe children hold endless possibilities to recreate a better future for our society. Indeed, the future of our society can only be as great as what we make of the children today.",
             text2:
               "This is why we are big on their wellbeing, education and empowerment. With this, we are breaking the span of transgenerational poverty, rescuing children that would be left behind and building them into valuable human capital that Africa would need to thrive in the future.",
             text3:
               "Together, we can touch more lives; we can be the hope of that one child that could become a menace to the society without a timely intervention providing care, education and empowerment.",
             buttonText: "Button",
             imageSrc: Girl,
           },
         ];

  return (
    <section className="my-[4rem]">
      <FlexComponent
        data={data}
        columnReversed={true}
        buttonClassName="bg-[#FFB400] text-black w-[160px] py-2"
      />
    </section>
  );
}

export default Invest