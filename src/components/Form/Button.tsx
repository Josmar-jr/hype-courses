import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: React.SVGAttributes<HTMLOrSVGElement> | any;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  customCls?: string;
  size?: "sm" | "md" | "lg";
};



export function Button({
  icon: Icon,
  variant = "primary",
  customCls = "",
  size = "md",
  ...rest
}: ButtonProps) {

  const variantCustom = {
    primary: "bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-600 focus:ring-emerald-600",
    secondary: "bg-red-600",
    outline: "outline",
    ghost: customCls
  };

  const sizeCustom = {
    sm: "py-2 px-3",
    md: "py-3 px-4",
    lg: "py-4 px-5"
  }

  return (
    <button
      {...rest}
      className={classNames("inline-flex focus:outline-none focus:border-transparent justify-center gap-2 border border-transparent shadow-sm focus:ring focus:ring-offset-2 font-medium rounded-md text-white transition-colors", {
        [variantCustom[variant]]: variant,
        [sizeCustom[size]]: size,
        [customCls]: customCls
      })}
    />
  )
}