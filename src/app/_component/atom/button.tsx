import { ReactElement, ReactNode } from "react";

export interface ButtonInterface
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  children: ReactNode;
  icon?: ReactElement;
  btnFlex?: boolean; 
}

export const Button = ({
  children,
  type = "button",
  onClick,
  className = "",
  icon,
  btnFlex = false,
}: ButtonInterface) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex select-none items-center justify-center transition-all duration-200 ease-out will-change-transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB400] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${className} ${btnFlex ? "flex items-center space-x-4 justify-center" : ""}`}
      >
      <span>{children}</span>
      {icon && <span>{icon}</span>}
    </button>
  );
};
