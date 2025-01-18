import { Outlet } from "react-router-dom";
// routes
import Footer from "./footer";
import Header from "./header";

// ----------------------------------------------------------------------

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
