"use client";

import { useLoading } from "@/contexts/LoadingContext";

/**
 * Hook for manual loading control
 * Use this for API calls, form submissions, or any async operations
 */
export function useLoadingControl() {
  const { isLoading, startLoading, stopLoading } = useLoading();

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

  return {
    isLoading,
    startLoading,
    stopLoading,
    withLoading,
    simulateLoading,
  };
}
