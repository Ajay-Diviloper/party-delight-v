"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
import { categories } from "@/lib/categories-data";

export default function Footer() {
  return (
    <footer className="bg-white text-black border-t">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo, Description, Social */}
        <div>
          <div className="mb-3">
            <Image
              src="/images/party-delight-logo-v2.png"
              alt="Party Delights Logo"
              width={120}
              height={60}
              className="mb-2"
            />
          </div>
          <p className="text-sm text-[#858585] mb-2">Delighting your parties with fresh bakes every day! Experience the taste of happiness with our handcrafted treats.</p>
          <div className="flex gap-4 mt-2">
            <a href="https://www.facebook.com/partydelightsca/" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5 hover:text-[#5C4033] cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/partydelightsca/?hl=en" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 hover:text-[#5C4033] cursor-pointer" />
            </a>
            {/* <WhatsAppButton size="sm" className="!w-5 !h-5" phoneNumber="+1(604) 593-0080" /> */}
          </div>
        </div>

        {/* Categories - now in a single row with 3 columns and 'All Categories' link */}
        <div className="md:col-span-2">
          <h3 className="text-lg font-heading mb-3">VIEW ALL CATEGORIES</h3>
          <div className="flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-8">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/category/${encodeURIComponent(cat.slug)}`}
                  className="hover:text-[#5C4033] text-sm text-[#858585]"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Services */}

        {/* Contact Info */}
        <div>
        <h3 className="text-lg font-heading  mb-3">GET IN TOUCH WITH US ...</h3>
          <p className="text-sm text-[#858585] mb-3">We&apos;d love to hear from you! <br />Reach out for orders or questions.</p>
          <ul className="space-y-3 text-sm font-sans text-[#858585]">
            <li className="flex items-start gap-2">
              <MapPin className="w-5 h-5 mt-0.5 text-[#920804]" />
              <span>6638 152A St #115, Surrey, BC V3S 5X5</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#920804]" />
              <a href="mailto:partydelightsca@outlook.com" className="hover:underline">partydelightsca@outlook.com</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-[#920804]" />
              <a href="tel:6045930080" className="hover:underline">+1(604) 593-0080</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-gray-100 py-4 text-center text-sm font-sans text-[#858585]">
          &copy; Copyright 2025. All Right Reserved. Designed by <Link href="https://ekarigartech.com/" className="underline hover:text-[#5C4033]">Ekarigar</Link>
      </div>

      {/* Floating Contact Icons */}
      <div className="fixed right-6 bottom-20 bg-white rounded-full shadow-lg p-3 flex flex-col gap-4 items-center z-[9997]">
        <a href="tel:6045930080" title="Call us">
          <Phone className="w-4 h-4 cursor-pointer hover:text-[#920804]" />
        </a>
        <a href="mailto:partydelightsca@outlook.com" title="Email us">
          <Mail className="w-4 h-4 cursor-pointer hover:text-[#920804]" />
        </a>
        {/* <WhatsAppButton size="sm" className="!w-4 !h-4" phoneNumber="+1(604) 593-0080" /> */}
      </div>

      {/* Fixed WhatsApp Button on Left Side */}
      <WhatsAppButton size="md" phoneNumber="+1(604) 593-0080" fixedLeft />
    </footer>
  );
}
