'use client';
import React from 'react'
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi'

const info = [
  {
    icon: FiMapPin,
    lines: [
      '6638 152A St #115, Surrey, BC V3S 5X5',
    ],
  },
  {
    icon: FiPhone,
    lines: [
      '+1 (604) 593-0080',
    ],
  },
  {
    icon: FiMail,
    lines: [
      'partydelightsca@outlook.com',
    ],
  },
]

const InformativeForm = () => {
  return (
    <section className="w-full flex flex-col md:flex-row justify-center items-stretch gap-8 md:gap-12 py-8 md:py-16 px-2 md:px-16 bg-white">
      {/* Info Section */}
      <div className="flex-1 max-w-md bg-white rounded-2xl p-6 md:p-10 flex flex-col justify-center mb-8 md:mb-0 mx-auto md:mx-0">
        <h2 className="font-heading text-3xl md:text-5xl mb-4 text-dark-brown">Get in touch with us ...</h2>
        <p className="font-sans text-grey mb-8 md:mb-10 text-base leading-relaxed">
          We&apos;d love to hear from you! Reach out for orders, questions, or just to say hello. Our team is here to help make your celebrations sweeter.
        </p>
        <div className="space-y-8 md:space-y-10">
          {info.map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className="flex items-center gap-4 md:gap-5">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full border border-light-brown flex items-center justify-center bg-white">
                  <Icon className="text-light-brown text-xl md:text-2xl" />
                </div>
                <div className="flex flex-col font-sans text-dark-brown text-sm md:text-base">
                  {item.lines.map((line, i) => (
                    <span key={i}>{line}</span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
        <div className="flex gap-4 mt-8 flex-col">
          <span className="font-sans text-grey text-sm mb-2">Follow us</span>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/partydelightsca/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="24" height="24" fill="currentColor" className="text-[#bc8157]"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
            </a>
            <a href="https://www.instagram.com/partydelightsca/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="24" height="24" fill="currentColor" className="text-[#bc8157]"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.425 3.635 1.392 2.668 2.359 2.374 3.532 2.315 4.808.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.059 1.276.353 2.449 1.32 3.416.967.967 2.14 1.261 3.416 1.32C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.276-.059 2.449-.353 3.416-1.32.967-.967 1.261-2.14 1.32-3.416.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.059-1.276-.353-2.449-1.32-3.416-.967-.967-2.14-1.261-3.416-1.32C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
          </div>
        </div>
      </div>
      {/* Divider for desktop */}
      <div className="hidden md:flex items-center">
        <div className="w-px h-96 bg-transparent mx-2" />
      </div>
      {/* Form Section */}
      <div className="flex-1 max-w-xl bg-white rounded-2xl shadow-md p-6 md:p-10 flex flex-col justify-center mx-auto md:mx-0">
        <h3 className="font-heading text-2xl md:text-3xl mb-6 md:mb-8 text-dark-brown">Say Something...</h3>
        <form className="space-y-5 md:space-y-7">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block font-sans text-grey mb-2">First Name*</label>
              <input type="text" className="w-full border border-grey/30 rounded-md px-4 py-3 focus:outline-none focus:border-light-brown font-sans bg-white" />
            </div>
            <div className="flex-1 mt-4 md:mt-0">
              <label className="block font-sans text-grey mb-2">Last Name*</label>
              <input type="text" className="w-full border border-grey/30 rounded-md px-4 py-3 focus:outline-none focus:border-light-brown font-sans bg-white" />
            </div>
          </div>
          <div>
            <label className="block font-sans text-grey mb-2">Email Address*</label>
            <input type="email" className="w-full border border-grey/30 rounded-md px-4 py-3 focus:outline-none focus:border-light-brown font-sans bg-white" />
          </div>
          <div>
            <label className="block font-sans text-grey mb-2">Message*</label>
            <textarea rows={5} className="w-full border border-grey/30 rounded-md px-4 py-3 focus:outline-none focus:border-light-brown font-sans bg-white resize-none" />
          </div>
          <button type="submit" className="w-full md:w-auto bg-black text-white font-heading px-10 py-4 rounded-full mt-2 text-base tracking-wide">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  )
}

export default InformativeForm