import { mockedLatestProducts } from "../../../mock/productData";
import ContactUs from "../contact-us";
import CTA from "../cta";
import HeroSection from "../hero-section";
import LatestProducts from "../LatestProducts";
import OurProducts from "../OurProducts";
import Trusted from "../trusted";
import WhyChooseUs from "../why-choose";
import WhyChooseV2 from "../why-choose-v2";

const HomeView = () => {
  return (
    <>
      <HeroSection />
      <WhyChooseV2 />
      <OurProducts latestProducts={mockedLatestProducts} />
      <Trusted />
      <CTA />
      <LatestProducts latestProducts={mockedLatestProducts} />
      <WhyChooseUs />
      <ContactUs />
    </>
  );
};

export default HomeView;
