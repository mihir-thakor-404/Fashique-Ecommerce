import type { Metadata } from "next";
import { Audiowide, Golos_Text } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import LayoutClient from "./LayoutClient";

const audiowide = Audiowide({
  weight: "400",
  variable: "--font-audiowide",
  subsets: ["latin"],
});

const golostext = Golos_Text({
  weight: "400",
  variable: "--font-golostext",
  subsets: ["latin"],
});

const lufga = localFont({
  src: [
    {
      path: "../public/Lufga/Fontspring-DEMO-lufga-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/Lufga/Fontspring-DEMO-lufga-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/Lufga/Fontspring-DEMO-lufga-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-lufga",
});

export const metadata: Metadata = {
  title: "Fashique",
  description: "Fashique Fashion Store",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${audiowide.variable} ${golostext.variable} ${lufga.variable}`}
    >
      <body>
        <LayoutClient>
          {children}
        </LayoutClient>
      </body>

    </html>
  );
}
