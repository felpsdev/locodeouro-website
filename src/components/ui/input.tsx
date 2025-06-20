import { cn } from "@sglara/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const inputVariants = cva(
  "inline-flex items-center leading-none justify-center rounded-md font-medium transition-colors disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-primary-foreground text-white shadow focus:outline-2 focus:outline-offset-2 outline-secondary",
        outline:
          "bg-background text-primary border-1 border-primary shadow outline-none focus:border-accent",
      },
      size: {
        default: "px-4 py-3 text-md",
        sm: "px-3 py-2 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <input
        className={cn(inputVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export default Input;
