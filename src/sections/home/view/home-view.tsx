import { mockedLatestProducts } from "../../../mock/productData";
import CTA from "../cta";
import FAQ from "../faqs";
import HeroSection from "../hero-section";
import HomeAbout from "../home-about";
import OurProducts from "../OurProducts";
import Testimonials from "../testimonials";
import WhyChooseUs from "../why-choose";

const HomeView = () => {
  return (
    <>
      <HeroSection />
      <HomeAbout />
      <OurProducts latestProducts={mockedLatestProducts} />
      <WhyChooseUs />
      <CTA />
      <FAQ />
      <Testimonials />
    </>
  );
};

export default HomeView;
