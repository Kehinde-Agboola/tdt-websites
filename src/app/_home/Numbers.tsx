import React from 'react'
import Container from '../_component/shared';
const Numbers = () => {
    const gridData = [
      {
        title: "1.7K+",
        paragraph:
          "1.7K+children enrolled in schoolfor the first time or supported to go back to school.",
      },
      {
        title: "1.05M+",
        paragraph:
          "meals served in our shelters, resettlement homes, school feeding and community-basedfeeding programmes.",
      },
      {
        title: "1.2K+",
        paragraph:
          "children in underserved public schools taught literacy by our Teachers, paragraph",
      },
      {
        title: "152+",
        paragraph:
          "children under scholarship oradmitted into our tuition-free school",
      },
      {
        title: "1069+",
        paragraph:
          "students trained on coding, design and digital skills under our STEAM projects",
      },
      {
        title: "165+",
        paragraph:
          "children provided shelter and alternative care",
      },
    ];
  return (
    <section className="bg-[#F4F4F4] pt-[5rem] pb-[3rem]">
      <Container>
        <div>
          <p className="text-[#333333] md:text-[40px] text-[24px] text-center pb-[2rem]">
            Over 20,000 children have relied on us for education, well-being and
            empowerment since 2012
          </p>
        </div>
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10 justify-center">
          {gridData?.map((grid, index) => {
            return (
              <div key={index} className="text-center">
                <p className="text-[#FFB400] text-[70px] font-[500]">
                  {grid?.title}
                </p>
                <p>{grid?.paragraph}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Numbers