"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/app/_component/shared";
import { motion } from "framer-motion";
import EduTechPoster from "../../../../public/assets/edu/edu2.jpg";
const LEVERAGING_VIDEO_SRC = "/leverage_technology.mp4";
/** Default leveraging video hosted on Google Cloud Storage. */
// const GOOGLE_CLOUD_LEVERAGING_VIDEO =
//   "https://storage.googleapis.com/destinytrust/videos.mp4";

// const normalizeGcsVideoUrl = (value?: string) => {
//   const source = value?.trim();
//   if (!source) return GOOGLE_CLOUD_LEVERAGING_VIDEO;

//   return source.replace(
//     "https://storage.cloud.google.com/destinytrust/",
//     "https://storage.googleapis.com/destinytrust/",
//   );
// };

/** Optional override: set `NEXT_PUBLIC_LEVERAGING_TECH_VIDEO_SRC` to another GCS URL. */
// const videoSrc = normalizeGcsVideoUrl(
//   process.env.NEXT_PUBLIC_LEVERAGING_TECH_VIDEO_SRC ||
//     GOOGLE_CLOUD_LEVERAGING_VIDEO,
// );

type VideoMode = "pending" | "on" | "off";

/**
 * Full-bleed video band (like the home hero): moving background, dark overlay,
 * centred “Leveraging Technology for Education” + play control.
 */
const LeveragingTechSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoMode, setVideoMode] = useState<VideoMode>("pending");
  const [videoFailed, setVideoFailed] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setVideoMode(mq.matches ? "off" : "on");
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const showVideo = videoMode === "on" && !videoFailed;
  const showPosterFallback =
    videoMode === "pending" || videoMode === "off" || videoFailed;

  const onVideoError = useCallback(() => setVideoFailed(true), []);

  const togglePlay = useCallback(() => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      void el.play();
      setIsPaused(false);
    } else {
      el.pause();
      setIsPaused(true);
    }
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const onPlay = () => setIsPaused(false);
    const onPause = () => setIsPaused(true);
    setIsPaused(el.paused);
    el.addEventListener("play", onPlay);
    el.addEventListener("pause", onPause);
    return () => {
      el.removeEventListener("play", onPlay);
      el.removeEventListener("pause", onPause);
    };
  }, [showVideo]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.3 },
    },
  };
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      aria-labelledby="leveraging-tech-heading"
      className="w-full bg-[#f7f7f5] pt-4 md:pt-6"
    >
      {/* Rounded top — video panel like destinytrust.org/new/home */}
      <div className="mx-auto max-w-[1600px] px-3 sm:px-4 md:px-6">
        <div className="relative min-h-[min(85vh,880px)] overflow-hidden bg-black">
          <div className="absolute inset-0">
            {showVideo && (
              <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full object-cover object-center"
                autoPlay={false}
                muted
                loop
                playsInline
                preload="metadata"
                // poster="/assets/edu/edu2.jpg"
                aria-hidden
                onError={onVideoError}
              >
                <source src={LEVERAGING_VIDEO_SRC} type="video/mp4" />
              </video>
            )}

            {showPosterFallback && (
              <div className="absolute inset-0">
                <Image
                  src={EduTechPoster}
                  alt=""
                  fill
                  className="object-cover object-center"
                  sizes="100vw"
                  priority
                  aria-hidden
                />
              </div>
            )}

            <div className="absolute inset-0 z-[1] bg-black/55" aria-hidden />

            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 pb-6 pt-20 text-center sm:px-8 md:pb-10 md:pt-24">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="flex max-w-4xl flex-col items-center"
              >
              

                <button
                  type="button"
                  onClick={togglePlay}
                  disabled={!showVideo}
                  aria-label={isPaused ? "Play video" : "Pause video"}
                  className="group mt-10 flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full border-[3px] border-white/35 bg-transparent transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFBC00] disabled:pointer-events-none disabled:opacity-40 sm:h-24 sm:w-24 md:mt-12 md:h-28 md:w-28"
                >
                  <span className="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full bg-white shadow-lg sm:h-16 sm:w-16 md:h-[4.25rem] md:w-[4.25rem]">
                    {isPaused ? (
                      <svg
                        viewBox="0 0 24 24"
                        className="ml-0.5 h-8 w-8 text-black md:h-10 md:w-10"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    ) : (
                      <svg
                        viewBox="0 0 24 24"
                        className="h-7 w-7 text-black md:h-9 md:w-9"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                      </svg>
                    )}
                  </span>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact quote + CTAs — below video (no overlap) */}
      <div className="bg-white pb-12 pt-8 md:pb-16 md:pt-10">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.div
              variants={childVariants}
              className="relative bg-white p-8 md:p-10 lg:p-12"
            >
              <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
                <div className="min-w-0 flex-1 text-left">
                  <blockquote
                    id="leveraging-impact-quote"
                    className="border-l-4 border-[#FFB400] pl-4 text-xl font-medium leading-snug text-[#1a1a1a] md:text-2xl md:leading-relaxed"
                  >
                    Imagine the Africa where distance or geography is not a
                    barrier to education. With technology, we are taking
                    education to hard-to-reach children just where they are.
                  </blockquote>
                </div>

                <div className="flex w-full shrink-0 flex-col gap-4 sm:flex-row sm:justify-end lg:w-auto lg:gap-4">
                  <Link
                    href="/get-involve"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-landing btn-landing--primary"
                  >
                    Take Action With Us
                  </Link>
                  <Link
                    href="https://www.ourschool.africa/"
                    className="btn-landing btn-landing--outline"
                  >
                    Explore OurSchoolAfrica
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
};

export default LeveragingTechSection;
