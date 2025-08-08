'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown, Search, Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { categories } from '../lib/categories-data';

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  // Example product/category list for search (replace with real data or API)
  const searchOptions = [
    ...categories.map(cat => ({
      label: cat.name,
      href: `/category/${cat.slug}`,
      img: cat.image,
    })),
    { label: "Shop All Products", href: "/products", img: "/images/product-1.png" },
  ];

  const filteredOptions = searchTerm
    ? searchOptions.filter(opt => opt.label.toLowerCase().includes(searchTerm.toLowerCase()))
    : searchOptions;

  function handleSearchSelect(href: string) {
    setIsSearchOpen(false);
    setSearchTerm("");
    if (router) router.push(href);
  }
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { href: '/', label: 'Home', current: pathname === '/', noArrow: true },
    {
      href: '/products',
      label: 'Menu',
      current: pathname.startsWith('/products'),
      subItems: categories, // Use categories directly
    },
    { href: '/about', label: 'About', current: pathname.startsWith('/about'), noArrow: true },
    { href: '/contact', label: 'Contact', current: pathname === '/contact', noArrow: true },
    { href: '/blog', label: 'Blog', current: pathname.startsWith('/blog'), noArrow: true },
  ];

  return (
    <>
      {/* Topbar with social icons and contact info (desktop only) */}
      <div className="w-full bg-[#ff3131] text-white text-base hidden sm:block font-montaga">
        <div className="container mx-auto flex flex-row justify-between items-center py-1 px-4">
          <div className="flex flex-row items-center gap-6">
            <div className="flex flex-row items-center gap-4 font-montaga">
              <span className="flex items-center gap-1 font-montaga">
                <MapPin className="w-4 h-4" /> 6638 152A St #115, Surrey, BC V3S 5X5
              </span>
              <a href="mailto:partydelightsca@outlook.com" className="flex items-center gap-1 hover:underline font-montaga">
                <Mail className="w-4 h-4" /> partydelightsca@outlook.com
              </a>
              <a href="tel:16045930080" className="flex items-center gap-1 hover:underline font-montaga">
                <Phone className="w-4 h-4" /> +1 (604) 593-0080
              </a>
            </div>
          </div>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/partydelightsca/" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5 text-white hover:text-[#ff3131] transition-colors duration-200" />
            </a>
            <a href="https://www.instagram.com/partydelightsca/?hl=en" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 text-white hover:text-[#ff3131] transition-colors duration-200" />
            </a>
          </div>
        </div>
      </div>
      
      <header className="w-full bg-white/90 shadow-md sticky top-0 z-50">
        {/* Main header */}
        <div className="container mx-auto px-4 py-1 flex items-center justify-between">
          {/* Mobile menu button */}
          <button 
            className="lg:hidden text-[#ff3131] p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo - centered on mobile, left on desktop */}
          <div className="flex-1 lg:flex-none lg:w-auto flex justify-center lg:justify-start">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Party Delight Logo"
                width={150}
                height={50}
                className="w-24 sm:w-28 lg:w-32 h-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation - hidden on mobile */}
          <nav className="hidden lg:flex items-center gap-8 text-[18px] font-heading relative">
            {navItems.map((item) => (
              item.subItems ? (
                <div key={item.label} className="group relative">
                  <NavLink
                    href={item.href}
                    label={item.label}
                    current={item.current}
                  />
                  {/* Dropdown */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-[#faf9f7] shadow-2xl border border-gray-200 mt-3 rounded-2xl z-[9999] transition-all duration-200 ease-in-out min-w-[1200px] max-w-[1400px] px-8 pt-8 pb-8 flex flex-col items-center">
                    {/* Dropdown Arrow */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 overflow-hidden">
                      <div className="w-6 h-6 bg-[#faf9f7] border-t border-l border-gray-200 rotate-45 shadow-md"></div>
                    </div>
                    <span className="text-base font-semibold text-[#ff3131] tracking-wide bg-white px-3 py-1 rounded-t-lg shadow-sm mb-5 font-heading">
                      Categories
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-5 w-full justify-items-center">
                      {item.subItems.map((cat) => (
                        <Link
                          key={cat.slug}
                          href={`/category/${cat.slug}`}
                          className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-white border border-gray-200 hover:border-[#ff3131] shadow-sm hover:shadow-lg transition-all duration-200 w-32 h-36"
                          style={{ textAlign: 'center' }}
                        >
                          <div className="rounded-lg bg-[#ff3131] group-hover:bg-white transition-all flex items-center justify-center w-20 h-20 mb-1 overflow-hidden">
                            <Image
                              src={cat.image}
                              alt={cat.name}
                              width={64}
                              height={64}
                              className="object-contain w-16 h-16"
                            />
                          </div>
                          <span className="font-medium text-[14px] text-gray-800 group-hover:text-[#ff3131] truncate w-full">{cat.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.label}
                  href={item.href}
                  label={item.label}
                  current={item.current}
                  noArrow={item.noArrow}
                />
              )
            ))}
          </nav>

          {/* Search Icon - right side */}
          <div className="flex items-center">
            <button
              className="p-2 rounded-md hover:bg-gray-100 transition-colors focus:outline-none"
              aria-label="Search"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="w-5 h-5 text-gray-700 hover:text-[#ff3131]" />
            </button>
          </div>
        </div>

        {/* Search Popup */}
        {isSearchOpen && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-4 relative">
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-[#ff3131] p-1"
                aria-label="Close search"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
              <h2 className="text-lg font-semibold mb-4 text-center font-montaga">Search Products & Categories</h2>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#ff3131] font-montaga"
                placeholder="Type to search..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                autoFocus
              />
              <ul className="max-h-60 overflow-y-auto">
                {filteredOptions.length > 0 ? (
                  filteredOptions.map(opt => (
                    <li key={opt.label}>
                      <button
                        className="w-full text-left px-3 py-3 rounded-lg hover:bg-[#ff3131] hover:text-white transition-colors mb-1 flex items-center gap-3"
                        onClick={() => handleSearchSelect(opt.href)}
                      >
                        {opt.img && (
                          <Image
                            src={opt.img}
                            alt={opt.label}
                            width={40}
                            height={40}
                            className="rounded object-contain bg-gray-100"
                          />
                        )}
                        <span className="font-semibold text-base">{opt.label}</span>
                      </button>
                    </li>
                  ))
                ) : (
                  <li className="text-gray-500 px-3 py-3">No results found.</li>
                )}
              </ul>
            </div>
          </div>
        )}

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-[9998]"
            onClick={toggleMobileMenu}
          />
        )}

        {/* Mobile Menu Sidebar */}
        <div 
          className={`lg:hidden fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white z-[9999] transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Mobile menu header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <Link href="/" onClick={toggleMobileMenu}>
              <Image
                src="/images/party-delight-logo-v2.png"
                alt="Party Delight Logo"
                width={120}
                height={40}
                className="w-20 h-auto"
              />
            </Link>
            <button
              className="text-[#ff3131] p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile menu content */}
          <div className="flex flex-col h-full">
            <nav className="flex-1 overflow-y-auto p-4">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.label}>
                    {item.subItems ? (
                      <details className="group">
                        <summary className="flex items-center justify-between py-3 px-2 rounded-lg hover:bg-gray-50 cursor-pointer list-none">
                          <Link 
                            href={item.href} 
                            className={`text-lg font-heading ${item.current ? 'text-[#ff3131]' : 'text-gray-700'}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                          <ChevronDown className="w-5 h-5 text-[#ff3131] group-open:rotate-180 transition-transform" />
                        </summary>
                        <ul className="pl-4 mt-2 space-y-2">
                          {item.subItems.map((cat) => (
                            <li key={cat.slug}>
                              <Link 
                                href={`/category/${cat.slug}`} 
                                className="flex items-center gap-3 py-2 px-2 rounded-lg hover:bg-gray-50 text-[#ff3131] hover:text-[#a05d2c] transition-colors" 
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <Image 
                                  src={cat.image} 
                                  alt={cat.name} 
                                  width={24} 
                                  height={24} 
                                  className="rounded object-contain bg-gray-100 border border-[#ff3131]" 
                                />
                                <span className="text-sm font-medium">{cat.name}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </details>
                    ) : (
                      <Link
                        href={item.href}
                        className={`block py-3 px-2 rounded-lg text-lg font-heading transition-colors ${
                          item.current 
                            ? 'text-[#ff3131] bg-red-50' 
                            : 'text-gray-700 hover:text-[#ff3131] hover:bg-gray-50'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile contact info and social icons */}
            <div className="border-t border-gray-200 p-4 bg-gray-50">
              <div className="space-y-3">
                <h3 className="font-heading text-lg text-[#ff3131] font-semibold">Get in touch with us</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#ff3131] mt-0.5 flex-shrink-0" />
                    <span className="break-words">6638 152A St #115, Surrey, BC V3S 5X5</span>
                  </div>
                  <a href="mailto:partydelightsca@outlook.com" className="flex items-center gap-2 hover:underline">
                    <Mail className="w-4 h-4 text-[#ff3131] flex-shrink-0" /> 
                    <span>partydelightsca@outlook.com</span>
                  </a>
                  <a href="tel:6045930080" className="flex items-center gap-2 hover:underline">
                    <Phone className="w-4 h-4 text-[#ff3131] flex-shrink-0" /> 
                    <span>(604) 593-0080</span>
                  </a>
                </div>
                <div className="flex gap-4 pt-2">
                  <a 
                    href="https://www.facebook.com/partydelightsca/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white hover:bg-gray-100 transition-colors"
                  >
                    <Facebook className="w-5 h-5 text-[#ff3131]" />
                  </a>
                  <a 
                    href="https://www.instagram.com/partydelightsca/?hl=en" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white hover:bg-gray-100 transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-[#ff3131]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

function NavLink({
  href,
  label,
  current = false,
  noArrow = false,
}: {
  href: string;
  label: string;
  current?: boolean;
  noArrow?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-1 transition-colors duration-200 hover:text-[#ff3131] ${
        current ? 'text-[#ff3131] underline underline-offset-4' : 'text-gray-700'
      }`}
    >
      {label}
      {!noArrow && <ChevronDown className="w-4 h-4 mt-0.5" />}
    </Link>
  );
}