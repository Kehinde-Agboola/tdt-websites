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
      <section className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden">
        {/* Background Image */}
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src={HeroImage}
            alt="About Us Hero"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <motion.div 
            className="absolute inset-0 bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center h-full px-4 md:px-8">
          <div className="w-full text-white max-w-6xl mx-auto md:pl-8 lg:pl-16">
            <motion.blockquote
              className="w-full md:max-w-[75%] lg:max-w-[65%] text-base md:text-xl lg:text-2xl leading-relaxed border-l-4 border-[#FFB400] pl-4 md:pl-6 italic"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              We are a people who say no to the barriers that hold children
              back—homelessness, hunger, illiteracy, poverty, abuse, and
              neglect. We empower them to rise, thrive, and reach their fullest
              potential.
            </motion.blockquote>
          </div>
        </div>
      </section>

      <Container>
        <div className="max-w-4xl mx-auto py-8 md:py-12 px-4 md:px-6">
          {/* Commitment Section */}
          <motion.section 
            className="mb-8 md:mb-12 text-justify"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.h2 
              className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6 text-[#FFB400] text-justify"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              A Commitment to Children
            </motion.h2>
            <motion.p 
              className="mb-4 md:mb-6 text-gray-800 text-sm md:text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Our commitment is to children—their education, wellbeing, and
              future. We educate, empower, and care for street children and
              other vulnerable young people, with education as the centrepiece
              of our work. To make learning truly sustainable, we provide
              integrated care and support services for children and their
              families, addressing barriers like homelessness, poverty, neglect,
              abuse, and exposure to crime.
            </motion.p>
            <motion.p 
              className="mb-4 md:mb-6 text-gray-800 text-sm md:text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              We rehabilitate, shelter, feed, and offer healthcare to children
              in urgent need of care and protection. Since 2012, we have reached
              over 20,000 children—and with every transformed life, we press
              forward toward a future of even greater impact.
            </motion.p>
          </motion.section>

          {/* Our Impact Story Section */}
          <motion.section 
            className="mb-8 md:mb-12  bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg md:rounded-xl p-4 md:p-6 lg:p-8 border border-yellow-100"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.h2 
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-[#FFB400] text-center"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Our Impact Story
            </motion.h2>

            <div className="space-y-4 md:space-y-6 text-gray-700 leading-relaxed text-justify">
              <motion.p 
                className="text-sm md:text-base"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                What began on the white sands within the sprawling slums of
                Kuramo has grown into a journey of transformation for thousands
                of children. Kuramo, tucked behind the grandeur of the
                high-rises of Victoria Island, was once a coastline slum, a
                stark metaphor for destitution beside wealth.
              </motion.p>

              <motion.p 
                className="text-sm md:text-base"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                At the start, all we had was conviction: the belief that if we
                could rescue and educate just that one child sleeping on the
                beachfront by night and roaming the streets by day, we could
                break the hold of poverty over them and over generations to
                come.
              </motion.p>

              <motion.p 
                className="text-sm md:text-base"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                Our mission was clear but daunting: to turn hopelessness into
                opportunity through the power of education. But we quickly
                realised that education alone would not be enough without the
                stability of a safe home. Homeless children needed a safe place
                to call home. So, we stepped in not only to educate but to
                shelter, feed, heal, care, and empower children to rewrite their
                stories.
              </motion.p>

              <motion.div 
                className="bg-white rounded-lg p-4 md:p-6 shadow-sm border-l-4 border-[#FFB400]"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <p className="font-medium  text-gray-800 text-sm md:text-base leading-relaxed">
                  Years into the journey, we are humbled by the difference
                  we&apos;ve made together with our partners. Today, we see the
                  seeds of greatness sprouting in the lives of children once
                  written off by society. Children once addicted to drugs and
                  living under bridges find freedom. A child once homeless and
                  scavenging through Lekki&apos;s refuse now builds tech
                  solutions to fight hunger. Girls once abused and abandoned
                  have found healing, voice, and dignity. Former street children
                  are now in universities and leading our efforts to rescue
                  others like them.
                </p>
              </motion.div>

              <motion.p 
                className="text-sm md:text-base"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                And yet, we often wish we had started earlier to rescue the many
                we met in their most innocent, vulnerable state, simply needing
                food, safety, guidance, and a chance. The memory of missed
                opportunities reminds us of what&apos;s at stake and fuels our
                urgency to do more because without timely intervention, those
                same children could easily become tomorrow&apos;s menace to the
                society.
              </motion.p>

              <motion.p 
                className="text-sm md:text-base"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                Over the years, we&apos;ve learned that transformation is more
                sustainable and often less costly when it begins with children.
                They are not asking for too much. This doesn&apos;t take away
                from the complexity and commitment often required to rescue and
                raise a child at risk. There are no quick fixes. Real change
                takes long-term investment, patience, and deep involvement.
                That&apos;s why we adopt an integrative and qualitative
                approach; ensuring our work delivers deep and impact in the
                lives of children.
              </motion.p>

              <motion.div 
                className="text-center bg-[#FFB400] text-black rounded-lg p-4 md:p-6 font-semibold text-sm md:text-base lg:text-lg"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                We are more convinced than ever: changing the life of one child
                creates ripples that change the world. That truth is our
                greatest inspiration and our call to an even greater future of
                impact.
              </motion.div>
            </div>
          </motion.section>

          {/* Vision Section */}
          <motion.section 
            className="mb-8 md:mb-12 text-justify"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.h2 
              className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6 text-[#FFB400]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Our Vision
            </motion.h2>
            <motion.p 
              className="text-gray-800 text-sm md:text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              We envision a world where every child, regardless of where they
              were born or circumstance, can dream freely, grow as a whole
              person, and live to the fullest extent of their potential. A world
              where no child is held back by poverty, and where education is a
              pathway to empowerment, dignity, and lasting change.
            </motion.p>
          </motion.section>

          {/* Mission Section */}
          <motion.section 
            className="mb-8 md:mb-12 text-justify"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.h2 
              className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6 text-[#FFB400]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Our Mission
            </motion.h2>
            <motion.p 
              className="text-gray-800 text-sm md:text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              To give at-risk children a new start and a fair chance to thrive
              by nurturing, protecting, and empowering them through integrated
              and holistic support centred on education as a tangible means of
              empowerment. We are breaking the cycle of poverty, unlocking every
              child&apos;s full potential, and meeting them where they need us
              most, with education as the foundation for lasting change.
            </motion.p>
          </motion.section>

          {/* Why We Invest Section */}
          <motion.section 
            className="mb-8 md:mb-12 text-justify"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.h2 
              className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6 text-[#FFB400]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Why We Invest in Children
            </motion.h2>
            <motion.p 
              className="mb-4 md:mb-6 text-gray-800 text-sm md:text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              We believe children hold endless possibilities to recreate a
              better future for our society. Our future can only be as great as
              what we make of the children today.
            </motion.p>
            <motion.p 
              className="mb-4 md:mb-6 text-gray-800 text-sm md:text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              This is why we are big on their wellbeing, education and
              empowerment. With this, we are breaking the span of
              transgenerational poverty, rescuing children that would be left
              behind and building them into valuable human capital that Africa
              would need to thrive in the future.
            </motion.p>
            <motion.p 
              className="text-gray-800 text-sm md:text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Together, we can touch more lives; we can be the hope of that one
              child that could become a menace to the society without a timely
              intervention providing care, education and empowerment.
            </motion.p>
          </motion.section>
        </div>
      </Container>
    </main>
  );
}
