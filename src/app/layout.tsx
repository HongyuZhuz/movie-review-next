import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from "./ui/sidnav";
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
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <div className="">
          <div className="">
            <SideNav />
          </div>
          <main className="flex justify-center">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
    
  );
}

