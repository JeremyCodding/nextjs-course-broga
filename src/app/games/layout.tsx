import { ReactNode } from "react";

export default function GamesLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>Layout página games</h1>
      {children}
    </div>
  );
}
