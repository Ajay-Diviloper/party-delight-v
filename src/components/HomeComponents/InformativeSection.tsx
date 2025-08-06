import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const InformativeSection = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/slider/innerview.jpg"
          alt="Cakes Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col justify-center items-center flex-1 px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12">
        {/* Content Wrapper */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Brand Name */}
          <div className="text-xl md:text-2xl lg:text-3xl font-heading mb-4" style={{ color: '#ff3131' }}>
            Party Delight
          </div>


          

          {/* Main Heading */}
          <h2 className="text-white font-heading md:text-[4em] text-[2em] capitalize lg:text-5xl xl:text-6xl mb-6 leading-tight w-full">
  Celebrate Every Moment With Perfect Cakes
</h2>

          {/* Description */}
          <p className="text-white md:text-[1.2em] text-[1em] font-light  mx-auto mb-8 font-sans leading-relaxed">
            From birthdays to weddings, our handcrafted cakes bring joy to every celebration. Made with premium ingredients and artistic flair, each cake tells a unique story of love and happiness.
          </p>

          {/* CTA Button */}
          <Link
  href="/products"
  className="main-btn font-sans md:px-4 px-2 md:py-2 py-1 text-sm sm:text-base transition-colors !hover:bg-[#ff3131] bg-[#fff] hover:text-white inline-block text-center"
>
  Shop Now
</Link>
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div className="relative z-10 bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row md:justify-between justify-baseline  md:items-center  py-6 space-y-4 sm:space-y-0">
            {/* Contact Info */}
            <div className="flex items-center md:justify-center justify-baseline sm:justify-start gap-3">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="currentColor" 
                className="w-5 h-5 md:w-6 md:h-6" 
                style={{ color: '#ff3131' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h15a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75zm0 0l9.75 6.75 9.75-6.75" />
              </svg>
              <span className="text-white font-sans text-sm md:text-base">Contact us</span>
            </div>

            {/* Divider - Hidden on mobile */}
            <div className="hidden sm:block text-white text-xl px-4">|</div>

            {/* Shopping Online */}
            <div className="flex items-center md:justify-center justify-baseline sm:justify-start gap-3">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="currentColor" 
                className="w-5 h-5 md:w-6 md:h-6" 
                style={{ color: '#ff3131' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 9.75V6.75A4.5 4.5 0 0 0 12 2.25a4.5 4.5 0 0 0-4.5 4.5v3m13.5 0v7.5a2.25 2.25 0 0 1-2.25 2.25h-13.5A2.25 2.25 0 0 1 2.25 17.25v-7.5m16.5 0H2.25" />
              </svg>
              <span className="text-white font-sans text-sm md:text-base">Shopping Online</span>
            </div>

            {/* Divider - Hidden on mobile */}
            <div className="hidden sm:block text-white text-xl px-4">|</div>

            {/* Store Location */}
            <div className="flex items-center md:justify-center justify-baseline sm:justify-start gap-3">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="currentColor" 
                className="w-5 h-5 md:w-6 md:h-6" 
                style={{ color: '#ff3131' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75 0 7.125 9.75 13.5 9.75 13.5s9.75-6.375 9.75-13.5c0-5.385-4.365-9.75-9.75-9.75zm0 12.75a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
              <span className="text-white font-sans text-sm md:text-base">Store Location</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformativeSection;