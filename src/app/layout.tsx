import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from "./ui/sidnav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie review",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64 overflow-auto">
        <SideNav />
      </div>
      <main className="grow overflow-auto">{children}</main>
    </div>
  );
}
