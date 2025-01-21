import { Helmet } from "react-helmet-async";
import AboutUsView from "../../sections/aboutUs/about-us-view";

const SingleProductPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> ScrubScraft</title>
      </Helmet>

      <AboutUsView />
    </>
  );
};

export default SingleProductPage;
