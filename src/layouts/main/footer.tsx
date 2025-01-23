import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";

export default function Footer() {
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
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400">123 Medical Drive</p>
            <p className="text-gray-400">Healthcare City, HC 12345</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
            <p className="text-gray-400">Email: info@ScrubsCraft.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                title="socialLinks"
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FiFacebook size={22} />
              </a>
              <a
                href="#"
                title="socialLinks"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaXTwitter size={22} />
              </a>
              <a
                href="#"
                title="socialLinks"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaInstagram size={22} />
              </a>
              <a
                href="#"
                title="socialLinks"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <LuLinkedin size={22} />
              </a>
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
