import HeroSection from "./component/HeroSection";
import FeaturedProducts from "./component/FeaturedProducts"
import LatestProducts from "./component/LatestProducts";
import LowerProducts from "./component/LowerProducts";
import TrandingProducts from "./component/TrandingProducts";

function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturedProducts /> 
      <LatestProducts />
      <LowerProducts />
      <TrandingProducts />
    </main>
  );
}

export default HomePage;

   
   

   
 