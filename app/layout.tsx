import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Home from "./home/page";
import Bio from "./bio/page";
import Targets from "./targets/page";
import Footages from "./footages/page";
import Footer from "@/components/Footer/footer";
import Social from "./social/page";
import data from "../profile/profile.json";
import Header from "@/components/Header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        <Home></Home>
        <Bio data={data}></Bio>
        <Targets></Targets>
        <Footages></Footages>
        <Social data={data}></Social>
        <Footer data={data}></Footer>
        {children}
      </body>
    </html>
  );
}
