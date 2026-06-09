"use client";

import Container from "@/app/_component/shared";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";

/** Single source of truth for the policy navigation (sidebar + mobile dropdown). */
export const POLICY_NAV: { label: string; href: string }[] = [
  { label: "Overview", href: "/policies" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Conflict of Interest Policy", href: "/conflict-of-interest-policy" },
  { label: "Child Safeguarding Policy", href: "/child-safeguarding-policy" },
  { label: "Child Protection Policy", href: "/child-protection-policy" },
  { label: "AI Ethics Policy", href: "/ai-ethics-policy" },
  { label: "Anti-Discrimination Policy", href: "/anti-discrimination-policy" },
  { label: "AML/CFT/CPF Policy", href: "/aml-cft-cpf-policy" },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      className={`h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path
        d="M6 8l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className="h-4 w-4 shrink-0">
      <path
        d="M5 10.5l3 3 7-7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Custom accessible dropdown used on mobile / tablet. */
function PolicyDropdown({ current }: { current: { label: string; href: string } }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  // Close after navigating to a new policy.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 rounded-xl border border-gray-300 bg-white px-4 py-3 text-left text-sm font-semibold text-gray-900 shadow-sm outline-none transition-colors hover:border-gray-400 focus-visible:ring-2 focus-visible:ring-yellow"
      >
        <span className="truncate">{current.label}</span>
        <ChevronIcon open={open} />
      </button>

      {/* Popover */}
      <div
        className={`absolute left-0 right-0 z-30 mt-2 origin-top overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg transition-all duration-150 ${
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-1 scale-[0.98] opacity-0"
        }`}
        role="listbox"
      >
        <ul className="max-h-[60vh] overflow-y-auto py-1">
          {POLICY_NAV.map((p) => {
            const active = pathname === p.href;
            return (
              <li key={p.href}>
                <Link
                  href={p.href}
                  role="option"
                  aria-selected={active}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between gap-3 px-4 py-3 text-sm transition-colors ${
                    active
                      ? "bg-[#FFF8E5] font-semibold text-gray-900"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <span>{p.label}</span>
                  {active && (
                    <span className="text-yellow">
                      <CheckIcon />
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

const PolicyLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const current =
    POLICY_NAV.find((p) => p.href === pathname) ?? POLICY_NAV[0];

  return (
    <Container>
      <div className="py-12 sm:py-16">
        <div className="lg:grid lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-12">
          {/* Sidebar */}
          <aside className="mb-10 lg:mb-0 lg:sticky lg:top-24 lg:self-start">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-yellow">
              Policies
            </p>

            {/* Mobile / tablet: custom dropdown */}
            <div className="lg:hidden">
              <PolicyDropdown current={current} />
            </div>

            {/* Desktop: vertical toggle list */}
            <nav aria-label="Policies" className="hidden lg:block">
              <ul className="space-y-1 border-l border-gray-200">
                {POLICY_NAV.map((p) => {
                  const active = pathname === p.href;
                  return (
                    <li key={p.href}>
                      <Link
                        href={p.href}
                        aria-current={active ? "page" : undefined}
                        className={`-ml-px block border-l-2 py-2 pl-4 text-sm leading-snug transition-colors ${
                          active
                            ? "border-yellow font-semibold text-gray-900"
                            : "border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-900"
                        }`}
                      >
                        {p.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>

          {/* Active policy content */}
          <div className="min-w-0">{children}</div>
        </div>
      </div>
    </Container>
  );
};

export default PolicyLayout;
