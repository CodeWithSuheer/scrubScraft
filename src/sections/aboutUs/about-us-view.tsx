import { BlueLabel } from "../../components/label/label";
import TopHeader from "../../components/header/top-header";
//
import "../sections.css";
import MissionVision from "./mission-vision";
import Testimonials from "../home/testimonials";

const AboutUsView = () => {
  return (
    <>
      <TopHeader
        title="About Us"
        subtitle="ABOUT US"
        backgroundClass="contact"
      />

      <section className="py-3 lg:py-16 px-4 sm:px-4 xl:px-0">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          {/* FIRST CARD */}
          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            {/* LEFT SIDE */}
            <div className="left_img group overflow-hidden">
              <img
                className="transition duration-500 group-hover:scale-105 w-full"
                src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/2543.jpg?v=1717101293"
                alt=""
              />
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center">
              <div className="ml-2 lg:ml-10">
                <BlueLabel text="EYEWEAR" />
                <h2 className="mt-3  mb-1.5 sm:mb-3 text-2xl md:text-3xl font-semibold">
                  Innovative Urban Eyewear
                </h2>
                <p className="mb-7 sm:mb-7 lg:mb-7 text-md max-w-full">
                  Experience the pinnacle of fashion with Googly's eyewear,
                  inspired by the vibrant and dynamic spirit of New York City.
                  Our frames are meticulously crafted to reflect the energy and
                  sophistication of urban life, offering you the perfect blend
                  of style and functionality.
                </p>

                <p className="mb-7 sm:mb-7 lg:mb-7 text-md max-w-full">
                  Each piece in our collection showcases exceptional attention
                  to detail and superior craftsmanship. We combine cutting-edge
                  design with timeless elegance, ensuring our eyewear not only
                  enhances your vision but also elevates your personal style.
                  Discover eyewear that captures the essence of modern urban
                  living with Googly.
                </p>
              </div>
            </div>
          </div>

          {/* SECOND CARD */}
          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
            {/* LEFT SIDE */}
            <div className="flex items-center">
              <div className="ml-2 sm:ml-0 mr-0 lg:mr-10">
                <BlueLabel text="MISSION" />
                <h2 className="mt-3  mb-1.5 sm:mb-3 text-2xl md:text-3xl font-semibold">
                  Our Mission
                </h2>
                <p className="mb-7 sm:mb-7 lg:mb-7 text-md max-w-full">
                  At Googly, our mission is to revolutionize eyewear by
                  combining exceptional design, superior quality, and unmatched
                  comfort. We are dedicated to crafting eyewear that not only
                  enhances your vision but also elevates your personal style.
                  Our commitment to innovation and excellence drives us to
                  continuously improve and set new standards in the industry.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="left_img group overflow-hidden">
              <img
                className="transition duration-500 object-fill group-hover:scale-105 w-full"
                src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/118966.jpg?v=1717101726"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <MissionVision />

      <section className="py-3 lg:py-16 px-4 sm:px-4 xl:px-0">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            {/* LEFT SIDE */}
            <div className="left_img group overflow-hidden">
              <img
                className="transition duration-500 group-hover:scale-105 w-full"
                src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/2543.jpg?v=1717101293"
                alt=""
              />
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center">
              <div className="ml-2 lg:ml-10">
                <BlueLabel text="EYEWEAR" />
                <h2 className="mt-3  mb-1.5 sm:mb-3 text-2xl md:text-3xl font-semibold">
                  Innovative Urban Eyewear
                </h2>
                <p className="mb-7 sm:mb-7 lg:mb-7 text-md max-w-full">
                  Experience the pinnacle of fashion with Googly's eyewear,
                  inspired by the vibrant and dynamic spirit of New York City.
                  Our frames are meticulously crafted to reflect the energy and
                  sophistication of urban life, offering you the perfect blend
                  of style and functionality.
                </p>

                <p className="mb-7 sm:mb-7 lg:mb-7 text-md max-w-full">
                  Each piece in our collection showcases exceptional attention
                  to detail and superior craftsmanship. We combine cutting-edge
                  design with timeless elegance, ensuring our eyewear not only
                  enhances your vision but also elevates your personal style.
                  Discover eyewear that captures the essence of modern urban
                  living with Googly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
};

export default AboutUsView;
