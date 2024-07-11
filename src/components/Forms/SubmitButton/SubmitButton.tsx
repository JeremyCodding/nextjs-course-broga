import { cn } from "@/helpers/cn";
import { ComponentProps } from "react";

export type SubmitButtonProps = ComponentProps<"button"> & {
  label: string | null | undefined;
};

export const SubmitButton = ({
  label,
  children,
  className,
  ...props
}: SubmitButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        "bg-slate-700 hover:bg-indigo-400/40 rounded-lg px-4 py-2  inline max-w-max",
        className
      )}
    >
      {label || children}
    </button>
  );
};
