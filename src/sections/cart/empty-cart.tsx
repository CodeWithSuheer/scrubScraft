import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <>
      <div className="container text-gray-800">
        <div className="mx-0 text-center">
          <div className="py-5">
            <img
              className="w-64 mx-auto"
              src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/pngwing.com.png?v=1715031022"
              alt=""
            />
            <h3 className="mt-5 text-xl font-medium">No Item In Cart</h3>
            <Link
              to="/products"
              className="mt-2 text-xl font-medium text-[#EC72AF] underline underline-offset-2"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmptyCart;
