"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useLoading } from "@/contexts/LoadingContext";

interface SimpleProgressBarProps {
  color?: string;
  height?: number;
  showLabel?: boolean;
  className?: string;
}

export default function SimpleProgressBar({
  color = "#FFB400",
  height = 3,
  showLabel = false,
  className = "",
}: SimpleProgressBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const { isLoading: actionLoading, loadingLabel } = useLoading();
  const pathname = usePathname();

  // Handle route changes
  useEffect(() => {
    setIsVisible(true);
    setProgress(30);
    
    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsVisible(false);
        setProgress(0);
      }, 200);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  // Handle action loading
  useEffect(() => {
    if (actionLoading) {
      setIsVisible(true);
      setProgress(30);
      
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) return prev;
          return prev + Math.random() * 10;
        });
      }, 200);
      
      return () => clearInterval(interval);
    } else if (!actionLoading && isVisible) {
      setProgress(100);
      setTimeout(() => {
        setIsVisible(false);
        setProgress(0);
      }, 200);
    }
  }, [actionLoading, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Progress Bar */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-gray-100 ${className}`}
        style={{ height: `${height}px` }}
      >
        <div
          className="h-full transition-all duration-300 ease-out"
          style={{
            width: `${progress}%`,
            backgroundColor: color,
            boxShadow: `0 2px 4px ${color}40`,
          }}
        />
      </div>

      {/* Loading Label */}
      {showLabel && actionLoading && loadingLabel && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-white shadow-md rounded-lg px-3 py-2 border">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 border-2 border-gray-300 border-t-amber-500 rounded-full animate-spin" />
              <span className="text-xs font-medium text-gray-700">
                {loadingLabel}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
