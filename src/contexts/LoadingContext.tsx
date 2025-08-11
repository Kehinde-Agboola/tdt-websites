"use client";

import React, { createContext, useContext, useState, useCallback, useRef, ReactNode } from "react";

interface LoadingContextType {
  isLoading: boolean;
  loadingLabel: string;
  startLoading: (label?: string) => void;
  stopLoading: () => void;
  withLoading: <T>(
    asyncFn: () => Promise<T>,
    label?: string
  ) => Promise<T>;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

interface LoadingProviderProps {
  children: ReactNode;
}

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingLabel, setLoadingLabel] = useState("");
  const loadingCountRef = useRef(0);

  const startLoading = useCallback((label: string = "Loading...") => {
    loadingCountRef.current += 1;
    setIsLoading(true);
    setLoadingLabel(label);
  }, []);

  const stopLoading = useCallback(() => {
    loadingCountRef.current = Math.max(0, loadingCountRef.current - 1);
    if (loadingCountRef.current === 0) {
      setIsLoading(false);
      setLoadingLabel("");
    }
  }, []);

  const withLoading = useCallback(
    async <T,>(asyncFn: () => Promise<T>, label?: string): Promise<T> => {
      try {
        startLoading(label);
        const result = await asyncFn();
        return result;
      } finally {
        stopLoading();
      }
    },
    [startLoading, stopLoading]
  );

  const value = {
    isLoading,
    loadingLabel,
    startLoading,
    stopLoading,
    withLoading,
  };

  return (
    <LoadingContext.Provider value={value}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
}
