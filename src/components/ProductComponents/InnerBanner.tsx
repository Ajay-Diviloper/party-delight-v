import React from 'react'
import Image from 'next/image';

const InnerBanner = () => {
  return (
    <>
    <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
         {/* Background Image */}
         <Image
           src="/images/shop-bg.jpg"
           alt="Cakes Background"
           fill
           className="object-cover z-0"
           priority
         />
         {/* Overlay */}
         <div className="absolute inset-0 bg-[#212121]/70 z-[1]" />
   
         {/* Main Content */}
         <div className="relative z-[2] flex flex-col items-center justify-center w-full h-screen text-center px-4">
           <h1 className="text-white font-heading text-3xl sm:text-4xl md:text-4xl  mb-4">
            Shop
           </h1>
           <span className="text-white text-base md:text-lg max-w-2xl mt-3 mb-8 font-sans">
Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt
           </span>
         </div>
       </section>
    </>
  )
}

export default InnerBanner