"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/types";

export default function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false);
  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };
  return (
    <Link
      href={`/products/${product.slug}`}
      className="bg-white overflow-hidden transition-all duration-300 flex flex-col h-full min-h-[350px] md:min-h-[450px] cursor-pointer block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative w-full flex-1 flex items-center justify-center min-h-[220px] md:min-h-[350px]">
        <div className="w-full h-full flex items-center justify-center border border-[0.5px] border-[#858585] bg-white">
          <Image
            src={product.image}
            alt={product.name}
            className="object-contain mx-auto transition-transform duration-300 w-full h-full"
            width={350}
            height={350}
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              transform: hovered ? "scale(1.05)" : "scale(1)",
            }}
          />
        </div>
        <div
          className={`absolute bottom-4 left-0 right-0 flex justify-center gap-3 transition-all duration-300 ${
            hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            className="text-black p-3 shadow-md hover:bg-[#920804] transition-colors bg-white rounded"
            title="View"
            onClick={handleButtonClick}
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="3" />
              <path d="M2.05 12a9.94 9.94 0 0 1 19.9 0 9.94 9.94 0 0 1-19.9 0Z" />
            </svg>
          </button>
          <button
            className="text-black p-3 shadow-md hover:bg-[#920804] transition-colors bg-white rounded"
            title="Add to Cart"
            onClick={handleButtonClick}
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h7.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </button>
          <button
            className="text-black p-3 shadow-md hover:bg-[#920804] transition-colors bg-white rounded"
            title="Wishlist"
            onClick={handleButtonClick}
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="p-5 text-center mt-auto">
        <h3 className="text-xl font-heading font-bold text-gray-900 mb-1 hover:underline">{product.name}</h3>
      </div>
    </Link>
  );
} 