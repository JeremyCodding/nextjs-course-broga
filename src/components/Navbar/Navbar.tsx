import {
  HomeIcon,
  GamepadIcon,
  AwardIcon,
  WalkPathIcon,
  UserIcon,
} from "@/components";
import { cn } from "@/helpers/cn";
import { ComponentProps, ReactNode } from "react";

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

const NavbarListItem = ({ children, className }: ComponentProps<"li">) => {
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

export const Navbar = ({ className, ...props }: ComponentProps<"nav">) => {
  return (
    <nav
      {...props}
      className={cn(
        "flex flex-col gap-4 h-screen text-slate-300 bg-slate-900 border-r border-indigo-400/20 hover:border-indigo-400/40 w-72 p-2",
        className
      )}
    >
      <div className="flex items-center justify-center">
        <img
          src="https://emersonbroga.com/e/assets/emersonbroga-logo-name-pink.png"
          alt=" Logo"
          className="w-auto h-12 p-2"
        />
      </div>
      <NavbarList className="flex-grow">
        <NavbarListItem>
          <HomeIcon className="w-4 h-4" />
          Home
        </NavbarListItem>
        <NavbarListItem>
          <GamepadIcon className="w-4 h-4" />
          Games
        </NavbarListItem>
        <NavbarListItem>
          <AwardIcon className="w-5 h-5" />
          Top 10
        </NavbarListItem>
        <NavbarListItem>
          <WalkPathIcon className="w-4 h-4" />
          Walkthroughs
        </NavbarListItem>
      </NavbarList>
      <NavbarList>
        <NavbarListItem>
          <UserIcon className="w-4 h-4" />
          User
        </NavbarListItem>
      </NavbarList>
    </nav>
  );
};
