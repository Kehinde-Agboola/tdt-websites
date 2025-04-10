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
    if (!startCount) return;

    let start = 0;
    const frameRate = 1000 / 60; 
    const increment = Math.ceil(
      (end - start) / (duration * (1000 / frameRate))
    );

    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(start);
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
          setIsVisible(true); 
        } else {
          setIsVisible(false); 
        }
      },
      {
        root: null,
        threshold: 0.1, 
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
      title: 1700,
      paragraph:
        "1.7K+ children enrolled in school for the first time or supported to go back to school.",
    },
    {
      title: 1050000,
      paragraph:
        "1.05M+ meals served in our shelters, resettlement homes, school feeding and community-based feeding programmes.",
    },
    {
      title: 1200,
      paragraph:
        "1.2K+ children in underserved public schools taught literacy by our teachers.",
    },
    {
      title: 152,
      paragraph:
        "152+ children under scholarship or admitted into our tuition-free school.",
    },
    {
      title: 1069,
      paragraph:
        "1069+ students trained on coding, design, and digital skills under our STEAM projects.",
    },
    {
      title: 165,
      paragraph: "165+ children provided shelter and alternative care.",
    },
  ];

  return (
    <section ref={sectionRef} className="bg-[#F4F4F4] pt-[5rem] pb-[3rem]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-[#333333] md:text-[40px] text-[24px] text-center pb-[2rem]">
            Over 20,000 children have relied on us for education, well-being and
            empowerment since 2012
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
                duration: 0.10,
                delay: index * 0.60,
                ease: "easeOut",
              }}
            >
              <p className="text-[#FFB400] text-[70px] font-[500]">
                <CountUp
                  end={grid?.title}
                  duration={2}
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