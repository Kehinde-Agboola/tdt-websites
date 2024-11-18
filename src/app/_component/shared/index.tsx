import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <main className="max-w-6xl mx-auto xl:px-0 md:px-4 px-4">{children}</main>
  );
};

export default Container;
