import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SerenAI – Your AI Mental Health Companion",
  description: "Talk, express, and feel better anytime with SerenAI. Your 24/7 AI mental wellness partner.",
};

import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased scroll-smooth`}
    >
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-full flex flex-col font-sans relative text-foreground bg-black overflow-x-hidden cursor-none md:cursor-auto`}>
        <CustomCursor />
        <Preloader />
        {children}
      </body>
    </html>
  );
}
