"use client";
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    weight: ['400', '500'],
    subsets: ['latin'],
})

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

const Page = ({ params }: { params: { ProductId: string } }) => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const fetchproducts = Womensection.find(item => item.id === params.ProductId);

    return (
        <section className={montserrat.className}>
            <div className="mt-[5%] pb-[10%]">
                <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
                    <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="w-full lg:sticky top-0 sm:flex gap-2">
                            <div className="sm:space-y-3 sm:mr-3 w-14 max-sm:flex max-sm:mb-4 max-sm:gap-4">
                                <Image height={400} width={600} src="https://www.youngla.com/cdn/shop/files/ListingPhoto-2023-10-29T140817.814_400x.png?v=1712769576" alt="Product1" className="w-full cursor-pointer outline" />
                                <Image height={400} width={600} src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e14330cb-6673-42ae-b4f1-074adbd6b68a/everyday-plus-cushioned-training-no-show-socks-6-pairs-XXM9xm.png" alt="Product2" className="w-full cursor-pointer" />
                                <Image height={400} width={600} src="https://www.youngla.com/cdn/shop/files/ListingPhoto-2023-11-13T110621.914_400x.png?v=1712771244" alt="Product3" className="w-full cursor-pointer" />
                                <Image height={400} width={600} src="https://www.youngla.com/cdn/shop/files/03_28_24_YLA_Her_Floor___SM0090_1_400x.jpg?v=1710870412" alt="Product4" className="w-full cursor-pointer" />
                            </div>
                            <Image height={400} width={600} src={fetchproducts?.image || ''} alt="Product" className="w-4/5 object-cover object-center" />
                        </div>
                        <div>
                            <h1 className='text-sm text-gray-600'>{fetchproducts?.category}</h1>
                            <h2 className="text-2xl font-extrabold text-gray-800">{fetchproducts?.name}</h2>
                            <div className="flex mt-4">
                                <svg className="w-4 fill-gray-800" viewBox="0 0 14 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-4 fill-gray-800" viewBox="0 0 14 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-4 fill-gray-800" viewBox="0 0 14 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-4 fill-gray-800" viewBox="0 0 14 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                            </div>
                            <div className="mt-4">
                                <h2 className='text-[16px] mt-5 font-bold'>Description</h2>
                                <ul className="space-y-3 list-disc mt-2 text-[15px] text-gray-800">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio corrupti tempore fuga aperiam ullam, reiciendis neque iure itaque doloribus ex nostrum minus molestias amet culpa, modi cumque, id quod molestiae ratione iusto eius est natus accusamus. Praesentium ipsum ut sapiente reiciendis aut et eum saepe nesciunt odit unde quibusdam fugiat ea, ipsam, nam suscipit at nemo dolorum perferendis? In fugit, expedita vel asperiores nisi minus perferendis beatae explicabo labore numquam, sit, architecto corrupti? Recusandae repudiandae accusamus, inventore dolores ipsam velit.

                                </ul>
                            </div>
                            <div className="flex flex-wrap gap-4 mt-4">
                                <p className="text-gray-800 text-xl font-bold">${fetchproducts?.price}</p>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-lg font-bold text-gray-800">Sizes</h3>
                                <div className="flex flex-wrap gap-4 mt-4">
                                    <button type="button" className="w-16 h-12 border-2 hover:bg-slate-50 font-bold text-sm  flex items-center justify-center shrink-0">SM</button>
                                    <button type="button" className="w-16 h-12 border-2 hover:bg-slate-50 border-gray-800 font-bold text-sm  flex items-center justify-center shrink-0">MD</button>
                                    <button type="button" className="w-16 h-12 border-2 hover:bg-slate-50 font-bold text-sm  flex items-center justify-center shrink-0">LG</button>
                                    <button type="button" className="w-16 h-12 border-2 hover:bg-slate-50 font-bold text-sm  flex items-center justify-center shrink-0">XL</button>
                                </div>
                                <div className='mt-2'>
                                    <h3 className="text-lg font-bold text-gray-800">Color</h3>
                                    <div className="flex items-center gap-1 mt-2">
                                        <button className="ml-1 bg-gray-700 w-7 h-7 focus:outline-none"></button>
                                        <button className="ml-1 bg-indigo-500 w-7 h-7 focus:outline-none"></button>
                                        <button className="ml-1 bg-black w-7 h-7 focus:outline-none"></button>
                                        <button className="ml-1 bg-red-700 w-7 h-7 focus:outline-none"></button>
                                        <button className="ml-1 bg-gray-700 w-7 h-7 focus:outline-none"></button>
                                        <button className="ml-1 bg-yellow-700 w-7 h-7 focus:outline-none"></button>

                                    </div>
                                </div>
                                <button type="button" className="w-full mt-6 px-4 py-3 bg-black  text-white  checkoutbtn">Add to cart</button>
                                <button type="button" className="w-full mt-4 px-4 py-3 bg-black  text-white  checkoutbtn"><Link href={"/Checkout"}>Buy Now</Link></button>
                            </div>


                            <div className="mt-8 max-w-md">
                                <h3 className="text-lg font-bold text-gray-800">Reviews (10)</h3>
                                <div className="space-y-3 mt-4">
                                    <div className="flex items-center">
                                        <p className="text-sm text-gray-800 font-bold">5.0</p>
                                        <svg className="w-4 fill-gray-800 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <div className="bg-gray-300 rounded w-full h-2 ml-3">
                                            <div className="w-2/3 h-full rounded bg-gray-800"></div>
                                        </div>
                                        <p className="text-sm text-gray-800 font-bold ml-3">66%</p>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="text-sm text-gray-800 font-bold">4.0</p>
                                        <svg className="w-4 fill-gray-800 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <div className="bg-gray-300 rounded w-full h-2 ml-3">
                                            <div className="w-1/3 h-full rounded bg-gray-800"></div>
                                        </div>
                                        <p className="text-sm text-gray-800 font-bold ml-3">33%</p>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="text-sm text-gray-800 font-bold">3.0</p>
                                        <svg className="w-4 fill-gray-800 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <div className="bg-gray-300 rounded w-full h-2 ml-3">
                                            <div className="w-1/6 h-full rounded bg-gray-800"></div>
                                        </div>
                                        <p className="text-sm text-gray-800 font-bold ml-3">16%</p>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="text-sm text-gray-800 font-bold">2.0</p>
                                        <svg className="w-4 fill-gray-800 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <div className="bg-gray-300 rounded w-full h-2 ml-3">
                                            <div className="w-1/12 h-full rounded bg-gray-800"></div>
                                        </div>
                                        <p className="text-sm text-gray-800 font-bold ml-3">8%</p>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="text-sm text-gray-800 font-bold">1.0</p>
                                        <svg className="w-4 fill-gray-800 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <div className="bg-gray-300 rounded w-full h-2 ml-3">
                                            <div className="w-[6%] h-full rounded bg-gray-800"></div>
                                        </div>
                                        <p className="text-sm text-gray-800 font-bold ml-3">6%</p>
                                    </div>
                                </div>
                                <button type="button" className="w-full mt-8 px-4 py-2 bg-transparent border-2 border-gray-800 text-gray-800">Read all reviews</button>
                            </div>
                            <div className='mt-4'>
                                <div className="border-t border-b py-4 mt-7 border-gray-200">
                                    <div onClick={() => setShow(!show)} className="flex justify-between items-center cursor-pointer">
                                        <p className="text-base leading-4 text-gray-800">Shipping and returns</p>
                                        <button
                                            className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                                            aria-label="show or hide"
                                        >
                                            <svg className={"transform " + (show ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className={"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " + (show ? "block" : "hidden")} id="sect">
                                        You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are nonrefundable
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="border-b py-4 border-gray-200">
                                    <div onClick={() => setShow2(!show2)} className="flex justify-between items-center cursor-pointer">
                                        <p className="text-base leading-4 text-gray-800">Contact us</p>
                                        <button
                                            className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                                            aria-label="show or hide"
                                        >
                                            <svg className={"transform " + (show2 ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className={"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " + (show2 ? "block" : "hidden")} id="sect">
                                        If you have any questions on how to return your item to us, contact us.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Page