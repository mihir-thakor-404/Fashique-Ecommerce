"use client";

import BlogsData from "@/app/JsonData/BlogsData.json";

export default function Blogs() {
    return (
        <>
            <div className="px-[8%] lg:px-[16%] py-30">
                <div className="flex flex-col md:flex-row justify-between gap-5">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-medium Lufga">Latest Post</h2>
                        <p className="GolosText text-lg mt-1">Discover the most trending Post in <span className='text-(--second) font-semibold'>FashiQue</span>.</p>
                    </div>
                    <div>
                        <button className="btn bg-black text-white cursor-pointer GolosText text-xl px-6 py-3 rounded-md transition-all duration-300">
                            View all
                        </button>
                    </div>
                </div>
                <div className="idx-blog-wrap grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
                    {BlogsData.slice(0, 4).map((blog, index) => (
                        <div className="idx-blog-item" key={index}>
                            <div className="bg-white p-7 flex flex-col md:flex-row justify-between gap-5 rounded-2xl shadow-2xl/5">
                                <div className="w-full lg:w-1/2">
                                    <div className="blog-image"
                                        style={{
                                            backgroundImage: `url(${blog.image})`
                                        }}
                                    >
                                        {/* <Image
                                            src={blog.image}
                                            alt={blog.title}
                                            width={500}
                                            height={500}
                                            className="w-full h-full object-cover "
                                        /> */}
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2">
                                    <div className="flex flex-col h-full justify-between gap-5">
                                        <div>
                                            <span className="px-3 py-1 bg-black text-white rounded-md">{blog.date}</span>
                                            <h2 className="mt-2 GolosText text-2xl font-semibold">{blog.title}</h2>
                                        </div>
                                        <div className="relative">
                                            <button className="btn px-7 py-3 border rounded-lg GolosText font-semibold hover:bg-(--second) hover:text-white transition-all duration-300 cursor-pointer">
                                                READ MORE
                                            </button>
                                            <i className="bi bi-arrow-right border rounded-full w-6 h-6 flex items-center justify-center absolute top-3.5 right-67 md:right-55 lg:right-28 bg-white z-10"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}
