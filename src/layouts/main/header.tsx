import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getCartTotal } from "../../features/ActionsSlice";
import { navigation } from "./navigation-links";

export default function Header() {
  const dispatch = useAppDispatch();

  const [state, setState] = useState(false);
  const { cart, totalQuantity } = useAppSelector((state) => state.actions);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <nav className="bg-white border-b w-full md:static md:text-sm md:border-none">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link to="/">
            <h1 className="text-2xl font-bold text-blue-600">ScrubsCraft</h1>
          </Link>

          {/* HAMBURGER BUTTON */}
          <div className="md:hidden">
            <button
              type="button"
              className="mt-1 text-gray-600 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? <RxCross2 size={22} /> : <RiMenu3Fill size={22} />}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 pb-4 mt-6 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="text-[1rem] text-gray-700 hover:text-indigo-600"
                >
                  <Link to={item.path} className="block tracking-wide">
                    {item.title}
                  </Link>
                </li>
              );
            })}

            <li className="text-[1rem] text-gray-700 hover:text-indigo-600">
              <Link to="/cart" className="block tracking-wide">
                <span className="relative">
                  <ShoppingCart size={21} className="text-gray-700" />
                  <span className="absolute -right-2.5 -top-2.5 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                    {totalQuantity || ""}
                  </span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
