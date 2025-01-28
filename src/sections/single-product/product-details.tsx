import type React from "react";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { StarRating } from "./StarRating";
import type { Product } from "../types/product";
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

const product: Product = {
  id: "1",
  name: "Luxury Sunglasses",
  description:
    "These luxury sunglasses exude sophistication with their elegant design and premium lenses. Offering superior UV protection and exceptional comfort, they are perfect for a refined and stylish appearance.",
  price: 299.99,
  originalPrice: 349.99,
  code: "LUX001",
  category: "Accessories",
  images: [
    {
      id: "1",
      url: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      alt: "Luxury sunglasses front view",
    },
    {
      id: "2",
      url: "https://images.unsplash.com/photo-1614715838608-dd527c46231f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      alt: "Luxury sunglasses side view",
    },
    {
      id: "3",
      url: "https://images.unsplash.com/photo-1629803236371-299f85d0c349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      alt: "Luxury sunglasses angle view",
    },
    {
      id: "4",
      url: "https://images.unsplash.com/photo-1604785846291-2cd9192b1bef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      alt: "Luxury sunglasses detail view",
    },
  ],
  ratings: 4.5,
  numberOfRatings: 128,
};

export const ProductPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { id } = useParams<{ id: string }>();

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

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  const user = useAppSelector((state) => state.auth.user);
  const userID = user?.user?.id;

  const { singleProduct, singleProductloading } = useAppSelector(
    (state) => state.products
  );

  // console.log("singleProduct", singleProduct);
  // console.log("singleProductloading", singleProductloading);

  const handleAddToCart = () => {
    if (singleProduct) {
      dispatch(addToCart(singleProduct));
      navigate("/products");
      toast.success("Item Added to Cart");
    }
  };

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
      // setFormData({ review: "", rating: 1 });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="w-full overflow-hidden lg:sticky top-0 sm:flex gap-2"></div>

          <div className="w-full sm:flex-row-reverse sm:flex justify-center gap-3">
            {/* MAIN IMAGE */}
            <div className="mb-2 sm:mb-0 img_cont">
              <img
                src={singleProduct?.image?.downloadURL}
                alt="Product"
                className="w-full h-full sm:h-[28rem] sm:w-[28rem] rounded-md object-cover border border-gray-300"
              />
            </div>

            {/* SIDE IMAGES 1 */}
            <div className="mt-0 sm:space-y-3 w-[3.5rem] sm:w-[4.5rem] max-sm:flex sm:flex-col max-sm:mb-4 max-sm:gap-4">
              {selectedImage && (
                <img
                  src={selectedImage.url}
                  alt={selectedImage.alt}
                  className="w-full h-16 sm:h-20 object-cover cursor-pointer rounded-sm border border-gray-300"
                  // onClick={() => handleImageClick(primary.downloadURL)}
                />
              )}
              {product.images.slice(0, 3).map((key, index) => (
                <img
                  key={index}
                  src={selectedImage.url}
                  alt={selectedImage.alt}
                  className="w-full h-16 sm:h-20 object-cover cursor-pointer rounded-sm border border-gray-300"
                  // onClick={() => handleImageClick(otherImages[key].downloadURL)}
                />
              ))}
            </div>
          </div>

          {/* <div className="aspect-square w-full bg-gray-100 rounded-lg overflow-hidden">
            <ImageMagnifier
              src={selectedImage.url || "/placeholder.svg"}
              alt={selectedImage.alt}
              width={600}
              height={600}
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image) => (
              <button
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className={`aspect-square rounded-lg overflow-hidden border-2 ${
                  selectedImage.id === image.id
                    ? "border-primary"
                    : "border-transparent"
                }`}
              >
                <img
                  src={image.url || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div> */}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 capitalize">
              {singleProduct?.name}
            </h1>
            <div className="mt-4 flex items-center gap-4 flex-wrap">
              {/* PRICE */}
              {/* <div className="flex items-baseline gap-2">
                <span
                  className={`text-2xl font-bold ${
                    singleProduct?.sale_price ? "text-red-600" : "text-gray-900"
                  }`}
                >
                  ${singleProduct?.sale_price}
                </span>

                {singleProduct?.sale_price && (
                  <span className="text-lg text-gray-500 line-through">
                    ${singleProduct?.sale_price}
                  </span>
                )}
              </div> */}

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
                      {singleProduct?.sale_price}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="font-medium text-[1.15rem] text-gray-800">
                      Rs.
                    </span>
                    <span className="font-semibold text-[1.15rem] text-gray-800">
                      {singleProduct?.price}
                    </span>
                  </>
                )}
              </h6>

              {/* RATING */}
              <div className="flex items-center gap-2 flex-wrap">
                <StarRating rating={singleProduct?.averageRating} readonly />
                <span className="text-sm text-gray-500">
                  ({singleProduct?.averageRating} ratings)
                </span>
              </div>
            </div>
          </div>

          <p className="text-gray-600">{singleProduct?.description}</p>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="font-medium text-gray-900">Product Code</span>
              <p className="text-gray-600">{singleProduct?.product_code}</p>
            </div>
            <div>
              <span className="font-medium text-gray-900">Category</span>
              <p className="text-gray-600">{singleProduct?.category}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              title="button"
              type="button"
              onClick={handleAddToCart}
              className="flex-1 bg-primary text-white py-3 px-4 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              <FaShoppingCart />
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <AllReviews
        handleSubmitReview={handleSubmitReview}
        handleStarClick={handleStarClick}
        formData={formData}
        setFormData={setFormData}
        userID={userID}
      />
    </div>
  );
};
