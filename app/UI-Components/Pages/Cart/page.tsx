"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import returnPolicy from "@/public/boat.png";
import packBox from "@/public/pack-box.png";
import Follow from "../../Index/Follow/page";

type CartType = {
    id: number;
    title: string;
    image: string;
    price: string;
    off: string;
    qty: number;
};

export default function Cart() {
    const [cart, setCart] = useState<CartType[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem("cart");
        if (stored) setCart(JSON.parse(stored));
    }, []);

    const removeItem = (id: number): void => {
        const updated = cart.filter((item) => item.id !== id);
        setCart(updated);
        localStorage.setItem("cart", JSON.stringify(updated));
        toast.error("Removed from Cart");
    };

    const updateQty = (id: number, change: number): void => {
        const updated = cart.map((item) =>
            item.id === id ? { ...item, qty: Math.max(1, item.qty + change) } : item
        );
        setCart(updated);
        localStorage.setItem("cart", JSON.stringify(updated));
    };

    const calculateTotal = (): number => {
        return cart.reduce((sum, item) => {
            const price = Number(item.price.replace("$", ""));
            return sum + price * item.qty;
        }, 0);
    };

    return (
        <>
            <div className="page-section flex justify-center items-center text-center">
                <div className="z-10 flex flex-col justify-center items-center text-center">
                    <h2 className="text-white text-8xl GolosText font-semibold">Cart</h2>
                    <div className="flex mt-5 text-2xl items-center text-white">
                        <Link href="/" className="hover:text-(--prim)">Home</Link>
                        <i className="ri-arrow-right-wide-line pt-2 px-2"></i>
                        <Link href="/UI-Components/Shop" className="hover:text-(--prim)">Shop</Link>
                        <i className="ri-arrow-right-wide-line pt-2 px-2"></i>
                        <span>Cart</span>
                    </div>
                </div>
            </div>

            <div className="px-[8%] lg:px-[16%] py-20">
                {cart.length === 0 ? (
                    <p className="text-2xl text-(--second) GolosText border border-gray-400 px-5 py-2 rounded-2xl">
                        Your Cart is Empty.
                    </p>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-5 justify-between">
                        <div className="w-full lg:w-1/1">
                            <div className="flex flex-col gap-10">
                                {cart.map((product) => (
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
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-5 md:mt-0 flex items-center gap-3">
                                            <button
                                                onClick={() => updateQty(product.id, -1)}
                                                className="w-10 h-10 bg-black text-white rounded-full flex justify-center items-center text-center text-5xl pb-3 cursor-pointer"
                                            >
                                                -
                                            </button>
                                            <span className="w-10 h-10 border rounded-full flex justify-center items-center text-center text-2xl pb-1 cursor-pointer">{product.qty}</span>
                                            <button
                                                onClick={() => updateQty(product.id, 1)}
                                                className="w-10 h-10 bg-black text-white rounded-full flex justify-center items-center text-center text-5xl pb-3 cursor-pointer"
                                            >
                                                +
                                            </button>
                                        </div>

                                        <div className="mt-5 md:mt-0">
                                            <button
                                                onClick={() => removeItem(product.id)}
                                                className="px-6 py-3 GolosText border hover:bg-(--second) hover:border-transparent hover:text-white cursor-pointer rounded-lg md:rounded-full transition-all duration-300"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>

                                ))}
                                <Link href="/UI-Components/Pages/Checkout">
                                    <button className="btn w-full mt-3 bg-black text-white cursor-pointer GolosText text-xl px-6 py-3 rounded-md transition-all duration-300">
                                        <i className="bi bi-cart4"></i> CheckOut
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 sticky top-25 left-0 h-full">
                            <div className="border rounded-2xl p-4 ">
                                <button className="btn border w-full border-black cursor-pointer hover:bg-black hover:text-white transition-all duration-300 GolosText text-xl px-6 py-3 rounded-md">
                                    Bank Offer 5% Cashback
                                </button>
                                <div className="mt-5 border w-full px-6 py-3 rounded-md border-black cursor-pointer">
                                    <div className="flex items-center gap-5">
                                        <Image
                                            src={returnPolicy}
                                            alt="returnPolicy"
                                            width={70}
                                            height={70}
                                            className="opacity-80"
                                        />
                                        <div className="flex flex-col">
                                            <h2 className="GolosText">Easy Returns</h2>
                                            <h2 className="Lufga font-medium">30 Days</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 border w-full px-6 py-3 rounded-md border-black cursor-pointer">
                                    <div className="flex items-center gap-5">
                                        <Image
                                            src={packBox}
                                            alt="packBox"
                                            width={70}
                                            height={70}
                                            className="opacity-80"
                                        />
                                        <div className="flex flex-col">
                                            <h2 className="Lufga font-medium">Enjoy The Product</h2>
                                            <h2 className="GolosText text-[14px]">Lorem Ipsum is simply dummy text of the printing and typesetting</h2>
                                        </div>
                                    </div>
                                </div>
                                <h2 className="mt-3 flex items-center gap-2 GolosText"><i className="bi bi-check2-circle text-2xl"></i> You will save ₹504 on this order</h2>
                                <div className="flex justify-between items-center gap-3 border-t border-gray-400 my-3 pt-3">
                                    <h2 className="text-xl GolosText">Total</h2>
                                    <h2 className="text-2xl GolosText font-semibold">${calculateTotal().toFixed(2)}</h2>
                                </div>
                                <Link href="/UI-Components/Pages/Checkout">
                                    <button className="btn w-full mt-3 bg-black text-white cursor-pointer GolosText text-xl px-6 py-3 rounded-md transition-all duration-300">
                                        <i className="bi bi-cart3"></i> Place Order
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <Follow />
            <ToastContainer position="top-right" autoClose={1500} />
        </>
    );
}
