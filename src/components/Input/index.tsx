import { cn } from '@/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps, forwardRef } from 'react';

// Error: input is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.
//   at setInitialProperties (/node_modules/.cache/sb-vite/deps/chunk-XXNDK2BK.js?v=a5c7e601:7599:27)
//   at finalizeInitialChildren (/node_modules/.cache/sb-vite/deps/chunk-XXNDK2BK.js?v=a5c7e601:8356:31)
//   at completeWork (/node_modules/.cache/sb-vite/deps/chunk-XXNDK2BK.js?v=a5c7e601:16282:46)
//   at completeUnitOfWork (/node_modules/.cache/sb-vite/deps/chunk-XXNDK2BK.js?v=a5c7e601:19220:24)
//   at performUnitOfWork (/node_modules/.cache/sb-vite/deps/chunk-XXNDK2BK.js?v=a5c7e601:19202:31)
//   at workLoopSync (/node_modules/.cache/sb-vite/deps/chunk-XXNDK2BK.js?v=a5c7e601:19133:30)
//   at renderRootSync (/node_modules/.cache/sb-vite/deps/chunk-XXNDK2BK.js?v=a5c7e601:19112:15)
//   at recoverFromConcurrentError (/node_modules/.cache/sb-vite/deps/chunk-XXNDK2BK.js?v=a5c7e601:18732:42)
//   at performConcurrentWorkOnRoot (/node_modules/.cache/sb-vite/deps/chunk-XXNDK2BK.js?v=a5c7e601:18680:30)
//   at workLoop (/node_modules/.cache/sb-vite/deps/chunk-XXNDK2BK.js?v=a5c7e601:197:50)
//   at flushWork (/node_modules/.cache/sb-vite/deps/chunk-XXNDK2BK.js?v=a5c7e601:176:22)
//   at performWorkUntilDeadline (/node_modules/.cache/sb-vite/deps/chunk-XXNDK2BK.js?v=a5c7e601:384:29)

const inputStyles = cva(
  ['w-full', 'rounded-md', 'font-semibold', 'focus:outline-none', 'disabled:cursor-not-allowed', 'border', 'border-gray-300'],
  {
    variants: {
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
      },
    },
    defaultVariants: {
      size: 'md',
    },
    compoundVariants: [
      {
        size: 'sm',
        className: 'px-4 py-2 text-sm',
      },
      {
        size: 'md',
        className: 'px-4 py-2 text-base',
      },
      {
        size: 'lg',
        className: 'px-6 py-3 text-lg',
      },
    ],
  },
);

type InputProps = ComponentProps<'input'> & VariantProps<typeof inputStyles>;

export const Input = forwardRef<HTMLInputElement, InputProps>(({ size, className, ...props }, ref) => {
  return <input ref={ref} className={cn(inputStyles({ size }), className)} {...props} />;
});
