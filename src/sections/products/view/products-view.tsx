import { useAppSelector } from "../../../app/hooks";
import AllProducts from "../all-products";
import LatestProducts from "../LatestProducts";

const ProductsView = () => {
  const { latestProducts } = useAppSelector((state) => state.products);

  return (
    <>
      <AllProducts />
      <LatestProducts latestProducts={latestProducts} />
    </>
  );
};

export default ProductsView;
