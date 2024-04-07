import { cn } from '@/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps, forwardRef } from 'react';

const inputStyles = cva(
  ['w-full', 'rounded-md', 'font-semibold', 'focus:outline-none', 'disabled:cursor-not-allowed'],
  {
    variants: {
      variant: {
        solid: '',
        outline: 'border-2',
        ghost: 'transition-colors duration-300',
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
      },
      colorScheme: {
        primary: 'text-white',
      },
    },
    compoundVariants: [
      {
        variant: 'solid',
        colorScheme: 'primary',
        className: 'bg-primary-500 hover:bg-primary-600',
      },
      {
        variant: 'outline',
        colorScheme: 'primary',
        className: 'text-primary-600 border-primary-500 bg-transparent hover:bg-primary-100',
      },
      {
        variant: 'ghost',
        colorScheme: 'primary',
        className: 'text-primary-600 bg-transparent hover:bg-primary-100',
      },
    ],
  },
);

type InputProps = ComponentProps<'input'> & VariantProps<typeof inputStyles>;

export const Input = forwardRef<HTMLInputElement, InputProps>(({ size, className, ...props }, ref) => {
  return <input ref={ref} className={cn(inputStyles({ size }), className)} {...props} />;
});

