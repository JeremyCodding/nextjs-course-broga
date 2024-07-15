import {
  HomeIcon,
  GamepadIcon,
  AwardIcon,
  WalkPathIcon,
  UserIcon,
  LogoutIcon,
  FormButton,
} from "@/components";
import { cn } from "@/helpers/cn";
import { ComponentProps } from "react";
import { NavbarItemLink, NavbarList, NavbarListItem } from "./modules";
import Image from "next/image";
import { handleSignOutForm } from "@/app/auth/sign-out/action";

export const Navbar = ({
  className,
  ...props
}: ComponentProps<"nav"> & { user?: any }) => {
  const { user } = props;
  return (
    <nav
      {...props}
      className={cn(
        "fixed top-0 left-0 flex flex-col h-screen text-slate-300 bg-slate-900 border-r border-indigo-400/20 hover:border-indigo-400/40 w-72 p-2",
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
        {user ? (
          <>
            <NavbarItemLink href="/user">
              <UserIcon className="w-4 h-4" />
              {user.name}
            </NavbarItemLink>
            <NavbarListItem>
              <LogoutIcon className="w-4 h-4" />
              <FormButton action={handleSignOutForm} label="Logout" />
            </NavbarListItem>
          </>
        ) : (
          <NavbarItemLink href="/auth/sign-in">
            <UserIcon className="w-4 h-4" />
            Login
          </NavbarItemLink>
        )}
      </NavbarList>
    </nav>
  );
};
