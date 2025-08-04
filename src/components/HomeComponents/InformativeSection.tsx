import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const InformativeSection = () => {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/bg6.jpg"
        alt="Cakes Background"
        fill
        className="object-cover z-0"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#212121]/70 z-[1]" />

      {/* Main Content */}
      <div className="relative z-[2] flex flex-col items-center justify-center w-full h-full text-center px-4">
        <div className="text-xl md:text-2xl font-heading mb-2" style={{ color: '#ff3131' }}>Party Delight</div>
        <h1 className="text-white font-heading text-xl md:text-5xl lg:text-4xl  mb-4">
          CELEBRATE EVERY MOMENT WITH PERFECT CAKES
        </h1>
        <span className="text-white text-base md:text-lg max-w-2xl mt-3 mb-8 font-sans">
          From birthdays to weddings, our handcrafted cakes bring joy to every celebration. Made with premium ingredients and artistic flair, each cake tells a unique story of love and happiness.
        </span>
        <Link href="/products" className="main-btn font-sans">
          SHOP NOW
        </Link>
      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-[#212121ad]/60 flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-24 py-4 z-[3] gap-4 md:gap-0">
        <div className="flex items-center gap-2 text-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6" style={{ color: '#ff3131' }}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h15a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75zm0 0l9.75 6.75 9.75-6.75" /></svg>
          <span className="text-white font-sans">Contact us</span>
        </div>
        <span className="hidden md:block text-white text-2xl px-4">|</span>
        <div className="flex items-center gap-2 text-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6" style={{ color: '#ff3131' }}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 9.75V6.75A4.5 4.5 0 0 0 12 2.25a4.5 4.5 0 0 0-4.5 4.5v3m13.5 0v7.5a2.25 2.25 0 0 1-2.25 2.25h-13.5A2.25 2.25 0 0 1 2.25 17.25v-7.5m16.5 0H2.25" /></svg>
          <span className="text-white font-sans">Shopping Online</span>
        </div>
        <span className="hidden md:block text-white text-2xl px-4">|</span>
        <div className="flex items-center gap-2 text-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6" style={{ color: '#ff3131' }}><path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75 0 7.125 9.75 13.5 9.75 13.5s9.75-6.375 9.75-13.5c0-5.385-4.365-9.75-9.75-9.75zm0 12.75a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" /></svg>
          <span className="text-white font-sans">Store Location</span>
        </div>
      </div>
    </section>
  );
};

export default InformativeSection;