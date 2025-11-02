import HeroSection from '../../sections/heroSection/HeroSection'
import FlashSaleSection from '../../sections/flashSaleSection/FlashSaleSection';
import BestSaleProducts from '../../sections/bestSaleingProducts/BestSaleProducts';
import CategorySection from '../../sections/categorySection/CategorySection';
import HomePoster from '../../sections/homePoster/HomePoster';
import OurProductSection from '../../sections/ourProductSection/OurProductSection';
import FeaturedSection from '../../sections/featuredSection/FeaturedSection';
import ServicesSection from '../../sections/servicesSection/ServicesSection';


const Home = () => {
  return (
    <div>
      <HeroSection/>
      <FlashSaleSection/>
      <CategorySection/>
      <BestSaleProducts/>
      <HomePoster/>
      <OurProductSection/>
      <FeaturedSection/>
      <ServicesSection/>
      
    </div>
  )
}

export default Home