"use client";

import Container from "@/app/_component/shared";
import PageHero from "@/app/_component/PageHero";
import { motion } from "framer-motion";

const HeroImage = "/cares.png";

function SectionRule() {
  return <hr className="border-gray-200 my-8 md:my-10" />;
}

export default function AboutPage() {
  return (
    <main>
      <PageHero
        image={HeroImage}
        alt="About The Destiny Trust"
        layout="center"
        imageClassName="object-cover object-right md:object-center"
        priority
      >
        <motion.blockquote
          className="w-full max-w-6xl px-2 text-sm sm:text-base md:max-w-[75%] md:text-xl lg:max-w-[65%] lg:text-2xl leading-relaxed text-white border-l-4 border-[#FFB400] pl-4 md:pl-6 italic text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          We are a people who say no to the barriers that hold children
          back—homelessness, hunger, illiteracy, poverty, abuse, and
          neglect—and yes to possibility, dignity, and opportunity.
        </motion.blockquote>
      </PageHero>

      <Container>
        <div className="max-w-4xl mx-auto py-8 md:py-12 px-4 md:px-6">
          <motion.section
            className="mb-2 text-justify"
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
              Who We Are
            </motion.h2>
            <motion.p
              className="mb-4 md:mb-6 text-gray-800 text-sm md:text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              We work with children who are often invisible to systems—those on
              the streets, in informal settlements, displaced communities, and
              unstable homes—repositioning their future through education, care,
              and skills empowerment.
            </motion.p>
          </motion.section>

          <SectionRule />

          <motion.section
            className="mb-2 text-justify"
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
              Our Commitment
            </motion.h2>
            <motion.p
              className="mb-4 md:mb-6 text-gray-800 text-sm md:text-base leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Our commitment is to the whole child.
            </motion.p>
            <motion.p
              className="text-gray-800 text-sm md:text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              We educate, protect, nurture, and empower—but more importantly,
              we stay for the long term. Real transformation requires
              consistency, trust, and time.
            </motion.p>
          </motion.section>

          <SectionRule />

          <motion.section
            className="mb-2 text-justify"
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
              A world where every child—regardless of circumstance—can dream
              freely, grow fully, and realise their full potential. A world where
              education is a guaranteed pathway to opportunity, dignity, and
              lifelong fulfilment.
            </motion.p>
          </motion.section>

          <SectionRule />

          <motion.section
            className="mb-2 text-justify"
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
              className="mb-4 md:mb-6 text-gray-800 text-sm md:text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              To give at-risk children a new start and a fair chance to thrive
              through integrated, holistic support, with education as a
              sustainable means of empowerment.
            </motion.p>
            <motion.p
              className="text-gray-800 text-sm md:text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              We are breaking cycles of poverty, restoring dignity, and building
              futures that extend beyond the individual child.
            </motion.p>
          </motion.section>

          <SectionRule />

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
              Children are not just the future, they are the foundation of it.
            </motion.p>
            <motion.p
              className="mb-4 md:mb-6 text-gray-800 text-sm md:text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Breaking cycles of poverty begins with children. Early intervention
              transforms lives and prevents long-term social and economic costs.
            </motion.p>
            <motion.p
              className="mb-4 md:mb-6 text-gray-800 text-sm md:text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              With the right support, children at risk today become
              tomorrow&apos;s contributors, leaders, and changemakers.
            </motion.p>
            <motion.p
              className="text-gray-800 text-sm md:text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Investing in children is investing in the future we all share.
            </motion.p>
          </motion.section>

          <SectionRule />

          <motion.section
            className="mb-4 text-justify"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.h2
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 text-[#FFB400] tracking-wide"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Our Work
            </motion.h2>

            <motion.h3
              className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-900"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Our Model — Beyond Education
            </motion.h3>
            <motion.p
              className="mb-8 md:mb-10 text-gray-800 text-sm md:text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Access to school is not enough for a child who is hungry,
              homeless, or traumatised. Our model integrates education,
              wellbeing, and skills to deliver sustainable transformation—not
              temporary relief.
            </motion.p>

            <SectionRule />

            <motion.h3
              className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-900"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Education — Restoring the Right to Learn
            </motion.h3>
            <motion.p
              className="mb-4 md:mb-6 text-gray-800 text-sm md:text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              We bring children out of vulnerable environments and back into
              school, removing barriers such as instability, displacement, and
              hidden costs. Through accelerated learning, digital education,
              scholarships, and literacy programmes, we ensure children are not
              only enrolled—but supported to succeed.
            </motion.p>
            <motion.blockquote
              className="border-l-4 border-[#FFB400] pl-4 md:pl-6 py-2 italic text-gray-800 text-sm md:text-base leading-relaxed mb-8 md:mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              &ldquo;No child should be excluded from education because of
              circumstances beyond their control.&rdquo;
            </motion.blockquote>

            <SectionRule />

            <motion.h3
              className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-900"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Wellbeing — Making Learning Possible
            </motion.h3>
            <motion.p
              className="mb-8 md:mb-10 text-gray-800 text-sm md:text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              We provide the stability children need to learn through rescue and
              rehabilitation, safe shelter, healthcare, nutrition, and ongoing
              support. Healing, safety, and care create the foundation for
              education to take root.
            </motion.p>

            <SectionRule />

            <motion.h3
              className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-900"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Skills &amp; Empowerment — Building the Future
            </motion.h3>
            <motion.p
              className="text-gray-800 text-sm md:text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              We equip children and families with the tools to build sustainable
              futures through digital skills, life skills, and economic
              empowerment. From STEAM education to family livelihood support, we
              ensure progress is not temporary—but lasting.
            </motion.p>
          </motion.section>

          <SectionRule />

          <motion.section
            className="pb-4 md:pb-8 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.h2
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-[#FFB400] tracking-wide"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Get Involved
            </motion.h2>
            <motion.p
              className="text-gray-800 text-base md:text-lg font-medium leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Give. Sponsor. Partner. Volunteer. Advocate.
            </motion.p>
          </motion.section>
        </div>
      </Container>
    </main>
  );
}
