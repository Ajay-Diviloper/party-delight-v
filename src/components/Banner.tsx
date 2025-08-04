import React from 'react';
import Image from 'next/image';

interface BannerProps {
  title: string;
  subtitle: string;
}

const Banner: React.FC<BannerProps> = ({ title, subtitle }) => (
  <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
    <Image
      src="/images/slide-3.jpg"
      alt="Banner Background"
      fill
      className="object-cover z-0"
      priority
    />
    <div className="absolute inset-0 bg-[#212121]/70 z-[1]" />
    <div className="relative z-[2] flex flex-col items-center justify-center w-full h-screen text-center px-4">
      <h1 className="text-white font-heading text-3xl sm:text-5xl md:text-6xl mb-4">
        {title}
      </h1>
      <span className="text-white text-base md:text-lg max-w-2xl mt-3 mb-8 font-sans">
        {subtitle}
      </span>
    </div>
  </section>
);

export default Banner; 