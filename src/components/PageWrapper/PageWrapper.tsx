import { ReactNode } from "react";

export const PageWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="ml-72">{children}</div>;
};
