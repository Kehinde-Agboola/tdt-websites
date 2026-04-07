/**
 * Server-safe helpers only (no "use client").
 * Import from Server Components for props like `AnimatedSection` `delay`.
 *
 * Do NOT import this file from any `"use client"` module — Next will treat the
 * whole module as client-only and `staggerDelay()` will fail on the server.
 * Easing tuples live inline in client components (e.g. AnimatedSection) instead.
 */

/** Stagger helper for stacked sections (e.g. home page) */
export function staggerDelay(index: number, step = 0.06) {
  return index * step;
}

/** @deprecated Use staggerDelay — kept for existing imports */
export const stagger = staggerDelay;
