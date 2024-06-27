import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from "./ui/sidnav";
import { fetchRating } from "./lib/data";
import Footer from "./ui/footer";


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
        <div className="">
          <div className="">
            <SideNav ratings={allRatings}/>
          </div>
          <main className="flex justify-center">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
    
  );
}

