import { cn } from "@/helpers/cn";
import { ComponentProps } from "react";

export type FormButtonProps = ComponentProps<"button"> & {
  label: string | null | undefined;
  action: () => void;
};

export const FormButton = ({
  label,
  action,
  children,
  className,
  ...props
}: FormButtonProps) => {
  return (
    <form action={action} className="flex gap-2 items-center rounded-lg w-full">
      <button {...props} className={cn("block", className)}>
        {label || children}
      </button>
    </form>
  );
};
