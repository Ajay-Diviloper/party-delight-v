import React from "react";

const GetInTouch = () => (
  <div
    className="w-full py-12 md:py-20 flex flex-col items-center justify-center px-4 md:px-0 bg-[#ff3131] relative overflow-hidden"
  >
    {/* Decorative Circles */}
    <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl z-0" />
    <div className="absolute -bottom-16 right-0 w-56 h-56 bg-white/10 rounded-full blur-2xl z-0" />
    <h2 className="text-2xl md:text-4xl font-heading text-white mb-6 md:mb-10 text-center drop-shadow-2xl px-4 z-10 animate-fadeInUp">
      STAY IN TOUCH 
    </h2>
    <p className="text-white  !important text-base md:text-lg mb-6 max-w-2xl text-center font-sans z-10 animate-fadeInUp" style={{color: '#fff'}}>
      Subscribe to our newsletter for exclusive offers, the latest updates, and sweet surprises delivered straight to your inbox!
    </p>
    <form className="flex w-full max-w-2xl justify-center px-4 md:px-0 z-10 animate-fadeInUp">
      <div className="flex flex-col md:flex-row w-full bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden border-2 border-white/30">
        <input
          type="email"
          placeholder="Your email address"
          className="flex-1 px-4 md:px-6 py-3 md:py-4 text-base md:text-lg outline-none bg-transparent text-white placeholder-[#ff3131] font-sans"
          style={{ minWidth: 0, color: '#fff' }}
        />
        <button
          type="submit"
          className="bg-[#ff3131] text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-serif font-semibold hover:bg-white hover:text-[#ff3131] transition border-t md:border-t-0 md:border-l border-[#ff3131]"
        >
          Subscribe
        </button>
      </div>
    </form>
  </div>
);

export default GetInTouch;