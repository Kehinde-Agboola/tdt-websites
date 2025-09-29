"use client";

import Container from "@/app/_component/shared";
import Image from "next/image";
import { motion } from "framer-motion";

// Hero image - using existing team hero image, you can replace this with a specific about us image
const HeroImage = "/assets/care/carem.png";

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={HeroImage}
            alt="About Us Hero"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center h-full px-4">
          <div className="max-w-[100%] text-white md:max-w-6xl pl-[5rem]">
            <motion.blockquote
              className="max-w-[55%] text-xl md:text-2xl leading-relaxed border-l-4 border-[#FFB400] pl-6 italic"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              We are a people who say no to the barriers that hold children
              back—homelessness, hunger, illiteracy, poverty, abuse, and neglect.
              We empower them to rise, thrive, and reach their fullest potential.
            </motion.blockquote>
          </div>
        </div>
      </section>

      <Container>
        <div className="max-w-5xl mx-auto py-12 px-4">
          {/* Commitment Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-3 text-[#FFB400]">
              A Commitment to Children
            </h2>
            <p className="mb-4 text-black">
              Our commitment is to children—their education, wellbeing, and
              future. We educate, empower, and care for street children and other
              vulnerable young people, with education as the centrepiece of our
              work. To make learning truly sustainable, we provide integrated care
              and support services for children and their families, addressing
              barriers like homelessness, poverty, neglect, abuse, and exposure to
              crime.
            </p>
            <p className="mb-4 text-black">
              We rehabilitate, shelter, feed, and offer healthcare to children in
              urgent need of care and protection. Since 2012, we have reached over
              20,000 children—and with every transformed life, we press forward
              toward a future of even greater impact.
            </p>
          </section>

          {/* Our Impact Story Section */}
          <section className="mb-12 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-8 border border-yellow-100">
            <h2 className="text-3xl font-bold mb-6 text-[#FFB400] text-center">
              Our Impact Story
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                What began on the white sands within the sprawling slums of Kuramo has grown into a journey of transformation for thousands of children. Kuramo, tucked behind the grandeur of the high-rises of Victoria Island, was once a coastline slum, a stark metaphor for destitution beside wealth.
              </p>
              
              <p>
                At the start, all we had was conviction: the belief that if we could rescue and educate just that one child sleeping on the beachfront by night and roaming the streets by day, we could break the hold of poverty over them and over generations to come.
              </p>
              
              <p>
                Our mission was clear but daunting: to turn hopelessness into opportunity through the power of education. But we quickly realised that education alone would not be enough without the stability of a safe home. Homeless children needed a safe place to call home. So, we stepped in not only to educate but to shelter, feed, heal, care, and empower children to rewrite their stories.
              </p>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#FFB400]">
                <p className="font-medium text-gray-800">
                  Years into the journey, we are humbled by the difference we&apos;ve made together with our partners. Today, we see the seeds of greatness sprouting in the lives of children once written off by society. Children once addicted to drugs and living under bridges find freedom. A child once homeless and scavenging through Lekki&apos;s refuse now builds tech solutions to fight hunger. Girls once abused and abandoned have found healing, voice, and dignity. Former street children are now in universities and leading our efforts to rescue others like them.
                </p>
              </div>
              
              <p>
                And yet, we often wish we had started earlier to rescue the many we met in their most innocent, vulnerable state, simply needing food, safety, guidance, and a chance. The memory of missed opportunities reminds us of what&apos;s at stake and fuels our urgency to do more because without timely intervention, those same children could easily become tomorrow&apos;s menace to the society.
              </p>
              
              <p>
                Over the years, we&apos;ve learned that transformation is more sustainable and often less costly when it begins with children. They are not asking for too much. This doesn&apos;t take away from the complexity and commitment often required to rescue and raise a child at risk. There are no quick fixes. Real change takes long-term investment, patience, and deep involvement. That&apos;s why we adopt an integrative and qualitative approach; ensuring our work delivers deep and impact in the lives of children.
              </p>
              
              <div className="text-center bg-[#FFB400] text-black rounded-lg p-6 font-semibold text-lg">
                We are more convinced than ever: changing the life of one child creates ripples that change the world. That truth is our greatest inspiration and our call to an even greater future of impact.
              </div>
            </div>
          </section>

          {/* Vision Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-3 text-[#FFB400]">
              Our Vision
            </h2>
            <p className="text-black">
              We envision a world where every child, regardless of where they were
              born or circumstance, can dream freely, grow as a whole person, and
              live to the fullest extent of their potential. A world where no
              child is held back by poverty, and where education is a pathway to
              empowerment, dignity, and lasting change.
            </p>
          </section>

          {/* Mission Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-3 text-[#FFB400]">
              Our Mission
            </h2>
            <p className="text-black">
              To give at-risk children a new start and a fair chance to thrive by
              nurturing, protecting, and empowering them through integrated and
              holistic support centred on education as a tangible means of
              empowerment. We are breaking the cycle of poverty, unlocking every
              child&apos;s full potential, and meeting them where they need us most,
              with education as the foundation for lasting change.
            </p>
          </section>

          {/* Why We Invest Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-3 text-[#FFB400]">
              Why We Invest in Children
            </h2>
            <p className="mb-4 text-black">
              We believe children hold endless possibilities to recreate a better
              future for our society. Our future can only be as great as what we
              make of the children today.
            </p>
            <p className="mb-4 text-black">
              This is why we are big on their wellbeing, education and
              empowerment. With this, we are breaking the span of
              transgenerational poverty, rescuing children that would be left
              behind and building them into valuable human capital that Africa
              would need to thrive in the future.
            </p>
            <p className="text-black">
              Together, we can touch more lives; we can be the hope of that one
              child that could become a menace to the society without a timely
              intervention providing care, education and empowerment.
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
