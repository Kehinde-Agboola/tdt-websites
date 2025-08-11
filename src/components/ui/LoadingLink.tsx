"use client";

import { ReactNode, AnchorHTMLAttributes } from "react";
import Link from "next/link";
import { useLoading } from "@/contexts/LoadingContext";

interface LoadingLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  children: ReactNode;
  href: string;
  loadingText?: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function LoadingLink({
  children,
  href,
  loadingText = "Loading...",
  className = "",
  onClick,
  ...props
}: LoadingLinkProps) {
  const { startLoading } = useLoading();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Call custom onClick if provided
    if (onClick) {
      onClick(e);
    }

    // Don't start loading if the click was prevented
    if (!e.defaultPrevented) {
      startLoading(loadingText);
    }
  };

  return (
    <Link
      href={href}
      className={`transition-all duration-200 hover:opacity-80 ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
}
