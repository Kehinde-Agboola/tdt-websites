import type { Metadata } from "next";
import Head from "next/head";
import Navbar from "@/app/_component/Navbar";
import Footer from "@/app/_component/Footer";
import Navigation from "./_components/Navigation";

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
    <html lang="en" suppressHydrationWarning={true}>
      <Head>The Destiny Trust Foundation</Head>
      <link rel="icon" href="favicon.ico" sizes="16x16 32x32 48x48" />

      <body>
        <Navbar />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
