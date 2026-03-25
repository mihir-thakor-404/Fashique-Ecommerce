"use client";

import Image from "next/image";
import circleText from "@/public/banner-shop-circle.png";
import playIcon from "@/public/banner-play-icon.png";
import starShape from "@/public/star-shape.svg";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

export default function Banner() {
    const categories = [
        "Shorts",
        "T-Shirt",
        "Blazer",
        "Jacket",
        "Jeans",
        "Shirts"
    ];

    return (
        <>
            <div className="banner relative">
                <div>
                    <Image
                        src={circleText}
                        alt="circleText"
                        width={300}
                        height={300}
                        className="banner-shop-img"
                    />
                    <Image
                        src={playIcon}
                        alt="playIcon"
                        width={100}
                        height={100}
                        className="banner-play-img"
                    />
                </div>

                <div className="w-full overflow-hidden splide-slide-texts">
                    <Splide
                        options={{
                            type: "loop",
                            drag: "free",
                            focus: "center",
                            arrows: false,
                            pagination: false,
                            autoWidth: true,
                            gap: "40px",
                            speed: 1,
                            autoScroll: {
                                speed: 1,
                                pauseOnHover: false,
                                pauseOnFocus: false,
                            },
                        }}
                        extensions={{ AutoScroll }}
                    >
                        {categories.map((item, index) => (
                            <SplideSlide key={index}>
                                <h2 className="text-2xl flex items-center gap-3 font-bold">
                                    <Image
                                        src={starShape}
                                        alt="star"
                                        width={60}
                                        height={60}
                                    />
                                    {item}
                                </h2>
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </div>
        </>
    );
}
