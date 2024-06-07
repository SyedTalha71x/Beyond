"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Montserrat } from 'next/font/google'

const Mensection = [
    { id: '1', name: '8038 - TOKYO LONGSLEEVES', category: 'For Him', image: 'https://www.youngla.com/cdn/shop/files/551_black-wash_003_12_12_floor_54f907f3-136a-4e16-b445-dae839c3345b_400x.jpg?v=170197685https://www.youngla.com/cdn/shop/files/8038_black-temple-dragon_003_11_02_jason_ecomm_400x.jpg?v=16994922782', price: '24.34' },
    { id: '2', name: '730 EXPEDITION BACKPACKS', category: 'For Him', image: 'https://www.youngla.com/cdn/shop/products/DSC7795_400x.jpg?v=1709429481', price: '86.23' },
    { id: '3', name: '340 WIFE LOVERS - 3 PACK', category: 'For Him', image: 'https://www.youngla.com/cdn/shop/files/79_400x.jpg?v=1691463313', price: '78.12' },
    { id: '4', name: '134 GAME-TIME SHORTS', category: 'For Him', image: 'https://www.youngla.com/cdn/shop/files/Untitled-3_180c4d3d-ad48-4be4-a54d-32b706de6736_400x.jpg?v=1686157263', price: '100.23' },
    { id: '5', name: '403 ELITE TEES', category: 'For Him', image: 'https://www.youngla.com/cdn/shop/products/YLA4.3.23Soosh-JohnnyD4-12-14_400x.jpg?v=1681319931', price: '34.45' },
    { id: '6', name: '476 - STEALTH COMPRESSION TEES', category: 'For Him', image: 'https://www.youngla.com/cdn/shop/files/476_teal_001_09_02_johnny_ecomm_400x.jpg?v=1707439094', price: '65.34' },
    { id: '7', name: '4038 - LAH CASA SHIRTS', category: 'For Him', image: 'https://www.youngla.com/cdn/shop/files/DSC05971_400x.jpg?v=1712252994', price: '90.23' },
    { id: '8', name: '245 AUTOGRAPH JOGGERS', category: 'For him', image: 'https://www.youngla.com/cdn/shop/files/YLA1.19_400x.jpg?v=1694206131', price: '88.23' },
    { id: '9', name: '2078 - MINIMAL NO CUFF JOGGERS', category: 'For him', image: 'https://www.youngla.com/cdn/shop/files/2078_sky-blue-wash_002_04_23_rudy_ecomm_6e02c4bf-f5a0-4692-bf60-60fd235e1c46_400x.jpg?v=1713225655', price: '88.23' },
    { id: '10', name: '349 EARTHY COLLECTION - WIFE LOVERS 4 PACK', category: 'For him', image: 'https://www.youngla.com/cdn/shop/files/349WifeLovers4-Pack_400x.jpg?v=1689369918', price: '88.23' },
    { id: '11', name: '437 DIGITAL COMPRESSION TEES', category: 'For him', image: 'https://www.youngla.com/cdn/shop/files/YLA_Johnny_May_9___23_20236200_400x.jpg?v=1684358574', price: '88.23' },
    { id: '12', name: '454 NEW GEN COMPRESSION TEE', category: 'For him', image: 'https://www.youngla.com/cdn/shop/products/Lexx_little_July-107_400x.jpg?v=1658953141', price: '88.23' },


]

const montserrat = Montserrat({
    weight: ['500'],
    subsets: ['latin'],
})

const Page = () => {
    const [showFilters, setShowfilters] = useState(false);
    const [check, setCheck] = useState({
        leather: false,
        cotton: false,
        fabric: false,
        crocodile: false,
        wool: false,
        large: false,
        medium: false,
        small: false,
        mini: false,
        luxesignatire: false,
        luxelondon: false,
    });

    const { leather, cotton, fabric, crocodile, wool, large, medium, small, mini, luxesignatire, luxelondon } = check;

    const changeHandler = (e: any) => {
        setCheck({
            ...check,
            [e.target.name]: e.target.checked,
        });
    };

    const applyFilters = (e: any) => {
        setCheck({
            ...check,
            leather: false,
            cotton: false,
            fabric: false,
            crocodile: false,
            wool: false,
            large: false,
            medium: false,
            small: false,
            mini: false,
            luxesignatire: false,
            luxelondon: false,
        });
    };
    function onFilter() {
        window.location.href = '/Filters'
    }
    return (
        <>
            <section className={montserrat.className}>
                <div className="2xl:container 2xl:mx-auto mb-[2%]">
                    <div className=" md:py-12 lg:px-20 md:px-6 py-9 px-4 ">
                        <div className=" flex justify-end items-center">
                            {/*  filters Button (md and plus Screen) */}
                            <button onClick={() => setShowfilters(!showFilters)} className=" cursor-pointer sm:flex hidden hover:bg-gray-700  focus:ring-offset-2 focus:ring-gray-800 py-4 px-6 bg-gray-800 text-base leading-4 font-normal text-white justify-center items-center ">
                                <svg className=" mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 12C7.10457 12 8 11.1046 8 10C8 8.89543 7.10457 8 6 8C4.89543 8 4 8.89543 4 10C4 11.1046 4.89543 12 6 12Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6 4V8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6 12V20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 4V14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 18V20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M18 9C19.1046 9 20 8.10457 20 7C20 5.89543 19.1046 5 18 5C16.8954 5 16 5.89543 16 7C16 8.10457 16.8954 9 18 9Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M18 4V5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M18 9V20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Filters
                            </button>
                        </div>

                        {/* Filters Button (Small Screen)  */}

                        <button onClick={() => setShowfilters(!showFilters)} className="sm:hidden flex justify-center items-center text-center text-[14px] bg-gray-800 text-white py-3 px-8">
                            <svg className=" mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 12C7.10457 12 8 11.1046 8 10C8 8.89543 7.10457 8 6 8C4.89543 8 4 8.89543 4 10C4 11.1046 4.89543 12 6 12Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6 4V8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6 12V20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 4V14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 18V20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M18 9C19.1046 9 20 8.10457 20 7C20 5.89543 19.1046 5 18 5C16.8954 5 16 5.89543 16 7C16 8.10457 16.8954 9 18 9Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M18 4V5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M18 9V20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Filters
                        </button>
                    </div>

                    <div id="filterSection" className={"relative md:py-10 lg:px-20 md:px-6 py-9 px-4 bg-gray-50 w-full " + (showFilters ? "block" : "hidden")}>
                        {/* Cross button Code  */}
                        <div onClick={() => setShowfilters(false)} className=" cursor-pointer absolute right-0 top-0 md:py-10 lg:px-20 md:px-6 py-9 px-4">
                            <svg className=" lg:w-6 lg:h-6 w-4 h-4" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25 1L1 25" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1 1L25 25" stroke="#27272A" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        {/* Colors Section */}
                        <div>
                            <div className=" flex space-x-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 3H15C14.4696 3 13.9609 3.21071 13.5858 3.58579C13.2107 3.96086 13 4.46957 13 5V17C13 18.0609 13.4214 19.0783 14.1716 19.8284C14.9217 20.5786 15.9391 21 17 21C18.0609 21 19.0783 20.5786 19.8284 19.8284C20.5786 19.0783 21 18.0609 21 17V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12.9994 7.35022L10.9994 5.35022C10.6243 4.97528 10.1157 4.76465 9.58539 4.76465C9.05506 4.76465 8.54644 4.97528 8.17139 5.35022L5.34339 8.17822C4.96844 8.55328 4.75781 9.06189 4.75781 9.59222C4.75781 10.1225 4.96844 10.6312 5.34339 11.0062L14.3434 20.0062" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.3 13H5C4.46957 13 3.96086 13.2107 3.58579 13.5858C3.21071 13.9609 3 14.4696 3 15V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H17" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M17 17V17.01" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className=" lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 ">Colors</p>
                            </div>
                            <div className=" md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
                                <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start ">
                                    <div className=" w-4 h-4 rounded-full bg-white shadow"></div>
                                    <p className=" text-base leading-4 text-gray-600 font-normal">White</p>
                                </div>
                                <div className=" flex space-x-2 justify-center items-center">
                                    <div className=" w-4 h-4 rounded-full bg-blue-600 shadow"></div>
                                    <p className=" text-base leading-4 text-gray-600 font-normal">Blue</p>
                                </div>
                                <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-end">
                                    <div className=" w-4 h-4 rounded-full bg-red-600 shadow"></div>
                                    <p className=" text-base leading-4 text-gray-600 font-normal">Red</p>
                                </div>
                                <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start ">
                                    <div className=" w-4 h-4 rounded-full bg-indigo-600 shadow"></div>
                                    <p className=" text-base leading-4 text-gray-600 font-normal">Indigo</p>
                                </div>
                                <div className=" flex space-x-2 justify-center items-center">
                                    <div className=" w-4 h-4 rounded-full bg-black shadow"></div>
                                    <p className=" text-base leading-4 text-gray-600 font-normal">Black</p>
                                </div>
                                <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-end">
                                    <div className=" w-4 h-4 rounded-full bg-purple-600 shadow"></div>
                                    <p className=" text-base leading-4 text-gray-600 font-normal">Purple</p>
                                </div>
                                <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start">
                                    <div className=" w-4 h-4 rounded-full bg-gray-600 shadow"></div>
                                    <p className=" text-base leading-4 text-gray-600 font-normal">Grey</p>
                                </div>
                            </div>
                        </div>

                        <hr className=" bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />

                        {/* Material Section */}
                        <div>
                            <div className=" flex space-x-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.5 16C13.0899 16 16 13.0899 16 9.5C16 5.91015 13.0899 3 9.5 3C5.91015 3 3 5.91015 3 9.5C3 13.0899 5.91015 16 9.5 16Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M19 10H12C10.8954 10 10 10.8954 10 12V19C10 20.1046 10.8954 21 12 21H19C20.1046 21 21 20.1046 21 19V12C21 10.8954 20.1046 10 19 10Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className=" lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 ">Material</p>
                            </div>
                            <div className=" md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
                                <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start">
                                    <input className="w-4 h-4 mr-2" type="checkbox" id="Leather" name="leather" value="Leather" checked={leather} onChange={changeHandler} />
                                    <div className=" inline-block">
                                        <div className=" flex space-x-6 justify-center items-center">
                                            <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Leather">
                                                Luxe
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className=" flex justify-center items-center">
                                    <input className="w-4 h-4 mr-2" type="checkbox" id="Cotton" name="cotton" value="Cotton" checked={cotton} onChange={changeHandler} />
                                    <div className=" inline-block">
                                        <div className=" flex space-x-6 justify-center items-center">
                                            <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Cotton">
                                                Tank Tops
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-end">
                                    <input className="w-4 h-4 mr-2" type="checkbox" id="Fabric" name="fabric" value="Fabric" checked={fabric} onChange={changeHandler} />
                                    <div className=" inline-block">
                                        <div className=" flex space-x-6 justify-center items-center">
                                            <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Fabric">
                                                Fabric
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start">
                                    <input className="w-4 h-4 mr-2" type="checkbox" id="Crocodile" name="crocodile" value="Crocodile" checked={crocodile} onChange={changeHandler} />
                                    <div className=" inline-block">
                                        <div className=" flex space-x-6 justify-center items-center">
                                            <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Crocodile">
                                                Crocodile
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className=" flex justify-center items-center">
                                    <input className="w-4 h-4 mr-2" type="checkbox" id="Wool" name="wool" value="Wool" checked={wool} onChange={changeHandler} />
                                    <div className=" inline-block">
                                        <div className=" flex space-x-6 justify-center items-center">
                                            <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Wool">
                                                Wool
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className=" bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />

                        {/* Size Section */}
                        <div>
                            <div className=" flex space-x-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 5H14" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 7L14 5L12 3" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5 3L3 5L5 7" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M19 10V21" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M17 19L19 21L21 19" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M21 12L19 10L17 12" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 10H5C3.89543 10 3 10.8954 3 12V19C3 20.1046 3.89543 21 5 21H12C13.1046 21 14 20.1046 14 19V12C14 10.8954 13.1046 10 12 10Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className="  lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 ">Size</p>
                            </div>
                            <div className=" md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
                                <div className=" flex md:justify-center md:items-center items-center justify-start ">
                                    <input className="w-4 h-4 mr-2" type="checkbox" id="Large" name="large" value="Large" checked={large} onChange={changeHandler} />
                                    <div className=" inline-block">
                                        <div className=" flex space-x-6 justify-center items-center">
                                            <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Large">
                                                Large
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className=" flex justify-center items-center ">
                                    <input className="w-4 h-4 mr-2" type="checkbox" id="Medium" name="medium" value="Medium" checked={medium} onChange={changeHandler} />
                                    <div className=" inline-block">
                                        <div className=" flex space-x-6 justify-center items-center">
                                            <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Medium">
                                                Medium
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className=" flex md:justify-center md:items-center items-center justify-end ">
                                    <input className="w-4 h-4 mr-2" type="checkbox" id="Small" name="small" value="Small" checked={small} onChange={changeHandler} />
                                    <div className=" inline-block">
                                        <div className=" flex space-x-6 justify-center items-center">
                                            <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Small">
                                                Small
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className=" flex md:justify-center md:items-center items-center justify-start ">
                                    <input className="w-4 h-4 mr-2" type="checkbox" id="Mini" name="mini" value="Mini" checked={mini} onChange={changeHandler} />
                                    <div className=" inline-block">
                                        <div className=" flex space-x-6 justify-center items-center">
                                            <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Mini">
                                                Mini
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className=" bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />

                        {/* Collection Section */}

                        <div>
                            <div className=" flex space-x-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.8">
                                        <path d="M9 4H5C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9V5C10 4.44772 9.55228 4 9 4Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M9 14H5C4.44772 14 4 14.4477 4 15V19C4 19.5523 4.44772 20 5 20H9C9.55228 20 10 19.5523 10 19V15C10 14.4477 9.55228 14 9 14Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M19 14H15C14.4477 14 14 14.4477 14 15V19C14 19.5523 14.4477 20 15 20H19C19.5523 20 20 19.5523 20 19V15C20 14.4477 19.5523 14 19 14Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M14 7H20" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M17 4V10" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                </svg>
                                <p className=" lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 ">Collection</p>
                            </div>
                            <div className=" flex mt-8 space-x-8">
                                <div className=" flex justify-center items-center">
                                    <input className="w-4 h-4 mr-2" type="checkbox" id="LS" name="luxesignatire" value="LS" checked={luxesignatire} onChange={changeHandler} />
                                    <div className=" inline-block">
                                        <div className=" flex space-x-6 justify-center items-center">
                                            <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="LS">
                                                Luxe signature
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className=" flex justify-center items-center">
                                    <input className="w-4 h-4 mr-2" type="checkbox" id="LxL" name="luxelondon" checked={luxelondon} onChange={changeHandler} value="LxL" />
                                    <div className=" inline-block">
                                        <div className=" flex space-x-6 justify-center items-center">
                                            <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="LxL">
                                                Luxe x London
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="px-0 mt-10 w-full md:w-auto md:mt-0 md:absolute md:right-0 md:bottom-0 md:py-10 lg:px-20 md:px-6">
                            <button onClick={applyFilters} className="w-full hover:bg-gray-700 focus:ring focus:ring-offset-2 focus:ring-gray-800 text-base leading-4 font-medium py-4 px-10 text-white bg-gray-800">
                                Apply Filter
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className={montserrat.className}>
                <section className="text-gray-600 body-font text-center" id='menssection'>
                    <div className="container px-5 mx-auto">
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
                <section className='pagination flex justify-center items-center mb-10 mt-10'>

                    <nav aria-label="Page navigation example">
                        <ul className="flex items-center -space-x-px h-10 text-base">
                            <li>
                                <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <span className="sr-only">Previous</span>
                                    <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                            </li>
                            <li>
                                <a href="#" aria-current="page" className="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <span className="sr-only">Next</span>
                                    <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </nav>

                </section>
            </section>
        </>
    )
}

export default Page