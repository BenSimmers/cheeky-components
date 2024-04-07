import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const textAreaStyles = cva(
  [
    "w-full",
    "rounded-md",
    "font-semibold",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
  ],
  {
    variants: {
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
    },
    defaultVariants: {
      size: "md",
    },

    compoundVariants: [
      {
        size: "sm",
        className: "px-4 py-2 text-sm",
      },
      {
        size: "md",
        className: "px-4 py-2 text-base",
      },
      {
        size: "lg",
        className: "px-6 py-3 text-lg",
      },
    ],
  }
);


type TextAreaProps = ComponentProps<"textarea"> & VariantProps<typeof textAreaStyles>;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ size, className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(textAreaStyles({ size }), className)}
        {...props}
      />
    );
  }
);
