'use client'
import React, { useState } from 'react';
import { FAQuestions } from '@/app/constant';
import { FiPlusCircle } from 'react-icons/fi';
import { TbCircleMinus } from 'react-icons/tb';
import { motion } from 'framer-motion';
import YellowLine from '../../../../../public/assets/edu/Lineyellow.png';
import Image from 'next/image';
import Container from '@/app/_component/shared';
import Hero from '../../../../../public/assets/faq/headhero.png';

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
    <main>
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <Image
          src={Hero}
          alt="Our Team"
          fill
          className="object-cover object-center bg-no-repeat"
        />

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white">
          <h1 className="text-4xl md:text-5xl w-[19rem] md:w-[26rem] leading-10">
            Frequently <span className="text-yellow">Asked Questions</span>
          </h1>
          <p className="mt-4 text-base md:text-lg max-w-2xl">
            These are the most commonly asked questions about The Destiny
            Trust. Can’t find what you are looking for?{' '}
            <span className="underline">Chat to our friendly team!</span>
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <Container>
        <main className="flex flex-col md:flex-row justify-between">
          {/* Left Section */}
          <section className="md:w-[28rem] w-[20rem] mx-auto mt-16 text-center md:text-left">
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
          <section className="md:w-[40rem] my-16">
            {FAQuestions?.map((d, i) => (
              <motion.div
                key={i}
                className="py-6 px-10 border-y border-[#E8E8E8]"
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
        </main>
      </Container>
    </main>
  );
};

export default page;
