import React, { InputHTMLAttributes } from 'react';

type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const Radio: React.FC<RadioProps> = ({ className, label, ...rest }) => {
  const defaultStyles = 'inline-block align-middle text-primary-500';

  return (
    <label className={`flex items-center ${className}`}>
      <input type="radio" className={defaultStyles} {...rest} />
      <span className="ml-2">{label}</span>
    </label>
  );
};

