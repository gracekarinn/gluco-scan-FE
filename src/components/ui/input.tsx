import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex transition-all h-10 w-full rounded-[10px] border border-[#E6E6E6] bg-white px-4 py-2 text-P4 text-[#4D4D4D] hover:border-0 hover:shadow-inputHover  ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8AABF8] disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[#E6E6E6]",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
