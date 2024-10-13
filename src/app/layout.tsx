import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Xynaps | Where ideas connect, and work flows.",
  description: "Xynapse is a project management platform that connects tasks, teams, and tools for faster workflows."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(inter.className, "antialiased min-h-screen")}
      >
        {children}
      </body>
    </html>
  );
}
