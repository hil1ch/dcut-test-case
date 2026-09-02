import type { ReactNode } from "react";
import { ScrollRestoration } from "react-router";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <main>{children}</main>
      <ScrollRestoration />
    </div>
  );
};
