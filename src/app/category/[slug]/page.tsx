/* eslint-disable @typescript-eslint/no-explicit-any */
import { getProductsByCategory } from '@/lib/products-data';
import { categories } from '@/lib/categories-data';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import React from 'react';
import Banner from '@/components/Banner';

export default async function Page({ params }: { params: Promise<any> }) {
  const { slug } = await params;
  const categoryObj = categories.find(cat => cat.slug === slug);
  const categoryName = categoryObj ? categoryObj.name : null;
  const products = categoryName ? getProductsByCategory(categoryName) : [];

  if (!categoryName || products.length === 0) {
    return (
      <div className="py-16 px-4 max-w-9xl mx-auto container">
        <div className="text-center">
          <h1 className="text-[40px] font-heading mb-4">Category Not Found</h1>
          <p className="text-[#858585] mb-8">No products found for this category.</p>
          <Link
            href="/products"
            className="inline-block bg-[#bc8157] text-white px-6 py-3 rounded hover:bg-[#a06e4c] transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Banner title={`${categoryName ? categoryName.toUpperCase() : ''} PRODUCTS`} subtitle={`Discover our delicious ${categoryName ? categoryName.toLowerCase() : ''} collection`} />
      <div className="py-16 px-4 max-w-9xl mx-auto container">
        <div className="text-center mb-12">
          <h1 className="text-[40px] font-heading text-center mb-1 tracking-wide">
            {categoryName.toUpperCase()} PRODUCTS
          </h1>
          <p className="text-center text-[#858585] mb-4 max-w-2xl mx-auto text-lg font-sans font-light">
            Discover our delicious {categoryName.toLowerCase()} collection
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}