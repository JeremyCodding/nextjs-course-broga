import { cn } from "@/helpers/cn";
import { ComponentProps } from "react";

export const NavbarList = ({
  children,
  className = "",
  ...props
}: ComponentProps<"ul">) => {
  return (
    <ul
      {...props}
      className={cn(
        "my-4 border-t border-indigo-400/20 hover:border-indigo-400/40 ${className}",
        className
      )}
    >
      {children}
    </ul>
  );
};
