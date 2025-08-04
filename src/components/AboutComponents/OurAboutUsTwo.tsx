import React from 'react'
import Image from 'next/image'
const OurAboutUsTwo = () => {
  return (
    <section className="w-full bg-white py-10 md:py-28">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 items-stretch gap-8 md:gap-0 px-2 sm:px-4 md:px-0">
        {/* Left: Bakery Image */}
        <div className="relative w-full min-h-[220px] sm:min-h-[320px] md:min-h-[550px] border-b-2 border-light-brown flex items-end">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/about-two.jpg"
              alt="Our Bakery Display"
              fill
              className="object-cover object-center rounded-none"
              priority
            />
          </div>
        </div>
        {/* Right: Open Hours Content with extra padding and exact text */}
        <div className="flex flex-col items-start justify-center p-8 sm:p-12 md:pl-24 md:pr-20 md:py-20">
          <span className="text-[#bc8157] text-sm sm:text-base md:text-lg mb-2 font-sans">Visit Us Anytime</span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl text-dark-brown mb-4 sm:mb-6 leading-tight">WE&apos;RE HERE FOR YOUR CELEBRATIONS</h2>
          <p className="text-grey text-sm sm:text-base md:text-lg font-sans mb-6 max-w-xl">
            Our doors are always open to sweeten your day. Whether it&apos;s a birthday, wedding, or just a craving, our team is ready to serve you with a smile and a slice of happiness.
          </p>
          <div className="w-full mt-2 mb-2">
            <div className="flex justify-between items-center border-b border-gray-300 py-3">
              <span className="font-heading text-dark-brown text-base md:text-lg">Monday – Friday</span>
              <span className="text-gray-500 text-sm md:text-base italic">8:00 am - 8:00 pm</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-300 py-3">
              <span className="font-heading text-dark-brown text-base md:text-lg">Saturday – Sunday</span>
              <span className="text-gray-500 text-sm md:text-base italic">9:00 am - 9:00 pm</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurAboutUsTwo