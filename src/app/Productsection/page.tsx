"use client";
import React, { useState } from 'react'
import { Montserrat } from "next/font/google";
import Image from 'next/image';
import Link from 'next/link';

const Mensection = [
    { id: '1', name: '8038 - TOKYO LONGSLEEVES', category: 'For Him', image: 'https://www.youngla.com/cdn/shop/files/551_black-wash_003_12_12_floor_54f907f3-136a-4e16-b445-dae839c3345b_400x.jpg?v=170197685https://www.youngla.com/cdn/shop/files/8038_black-temple-dragon_003_11_02_jason_ecomm_400x.jpg?v=16994922782', price: '24.34' },
    { id: '2', name: '730 EXPEDITION BACKPACKS', category: 'For Him', image: 'https://www.youngla.com/cdn/shop/products/DSC7795_400x.jpg?v=1709429481', price: '86.23' },
    { id: '3', name: '340 WIFE LOVERS - 3 PACK', category: 'For Him', image: 'https://www.youngla.com/cdn/shop/files/79_400x.jpg?v=1691463313', price: '78.12' },
    { id: '4', name: '134 GAME-TIME SHORTS', category: 'For Him', image: 'https://www.youngla.com/cdn/shop/files/Untitled-3_180c4d3d-ad48-4be4-a54d-32b706de6736_400x.jpg?v=1686157263', price: '100.23' },
    { id: '5', name: '403 ELITE TEES', category: 'For Him', image: 'https://www.youngla.com/cdn/shop/products/YLA4.3.23Soosh-JohnnyD4-12-14_400x.jpg?v=1681319931', price: '34.45' },
    { id: '6', name: '476 - STEALTH COMPRESSION TEES', category: 'For Him', image: 'https://www.youngla.com/cdn/shop/files/476_teal_001_09_02_johnny_ecomm_400x.jpg?v=1707439094', price: '65.34' },
    { id: '7', name: '4038 - LAH CASA SHIRTS', category: 'For Him', image: 'https://www.youngla.com/cdn/shop/files/DSC05971_400x.jpg?v=1712252994', price: '90.23' },
    { id: '8', name: '245 AUTOGRAPH JOGGERS', category: 'For him', image: 'https://www.youngla.com/cdn/shop/files/YLA1.19_400x.jpg?v=1694206131', price: '88.23' }
]

const Womensection = [
    { id: '1', name: 'W232 - URBAN CUFF JOGGER', category: 'For Her', image: 'https://www.youngla.com/cdn/shop/files/ListingPhoto-2023-10-29T140817.814_400x.png?v=1712769576', price: '24.34' },
    { id: '2', name: 'W605 - URBAN CREW SOCK 3 PACK', category: 'For Her', image: 'https://www.youngla.com/cdn/shop/files/w605_urban_001_11_21_floor_400x.jpg?v=1699902773', price: '86.23' },
    { id: '3', name: 'W612 WATER BOTTLE MINI', category: 'For Her', image: 'https://www.youngla.com/cdn/shop/files/03_28_24_YLA_Her_Floor___SM0090_1_400x.jpg?v=1710870412', price: '78.12' },
    { id: '4', name: 'W520 - URBAN LAYER HOODIE', category: 'For Her', image: 'https://www.youngla.com/cdn/shop/files/ListingPhoto-2023-10-29T140626.190_400x.png?v=1712609455', price: '100.23' },
    { id: '5', name: 'W437 - URBAN LAYER TEE', category: 'For Her', image: 'https://www.youngla.com/cdn/shop/files/04_05_24_YLA_HER_Ariel_Restock_eComm0135_400x.jpg?v=1712772770', price: '34.45' },
    { id: '6', name: 'W229 - URBAN STRAIGHT LEG JOGGER', category: 'For Her', image: 'https://www.youngla.com/cdn/shop/files/ListingPhoto-2023-11-13T110621.914_400x.png?v=1712771244', price: '65.34' },
    { id: '7', name: 'W608 - CURVE SCRUNCHIE 3 PACK', category: 'For Her', image: 'https://www.youngla.com/cdn/shop/files/w608_boss_001_11_21_floor_400x.jpg?v=1699768491', price: '90.23' },
    { id: '8', name: 'W901 - URBAN BEANIE', category: 'For Her', image: 'https://www.youngla.com/cdn/shop/files/w901_raven_001_11_21_floor_400x.jpg?v=1710181169', price: '88.23' }

]

const montserrat = Montserrat({
    weight: ['500'],
    subsets: ['latin'],
})

