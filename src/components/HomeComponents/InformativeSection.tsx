import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const InformativeSection = () => {
  return (
    <section className="relative w-full h-[60vh] sm:h-[80vh] md:h-[80vh] lg:h-[85vh] flex justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/slider/innerview.jpg"
        alt="Cakes Background"
        fill
        className="object-cover z-0"
        priority
        sizes="100vw"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#212121]/70 z-[1]" />

      {/* Main Content */}
     
      <div className="relative z-[2] pt-16 md:pt-0 flex flex-col Md:flex md:flex-col md:items-center  md:justify-center w-full h-full text-center px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-xl md:text-2xl font-heading mb-2" style={{ color: '#ff3131' }}>Party Delight</div>
        <h1 className="text-white font-heading text-xl md:text-5xl lg:text-4xl mb-4 max-w-4xl mx-auto leading-tight">
          CELEBRATE EVERY MOMENT WITH PERFECT CAKES
        </h1>
        <span className="text-white text-base md:text-lg max-w-lg md:max-w-2xl mt-3 mb-6 sm:mb-8 font-sans leading-relaxed">
          From birthdays to weddings, our handcrafted cakes bring joy to every celebration. Made with premium ingredients and artistic flair, each cake tells a unique story of love and happiness.
        </span>
        <Link
  href="/products"
  className="main-btn font-sans w-1/2 mx-auto block sm:w-auto"
>
  SHOP NOW
</Link>

        {/* Bottom Bar */}
        <div className="absolute bottom-0 left-0 w-full bg-[#212121ad]/60 flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center px-4 sm:px-6 md:px-12 lg:px-24 py-6 sm:py-4 z-[3] space-y-4 sm:space-y-0 sm:gap-4 md:gap-0">
          <div className="flex items-center justify-start gap-2 text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6" style={{ color: '#ff3131' }}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h15a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75zm0 0l9.75 6.75 9.75-6.75" /></svg>
            <span className="text-white font-sans">Contact us</span>
          </div>
          <span className="hidden sm:block text-white text-2xl px-2 md:px-4">|</span>
          <div className="flex items-center justify-start gap-2 text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6" style={{ color: '#ff3131' }}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 9.75V6.75A4.5 4.5 0 0 0 12 2.25a4.5 4.5 0 0 0-4.5 4.5v3m13.5 0v7.5a2.25 2.25 0 0 1-2.25 2.25h-13.5A2.25 2.25 0 0 1 2.25 17.25v-7.5m16.5 0H2.25" /></svg>
            <span className="text-white font-sans">Shopping Online</span>
          </div>
          <span className="hidden sm:block text-white text-2xl px-2 md:px-4">|</span>
          <div className="flex items-center justify-start gap-2 text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6" style={{ color: '#ff3131' }}><path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75 0 7.125 9.75 13.5 9.75 13.5s9.75-6.375 9.75-13.5c0-5.385-4.365-9.75-9.75-9.75zm0 12.75a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" /></svg>
            <span className="text-white font-sans">Store Location</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformativeSection;