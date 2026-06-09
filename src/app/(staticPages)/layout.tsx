import type { Metadata } from "next";
import Navbar from "@/app/_component/Navbar";
import Footer from "@/app/_component/Footer";

export const metadata: Metadata = {
  title: {
    default: "The Destiny Trust ",
    template: "%s | The Destiny Trust",
  },
  description:
    "Education, shelter, care, and empowerment for children and youth. Support The Destiny Trust",
};

export default function StaticPagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-[120%] rounded-md bg-white px-4 py-2 text-sm font-medium text-black opacity-0 shadow transition focus:translate-y-0 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#FFB400]"
      >
        Skip to main content
      </a>
      <div className="flex min-h-dvh flex-col">
        <Navbar />
        <main
          id="main-content"
          className="flex-1 w-full min-w-0 outline-none"
          tabIndex={-1}
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