const Page = () => {
    const [isForHimVisible, setIsForHimVisible] = useState(true);
    const [isForHerVisible, setIsForHerVisible] = useState(false);

    const handleForHimClick = () => {
        setIsForHimVisible(true);
        setIsForHerVisible(false);
        // document.body.style.transition = '0.4s ease-in-out'
    };

    const handleForHerClick = () => {
        setIsForHerVisible(true);
        setIsForHimVisible(false);
        // document.body.style.transition = '0.4s ease-in-out'
    };


    return (
        <>
            <section className='mt-14'>
                <div className='flex justify-center items-center'>
                    <div className={montserrat.className}>
                        <div className='flex items-center gap-8 cursor-pointer'>
                            <button onClick={handleForHimClick} className='hover-underline-animation lg:text-[23px] md:text-[23px] sm:text-[20px] text-[18px] uppercase tracking-wider'>
                                For Men
                            </button>
                            <button onClick={handleForHerClick} className='hover-underline-animation lg:text-[23px] md:text-[23px] sm:text-[20px] text-[18px] uppercase tracking-wider'>
                                For Women
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className={montserrat.className}>
                <section className="text-gray-600 body-font text-center" id='menssection' style={{ display: isForHimVisible ? 'block' : 'none' }}>
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -m-4 gridcontent">
                            {Mensection.map((item) => (
                                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={item.id}>
                                    <Link href={`/Products/${item.id}`} passHref>
                                        <div className="block relative h-53 rounded overflow-hidden">
                                            <Image height={400} width={400} alt="ecommerce" className="object-cover object-center  w-full h-full block shadow-xl" src={item.image} />
                                        </div>
                                    </Link>
                                    <div className="mt-4">
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.category}</h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium">{item.name}</h2>
                                        <p className="mt-1">${item.price}</p>
                                        <div className="flex mt-2 justify-center flex-col gap-2 items-center border-b-2 border-gray-100">
                                            <div className="flex">
                                                <button className="w-4 h-4 focus:outline-none"></button>
                                                <button className="ml-1 bg-gray-700 w-4 h-4 focus:outline-none"></button>
                                                <button className="ml-1 bg-indigo-500 w-4 h-4 focus:outline-none"></button>
                                                <button className="ml-1 bg-black w-4 h-4 focus:outline-none"></button>
                                                <button className="ml-1 bg-red-700 w-4 h-4 focus:outline-none"></button>
                                                <button className="ml-1 bg-orange-400 w-4 h-4 focus:outline-none"></button>
                                                <button className="ml-1 bg-sky-400 w-4 h-4 focus:outline-none"></button>
                                            </div>
                                            <div className="flex items-center justify-center ">
                                                <svg className="w-4 h-4 text-black ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg className="w-4 h-4 text-black ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg className="w-4 h-4 text-black ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg className="w-4 h-4 text-black ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </section>
                <section className="text-gray-600 body-font text-center" id='womensection' style={{ display: isForHerVisible ? 'block' : 'none' }}>
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            {Womensection.map((item) => (
                                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={item.id}>
                                    <Link href={`/WomensProduct/${item.id}`} passHref>
                                        <div className="block relative h-53 rounded overflow-hidden">
                                            <Image height={400} width={400} alt="ecommerce" className="object-cover object-center  w-full h-full block shadow-xl" src={item.image} />
                                        </div>
                                    </Link>
                                    <div className="mt-4">
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.category}</h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium">{item.name}</h2>
                                        <p className="mt-1">${item.price}</p>
                                        <div className="flex mt-2 justify-center flex-col gap-2 items-center border-b-2 border-gray-100">
                                            <div className="flex">
                                                <button className="w-4 h-4 focus:outline-none"></button>
                                                <button className="ml-1 bg-gray-700 w-4 h-4 focus:outline-none"></button>
                                                <button className="ml-1 bg-indigo-500 w-4 h-4 focus:outline-none"></button>
                                                <button className="ml-1 bg-black w-4 h-4 focus:outline-none"></button>
                                                <button className="ml-1 bg-red-700 w-4 h-4 focus:outline-none"></button>
                                                <button className="ml-1 bg-orange-400 w-4 h-4 focus:outline-none"></button>
                                                <button className="ml-1 bg-sky-400 w-4 h-4 focus:outline-none"></button>
                                            </div>
                                            <div className="flex items-center justify-center ">
                                                <svg className="w-4 h-4 text-black ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg className="w-4 h-4 text-black ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg className="w-4 h-4 text-black ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg className="w-4 h-4 text-black ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}


                        </div>
                    </div>
                </section>
                <section className='flex justify-center items-center mb-20'>
                    <button className='bg-black checkoutbtn responsivebtn text-gray-200 uppercase py-3 text-sm px-12 text-center tracking-wider'>
                        <Link href={"/Variants"}>
                            Checkout for purchase
                        </Link>
                    </button>
                </section>
            </section>
        </>
    )
}

export default Page