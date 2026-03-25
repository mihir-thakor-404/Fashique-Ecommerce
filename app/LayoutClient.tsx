"use client";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { usePathname } from "next/navigation";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hideOn = [
    "/UI-Components/Pages/Login",
    "/UI-Components/Pages/Registration"
  ];

  const hideLayout = hideOn.includes(pathname);

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}
