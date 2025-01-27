import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "products" },
    { name: "About Us", href: "about" },
    { name: "Contact", href: "contact" },
  ];

  const socialLinks = [
    { icon: <FiFacebook size={22} />, href: "#", title: "Facebook" },
    { icon: <FaXTwitter size={22} />, href: "#", title: "Twitter" },
    { icon: <FaInstagram size={22} />, href: "#", title: "Instagram" },
    { icon: <LuLinkedin size={22} />, href: "#", title: "LinkedIn" },
  ];

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">ScrubsCraft</h3>
            <p className="text-gray-400">
              Elevating medical attire for healthcare professionals.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <a href="tel:+92 311 4075017" className="pb-2 text-gray-400">
              0311 4075017
            </a>
            <a
              href="mailto:scrubscraft75@gmail.com"
              className="pb-2 text-gray-400"
            >
              scrubscraft75@gmail.com
            </a>
            <p className="text-gray-400">
              Awan Market, Main Ferozepur Road, Lahore, Pakistan
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  title={social.title}
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-100 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-white">
              <Link
                to="/privacy-policy"
                onClick={() => window.scroll(0, 0)}
                className="inline-block text-white underline transition hover:text-white"
              >
                Privacy Policy
              </Link>

              <span> - </span>

              <Link
                to="/tac"
                onClick={() => window.scroll(0, 0)}
                className="inline-block text-white underline transition hover:text-white"
              >
                Terms & Conditions
              </Link>
            </p>

            <p className="mt-4 text-sm text-white sm:order-first sm:mt-0">
              &copy; 2025 All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
