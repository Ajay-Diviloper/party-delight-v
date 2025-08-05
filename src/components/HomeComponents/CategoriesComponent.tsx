import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    title: 'BC Bliss – Berries & cream cheese',
    img: '/images/products-category-images/berries.webp',
    number: '01.',
    link: '/products',
  },
  {
    title: 'Carrot Cake',
    img: '/images/products-category-images/carrot-cake.webp',
    number: '02.',
    link: '/products',
  },
  {
    title: 'Peanut Butter Tart',
    img: '/images/products-category-images/peanut-better.webp',
    number: '03.',
    link: '/products',
  },
  {
    title: 'Choco Chunk',
    img: '/images/products-category-images/choco-cgank.webp',
    number: '04.',
    link: '/products',
  },
  {
    title: 'Mango Sunshine',
    img: '/images/products-category-images/mango.webp',
    number: '05.',
    link: '/products',
  },
  {
    title: 'Sandwiches',
    img: '/images/products-category-images/berries.webp',
    number: '06.',
    link: '/products',
  },
];

const CategoriesComponent = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-normal text-gray-900 mb-4">
            Explore Our Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handcrafted collection of premium cakes and desserts
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat, idx) => (
            <Link
              key={cat.title}
              href={cat.link}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                <Image
                  src={cat.img}
                  alt={cat.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  priority={idx < 3}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Number Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-900">{cat.number}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg text-center md:text-left md:text-xl font-heading font-medium text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-red transition-colors duration-300">
                  {cat.title}
                </h3>
                
                {/* Shop Now Button */}
                <div className="flex items-center md:justify-between justify-center ">
                  <span className="text-sm font-medium text-gray-600 group-hover:text-primary-red transition-colors duration-300">
                    Shop Now
                  </span>
                  <div className="w-6 h-6 rounded-full bg-gray-100 group-hover:bg-primary-red transition-colors duration-300 flex items-center justify-center">
                    <svg 
                      className="w-3 h-3 text-gray-600 group-hover:text-white transition-colors duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-red/20 rounded-lg transition-colors duration-300 pointer-events-none" />
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            href="/products"
            className="inline-flex items-center px-8 py-3 bg-[#ff3131] md:bg-[#ff3131] text-white font-medium rounded-lg  transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            View All Categories
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoriesComponent