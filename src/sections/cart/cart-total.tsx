import { Link } from "react-router-dom";

interface CartTotalProps {
  totalPrice: number;
}

export default function CartTotal({ totalPrice }: CartTotalProps) {
  return (
    <>
      <div className="shadow-lg p-6 lg:sticky lg:top-0 h-max bg-white border border-gray-200 rounded-xl">
        <h3 className="text-lg font-bold text-gray-800 border-b pb-2">
          Cart Total
        </h3>

        <ul className="text-gray-800 divide-y mt-0">
          <li className="flex flex-wrap gap-4 text-base py-4">
            Subtotal <span className="ml-auto font-bold">Rs {totalPrice}</span>
          </li>
          <li className="flex flex-wrap gap-4 text-base py-4 font-bold">
            Total <span className="ml-auto">Rs {totalPrice}</span>
          </li>
        </ul>

        {/* BUTTONS */}
        <div className="buttons flex justify-center items-center">
          <Link
            to="/checkout"
            onClick={() => window.scroll(0, 0)}
            className="mt-2 px-6 py-2.5 text-center hover:bg-black bg-primary text-white w-full"
          >
            Checkout
          </Link>
        </div>
      </div>
    </>
  );
}
