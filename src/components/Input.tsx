import React, { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = ({ className, ...rest }) => {
  const baseStyles = 'border border-gray-300 rounded px-4 py-2';

  return (
    <input
      className={`${baseStyles} ${className}`}
      {...rest}
    />
  );
};
