import React from 'react';
import { Montserrat } from "next/font/google";
import Image from 'next/image';
import Link from 'next/link';

const montserrat = Montserrat({
    weight: ['500'],
    subsets: ['latin'],
});

const Page = () => {
    return (
        <section className={montserrat.className}>
            <div className="pb-16">
                <div className="flex justify-center items-center cursor-pointer">
                    <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
                        <div className="flex flex-col justify-center items-center space-y-10">
                            <div className="flex flex-col justify-center items-center space-y-2">
                                <h1 className="hover-underline-animation lg:text-3xl xl:text-4xl md:text-3xl sm:text-2xl text-xl uppercase tracking-wider font-semibold leading-7 xl:leading-9 text-gray-800">Shop By Category</h1>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-2 w-full">
                                <ImageWithButton
                                    imageUrl="https://www.youngla.com/cdn/shop/files/YLA_51.15_400x.jpg?v=1685054710"
                                    alt="Shirts"
                                    buttonText="Shirts"
                                />
                                <ImageWithButton
                                    imageUrl="https://www.youngla.com/cdn/shop/products/Rudy_Oct-303_400x.jpg?v=1653085876"
                                    alt="Joggers"
                                    buttonText="Joggers"
                                />
                                <ImageWithButton
                                    imageUrl="https://www.youngla.com/cdn/shop/files/YLAJoestheticsD6-13-14_400x.jpg?v=1686251155"
                                    alt="Tanks"
                                    buttonText="Tanks"
                                />
                                <ImageWithButton
                                    imageUrl="https://www.youngla.com/cdn/shop/files/DSC04016_400x.jpg?v=1686339476"
                                    alt="Shorts"
                                    buttonText="Shorts"
                                />
                                <ImageWithButton
                                    imageUrl="https://www.youngla.com/cdn/shop/files/YLA_12.131_dab200a6-cc10-4446-a360-bb8a04c42a75_400x.jpg?v=1712696754"
                                    alt="Best Sellers"
                                    buttonText="Best Sellers"
                                />
                                <ImageWithButton
                                    imageUrl="https://www.youngla.com/cdn/shop/files/YLA2.238_400x.jpg?v=1712254165"
                                    alt="New Launch"
                                    buttonText="New Launch"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ImageWithButton = ({ imageUrl, alt, buttonText }: { imageUrl: string, alt: string, buttonText: string }) => {
    return (
        <div className="flex flex-col space-y-4 m-4 md:space-y-8 mt-4 md:mt-0">
            <div className="relative group flex justify-center items-center h-full w-full overflow-hidden">
                <Link href={"/Variants"} className='relative group flex justify-center items-center h-full w-full overflow-hidden'>
                    <Image
                        height={1000}
                        width={1000}
                        className="object-center object-cover h-full w-full transform scale-100 transition duration-1000 hover:scale-110"
                        src={imageUrl}
                        alt={alt}
                    />
                    <button className="bottom-4 z-10 checkoutbtn1 absolute text-base font-medium leading-none text-gray-800 py-4 w-44 text-center bg-white">{buttonText}</button>
                </Link>
            </div>
        </div>
    );
};

export default Page;
