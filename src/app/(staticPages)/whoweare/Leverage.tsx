import React from 'react'
import Container from "@/app/_component/shared"
import Virtual from "../../../../public/assets/who/virtual.png"
import Platform from "../../../../public/assets/who/platform.png";
import Game from "../../../../public/assets/who/game.png";
import Image from 'next/image'
import Girls from "../../../../public/assets/who/twogirls.png";
const Leverage = () => {
    const data = [
      {
        heading: "Virtual Learning Classrooms",
            text: "A virtual learning classroom provides an online environment where teachers and students can interact, collaborate, and engage in educational activities.",
            Img: Virtual,
      },
      {
        heading: "Interactive Learning Platforms",
            text: "Interactive learning platforms are designed to engage students actively in the learning process through various digital tools and resources.",
            Img: Platform,
      },
      {
        heading: "Gamification",
            text: "Gamification in education involves incorporating game elements into the learning process to increase engagement, motivation, and overall effectiveness.",
            Img: Game,
      },
    ];
  return (
    <main className="bg-black text-white py-8">
      <Container>
        <div className="mb-[4rem] ">
          <h1 className="text-[26px] md:text-[64px]">
            Leveraging <br />
            <span className="text-yellow">Technology</span> for Education.
          </h1>
          <p className="w-full md:w-[40rem]">
            Our mission is to educate millions of disadvantage Nigeria children
            driven by technology solutions that ensure access to quality
            education everywhere.
          </p>
        </div>
        <section className="flex flex-col-reverse md:flex-row  justify-between">
          <div className="">
            {data.map((items) => (
              <div
                key={items.heading}
                className="flex flex-col md:flex-row justify-between mt-4"
              >
                <Image src={items.Img} alt={items.text} className="" />
                <div className="w-full md:w-[35rem] px-2 md:px-0">
                  <p className="md:text-[24px] pb-[5px]">{items.heading}</p>
                  <p className="text-[#CECECE]  ">{items.text}</p>
                </div>
              </div>
            ))}
          </div>
          <Image src={Girls} alt="two girls reading" />
        </section>
      </Container>
    </main>
  );
}

export default Leverage