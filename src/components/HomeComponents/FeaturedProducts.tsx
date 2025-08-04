'use client';
import { categories } from '@/lib/categories-data';
import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedProducts() {
  // Use categories instead of products

  return (
    <>
    <div className="max-w-7xl mx-auto min-h-screen pt-16 pb-10 text-center px-2 sm:px-4 lg:px-8">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-normal tracking-wide uppercase font-heading text-dark-brown">
        For A Sweet Day
      </h2>
      <p className="max-w-4xl mx-auto mt-4 font-sans text-base sm:text-lg md:text-xl text-[#858585]">
        Handpicked favorites that bring sweetness to every moment. Our featured creations showcase the perfect blend of tradition and innovation, ensuring every bite is a celebration of flavor and craftsmanship.
      </p>

      {/* Categories Grid - 2 rows, 5 per row on desktop, 2 per row on mobile */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-x-10 gap-y-14 mt-12 md:mt-18 w-full place-items-center">
        {categories.slice(0, 10).map((category, index) => (
          <Link
            key={index}
            href={`/category/${category.slug}`}
            className="flex flex-col items-center group w-full"
            tabIndex={0}
          >
            <div className="w-36 h-36 sm:w-44 sm:h-40 md:w-48 md:h-48 flex items-center justify-center relative" style={{ clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)', background: '#fff', borderRadius: '18px' }}>
              <Image
                src={category.image}
                alt={category.name}
                width={160}
                height={160}
                className="object-cover w-full h-full"
                sizes="(max-width: 768px) 100vw, 160px"
              />
            </div>
            <span
              className="mt-3 px-3 py-1 rounded font-serif font-semibold text-white bg-[#920804] tracking-wider uppercase text-center select-none text-xs sm:text-sm md:text-base shadow-md whitespace-nowrap"
              style={{ letterSpacing: '0.08em', minWidth: '90px', display: 'inline-block' }}
            >
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
}
