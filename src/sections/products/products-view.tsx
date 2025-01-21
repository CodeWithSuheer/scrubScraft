import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
// redux
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAllProductsAsync } from "../../features/productSlice";
// icons
import { FaStar } from "react-icons/fa";
// helpers
import LoadingScreen from "../../components/loading-screen/loading-screen";
import NoProducts from "./no-products";
import { StarRating } from "../../helpers/star-rating";
//
import "../sections.css";

const ProductsView: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [isCategoryVisible, setIsCategoryVisible] = useState(false);

  const allproducts = useAppSelector((state) => state.products.products || []);

  const products = allproducts?.productData?.filter(
    (items: any) => items?.category !== "Bundle"
  );

  const isLoading = useAppSelector((state) => state.products.Productloading);

  const [searchParams] = useSearchParams();
  const page: number = parseInt(searchParams.get("page") || "1", 10);
  const category: string = searchParams.get("category") || "All";

  const toggleCategory = () => {
    setIsCategoryVisible(!isCategoryVisible);
  };

  const renderPaginationLinks = () => {
    const totalPages = allproducts?.totalPages;
    const paginationLinks = [];
    for (let i = 1; i <= totalPages; i++) {
      paginationLinks.push(
        <li onClick={ToTop} key={i}>
          <Link
            to={`/products?category=${category}&page=${i}`}
            className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300 ${
              i === page ? "bg-pink-400 text-white" : "hover:bg-gray-100"
            }`}
            onClick={() => dispatch(getAllProductsAsync({ category, page: i }))}
          >
            {i}
          </Link>
        </li>
      );
    }
    return paginationLinks;
  };

  useEffect(() => {
    dispatch(getAllProductsAsync({ category, page }));
  }, [dispatch, page, category]);

  // HANDLE ITEM CLICK
  const handleItemClick = (productId: string) => {
    navigate(`/selectedItem/${productId}`);
    window.scroll(0, 0);
  };

  //   const handleCategoryFiltering = (category: string) => {
  //     navigate(`/products?category=${category}`);
  //   };

  const ToTop = () => {
    window.scrollTo({
      top: 450,
      behavior: "smooth",
    });
  };

  return (
    <>
      {!isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          {/* BANNER IMAGE */}
          <section className="product_banner">
            <div className="py-12 sm:py-28 about_cont px-2.5 flex justify-center items-center flex-col">
              <h2 className="playfair mb-2 text-black text-2xl sm:text-4xl font-bold text-center max-w-xl">
                Shop
              </h2>
              <h2 className="mb-5 text-black text-md sm:text-md font-light text-center max-w-xl">
                Home / Shop
              </h2>
            </div>
          </section>

          <section>
            <div className="mx-auto max-w-5xl xl:max-w-6xl xxl:max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-5 xl:px-0">
              <div className="mt-8 block lg:hidden">
                <button
                  type="button"
                  title="button"
                  className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
                  onClick={toggleCategory}
                >
                  <span className="text-sm font-medium">
                    {" "}
                    Filters & Sorting{" "}
                  </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`size-4 ${
                      isCategoryVisible ? "rotate-180" : "rtl:rotate-180"
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>

              <div className="mt-4 w-full">
                {/* PRODUCTS GRID */}
                <div className="products">
                  <ul className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                    {!isLoading ? (
                      <>
                        {products?.map((data: any, index: number) => (
                          <li
                            key={index}
                            onClick={() => handleItemClick(String(data.id))}
                          >
                            <div className="group mb-5 relative group w-full bg-white border border-gray-400 hover-border-2 hover:border-[#EC72AF] cursor-pointer">
                              <img
                                className="object-cover w-full min-h-56"
                                src={data?.image.downloadURL}
                                alt="products"
                              />

                              <div className="py-5 text-center">
                                <h3 className="playfair mb-2 text-md sm:text-lg font-semibold text-gray-800">
                                  {data?.name}
                                </h3>

                                <div className="mb-2 flex items-center justify-center gap-1">
                                  {data?.averageRating === 0 ? (
                                    <FaStar className="text-white" />
                                  ) : (
                                    <StarRating rating={data?.averageRating} />
                                  )}
                                </div>

                                <p className="mb-3 text-md text-gray-500">
                                  (
                                  {data.category === "Body Care"
                                    ? "Bodycare"
                                    : data.category}
                                  )
                                </p>

                                {data.sale_price > 0 ? (
                                  <div className="flex justify-center items-center gap-2">
                                    <p className="mb-3 text-md font-semibold text-black">
                                      Rs. {data.sale_price}
                                    </p>
                                    <p className="mb-3 text-md font-semibold text-gray-500 line-through">
                                      Rs. {data.price}
                                    </p>
                                  </div>
                                ) : (
                                  <>
                                    <p className="mb-3 text-md font-semibold text-black">
                                      Rs. {data.price}
                                    </p>
                                  </>
                                )}

                                <button className="hidden group-hover:block absolute w-28 sm:w-40 -bottom-5 left-0 right-0 text-sm mx-auto py-3 bg-[#EC72AF] text-white font-semibold">
                                  Shop Now
                                </button>
                              </div>
                            </div>
                          </li>
                        ))}
                      </>
                    ) : (
                      <NoProducts />
                    )}
                  </ul>

                  <div className="flex justify-center">
                    <nav aria-label="Page navigation example">
                      <ul className="flex items-center -space-x-px h-8 py-10 text-sm">
                        <li>
                          {allproducts?.page > 1 ? (
                            <Link
                              onClick={ToTop}
                              to={`/products?category=${category}&page=${
                                page - 1
                              }`}
                              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                              <span className="sr-only">Previous</span>
                              <svg
                                className="w-2.5 h-2.5 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 1 1 5l4 4"
                                />
                              </svg>
                            </Link>
                          ) : (
                            <button
                              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg cursor-not-allowed"
                              disabled
                            >
                              <span className="sr-only">Previous</span>
                              <svg
                                className="w-2.5 h-2.5 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 1 1 5l4 4"
                                />
                              </svg>
                            </button>
                          )}
                        </li>
                        {renderPaginationLinks()}
                        <li>
                          {allproducts?.totalPages !== page ? (
                            <Link
                              onClick={ToTop}
                              to={`/products?category=${category}&page=${
                                page + 1
                              }`}
                              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                              <span className="sr-only">Next</span>
                              <svg
                                className="w-2.5 h-2.5 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="m1 9 4-4-4-4"
                                />
                              </svg>
                            </Link>
                          ) : (
                            <button
                              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg cursor-not-allowed"
                              disabled
                            >
                              <span className="sr-only">Next</span>
                              <svg
                                className="w-2.5 h-2.5 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="m1 9 4-4-4-4"
                                />
                              </svg>
                            </button>
                          )}
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default ProductsView;
