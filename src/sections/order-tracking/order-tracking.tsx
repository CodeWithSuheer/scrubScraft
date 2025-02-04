import { TfiArrowCircleDown } from "react-icons/tfi";
import { useState } from "react";
import "../sections.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { trackOrderAsync } from "../../features/orderSlice";
import OrdersDetails from "./order-details";

const OrderTrackingView = () => {
  const dispatch = useAppDispatch();
  const [OrderID, setOrderID] = useState("");

  const user = useAppSelector((state) => state.auth.user);
  const userID = user?.user?.id;
  console.log("userID", userID);

  const ToDown = () => {
    window.scrollTo({
      top: 470,
      behavior: "smooth",
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    dispatch(trackOrderAsync({ OrderID }));
  };

  return (
    <>
      <section className="orderSectionbg relative">
        <div className="px-5 md:px-7 xl:px-0 max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          <div className="pt-24 lg:pt-10 grid place grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 min-h-[70vh]">
            <div className="flex items-end lg:items-center justify-center lg:justify-start">
              <div className="content text-center lg:text-start">
                <div className="mt-8 blur_bg border px-4 py-8 sm:p-4 rounded-2xl">
                  <div className="flex-1 flex flex-col items-center justify-center gap-4 p-4 md:gap-10 md:p-6">
                    <form onSubmit={handleSubmit} className="w-full space-y-4">
                      <div className="mb-2 space-y-2">
                        <h1 className="text-3xl font-bold text-gray-50">
                          Track your order
                        </h1>
                        <p className="text-sm leading-none text-gray-50">
                          Enter your order number to track your package
                        </p>
                      </div>
                      <input
                        type="text"
                        placeholder="Enter your order number"
                        value={OrderID}
                        onChange={(e) => setOrderID(e.target.value)}
                        className="px-4 py-3 bg-white text-[#333] w-full text-md border rounded-md border-gray-500 focus:border-gray-800 outline-none placeholder:text-gray-500 transition-shadow duration-200 focus:shadow-xl"
                        required
                      />
                      <button
                        type="submit"
                        className="w-full h-11 items-center font-medium mx-auto rounded-lg bg-primary hover:bg-primary/90 text-white flex justify-center tracking-wide"
                      >
                        Track Order
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="arrow absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button title="button" type="button" onClick={ToDown}>
            <TfiArrowCircleDown
              size={30}
              className="text-gray-50 font-semibold cursor-pointer"
            />
          </button>
        </div>
      </section>

      <OrdersDetails />
    </>
  );
};

export default OrderTrackingView;
