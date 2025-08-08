"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
// import { categories } from "@/lib/categories-data"; // not needed for grouped footer

// --- NEW: grouped category data (Desserts & Savoury) ---
const desserts = [
  'Cakes',
  'Cookies',
  'Scones',
  'Brownies',
  'Tarts',
  'Biscottis',
  'Bars',
  'Cupcakes',
  'Muffins',
  'Pies',
  'Cake Jars',
  'Cheesecakes',
  'Loaves',
  'Macarons',
  'Shortbreads',
  'Specials',
];

const savoury = [
  'Croissants',
  'Grilled Sandwiches',
  'Quiches',
  'Wraps',
  'Danish Pastries',
  'Specials',
  'Munchables',
];

// simple slug helper (adjust if your app uses different slugs)
const slugify = (s: string) =>
  s.toLowerCase()
   .replace(/['’]/g, '')
   .replace(/\s+&\s+/g, '-and-')
   .replace(/[^a-z0-9]+/g, '-')
   .replace(/^-+|-+$/g, '');

export default function Footer() {
  return (
    <footer className="bg-white text-black border-t pt-15">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo, Description, Social */}
        <div>
          <div className="mb-3">
            <Image
              src="/images/logo.png"
              alt="Party Delights Logo"
              width={120}
              height={60}
              className="mb-2"
            />
          </div>
          <p className="text-sm text-[#858585] mb-2 ">
            Delighting your parties with fresh bakes every day! Experience the taste of happiness with our handcrafted treats.
          </p>

          <ul className="space-y-3 text-sm font-sans text-[#858585] mt-2.5">
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

          <div className="flex gap-4 mt-2">
            <a href="https://www.facebook.com/partydelightsca/" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5 hover:text-[#ff3131] cursor-pointer text-[#ff3131]" />
            </a>
            <a href="https://www.instagram.com/partydelightsca/?hl=en" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 hover:text-[#ff3131] cursor-pointer text-[#ff3131]" />
            </a>
          </div>
        </div>

        {/* --- NEW: Grouped Categories --- */}
        <div className="md:col-span-2">
      

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Desserts group */}
            <div>
              <h4 className="text-[18px] font-heading text-[#ff3131] mb-2 font-semibold">Desserts</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8">
                {desserts.map((name) => (
                  <Link
                    key={name}
                    // TODO: if your route is different, update this path
                    href={`/category/${encodeURIComponent(slugify(name))}`}
                    className="hover:text-[#5C4033] text-sm text-[#858585]"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Savoury group */}
            <div>
              <h4 className="text-[18px] font-heading text-[#ff3131] mb-2 font-semibold">Savoury</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8">
                {savoury.map((name) => (
                  <Link
                    key={name}
                    href={`/category/${encodeURIComponent(slugify(name))}`}
                    className="hover:text-[#5C4033] text-sm text-[#858585]"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Optional: link to all products */}
          {/* <div className="mt-4">
            <Link href="/products" className="text-[#ff3131] text-sm font-semibold hover:underline">
              Browse all products →
            </Link>
          </div> */}
        </div>

        {/* (Optional) another column for services or quick links */}
        <div />
      </div>

      {/* Bottom bar */}
      <div className="bg-gray-100 py-4 text-center text-sm font-sans text-[#858585]">
        &copy; Copyright 2025. All Right Reserved. Designed by{" "}
        <Link href="https://ekarigartech.com/" className="underline hover:text-[#5C4033]">
          Ekarigar
        </Link>
      </div>

      {/* Floating Contact Icons */}
      <div className="fixed right-6 bottom-20 bg-white rounded-full shadow-lg p-3 flex flex-col gap-4 items-center z-[9997]">
        <a href="tel:6045930080" title="Call us">
          <Phone className="w-4 h-4 cursor-pointer hover:text-[#ff3131]" />
        </a>
        <a href="mailto:partydelightsca@outlook.com" title="Email us">
          <Mail className="w-4 h-4 cursor-pointer hover:text-[#ff3131]" />
        </a>
      </div>

      {/* Fixed WhatsApp Button on Left Side */}
      <WhatsAppButton size="md" phoneNumber="+1(604) 593-0080" fixedLeft />
    </footer>
  );
}
