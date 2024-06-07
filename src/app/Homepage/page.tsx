"use client";
import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    weight: ['400', '500'],
    subsets: ['latin'],
})


const Page = () => {
    const ref = useRef(null);

    const useinview = useInView(ref, { once: true });

    const maincontrols = useAnimation();

    useEffect(() => {
        if (useinview) {
            maincontrols.start("visible");
        }
    }, [useinview]);
    const handleClick = () => {
        window.location.href = './#menssection'
    }
    const handleNewArrival = () => {
        window.location.href = './#newarrival'
    }
    return (
        <>
            <div className={montserrat.className}>
                <section>
                    <div className="bg-neutral-900">

                        <div
                            className="max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24">
                            <h1 className="font-semibold text-white text-4xl md:text-6xl">
                                <div className={montserrat.className}>
                                    <span className="text-[#ff0] uppercase">Beyond Era: </span>  Transforming ideas into reality
                                </div>
                            </h1>
                            <div className="max-w-4xl">
                                <p className="mt-5 text-neutral-400 capitalize text-lg">
                                    Our commitment to our customers begins before our product hits the market. Since we prioritize customer satisfaction, we spend at least two months testing the clothing before releasing it. Our aim is to create long-lasting relationships with our customers. Keeping our customers fulfilled and happy is our biggest commitment, and we take pride in giving the best service possible
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative overflow-hidden pt-4 bg-neutral-900">
                        <svg className="absolute -bottom-20 start-1/2 w-[1900px] transform -translate-x-1/2" width="2745" height="488" viewBox="0 0 2745 488" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* SVG paths */}
                        </svg>

                        <div className="relative z-10">
                            <div className="max-w-5xl px-4 xl:px-0 mx-auto">
                                <div className="mb-4">
                                    <div className={montserrat.className}>
                                        <h2 className="text-neutral-300">Checkout our new arrivals, boost your zone!</h2>
                                    </div>
                                </div>
                                <div className={montserrat.className}>
                                    <div className="flex justify-end mb-4 gap-3 text-white">
                                        <button onClick={handleClick} type="button" className="snapbtn text-white uppercase bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-sm text-[12px] px-8 py-3 homebtn text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Shop Now</button>
                                        <button onClick={handleNewArrival} type="button" className="snapbtn text-white uppercase bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-sm text-[12px] px-8 py-3 homebtn text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">New Arrivals</button>
                                        {/* Repeat for other SVG components */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Page