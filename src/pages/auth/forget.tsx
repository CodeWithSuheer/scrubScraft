import { Helmet } from "react-helmet-async";
import LoginView from "../../sections/auth/login-view";

const ForgetPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Forget - ScrubsCraft</title>
      </Helmet>

      <LoginView />
    </>
  );
};

export default ForgetPage;
