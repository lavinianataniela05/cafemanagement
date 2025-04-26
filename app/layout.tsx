import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google"; // Import Playfair Display
import { Lexend_Deca } from "next/font/google"; // <-- import Lexend Deca


import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display", // Custom variable for Playfair
});
const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  variable: "--font-lexend-deca", // define a CSS variable for Lexend Deca
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
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased selection:bg-[#6e5b43] selection:text-[#30241d]`}
      >
        {children}
      </body>
    </html>
  );
}
