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
  title: 'Your Bakery - Fresh Products Daily',
  description: 'Welcome to Your Bakery! We offer fresh, delicious bakery products including breads, cakes, and muffins baked daily.',
};

export default function Home() {
  return (
    <>
      <HomeSlider />
    {/*   <FeaturedProducts />*/}

      {/* <Partners /> */}
      <CategoriesComponent />
      <ParallaxSection />
      <AllProducts />
      <InformativeSection />
      <InstagramSection />
  </>
  );
}
