import React, { useState, useEffect, useRef } from "react";
import {
  FaChevronDown,
  FaBars,
  FaHome,
  FaConciergeBell,
  FaCalendarAlt,
  FaUser,
  FaUserPlus,
  FaInfoCircle,
  FaHotel,
} from "react-icons/fa";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isBookingDropdownOpen, setIsBookingDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const scrollPositionRef = useRef(0);

  const handleMouseEnterBooking = () => setIsBookingDropdownOpen(true);
  const handleMouseLeaveBooking = () => setIsBookingDropdownOpen(false);
  const handleMouseEnterServices = () => setIsServicesDropdownOpen(true);
  const handleMouseLeaveServices = () => setIsServicesDropdownOpen(false);
  const handleMouseEnterAbout = () => setIsAboutDropdownOpen(true);
  const handleMouseLeaveAbout = () => setIsAboutDropdownOpen(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (
        currentScrollPosition > scrollPositionRef.current &&
        currentScrollPosition > 0
      ) {
        setIsNavbarVisible(true);
      } else if (currentScrollPosition === 0) {
        setIsNavbarVisible(false);
      }
      scrollPositionRef.current = currentScrollPosition;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="absolute left-0 top-4 ml-6 text-3xl font-bold text-white">
        AXONALL.
      </div>

      <nav
        style={{ backgroundColor: "rgba(16, 42, 62, 0.8)" }}
        className={`bg-transparent text-white fixed w-full z-20 font-poppins shadow-md bg-opacity-70 transition-all duration-300 ease-in-out ${
          isNavbarVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMobileMenu}>
              <FaBars className="text-2xl text-white" />
            </button>
          </div>

          <div className="hidden lg:flex w-full justify-center">
            <ul className="flex space-x-10 text-lg items-center">
              <li className="flex items-center">
                <a
                  href="#"
                  className="p-3 text-xl flex items-center text-white hover:text-teal-500 transition-colors duration-300 ease-in-out font-semibold"
                >
                  Home
                </a>
              </li>

              <li
                className="relative flex items-center"
                onMouseEnter={handleMouseEnterServices}
                onMouseLeave={handleMouseLeaveServices}
              >
                <a
                  href="#"
                  className="font-semibold text-white text-xl flex items-center"
                >
                  Services
                  <FaChevronDown
                    className={`ml-2 text-white transition-transform duration-300 ${
                      isServicesDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </a>
                <div
                  className={`absolute left-0 top-full bg-white text-gray-800 shadow-md rounded-lg w-60 -ml-14 transition-all duration-300 ease-in-out transform ${
                    isServicesDropdownOpen
                      ? "opacity-100 translate-y-8 z-20"
                      : "opacity-0 translate-y-2 z-0"
                  }`}
                >
                  <ul className="py-2 ">
                    <li className="px-6 py-3 hover:bg-teal-100 transition-colors duration-200 cursor-pointer">
                      Room Service
                    </li>
                    <li className="px-6 py-3 hover:bg-teal-100 transition-colors duration-200 cursor-pointer">
                      Spa & Wellness
                    </li>
                    <li className="px-6 py-3 hover:bg-teal-100 transition-colors duration-200 cursor-pointer">
                      Concierge
                    </li>
                    <li className="px-6 py-3 hover:bg-teal-100 transition-colors duration-200 cursor-pointer">
                      Dining Options
                    </li>
                  </ul>
                </div>
              </li>

              <li
                className="relative flex items-center"
                onMouseEnter={handleMouseEnterBooking}
                onMouseLeave={handleMouseLeaveBooking}
              >
                <a
                  href="#"
                  className="text-white text-xl flex items-center font-semibold"
                >
                  Booking
                  <FaChevronDown
                    className={`ml-2 text-white transition-transform duration-300 ${
                      isBookingDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </a>
                <div
                  className={`absolute left-0 top-full bg-white text-gray-800 shadow-md rounded-lg w-60 -ml-14 transition-all duration-300 ease-in-out transform ${
                    isBookingDropdownOpen
                      ? "opacity-100 translate-y-8 z-50"
                      : "opacity-0 translate-y-2 z-0"
                  }`}
                >
                  <ul className="py-2 ">
                    <li className="px-6 py-3 hover:bg-teal-100 transition-colors duration-200 cursor-pointer">
                      Check Availability
                    </li>
                    <li className="px-6 py-3 hover:bg-teal-100 transition-colors duration-200 cursor-pointer">
                      Special Offers
                    </li>
                    <li className="px-6 py-3 hover:bg-teal-100 transition-colors duration-200 cursor-pointer">
                      Group Bookings
                    </li>
                  </ul>
                </div>
              </li>

              <li className="flex items-center text-xl">
                <a
                  href="#"
                  className="p-3 flex items-center text-white hover:text-teal-500 transition-colors duration-300 ease-in-out font-semibold"
                >
                  <FaUserPlus className="mr-2" />
                  Join Members Club
                </a>
              </li>

              <li className="flex items-center">
                <a
                  href="#"
                  className="p-3 flex items-center text-white hover:text-teal-500 transition-colors duration-300 ease-in-out font-semibold"
                >
                  <FaInfoCircle className="mr-2" />
                  About Us
                </a>
              </li>

              <li
                className="relative flex items-center"
                onMouseEnter={handleMouseEnterAbout}
                onMouseLeave={handleMouseLeaveAbout}
              >
                <a
                  href="#"
                  className="text-white text-xl flex items-center font-semibold"
                >
                  <FaUser className="text-1xl" />
                  Account
                  <FaChevronDown
                    className={`ml-2 text-white transition-transform duration-300 ${
                      isAboutDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </a>
                <div
                  className={`absolute left-0 top-full bg-white text-gray-800 shadow-md rounded-lg w-60 -ml-14 transition-all duration-300 ease-in-out transform ${
                    isAboutDropdownOpen
                      ? "opacity-100 translate-y-8 z-20"
                      : "opacity-0 translate-y-2 z-0"
                  }`}
                >
                  <ul className="py-2 ">
                    <li className="px-6 py-3 hover:bg-teal-100 transition-colors duration-200 cursor-pointer">
                      Login
                    </li>
                    <li className="px-6 py-3 hover:bg-teal-100 transition-colors duration-200 cursor-pointer">
                      Sign Up
                    </li>
                    <li className="px-6 py-3 hover:bg-teal-100 transition-colors duration-200 cursor-pointer">
                      Profile Settings
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className={`lg:hidden bg-gradient-to-r from-[#102A3E] via-[#004F6E] to-[#006A89] text-white absolute top-0 ${
            mobileMenuOpen ? "left-0" : "-left-full"
          } w-full h-screen z-10 flex flex-col items-start py-12 overflow-y-auto transition-all duration-300 ease-in-out transform`}
        >
          <div className="absolute right-0 top-0 p-4">
            <button onClick={toggleMobileMenu} aria-label="Close mobile menu">
              <FaBars className="text-2xl text-white" />
            </button>
          </div>
          <ul className="space-y-6 p-6 mt-12 w-full">
            <li>
              <a href="#" className="text-white text-lg font-semibold">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-lg font-semibold">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-lg font-semibold">
                Booking
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-lg font-semibold">
                Join Members Club
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-lg font-semibold">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-lg font-semibold">
                Account
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
