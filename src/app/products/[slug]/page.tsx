/* eslint-disable @typescript-eslint/no-explicit-any */
import { getProductBySlug } from '@/lib/products-data'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Link from 'next/link';

import ProductEnquiryModal from './ProductEnquiryModal';
import Banner from '@/components/Banner';
import RelatedProductsSlider from './RelatedProductsSlider';
import { getProductsByCategory } from '@/lib/products-data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default async function ProductPage({ params }: { params: Promise<any> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    notFound();
  }

  const relatedProducts = getProductsByCategory(product.category).filter((p: any) => p.slug !== product.slug);

  return (
    <div className="w-full max-w-8xl mx-auto font-sans">
      <Banner title={product.name} subtitle={product.description || ''} />
      {/* Breadcrumbs */}
      <nav className="text-sm text-grey mb-8 pt-4 flex items-center gap-2 font-sans max-w-5xl mx-auto px-2 sm:px-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline text-dark-brown">Home</Link>
        <span className="mx-1">/</span>
        <Link href="/products" className="hover:underline text-dark-brown">Shop</Link>
        <span className="mx-1">/</span>
        <span className="text-black font-semibold">{product.name}</span>
      </nav>
      <div className="w-full flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 items-center md:items-start justify-center px-0 sm:px-2 md:px-6 pb-10 sm:pb-16">
        {/* Left: Product Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
          <div
            className="group relative w-full max-w-[700px] aspect-[7/5] overflow-hidden rounded shadow-sm"
            style={{ minHeight: '320px', minWidth: '0', height: '100%', width: '100%' }}
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="transition-transform duration-300 ease-in-out object-cover w-full h-full group-hover:scale-110 group-active:scale-110"
              style={{ touchAction: 'manipulation' }}
            />
          </div>
        </div>
        {/* Right: Product Details */}
        <div className="w-full md:w-1/2 max-w-2xl mx-auto md:mx-0 flex flex-col items-center md:items-start">
          <h1 className="text-4xl font-heading mb-4 text-dark-brown text-center md:text-left font-normal w-full">{product.name}</h1>
          {product.badge && <span className="inline-block bg-red-500 text-white px-2 py-1 rounded mb-2 font-sans text-xs uppercase tracking-wider text-center md:text-left">{product.badge}</span>}
          {product.description && <p className="mb-6 font-sans text-grey text-lg leading-relaxed text-center md:text-left w-full">{product.description}</p>}
          <div className="flex items-center justify-center md:justify-start gap-4 mb-8 w-full">
            <ProductEnquiryModal productName={product.name} />
          </div>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-2 w-full">
            <span className="text-white px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: '#920804' }}>{product.category}</span>
            {product.keywords && product.keywords.split(',').map((tag: string, idx: number) => (
              <span key={idx} className="text-white px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: '#920804' }}>{tag.trim()}</span>
            ))}
          </div>
        </div>
      </div>
      {/* Related Products Slider */}
      <RelatedProductsSlider relatedProducts={relatedProducts} />
    </div>
  )
}
