'use client'
import React, { useState } from 'react'
import Container from '@/app/_component/shared'
import Research from "../../../../../public/assets/blc/workingwoman.png"
import Background from "../../../../../public/assets/blc/researchbg.png"
import Image from 'next/image'
import ModalForm from '@/app/_component/atom/Modal'
const Banner = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  return (
    <main className="relative text-white mt-[5rem]">
      <Image
        src={Background}
        alt="background"
        className="h-[110vh] md:h-[77.5vh]"
      />
      <Container>
        <section className=" absolute top-0 flex flex-col-reverse md:flex-row items-center">
          {/* Left Section with Text */}
          <div className="w-full pt-[2rem] md:pt-0 px-2 md:px-0">
            <h2 className="text-[25px] md:text-4xl font-bold">
              Collaborate On Research On
              <span className="text-yellow"> Accelerated Education</span>
            </h2>
            <p className="mt-6 text-gray-300 leading-relaxed w-full  md:w-[37rem]">
              We recognize the importance of collaboration, research, and
              knowledge sharing to deliver our solutions at scale and reinforce
              best practices. By sharing our experiences, successes, and
              challenges with other stakeholders, we learn from each
              other&apos;s experiences, innovate together, and build synergies
              for evidence-based practices that reflect our mutual aspiration to
              achieve education equity for overage learners.
            </p>
            <button
              onClick={openModal}
              className="mt-8 border border-yellow text-white px-6 py-3  hover:bg-yellow transition"
            >
              Work With Us
            </button>
            <ModalForm isOpen={isModalOpen} onClose={closeModal} />
          </div>

          {/* Right Section with Image */}
          <div className="w-full relative">
            <Image
              src={Research}
              alt="Collaborate on Research"
              className="object-cover w-full h-full"
            />
          </div>
        </section>
      </Container>
    </main>
  );
}

export default Banner