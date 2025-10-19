import type { ReactElement } from "react";

type Variants = "primary" | "secondary";

export interface ButtonProps {
  variant: Variants;
  size?: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onclick?: () => void;
}

const variantClasses = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-200 text-purple-400",
};

const sizeStyles = {
  sm: "py-1 px-2",
  md: "py-2 px-4",
  lg: "py-4 px-6",
};

const defaultStyles = "px-4 py-2 rounded-md font-light flex items-center";

export const Button = ({ variant, text, startIcon }: ButtonProps) => {
  return (
    <button className={`${variantClasses[variant]} ${defaultStyles}`}>
      <div className="pr-2">{startIcon}</div>
      
      {text}
    </button>
  );
};

<Button variant="primary" size="md" onclick={() => {}} text="asd" />;
