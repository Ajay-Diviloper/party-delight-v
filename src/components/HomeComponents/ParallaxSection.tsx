"use client";

import RotatingTextCircle from "../Circle/Page";


const ParallaxSection = () => {
  // For animating the startOffset of the textPath
 // const [offset, setOffset] = useState(0);
 // const requestRef = useRef<number | undefined>(0);

  // useEffect(() => {
  //   let start: number | null = null;

  //   const animate = (timestamp: number) => {
  //     if (start === null) start = timestamp;
  //     const progress = (timestamp - start) / 12000; // 12 seconds per full rotation - smooth and readable
  //     const newOffset = (progress * 100) % 100; // Continuous loop from 0 to 100

  //     setOffset(newOffset);
  //     requestRef.current = requestAnimationFrame(animate);
  //   };

  //   requestRef.current = requestAnimationFrame(animate);

  //   return () => {
  //     if (requestRef.current) {
  //       cancelAnimationFrame(requestRef.current);
  //     }
  //   };
  // }, []);

  return (
<section
  className="
    relative w-full min-h-[600px]
    bg-no-repeat bg-center bg-contain md:bg-fixed
    md:bg-[url('/images/cake.jpg')] bg-gradient-to-t from-black/90 via-black/90 to-black]
  "
>      {/* <div className="absolute inset-0 bg-black/30" /> */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-0"></div>

      <div className="relative container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        {/* Left Column */}
        <div className="w-full md:w-1/2 z-10">
          <div className="bg-[#ff3131] bg-opacity-95 text-white rounded-lg md:rounded-none p-10 md:py-8 md:px-8 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-heading font-normal  mb-3 flex items-center gap-4">
              DISCOVER EXCEPTIONAL CAKES
              <span className="hidden md:inline-block w-20 h-0.5 bg-white/60" />
            </h2>
            <ul className="space-y-3 md:space-y-4 text-sm md:text-base font-sans py-2 md:py-3 font-light">
              <li className="flex items-start gap-2">
                <span className="mt-1 block w-2 h-2 bg-white rounded-full flex-shrink-0" />
                <span>
                  Indulge in our collection of <span className="underline font-semibold">premium, handcrafted cakes</span> made with the finest ingredients and meticulous attention to detail.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 block w-2 h-2 bg-white rounded-full flex-shrink-0" />
                <span>
                  From elegant classics to bespoke creations, our expert bakers deliver cakes that elevate every occasion—ensuring both exquisite taste and stunning presentation.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 block w-2 h-2 bg-white rounded-full flex-shrink-0" />
                <span>
                  Experience personalized service and seamless ordering for birthdays, weddings, corporate events, and more. Your vision, our expertise.
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* Right Column with improved circular animation */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0 z-10 min-h-[200px] md:min-h-[500px]">
         
         
         
         
          {/* <div className="relative flex items-center justify-center w-32 h-32 md:w-48 md:h-48">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <defs>
                <path id="circlePath" d="M 100, 100 m -90, 0 a 90,90 0 1,1 180,0 a 90,90 0 1,1 -180,0" />
              </defs>
              <text
                className="learn-more-animated z-50"
                fill="#fff"
                fontSize="14"
                fontFamily="sans-serif"
                fontWeight="300"
                letterSpacing="0.5"
                style={{
                  transform:
                    "translate(var(--lakit-tfx-translate-x, 0), var(--lakit-tfx-translate-y, 0)) scale(var(--lakit-tfx-scale-x, 1), var(--lakit-tfx-scale-y, 1)) skew(var(--lakit-tfx-skew-x, 0), var(--lakit-tfx-skew-y, 0)) rotateX(var(--lakit-tfx-rotate-x, 0)) rotateY(var(--lakit-tfx-rotate-y, 0)) rotateZ(var(--lakit-tfx-rotate-z, 0))",
                }}
              >
                <textPath xlinkHref="#circlePath" startOffset={`${offset}%`}>
                  • Explore our cakes • Explore our cakes • Explore our cakes • Explore our cakes • Explore our cakes • Explore our cakes • Explore our cakes • Explore our cakes • Explore our cakes • Explore our cakes • Explore our cakes • Explore our cakes • Explore our cakes • Explore our cakes • Explore our cakes • Explore our cakes • Explore our cakes • Explore our cakes • Explore our cakes • Explore our cakes • Explore our cakes • Explore our cakes • Explore our cakes • Explore our cakes • Explore our cakes • Explore our cakes • Explore our cakes • Explore our cakes • Explore our cakes • Explore our cakes •
                </textPath>
              </text>
            </svg>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl md:text-4xl text-white animate-pulse">
              →
            </div>
          </div> */}
          <RotatingTextCircle/>
        </div>
      </div>
    </section>
  )
}

export default ParallaxSection