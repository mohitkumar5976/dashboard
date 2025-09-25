"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Sidebar from "@/components/Sidebar"; // ✅ make sure you created this file
import Header from "@/components/Header";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="flex">
            {/* Sidebar (fixed width) */}
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

            {/* Content */}
            <div className="flex-1 bg-gray-100 min-h-screen">
              <Header onMenuClick={() => setIsSidebarOpen(true)} />
              <main className="p-6 mt-16 md:ml-64">{children}</main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
