import { FiMinus } from "react-icons/fi";
import { IoAddOutline } from "react-icons/io5";
import { BsFillTrash3Fill } from "react-icons/bs";

interface CartProductCardProps {
  product: {
    id: string;
    name: string;
    image: { downloadURL: string };
    price: number;
    sale_price?: number;
    quantity: number;
  };
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
  onRemove: (id: string) => void;
}

export default function CartProductCard({
  product,
  onIncrease,
  onDecrease,
  onRemove,
}: CartProductCardProps) {
  return (
    <div
      key={product.id}
      className="grid md:grid-cols-4 items-center gap-8 px-4 py-6 mb-4 shadow-lg bg-white border border-gray-200 rounded-xl"
    >
      {/* Product Image and Info */}
      <div className="md:col-span-2 flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-start gap-4 sm:gap-4">
        <div className="shrink-0 shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)] p-0">
          <img
            className="w-28 h-22 object-contain rounded-md"
            src={product?.image?.downloadURL}
            alt={product?.name}
          />
        </div>

        <div>
          <h3 className="Noto text-lg tracking-wide font-bold text-[#333]">
            {product?.name}{" "}
            <span className="text-base Noto">({product?.name})</span>
          </h3>
          <h6 className="text-md text-gray-500 mt-2 flex justify-center sm:justify-start items-center">
            Price:{" "}
            <strong className="ml-2 flex items-center">
              {product?.sale_price && product?.sale_price > 0 ? (
                <p className="">Rs. {product?.sale_price}</p>
              ) : (
                <p className="">Rs. {product?.price}</p>
              )}
            </strong>
          </h6>
        </div>
      </div>

      {/* Quantity Controls */}
      <div className="flex justify-center sm:justify-start">
        <button
          type="button"
          title="decrease quantity"
          onClick={() => onDecrease(product.id)}
          className="bg-transparent py-2 font-semibold text-[#333]"
        >
          <FiMinus size={22} />
        </button>

        <input
          title="quantity"
          type="text"
          className="mx-1 h-8 w-10 rounded-md border border-gray-400 text-center bg-transparent text-black"
          value={product.quantity}
          readOnly
        />

        <button
          type="button"
          title="increase quantity"
          onClick={() => onIncrease(product.id)}
          className="bg-transparent py-2 font-semibold text-[#333]"
        >
          <IoAddOutline size={22} />
        </button>
      </div>

      {/* Total Price and Remove */}
      <div className="flex items-center">
        <h4 className="text-lg font-bold text-[#333]">
          {product?.sale_price && product?.sale_price > 0 ? (
            <p className="">Rs. {product?.sale_price * product.quantity}</p>
          ) : (
            <p className="">Rs. {product?.price * product.quantity}</p>
          )}
        </h4>

        <div
          onClick={() => onRemove(product.id)}
          className="w-3 mr-4 cursor-pointer shrink-0 ml-auto"
        >
          <BsFillTrash3Fill size={20} className="text-red-600" />
        </div>
      </div>
    </div>
  );
}
