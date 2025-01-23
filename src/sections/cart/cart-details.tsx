import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Link } from "react-router-dom";
import {
  decreaseQuantity,
  getCartTotal,
  increaseQuantity,
  removeFromCart,
} from "../../features/ActionsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import EmptyCart from "./empty-cart";
import CartTotal from "./cart-total";
import CartProductCard from "./cart-products-card";

const CartDetails: React.FC = () => {
  const dispatch = useAppDispatch();

  // const user = useAppSelector((state) => state.auth.user);

  // getting data from store
  const { cart, totalPrice } = useAppSelector(
    (state: RootState) => state.actions
  );

  console.log("cart", cart);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);

  return (
    <>
      <section className="w-full py-14 sm:py-14 px-5 sm:px-8 lg:px-10 xl:px-0 bg-gray-50 min-h-[90vh]">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="header">
            <div className="flex justify-end items-center">
              <div className="text-md font-semibold text-primary underline underline-offset-4">
                <Link to="/products">Return to Shop</Link>
              </div>
            </div>
          </div>

          <div className="">
            {cart && cart.length > 0 ? (
              <div className=" py-6 grid place grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-8">
                <div className="rounded-xl col-span-2">
                  {cart.map((product) => (
                    <CartProductCard
                      key={product.id}
                      product={product}
                      onIncrease={(id) => dispatch(increaseQuantity(id))}
                      onDecrease={(id) => dispatch(decreaseQuantity(id))}
                      onRemove={(id) => dispatch(removeFromCart(id))}
                    />
                  ))}
                </div>

                <CartTotal totalPrice={totalPrice} />
              </div>
            ) : (
              <EmptyCart />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default CartDetails;
