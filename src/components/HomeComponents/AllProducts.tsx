"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getAllProducts } from "@/lib/products-data";
import { Product } from "@/lib/types";

// ---------------------------------------------------------------------------
// Data source for savoury categories (you can move this to a separate file)
// ---------------------------------------------------------------------------
const moreCategories = [
  { title: "Croissants",         img: "/images/products-category-images/croissants.webp",         number: "07.", link: "/products" },
  { title: "Grilled Sandwiches", img: "/images/products-category-images/grilled-sandwiches.webp", number: "08.", link: "/products" },
  { title: "Quiches",            img: "/images/products-category-images/quiches.webp",            number: "09.", link: "/products" },
  { title: "Wraps",              img: "/images/products-category-images/wraps.webp",              number: "10.", link: "/products" },
  { title: "Danish Pastries",    img: "/images/products-category-images/danish-pastries.webp",    number: "11.", link: "/products" },
  { title: "Specials",           img: "/images/products-category-images/specials.webp",           number: "12.", link: "/products" },
  { title: "Munchables",         img: "/images/products-category-images/munchables.webp",         number: "13.", link: "/products" },
];

// Helper to slugify tab values
const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/\s*&\s*/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

// Shape the category list the component uses
const categoryList = moreCategories.map((c) => ({
  name: c.title, // what the tab shows
  slug: slugify(c.title), // what we keep in state
  ...c,
}));

const AllProducts = () => {
  // No "All" tab anymore → selectedCategory should be a real category slug
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  // Load products (excluding featured)
  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getAllProducts();
      setProducts(allProducts.filter((p) => !p.isFeatured));
    };
    fetchProducts();
  }, []);

  // Only include categories that actually have products
  const categoriesWithProducts = useMemo(() => {
    return categoryList.filter((cat) =>
      products.some((p) => p.category === cat.name)
    );
  }, [products]);

  // Pick first available category after products load (since there's no "All")
  useEffect(() => {
    if (!selectedCategory && categoriesWithProducts.length > 0) {
      setSelectedCategory(categoriesWithProducts[0].slug);
    }
  }, [categoriesWithProducts, selectedCategory]);

  // Filter products by selected tab
  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return [];
    const cat = categoryList.find((c) => c.slug === selectedCategory);
    if (!cat) return [];
    return products.filter((p) => p.category === cat.name);
  }, [products, selectedCategory]);

  // Show up to 8 in this section
  const displayedProducts = filteredProducts.slice(0, 8);

  return (
    <div className="px-2 sm:px-4 max-w-9xl mx-auto container py-8 sm:py-16">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="uppercase text-2xl sm:text-[40px] font-heading text-center mb-1 tracking-wide">
          Taste Our Savoury Creations
        </h2>
        <p className="text-center text-[#858585] mb-4 max-w-4xl mx-auto text-base sm:text-lg font-sans font-light">
          Explore a variety of freshly baked savoury treats, crafted with rich flavours and premium ingredients.
        </p>

        {/* Tabs (no "All" — last item is a View More link) */}
        <div className="flex justify-center items-center gap-1 sm:gap-2 mb-8 sm:mb-12 flex-wrap">
          {categoriesWithProducts.slice(0, 6).map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-lg font-heading transition-colors duration-200 rounded
                ${
                  selectedCategory === cat.slug
                    ? "bg-[#ff3131] text-white font-bold"
                    : "text-[#858585] font-normal hover:text-[#ff3131] hover:bg-[#f5eaea]"
                }`}
            >
              {cat.name}
            </button>
          ))}

          {/* View More tab → link to /products */}
          <Link
            href="/products"
            className="px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-lg font-heading rounded text-[#ff3131] font-bold hover:underline ml-2"
          >
            View More
          </Link>
        </div>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
        {displayedProducts.map((product, idx) => (
          <Card key={idx} product={product} />
        ))}
      </div>
    </div>
  );
};

// Card component (consistent image heights + hover overlay)
const Card = ({ product }: { product: Product }) => {
  const [hovered, setHovered] = useState(false);

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Link
      href={`/products/${product.slug}`}
      className="bg-white overflow-hidden transition-all duration-300 flex flex-col h-full cursor-pointer block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container with fixed square aspect ratio */}
      <div className="relative w-full aspect-square flex items-center justify-center border border-[#858585]">
        <Image
          src={product.image}
          alt={product.name}
          className="object-contain w-full h-full transition-transform duration-300"
          fill
          style={{
            objectFit: "contain",
            transform: hovered ? "scale(1.05)" : "scale(1)",
          }}
        />
        {/* Action buttons overlay */}
        <div
          className={`absolute bottom-2 sm:bottom-4 left-0 right-0 flex justify-center gap-2 sm:gap-3 transition-all duration-300 ${
            hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            className="text-black p-2 sm:p-3 shadow-md hover:bg-[#a06e4c] transition-colors bg-white rounded"
            title="View"
            onClick={handleButtonClick}
          >
            <svg
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M2.05 12a9.94 9.94 0 0 1 19.9 0 9.94 9.94 0 0 1-19.9 0Z" />
            </svg>
          </button>
          <button
            className="text-black p-2 sm:p-3 shadow-md hover:bg-[#a06e4c] transition-colors bg-white rounded"
            title="Add to Cart"
            onClick={handleButtonClick}
          >
            <svg
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h7.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </button>
          <button
            className="text-black p-2 sm:p-3 shadow-md hover:bg-[#a06e4c] transition-colors bg-white rounded"
            title="Wishlist"
            onClick={handleButtonClick}
          >
            <svg
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="p-3 sm:p-5 text-center mt-auto min-h-[48px] sm:min-h-[60px] flex items-center justify-center">
        <h3 className="text-base sm:text-xl font-heading font-bold text-gray-900 mb-0 hover:underline">
          {product.name}
        </h3>
      </div>
    </Link>
  );
};

export default AllProducts;
