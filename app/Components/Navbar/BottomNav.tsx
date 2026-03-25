"use client";

import Image from "next/image";
import Link from "next/link";
import menuDot from "@/public/Menu-dot.svg";

import { useEffect, useState } from "react";

type NavLink = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Shop",
    href: "/UI-Components/Shop",
    dropdown: [
      { label: "Shop", href: "/UI-Components/Shop" },
      { label: "Details", href: "/UI-Components/Shop/12" },
      { label: "Cart", href: "/UI-Components/Pages/Cart" },
      { label: "Wishlist", href: "/UI-Components/Pages/Wishlist" },
      { label: "Checkout", href: "/UI-Components/Pages/Checkout" },
    ],
  },
  {
    label: "Blog",
    href: "/UI-Components/Blogs",
    dropdown: [
      { label: "Blog", href: "/UI-Components/Blogs" },
      { label: "Blog Details", href: "/UI-Components/Blogs/7" },
    ],
  },
  // { label: "Portfolio", href: "/UI-Components/Pages/Portfolio" },
  {
    label: "Pages",
    href: "#",
    dropdown: [
      { label: "About Me", href: "/UI-Components/Pages/About" },
      { label: "Pricing Table", href: "/UI-Components/Pages/Pricing" },
      { label: "Gift Vouchers", href: "/UI-Components/Pages/GiftVoucher" },
      { label: "Faq", href: "/UI-Components/Pages/Faq" },
      { label: "Login", href: "/UI-Components/Pages/Login" },
      { label: "Registration", href: "/UI-Components/Pages/Registration" },
      { label: "Contact Us", href: "/UI-Components/Pages/Contact" },
    ],
  },
  { label: "Contact Us", href: "/UI-Components/Pages/Contact" },
];

export default function BottomNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});
  const [isFixed, setIsFixed] = useState(false);

  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);


  const updateCounts = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    setWishlistCount(wishlist.length);
    setCartCount(cart.length);
  };


  useEffect(() => {
    updateCounts();
  }, []);


  useEffect(() => {
    const handler = () => updateCounts();
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);


  useEffect(() => {
    const interval = setInterval(() => updateCounts(), 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsFixed(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (label: string) => {
    setOpenDropdowns((prev) => ({
      ...Object.fromEntries(Object.keys(prev).map((key) => [key, false])),
      [label]: !prev[label],
    }));
  };

  return (
    <div
      className={`w-full bg-white shadow-sm transition-all py-5 duration-500 ${isFixed ? "fixed top-0 left-0 z-50 fixed-nav" : ""
        }`}
    >
      <div className="w-full flex items-center justify-between px-[8%] lg:px-[16%] text-gray-700">

        {/* Desktop Logo */}
        <Link
          href="/"
          className={`text-4xl lg:text-5xl font-bold Audiowide text-black hidden ${isFixed ? "lg:flex" : "hidden"
            }`}
        >
          Fashi<span className="text-(--second)">Que</span>
        </Link>

        {/* Mobile Logo */}
        <Link
          href="/"
          className="text-4xl lg:text-5xl font-bold Audiowide text-black block lg:hidden"
        >
          Fashi<span className="text-(--second)">Que</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6 menu-link relative z-40">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="relative group">
                <Link href={link.href} className="flex GolosText items-center gap-1">
                  {link.label} <Image src={menuDot} alt="menuDot" />
                </Link>

                <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-xl p-2 border border-gray-100 rounded-lg min-w-[170px]">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-2 rounded-md transition-all"
                    >
                      <div className="flex gap-1">
                        <Image src={menuDot} alt="menuDot" />
                        {item.label}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={link.label} href={link.href} className="flex gap-2 GolosText">
                {link.label}
                <Image src={menuDot} alt="menuDot" />
              </Link>
            )
          )}
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-5">
          <Link
            href="/UI-Components/Pages/Login"
            className="login-link border-b border-gray-400 GolosText font-semibold"
          >
            Login / Register
          </Link>

          <div className="flex items-center gap-6">

            <Link href="/UI-Components/Pages/Wishlist" className="relative">
              <i className="bi bi-balloon-heart text-3xl"></i>
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-black text-white text-xs w-5 h-5 flex justify-center items-center rounded-full">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <Link href="/UI-Components/Pages/Cart" className="relative">
              <i className="bi bi-cart3 text-3xl"></i>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-black text-white text-xs w-5 h-5 flex justify-center items-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center justify-between gap-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-2xl focus:outline-none"
          >
            <i className="ri-menu-line"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 mt-3 transition-all duration-500">
          <nav className="flex flex-col px-[4%] py-3 space-y-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="flex flex-col">
                  <button
                    className="flex justify-between items-center w-full px-2 py-2 font-medium rounded-md hover:bg-gray-100"
                    onClick={() => toggleDropdown(link.label)}
                  >
                    {link.label}
                    <i
                      className={`ri-arrow-down-s-line transition-transform ${openDropdowns[link.label] ? "rotate-180" : ""
                        }`}
                    ></i>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${openDropdowns[link.label] ? "max-h-60 mt-1" : "max-h-0"
                      }`}
                  >
                    <div className="flex flex-col bg-(--prim-) p-2 space-y-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="px-2 py-1 GolosText bg-white border-b border-gray-300 rounded-md hover:bg-gray-100"
                          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block px-2 py-2 font-medium rounded-md hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </div>
  );
}
