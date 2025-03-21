import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/00_Header";
import Footer from "@/components/99_Footer";
import Favicon from "./favicon.png";
 
 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

 

export const metadata: Metadata = {
    title: "HC Alta Badia",
    description:
      "HC Alta Badia",
    keywords: ["Alta Badia", "hokey"],
    authors: [{ name: "Rinya", url: "https://github.com/Rinya7" }],
    creator: "Rinya",
    icons: [{ rel: "icon", url: Favicon.src  }],
};
    export default function RootLayout({
        children,
      }: Readonly<{
        children: React.ReactNode;
      }>) {
        return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
