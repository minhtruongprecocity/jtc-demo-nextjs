import { Header } from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["100", "200", "400", "500", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JTC Demo - Next.js",
  description: "Precocity JTC Demo built with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
