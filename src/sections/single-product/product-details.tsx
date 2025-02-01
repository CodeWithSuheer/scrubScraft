import type React from "react";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { StarRating } from "./StarRating";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addToCart } from "../../features/ActionsSlice";
import toast from "react-hot-toast";
import { getProductByIdAsync } from "../../features/productSlice";
import AllReviews from "./all-reviews";
import {
  createreviewsAsync,
  getallreviewsAsync,
} from "../../features/reviewsSlice";
import NameEngravingForm from "./components/name-engraving";
import LoadingScreen from "../../components/loading-screen/loading-screen";

export interface ReviewFormData {
  review: string;
  rating: number;
}
export interface CreateReviewPayload extends ReviewFormData {
  productID: string | undefined;
  userID: string | undefined;
}
export interface UpdateReviewPayload extends ReviewFormData {
  id: string | undefined;
}

export const ProductPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [mainImage, setMainImage] = useState<string | null>(null);

  const { id } = useParams<{ id: string }>();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedFabric, setSelectedFabric] = useState<string | null>(null);
  const [nameEngraving, setNameEngraving] = useState<{
    name: string;
    position: "left" | "right";
  } | null>(null);

  const handleSizeClick = (size: string) => {
    setSelectedSize((prevSize) => (prevSize === size ? null : size));
  };

  const [formData, setFormData] = useState<ReviewFormData>({
    review: "",
    rating: 1,
  });

  useEffect(() => {
    if (id) {
      dispatch(getProductByIdAsync(id));
      dispatch(getallreviewsAsync(id));
    }
  }, [id]);

  const user = useAppSelector((state) => state.auth.user);
  const userID = user?.user?.id;

  const { singleProduct, singleProductloading } = useAppSelector(
    (state) => state.products
  );

  console.log("singleProduct", singleProduct);

  // Update mainImage when product changes
  useEffect(() => {
    if (singleProduct?.images?.primary?.downloadURL) {
      setMainImage(null); // Clear the image first
      setMainImage(singleProduct?.images?.primary?.downloadURL);
    }
  }, [singleProduct]);

  // Handle image click to update the main image
  const handleImageClick = (url: string) => {
    setMainImage(url);
  };

  // Extract images from product object
  const { primary, ...otherImages } = singleProduct?.images || {};

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor || !selectedFabric) {
      toast.error("Please select size, color, and fabric type!");
      return;
    }

    if (singleProduct) {
      let finalPrice =
        singleProduct.sale_price > 0
          ? singleProduct.sale_price
          : singleProduct.price;

      if (nameEngraving) {
        finalPrice += 200; // Additional charge for engraving
      }

      // Creating a truly unique identifier
      const uniqueId = [
        singleProduct._id,
        selectedSize,
        selectedColor,
        selectedFabric,
        nameEngraving
          ? `engraved-${nameEngraving.name}-${nameEngraving.position}`
          : "no-engraving",
      ].join("-");

      const productToCart = {
        ...singleProduct,
        sizes: selectedSize, // Ensure size is stored correctly
        color: selectedColor, // Store color as a string
        fabric_type: selectedFabric,
        name_engraving: nameEngraving,
        price: finalPrice,
        uniqueId, // This will differentiate products properly
      };

      dispatch(addToCart(productToCart));
      navigate("/products");
      toast.success("Item Added to Cart");
    }
  };

  // const handleAddToCart = () => {
  //   if (!selectedSize || !selectedColor || !selectedFabric) {
  //     toast.error("Please select size, color, and fabric type!");
  //     return;
  //   }

  //   if (singleProduct) {
  //     let finalPrice =
  //       singleProduct.sale_price > 0
  //         ? singleProduct.sale_price
  //         : singleProduct.price;

  //     if (nameEngraving) {
  //       finalPrice += 200;
  //     }

  //     const productToCart = {
  //       ...singleProduct,
  //       sizes: selectedSize, // Save size as a string
  //       color: selectedColor, // Save color label as a string
  //       fabric_type: selectedFabric,
  //       name_engraving: nameEngraving,
  //       price: finalPrice,
  //       uniqueId: `${
  //         singleProduct._id
  //       }-${selectedSize}-${selectedColor}-${selectedFabric}-${
  //         nameEngraving ? nameEngraving.name : "no-engraving"
  //       }`, // Unique identifier for each item
  //     };

  //     dispatch(addToCart(productToCart));
  //     navigate("/products");
  //     toast.success("Item Added to Cart");
  //   }
  // };

  const handleColorClick = (color: { label: string; value: string }) => {
    setSelectedColor(color.label);
  };

  const handleFabricClick = (fabric: string) => {
    setSelectedFabric(fabric);
  };

  // const handleAddToCart = () => {
  //   if (!selectedSize) {
  //     toast.error("Size selection required!");
  //     return;
  //   }

  //   if (singleProduct) {
  //     const productToCart = {
  //       ...singleProduct,
  //       sizes: [selectedSize],
  //     };

  //     dispatch(addToCart(productToCart));
  //     navigate("/products");
  //     toast.success("Item Added to Cart");
  //   }
  // };

  const handleStarClick = (starValue: number) => {
    setFormData((prevData) => ({ ...prevData, rating: starValue }));
  };

  const handleSubmitReview = async () => {
    const productID = id;

    console.log("formData", formData);

    if (!formData.review || formData.rating === 0) {
      toast.error("Please leave a review to rate the product");
      return;
    }

    try {
      const response = await dispatch(
        createreviewsAsync({ productID, userID, ...formData })
      );
      console.log("response ", response);
      if (response.payload !== undefined) {
        await dispatch(getallreviewsAsync(id));
      }
    } catch (error) {
      toast.error("Failed to submit review");
    } finally {
      setFormData({ review: "", rating: 1 });
    }
  };

  return (
    <>
      {singleProductloading ? (
        <LoadingScreen />
      ) : (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="w-full overflow-hidden lg:sticky top-0 sm:flex gap-2"></div>
                <div className="w-full lg:sticky top-0">
                  <div className="flex flex-row gap-2">
                    <div className="flex flex-col gap-2 w-16 max-sm:w-14 shrink-0">
                      {primary && (
                        <img
                          src={primary.downloadURL}
                          alt={primary.name}
                          className="w-full h-16 sm:h-20 object-cover cursor-pointer rounded-sm border border-gray-300"
                          onClick={() => handleImageClick(primary.downloadURL)}
                        />
                      )}

                      {Object.keys(otherImages).map((key) => (
                        <img
                          key={key}
                          src={otherImages[key].downloadURL}
                          alt={otherImages[key].name}
                          className="w-full h-16 sm:h-20 object-cover cursor-pointer rounded-sm border border-gray-300"
                          onClick={() =>
                            handleImageClick(otherImages[key].downloadURL)
                          }
                        />
                      ))}
                    </div>
                    <div className="flex-1">
                      <img
                        src={mainImage || ""}
                        alt="Product"
                        className="w-full  aspect-[548/590] object-cover rounded-md"
                      />
                    </div>
                    {/* <ImageMagnifier
                src={mainImage || "/placeholder.svg"}
                alt={'Product Image' || "/placeholder.svg"}
                width={600}
                height={600}
              /> */}
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-4 pt-3">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 capitalize">
                    {singleProduct?.name}
                  </h1>
                  <div className="mt-4 flex items-center gap-4 flex-wrap">
                    {/* PRICE */}
                    <h6 className="text-gray-600">
                      {singleProduct?.sale_price ? (
                        <>
                          <span className="font-medium text-sm line-through text-gray-500">
                            Rs.
                          </span>
                          <span className="font-semibold text-[0.90rem] line-through text-gray-500">
                            {singleProduct?.price}
                          </span>
                          <span className="pl-2 font-semibold text-[1.15rem] text-red-600">
                            Rs.
                          </span>
                          <span className="font-semibold text-[1.15rem] text-red-600">
                            {singleProduct?.sale_price +
                              (nameEngraving ? 200 : 0)}
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="font-medium text-[1.15rem] text-gray-800">
                            Rs.
                          </span>
                          <span className="font-semibold text-[1.15rem] text-gray-800">
                            {singleProduct?.price + (nameEngraving ? 200 : 0)}
                          </span>
                        </>
                      )}
                    </h6>

                    {/* RATING */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <StarRating
                        rating={singleProduct?.averageRating}
                        readonly
                      />
                      <span className="text-sm text-gray-500">
                        ({singleProduct?.averageRating} ratings)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="font-medium text-gray-900">
                      Product Code
                    </span>
                    <p className="text-gray-600">
                      {singleProduct?.product_code}
                    </p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Category</span>
                    <p className="text-gray-600">{singleProduct?.category}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-bold text-gray-800">
                    Choose a Color
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {singleProduct?.colors?.map((color: any) => (
                      <button
                        key={color._id}
                        type="button"
                        title="button"
                        className={`w-9 h-9 border-2 rounded-full shrink-0 ${
                          selectedColor === color.label
                            ? "border-gray-800"
                            : "border-white hover:border-gray-800"
                        }`}
                        style={{ backgroundColor: color.value }}
                        onClick={() => handleColorClick(color)}
                      ></button>
                    ))}
                  </div>
                </div>

                {/* FABRIC TYPE */}
                <div>
                  <div className="header flex justify-between items-center">
                    <h3 className="text-sm font-semibold text-gray-700">
                      Available Fabric
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {singleProduct?.fabric_type?.map((fabric: string) => (
                      <button
                        key={fabric}
                        type="button"
                        className={`px-4 h-9 border-none outline-none text-sm shadow-sm rounded-md flex items-center justify-center shrink-0 
          ${
            selectedFabric === fabric
              ? "bg-primary text-gray-50"
              : "bg-gray-200 text-black"
          }
        `}
                        onClick={() => handleFabricClick(fabric)}
                      >
                        {fabric}
                      </button>
                    ))}
                  </div>
                </div>

                {/* SIZES */}
                <div>
                  <div className="header flex justify-between items-center">
                    <h3 className="text-sm font-semibold text-gray-700">
                      Sizes
                    </h3>
                    <h3 className="text-sm font-semibold text-primary hover:underline underline-offset-2 cursor-pointer">
                      See sizing chart
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-2">
                    {singleProduct?.sizes?.map((size: string) => (
                      <button
                        key={size}
                        type="button"
                        className={`w-12 h-9 border-none outline-none text-sm shadow-sm rounded-md flex items-center justify-center shrink-0 
              ${
                selectedSize === size
                  ? "bg-primary text-gray-50"
                  : "bg-gray-200 text-black"
              }
            `}
                        onClick={() => handleSizeClick(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <NameEngravingForm setNameEngraving={setNameEngraving} />

                <div className="flex gap-4">
                  <button
                    title="button"
                    type="button"
                    onClick={handleAddToCart}
                    className="mt-1.5 flex-1 bg-primary text-white py-3 px-4 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <FaShoppingCart />
                    Add To Cart
                  </button>
                </div>

                <p className="text-gray-600">{singleProduct?.description}</p>
              </div>
            </div>

            {/* Reviews Section */}
            <AllReviews
              handleSubmitReview={handleSubmitReview}
              handleStarClick={handleStarClick}
              formData={formData}
              setFormData={setFormData}
              userID={userID}
              productID={id}
            />
          </div>
        </>
      )}
    </>
  );
};
