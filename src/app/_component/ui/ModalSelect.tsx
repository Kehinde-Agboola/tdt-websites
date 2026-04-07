"use client";

import type { SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import { modalSelectClassName } from "./modalFormClasses";

export type ModalSelectProps = SelectHTMLAttributes<HTMLSelectElement>;

/**
 * Styled native `<select>` for modal forms: consistent height, focus ring, custom chevron.
 */
export function ModalSelect({ className, children, ...props }: ModalSelectProps) {
  return (
    <div className="relative">
      <select {...props} className={clsx(modalSelectClassName, className)}>
        {children}
      </select>
      <ChevronDown
        className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
        aria-hidden
      />
    </div>
  );
}
