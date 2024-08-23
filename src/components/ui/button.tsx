import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary:
          "bg-orange-500 text-orange-50 hover:bg-orange-400 hover:text-orange-50 disabled:bg-neutral-50 disabled:text-neutral-100 active:text-orange-50 active:bg-orange-700 focus:bg-orange-500 focus:text-orange-50 focus:border-orange-300",
        secondary:
          "bg-orange-50 text-orange-500 border-orange-400 border-[1px] hover:bg-orange-50 hover:text-orange-500 active:bg-orange-300 active:text-orange-50 disabled:bg-neutral-50 disabled:text-neutral-100 disabled:cursor-not-allowed",
        tertiary:
          "text-orange-500 hover:bg-orange-50 hover:text-orange-500 disabled:bg-neutral-50 disabled:text-neutral-100 active:bg-orange-100 active:text-orange-700 focus:bg-neutral-50 focus:text-blue-500 focus:border-blue-300 focus:border-[2px]",
        ghost:
          "text-orange-500 border-[1px] border-orange-500  hover:bg-orange-50 hover:text-orange-500 disabled:bg-neutral-50 disabled:text-neutral-100 active:bg-orange-100 active:text-orange-700 focus:bg-neutral-50 focus:text-blue-500 focus:border-blue-300 focus:border-[2px]",
      },
      size: {
        default: "h-10 px-4 py-2 rounded-xl",
        sm: "h-[32px] rounded-xl px-4",
        lg: "h-[48px] rounded-xl px-4",
        icon: "h-[30px] w-[30px] rounded-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
