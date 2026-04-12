import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}
const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        "mx-auto w-full min-w-0 max-w-6xl px-3 sm:px-4 md:px-4 xl:px-0",
        className
      )}
    >
      {children}
    </main>
  );
};

export default Container;
