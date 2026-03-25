"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Follow from "../../Index/Follow/page";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type CartItem = {
    id: number;
    title: string;
    price: string;
    image: string;
    off?: string;
    cate?: string;
    qty?: number;
};

export default function Checkout() {
    const [deliveryOption, setDeliveryOption] = useState<"ship" | "pickup">("ship");
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    useEffect(() => {
        const saved = localStorage.getItem("cart");
        if (saved) {
            const parsed = JSON.parse(saved).map((item: CartItem) => ({
                ...item,
                qty: item.qty ?? 1,
            }));
            setCartItems(parsed);
        }
    }, []);

    const handlePlaceOrder = () => {
        toast.success("Order Placed Successfully!");
    };

    const totalPrice = cartItems.reduce((acc, item) => {
        const price = parseFloat(item.price.replace("$", "")) || 0;
        const quantity = item.qty ?? 1;
        return acc + price * quantity;
    }, 0);

    return (
        <>
            <div className="page-section flex justify-center items-center text-center">
                <div className="z-10 flex flex-col justify-center items-center text-center">
                    <h2 className="text-white text-5xl lg:text-8xl GolosText font-semibold">Checkout</h2>
                    <div className="flex mt-5 text-2xl items-center text-white">
                        <Link href="/" className="hover:text-(--prim)">Home</Link>
                        <i className="ri-arrow-right-wide-line pt-2 px-2"></i>
                        <Link href="/UI-Components/Pages/Cart" className="hover:text-(--prim)">Cart</Link>
                        <i className="ri-arrow-right-wide-line pt-2 px-2"></i>
                        <span>Checkout</span>
                    </div>
                </div>
            </div>

            <div className="px-[8%] lg:px-[12%] py-10">
                <div className="grid gap-4 lg:grid-cols-12">

                    {/* LEFT SIDE */}
                    <div className="lg:col-span-7">
                        <h5 className="mb-2 GolosText text-4xl">Contact</h5>
                        <input
                            type="email"
                            className="border border-gray-300 bg-white rounded w-full p-2 mb-3"
                            placeholder="Email or Mobile Phone number"
                        />

                        <div className="mb-4">
                            <input type="checkbox" id="newsCheck" className="me-2" />
                            <label htmlFor="newsCheck">Email me with news and offers</label>
                        </div>

                        <h5 className="mb-2 GolosText text-3xl">Delivery</h5>

                        <div className="mb-3 flex gap-4">
                            <label className="flex items-center gap-1">
                                <input
                                    type="radio"
                                    name="deliveryoption"
                                    checked={deliveryOption === "ship"}
                                    onChange={() => setDeliveryOption("ship")}
                                />
                                Ship
                            </label>
                            <label className="flex items-center gap-1">
                                <input
                                    type="radio"
                                    name="deliveryoption"
                                    checked={deliveryOption === "pickup"}
                                    onChange={() => setDeliveryOption("pickup")}
                                />
                                Pickup in store
                            </label>
                        </div>

                        {deliveryOption === "ship" && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                                <select className="form-select border border-gray-300 bg-white rounded appearance-none px-2 py-2 md:col-span-2">
                                    <option>India</option>
                                    <option>United States</option>
                                    <option>France</option>
                                </select>

                                <input type="text" className="border bg-white border-gray-300 rounded w-full p-2" placeholder="First Name (optional)" />
                                <input type="text" className="border bg-white border-gray-300 rounded w-full p-2" placeholder="Last Name" />
                            </div>
                        )}

                        {deliveryOption === "pickup" && (
                            <div className="my-4 p-3 border rounded bg-red-50 text-red-700">
                                <strong>No Stores Available with your item</strong>
                                <div>
                                    <Link href="#" className="underline">Ship to address</Link> instead
                                </div>
                            </div>
                        )}

                        <input type="text" className="border border-gray-300 rounded bg-white w-full p-2 mb-3" placeholder="Address" />
                        <input type="text" className="border border-gray-300 rounded bg-white w-full p-2 mb-3" placeholder="Apartment, suite (optional)" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                            <input type="text" className="border border-gray-300 rounded bg-white w-full p-2" placeholder="City" />
                            <input type="text" className="border border-gray-300 rounded bg-white w-full p-2" placeholder="Postal Code (optional)" />
                        </div>

                        <div className="mb-4">
                            <input type="checkbox" id="saveInfo" className="me-2" />
                            <label htmlFor="saveInfo">Save this information for next time</label>
                        </div>

                        <h5 className="mb-2 GolosText text-3xl">Shipping Method</h5>
                        <div className="p-3 flex justify-between items-center border border-gray-300 rounded-md bg-green-50">
                            <span>Standard</span>
                            <span className="text-green-600">FREE</span>
                        </div>

                        <h4 className="mt-5 mb-2 GolosText text-3xl">Payment</h4>
                        <p className="text-gray-500 mb-3">All transactions are secure and encrypted.</p>

                        <div className="border border-gray-300 rounded p-3 mb-3">
                            <input type="text" className="border border-gray-300 rounded bg-white w-full p-2 mb-2" placeholder="Card number" />
                            <div className="grid grid-cols-2 gap-2">
                                <input type="text" className="border border-gray-300 rounded bg-white w-full p-2" placeholder="Expiration date (MM / YY)" />
                                <input type="text" className="border border-gray-300 rounded bg-white w-full p-2" placeholder="Security Code" />
                            </div>
                            <input type="text" className="border border-gray-300 rounded bg-white w-full p-2 mt-2" placeholder="Name on card" />
                        </div>

                        <button
                            className="btn w-full mt-3 bg-black text-white cursor-pointer GolosText text-xl px-6 py-3 rounded-md transition-all duration-300"
                            onClick={handlePlaceOrder}
                        >
                            Pay Now
                        </button>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="border border-gray-300 p-4 rounded shadow-lg">
                            <h5 className="font-bold mb-3 flex items-center gap-1 text-2xl GolosText">
                                <i className="ri-shopping-cart-2-line text-(--second)"></i> Order Summary
                            </h5>

                            {cartItems.length === 0 ? (
                                <p className="text-gray-500">Your cart is Empty!</p>
                            ) : (
                                <div className="flex flex-col gap-4">
                                    {cartItems.map((item) => {
                                        const qty = item.qty ?? 1;
                                        const price = parseFloat(item.price.replace("$", ""));

                                        return (
                                            <div key={item.id} className="flex gap-4 border-b border-gray-300 pb-4">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    width={120}
                                                    height={120}
                                                    className="rounded-lg w-24 h-24 object-cover"
                                                />

                                                <div className="flex-1">
                                                    <h6 className="GolosText text-lg">{item.title}</h6>
                                                    {item.off && <p className=" text-sm">{item.off}</p>}

                                                    <div className="flex justify-between GolosText mt-2">
                                                        <span className="text-md">Qty: {qty}</span>
                                                        <span className="font-bold text-lg">${(price * qty).toFixed(2)}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}

                            {/* TOTALS */}
                            <div className="text-sm pt-4 space-y-2">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span className="GolosText">${totalPrice.toFixed(2)}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Shipping</span>
                                    <span>Free</span>
                                </div>


                                <div className="flex justify-between border-t border-gray-300 pt-2 text-lg">
                                    <span>Total</span>
                                    <span className="GolosText">${(totalPrice).toFixed(2)}</span>
                                </div>
                            </div>

                            {/* BUTTONS */}
                            <button
                                className="mt-5 btn border w-full border-black cursor-pointer hover:bg-black hover:text-white transition-all duration-300 GolosText text-xl px-6 py-3 rounded-md"
                                onClick={handlePlaceOrder}
                            >
                                Place Order
                            </button>

                            <Link
                                href="/UI-Components/Pages/Cart"
                            >
                                <button className="btn w-full mt-3 bg-black text-white cursor-pointer GolosText text-xl px-6 py-3 rounded-md transition-all duration-300">
                                    Back to Cart
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Follow />
            <ToastContainer position="top-right" autoClose={1500} />
        </>
    );
}
