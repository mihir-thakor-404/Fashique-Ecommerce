"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import Follow from "../../Index/Follow/page";

type ProductType = {
  id: number;
  title: string;
  image: string;
  price: string;
  off: string;
};

export default function Wishlist() {
  const [wishlist, setWishlist] = useState<ProductType[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("wishlist");
    if (stored) setWishlist(JSON.parse(stored));
  }, []);

  const removeItem = (id: number): void => {
    const updated = wishlist.filter((item) => item.id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
    toast.error("Removed from Wishlist");
  };

  const addToCart = (product: ProductType): void => {
    const stored = localStorage.getItem("cart");
    let cart = stored ? JSON.parse(stored) : [];

    const exists = cart.find((item: any) => item.id === product.id);
    if (exists) {
      toast.info("Already in cart");
      return;
    }

    cart.push({ ...product, qty: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success("Added to Cart");
  };

  return (
    <>
      {/* Page Title Section */}
      <div className="page-section flex justify-center items-center text-center">
        <div className="z-10 flex flex-col justify-center items-center text-center">
          <h2 className="text-white text-5xl lg:text-8xl GolosText font-semibold">Wishlist</h2>
          <div className="flex mt-5 text-2xl items-center text-white">
            <Link href="/" className="hover:text-(--prim)">Home</Link>
            <i className="ri-arrow-right-wide-line pt-2 px-2"></i>
            <Link href="/UI-Components/Shop" className="hover:text-(--prim)">Shop</Link>
            <i className="ri-arrow-right-wide-line pt-2 px-2"></i>
            <span>Wishlist</span>
          </div>
        </div>
      </div>

      <div className="px-[8%] lg:px-[20%] py-20">
        {/* <h1 className="text-4xl font-bold mb-10 GolosText">My Wishlist</h1> */}

        {wishlist.length === 0 ? (
          <p className="text-2xl text-(--second) GolosText border border-gray-400 px-5 py-2 rounded-2xl">Your Wishlist is Empty.</p>
        ) : (
          <div className="flex flex-col gap-10">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-gray-400 pb-8"
              >
                <div className="flex items-center gap-5">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={100}
                    height={100}
                    className="w-24 h-24 md:w-28 md:h-28 rounded-xl object-cover"
                  />

                  <div>
                    <h2 className="text-2xl font-semibold">{product.title}</h2>

                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-2xl font-bold">{product.price}</span>
                      <span className="bg-black rounded-full text-white px-4 py-1">{product.off}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 md:mt-0">
                  <p className="text-lg text-green-600 font-semibold">In Stock</p>
                </div>

                <div className="flex items-center gap-5 mt-5 md:mt-0">
                  <button
                    onClick={() => addToCart(product)}
                    className="px-6 py-3 bg-black text-white rounded-lg md:rounded-full cursor-pointer GolosText"
                  >
                    Add To Cart
                  </button>
                  <button
                    onClick={() => removeItem(product.id)}
                    className="px-6 py-3 GolosText border hover:bg-(--second) hover:border-transparent hover:text-white cursor-pointer rounded-lg md:rounded-full transition-all duration-300"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <Link href="/UI-Components/Pages/Cart">
              <button className="btn mt-3 bg-black text-white cursor-pointer GolosText text-xl px-6 py-3 rounded-md transition-all duration-300">
                <i className="bi bi-cart3"></i> View Cart
              </button>
            </Link>
          </div>
        )}
      </div>

      <Follow />
      <ToastContainer position="top-right" autoClose={1500} />
    </>
  );
}
