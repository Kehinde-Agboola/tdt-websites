import type { Metadata } from "next";
import Head from "next/head";
import { LoadingProvider } from "@/contexts/LoadingContext";
import ClientOnlyProgressBar from "@/components/ui/ClientOnlyProgressBar";
import "./global.css"; // ← THIS LINE MUST BE PRESENT


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

      <body suppressHydrationWarning={true}>
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
