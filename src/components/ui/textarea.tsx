import { cn } from "@sglara/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const textAreaVariants = cva(
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

export interface TextAreaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size">,
    VariantProps<typeof textAreaVariants> {}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <textarea
        className={cn(textAreaVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
TextArea.displayName = "TextArea";

export default TextArea;
