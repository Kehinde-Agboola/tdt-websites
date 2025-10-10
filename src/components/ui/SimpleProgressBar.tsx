"use client";

import { useEffect, useState } from "react";
import { useLoading } from "@/contexts/LoadingContext";
import { motion, AnimatePresence } from "framer-motion";

interface SimpleProgressBarProps {
  color?: string;
  height?: number;
  className?: string;
}

export default function SimpleProgressBar({
  color = "#FFB400",
  height = 4,
  className = "",
}: SimpleProgressBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const { isLoading: actionLoading } = useLoading();
  // Removed pathname dependency to prevent double loading

  // Handle manual loading only (no automatic route loading)
  useEffect(() => {
    if (actionLoading) {
      setIsVisible(true);
      setProgress(0);
      
      // Realistic loading simulation
      const progressSteps = [
        { progress: 15, delay: 100 },
        { progress: 35, delay: 200 },
        { progress: 55, delay: 300 },
        { progress: 75, delay: 250 },
        { progress: 90, delay: 200 },
        { progress: 100, delay: 150 },
      ];
      
      const timeouts: NodeJS.Timeout[] = [];
      let totalDelay = 0;
      
      progressSteps.forEach(({ progress: targetProgress, delay }) => {
        totalDelay += delay;
        const timeout = setTimeout(() => {
          setProgress(targetProgress);
          
          if (targetProgress === 100) {
            const hideTimeout = setTimeout(() => {
              setIsVisible(false);
              setProgress(0);
            }, 400);
            timeouts.push(hideTimeout);
          }
        }, totalDelay);
        timeouts.push(timeout);
      });
      
      // Safety timeout - force stop after 3 seconds if still loading
      const safetyTimeout = setTimeout(() => {
        setProgress(100);
        setTimeout(() => {
          setIsVisible(false);
          setProgress(0);
        }, 300);
      }, 3000);
      timeouts.push(safetyTimeout);
      
      return () => {
        timeouts.forEach(clearTimeout);
      };
    } else if (!actionLoading && isVisible) {
      // Immediate finish if loading stops
      setProgress(100);
      const hideTimeout = setTimeout(() => {
        setIsVisible(false);
        setProgress(0);
      }, 300);
      
      return () => clearTimeout(hideTimeout);
    }
  }, [actionLoading, isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Enhanced Progress Bar */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            exit={{ opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.2 }}
            className={`fixed top-0 left-0 right-0 z-[9999] ${className}`}
            style={{ height: `${height}px` }}
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-50" />
            
            {/* Progress Fill */}
            <motion.div
              className="h-full relative overflow-hidden"
              style={{
                width: `${progress}%`,
                background: `linear-gradient(90deg, ${color}, ${color}dd, ${color})`,
                boxShadow: `0 0 10px ${color}60, 0 2px 4px ${color}40`,
              }}
              transition={{ width: { duration: 0.3, ease: "easeOut" } }}
            >
              {/* Animated shimmer effect */}
              <motion.div
                className="absolute inset-0 opacity-30"
                style={{
                  background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)`,
                }}
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
            
            {/* Loading dots indicator */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <div className="flex space-x-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-1 h-1 rounded-full"
                    style={{ backgroundColor: color }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Loading label modal removed to prevent showing page names */}
        </>
      )}
    </AnimatePresence>
  );
}
