import { Helmet } from "react-helmet-async";
import LoginView from "../../sections/auth/login-view";

const ResetPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Reset - ScrubsCraft</title>
      </Helmet>

      <LoginView />
    </>
  );
};

export default ResetPage;
