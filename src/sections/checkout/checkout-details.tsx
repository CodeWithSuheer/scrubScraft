import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { updateuserAsync, userSessionAsync } from "../../features/authSlice";
import { createOrderAsync, getallOrderAsync } from "../../features/orderSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../features/ActionsSlice";
import { verifyCouponAsync } from "../../features/couponSlice";
import DetailsForm from "./details-form";

export interface couponSuccess {
  couponDiscountSuccess: boolean;
  code: string;
  discount: number;
  discountAmount: number;
}

interface formData {
  phone: string;
  address: string;
}

export interface RequestData {
  name: string | undefined;
  phone: string;
  address: string;
  items: any;
  userID: string | undefined;
  totalAmount: string;
  couponUsed?: {
    code: string;
    discount: number;
  };
}

const CheckoutDetails: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [coupon, setCoupon] = useState("");

  const { loading } = useAppSelector((state) => state.orders);
  const { updateLoading } = useAppSelector((state) => state.auth);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      handleMoveTop();
      navigate("/");
    }, 100);
  };

  const user = useAppSelector((state) => state.auth.user);
  const userID = user?.user?.id;

  const [formData, setFormData] = useState<formData>({
    phone: user?.user?.phone || "",
    address: user?.user?.address || "",
  });

  const [showCouponInput, setShowCouponInput] = useState(false);

  const handleCouponButtonClick = () => {
    setShowCouponInput(!showCouponInput);
  };

  const { cart, totalPrice } = useAppSelector((state) => state.actions);

  // useEffect(() => {
  //   if (!user) {
  //     navigate("/login");
  //   }
  // }, [cart, navigate, user]);

  const handleMoveTop = () => {
    window.scroll(0, 0);
  };

  const [couponSuccessData, setCouponSuccessData] = useState<couponSuccess>({
    code: "",
    discount: 0,
    discountAmount: 0,
    couponDiscountSuccess: false,
  });

  const couponData = {
    code: coupon,
    discount: couponSuccessData?.discountAmount,
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const id = userID;
    dispatch(updateuserAsync({ id, ...formData })).then((res) => {
      dispatch(userSessionAsync());

      if (res.payload.message === "Update Successfull") {
        const { phone, address } = formData;
        const items = cart;
        const totalAmount = couponSuccessData
          ? totalPrice - couponSuccessData?.discountAmount
          : totalPrice;

        const requestData: any = {
          name: user?.user?.name,
          phone,
          address,
          items,
          userID,
          totalAmount,
          ...(couponSuccessData.code !== "" && { couponUsed: couponData }),
        };

        dispatch(createOrderAsync(requestData)).then((res) => {
          if (res.payload.message === "Order PLaced Succcessfully") {
            openModal();
            dispatch(clearCart());
            dispatch(getallOrderAsync(id));
          }
          setFormData({
            phone: "",
            address: "",
          });
        });
      }
    });
  };

  const categories = cart.map((item: any) => item.category);

  const handleVerifyCoupon = () => {
    const formData: any = {
      code: coupon,
      userId: userID,
      category: categories,
    };
    dispatch(verifyCouponAsync(formData)).then((res) => {
      if (res.payload.couponDiscountSuccess) {
        setCouponSuccessData(res.payload);
      }
    });
  };

  return (
    <>
      <section className="w-full bg-gray-50 py-14 sm:py-12 px-0 sm:px-8 lg:px-10 xl:px-0 min-h-[90vh]">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          <div className="overflow-hidden rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 pb-5 gap-6">
              {/* Contact Info */}
              <DetailsForm />

              {/* Product List */}
              <div className="bg-white px-5 py-10 md:px-8 shadow-md border border-gray-200 rounded-lg">
                <div className="flow-root">
                  <ul className="-my-7 divide-y divide-gray-200">
                    {cart.map((product: any) => (
                      <li
                        key={product.id}
                        className="flex items-stretch justify-between space-x-5 py-7"
                      >
                        <div className="flex flex-1 items-stretch">
                          <div className="flex-shrink-0">
                            <img
                              className="h-20 w-20 rounded-lg border border-gray-200 bg-white object-cover"
                              src={product?.image.downloadURL}
                              alt={product?.name}
                            />
                          </div>
                          <div className="ml-5 flex flex-col justify-between">
                            <div className="flex-1">
                              <p className="text-sm font-bold">
                                {product?.name}
                              </p>
                              <p className="mt-1.5 text-sm font-medium text-gray-500">
                                {product.category === "Body Care"
                                  ? "Bodycare"
                                  : product.category}
                              </p>
                            </div>
                            <p className="mt-3 text-sm font-medium ">
                              x {product?.quantity}
                            </p>
                          </div>
                        </div>
                        <div className="ml-auto flex flex-col items-end justify-between">
                          <p className="text-right text-sm font-bold text-gray-900">
                            {/* Rs. {product?.price * product.quantity} */}
                            {product?.sale_price !== 0 ||
                            product?.sale_price > 0 ? (
                              <>
                                <p className="">Rs. {product?.sale_price}</p>
                              </>
                            ) : (
                              <p className="">Rs. {product?.price}</p>
                            )}
                          </p>
                          <button
                            type="button"
                            className="-m-2 inline-flex rounded p-2 text-gray-400 transition-all duration-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                          >
                            <span className="sr-only">Remove</span>
                            {/* <X className="h-5 w-5" /> */}
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <hr className="mt-6 border-gray-200" />
                <>
                  <div className="mt-6">
                    <div className="button_coupn flex justify-end">
                      <button
                        onClick={handleCouponButtonClick}
                        className="mb-3 text-primary font-medium underline underline-offset-2"
                      >
                        Have a coupon ?
                      </button>
                    </div>
                    {showCouponInput && (
                      <div className="sm:flex items-center sm:space-x-2.5 md:flex-col md:space-x-0 lg:flex-row lg:space-x-2.5">
                        <div className="flex-grow">
                          <input
                            className="flex w-[90%] rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Enter coupon code"
                            value={coupon}
                            onChange={(e) => setCoupon(e.target.value)}
                          />
                        </div>
                        <div className="mt-4 sm:mt-0 md:mt-4 lg:mt-0">
                          <button
                            onClick={handleVerifyCoupon}
                            type="button"
                            className="bg-primary text-white px-6 py-1.5 rounded-lg"
                          >
                            Verify
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </>

                <ul className="mt-6 space-y-5">
                  <li className="flex items-center justify-between text-gray-600">
                    <p className="text-md font-medium">Subtotal</p>
                    <p className="text-md font-medium">Rs. {totalPrice}</p>
                  </li>
                  {couponSuccessData?.couponDiscountSuccess ? (
                    <li className="flex items-center justify-between text-gray-600">
                      <p className="text-md font-medium">Coupon Discount</p>
                      <p className="text-md font-medium">
                        Rs. {couponSuccessData?.discountAmount}
                      </p>
                    </li>
                  ) : (
                    ""
                  )}
                  <li className="flex items-center justify-between border-t border-gray-500 pt-2 text-gray-900">
                    <p className="text-md font-medium ">Total</p>
                    <p className="text-md font-bold ">
                      Rs.{" "}
                      {couponSuccessData
                        ? totalPrice - couponSuccessData?.discountAmount
                        : totalPrice}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutDetails;
