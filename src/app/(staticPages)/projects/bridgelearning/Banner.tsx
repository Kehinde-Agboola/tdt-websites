"use client";

import React, { useState } from "react";
import Image from "next/image";
import Research from "../../../../../public/assets/blc/workingwoman.png";
import LogoWatermark from "../../../../../public/assets/tdtlogo.png";
import ModalForm from "@/app/_component/atom/Modal";

const Banner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section
      className="relative mt-[5rem] w-full overflow-hidden bg-[#222222] md:min-h-[min(78vh,820px)]"
      aria-label="Research collaboration"
    >
      {/* Mobile: photo strip */}
      <div className="relative h-[min(42vw,280px)] w-full md:hidden">
        <Image
          src={Research}
          alt="Researcher working on a laptop"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      {/* Desktop: right photo with diagonal edge */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[min(52%,720px)] md:block"
        aria-hidden
      >
        <div
          className="h-full w-full"
          style={{
            clipPath: "polygon(22% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          <Image
            src={Research}
            alt=""
            fill
            className="object-cover object-center"
            priority
            sizes="(min-width: 768px) 52vw, 100vw"
          />
        </div>
      </div>

      {/* Faint logo watermark (dark panel) */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 hidden -translate-x-[18%] -translate-y-1/2 opacity-[0.07] md:block lg:left-[28%]"
        aria-hidden
      >
        <Image
          src={LogoWatermark}
          alt=""
          width={420}
          height={420}
          className="h-auto w-[min(55vw,420px)] max-w-none object-contain"
        />
      </div>

      {/* Copy + CTA */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-12 md:flex md:min-h-[min(78vh,820px)] md:max-w-none md:px-6 md:py-16 lg:px-8 xl:px-10">
        <div className="flex max-w-xl flex-col justify-center md:max-w-[min(36rem,48%)] lg:max-w-[min(40rem,50%)] xl:pl-[calc((100vw-72rem)/2)]">
          <h2 className="text-left text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[2.35rem] lg:leading-[1.15]">
            Collaborate On Research On{" "}
            <span className="text-[#E6A820]">Accelerated Education</span>
          </h2>
          <p className="mt-6 text-left text-sm leading-relaxed text-white/95 sm:text-base md:leading-[1.65]">
            We recognize the importance of collaboration, research and knowledge
            sharing to deliver our solutions at scale and reinforce best
            practices. By sharing our experiences, successes and challenges
            with other stakeholders, we learn from each other&apos;s
            experiences, innovate together and build synergies for
            evidence-based practices that reflect our mutual aspiration to
            achieve education equity for overage learners.
          </p>
          <button
            type="button"
            onClick={openModal}
            className="mt-8 w-fit border border-[#E6A820] bg-transparent px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-[#E6A820]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E6A820]"
          >
            Work With Us
          </button>
          <ModalForm isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
