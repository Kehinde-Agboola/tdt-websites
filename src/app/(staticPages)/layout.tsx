import type { Metadata } from "next";
import Head from "next/head";
import Navbar from "@/app/_component/Navbar";
import Footer from "@/app/_component/Footer";

export const metadata: Metadata = {
  title: {
    default: "The Destiny Trust Foundation",
    template: "%s | The Destiny Trust Foundation",
  },
  description:
    "Education, shelter, care, and empowerment for children and youth. Support The Destiny Trust Foundation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>The Destiny Trust Foundation</Head>
      <link rel="icon" href="favicon.ico" sizes="16x16 32x32 48x48" />

      <body suppressHydrationWarning>
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-[120%] rounded-md bg-white px-4 py-2 text-sm font-medium text-black opacity-0 shadow transition focus:translate-y-0 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#FFB400]"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="outline-none" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
