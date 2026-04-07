'use client'
import React, { useState } from 'react';
import { FAQuestions } from '@/app/constant';
import { FiPlusCircle } from 'react-icons/fi';
import { TbCircleMinus } from 'react-icons/tb';
import { motion } from 'framer-motion';
import YellowLine from '../../../../../public/assets/edu/Lineyellow.png';
import Image from 'next/image';
import Container from '@/app/_component/shared';
import PageHero from '@/app/_component/PageHero';
import Hero from '../../../../../public/assets/faq/headhero.png';
import { AnimatedSection } from '@/components/AnimatedSection';

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selected, setSelected] = useState<null | number>(null);

  const toggle = (i: number) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <main className="min-w-0">
      <AnimatedSection animateOnMount>
        <PageHero
          image={Hero}
          alt="Frequently asked questions"
          layout="center"
          imageClassName="object-cover object-center"
          priority
        >
          <h1 className="font-heading max-w-full text-3xl leading-tight sm:text-4xl md:max-w-2xl md:text-5xl">
            Frequently <span className="text-yellow">Asked Questions</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg">
            These are the most commonly asked questions about The Destiny Trust.
            Can’t find what you are looking for?{' '}
            <span className="underline">Chat to our friendly team!</span>
          </p>
        </PageHero>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection>
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-12">
          {/* Left Section */}
          <section className="mx-auto mt-12 w-full max-w-md text-center md:mx-0 md:mt-16 md:w-[min(100%,28rem)] md:flex-shrink-0 md:text-left">
            <Image
              src={YellowLine}
              className="block mx-auto md:mx-0"
              alt="straight white and yellow line"
            />
            <h1 className="text-[#FFB400] md:text-[40px] text-[32px] py-4 md:py-0">
              General Questions
            </h1>
            <p>
              These are the most commonly asked questions about The Destiny
              Trust. Can’t find what you are looking for?{' '}
              <span className="underline">Chat to our friendly team!</span>
            </p>
          </section>

          {/* Right Section */}
          <section className="my-8 w-full min-w-0 flex-1 md:my-16">
            {FAQuestions?.map((d, i) => (
              <motion.div
                key={i}
                className="py-6 px-2 border-y border-[#E8E8E8]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <div className="flex gap-4 justify-between items-center">
                  <div className="font-medium text-sm lg:text-base">
                    <div
                      className={`${
                        selected === i ? 'text-purple' : 'text-body'
                      }`}
                    >
                      {d.heading}{' '}
                    </div>
                  </div>

                  {selected === i ? (
                    <TbCircleMinus
                      className="text-xl rounded-full text-white bg-yellow cursor-pointer"
                      onClick={() => toggle(i)}
                    />
                  ) : (
                    <FiPlusCircle
                      className="cursor-pointer text-xl"
                      onClick={() => toggle(i)}
                    />
                  )}
                </div>

                {selected === i && (
                  <motion.div
                    className="text-body pt-8 text-sm lg:pr-32 lg:leading-7 text-justify"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {d.description}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </section>
        </div>
      </Container>
      </AnimatedSection>
    </main>
  );
};

export default page;
