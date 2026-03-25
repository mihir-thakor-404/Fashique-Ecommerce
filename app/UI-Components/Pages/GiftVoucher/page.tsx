import Link from "next/link";

import Image from "next/image";
import Voucher1 from "@/public/Voucher-1.webp";
import Voucher2 from "@/public/Voucher-2.webp";
import Voucher3 from "@/public/Voucher-3.webp";
import Voucher4 from "@/public/Voucher-4.webp";
import Voucher5 from "@/public/Voucher-5.webp";
import Voucher6 from "@/public/Voucher-6.webp";
import Follow from "../../Index/Follow/page";


const VouchersData = [
    {
        id: 1,
        image: Voucher1,
        title: "The perfect gift for any occasion",
        info: "Our gift cards are available in a range of denominations, so you can choose the perfect amount for any occasion."
    },
    {
        id: 2,
        image: Voucher2,
        title: "Delight Someone with a Gift Voucher",
        info: "Our gift cards are available in a range of denominations, so you can choose the perfect amount for any occasion."
    },
    {
        id: 3,
        image: Voucher3,
        title: "Let Them Choose Their Perfect Gift",
        info: "Our gift cards are available in a range of denominations, so you can choose the perfect amount for any occasion."
    },
    {
        id: 4,
        image: Voucher4,
        title: "Experience the Ultimate Gift",
        info: "Our gift cards are available in a range of denominations, so you can choose the perfect amount for any occasion."
    },
    {
        id: 5,
        image: Voucher5,
        title: "Share the Joy with a Gift Voucher",
        info: "Our gift cards are available in a range of denominations, so you can choose the perfect amount for any occasion."
    },
    {
        id: 6,
        image: Voucher6,
        title: "Gift a Voucher and Make Their Day",
        info: "Our gift cards are available in a range of denominations, so you can choose the perfect amount for any occasion."
    },
];


export default function Vouchers() {
    return (
        <>
            <div className="page-section flex justify-center items-center text-center">
                <div className="z-10 flex flex-col justify-center items-center text-center">
                    <h2 className="text-white text-5xl lg:text-8xl GolosText font-semibold">Gift Vouchers</h2>
                    <div className="flex mt-5 text-2xl items-center text-white">
                        <Link href="/" className="hover:text-(--prim)">Home</Link>
                        <i className="ri-arrow-right-wide-line pt-2 px-2"></i>
                        <span>Our Gift Vouchers</span>
                    </div>
                </div>
            </div>
            <div className="px-[8%] lg:px-[16%] py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {VouchersData.map((item, index) => (
                        <div key={index} className="">
                            <div className="flex flex-col mb-4">
                                <div>
                                    <Image 
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full rounded-2xl"
                                    />
                                </div>
                                <div>
                                    <h2 className="text-2xl GolosText font-semibold mt-4">{item.title}</h2>
                                    <p className="mt-3  tracking-wider">{item.info}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Follow />
        </>
    )
}
