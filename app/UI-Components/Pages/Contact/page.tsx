import Link from "next/link";
import Follow from "../../Index/Follow/page";


export default function Contact() {
    return (
        <>
            <div className="px-[8%] lg:px-[16%] py-20">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-5 relative">
                    <div className="w-full lg:w-1/2">
                        <h2 className="GolosText font-bold text-5xl mb-4">DISCOVER US</h2>
                        <p className="GolosText  underline text-2xl">Fashique is here to help you;</p>
                        <p className="GolosText mt-3 text-2xl">Our experts are available to answer any questions you might have. We’ve got the answers.</p>

                        <h2 className="GolosText mt-10  text-2xl font-semibold">Call Us</h2>
                        <p className="GolosText text-xl">+01-123-456-7890</p>
                        <p className="GolosText text-xl">+01-123-456-7890</p> 
                    </div>
                    <div className="w-full lg:w-1/2 contact-form bg-black text-white p-10 ">

                        <div className="space-y-5">
                            <div className="">
                                <label className="Lufga">Username</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-white hover:border-(--prim) rounded-lg focus:outline-none"
                                    placeholder="Username"
                                />
                            </div>

                            <div className="">
                                <label className="Lufga">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 border border-white hover:border-(--prim) rounded-lg focus:outline-none"
                                    placeholder="Email Address"
                                />
                            </div>

                            <div className="">
                                <label className="Lufga">Phone Number</label>
                                <input
                                    type="number"
                                    className="w-full px-4 py-3 border border-white hover:border-(--prim) rounded-lg focus:outline-none"
                                    placeholder="Phone Number"
                                />
                            </div>
                            <div className="">
                                <label className="Lufga">Massage</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 border border-white hover:border-(--prim) rounded-lg focus:outline-none"
                                    placeholder="Massage"
                                />
                            </div>
                            <div className="flex items-center justify-center gap-2 mt-5">
                                <button className="btn w-full bg-(--prim) text-black GolosText font-semibold cursor-pointer GolosText px-4 py-2 rounded-md transition-all duration-300">
                                    SUBMIT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="map h-[600px] pb-20">
                <iframe className="w-full rounded-2xl brightness-100 grayscale"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118106.58331783483!2d73.09068536311617!3d22.322240635404626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1762840663095!5m2!1sen!2sin"
                    width="100%" height="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    )
}
