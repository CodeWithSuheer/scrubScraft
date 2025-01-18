import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import { useAppSelector } from "../../app/hooks";

interface Image {
  downloadURL: string;
  name: string;
  type: string;
}
interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: Image;
  averageRating: number;
  sale_price: number | undefined;
  price: number;
  stock: number;
}

const LatestProducts = ({ latestProducts }: { latestProducts: Product[] }) => {
  const navigate = useNavigate();
  const [slidesToShow, setSlidesToShow] = useState(4);
  const sliderRef = useRef<Slider>(null);

  // const loading = useAppSelector((state) => state.products.Productloading);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setSlidesToShow(4); // Full Desktop view
      } else if (window.innerWidth >= 1024) {
        setSlidesToShow(3); // Desktop view
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2); // Tablet view
      } else {
        setSlidesToShow(1); // Mobile view
      }
    };

    // Initial update
    handleResize();

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // HANDLE ITEM CLICK
  const handleItemClick = (productId: string) => {
    navigate(`/selectedItem/${productId}`);
    window.scroll(0, 0);
  };

  return (
    <>
      <section className="py-14 sm:py-16 px-5 sm:px-4 xl:px-0">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="header text-center">
            <span className="tracking-wide py-1 px-2 font-medium rounded-sm text-white bg-blue-500 text-[11px] lg:text-[13px]">
              POPULAR
            </span>
            <h2 className="mt-2.5 text-2xl font-semibold md:text-4xl lg:text-4xl md:leading-tight">
              Our Products
            </h2>
            <p className="mt-3 text-gray-700">
              Explore our hottest picks! Discover the most sought-after eyewear
              styles loved by our customers.
            </p>
          </div>

          {/* DATA */}
          <div className="data">
            <div className="relative mt-8 sm:mt-12">
              <>
                <Slider ref={sliderRef} {...settings}>
                  {latestProducts?.map((data, index) => (
                    <div
                      key={index}
                      onClick={() => handleItemClick(String(data.id))}
                      className="mx-0 pb-7"
                    >
                      <motion.div
                        key={data.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-gray-50 rounded-lg shadow-md overflow-hidden mx-3"
                      >
                        <img
                          src={`/placeholder.svg?height=200&width=300&text=${data.name}`}
                          alt={data.name}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2">
                            {data.name}
                          </h3>
                          <p className="text-gray-600">{data?.description}</p>
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </Slider>

                <button
                  type="button"
                  title="arrows"
                  onClick={previous}
                  className="ml-8 xl:ml-0 absolute top-[40%] -left-4 mx-1.5 hidden sm:inline-block rounded-full border text-white bg-primary hover:text-white border-primary p-2.5 focus:outline-none"
                >
                  <IoIosArrowBack size={22} />
                </button>

                <button
                  type="button"
                  title="arrows"
                  onClick={next}
                  className="mr-8 xl:mr-0 absolute top-[40%] -right-4 mx-1.5 hidden sm:inline-block rounded-full border text-white bg-primary hover:text-white border-primary p-2.5 focus:outline-none"
                >
                  <IoIosArrowForward size={22} />
                </button>
              </>
            </div>

            <div className="slider_button sm:hidden flex flex-row justify-center">
              {/* left arrow */}
              <button
                title="arrows"
                type="button"
                onClick={previous}
                className="mx-1.5 inline-block rounded-full border text-[#EC72AF] hover:text-white border-[#EC72AF] hover:bg-[#EC72AF] p-2.5 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-left "
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>

              {/* right arrow */}
              <button
                title="arrows"
                type="button"
                onClick={next}
                className="mx-1.5 inline-block rounded-full border text-[#EC72AF] hover:text-white border-[#EC72AF] hover:bg-[#EC72AF] p-2.5 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-right "
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestProducts;
