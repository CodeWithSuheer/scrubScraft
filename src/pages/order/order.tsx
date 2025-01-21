import { Helmet } from "react-helmet-async";
import AboutUsView from "../../sections/aboutUs/about-us-view";

const OrderPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Orders - ScrubScraft</title>
      </Helmet>

      <AboutUsView />
    </>
  );
};

export default OrderPage;
