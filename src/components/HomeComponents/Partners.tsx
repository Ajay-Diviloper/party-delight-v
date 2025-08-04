'use client';
import React from 'react';
import Image from 'next/image';

const partnerImages = [
  '/images/partner-1.png',
  '/images/partner-2.png',
  '/images/partner-3.png',
  '/images/partner-4.png',
  '/images/partner-5.png',
];

const Partners = () => {
  return (
    <div className="bg-white w-full py-8 sm:py-16">
      <div className="max-w-9xl mx-auto">
        <div className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-8 sm:gap-x-32">
          {partnerImages.map((img, idx) => (
            <div
              key={idx}
              className="flex justify-center items-center w-20 sm:w-36"
            >
              <Image
                src={img}
                alt={`Partner ${idx + 1}`}
                width={100}
                height={80}
                className="object-contain w-full h-auto"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
