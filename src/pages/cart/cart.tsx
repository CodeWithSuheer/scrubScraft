import { Helmet } from "react-helmet-async";
import AboutUsView from "../../sections/aboutUs/about-us-view";

const CartPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cart - ScrubScraft</title>
      </Helmet>

      <AboutUsView />
    </>
  );
};

export default CartPage;
