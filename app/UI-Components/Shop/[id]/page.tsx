"use client";

import { useParams } from "next/navigation";
import ProductData from "@/app/JsonData/ProductsData.json";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


import returnPolicy from "@/public/boat.png";
import packBox from "@/public/pack-box.png";
import Follow from "../../Index/Follow/page";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


type ProductType = {
    id: number;
    title: string;
    price: string;
    image: string;
    off?: string;
    cate?: string;
};


export default function ProductDetailPage() {

    const { id } = useParams();
    const product = ProductData.find((p) => p.id.toString() === id);

    if (!product) {
        return (
            <div className="text-center py-40 text-3xl font-semibold">
                Product Not Found!
            </div>
        );
    }

    const [quantity, setQuantity] = useState(1);
    const priceNumber = Number(product.price.replace("$", ""));
    const totalPrice = priceNumber * quantity;

    const [activeSize, setActiveSize] = useState("S");

    const addToWishlist = (product: ProductType): void => {
        const stored = localStorage.getItem("wishlist");

        let wishlist: ProductType[] = stored ? JSON.parse(stored) : [];

        const exist = wishlist.find((item: ProductType) => item.id === product.id);

        if (exist) {
            toast.info("Already in wishlist");
            return;
        }

        wishlist.push(product);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));

        toast.success("Added to Wishlist");
    };

    const addToCart = (product: ProductType): void => {
        const stored = localStorage.getItem("cart");

        let cart: (ProductType & { qty: number })[] = stored ? JSON.parse(stored) : [];

        const exist = cart.find((item: ProductType) => item.id === product.id);

        if (exist) {
            toast.info("Already in Cart");
            return;
        }

        cart.push({ ...product, qty: 1 });

        localStorage.setItem("cart", JSON.stringify(cart));

        toast.success("Added to Cart");
    };



    return (
        <>
            <div className="page-section flex justify-center items-center text-center">
                <div className="z-10 flex flex-col justify-center items-center text-center">
                    <h2 className="text-white text-5xl md:text-8xl GolosText font-semibold">Product Details</h2>

                    <div className="flex flex-wrap justify-center mt-5 text-2xl items-center text-white">
                        <Link href="/" className="hover:text-(--prim)"> Home</Link>
                        <i className="ri-arrow-right-wide-line pt-2 px-2"></i>
                        <Link href="/UI-Components/Shop" className="hover:text-(--prim)"> Shop</Link>
                        <i className="ri-arrow-right-wide-line pt-2 px-2"></i>
                        <span>{product.title}</span>
                    </div>
                </div>
            </div>

            <div className="px-[8%] lg:px-[16%] py-20">
                <div className="flex flex-col lg:flex-row gap-2 justify-between">
                    <div className="w-full lg:w-1/1">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            <div className="flex flex-col">
                                <div className=" rounded-2xl overflow-hidden">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        width={700}
                                        height={700}
                                        className="w-full h-full object-cover rounded-2xl"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col">

                                <div className="flex items-center gap-4">
                                    <span className="text-4xl font-bold GolosText">{product.price}</span>
                                    <span className="text-lg bg-black text-white px-4 py-1 rounded-full">{product.off}</span>
                                </div>
                                <h1 className="text-4xl font-medium Lufga mt-4">{product.title}</h1>
                                <div className="mb-3 mt-1  flex items-center  gap-3">
                                    <div className="flex items-center gap-1">
                                        <i className="bi bi-star-fill text-yellow-300"></i>
                                        <i className="bi bi-star-fill text-yellow-300"></i>
                                        <i className="bi bi-star-fill text-yellow-300"></i>
                                        <i className="bi bi-star-half text-yellow-300"></i>
                                        <i className="bi bi-star text-yellow-300"></i>
                                    </div>
                                    <p className="GolosText">4.7 Rating</p>
                                    <p className="GolosText">(5 customer reviews)</p>
                                </div>

                                <p className="text-gray-600  GolosText">
                                    This product is part of our high-quality collection, crafted with comfort, style,
                                    and premium fit. Perfect for casual and formal occasions.
                                </p>

                                <div className="flex items-center gap-10 my-5 border-b border-gray-400 pb-5">
                                    <div className="">
                                        <h2 className="GolosText text-xl font-semibold mb-2">Quantity</h2>
                                        <div className="flex items-center gap-2">
                                            <span
                                                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                                                className="w-10 h-10 bg-black text-white rounded-full flex justify-center items-center text-center text-5xl pb-3 cursor-pointer"
                                            >
                                                -
                                            </span>

                                            <span className="w-10 h-10 border rounded-full flex justify-center items-center text-center text-2xl pb-1 cursor-pointer">
                                                {quantity}
                                            </span>

                                            <span
                                                onClick={() => setQuantity(quantity + 1)}
                                                className="w-10 h-10 bg-black text-white rounded-full flex justify-center items-center text-center text-4xl pb-2 cursor-pointer"
                                            >
                                                +
                                            </span>
                                        </div>
                                    </div>

                                    <div className="">
                                        <h2 className="GolosText text-xl font-semibold mb-2">Size</h2>
                                        <div className="flex items-center gap-2">
                                            {["S", "M", "L"].map((size) => (
                                                <button
                                                    key={size}
                                                    onClick={() => setActiveSize(size)}
                                                    className={`
                                                    w-10 h-10 border rounded-full flex justify-center items-center text-center 
                                                    text-xl pb-1 cursor-pointer transition-all duration-300
                                                    ${activeSize === size ? "bg-black text-white border-black" : "bg-transparent text-black"}
                                                `}>
                                                    {size}
                                                </button>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                                <div className="pt-4">
                                    <h2 className="mb-2"><span className="GolosText font-semibold pe-2">SKU:</span> <span className="text-md text-gray-800">PRT584E63A</span></h2>
                                    <h2 className="mb-2"><span className="GolosText font-semibold pe-2">Category:</span> <span className="text-md text-gray-800">Dresses, Jeans, Swimwear, Summer, Clothing,</span></h2>
                                    <h2 className="mb-2"><span className="GolosText font-semibold pe-2">Tags:</span> <span className="text-md text-gray-800">Casual, Athletic, Workwear, Accessories,</span></h2>
                                    <h2 className="mb-2"><span className="GolosText font-semibold pe-2">Share:</span>
                                        <i className="ri-facebook-fill ps-1 text-xl"></i>
                                        <i className="ri-linkedin-fill ps-1 text-xl"></i>
                                        <i className="ri-twitter-x-fill ps-1 text-xl"></i>
                                        <i className="ri-behance-fill ps-1 text-xl"></i>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <h2 className="Lufga text-4xl font-medium">Description :</h2>
                            <h2 className="Lufga text-xl font-medium mt-5">Flawless Denim Delights</h2>
                            <p className="GolosText mt-2 tracking-wide text-gray-700">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                            <h2 className="mt-5 flex items-center gap-2 GolosText text-xl md:text-2xl"><i className="bi bi-check2-circle text-2xl text-(--second)"></i>Versatile, enduring style for all occasions</h2>
                            <h2 className="mt-2 flex items-center gap-2 GolosText text-xl md:text-2xl"><i className="bi bi-check2-circle text-2xl text-(--second)"></i>Handcrafted Elegance, Comfort</h2>
                            <h2 className="mt-2 flex items-center gap-2 GolosText text-xl md:text-2xl"><i className="bi bi-check2-circle text-2xl text-(--second)"></i>Versatile, enduring style for all occasions</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
                                <div className="border rounded-2xl flex flex-col justify-center items-center p-4 text-center">
                                    <h2 className="text-2xl GolosText font-semibold">All-in-One Dress</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                                <div className="border rounded-2xl flex flex-col justify-center items-center p-4 text-center">
                                    <h2 className="text-2xl GolosText font-semibold">Looking wise good</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                                <div className="border rounded-2xl flex flex-col justify-center items-center p-4 text-center">
                                    <h2 className="text-2xl GolosText font-semibold">100% Made In India</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                                <div className="border rounded-2xl flex flex-col justify-center items-center p-4 text-center">
                                    <h2 className="text-2xl GolosText font-semibold">100% Cotton</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
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
                                <h2 className="text-2xl GolosText font-semibold">${totalPrice}</h2>
                            </div>

                            <button
                                onClick={() => addToWishlist(product)}
                                className="btn border w-full border-black cursor-pointer hover:bg-black hover:text-white transition-all duration-300 GolosText text-xl px-6 py-3 rounded-md">
                                <i className="bi bi-balloon-heart"></i>  Add To Wishlist
                            </button>
                            <button
                                onClick={() => addToCart(product)}
                                className="btn w-full mt-3 bg-black text-white cursor-pointer GolosText text-xl px-6 py-3 rounded-md transition-all duration-300">
                                <i className="bi bi-cart3"></i> Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div >
            <Follow />

            <ToastContainer position="top-right" autoClose={1500} />
        </>
    );
}
