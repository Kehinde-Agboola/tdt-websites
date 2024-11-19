import React from 'react'
import Container from '../_component/shared'
const Report = () => {
  return (
          <section className="relative bg-white pb-[5rem] pt-[2rem] md:-mt-[20rem] -mt-[10rem]">
      <Container>
        <h1 className="text-yellow text-[32px] text-center md:text-left md:text-[40px] font-[500] my-8">
          Reporting Progress
        </h1>
        <div className=" flex flex-col xl:flex-row items-center justify-between gap-[3rem]">
          <div className="lg:basis-[30%] flex-basis-[50%]  text-justify">
            <p>
              Beyond numbers, we aim at making a qualitative impact in the lives
              of children. This requires sustained long-term investment in their
              education and well-being and meeting their most critical needs for
              total development
            </p>
          </div>
          <div className="lg:basis-[50%] flex-basis-[50%] text-justify">
            <p className="italic font-[400] text-[24px] border-l-0 md:border-l-4 border-yellow pt-3 md:pt-0 md:px-3 border-t-4 md:border-t-0 ">
              “We are convinced that a change in the life of one child makes far
              bigger change for the society. this is our inspiration for a
              future of greater future before us”
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Report