/**
 * Shared field styles for forms shown inside `Modal`.
 * Use with `ModalSelect` for dropdowns so spacing matches the chevron overlay.
 */

export const modalLabelClassName = "block text-sm font-medium text-gray-700 mb-1.5";

/** Native select — use via `ModalSelect` only (includes `pr-10` for chevron). */
export const modalSelectClassName =
  "w-full min-h-[44px] cursor-pointer appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2.5 pr-10 text-left text-sm text-gray-900 shadow-sm transition-colors " +
  "hover:border-gray-400 " +
  "focus:outline-none focus:ring-2 focus:ring-[#FFB400] focus:border-[#FFB400] " +
  "disabled:cursor-not-allowed disabled:bg-gray-50 disabled:opacity-70";
