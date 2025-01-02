import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import Navbar from "@/app/_component/Navbar";
import Footer from "./_component/Footer";


export const metadata: Metadata = {
  title: "The Destiny Trust Foundation",
  description: "The Destiny Trust Foundation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>The Destiny Trust Foundation</Head>
      <link rel="icon" href="favicon.ico" sizes="16x16 32x32 48x48" />

      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
