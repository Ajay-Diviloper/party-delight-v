/*
USAGE EXAMPLES:

1. Basic Usage (with default text and arrow):
<RotatingTextCircle />

2. Custom Text with Arrow (for ParallaxSection):
<RotatingTextCircle 
  text="• Party Delight • Party Delight • Party Delight • Party Delight"
  centerIcon="→"
/>

3. Custom Text with Play Icon (for VideoLayout):
<RotatingTextCircle 
  text="• A NEW TASTE • A NEW TASTE • A NEW TASTE • A NEW TASTE"
  centerIcon="▶"
/>

4. Custom Styling with Arrow:
<RotatingTextCircle 
  text="• Fresh Cakes • Fresh Cakes • Fresh Cakes • Fresh Cakes"
  fontSize={16}
  fillColor="#ff3131"
  animationDuration={20}
  centerIcon="→"
/>

5. Different Text Content with Play Icon:
<RotatingTextCircle 
  text="• Order Now • Order Now • Order Now • Order Now"
  fillColor="#8B4513"
  fontSize={14}
  centerIcon="▶"
/>

6. With Custom Classes and Arrow:
<RotatingTextCircle 
  text="• Contact Us • Contact Us • Contact Us • Contact Us"
  className="my-custom-class"
  fillColor="#fff"
  animationDuration={12}
  centerIcon="→"
/>

7. For Products Page with Arrow:
<RotatingTextCircle 
  text="• Browse Products • Browse Products • Browse Products • Browse Products"
  fillColor="#ff3131"
  fontSize={13}
  animationDuration={18}
  centerIcon="→"
/>

8. For Video Sections with Play Icon:
<RotatingTextCircle 
  text="• WATCH OUR PROCESS • WATCH OUR PROCESS • WATCH OUR PROCESS • WATCH OUR PROCESS"
  fillColor="#fff"
  fontSize={15}
  animationDuration={16}
  centerIcon="▶"
/>
*/

interface RotatingTextCircleProps {
  text?: string;
  fontSize?: number;
  fontFamily?: string;
  fillColor?: string;
  animationDuration?: number;
  className?: string;
  centerIcon?: string | React.ReactNode; // <-- allow element
}

export default function RotatingTextCircle({
  text = "• Explore our cakes • Explore our cakes • Explore our cakes",
  fontSize = 13,
  fontFamily = "Arial, sans-serif",
  fillColor = "#fff",
  animationDuration = 15,
  className = "",
  centerIcon = "→"
}: RotatingTextCircleProps) {
  return (
    <div className={className}>
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
          <text fill={fillColor} fontSize={fontSize} fontFamily={fontFamily}>
            <textPath href="#circlePath" startOffset="0%">
              {text}
            </textPath>
          </text>
        </svg>
        
        {/* Center icon/text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl md:text-4xl text-white animate-pulse">
            {centerIcon}
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
              animation: spin-slow ${animationDuration}s linear infinite;
            }
          `}
        </style>
      </div>
    </div>
  );
}
   