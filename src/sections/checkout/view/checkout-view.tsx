import TopHeader from "../../../components/header/top-header";
import CheckoutDetails from "../checkout-details";

const CheckoutView = () => {
  return (
    <>
      <TopHeader
        title="Checkout"
        subtitle="Checkout"
        backgroundClass="contact"
      />
      <CheckoutDetails />
    </>
  );
};

export default CheckoutView;
