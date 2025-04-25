import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Brew & Bliss Café",
  description: "A beautifully brewed experience – explore our menu, make reservations, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth bg-[#f5eee6] text-[#3c2a21]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased selection:bg-[#d2b48c] selection:text-[#3c2a21]`}
      >
        {children}
      </body>
    </html>
  );
}
