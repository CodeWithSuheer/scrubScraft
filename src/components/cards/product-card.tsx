import { useNavigate } from "react-router-dom";
import CartIcon from "../../assets/svg/cart";

export default function ProductCard({ data }: { data: any }) {
  const navigate = useNavigate();

  const handleItemClick = (productId: string) => {
    navigate(`/selectedItem/${productId}`);
    window.scroll(0, 0);
  };

  return (
    <>
      <div
        onClick={() => handleItemClick(data?.id)}
        className="group overflow-hidden cursor-pointer relative rounded-lg bg-white"
      >
        <div className="bg-gray-100 w-full overflow-hidden">
          <img
            src={data?.image?.downloadURL}
            alt={data?.name}
            className="aspect-[3/4] w-full object-cover object-top hover:scale-110 transition-all duration-700"
          />
        </div>
        <div className="py-4 px-2 relative">
          <div className="flex flex-wrap justify-center gap-2 w-full absolute px-4 pt-3 z-10 transition-all duration-500 left-0 right-0 group-hover:bottom-20 lg:bottom-5 lg:opacity-0 lg:bg-white lg:group-hover:opacity-100 max-lg:bottom-20 max-lg:py-3 max-lg:bg-white/60">
            <button
              type="button"
              title="Add to cart"
              className="bg-transparent outline-none border-none"
            >
              <CartIcon />
            </button>
          </div>
          <div className="z-20 relative bg-white">
            <h6 className="text-sm font-semibold text-gray-800 truncate">
              {data?.name} - Tshirt
            </h6>
            <h6 className="mt-1 text-gray-600">
              <span className="font-medium text-sm">Rs.</span>
              <span className="font-semibold text-[0.90rem] text-gray-700">
                100
              </span>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}
