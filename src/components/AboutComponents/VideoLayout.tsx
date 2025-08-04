"use client";
import React, { useState, useRef, useEffect } from 'react';

const CIRCLE_TEXT = 'A NEW TASTE A NEW TASTE A NEW TASTE A NEW TASTE ';

const VideoLayout = () => {
  const [offset, setOffset] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const requestRef = useRef<number | undefined>(0);

  // Animate the circular text
  useEffect(() => {
    let start: number | null = null;
    const animate = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = (timestamp - start) / 80; // Adjust speed
      setOffset(progress % 100);
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current as number);
  }, []);

  return (
    <section className="relative w-full min-h-[600px] bg-cover bg-center bg-fixed flex flex-col items-center justify-center" style={{ backgroundImage: "url('/images/slide-4.jpg')" }}>
      {/* Animated Circle Text & Play Icon */}
      <div className="relative flex items-center justify-center w-48 h-48 mb-8">
        <svg viewBox="0 0 200 200" className="w-full h-full absolute top-0 left-0">
          <defs>
            <path id="circlePath" d="M 100, 100 m -90, 0 a 90,90 0 1,1 180,0 a 90,90 0 1,1 -180,0" />
          </defs>
          <text fill="#fff" fontSize="18" fontFamily="sans-serif">
            <textPath xlinkHref="#circlePath" startOffset={`${offset}%`}>
              {CIRCLE_TEXT}
            </textPath>
          </text>
        </svg>
        <button
          className="relative z-10 bg-white/30 hover:bg-white/50 rounded-full p-6 shadow-lg transition flex items-center justify-center"
          aria-label="Play Video"
          onClick={() => setIsModalOpen(true)}
        >
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="32" fill="rgba(0,0,0,0.4)" />
            <polygon points="26,20 48,32 26,44" fill="#fff" />
          </svg>
        </button>
      </div>
      <div className="text-white text-xl font-semibold bg-black/40 px-6 py-4 rounded-lg shadow-lg">
        Discover our story and see how we bring celebrations to life. (Video coming soon)
      </div>
      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="relative w-full max-w-2xl mx-4 pointer-events-auto">
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/80 transition z-10 pointer-events-auto"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close Video"
              type="button"
            >
              &times;
            </button>
            <video
              src="/images/header_bg_video.mp4"
              controls
              autoPlay
              className="w-full rounded-lg shadow-lg bg-black"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoLayout;