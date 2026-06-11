import type { Metadata } from "next";
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
  title: "The Destiny Trust",
  description: "The Destiny Trust",
  icons: {
    icon: "/destinytrust-logo-white.png",
    shortcut: "/destinytrust-logo-white.png",
    apple: "/destinytrust-logo-white.png",
  },
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
