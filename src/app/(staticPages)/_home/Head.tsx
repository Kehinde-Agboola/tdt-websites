"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
const HERO_VIDEO_SRC = "/hero-section.mp4";

// Google Storage source temporarily disabled.
// const DEFAULT_HERO_VIDEO = "https://storage.googleapis.com/destinytrust/video.mp4";
//
// const normalizeGcsVideoUrl = (value?: string) => {
//   const source = value?.trim();
//   if (!source) return DEFAULT_HERO_VIDEO;
//
//   return source.replace(
//     "https://storage.cloud.google.com/destinytrust/",
//     "https://storage.googleapis.com/destinytrust/",
//   );
// };
//
// const HERO_VIDEO_SRC = normalizeGcsVideoUrl(
//   process.env.NEXT_PUBLIC_HERO_VIDEO_SRC,
// );

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: "easeOut" },
  }),
};

const zoomVariant = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.1, 1],
    transition: { duration: 10, ease: "easeInOut", repeat: Infinity },
  },
};

type VideoMode = "pending" | "on" | "off";

const Head = () => {
  const [videoMode, setVideoMode] = useState<VideoMode>("pending");
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setVideoMode(mq.matches ? "off" : "on");
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const onVideoError = useCallback(() => setVideoFailed(true), []);

  const showVideo = videoMode === "on" && !videoFailed;
  const showImageFallback =
    videoMode === "pending" || videoMode === "off" || videoFailed;

  return (
    <section aria-label="Homepage hero">
      <div className="relative min-h-[100dvh] w-full overflow-hidden bg-black animate-fadeIn mix-blend-mode: overlay;">
        {showVideo && (
          <div className="absolute inset-0">
            <video
              className="absolute inset-0 h-full w-full object-cover object-center"
              autoPlay
              muted
              defaultMuted
              loop
              playsInline
              preload="auto"
              // poster="/assets/care/carem.png"
              aria-hidden
              onError={onVideoError}
            >
              <source src={HERO_VIDEO_SRC} type="video/mp4" />
            </video>
          </div>
        )}

        {showImageFallback && (
          <>
            <motion.div
              className="absolute inset-0 hidden md:block"
              variants={zoomVariant}
              initial="initial"
              animate="animate"
            >
              <Image
                src="/assets/care/carem.png"
                alt="Children in a learning environment"
                fill
                priority
                className="object-cover object-center"
              />
            </motion.div>

            <motion.div
              className="absolute inset-0 block md:hidden"
              variants={zoomVariant}
              initial="initial"
              animate="animate"
            >
              <Image
                src="/assets/mobilebg.png"
                alt="Children in a learning environment"
                fill
                priority
                className="object-cover object-center"
              />
            </motion.div>
          </>
        )}

        <div className="absolute inset-0 z-[1] bg-black/45" aria-hidden />

        <div className="absolute inset-0 bottom-[40px] z-10 flex flex-col items-center justify-end px-6 pb-8 text-center md:bottom-0 md:items-start md:justify-center md:pb-0 md:pl-[4rem] md:text-left">
          <section
            className="font-heading flex max-w-3xl flex-col items-center text-white md:items-start"
            aria-label="Hero"
          >
            <motion.p
              // className="text-lg tracking-wide text-white/90 md:text-xl"
              className="mt-2 text-4xl font-semibold leading-tight text-[#FFBC00] md:text-6xl lg:text-5xl"
              variants={fadeUpVariant}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              Education.{" "}
              <span className="tracking-wide text-white/90">
                Wellbeing. Skills.
              </span>
            </motion.p>

            <motion.h1
                className="mt-2 text-4xl font-semibold leading-tight text-[#FFBC00] md:text-6xl lg:text-5xl"
                // className="text-lg tracking-wide text-white/90 md:text-xl"
                variants={fadeUpVariant}
                custom={0.15}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                For Every Child.
              </motion.h1>

            <motion.p
              className="mx-auto mt-4 max-w-md font-sans text-sm leading-relaxed text-white/95 md:mx-0 md:text-lg"
              variants={fadeUpVariant}
              custom={0.35}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              Empowering children to reach their full potential, shaping a
              better future through education.
            </motion.p>

            <motion.div
              className="mt-8 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center sm:gap-6"
              variants={fadeUpVariant}
              custom={0.55}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <a
                href="https://paystack.shop/pay/1000Hands"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-landing border border-[#FFBC00] text-center text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#FFBC00] hover:text-black active:translate-y-0 active:scale-[0.97]"
              >
                Donate
              </a>
              <Link
                href="/get-involve"
                className="btn-landing bg-[#FFBC00] text-center text-black transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#e0a800] active:translate-y-0 active:scale-[0.97]"
              >
                Get Involved
              </Link>
            </motion.div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Head;
