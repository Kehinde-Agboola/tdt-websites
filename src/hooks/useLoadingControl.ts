"use client";

import { useLoading } from "@/contexts/LoadingContext";
import { useState, useCallback } from "react";

/**
 * Enhanced hook for manual loading control with progressive features
 * Use this for API calls, form submissions, or any async operations
 */
export function useLoadingControl() {
  const { isLoading, startLoading, stopLoading } = useLoading();
  const [progress, setProgress] = useState(0);

  /**
   * Wrap an async function with loading state
   */
  const withLoading = async <T>(
    fn: () => Promise<T>,
    loadingText: string = "Processing..."
  ): Promise<T> => {
    try {
      startLoading(loadingText);
      const result = await fn();
      return result;
    } catch (error) {
      throw error;
    } finally {
      stopLoading();
    }
  };

  /**
   * Wrap an async function with progressive loading state
   */
  const withProgressiveLoading = useCallback(async <T>(
    fn: () => Promise<T>,
    options: {
      loadingText?: string;
      stages?: Array<{ message: string; delay: number }>;
    } = {}
  ): Promise<T> => {
    const { loadingText = "Processing...", stages = [] } = options;
    
    try {
      startLoading(loadingText);
      setProgress(10);
      
      // Execute stages if provided
      if (stages.length > 0) {
        for (let i = 0; i < stages.length; i++) {
          const stage = stages[i];
          startLoading(stage.message);
          setProgress(20 + (i / stages.length) * 60);
          await new Promise(resolve => setTimeout(resolve, stage.delay));
        }
      }
      
      setProgress(90);
      const result = await fn();
      setProgress(100);
      
      return result;
    } catch (error) {
      throw error;
    } finally {
      setTimeout(() => {
        stopLoading();
        setProgress(0);
      }, 200);
    }
  }, [startLoading, stopLoading]);

  /**
   * Simulate loading for a specific duration (useful for demos)
   */
  const simulateLoading = (
    duration: number = 2000,
    loadingText: string = "Loading..."
  ): Promise<void> => {
    return new Promise((resolve) => {
      startLoading(loadingText);
      setTimeout(() => {
        stopLoading();
        resolve();
      }, duration);
    });
  };

  /**
   * Start loading with progress updates
   */
  const startProgressiveLoading = useCallback((
    loadingText: string = "Loading...",
    estimatedDuration: number = 2000
  ) => {
    startLoading(loadingText);
    setProgress(0);
    
    // Simulate progressive loading
    const interval = setInterval(() => {
      setProgress(prev => {
        const increment = Math.random() * 10 + 5; // 5-15% increments
        const newProgress = Math.min(prev + increment, 85); // Stop at 85%
        
        if (newProgress >= 85) {
          clearInterval(interval);
        }
        
        return newProgress;
      });
    }, estimatedDuration / 10);
    
    return () => clearInterval(interval);
  }, [startLoading]);

  /**
   * Complete the loading process
   */
  const completeLoading = useCallback(() => {
    setProgress(100);
    setTimeout(() => {
      stopLoading();
      setProgress(0);
    }, 300);
  }, [stopLoading]);

  return {
    isLoading,
    progress,
    startLoading,
    stopLoading,
    withLoading,
    withProgressiveLoading,
    simulateLoading,
    startProgressiveLoading,
    completeLoading,
  };
}
