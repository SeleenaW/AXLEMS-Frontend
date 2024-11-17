import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#102A3E] via-[#004F6E] to-[#006A89] text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Left Section - Logo & Social Media */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="text-3xl font-bold text-white">
            <span>AXONALL.</span>
          </div>
          <p className="text-center md:text-left text-gray-300 mb-4 text-lg max-w-sm">
            Experience luxury, elegance, and comfort with AXONALL. Your perfect
            getaway awaits.
          </p>
          <div className="flex space-x-4 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-teal-500 transition-colors"
            >
              <AiOutlineFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-teal-500 transition-colors"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-teal-500 transition-colors"
            >
              <AiOutlineInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-teal-500 transition-colors"
            >
              <AiOutlineLinkedin />
            </a>
          </div>
        </div>

        {/* Middle Section 1 - Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold text-gray-100 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-lg text-gray-300">
            <li>
              <a href="#" className="hover:text-teal-500 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-teal-500 transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#booking"
                className="hover:text-teal-500 transition-colors"
              >
                Booking
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-teal-500 transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-teal-500 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Middle Section 2 - Our Services */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold text-gray-100 mb-4">
            Our Services
          </h3>
          <ul className="space-y-2 text-lg text-gray-300">
            <li>
              <a href="#" className="hover:text-teal-500 transition-colors">
                Spa & Wellness
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-500 transition-colors">
                Fine Dining
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-500 transition-colors">
                Conference Rooms
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-500 transition-colors">
                Private Events
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-500 transition-colors">
                Guided Tours
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section - Contact Info & Newsletter */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold text-gray-100 mb-4">
            Contact & Newsletter
          </h3>
          <ul className="space-y-2 text-lg text-gray-300 mb-4">
            <li className="flex items-center justify-center md:justify-start space-x-2">
              <FaMapMarkerAlt className="text-teal-500" />
              <span>123 Luxury Street, City Name</span>
            </li>
            <li className="flex items-center justify-center md:justify-start space-x-2">
              <FaPhoneAlt className="text-teal-500" />
              <span>+1 (234) 567-890</span>
            </li>
            <li className="flex items-center justify-center md:justify-start space-x-2">
              <FaEnvelope className="text-teal-500" />
              <span>contact@axonall.com</span>
            </li>
          </ul>
          <div className="text-gray-300 text-lg">
            <p>Subscribe to our newsletter:</p>
            <form className="flex mt-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded-l-lg text-gray-800 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-teal-500 px-4 py-2 rounded-r-lg hover:bg-teal-600 transition duration-300 text-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="text-center py-4 mt-4 bg-[#00374C] text-gray-300 text-sm">
        <p>&copy; 2024 AXONALL. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
