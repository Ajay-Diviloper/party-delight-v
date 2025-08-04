import React, { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/lib/types';
import Link from 'next/link';

interface ProductGridProps {
  products: Product[];
  currentPage: number;
  productsPerPage: number;
  onPageChange: (page: number) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, currentPage, productsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIdx = (currentPage - 1) * productsPerPage;
  const paginatedProducts = products.slice(startIdx, startIdx + productsPerPage);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-8">
        {paginatedProducts.map((product, idx) => (
          <Card key={idx} product={product} />
        ))}
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => onPageChange(i + 1)}
            className={`px-3 py-1 rounded font-heading text-lg transition-colors duration-200 ${currentPage === i + 1 ? 'bg-[#920804] text-white' : 'bg-gray-100 text-[#920804] hover:bg-[#920804] hover:text-white'}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

const Card = ({ product }: { product: Product }) => {
  const [hovered, setHovered] = useState(false);
  
  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Link 
      href={`/products/${product.slug}`}
      className="bg-white border border-[0.5px] border-[#858585] overflow-hidden transition-all duration-300 flex flex-col h-full relative cursor-pointer block hover:shadow-lg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative w-full flex items-center justify-center">
        <Image
          src={product.image}
          alt={product.name}
          className="object-contain mx-auto transition-transform duration-300"
          width={350}
          height={350}
          style={{
            maxHeight: '450px',
            maxWidth: '450px',
            transform: hovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
        <div
          className={`absolute bottom-4 left-0 right-0 flex justify-center gap-3 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <button 
            className="text-black p-3 shadow-md hover:bg-[#a06e4c] transition-colors bg-white rounded" 
            title="View"
            onClick={handleButtonClick}
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="3" />
              <path d="M2.05 12a9.94 9.94 0 0 1 19.9 0 9.94 9.94 0 0 1-19.9 0Z" />
            </svg>
          </button>
          <button 
            className="text-black p-3 shadow-md hover:bg-[#a06e4c] transition-colors bg-white rounded" 
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
            className="text-black p-3 shadow-md hover:bg-[#a06e4c] transition-colors bg-white rounded" 
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
};

export default ProductGrid; 