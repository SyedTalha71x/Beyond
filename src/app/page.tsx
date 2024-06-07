import Image from "next/image";
import Homepage from '../app/Homepage/page'
import Productsection from '../app/Productsection/page'
import Categories from '../app/Categories/page'
import Slider from '../app/Slider/page'
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.jpg" sizes="any" />
      </Head>
      <Homepage />
      <Productsection />
      <Slider />
      <Categories />
    </>
  );
}
