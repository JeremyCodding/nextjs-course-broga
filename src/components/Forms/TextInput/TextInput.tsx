import { cn } from "@/helpers/cn";
import { ComponentProps } from "react";

export type TextInputProps = ComponentProps<"input"> & {
  label?: string | null;
  error?: string | null;
};

export const TextInput = ({
  label,
  type,
  name,
  className,
  error,
  ...props
}: TextInputProps) => {
  return (
    <div className={cn("my-4", className)}>
      {label && (
        <label htmlFor="" className="text-slate-300 my-2">
          {label}
        </label>
      )}
      <input
        {...props}
        name={name}
        type={type}
        className={cn(
          "w-full rounded-md border-2 border-transparent bg-slate-800 px-4 py-3 text-base text-slate-300 focus:outline-none focus:ring-0",
          {
            "border-red-500": !!error,
          }
        )}
      />
      {error && (
        <div>
          <small className="text-sm text-red-500">{error}</small>
        </div>
      )}
    </div>
  );
};
