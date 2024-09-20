import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import { AOSInit } from "./aos";

const spacemono = Space_Mono({ subsets: ["latin"], weight: ["700"] });

export const metadata: Metadata = {
  title: "Saad-Ennour's Portfolio",
  description: "This is a result of all abilties gathered as developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AOSInit />
      <body className={`${spacemono.className}`}>{children}</body>
    </html>
  );
}
