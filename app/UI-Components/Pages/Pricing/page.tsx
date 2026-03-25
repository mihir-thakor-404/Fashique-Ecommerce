import Link from 'next/link'
import React from 'react'
import Follow from '../../Index/Follow/page'

export default function Pricing() {
    return (
        <>
            <div className="page-section flex justify-center items-center text-center">
                <div className="z-10 flex flex-col justify-center items-center text-center">
                    <h2 className="text-white text-8xl GolosText font-semibold">Pricing</h2>
                    <div className="flex mt-5 text-2xl items-center text-white">
                        <Link href="/" className="hover:text-(--prim)">Home</Link>
                        <i className="ri-arrow-right-wide-line pt-2 px-2"></i>
                        <span>Pricing</span>
                    </div>
                </div>
            </div>

            <div className="px-[8%] lg:px-[16%] py-20">
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="pricing-card rounded-2xl border border-black p-5 transition-all duration-300 hover:-translate-y-3">
                        <h3 className="font-semibold text-2xl mb-3 Lufga text-black">Starter Plan</h3>
                        <p className="text-black  mb-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className="pricing-content flex gap-1 items-end mb-8">
                            <h2 className="text-5xl font-bold GolosText">$19</h2>
                            <span className="text-black text-xl font-semibold">/Week</span>
                        </div>
                        <button className="btn border w-full border-black cursor-pointer hover:bg-black hover:text-white transition-all duration-300 GolosText text-xl px-4 py-1 rounded-md">
                            Try For Free
                        </button>
                        <div className="pricing-list py-8">
                            <h4 className="text-black  mb-5 GolosText font-semibold ">Key Features:</h4>
                            <ul className="list-item">
                                <li className="flex gap-3 GolosText mb-3"> <i className="bi bi-check-circle-fill"></i> Access to all features</li>
                                <li className="flex gap-3 GolosText mb-3"> <i className="bi bi-check-circle-fill"></i> Assisted onboarding support</li>
                                <li className="flex gap-3 GolosText mb-3"> <i className="bi bi-check-circle-fill"></i> CPM Overage: Unlimited</li>
                            </ul>
                            <ul className="list-item opacity-50">
                                <li className="flex gap-3 GolosText mb-3"> <i className="bi bi-x-circle-fill text-(--second)"></i> Program reviews 1x a month</li>
                                <li className="flex gap-3 GolosText mb-3"> <i className="bi bi-x-circle-fill text-(--second)"></i> CPM Overage: Unlimited</li>
                                <li className="flex gap-3 GolosText mb-3"> <i className="bi bi-x-circle-fill text-(--second)"></i> Assisted onboarding support</li>
                                <li className="flex gap-3 GolosText mb-3"> <i className="bi bi-x-circle-fill text-(--second)"></i> CPM Overage: Unlimited</li>
                            </ul>
                        </div>
                    </div>
                    <div className="pricing-card rounded-2xl border border-black p-5 transition-all duration-300 hover:-translate-y-3">
                        <h3 className="font-semibold text-2xl mb-3 Lufga text-black">Popular Plan</h3>
                        <p className="text-black  mb-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className="pricing-content flex gap-1 items-end mb-8">
                            <h2 className="text-5xl font-bold GolosText">$39</h2>
                            <span className="text-black text-xl font-semibold">/Month</span>
                        </div>
                        <button className="btn border w-full border-black cursor-pointer hover:bg-black hover:text-white transition-all duration-300 GolosText text-xl px-4 py-1 rounded-md">
                            Try For Free
                        </button>
                        <div className="pricing-list py-8">
                            <h4 className="text-black  mb-5 GolosText font-semibold ">Key Features:</h4>
                            <ul className="list-item">
                                <li className="flex gap-3 GolosText mb-3"> <i className="bi bi-check-circle-fill"></i> Access to all features</li>
                                <li className="flex gap-3 GolosText mb-3"> <i className="bi bi-check-circle-fill"></i> Assisted onboarding support</li>
                                <li className="flex gap-3 GolosText mb-3"> <i className="bi bi-check-circle-fill"></i> CPM Overage: Unlimited</li>
                                <li className="flex gap-3 GolosText mb-3"> <i className="bi bi-check-circle-fill"></i> Program reviews 1x a month</li>
                                <li className="flex gap-3 GolosText mb-3"> <i className="bi bi-check-circle-fill"></i> CPM Overage: Unlimited</li>
                            </ul>
                            <ul className="list-item opacity-50">
                                <li className="flex gap-3 GolosText mb-3"> <i className="bi bi-x-circle-fill text-(--second)"></i> Assisted onboarding support</li>
                                <li className="flex gap-3 GolosText mb-3"> <i className="bi bi-x-circle-fill text-(--second)"></i> CPM Overage: Unlimited</li>
                            </ul>
                        </div>
                    </div>
                    <div className="pricing-card rounded-2xl border border-black p-5 transition-all duration-300 hover:-translate-y-3">
                        <h3 className="font-semibold text-2xl mb-3 Lufga text-black">Custom Plan</h3>
                        <p className="text-black  mb-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className="pricing-content flex gap-1 items-end mb-8">
                            <h2 className="text-5xl font-bold GolosText">$69</h2>
                            <span className="text-black text-xl font-semibold">/Year</span>
                        </div>
                        <button className="btn border w-full border-black cursor-pointer hover:bg-black hover:text-white transition-all duration-300 GolosText text-xl px-4 py-1 rounded-md">
                            Try For Free
                        </button>
                        <div className="pricing-list py-8">
                            <h4 className="text-black  mb-5 GolosText font-semibold ">Key Features:</h4>
                            <ul className="list-item">
                                <li className="flex gap-3 GolosText mb-3"> <i className="bi bi-check-circle-fill"></i> Access to all features</li>
                                <li className="flex gap-3 GolosText mb-3"> <i className="bi bi-check-circle-fill"></i> Assisted onboarding support</li>
                                <li className="flex gap-3 GolosText mb-3"> <i className="bi bi-check-circle-fill"></i> CPM Overage: Unlimited</li>
                                <li className="flex gap-3 GolosText mb-3"> <i className="bi bi-check-circle-fill"></i> Program reviews 1x a month</li>
                                <li className="flex gap-3 GolosText mb-3"> <i className="bi bi-check-circle-fill"></i> CPM Overage: Unlimited</li>
                                <li className="flex gap-3 GolosText mb-3"> <i className="bi bi-check-circle-fill"></i> Assisted onboarding support</li>
                                <li className="flex gap-3 GolosText mb-3"> <i className="bi bi-check-circle-fill"></i> CPM Overage: Unlimited</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-[8%] lg:px-[16%] py-10">
                <div className="pricing-box bg-black gap-5 flex items-center justify-between text-white rounded-xl px-5 md:px-20 py-5 flex-wrap">
                    <div className="pricing-content flex flex-wrap items-center gap-2 lg:gap-6">
                        <h2 className="Lufga text-2xl">Questions ?</h2>
                        <p className="text-lg">Our experts will help find the grar that’s right for you</p>
                    </div>
                    <button className="btn border cursor-pointer text-black bg-white transition-all duration-300 GolosText text-xl px-6 py-3 rounded-md">
                        Get In Touch
                    </button>
                </div>
            </div>
            <Follow />
        </>
    )
}
