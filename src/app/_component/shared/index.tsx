import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <main className="max-w-6xl mx-auto w-full min-w-0 px-3 sm:px-4 md:px-4 xl:px-0">
      {children}
    </main>
  );
};

export default Container;
