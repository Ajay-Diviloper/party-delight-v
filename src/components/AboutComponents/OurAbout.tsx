import React from 'react'
import Image from 'next/image'

const OurAbout = () => {
  return (
    <section className="w-full bg-white py-10 md:py-28">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 items-stretch gap-8 md:gap-0 px-2 sm:px-4 md:px-0">
        {/* Left: Text */}
        <div className="flex flex-col items-start justify-center p-4 sm:p-8 md:pr-16 md:p-16 py-6">
          <span className="text-light-brown text-sm sm:text-base md:text-lg mb-2 font-sans">Welcome to Party Delight</span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl text-dark-brown mb-4 sm:mb-6 leading-tight">PASSION FOR BAKING, LOVE FOR CELEBRATION</h2>
          <p className="text-grey text-sm sm:text-base md:text-lg font-sans mb-3 sm:mb-4 max-w-xl">
            At Party Delight, we believe every celebration deserves a centerpiece that delights the senses. Our expert bakers blend tradition and innovation to create cakes and pastries that are as beautiful as they are delicious.
          </p>
          <p className="text-grey text-sm sm:text-base md:text-lg font-sans mb-4 sm:mb-6 max-w-xl">
            From sourcing the finest ingredients to handcrafting each detail, our commitment is to quality, creativity, and customer joy. Join us in making every occasion unforgettable.
          </p>
          <div className="mt-6 sm:mt-8">
          <Image src="/images/about3.png" alt="Signature Cake" width={180} height={60} className="object-contain w-36 sm:w-44 md:w-[220px]" />
          </div>
        </div>
        {/* Right: Background Image */}
        <div className="relative w-full min-h-[220px] sm:min-h-[320px] md:min-h-[550px] border-b-2 border-light-brown flex items-end">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/about-one.jpg"
              alt="Our Signature Collection"
              fill
              className="object-cover object-center rounded-none"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurAbout