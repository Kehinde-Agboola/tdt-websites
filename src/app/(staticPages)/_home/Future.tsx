"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Container from "../../_component/shared";

const Future = () => {
  const videoId = "OvQCekfyP6c"; // Replace with your YouTube video ID
  const videoRef = useRef<HTMLIFrameElement>(null); // Ref for the iframe
  const [isVisible, setIsVisible] = useState(false); // Track visibility

  // Intersection Observer to detect when the component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Component is in view
        } else {
          setIsVisible(false); // Component is out of view
        }
      },
      {
        root: null, // Use the viewport as the root
        threshold: 0.5, // Trigger when 50% of the component is visible
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current); // Observe the iframe
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current); // Cleanup observer
      }
    };
  }, []);

  return (
    <motion.section
      className="bg-[#F9F9F9] my-[5rem] py-[5rem]"
      transition={{ duration: 0.5 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Container>
        {/* Animated Text Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="pb-10 w-full md:w-[90%] ml-auto text-right text-[25px] md:text-[34px] xl:text-[64px] font-400">
            A future where more children prosper because we care.
          </p>
        </motion.div>

        {/* YouTube Video Embed */}
        <motion.div
          className="mt-10"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="w-full" ref={videoRef}>
            <iframe
              className="w-full h-[580px]"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=${
                isVisible ? 1 : 0
              }&mute=1&loop=1&playlist=${videoId}&rel=0`}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </Container>
    </motion.section>
  );
};

export default Future;
