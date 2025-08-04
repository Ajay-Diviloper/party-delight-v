'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, easeInOut } from 'framer-motion';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    image: '/images/slider/slide-4.jpeg',
    alt: 'Handcrafted cookies and treats',
    title: 'Sweet Moments, Every Day',
    subtitle: 'Indulge in our handcrafted treats, made with love and the finest ingredients.',
  },
  {
    id: 2,
    image: '/images/slider/slide-7.jpeg',
    alt: 'Celebration cakes and pastries',
    title: 'Celebrate Every Occasion Deliciously',
    subtitle: 'From birthdays to weddings, our bakery adds a special touch to your celebrations.',
  },
  {
    id: 3,
    image: '/images/slider/slide.jpg',
    alt: 'Artisan bakery creations',
    title: 'Experience the Art of Baking',
    subtitle: 'Discover a world of flavors, textures, and unforgettable desserts.',
  },
];

const HomeSlider = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
      setIsFirstLoad(false);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const variants = {
    initialLoad: {
      opacity: 0,
      y: 100,
      transition: { duration: 1.5, ease: easeInOut },
    },
    enter: (direction: number) => ({
      opacity: 0,
      x: direction === 1 ? 100 : -100,
      transition: { duration: 1.5, ease: easeInOut },
    }),
    center: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 1.5, ease: easeInOut },
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction === 1 ? -100 : 100,
      transition: { duration: 1.5, ease: easeInOut },
    }),
  };

  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[90vh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/100 via-black/100 to-black/100 z-0"></div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={slides[current].id}
          custom={direction}
          variants={variants}
          initial={isFirstLoad ? 'initialLoad' : 'enter'}
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full z-0"
        >
          <div className="relative w-full h-full">
            <Image
              src={slides[current].image}
              alt={slides[current].alt}
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Enhanced overlay for better text visibility */}
          <div className="absolute inset-0 w-full h-full pointer-events-none" style={{background: 'rgba(0,0,0,0.6)', mixBlendMode: 'multiply'}} />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-[1] px-2 sm:px-4">
            <Image src="/images/icon.png" alt="Bakery logo icon" className="mb-2 sm:mb-4" width={40} height={40} />
            <div
              className="text-[4em]  py-2 sm:py-4 font-heading mb-2 sm:mb-4 w-full   drop-shadow-lg animate-fadeInUp leading-tight"
              style={{ wordBreak: 'normal', whiteSpace: 'normal', overflowX: 'visible' }}
            >
              {slides[current].title}
            </div>
            {slides[current].subtitle && (
              <div className="text-[1.2em] font-light font-sans mb-4 sm:mb-6 w-full sm:w-3/4 md:w-1/2 mx-auto drop-shadow">
                {slides[current].subtitle}
              </div>
            )}
            <button className="main-btn font-sans px-4 py-2 text-sm sm:text-base transition-colors !hover:bg-[#ff3131] bg-[#fff] hover:text-white">
              Shop Now
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-3 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3 z-[2]">
        {slides.map((slide, index) => (
          <div key={slide.id} className="group relative">
            <button
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full border-2 transition-all duration-300 ${
                index === current ? 'bg-light-brown border-light-brown' : 'bg-transparent border-white'
              }`}
              onClick={() => handleDotClick(index)}
            ></button>
          <Image
  src={slide.image}
  alt="Preview"
  width={48}
  height={32}
  className="
    rounded-lg 
    object-contain 
    sm:w-16 sm:h-10 
    w-12 h-8 
    shadow-md
  "
/>

          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSlider;
