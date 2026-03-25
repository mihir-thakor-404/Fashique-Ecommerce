"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import ProductData from "@/app/JsonData/ProductsData.json";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

export default function PopularProducts() {
    const containerRef = useRef(null);

    const categories = ["Dresses", "Dresses", "Dresses", "Tops", "Tops", "Outerwear", "Jacket", "Jacket"];

    useEffect(() => {
        async function loadMix() {
            if (typeof window !== "undefined" && containerRef.current) {
                const mixitup = (await import("mixitup")).default;

                mixitup(containerRef.current, {
                    animation: { duration: 400 }
                });
            }
        }

        loadMix();
    }, []);


    const addToWishlist = (product: any) => {
        const stored = localStorage.getItem("wishlist");
        let wishlist = stored ? JSON.parse(stored) : [];

        const exists = wishlist.find((item: any) => item.id === product.id);
        if (exists) {
            toast.info("Already in wishlist");
            return;
        }

        wishlist.push(product);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        toast.success("Added to Wishlist");
    };


    const addToCart = (product: any) => {
        const stored = localStorage.getItem("cart");
        let cart = stored ? JSON.parse(stored) : [];

        const exists = cart.find((item: any) => item.id === product.id);
        if (exists) {
            toast.info("Already in Cart");
            return;
        }

        cart.push({ ...product, qty: 1 });
        localStorage.setItem("cart", JSON.stringify(cart));
        toast.success("Added to Cart");
    };

    return (
        <>
            <div className="px-[8%] lg:px-[16%] py-20 mt-20">

                <div className="flex flex-col md:flex-row justify-between gap-5">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-medium Lufga">
                            Most Popular Products
                        </h2>
                    </div>

                    {/* Filter Buttons */}
                    <div>
                        <div className="border rounded-full px-4 py-2 flex flex-wrap items-center justify-center gap-2">
                            <button className="px-4 py-1 rounded-full focus:bg-black focus:text-white transition-all duration-300 cursor-pointer mixitup-control-active" data-filter="all">
                                ALL
                            </button>
                            <button className="px-4 py-1 rounded-full focus:bg-black focus:text-white transition-all duration-300 cursor-pointer" data-filter=".Dresses">
                                Dresses
                            </button>
                            <button className="px-4 py-1 rounded-full focus:bg-black focus:text-white transition-all duration-300 cursor-pointer" data-filter=".Tops">
                                Tops
                            </button>
                            <button className="px-4 py-1 rounded-full focus:bg-black focus:text-white transition-all duration-300 cursor-pointer" data-filter=".Outerwear">
                                Outerwear
                            </button>
                            <button className="px-4 py-1 rounded-full focus:bg-black focus:text-white transition-all duration-300 cursor-pointer" data-filter=".Jacket">
                                Jacket
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
                        ref={containerRef}
                    >
                        {ProductData.slice(0, 8).map((item, index) => {
                            const cat = categories[index];

                            return (
                                <div
                                    key={index}
                                    className={`mix ${cat}`}
                                >
                                    <div className="product-card popular-product cursor-pointer relative">

                                        <div className="product-image rounded-2xl overflow-hidden">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                width={500}
                                                height={500}
                                                className="w-full h-full object-cover rounded-2xl"
                                            />

                                            <span className="absolute top-3 left-3 px-4 py-1 GolosText bg-white rounded-full">
                                                {item.off}
                                            </span>

                                            <div className="absolute top-5 right-5 flex flex-col gap-2">
                                                <i
                                                    onClick={() => addToWishlist(item)}
                                                    className="bi bi-balloon-heart product-icon w-10 h-10 flex items-center justify-center text-white bg-black/40 cursor-pointer rounded-full"
                                                ></i>

                                                <i
                                                    onClick={() => addToCart(item)}
                                                    className="bi bi-cart3 product-icon w-10 h-10 flex items-center justify-center text-white bg-black/40 cursor-pointer rounded-full"
                                                ></i>
                                            </div>

                                            <div className="relative left-0 -bottom-1 lg:absolute lg:bottom-18 lg:left-18">
                                                <Link href={`/UI-Components/Shop/${item.id}`}>
                                                    <button className="btn bg-black text-white cursor-pointer GolosText text-xl px-6 py-3 rounded-2xl w-full lg:w-auto lg:rounded-full border-3 border-white">
                                                        View Detail
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>

                                        <Link href={`/UI-Components/Shop/${item.id}`}>
                                            <div className="product-content mt-5 md:mt-10 z-10 ">
                                                <div className="flex justify-between ">
                                                    <h2 className="Lufga font-medium text-xl pr-5">{item.title}</h2>
                                                    <h3 className="GolosText font-semibold text-2xl">{item.price}</h3>
                                                </div>
                                            </div>
                                        </Link>

                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <ToastContainer position="top-right" autoClose={1500} />
        </>
    );
}
