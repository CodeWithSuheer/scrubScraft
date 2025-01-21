import { Helmet } from "react-helmet-async";
import AboutUsView from "../../sections/aboutUs/about-us-view";

const CheckoutPage = () => {
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

export default CheckoutPage;
