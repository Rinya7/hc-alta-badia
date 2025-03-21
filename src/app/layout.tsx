import type { Metadata } from "next";
 
import "./globals.css";
import Header from "@/components/00_Header";
import Footer from "@/components/99_Footer";
import Favicon from "./favicon.png";
 
 

 

 

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
