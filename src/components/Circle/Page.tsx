

export default function RotatingTextCircle()  {
    return (
  <div className="">
  <div className="relative w-65 h-65">
  <svg
            viewBox="0 0 200 200"
            className="absolute top-0 left-0 w-full h-full spin-slow"
  >
  <defs>
  <path
                id="circlePath"
                d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
              />
  </defs>
  <text fill="#fff" fontSize="13"  fontFamily="Arial, sans-serif">
  <textPath href="#circlePath" startOffset="0%">
• Explore our cakes • Explore our cakes • Explore our cakes • Explore our cakes

  </textPath>
  </text>
  </svg>
   
          {/* Center icon/text */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl md:text-4xl text-white animate-pulse">
              →
            </div>
  </div>
   
          {/* Custom animation CSS */}
  <style>
            {`
              @keyframes spin-slow {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
              .spin-slow {
                animation: spin-slow 15s linear infinite;
              }
            `}
  </style>
  </div>
  </div>
    );
  };
   