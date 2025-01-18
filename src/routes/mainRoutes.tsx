import { Route } from "react-router-dom";
import MainLayout from "../layouts/main/layout";
import Homepage from "../pages/home/homepage";
import ContactUsPage from "../pages/contactUs/contact-us";
import AboutUsPage from "../pages/aboutUs/about-us";

const mainRoutes = [
  <Route path="/" element={<MainLayout />}>
    <Route path="/" element={<Homepage />} />
    <Route path="about" element={<AboutUsPage />} />
    <Route path="contact" element={<ContactUsPage />} />
  </Route>,
];

export default mainRoutes;
