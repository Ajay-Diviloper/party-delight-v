"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Banner from '@/components/Banner';

const categories = [
  { title: 'Cupcake', img: '/images/bg1.jpg', number: '01.' },
  { title: 'Pastry', img: '/images/bg2.jpg', number: '02.' },
  { title: 'Muffin', img: '/images/bg3.jpg', number: '03.' },
  { title: 'Waffle', img: '/images/bg4.jpg', number: '04.' },
  { title: 'Tart', img: '/images/bg6.jpg', number: '05.' },
];

export default function CategoryPage() {
  return (
    <>
      <Banner title="Product Categories" subtitle="Explore our delicious product categories and find your perfect treat" />
      <div className="py-16 px-4 max-w-9xl mx-auto container">
        <div className="text-center mb-12">
          <h1 className="text-[40px] font-heading text-center mb-1 tracking-wide">
            PRODUCT CATEGORIES
          </h1>
          <p className="text-center text-[#858585] mb-4 max-w-2xl mx-auto text-lg font-sans font-light">
            Explore our delicious product categories and find your perfect treat
          </p>
          <div className="mb-8">
            <Link
              href="/products"
              className="inline-block text-[#bc8157] hover:text-[#a06e4c] transition-colors font-heading"
            >
              ← Back to All Products
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full min-h-[70vh]">
          {categories.map((cat, idx) => (
            <Link
              key={cat.title}
              href={`/category/${encodeURIComponent(cat.title.toLowerCase())}`}
              className="relative group h-[40vh] md:h-[45vh] flex items-end justify-start overflow-hidden shadow-none cursor-pointer"
            >
              <Image
                src={cat.img}
                alt={cat.title}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2 brightness-75"
                priority={idx === 0}
              />
              <div className="absolute inset-0 bg-black/40" />
              <span className="absolute top-4 right-6 sm:top-6 sm:right-8 text-xl sm:text-2xl md:text-3xl font-heading font-light text-white opacity-80 select-none">
                {cat.number}
              </span>
              <div className="relative z-10 text-white flex flex-col justify-end h-full w-full p-6 sm:p-8">
                <span className="pl-8 text-5xl sm:text-5xl mb-12 md:text-5xl font-heading text-white drop-shadow-lg text-left">{cat.title}</span>
                <span className="pl-8 mt-2 inline-block text-white transition-colors text-base sm:text-lg font-sans font-medium w-fit mb-7">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}