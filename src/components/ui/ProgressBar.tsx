"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { useLoading } from "@/contexts/LoadingContext";

interface ProgressBarProps {
  color?: string;
  height?: number;
  showLabel?: boolean;
  className?: string;
}

export default function ProgressBar({
  color = "#FFB400",
  height = 3,
  showLabel = false,
  className = "",
}: ProgressBarProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { isLoading: actionLoading, loadingLabel } = useLoading();
  const pathname = usePathname();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const routeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const prevPathnameRef = useRef(pathname);

  // Handle mounting safely
  useEffect(() => {
    setIsMounted(true);
    return () => {
      // Cleanup on unmount
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (routeTimeoutRef.current) clearTimeout(routeTimeoutRef.current);
    };
  }, []);

  // Handle route changes
  useEffect(() => {
    if (!isMounted) return;
    
    // Only trigger if pathname actually changed
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      
      // Clear any existing timeouts
      if (routeTimeoutRef.current) clearTimeout(routeTimeoutRef.current);
      
      setIsVisible(true);
      setProgress(0);
      
      // Simulate route loading
      routeTimeoutRef.current = setTimeout(() => {
        setIsVisible(false);
        setProgress(0);
      }, 1000 + Math.random() * 500);
    }
  }, [pathname, isMounted]);

  // Handle progress animation
  useEffect(() => {
    if (!isMounted) return;
    
    const shouldShow = isVisible || actionLoading;
    
    // Clear existing intervals/timeouts
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (shouldShow) {
      setProgress(10); // Start with some progress
      
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
              intervalRef.current = null;
            }
            return prev;
          }
          
          // Dynamic speed based on current progress
          const speed = prev < 30 ? 8 : prev < 60 ? 5 : 2;
          const increment = Math.random() * speed + 1;
          return Math.min(prev + increment, 90);
        });
      }, 100);
    } else {
      // Complete the progress
      setProgress(100);
      timeoutRef.current = setTimeout(() => {
        setProgress(0);
      }, 300);
    }
  }, [isVisible, actionLoading, isMounted]);

  // Don't render anything during SSR or before mounting
  if (!isMounted) return null;
  if (!isVisible && !actionLoading && progress === 0) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999]">
      {/* Progress Bar */}
      <div
        className={`bg-gray-200 ${className}`}
        style={{ height: `${height}px` }}
      >
        <div
          className="h-full transition-all duration-200 ease-out relative overflow-hidden"
          style={{
            width: `${progress}%`,
            backgroundColor: color,
            boxShadow: `0 0 10px ${color}60, 0 0 5px ${color}80`,
          }}
        >
          {/* Shimmer effect using CSS animation */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 animate-shimmer"
          />
        </div>
      </div>

      {/* Loading Label */}
      {showLabel && (isVisible || actionLoading) && loadingLabel && (
        <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-[9998]">
          <div className="bg-white shadow-lg rounded-full px-4 py-2 border border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-gray-300 border-t-amber-500 rounded-full animate-spin" />
              <span className="text-sm font-medium text-gray-700">
                {loadingLabel}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
