import React, { useState } from "react";
import {
  FaSearch,
  FaFilter,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
  FaRegSun,
} from "react-icons/fa";
import Content from "../Components/Content";

const RefineSearchPage = () => {
  const [filters, setFilters] = useState({
    destination: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    experienceType: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  return (
    <div className="min-h-screen bg-cover bg-center text-white py-12 px-6 flex justify-center items-center">
      <Content className="absolute inset-0 w-full h-full object-cover z-0" />
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Overlay for contrast */}
      <div className=" mt-28 relative z-10 max-w-3xl mx-auto bg-[#1E1E1E] p-10 rounded-2xl shadow-2xl transform transition-all hover:scale-105 duration-300">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center mb-8 text-teal-300">
          Refine Your Search
        </h1>

        {/* Search Form */}
        <form className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Destination Input */}
            <div className="relative">
              <label
                htmlFor="destination"
                className="text-lg font-semibold mb-2 block text-teal-200"
              >
                Destination
              </label>
              <div className="mt-2 relative">
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  value={filters.destination}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-white text-gray-800 rounded-lg shadow-lg focus:ring-4 focus:ring-teal-300 focus:border-teal-500 border-2 transition-all duration-300"
                  placeholder="Enter destination"
                />
                <FaMapMarkerAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-teal-500" />
              </div>
            </div>

            {/* Experience Type Input */}
            <div className="relative">
              <label
                htmlFor="experienceType"
                className="text-lg font-semibold mb-2 block text-teal-200"
              >
                Experience Type
              </label>
              <div className="mt-2 relative">
                <select
                  id="experienceType"
                  name="experienceType"
                  value={filters.experienceType}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-white text-gray-800 rounded-lg shadow-lg focus:ring-4 focus:ring-teal-300 focus:border-teal-500 border-2 transition-all duration-300"
                >
                  <option value="">Select Experience</option>
                  <option value="luxury">Luxury</option>
                  <option value="adventure">Adventure</option>
                  <option value="relaxation">Relaxation</option>
                  <option value="family">Family</option>
                </select>
                <FaRegSun className="absolute left-4 top-1/2 transform -translate-y-1/2 text-teal-500" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Check-in Date Input */}
            <div className="relative">
              <label
                htmlFor="checkIn"
                className="text-lg font-semibold mb-2 block text-teal-200"
              >
                Check-in
              </label>
              <div className="mt-2 relative">
                <input
                  type="date"
                  id="checkIn"
                  name="checkIn"
                  value={filters.checkIn}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-white text-gray-800 rounded-lg shadow-lg focus:ring-4 focus:ring-teal-300 focus:border-teal-500 border-2 transition-all duration-300"
                />
                <FaCalendarAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-teal-500" />
              </div>
            </div>

            {/* Check-out Date Input */}
            <div className="relative">
              <label
                htmlFor="checkOut"
                className="text-lg font-semibold mb-2 block text-teal-200"
              >
                Check-out
              </label>
              <div className="mt-2 relative">
                <input
                  type="date"
                  id="checkOut"
                  name="checkOut"
                  value={filters.checkOut}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-white text-gray-800 rounded-lg shadow-lg focus:ring-4 focus:ring-teal-300 focus:border-teal-500 border-2 transition-all duration-300"
                />
                <FaCalendarAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-teal-500" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Guests Input */}
            <div className="relative">
              <label
                htmlFor="guests"
                className="text-lg font-semibold mb-2 block text-teal-200"
              >
                Guests
              </label>
              <div className="mt-2 relative">
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  min="1"
                  value={filters.guests}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-white text-gray-800 rounded-lg shadow-lg focus:ring-4 focus:ring-teal-300 focus:border-teal-500 border-2 transition-all duration-300"
                  placeholder="Number of guests"
                />
                <FaUsers className="absolute left-4 top-1/2 transform -translate-y-1/2 text-teal-500" />
              </div>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center space-x-6 mt-10">
            <button
              type="submit"
              className="flex items-center bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <FaSearch className="mr-2" />
              Search
            </button>
            <button
              type="button"
              className="flex items-center bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <FaFilter className="mr-2" />
              Filter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RefineSearchPage;
