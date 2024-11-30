import React from 'react'
import Boy from "@/assets/who/boy.png"
import Image from 'next/image'
import Container from '../_component/shared'
import { FlexComponent } from '../_component/atom/flex'
import Reading from "@/assets/who/reading.png"
const Cause = () => {
      const data = [
        {
       
          heading1: "Our Approach ",
          text1:
            "Our initiatives are designed to enable us come through for the children in areas where they need us most. Education is the centrepiece of our mission to uplift disadvantaged children. With education, we empower them to break free from the cycle of poverty that has held their families and communities back for generations. Our approach goes beyond literacy. We are harnessing the power of education for the social and economic inclusion of children who have been left behind by society and creating a brighter future. ",
          text2: "While education is the cornerstone of our work, we provide a holistic care programme which guarantees shelter, food, protection and all basic needs to categories of children who need a safe and stable home environment to benefit from the transformative potential of our education initiatives.",
          text3: "We collaborate and promote efforts and solutions that break down barriers on children’s way to greatness. We do not have all the answers. Sometimes children teach us how. By being attentive to them, we learn new ideas and innovative approaches that help us to deliver solutions that are both relevant and sustainable.",
          buttonText: "",
          imageSrc: Reading,
        },
      ];

  return (
    <main>
      <section className="bg-[#F4F4F4] py-[4rem]">
        <Container>
          <section className="relative flex flex-col xl:flex-row items-center ">
            <div className="w-full ">
              <Image
                src={Boy}
                className=""
                objectFit="cover"
                alt="young boy with smile at the breach learning center "
              />
            </div>
            <div className="w-full xl:w-[38rem] absolute xl:right-0 top-80 xl:top-20 bg-black text-white p-6 lg:p-12">
              <p className="text-yellow md:text-[64px] text-[34px]">
                Our Cause
              </p>
              <p className="text-base leading-7 text-justify">
                At The Destiny Trust, we are all about the wellbeing, education,
                and empowerment of homeless children and other classes of young
                people in disadvantaged circumstances. We are committed to one
                cause: enabling every child to be the best he or she can be
                regardless of where he or she was born.
              </p>
              <p className="text-base leading-7 mt-4">
                We give children at-risk a new start, nurture them, and hold
                their hands into the future through our integrated initiatives
                which focus mainly on using education to create tangible
                empowerment and lifting children from extreme poverty and
                conditions that hold them back. Our desire is to see them
                thrive, pursue lifelong happiness, and purpose.
              </p>
            </div>
          </section>
        </Container>
      </section>
      <Container>
        <section className="mt-[40rem] xl:mt-[5rem]">
          <p className="xl:text-[35px] text-[18px] text-[#555555] w-full md:max-w-[70rem]">
            <span className="text-yellow">
              Education is the centerpiece of our mission to uplift
              disadvantaged children.
            </span>
            With education, we empower them to break free from the cycle of
            poverty that has held their families and communities back for
            generations.
          </p>
        </section>
      </Container>
      <section className="my-[4rem]">
        <FlexComponent
          data={data}
          columnReversed={false}
          
        />
      </section>
    </main>
  );
}

export default Cause