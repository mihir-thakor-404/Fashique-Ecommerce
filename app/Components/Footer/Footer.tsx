"use client";

import Image from "next/image";
import Link from "next/link";

import BlogsData from "@/app/JsonData/BlogsData.json";

export default function Footer() {
    return (
        <>
            <div className="px-[8%] lg:px-[16%] py-20 pb-0">
                <div className="flex flex-col lg:flex-row justify-between gap-5 pb-5">
                    <div className="w-full lg:w-1/2">
                        <div className="flex flex-col lg:flex-row justify-between gap-5">
                            <div className="w-full lg:w-1/2">
                                <Link href="/"
                                    className={`text-4xl lg:text-5xl font-bold Audiowide`}>
                                    Fashi<span className="text-(--second)">Que</span>
                                </Link>
                                <p className="mt-5 GolosText">Address: 451 Wall Street, UK, London</p>
                                <p className="mt-2 GolosText">E-mail : example@info.com</p>
                                <p className="mt-2 GolosText">Phone : (064) 332-1233</p>
                                <h4 className="mt-10 GolosText font-semibold">subscribe to our newsletter</h4>
                                <div className="mt-2 bg-yellow-100 px-4 py-2 rounded-md border">
                                    <input type="text" placeholder="Your Email Address..." className="focus:outline-none w-full text-black GolosText" />
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2">
                                {BlogsData.slice(0, 3).map((blog, index) => (
                                    <div className="idx-blog-item hidden lg:flex" key={index}>
                                        <div className=" flex flex-col px-3 py-2 mb-3 md:flex-row justify-between gap-5 rounded-2xl shadow-2xl/5">
                                            <div className="w-full lg:w-1/2">
                                                <div className="blog-image">
                                                    <Image
                                                        src={blog.image}
                                                        alt={blog.title}
                                                        width={500}
                                                        height={500}
                                                        className="w-full h-full object-cover rounded-2xl"
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-1/1">
                                                <div className="flex flex-col h-full justify-between gap-5">
                                                    <div>
                                                        <h2 className="mt-2 GolosText font-semibold">{blog.smallTitle}</h2>
                                                        <span className="py-1 rounded-md">{blog.date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            <div>
                                <h2 className="GolosText mb-5 font-semibold text-2xl">Our Stores</h2>
                                <div className="flex flex-col gap-3">
                                    <Link href="#" className="GolosText font-semibold hover:text-(--second) hover:ps-2 transition-all duration-300">New York</Link>
                                    <Link href="#" className="GolosText font-semibold hover:text-(--second) hover:ps-2 transition-all duration-300">London SF</Link>
                                    <Link href="#" className="GolosText font-semibold hover:text-(--second) hover:ps-2 transition-all duration-300">Edinburgh</Link>
                                    <Link href="#" className="GolosText font-semibold hover:text-(--second) hover:ps-2 transition-all duration-300">Los Angeles</Link>
                                    <Link href="#" className="GolosText font-semibold hover:text-(--second) hover:ps-2 transition-all duration-300">Chicago</Link>
                                    <Link href="#" className="GolosText font-semibold hover:text-(--second) hover:ps-2 transition-all duration-300">Las Vegas</Link>
                                </div>
                            </div>
                            <div>
                                <h2 className="GolosText mb-5 font-semibold text-2xl">Useful Links</h2>
                                <div className="flex flex-col gap-3">
                                    <Link href="#" className="GolosText font-semibold hover:text-(--second) hover:ps-2 transition-all duration-300">Privacy Policy</Link>
                                    <Link href="#" className="GolosText font-semibold hover:text-(--second) hover:ps-2 transition-all duration-300">Returns</Link>
                                    <Link href="#" className="GolosText font-semibold hover:text-(--second) hover:ps-2 transition-all duration-300">Terms & Conditions</Link>
                                    <Link href="#" className="GolosText font-semibold hover:text-(--second) hover:ps-2 transition-all duration-300">Contact Us</Link>
                                    <Link href="#" className="GolosText font-semibold hover:text-(--second) hover:ps-2 transition-all duration-300">Latest News</Link>
                                    <Link href="#" className="GolosText font-semibold hover:text-(--second) hover:ps-2 transition-all duration-300">Our Sitemap</Link>
                                </div>
                            </div>
                            <div>
                                <h2 className="GolosText mb-5 font-semibold text-2xl">Quick Links</h2>
                                <div className="flex flex-col gap-3">
                                    <Link href="#" className="GolosText font-semibold hover:text-(--second) hover:ps-2 transition-all duration-300">Portfolio</Link>
                                    <Link href="#" className="GolosText font-semibold hover:text-(--second) hover:ps-2 transition-all duration-300">About Me</Link>
                                    <Link href="#" className="GolosText font-semibold hover:text-(--second) hover:ps-2 transition-all duration-300">Pricing</Link>
                                    <Link href="#" className="GolosText font-semibold hover:text-(--second) hover:ps-2 transition-all duration-300">Vouchers</Link>
                                    <Link href="#" className="GolosText font-semibold hover:text-(--second) hover:ps-2 transition-all duration-300">Faq's</Link>
                                    <Link href="#" className="GolosText font-semibold hover:text-(--second) hover:ps-2 transition-all duration-300">Our Teams</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-400 py-5 text-center">
                    <p className="GolosText text-xl">© 2025. All Rights Reserved.</p>
                </div>
            </div>
        </>
    )
}
