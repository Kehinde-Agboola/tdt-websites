"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Container from "../../_component/shared";

type CountUpProps = {
  end: number;
  duration: number;
  startCount: boolean;
};

const CountUp: React.FC<CountUpProps> = ({ end, duration, startCount }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCount) {
      setCount(0); // Reset count when not visible
      return;
    }

    let start = 0;
    const frameRate = 1000 / 30; // Slower frame rate for slower counting
    const totalFrames = (duration * 1000) / frameRate;
    const increment = end / totalFrames;

    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, frameRate);

    return () => clearInterval(interval);
  }, [end, duration, startCount]);

  return <>{count.toLocaleString()}</>;
};

const Numbers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Start animation when visible
        } else {
          setIsVisible(false); // Reset when not visible for repeat effect
        }
      },
      {
        root: null,
        threshold: 0.2, // Increased threshold for better control
      }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const gridData = [
    {
      title: 9500,
      paragraph:
        "9.5k+ children enrolled in school for the first time or supported to go back to school.",
    },
    {
      title: 1_160_000,
      paragraph:
        "1.16M+ meals served in our shelters, resettlement homes, school feeding and community-based feeding programmes.",
    },
    {
      title: 3_700,
      paragraph:
        "3.7K+ children in underserved public schools taught literacy by our teachers.",
    },
    {
      title: 167,
      paragraph:
        "167+ children under scholarship or admitted into our tuition-free school.",
    },
    {
      title: 2151,
      paragraph:
        "2151+ students trained on coding, design, and digital skills under our STEAM projects.",
    },
    {
      title: 165,
      paragraph: "165+ children provided shelter and alternative care.",
    },
  ];

  return (
    <section ref={sectionRef} className="bg-[#F4F4F4] pt-[3rem] pb-[3rem]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center md:text-left pb-10 md:pb-14"
        >
          <h2 className="text-[#FFB400] text-2xl md:text-4xl font-semibold mb-6">
            Our Impact
          </h2>
          <p className="text-[#333333] text-base md:text-lg leading-relaxed mb-4">
            What began as a single act of conviction has grown into a sustained
            movement of transformation.
          </p>
          <p className="text-[#333333] text-base md:text-lg leading-relaxed mb-4">
            Over 30,000 children have been reached. Thousands have been
            reintegrated into education. Lives have been restored from the
            streets, slums, and displacement.
          </p>
          <p className="text-[#333333] text-base md:text-lg leading-relaxed font-medium">
            But beyond the numbers is something deeper: children once written
            off are now learning, leading, and building futures.
          </p>
        </motion.div>
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10 justify-center">
          {gridData?.map((grid, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.1000,
                delay: index * 0.6000,
                ease: "easeOut",
              }}
            >
              <p className="text-[#FFB400] text-[70px] font-[500]">
                <CountUp
                  end={grid?.title}
                  duration={8} // Slower duration (8 seconds instead of 5)
                  startCount={isVisible} // Restart count-up when visible
                />
              </p>
              <p>{grid?.paragraph}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Numbers;