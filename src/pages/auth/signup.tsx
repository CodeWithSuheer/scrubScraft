import { Helmet } from "react-helmet-async";
import LoginView from "../../sections/auth/login-view";

const SignupPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Signup - ScrubsCraft</title>
      </Helmet>

      <LoginView />
    </>
  );
};

export default SignupPage;
