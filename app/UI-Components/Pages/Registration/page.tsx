"use client";

import Link from 'next/link';
import Image from 'next/image';
import loginImg from "@/public/login-img.webp";
import { useState } from 'react';

export default function Regist() {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            <div className="">
                <div className="flex flex-col lg:flex-row gap-8 ">
                    <div className="w-full lg:w-1/2 hidden lg:block bg-[#ffedd4]">
                        <div className="absolute top-10 lg:top-20 left-10 z-10 ">
                            <h2 className="text-black text-4xl GolosText font-semibold">Registration</h2>
                            <div className="flex mt-5 text-2xl items-center text-black">
                                <Link href="/" className="font-semibold hover:text-(--second) transition-all duration-300">Home</Link>
                                <i className="ri-arrow-right-wide-line pt-2 px-2"></i>
                                <span>Registration</span>
                            </div>
                        </div>
                        <div className="login-image flex justify-center items-end h-full relative ps-20">
                            <Image src={loginImg} alt="login-image" className="object-contain" />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="flex items-center justify-center px-[8%] lg:px-[16%] py-15 min-h-screen">
                            <div className="border w-[90%] max-w-xl p-10 border-black rounded-2xl ">
                                <div className="absolute top-10 lg:top-20 left-10 z-10 ">
                                    <h2 className="text-black text-4xl GolosText font-semibold">Registration</h2>
                                    <div className="flex mt-5 text-2xl items-center text-black">
                                        <Link href="/" className="font-semibold hover:text-(--second) transition-all duration-300">Home</Link>
                                        <i className="ri-arrow-right-wide-line pt-2 px-2"></i>
                                        <span>Registration</span>
                                    </div>
                                </div>
                                <h2 className="text-3xl Lufga font-bold text-center mb-3">Registration Now</h2>
                                <p className="text-gray-500 text-center mb-6">Welcome please registration to your account</p>
                                <div className="space-y-5">
                                    <div className="user-details">
                                        <label className="Lufga">Username</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 border border-black bg-white hover:border-(--second) rounded-lg focus:outline-none"
                                            placeholder="Username"
                                        />
                                    </div>

                                    <div className="email-details">
                                        <label className="Lufga">Email Address</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 border border-black bg-white hover:border-(--second) rounded-lg focus:outline-none"
                                            placeholder="Email Address"
                                        />
                                    </div>

                                    <label className="Lufga">Password</label>
                                    <div className="password-details bg-white border border-black rounded-lg hover:border-(--second) flex justify-between items-center">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className="w-full px-5 py-3 bg-transparent focus:outline-none"
                                            placeholder="Password"
                                        />

                                        <i
                                            className={`bi ${showPassword ? "bi-eye-slash-fill" : "bi-eye-fill"} text-lg pe-3 cursor-pointer transition`}
                                            onClick={() => setShowPassword(!showPassword)}
                                            title={showPassword ? "Hide Password" : "Show Password"}
                                        ></i>
                                    </div>

                                    <div className="flex items-center justify-center gap-2 mt-8">
                                        <button className="btn bg-black text-white cursor-pointer GolosText px-4 py-2 rounded-md transition-all duration-300">
                                            REGISTER
                                        </button>
                                        <Link href="/UI-Components/Pages/Login">
                                            <button className="btn border border-black cursor-pointer hover:bg-black hover:text-white transition-all duration-300 GolosText px-4 py-2 rounded-md">
                                                SIGN IN
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
