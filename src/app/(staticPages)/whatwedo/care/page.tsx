import React from 'react'
import HeroSection from '@/app/_component/atom/HeroSection'
import { FlexComponent } from '@/app/_component/atom/eduFlex'
import { AltComponent } from '@/app/_component/atom/altFlex'
import CareHero from "../../../../../public/assets/care/carehero.png"
import Line from "../../../../../public/assets/edu/Lineyellow.png";
import Rehab from "../../../../../public/assets/care/children.png";
import Nothing from "../../../../../public/assets/care/nothing.png";
import ChildHealth from "../../../../../public/assets/care/eyecheck.png";
import HungerRelief from "../../../../../public/assets/care/hunger.png";
const page = () => {
      const data = [
        {
          imageSrc1: Line,
          spanText: "Rehabilitation and Residential care",
          heading1:
            "More Children Rescued and New Hopes for Children on Transition from Residential Care. ",
          text1:
                  "The Trust operates 4 residential learning centres Lagos and Oyo State. Our centres are home to children who have no home. Many children find love, support and a safe place to play and learn at the Centre.",
          text2: "Through this initiative, The Destiny Trust is adopting innovative methods to engage children in activities leading to improved academic abilities and acquisition of creative and recreational skills. We anticipate the prospects of this initiative providing an opportunity for children to acquire skills in computer programming, arts, music, fashion design, sports and other vocational fields. Our mission is to enable every child to be the best he or she can be regardless of where he or she was born, and we have kept that promise for the past decade of our existence.",
          imageSrc: Rehab,
          buttonText: "Learn More",
        },
      ];
      const data2 = [
        {
          imageSrc1: Line,
          spanText: "Supported Independent Living",
          heading1:
            "Supported Independent Living Programme: Providing Stability for Youths in Transition",
          text1:
            "This initiative supports teenagers transitioning from residential care by providing stable housing when family reintegration or alternative care isn't possible. While promoting deinstitutionalization and independent living, we recognize the need for safe accommodation, especially during academic breaks.",
          text2:
            "To address this, we opened our first Supported Independent Living Apartment (SIL) in February 2023, licensed by the Lagos State Ministry of Youth and Social Development, offering young adults a chance to experience independence while maintaining discipline.",
          imageSrc: Nothing,
          buttonText: "",
        },
      ];
      const data3 = [
        {
          imageSrc1: Line,
          spanText: "Child Healthcare",
          heading1:
            "Providing scholarships and school sponsorships to ensure that every child has the opportunity to learn, grow, and thrive, regardless of their background.",
          text1:
            "Hands of Care is our community-based health outreach organized under a collaboration with our partner, Dr. Funmi Alakija Foundation (DFAF). Every year, hundreds of homeless children and family depend on our healthcare programmes in communities. We provide onsite health screening, treatment and referral in appropriate cases.",
          text2:
            "Our goal is to extend the reach of health care to children and families who are most exposed to diseases because of homeless. We also educate children and their families on how they can improve their quality of life and provide sanitary items and other relief materials needed to keep disease away.",
          imageSrc: ChildHealth,
          buttonText: "",
        },
    ];
    const data4 = [
        {
          imageSrc1: Line,
          spanText: "Hunger Relief",
          heading1:
            "Providing scholarships and school sponsorships to ensure that every child has the opportunity to learn, grow, and thrive, regardless of their background.",
          text1:
            "We partner with compassionate individuals and organisations to ​administer scholarship programmes that meet our shared goal of ​empowering children with education from primary school to the ​university. We are committed to transforming lives by providing scholarships and school sponsorships to underprivileged children. We believe that every child deserves access to quality education, regardless of their financial background. Through this programs, we aim to break the cycle of poverty and create opportunities for a brighter future. ",
          imageSrc: HungerRelief,
          buttonText: "",
        },
      ];
  return (
    <main>
      <HeroSection
        title="CARE"
        description="Our mission is to enable every child to be the best he or she can be regardless of where he or she was born, and we have kept that promise for the past decade of our existence."
        imagePath={CareHero}
      />
      <section className="py-[4rem] bg-[#F9F9F9]">
        <FlexComponent
          data={data}
          columnReversed={true}
          buttonClassName="bg-yellow py-2 px-4"
        />
      </section>
      <section className=" my-[4rem]">
        <FlexComponent
          data={data2}
          columnReversed={false}
          buttonClassName=""
        />
      </section>
      <section className=" mt-[4rem]">
        <AltComponent
          data={data3}
          columnReversed={true}
          buttonClassName=""
        />
      </section>
      <section className="py-[4rem] bg-[#F9F9F9]">
        <FlexComponent
          data={data4}
          columnReversed={false}
          buttonClassName=""
        />
      </section>
    </main>
  );
}

export default page