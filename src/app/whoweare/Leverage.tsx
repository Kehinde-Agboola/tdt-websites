import React from 'react'
import Container from "@/app/_component/shared"
import Virtual from "@/assets/who/virtual.png"
import Platform from "@/assets/who/platform.png"
import Game from "@/assets/who/game.png"
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
    <main className="bg-black text-white">
      <Container>
        <div>
          <h1 className="text-[64px]">
            Leveraging <br /><span className="text-yellow">Technology</span> for
            Education.
          </h1>
          <p>
            Our mission is to educate millions of disadvantage Nigeria children
            driven by technology solutions that ensure access to quality
            education everywhere.
          </p>
              </div>
              <section>
                  
              </section>
      </Container>
    </main>
  );
}

export default Leverage