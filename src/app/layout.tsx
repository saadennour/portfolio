import type { Metadata } from "next";
import { Space_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import { AOSInit } from "./aos";

const spacemono = Space_Mono({ subsets: ["latin"], weight: ["700"] });
const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["700", "400", "300"],
  variable: "--font-dm-sans",
});

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
      <body className={`${spacemono.className} ${dm_sans.variable}`}>
        {children}
      </body>
    </html>
  );
}
