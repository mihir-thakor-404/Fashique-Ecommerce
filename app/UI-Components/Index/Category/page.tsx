

import Image from "next/image";
import category1 from "@/public/Category-1.webp";
import category2 from "@/public/Category-2.webp";
import category3 from "@/public/Category-3.webp";
import category4 from "@/public/Category-4.webp";
import category5 from "@/public/Category-5.webp";
import category6 from "@/public/Category-6.webp";




export default function Category() {
  return (
    <>
        <div className="px-[8%] lg:px-[8%] py-20">
            <div className="bg-(--prim) px-[8%] py-20 rounded-2xl">
                <div className="category-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
                    <div className="category-card relative">
                        <Image 
                            src={category1}
                            alt="category1"
                            className=""
                        />
                        <span className="bg-white hover:bg-(--second) border-2 border-white hover:text-white cursor-pointer transition-all duration-300  rounded-full GolosText text-2xl  px-6 py-3">Jacket</span>
                    </div>
                    <div className="category-card relative">
                        <Image 
                            src={category2}
                            alt="category2"
                            className=""
                        />
                        <span className="bg-white hover:bg-(--second) border-2 border-white hover:text-white cursor-pointer transition-all duration-300 rounded-full GolosText text-2xl  px-6 py-3">Jeans</span>
                    </div>
                    <div className="category-card relative">
                        <Image 
                            src={category3}
                            alt="category3"
                            className=""
                        />
                        <span className="bg-white hover:bg-(--second) border-2 border-white hover:text-white cursor-pointer transition-all duration-300 rounded-full GolosText text-2xl  px-6 py-3">Shirts</span>
                    </div>
                    <div className="category-card relative">
                        <Image 
                            src={category4}
                            alt="category4"
                            className=""
                        />
                        <span className="bg-white hover:bg-(--second) border-2 border-white hover:text-white cursor-pointer transition-all duration-300 rounded-full GolosText text-2xl  px-6 py-3">Shorts</span>
                    </div>
                    <div className="category-card relative">
                        <Image 
                            src={category5}
                            alt="category5"
                            className=""
                        />
                        <span className="bg-white hover:bg-(--second) border-2 border-white hover:text-white cursor-pointer transition-all duration-300 rounded-full GolosText text-2xl  px-6 py-3">T-shirt</span>
                    </div>
                    <div className="category-card relative">
                        <Image 
                            src={category6}
                            alt="category6"
                            className=""
                        />
                        <span className="bg-white hover:bg-(--second) border-2 border-white hover:text-white cursor-pointer transition-all duration-300 rounded-full GolosText text-2xl  px-6 py-3">Blazer</span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
