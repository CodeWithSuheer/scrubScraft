import { Helmet } from "react-helmet-async";
import LoginView from "../../sections/auth/login-view";

const ProfilePage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Profile - ScrubsCraft</title>
      </Helmet>

      <LoginView />
    </>
  );
};

export default ProfilePage;
