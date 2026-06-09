import type { Metadata } from "next";
import Head from "next/head";
import { Open_Sans, Raleway } from "next/font/google";
import { LoadingProvider } from "@/contexts/LoadingContext";
import ClientOnlyProgressBar from "@/components/ui/ClientOnlyProgressBar";
import "./global.css"; // ← THIS LINE MUST BE PRESENT

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "The Destiny Trust ",
  description: "The Destiny Trust",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${openSans.variable}`}
    >
      <Head>The Destiny Trust Foundation</Head>
      <link rel="icon" href="favicon.ico" sizes="16x16 32x32 48x48" />

      <body
        className={`${raleway.className} font-sans antialiased text-gray-900`}
        suppressHydrationWarning={true}
      >
        <LoadingProvider>
          <ClientOnlyProgressBar 
            height={4}
            color="#FFB400"
            className="shadow-lg"
          />
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}
