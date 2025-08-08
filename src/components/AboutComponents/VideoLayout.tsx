/*
USAGE EXAMPLES FOR VIDEO LAYOUT WITH PROPS:

1. Basic Usage (with default props):
<VideoLayout />

2. Custom Text for About Page:
<VideoLayout 
  circleText="• OUR STORY • OUR STORY • OUR STORY • OUR STORY"
  circleColor="#ff3131"
  circleFontSize={16}
  circleAnimationDuration={15}
/>

3. Different Styling:
<VideoLayout 
  circleText="• DISCOVER US • DISCOVER US • DISCOVER US • DISCOVER US"
  circleColor="#fff"
  circleFontSize={20}
  circleAnimationDuration={10}
/>

4. For Products Page:
<VideoLayout 
  circleText="• WATCH OUR PROCESS • WATCH OUR PROCESS • WATCH OUR PROCESS • WATCH OUR PROCESS"
  circleColor="#8B4513"
  circleFontSize={14}
  circleAnimationDuration={18}
/>

5. For Contact Page:
<VideoLayout 
  circleText="• SEE OUR WORK • SEE OUR WORK • SEE OUR WORK • SEE OUR WORK"
  circleColor="#ff3131"
  circleFontSize={15}
  circleAnimationDuration={16}
/>

6. For Home Page:
<VideoLayout 
  circleText="• A NEW TASTE • A NEW TASTE • A NEW TASTE • A NEW TASTE"
  circleColor="#fff"
  circleFontSize={18}
  circleAnimationDuration={12}
/>

7. For Blog Page:
<VideoLayout 
  circleText="• BEHIND THE SCENES • BEHIND THE SCENES • BEHIND THE SCENES • BEHIND THE SCENES"
  circleColor="#8B4513"
  circleFontSize={13}
  circleAnimationDuration={19}
/>
*/

"use client";
import React, { useState } from 'react';
import RotatingTextCircle from '../Circle/Page';

interface VideoLayoutProps {
  circleText?: string;
  circleColor?: string;
  circleFontSize?: number;
  circleAnimationDuration?: number;
centerIcon?: string | undefined
}

const VideoLayout = ({
  circleText = "• A NEW TASTE • A NEW TASTE • A NEW TASTE • A NEW TASTE • A NEW TASTE",
  circleColor = "#fff",
  circleFontSize = 13,
  circleAnimationDuration = 12
}: VideoLayoutProps = {}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative w-full min-h-[600px] bg-cover bg-center bg-fixed flex flex-col items-center justify-center" style={{ backgroundImage: "url('/images/slide-4.jpg')" }}>
      {/* Animated Circle Text & Play Icon */}
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-black/20 z-0"></div>

      <div className="flex flex-col items-center justify-center mb-8">
      <RotatingTextCircle
  text={circleText}
  fillColor={circleColor}
  fontSize={circleFontSize}
  animationDuration={circleAnimationDuration}
  centerIcon={
    <svg
      width="54"
      height="54"
      viewBox="0 0 64 64"
      fill= "#ff3131" // #ff3131
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32" cy="32" r="32" fill="rgba(0,0,0,0.4)" />
      <polygon points="26,20 48,32 26,44" fill= "#ff3131"  />
    </svg>
  }
/>
      </div>
      {/* <div className="relative flex items-center justify-center w-48 h-48 mb-8">
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
      </div> */}
     {/* <div className="text-white text-xl font-semibold bg-black/70 px-6 py-4 rounded-lg shadow-lg">
  Discover our story and see how we bring celebrations to life. (Video coming soon)
</div> */}

<div className="text-white text-xl font-normal bg-black/70 px-6 py-4 rounded-lg shadow-lg">
  <span className="text-white drop-shadow-lg">
    Discover our story and see how we bring celebrations to life. (Video coming soon)
  </span>
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