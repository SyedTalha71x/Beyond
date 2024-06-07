import React from 'react'
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
    weight: ['500'],
    subsets: ['latin'],
})

const Page = () => {
    return (
        <div className={montserrat.className}>
            <section className="about text-gray-600 body-font">
                <div className="container mx-auto w-[90%] flex flex-col px-5 py-24 justify-center items-center">
                    <h1 className="title-font sm:text-2xl text-2xl mb-6 font-medium ">BEYOND STORY</h1>
                    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://cdn.shopify.com/s/files/1/1775/6429/files/YLA_Group_Photo-6_600x600.jpg?v=1651596188" />
                    <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                        <h1 className="title-font sm:text-3xl text-3xl mb-4 font-medium ">OUR STORY</h1>
                        <p className="mb-8 leading-relaxed uppercase w-full">In the dynamic realm of digital commerce, Beyond emerges not just as another online store, but as a transformative force redefining the very essence of shopping. It stands as a testament to the boundless possibilities of technology when coupled with a profound vision for societal good. Beyond isn't just about transactions; it's about connections—connecting individuals with products that resonate with their values, connecting communities through shared missions, and ultimately connecting humanity with a brighter future. As customers navigate the digital landscape seeking more than just products, Beyond stands ready to guide them on a journey of discovery, purpose, and fulfillment..</p>
                    </div>
                    <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                        <h1 className="title-font sm:text-3xl text-3xl mb-4 font-medium ">OUR MISSION</h1>
                        <p className="mb-8 leading-relaxed uppercase w-full">At Beyond, our mission is simple yet profound: to elevate ecommerce beyond the realm of mere transactions into a platform for meaningful connections and positive change. We envision a world where every purchase contributes not only to personal satisfaction but also to collective progress. Through our unwavering commitment to this mission, we strive to inspire and empower individuals to make conscious choices that resonate with their values and contribute to a better world for all.</p>
                    </div>
                    <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                        <h1 className="title-font sm:text-3xl text-3xl mb-4 font-medium ">OUR COMMITMENT</h1>
                        <p className="mb-8 leading-relaxed uppercase w-full">Sustainability lies at the heart of everything we do at Beyond. From the products we showcase to the way we operate our business, we are deeply committed to minimizing our environmental footprint and promoting ethical practices throughout our supply chain. We believe that sustainable commerce isn't just a responsibility; it's an opportunity to lead by example and pave the way for a more sustainable future. Through transparency, innovation, and collaboration, we aim to set new standards for environmental stewardship within the ecommerce industry..</p>
                    </div>
                </div>
            </section></div>
    )
}

export default Page