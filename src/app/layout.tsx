import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from "./ui/sidnav";
import { fetchRating } from "./lib/data";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie review",
  description:"my developing practice web"
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ratings = await fetchRating();
  const allRatings = ["All Ratings", ...ratings];
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex md:h-screen md:flex-row md:overflow-hidden flex-col">
          <div className="w-full flex-none md:w-64 overflow-auto">
            <SideNav/>
          </div>
          <main className="grow overflow-auto">{children}</main>
        </div>
      </body>
    </html>
    
  );
}

