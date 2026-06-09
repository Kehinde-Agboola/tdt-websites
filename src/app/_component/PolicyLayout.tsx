"use client";

import Container from "@/app/_component/shared";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ReactNode } from "react";

/** Single source of truth for the policy navigation (sidebar + mobile selector). */
export const POLICY_NAV: { label: string; href: string }[] = [
  { label: "Overview", href: "/policies" },
  { label: "AI Ethics Policy", href: "/ai-ethics-policy" },
  { label: "Child Safeguarding Policy", href: "/child-safeguarding-policy" },
  { label: "Conflict of Interest Policy", href: "/conflict-of-interest-policy" },
  { label: "Anti-Discrimination Policy", href: "/anti-discrimination-policy" },
  { label: "AML/CFT/CPF Policy", href: "/aml-cft-cpf-policy" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
];

const PolicyLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();
  const currentValue = POLICY_NAV.some((p) => p.href === pathname)
    ? pathname
    : POLICY_NAV[0].href;

  return (
    <Container>
      <div className="py-12 sm:py-16">
        <div className="lg:grid lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-12">
          {/* Sidebar */}
          <aside className="mb-10 lg:mb-0 lg:sticky lg:top-24 lg:self-start">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#9A6B00]">
              Policies
            </p>

            {/* Mobile / tablet: compact selector */}
            <div className="lg:hidden">
              <label htmlFor="policy-select" className="sr-only">
                Select a policy
              </label>
              <select
                id="policy-select"
                value={currentValue}
                onChange={(e) => router.push(e.target.value)}
                className="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-900 outline-none focus-visible:ring-2 focus-visible:ring-[#FFB400]"
              >
                {POLICY_NAV.map((p) => (
                  <option key={p.href} value={p.href}>
                    {p.label}
                  </option>
                ))}
              </select>
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
                            ? "border-[#FFB400] font-semibold text-gray-900"
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
