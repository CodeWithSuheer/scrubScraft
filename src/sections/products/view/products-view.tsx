import { mockedLatestProducts } from "../../../mock/productData";
import AllProducts from "../all-products";
import LatestProducts from "../LatestProducts";


const ProductsView = () => {
  return (
    <>
      <AllProducts />
      <LatestProducts latestProducts={mockedLatestProducts} />
    </>
  );
};

export default ProductsView;
