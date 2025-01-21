import { Helmet } from "react-helmet-async";
import ProductsView from "../../sections/products/products-view";

const ProductsPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Products - ScrubScraft</title>
      </Helmet>

      <ProductsView />
    </>
  );
};

export default ProductsPage;
