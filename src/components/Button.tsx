import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  style?: keyof typeof buttonDefaultStyles | string;
};

const buttonDefaultStyles: { [key: string]: string } = {
  primary: "bg-blue-500 text-white font-bold py-2 px-4 rounded",
  secondary: "bg-gray-500 text-white font-bold py-2 px-4 rounded",
  error: "bg-red-500 text-white font-bold py-2 px-4 rounded",
  success: "bg-green-500 text-white font-bold py-2 px-4 rounded",
  warning: "bg-yellow-500 text-white font-bold py-2 px-4 rounded",
} as const;

export const Button: React.FC<ButtonProps> = ({ className, style, ...rest }) => {
  const buttonStyle =
    style && buttonDefaultStyles[style] ? buttonDefaultStyles[style] : style;

  return <button className={`${buttonStyle} ${className}`} {...rest} />;
};

