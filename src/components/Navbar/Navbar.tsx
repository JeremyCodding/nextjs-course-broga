import {
  HomeIcon,
  GamepadIcon,
  AwardIcon,
  WalkPathIcon,
  UserIcon,
} from "@/components";

export const Navbar = () => {
  return (
    <nav className="flex flex-col gap-4 h-screen text-slate-300 bg-slate-900 border-r border-indigo-400/40 hover:border-indigo-400/80 w-72 p-2">
      <div>
        <img
          src="https://emersonbroga.com/e/assets/emersonbroga-logo-name-pink.png"
          alt=" Logo"
          className="max-w-full p-2"
        />
      </div>
      <ul className="my-4 flex-grow border-t border-indigo-400/20 hover:border-indigo-400/40">
        <li className="my-2 flex gap-2 items-center rounded-lg bg-transparent p-2 hover:bg-slate-800 cursor-pointer hover:text-slate-100">
          <HomeIcon className="w-4 h-4" />
          Home
        </li>
        <li className="my-2 flex gap-2 items-center rounded-lg bg-transparent p-2 hover:bg-slate-800 cursor-pointer hover:text-slate-100">
          <GamepadIcon className="w-4 h-4" />
          Games
        </li>
        <li className="my-2 flex gap-2 items-center rounded-lg bg-transparent p-2 hover:bg-slate-800 cursor-pointer hover:text-slate-100">
          <AwardIcon className="w-4 h-4" />
          Top 10
        </li>
        <li className="my-2 flex gap-2 items-center rounded-lg bg-transparent p-2 hover:bg-slate-800 cursor-pointer hover:text-slate-100">
          <WalkPathIcon className="w-4 h-4" />
          Walkthroughs
        </li>
      </ul>
      <ul className="my-4 border-t border-indigo-400/20 hover:border-indigo-400/40">
        <li className="my-2 flex gap-2 items-center rounded-lg bg-transparent p-2 hover:bg-slate-800 cursor-pointer hover:text-slate-100">
          <UserIcon className="w-4 h-4" />
          User
        </li>
      </ul>
    </nav>
  );
};
