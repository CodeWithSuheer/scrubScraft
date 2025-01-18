import { mockedLatestProducts } from "../../../mock/productData";
import CTA from "../cta";
import FAQ from "../faqs";
import HeroSection from "../hero-section";
import HomeAbout from "../home-about";
import LatestProducts from "../LatestProducts";
// import Products from "../products";
import Testimonials from "../testimonials";
import WhyChooseUs from "../why-choose";

const HomeView = () => {
  return (
    <>
      <HeroSection />
      <HomeAbout />
      <LatestProducts latestProducts={mockedLatestProducts} />
      {/* <Products /> */}
      <WhyChooseUs />
      <Testimonials />
      <CTA />
      <FAQ />
    </>
  );
};

export default HomeView;
