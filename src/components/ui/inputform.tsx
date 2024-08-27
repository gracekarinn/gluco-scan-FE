import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./input";
import { AlertCircle } from "lucide-react";
import React from "react";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

interface InputFormProps<
  T extends FieldValues,
  U = any,
  V extends FieldValues | undefined = undefined
> {
  label?: string;
  placeholder: string;
  disabled?: boolean;
  description?: string;
  name: Path<T>;
  form: UseFormReturn<T, U, V>;
  icon?: React.ReactNode;
  type?: string;
}

const InputForm = <
  T extends FieldValues,
  U = any,
  V extends FieldValues | undefined = undefined
>({
  label,
  placeholder,
  description,
  disabled = false,
  name,
  form,
  icon,
  type = "text",
}: InputFormProps<T, U, V>) => {
  return (
    <FormField
      disabled={disabled}
      control={form.control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem className="flex flex-col gap-1 text-xs md:text-base">
            <FormControl>
              <Input
                icon={icon}
                label={label}
                placeholder={placeholder}
                type={type}
                {...field}
              />
            </FormControl>
            {description && (
              <FormDescription className="flex gap-2 items-center">
                <div>
                  <AlertCircle
                    width={14}
                    height={14}
                    className="md:w-[16px] opacity-90 dark:opacity-100"
                  />
                </div>
                <span className="text-xs opacity-60 dark:opacity-100">
                  {description}
                </span>
              </FormDescription>
            )}
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default InputForm;
