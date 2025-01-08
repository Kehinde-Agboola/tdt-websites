import React from "react";
import Container from "@/app/_component/shared";
import Merit from "../../../../public/assets/scholarship/merit.png"
import Potential from "../../../../public/assets/scholarship/potential.png"
import Economic from "../../../../public/assets/scholarship/economic.png"

import Image from "next/image";
const EligibilityCriteria = () => {
  const criteria = [
    {
      img: Merit,
      title: "Academic Merit",
      description:
        "Applicants should provide standardized test grades (A1) in the West African Senior School Certificate Examination or its equivalent in the following subjects: English Language, Mathematics, Physics, Chemistry, Biology, and other core science subjects.",
    },
    {
      img: Potential,
      title: "Leadership Potential",
      description:
        "Applicants must demonstrate leadership potential and have a verifiable track record of volunteering, community service, and a strong perception of personal integrity. Applicants are expected to provide appropriate documentation to verify their underrepresented status.",
    },
    {
      img: Economic,
      title: "Economic Disadvantage",
      description:
        "Applicants must belong to one or more of the following groups: First-generation undergraduate students from low-income families, orphans, housing-insecure, and displaced children/youths who completed basic education through sheer resilience.",
    },
  ];

  return (
    <section className= "py-[4rem] mt-[7rem] md:-mt-[10rem]  bg-[#F8F8F8]">
      <Container>
        <div className="px-6">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Eligibility Criteria
          </h2>
          <p className="text-[#555555] max-w-2xl mx-auto text-center mb-12  ">
            Our aim is to support high-achieving students from low-income
            backgrounds who demonstrate exceptional academic potential and a
            strong commitment to pursuing STEM discipline.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {criteria.map((item, index) => (
              <div
                key={index}
                className="bg-[#EEEFFF] shadow-lg  px-4 py-6 rounded-tr-lg"
              >
                {/* <div className="mb-4">{item.img}</div> */}
                <Image src={item.img} alt={item.title} />
                <h3 className=" font-bold my-4">{item.title}</h3>
                <p className="text-[#555555] text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EligibilityCriteria;
