import { ComponentProps } from "react";
import { NavbarListItem } from "./NavbarListItem";
import Link from "next/link";
import { cn } from "@/helpers/cn";

export const NavbarItemLink = ({
  children,
  className,
  href,
  ...props
}: ComponentProps<typeof Link>) => {
  return (
    <NavbarListItem className={cn("p-0", className)}>
      <Link
        {...props}
        className="flex gap-2 items-center rounded-lg p-2 w-full"
        href={href}
      >
        {children}
      </Link>
    </NavbarListItem>
  );
};
