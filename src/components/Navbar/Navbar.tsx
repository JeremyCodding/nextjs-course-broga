import {
  HomeIcon,
  GamepadIcon,
  AwardIcon,
  WalkPathIcon,
  UserIcon,
} from "@/components";
import { cn } from "@/helpers/cn";
import { ComponentProps } from "react";
import { NavbarItemLink, NavbarList } from "./modules";
import Image from "next/image";

export const Navbar = ({ className, ...props }: ComponentProps<"nav">) => {
  return (
    <nav
      {...props}
      className={cn(
        "flex flex-col gap-4 h-screen text-slate-300 bg-slate-900 border-r border-indigo-400/20 hover:border-indigo-400/40 w-72 p-2",
        className
      )}
    >
      <div className="flex items-center justify-center my-4">
        <Image
          width={112}
          height={32}
          src="https://emersonbroga.com/e/assets/emersonbroga-logo-name-pink.png"
          alt=" Logo"
          className="w-auto h-12 p-2"
        />
      </div>
      <NavbarList className="flex-grow">
        <NavbarItemLink href="/">
          <HomeIcon className="w-4 h-4" />
          Home
        </NavbarItemLink>
        <NavbarItemLink href="/games">
          <GamepadIcon className="w-4 h-4" />
          Games
        </NavbarItemLink>
        <NavbarItemLink href="/top-ten">
          <AwardIcon className="w-5 h-5" />
          Top 10
        </NavbarItemLink>
        <NavbarItemLink href="/walkthroughs">
          <WalkPathIcon className="w-4 h-4" />
          Walkthroughs
        </NavbarItemLink>
      </NavbarList>
      <NavbarList>
        <NavbarItemLink href="/user">
          <UserIcon className="w-4 h-4" />
          User
        </NavbarItemLink>
      </NavbarList>
    </nav>
  );
};
