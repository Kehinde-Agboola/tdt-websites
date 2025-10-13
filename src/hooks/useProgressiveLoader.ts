"use client";

import { useLoading } from "@/contexts/LoadingContext";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface UseProgressiveLoaderOptions {
  enableRouteProgress?: boolean;
  customMessages?: {
    connecting?: string;
    loading?: string;
    finishing?: string;
  };
  /** How fast the synthetic progress should advance when no real metric is available (ms) */
  tickMs?: number;
}

type Stage = { message: string; at?: number; delay?: number };

export function useProgressiveLoader(
  options: UseProgressiveLoaderOptions = {}
) {
  const {
    enableRouteProgress = true,
    customMessages = {},
    tickMs = 120,
  } = options;

  const { isLoading, loadingLabel, startLoading, stopLoading: contextStopLoading, withLoading } =
    useLoading();

  const router = useRouter();
  const pathname = usePathname();

  const [routeLoading, setRouteLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  // ---------- internals ----------
  const timeoutsRef = useRef<number[]>([]);
  const rafRef = useRef<number | null>(null);
  const prevPathRef = useRef<string | null>(null);
  const runningRef = useRef(false);

  const msgs = useMemo(
    () => ({
      connecting: "Establishing connection...",
      loading: "Loading content...",
      finishing: "Almost ready...",
      ...customMessages,
    }),
    [customMessages]
  );

  const clearTimers = useCallback(() => {
    timeoutsRef.current.forEach((id) => clearTimeout(id));
    timeoutsRef.current = [];
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  const startProgress = useCallback(
    (kickoff = 8) => {
      if (runningRef.current) return;
      runningRef.current = true;
      setProgress((p) => (p === 0 ? kickoff : p));
      // synthetic “NProgress-like” easing to ~80%
      const step = () => {
        setProgress((curr) => {
          if (!runningRef.current) return curr;
          if (curr >= 80) return curr;
          const delta = Math.max(0.4, (80 - curr) * 0.12);
          const next = Math.min(80, curr + delta);
          return next;
        });
        rafRef.current = window.setTimeout(() => {
          rafRef.current = requestAnimationFrame(step);
        }, tickMs) as unknown as number;
      };
      rafRef.current = requestAnimationFrame(step);
    },
    [tickMs]
  );

  const finishProgress = useCallback(
    (graceMs = 250) => {
      setProgress(100);
      const id = window.setTimeout(() => {
        runningRef.current = false;
        setProgress(0);
        clearTimers();
      }, graceMs) as unknown as number;
      timeoutsRef.current.push(id);
    },
    [clearTimers]
  );

  // ---------- public: start with text  ----------
  const startProgressiveLoading = useCallback(
    (label?: string) => {
      startLoading(label || msgs.connecting);
      startProgress();
    },
    [msgs.connecting, startLoading, startProgress]
  );

  // ---------- public: load with synthetic progress ----------
  const loadWithProgress = useCallback(
    async <T>(
      asyncFn: () => Promise<T>,
      opts?: { label?: string; estimatedDuration?: number; stages?: Stage[] }
    ): Promise<T> => {
      const label = opts?.label ?? msgs.loading;
      const est = Math.max(500, opts?.estimatedDuration ?? 2000);
      const stages: Stage[] = opts?.stages ?? [
        { message: msgs.connecting, at: 5 },
        { message: "Loading data…", at: 25 },
        { message: "Processing…", at: 55 },
        { message: msgs.finishing, at: 85 },
      ];

      startLoading(label);
      startProgress();

      // schedule staged messages (either by time or by progress “at”)
      stages.forEach((s, i) => {
        if (typeof s.delay === "number") {
          const id = window.setTimeout(() => startLoading(s.message), s.delay);
          timeoutsRef.current.push(id as unknown as number);
        } else if (typeof s.at === "number") {
          // simple polling to update message near target progress
          const poll = () => {
            setProgress((curr) => {
              if (curr >= s.at!) startLoading(s.message);
              return curr;
            });
            const id = window.setTimeout(poll, est / stages.length / 3);
            timeoutsRef.current.push(id as unknown as number);
          };
          const id = window.setTimeout(poll, i * (est / stages.length));
          timeoutsRef.current.push(id as unknown as number);
        }
      });

      try {
        const res = await withLoading(asyncFn, label);
        finishProgress();
        return res;
      } catch (e) {
        finishProgress();
        throw e;
      }
    },
    [
      finishProgress,
      msgs.connecting,
      msgs.finishing,
      msgs.loading,
      startLoading,
      startProgress,
      withLoading,
    ]
  );

  // ---------- public: route navigate with loader ----------
  const navigateWithLoading = useCallback(
    (href: string, label?: string) => {
      if (!enableRouteProgress) return router.push(href);
      setRouteLoading(true);
      startProgressiveLoading(label || "Navigating…");
      prevPathRef.current = pathname;
      // kick the navigation
      router.push(href);
    },
    [enableRouteProgress, pathname, router, startProgressiveLoading]
  );

  // End route loading when pathname changes
  useEffect(() => {
    if (!enableRouteProgress) return;
    if (prevPathRef.current && prevPathRef.current !== pathname) {
      setRouteLoading(false);
      contextStopLoading();
      finishProgress();
      prevPathRef.current = null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, enableRouteProgress]);

  // Cleanup
  useEffect(() => {
    return () => {
      clearTimers();
    };
  }, [clearTimers]);

  return {
    // state
    isLoading: isLoading || routeLoading,
    loadingLabel,
    progress, // 0–100 (bind to a top bar width/transform)

    // actions
    startLoading: startProgressiveLoading,
    stopLoading: () => {
      contextStopLoading();
      finishProgress();
      setRouteLoading(false);
    },
    loadWithProgress,
    navigateWithLoading,
    withLoading,

    // utilities (just proxy the messages if you want to show them elsewhere)
    messages: msgs,
  };
}

/* ---------------- Global loading utilities ---------------- */
export const LoadingUtils = {
  simulateNetworkRequest: (duration = 2000) =>
    new Promise<void>((r) => setTimeout(r, duration)),

  createLoadingStages:
    (stages: Array<{ message: string; duration: number }>) =>
    async (callback: (message: string) => void) => {
      for (const s of stages) {
        callback(s.message);
        // eslint-disable-next-line no-await-in-loop
        await new Promise<void>((r) => setTimeout(r, s.duration));
      }
    },

  // Preload images and report % progress
  preloadImages: async (
    imageUrls: string[],
    onProgress?: (progress: number) => void
  ) => {
    let done = 0;
    const total = Math.max(1, imageUrls.length);

    await Promise.all(
      imageUrls.map(
        (url) =>
          new Promise<void>((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
              done += 1;
              onProgress?.(Math.round((done / total) * 100));
              resolve();
            };
            img.onerror = reject;
            img.src = url;
          })
      )
    );
  },
};

export default useProgressiveLoader;
