import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '../app/Header/page'
import Head from "next/head";
import Footer from '../app/Footer/page'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clothing brand",
  description: "Beyoung is a lifestyle clothing brand which delievers all over the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
