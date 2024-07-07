import { cn } from "@/helpers/cn";
import { ComponentProps } from "react";

export const NavbarListItem = ({
  children,
  className,
}: ComponentProps<"li">) => {
  return (
    <li
      className={cn(
        "my-2 flex gap-2 items-center rounded-lg bg-transparent p-2 hover:bg-indigo-400/40 cursor-pointer hover:text-slate-100",
        className
      )}
    >
      {children}
    </li>
  );
};
