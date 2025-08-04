"use client";

import React, { useState } from 'react';

interface ProductEnquiryModalProps {
  productName: string;
}

const ProductEnquiryModal: React.FC<ProductEnquiryModalProps> = ({ productName }) => {
  const [showModal, setShowModal] = useState(false);
  const [enquiry, setEnquiry] = useState('');

  return (
    <>
      <button
        className="bg-black text-white font-heading px-8 py-3 rounded-full text-base tracking-wide hover:bg-[#920804] transition"
        onClick={() => setShowModal(true)}
      >
        Product Enquiry
      </button>
      {showModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md relative">
            <button
              className="absolute top-3 right-3 text-2xl text-grey hover:text-[#920804] focus:outline-none"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="font-heading text-2xl mb-4 text-[#920804]">Product Enquiry</h2>
            <form
              className="space-y-5"
              onSubmit={e => {
                e.preventDefault();
                setShowModal(false);
                setEnquiry('');
                // You can add your submit logic here
              }}
            >
              <div>
                <label className="block font-sans text-grey mb-2">Product</label>
                <input
                  type="text"
                  value={productName}
                  readOnly
                  className="w-full border border-grey/30 rounded-md px-4 py-3 font-sans bg-gray-100 text-dark-brown cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block font-sans text-grey mb-2">Your Enquiry</label>
                <textarea
                  rows={4}
                  className="w-full border border-grey/30 rounded-md px-4 py-3 font-sans bg-white focus:outline-none focus:border-light-brown resize-none"
                  placeholder="Type your enquiry here..."
                  value={enquiry}
                  onChange={e => setEnquiry(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white font-heading px-8 py-3 rounded-full text-base tracking-wide hover:bg-dark-brown transition"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductEnquiryModal; 