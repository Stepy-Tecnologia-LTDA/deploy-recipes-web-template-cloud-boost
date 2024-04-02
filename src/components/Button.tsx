import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "default" | "outlined";
  size?: "default" | "small";
}

const sizeTypeStyles = {
  default: "py-3 px-6 text-base",
  small: "py-2 px-4 text-sm",
};

const variantTypeStyles = {
  default:
    "bg-primary-500 text-white hover:bg-primary-600 disabled:bg-primary-100 disabled:text-primary-400",
  outlined:
    "border border-primary-500 text-primary-500 hover:border-primary-600 hover:text-primary-600 disabled:border-primary-200 disabled:text-primary-200",
};

export function Button({
  variant = "default",
  size = "default",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "w-full rounded-3xl font-semibold duration-300",
        variantTypeStyles[variant],
        sizeTypeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
