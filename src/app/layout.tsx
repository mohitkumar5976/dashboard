import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Sidebar from "@/components/Sidebar"; // ✅ make sure you created this file
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Two-column dashboard with sidebar and main content",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="flex">
            {/* Sidebar (fixed width) */}
            <Sidebar />

            {/* Main content */}
            <main className="ml-64 flex-1 p-6 bg-gray-100 min-h-screen overflow-y-auto">
              <Header />
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
