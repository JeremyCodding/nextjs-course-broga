import { cn } from "@/helpers/cn";
import { ComponentProps } from "react";
import { NavbarListItem } from "../Navbar";

export const NavbarItemButton = ({
  children,
  className,
  ...props
}: ComponentProps<"button">) => {
  return (
    <NavbarListItem className={cn("p-0", className)}>
      <button
        {...props}
        className="flex gap-2 items-center rounded-lg p-2 w-full"
      >
        {children}
      </button>
    </NavbarListItem>
  );
};
