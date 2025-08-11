"use client";

import { ReactNode, ButtonHTMLAttributes } from "react";
import { useRouter } from "next/navigation";
import { useLoading } from "@/contexts/LoadingContext";
import { Button } from "@/components/ui/button";

interface LoadingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  loadingText?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
}

export default function LoadingButton({
  children,
  href,
  loadingText,
  onClick,
  variant = "default",
  size = "default",
  className = "",
  disabled = false,
  ...props
}: LoadingButtonProps) {
  const router = useRouter();
  const { isLoading, startLoading, stopLoading } = useLoading();

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      // Start loading
      const label = loadingText || (href ? "Navigating..." : "Processing...");
      startLoading(label);

      // Handle custom onClick
      if (onClick) {
        await onClick(e);
      }

      // Handle navigation
      if (href && !e.defaultPrevented) {
        router.push(href);
        // Let the route change handle stopping the loading
        return;
      }

      // Stop loading after a delay for non-navigation actions
      setTimeout(() => {
        stopLoading();
      }, 500);
    } catch (error) {
      console.error("Button action failed:", error);
      stopLoading();
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={`transition-all duration-200 ${className} ${
        isLoading ? "opacity-80 cursor-wait" : ""
      }`}
      onClick={handleClick}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          {loadingText || "Loading..."}
        </div>
      ) : (
        children
      )}
    </Button>
  );
}
