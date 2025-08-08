import AllProducts from "@/components/HomeComponents/AllProducts";
import CategoriesComponent from "@/components/HomeComponents/CategoriesComponent";
//import FeaturedProducts from "@/components/HomeComponents/FeaturedProducts";
import HomeSlider from "@/components/HomeComponents/HomeSlider";
import InformativeSection from "@/components/HomeComponents/InformativeSection";
import InstagramSection from "@/components/HomeComponents/InstagramSection";
import ParallaxSection from "@/components/HomeComponents/ParallaxSection";
// import Partners from "@/components/HomeComponents/Partners";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Celebrate Every Occasion Deliciously',
  description: 'Welcome to Your Bakery! We offer fresh, delicious bakery products including breads, cakes, and muffins baked daily.',
};

export default function Home() {
  return (
    <>
      <HomeSlider />
    {/*   <FeaturedProducts />*/}

      {/* <Partners /> */}
      <CategoriesComponent />
      {/* Example 1: Default props */}
      <ParallaxSection />
      
      {/* Example 2: Custom props for different sections */}
      {/* <ParallaxSection 
        circleText="• Party Delight • Party Delight • Party Delight • Party Delight"
        circleColor="#ff3131"
        circleFontSize={16}
        circleAnimationDuration={20}
      /> */}
      
      {/* Example 3: Different text and styling */}
      {/* <ParallaxSection 
        circleText="• Fresh Cakes • Fresh Cakes • Fresh Cakes • Fresh Cakes"
        circleColor="#8B4513"
        circleFontSize={13}
        circleAnimationDuration={18}
      /> */}
      <AllProducts />
      <InformativeSection />
      <InstagramSection />
  </>
  );
}
