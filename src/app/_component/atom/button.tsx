import { ReactElement } from "react";

export interface ButtonInterface
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  children: ReactElement | string;
  icon?: ReactElement;
  btnFlex?: boolean; // For optional styling if you want to use Flexbox
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
      className={`${className} ${btnFlex ? "flex items-center space-x-4 justify-center" : ""}`}
      >
      <span>{children}</span>
      {icon && <span>{icon}</span>}
    </button>
  );
};
