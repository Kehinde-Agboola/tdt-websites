"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingOverlayProps {
  isVisible: boolean;
  message?: string;
  progress?: number;
  variant?: 'minimal' | 'detailed' | 'fullscreen';
  color?: string;
  className?: string;
}

export default function LoadingOverlay({
  isVisible,
  message = "Loading...",
  progress,
  variant = 'minimal',
  color = "#FFB400",
  className = "",
}: LoadingOverlayProps) {
  const [dots, setDots] = useState("");

  // Animate loading dots
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setDots(prev => (prev.length >= 3 ? "" : prev + "."));
    }, 500);

    return () => clearInterval(interval);
  }, [isVisible]);

  if (variant === 'fullscreen') {
    return (
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 backdrop-blur-sm"
          >
            <div className="text-center">
              {/* Large loading spinner */}
              <div className="relative mb-6">
                <div className="w-16 h-16 border-4 border-gray-200 rounded-full"></div>
                <motion.div
                  className="absolute inset-0 w-16 h-16 border-4 border-transparent rounded-full"
                  style={{ borderTopColor: color }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
              
              {/* Loading message */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {message}{dots}
              </h3>
              
              {/* Progress bar if provided */}
              {progress !== undefined && (
                <div className="w-64 mx-auto">
                  <div className="bg-gray-200 rounded-full h-2 mb-2">
                    <motion.div
                      className="h-2 rounded-full"
                      style={{ backgroundColor: color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <p className="text-sm text-gray-600">{Math.round(progress)}% complete</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  if (variant === 'detailed') {
    return (
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-40 ${className}`}
          >
            <div className="bg-white/95 backdrop-blur-sm shadow-xl rounded-xl px-6 py-4 border border-gray-200 min-w-[280px]">
              <div className="flex items-center gap-4">
                {/* Animated spinner */}
                <div className="relative flex-shrink-0">
                  <div className="w-8 h-8 border-2 border-gray-200 rounded-full"></div>
                  <motion.div
                    className="absolute inset-0 w-8 h-8 border-2 border-transparent rounded-full"
                    style={{ borderTopColor: color, borderRightColor: color }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>
                
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">
                    {message}{dots}
                  </p>
                  
                  {progress !== undefined && (
                    <>
                      <div className="bg-gray-200 rounded-full h-1.5 mt-2 mb-1">
                        <motion.div
                          className="h-1.5 rounded-full"
                          style={{ backgroundColor: color }}
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                      <p className="text-xs text-gray-500">
                        {Math.round(progress)}% complete
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  // Minimal variant
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={`fixed top-16 left-1/2 transform -translate-x-1/2 z-40 ${className}`}
        >
          <div className="bg-white/90 backdrop-blur-sm shadow-lg rounded-lg px-4 py-2 border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
                <motion.div
                  className="absolute inset-0 w-4 h-4 border-2 border-transparent rounded-full"
                  style={{ borderTopColor: color }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
              <span className="text-sm font-medium text-gray-700">
                {message}{dots}
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Loading Button Component
interface LoadingButtonProps {
  isLoading: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  loadingText?: string;
  disabled?: boolean;
}

export function LoadingButton({
  isLoading,
  onClick,
  children,
  className = "",
  loadingText = "Loading...",
  disabled = false,
}: LoadingButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={isLoading || disabled}
      className={`relative inline-flex items-center justify-center transition-all duration-200 ${
        isLoading || disabled ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'
      } ${className}`}
    >
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2"
          >
            <motion.div
              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            {loadingText}
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}