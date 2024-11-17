import React, { useState } from "react";
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
  FaPhoneAlt,
} from "react-icons/fa";

const Navbar = () => {
  const handleMouseEnterBooking = () => setIsBookingDropdownOpen(true);
  const handleMouseLeaveBooking = () => setIsBookingDropdownOpen(false);

  const handleMouseEnterServices = () => setIsServicesDropdownOpen(true);
  const handleMouseLeaveServices = () => setIsServicesDropdownOpen(false);

  const handleMouseEnterAbout = () => setIsAboutDropdownOpen(true);
  const handleMouseLeaveAbout = () => setIsAboutDropdownOpen(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isBookingDropdownOpen, setIsBookingDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  // Close mobile menu when a menu item is clicked
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav
      style={{ backgroundColor: "rgba(16, 42, 62, 0.4)" }}
      className="bg-transparent  text-white fixed w-full z-20 font-poppins shadow-md  bg-opacity-70"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold flex items-center">
          <span className="text-White">AXONALL.</span>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMobileMenu}>
            <FaBars className="text-2xl text-white" />
          </button>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex w-full justify-center">
          <ul className="flex space-x-10 text-lg items-center">
            <li className="flex items-center">
              <a
                href="#"
                className="p-3 text-xl flex items-center text-white hover:text-teal-500 transition-colors duration-300 ease-in-out font-semibold"
              >
                <FaHome className="mr-2" />
                Home
              </a>
            </li>

            {/* Services dropdown */}
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
                className={`absolute left-0 top-full bg-white text-gray-800 shadow-md rounded-lg w-72 transition-all duration-300 ease-in-out transform ${
                  isServicesDropdownOpen
                    ? "opacity-100 translate-y-0 z-50"
                    : "opacity-0 translate-y-2 z-0"
                }`}
              >
                <ul className="py-2">
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
                  <li className="px-6 py-3 hover:bg-teal-100 transition-colors duration-200 cursor-pointer">
                    Event Planning
                  </li>
                  <li className="px-6 py-3 hover:bg-teal-100 transition-colors duration-200 cursor-pointer">
                    Shuttle Services
                  </li>
                  <li className="px-6 py-3 hover:bg-teal-100 transition-colors duration-200 cursor-pointer">
                    Private Tours
                  </li>
                </ul>
              </div>
            </li>

            {/* Booking dropdown */}
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
                className={`absolute left-0 top-full bg-white text-gray-800 shadow-md rounded-lg w-72 transition-all duration-300 ease-in-out transform ${
                  isBookingDropdownOpen
                    ? "opacity-100 translate-y-0 z-50"
                    : "opacity-0 translate-y-2 z-0"
                }`}
              >
                <ul className="py-2">
                  <li className="px-6 py-3 hover:bg-teal-100 transition-colors duration-200 cursor-pointer">
                    Check Availability
                  </li>
                  <li className="px-6 py-3 hover:bg-teal-100 transition-colors duration-200 cursor-pointer">
                    Special Offers
                  </li>
                  <li className="px-6 py-3 hover:bg-teal-100 transition-colors duration-200 cursor-pointer">
                    Group Bookings
                  </li>
                  <li className="px-6 py-3 hover:bg-teal-100 transition-colors duration-200 cursor-pointer">
                    Events & Meetings
                  </li>
                  <li className="px-6 py-3 hover:bg-teal-100 transition-colors duration-200 cursor-pointer">
                    Wedding Packages
                  </li>
                  <li className="px-6 py-3 hover:bg-teal-100 transition-colors duration-200 cursor-pointer">
                    Early Check-in / Late Check-out
                  </li>
                </ul>
              </div>
            </li>

            {/* Join Members Club */}
            <li className="flex items-center text-xl">
              <a
                href="#"
                className="p-3 flex items-center text-white hover:text-teal-500 transition-colors duration-300 ease-in-out font-semibold"
              >
                <FaUserPlus className="mr-2" />
                Join Members Club
              </a>
            </li>

            {/* About Us */}
            <li className="flex items-center">
              <a
                href="#"
                className="p-3 flex items-center text-white hover:text-teal-500 transition-colors duration-300 ease-in-out font-semibold"
              >
                <FaInfoCircle className="mr-2" />
                About Us
              </a>
            </li>

            {/* Account dropdown */}
            <li
              className="relative flex items-center"
              onMouseEnter={handleMouseEnterAbout}
              onMouseLeave={handleMouseLeaveAbout}
            >
              <a
                href="#"
                className="text-white text-xl flex items-center font-semibold"
              >
                <a
                  href="#"
                  className="p-3 flex items-center text-white hover:text-teal-500 transition-colors duration-300 ease-in-out font-semibold"
                >
                  <FaUser className="text-1xl" />
                </a>
                Account
                <FaChevronDown
                  className={`ml-2 text-white transition-transform duration-300 ${
                    isAboutDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </a>

              <div
                className={`absolute left-0 top-full bg-white text-gray-800 shadow-md rounded-lg w-72 transition-all duration-300 ease-in-out transform ${
                  isAboutDropdownOpen
                    ? "opacity-100 translate-y-0 z-50"
                    : "opacity-0 translate-y-2 z-0"
                }`}
              >
                <ul className="py-2">
                  <li className="px-6 py-3 hover:bg-teal-100 transition-colors duration-200 cursor-pointer">
                    Profile
                  </li>
                  <li className="px-6 py-3 hover:bg-teal-100 transition-colors duration-200 cursor-pointer">
                    Bookings
                  </li>
                  <li className="px-6 py-3 hover:bg-teal-100 transition-colors duration-200 cursor-pointer">
                    Payment Methods
                  </li>
                  <li className="px-6 py-3 hover:bg-teal-100 transition-colors duration-200 cursor-pointer">
                    Settings
                  </li>
                  <li className="px-6 py-3 hover:bg-teal-100 transition-colors duration-200 cursor-pointer">
                    Logout
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className={`lg:hidden bg-gradient-to-r from-[#102A3E] via-[#004F6E] to-[#006A89] text-white absolute top-0 ${
            mobileMenuOpen ? "left-0" : "-left-full"
          } w-full h-screen z-10 flex flex-col items-start py-12 overflow-y-auto transition-all duration-300 ease-in-out transform`}
        >
          {/* Close Mobile Menu Icon */}
          <div className="absolute right-0 top-0 p-4">
            <button onClick={toggleMobileMenu} aria-label="Close mobile menu">
              <FaBars className="text-2xl text-white" />
            </button>
          </div>

          {/* Logo */}
          <div className="text-3xl font-bold flex items-center justify-start w-full pl-6 mb-8">
            {" "}
            {/* Align left and add padding */}
            <span className="text-white">AXONALL.</span>
          </div>
          <br></br>
          <br></br>
          <ul className=" space-y-16 text-left px-10">
            <li>
              <a
                href="#"
                className="text-white text-xl"
                // onClick={closeMobileMenu}
                aria-label="Go to Home"
              >
                <FaHome className="inline-block mr-2" /> Home
              </a>
            </li>
            <li className="relative">
              <a
                href="#"
                className="text-white text-xl flex items-center"
                onClick={() =>
                  setIsServicesDropdownOpen(!isServicesDropdownOpen)
                }
              >
                <FaConciergeBell className="inline-block mr-2" /> Services
                <FaChevronDown
                  className={`ml-2 text-white transition-transform duration-300 ${
                    isServicesDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </a>
              {isServicesDropdownOpen && (
                <div className=" text-white  rounded-lg w-full py-2 mt-2">
                  <ul>
                    <li className="px-6 py-3 hover:bg-teal-100 cursor-pointer">
                      Room Service
                    </li>
                    <li className="px-6 py-3 hover:bg-teal-100 cursor-pointer">
                      Spa & Wellness
                    </li>
                    <li className="px-6 py-3 hover:bg-teal-100 cursor-pointer">
                      Concierge
                    </li>
                    <li className="px-6 py-3 hover:bg-teal-100 cursor-pointer">
                      Dining Options
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="relative">
              <a
                href="#"
                className="text-white text-xl flex items-center"
                onClick={() => setIsBookingDropdownOpen(!isBookingDropdownOpen)}
              >
                <FaCalendarAlt className="inline-block mr-2" /> Booking
                <FaChevronDown
                  className={`ml-2 text-white transition-transform duration-300 ${
                    isBookingDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </a>
              {isBookingDropdownOpen && (
                <div className=" text-white  rounded-lg w-full py-2 mt-2">
                  <ul>
                    <li className="px-6 py-3 hover:bg-teal-100 cursor-pointer">
                      Check Availability
                    </li>
                    <li className="px-6 py-3 hover:bg-teal-100 cursor-pointer">
                      Special Offers
                    </li>
                    <li className="px-6 py-3 hover:bg-teal-100 cursor-pointer">
                      Group Bookings
                    </li>
                    <li className="px-6 py-3 hover:bg-teal-100 cursor-pointer">
                      Events & Meetings
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <a
                href="#"
                className="text-white text-xl"
                // onClick={closeMobileMenu}
                aria-label="Go to About Us"
              >
                <FaInfoCircle className="inline-block mr-2" /> About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-xl"
                // onClick={closeMobileMenu}
                aria-label="Go to Contact Us"
              >
                <FaHotel className="inline-block mr-2" /> Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
