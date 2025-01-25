import { Helmet } from "react-helmet-async";
import LoginView from "../../sections/auth/login-view";

const OtpPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Otp - ScrubsCraft</title>
      </Helmet>

      <LoginView />
    </>
  );
};

export default OtpPage;
