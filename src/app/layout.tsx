import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gallery",
  description: `Welcome to my Gallery, a space dedicated to the art of photography!
  Explore a visually captivating world through the lens, where each image tells a unique story. 
  From breathtaking landscapes to emotional portraits, this is where beauty meets creativity. 
  Immerse yourself in vibrant colors, fascinating compositions, and moments frozen in time. 
  Lucas Winicius, the creator behind the lens, invites you to embark on a visual journey that transcends words. 
  Discover the magic of photography and allow yourself to be inspired by each capture. 
  Feel free to explore, comment, and share, as each photo is more than just an image - it is an expression of art`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " flex flex-col min-h-screen"}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
