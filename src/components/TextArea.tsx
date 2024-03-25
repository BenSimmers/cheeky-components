import React, { TextareaHTMLAttributes } from 'react';

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea: React.FC<TextAreaProps> = ({ className, ...rest }) => {
  const baseStyle = 'border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500';

  return (
    <textarea className={`${baseStyle} ${className}`} {...rest} />
  );
};
