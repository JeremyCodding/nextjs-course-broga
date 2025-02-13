import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";
import { cn } from "@/helpers/cn";
import { getSession } from "@/helpers/session";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nintendo Games Website",
  description: "Made in a Next Course",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getSession();

  return (
    <html lang="en">
      <body className={cn("bg-slate-890 text-slate-300", inter.className)}>
        <Navbar user={user} />
        {children}
      </body>
    </html>
  );
}
