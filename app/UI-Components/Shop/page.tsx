"use client";

import Image from "next/image";
import ProductData from "@/app/JsonData/ProductsData.json";
import Link from "next/link";
import Follow from "../Index/Follow/page";
import { useState, useMemo } from "react";

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

export default function Shop() {
    const [isOpenSort, setIsOpenSort] = useState(false);
    const [isOpenCategory, setIsOpenCategory] = useState(false);

    const [selectedFilter, setSelectedFilter] = useState("Oldest");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const convertPrice = (price: string): number => Number(price.replace("$", ""));


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


    const sortedData = useMemo(() => {
        let data = [...ProductData];

        if (selectedCategory !== "All") {
            data = data.filter((item) => item.cate === selectedCategory);
        }

        switch (selectedFilter) {
            case "Latest":
                return data.sort((a, b) => b.id - a.id);
            case "Oldest":
                return data.sort((a, b) => a.id - b.id);
            case "Low to High":
                return data.sort((a, b) => convertPrice(a.price) - convertPrice(b.price));
            case "High to Low":
                return data.sort((a, b) => convertPrice(b.price) - convertPrice(a.price));
            default:
                return data;
        }
    }, [selectedFilter, selectedCategory]);

    const start = sortedData.length > 0 ? 1 : 0;
    const end = sortedData.length;

    const handleSortSelect = (value: any) => {
        setSelectedFilter(value);
        setIsOpenSort(false);
    };

    const handleCategorySelect = (value: any) => {
        setSelectedCategory(value);
        setIsOpenCategory(false);
    };

    return (
        <>
            {/* Page Title Section */}
            <div className="page-section flex justify-center items-center text-center">
                <div className="z-10 flex flex-col justify-center items-center text-center">
                    <h2 className="text-white text-8xl GolosText font-semibold">Shop</h2>
                    <div className="flex mt-5 text-2xl items-center text-white">
                        <Link href="/" className="hover:text-(--prim)">Home</Link>
                        <i className="ri-arrow-right-wide-line pt-2 px-2"></i>
                        <span>Shop</span>
                    </div>
                </div>
            </div>

            <div className="px-[8%] lg:px-[16%] py-30 pt-10">

                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-5">
                    <p className="text-lg GolosText text-black/80">
                        Showing <span className="font-semibold">{start}–{end}</span> of{" "}
                        <span className="font-semibold">{ProductData.length}</span>
                    </p>

                    <div className="flex items-center gap-5">

                        <div className="relative">
                            <button
                                onClick={() => setIsOpenSort(!isOpenSort)}
                                className="px-6 py-3 bg-black text-white GolosText rounded-full flex items-center gap-3 cursor-pointer"
                            >
                                {selectedFilter}
                                <i className="ri-arrow-down-s-line text-xl"></i>
                            </button>

                            {isOpenSort && (
                                <div className="absolute right-0 mt-2 w-48 bg-white shadow-xl rounded-xl overflow-hidden z-50">
                                    <div className="px-5 py-3 hover:bg-gray-100 cursor-pointer" onClick={() => handleSortSelect("Latest")}>Latest</div>
                                    <div className="px-5 py-3 hover:bg-gray-100 cursor-pointer" onClick={() => handleSortSelect("Oldest")}>Oldest</div>
                                    <div className="px-5 py-3 hover:bg-gray-100 cursor-pointer" onClick={() => handleSortSelect("Low to High")}>Low to High</div>
                                    <div className="px-5 py-3 hover:bg-gray-100 cursor-pointer" onClick={() => handleSortSelect("High to Low")}>High to Low</div>
                                </div>
                            )}
                        </div>

                        <div className="relative">
                            <button
                                onClick={() => setIsOpenCategory(!isOpenCategory)}
                                className="px-6 py-3 bg-black text-white GolosText rounded-full flex items-center gap-3 cursor-pointer"
                            >
                                {selectedCategory}
                                <i className="ri-arrow-down-s-line text-xl"></i>
                            </button>

                            {isOpenCategory && (
                                <div className="absolute right-0 mt-2 w-48 bg-white shadow-xl rounded-xl overflow-hidden z-50">
                                    <div className="px-5 py-3 hover:bg-gray-100 cursor-pointer" onClick={() => handleCategorySelect("All")}>All</div>
                                    <div className="px-5 py-3 hover:bg-gray-100 cursor-pointer" onClick={() => handleCategorySelect("Dresses")}>Dresses</div>
                                    <div className="px-5 py-3 hover:bg-gray-100 cursor-pointer" onClick={() => handleCategorySelect("Jacket")}>Jacket</div>
                                    <div className="px-5 py-3 hover:bg-gray-100 cursor-pointer" onClick={() => handleCategorySelect("Outerwear")}>Outerwear</div>
                                    <div className="px-5 py-3 hover:bg-gray-100 cursor-pointer" onClick={() => handleCategorySelect("Tops")}>Tops</div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {sortedData.map((product, index) => (
                        <div key={index}>
                            <div className="product-card popular-product cursor-pointer relative">
                                <div className="product-image rounded-2xl overflow-hidden">

                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        width={700}
                                        height={700}
                                        className="w-full h-full object-cover rounded-2xl"
                                    />

                                    <span className="absolute top-3 left-3 px-4 py-1 GolosText bg-white rounded-full">
                                        {product.off}
                                    </span>

                                    <div className="absolute top-5 right-5 flex flex-col gap-2">

                                        <i
                                            className="bi bi-balloon-heart product-icon w-10 h-10 flex items-center justify-center text-white bg-black/40 cursor-pointer rounded-full"
                                            onClick={() => addToWishlist(product)}
                                        ></i>

                                        <i
                                            className="bi bi-cart3 product-icon w-10 h-10 flex items-center justify-center text-white bg-black/40 cursor-pointer rounded-full"
                                            onClick={() => addToCart(product)}
                                        ></i>
                                    </div>

                                    <div className="relative left-0 -bottom-1 lg:absolute lg:bottom-20 lg:left-30">
                                        <Link href={`/UI-Components/Shop/${product.id}`}>
                                            <button className="btn bg-black text-white cursor-pointer GolosText text-xl px-6 py-3 rounded-2xl w-full lg:w-auto lg:rounded-full border-3 border-white">
                                                View Detail
                                            </button>
                                        </Link>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="product-content mt-5 lg:mt-10 z-10">
                                    <Link href={`/UI-Components/Shop/${product.id}`} className="flex justify-between">
                                        <h2 className="Lufga font-medium text-3xl pr-5">{product.title}</h2>
                                        <h3 className="GolosText font-semibold text-3xl">{product.price}</h3>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Follow />

            <ToastContainer position="top-right" autoClose={1500} />
        </>
    );
}
