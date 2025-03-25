import React from 'react'
import { FlexComponent } from '../_component/atom/flex';
import Committed from "../../../public/assets/home/commited.png"
const Enable = () => {
  const data = [
    {
      spanText1: "We are committed to one cause: ",
      heading4:
        "enabling every child to be the best he or she can be regardless of where he or she was born.",
      text1:
        "At The Destiny Trust, we are all about the wellbeing, education and empowerment of homeless children and other classes of young people in disadvantaged circumstances. We give children at-risk a new start, nurture them and hold their hands into the future through our integrated initiatives which focus mainly on using education to create tangible empowerment and lifting children from extreme poverty and conditions that hold them back.",
      buttonText: "Join Us",
      imageSrc: Committed,
    },
  ];

  return (
   
    <section className="mt-[25rem] mb-[3rem]">
        <FlexComponent
        data={data}
        columnReversed={false}
        buttonClassName="bg-[#FFB400] text-black w-[160px] py-2"
      />

    </section>
   
  );
}

export default Enable