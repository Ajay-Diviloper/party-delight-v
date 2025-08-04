"use client";
import dynamic from 'next/dynamic';
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Product } from '@/lib/types';
const ProductCard = dynamic(() => import('@/components/ProductCard'), { ssr: false });
const Slider = dynamic(() => import('react-slick'), { ssr: false });

export default function RelatedProductsSlider({ relatedProducts }: { relatedProducts: Product[] }) {
  if (!relatedProducts || relatedProducts.length === 0) return null;
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };
  const showSlider = relatedProducts.length > 1;
  return (
    <section className="w-full max-w-8xl mx-auto px-2 sm:px-4 pb-10 sm:pb-16 mt-8">
      <h2 className="text-2xl sm:text-3xl font-heading pb-3 sm:pb-5 text-left mb-4 sm:mb-8">Related Products</h2>
      {showSlider ? (
        <Slider {...sliderSettings}>
          {relatedProducts.map((prod) => (
            <div key={prod.slug} className="px-1 sm:px-3 py-4 h-full flex justify-center items-stretch">
              <ProductCard product={prod} />
            </div>
          ))}
        </Slider>
      ) : (
        <div className="flex justify-center">
          <div className="px-3 h-full flex justify-center">
            <ProductCard product={relatedProducts[0]} />
          </div>
        </div>
      )}
    </section>
  );
} 