"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import callImg from "@/public/nav-contact.svg";
import products from "@/app/JsonData/ProductsData.json";

export default function MiddleNav() {
  const [query, setQuery] = useState("");

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="w-full bg-(--prim) border-b border-gray-300 relative">
      <div className="flex items-center justify-between py-3 px-[8%] lg:px-[16%]">
        
        {/* Logo */}
        <Link href="/" className="text-4xl lg:text-5xl font-bold Audiowide text-black">
          Fashi<span className="text-(--second)">Que</span>
        </Link>

        {/* Search Box */}
        <div className="relative flex flex-col flex-1 ms-6 mx-0 bg-white rounded-lg lg:mx-6 max-w-2xl">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search for a product or brand"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 px-4 py-4 outline-none rounded-l-lg"
            />
            <button className="px-3 text-2xl cursor-pointer">
              <i className="bi bi-search"></i>
            </button>
          </div>

          {query.length > 0 && (
            <div className="search-scroll absolute top-full left-0 w-full bg-white shadow-lg rounded-lg max-h-[400px] overflow-y-auto z-50 p-3">

              <div className="grid grid-cols-2 gap-3">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <Link
                      href={`/UI-Components/Shop/${product.id}`}
                      key={product.id}
                      className="bg-white p-2 rounded-lg shadow hover:shadow-md transition border"
                      onClick={() => setQuery("")}
                    >
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={300}
                        height={300}
                        className="w-full h-[250px] object-cover rounded-md"
                        style={{
                          objectPosition: "top center"
                        }}
                      />
                      <h3 className="text-md GolosText font-semibold mt-2 line-clamp-2">
                        {product.title}
                      </h3>
                      <p className="text-xl GolosText font-bold mt-1">
                        {product.price}
                      </p>
                    </Link>
                  ))
                ) : (
                  <p className="p-3 text-sm border rounded-md text-center col-span-2 text-red-500">
                    No products found
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Contact */}
        <div className="flex items-center gap-2">
          <Image src={callImg} alt="callImg" width={50} height={50} />
          <div className="flex flex-col">
            <h2 className="GolosText text-xs ps-2 font-semibold">24/7 SUPPORT</h2>
            <h1 className="GolosText font-semibold">+ 123 456 789</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
