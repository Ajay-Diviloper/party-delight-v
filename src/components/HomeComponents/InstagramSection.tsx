'use client';
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import {  FaInstagram,  } from 'react-icons/fa'

const images = [
  "/images/ins-1.jpg",
  "/images/ins-2.jpg",
  "/images/ins-3.jpg",
  "/images/ins-4.jpg",
];

const InstagramSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  // Infinite auto-scroll effect
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    let animationFrame: number;
    let scrollAmount = 0;
    const speed = 0.5; // px per frame

    // Duplicate images for seamless infinite scroll
    const totalImages = images.length;
    if (slider.childElementCount < totalImages * 2) {
      for (let i = 0; i < totalImages; i++) {
        const clone = slider.children[i].cloneNode(true);
        slider.appendChild(clone);
      }
    }

    const scroll = () => {
      scrollAmount += speed;
      if (scrollAmount >= slider.scrollWidth / 2) {
        scrollAmount = 0;
      }
      slider.scrollLeft = scrollAmount;
      animationFrame = requestAnimationFrame(scroll);
    };
    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="w-full bg-white py-38">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 items-center">
          {/* Title/Info */}
          <div className="col-span-12 md:col-span-4 flex flex-col gap-5  md:items-start justify-center px-8 mb-8 md:mb-0">
      <h2 className="text-4xl md:text-5xl font-heading mb-2 tracking-wide">INSTAGRAM</h2>
      <span className="text-sm md:text-base text-[#ff3131] mb-1 text-left">Follow us on Instagram</span>

      {/* Link Wrapper */}
      <Link
  href="https://www.instagram.com/partydelightsca/?hl=en"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 text-[#ff3131] cursor-pointer hover:text-[#5e0202] hover:underline underline-offset-2 transition-all duration-300"
>
  <FaInstagram className="text-2xl" />
  <span className="text-base font-medium">Party Delight</span>
</Link>
<div>
  
          <ul className="space-y-3 text-sm font-sans text-[#858585] ">
            <li className="flex items-start gap-2">
              <MapPin className="w-5 h-5 mt-0.5 text-[#ff3131]" />
              <span>6638 152A St #115, Surrey, BC V3S 5X5</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#ff3131]" />
              <a href="mailto:partydelightsca@outlook.com" className="hover:underline">partydelightsca@outlook.com</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-[#ff3131]" />
              <a href="tel:6045930080" className="hover:underline">+1(604) 593-0080</a>
            </li>
          </ul>
        </div>

    </div>
          {/* Images Slider */}
          <div className="col-span-12 md:col-span-8 overflow-hidden">
            <div
              ref={sliderRef}
              className="flex gap-6 w-full overflow-x-scroll hide-scrollbar"
              style={{ 
                scrollBehavior: 'auto', 
                whiteSpace: 'nowrap'
              }}
            >
              {images.concat(images).map((src, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="relative aspect-[4/3] min-w-[25%] max-w-[28%] flex-1 inline-block group rounded overflow-hidden"
                  tabIndex={0}
                  aria-label="View on Instagram"
                  style={{ height: 'auto' }}
                >
                  <Image
                    src={src}
                    width={250}
                    height={187}
                    alt={`Instagram ${idx + 1}`}
                    className="w-full h-auto object-cover transition duration-300 group-hover:scale-105"
                    draggable={false}
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-80 bg-black transition-opacity duration-300 flex items-center justify-center z-10 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" className="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramSection;