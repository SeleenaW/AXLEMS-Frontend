import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { DatePicker } from "antd";
import { IoBoatOutline } from "react-icons/io5";
import { FaTheaterMasks } from "react-icons/fa";
import { GiJeep } from "react-icons/gi";
import { LiaHelicopterSolid } from "react-icons/lia";
import { PiPicnicTableBold } from "react-icons/pi";
import { FaSpa } from "react-icons/fa";
import { GiFlowerPot } from "react-icons/gi";

import hotelImage from "../Assets/ritz.jpg";
import amanImage from "../Assets//Aman-Tokyo_Gallery_26.jpg";
import brandoImage from "../Assets/TheBrando_.jpg";
import { TbScubaMask } from "react-icons/tb";

const ExplorePage = () => {
  const [location, setLocation] = useState("");
  const [experienceType, setExperienceType] = useState("");
  const [guestCount, setGuestCount] = useState(1);
  const [priceRange, setPriceRange] = useState([50, 500]);
  const [selectedDate, setSelectedDate] = useState(null);

  // Function to reset filters
  const resetFilters = () => {
    setLocation("");
    setExperienceType("");
    setGuestCount(1);
    setPriceRange([50, 500]);
    setSelectedDate(null);
  };

  // Function to apply filters (can be customized as per your logic)
  const applyFilters = () => {
    console.log("Filters applied with", {
      location,
      experienceType,
      guestCount,
      priceRange,
      selectedDate,
    });
  };

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Page Title and Search Box */}
      <div className="flex items-center justify-between mb-8">
        {/* Title - Left Side */}
        <h1 className="text-3xl md:text-4xl font-bold">
          Explore and Book Places
        </h1>

        {/* Search Box - Right Side */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="p-3 border rounded-lg md:w-64"
          />
          <button onClick={() => console.log("Searching...")}></button>
        </div>
      </div>

      {/* Search Filters */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6">
        {/* Location Search Box */}
        <div className="flex flex-col items-start">
          <label className="text-lg font-semibold mb-2">Location</label>
          <input
            type="text"
            placeholder="Enter a location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="p-3 border rounded-lg w-full md:w-64"
          />
        </div>

        {/* Experience Type */}
        <div className="flex flex-col items-start">
          <label className="text-lg font-semibold mb-2">Experience Type</label>
          <div className="flex flex-wrap justify-center items-center gap-2 pt-4">
            {[
              "Hotel",
              "Restaurant",
              "Adventure",
              "Beach",
              "Resort",
              "More...",
            ].map((type) => (
              <button
                key={type}
                onClick={() => setExperienceType(type)}
                className={`px-6 py-3 rounded-lg ${
                  experienceType === type
                    ? "bg-teal-600 text-white"
                    : "bg-gray-200"
                } hover:bg-teal-500 transition`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Number of Guests */}
        <div className="flex flex-col items-start">
          <label className="text-lg font-semibold mb-2">Number of Guests</label>
          <input
            type="number"
            min="1"
            value={guestCount}
            onChange={(e) => setGuestCount(e.target.value)}
            className="p-3 border rounded-lg w-full md:w-32"
          />
        </div>

        {/* Price Range */}
        <div className="flex flex-col items-start">
          <label className="text-lg font-semibold mb-2">Price Range ($)</label>
          <input
            type="range"
            min="0"
            max="1000"
            step="50"
            value={priceRange}
            onChange={(e) => setPriceRange([0, e.target.value])}
            className="w-full md:w-64"
          />
          <span className="text-sm mt-1">Up to ${priceRange[1]}</span>
        </div>

        {/* Date Picker */}
        <div className="flex flex-col items-start">
          <label className="text-lg font-semibold mb-2">Date</label>
          <DatePicker
            onChange={(date, dateString) => setSelectedDate(dateString)}
            className="p-3 border rounded-lg w-full md:w-40"
          />
        </div>

        {/* Apply Filters and Reset Filters Buttons */}
        <div className="flex flex-col items-center space-y-4 mt-6">
          <button
            onClick={applyFilters}
            className="w-36 py-2 bg-black text-white rounded-lg text-lg font-semibold hover:bg-gray-800 transition"
          >
            Apply Filters
          </button>
          <button
            onClick={resetFilters}
            className="w-36 py-2 bg-white text-black border border-black rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
          >
            Reset Filters
          </button>
        </div>
      </div>

      {/* Ritz-Carlton Dubai Section */}
      <div className="mt-12">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Hotel Image */}
          <img
            src={hotelImage}
            alt="The Ritz Carlton Dubai"
            className="w-full md:w-1/2 h-auto md:h-96 object-cover" // Adjust height to fit the portrait layout
          />

          {/* Hotel Description */}
          <div className="flex flex-col justify-between p-6 w-full md:w-1/2">
            <h1 className="text-3xl font-bold text-gray-800">
              The Ritz Carlton Dubai
            </h1>
            <div className="mt-2 text-gray-600">
              <p className="text-sm">
                <span className="font-semibold">500m from center</span>
              </p>
              <p className="text-sm mt-1">
                <span className="font-semibold">Free airport taxi</span>
              </p>
            </div>

            {/* Must-Try Activities Section */}
            <div className="mt-4">
              <h2 className="text-lg font-semibold text-center text-gray-800 mb-4">
                Must-Try Activities
              </h2>
              <div className="flex justify-center space-x-6">
                {/* Activity 1 - Yacht */}
                <div className="flex flex-col items-center">
                  <IoBoatOutline className="text-3xl text-teal-600 mb-2" />
                  <span className="text-sm">Dubai Marina Yacht Cruise</span>
                </div>

                {/* Activity 2 - Safari */}
                <div className="flex flex-col items-center">
                  <GiJeep className="text-3xl text-yellow-500 mb-2" />
                  <span className="text-sm">Desert Safari Adventure</span>
                </div>

                {/* Activity 3 - Opera */}
                <div className="flex flex-col items-center">
                  <FaTheaterMasks className="text-3xl text-blue-600 mb-2" />
                  <span className="text-sm">Dubai Opera</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-lg font-medium text-gray-800">
                Luxury Suite with Ocean View
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Entire suite • 1 bathroom • 45m² • 1 king bed
              </p>
            </div>

            {/* Rating and Price Details */}
            <div className="mt-6 flex justify-between items-center">
              {/* Rating */}
              <div className="flex items-center space-x-2">
                <span className="text-xl font-semibold text-teal-600">
                  Excellent
                </span>
                <button className="px-4 py-1 bg-teal-500 text-white rounded-full text-sm font-semibold">
                  9.2
                </button>
              </div>

              {/* Price */}
              <div className="flex flex-col items-end">
                <span className="text-xl font-semibold text-gray-800">
                  $950
                </span>
                <span className="text-sm text-gray-500">
                  Includes taxes and fees
                </span>
                <button className="mt-4 px-6 py-2 bg-teal-600 text-white rounded-lg">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Aman Tokyo Section */}
      <div className="mt-12">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Hotel Image */}
          <img
            src={amanImage}
            alt="Aman Tokyo"
            className="w-full md:w-1/2 h-auto md:h-96 object-cover"
          />

          {/* Hotel Description */}
          <div className="flex flex-col justify-between p-6 w-full md:w-1/2">
            <h1 className="text-3xl font-bold text-gray-800">Aman Tokyo</h1>
            <div className="mt-2 text-gray-600">
              <p className="text-sm">
                <span className="font-semibold">
                  Located in the heart of Tokyo
                </span>
              </p>
              <p className="text-sm mt-1">
                <span className="font-semibold">
                  Exclusive spa and wellness center
                </span>
              </p>
            </div>

            {/* Must-Try Activities Section */}
            <div className="mt-4">
              <h2 className="text-lg font-semibold text-center text-gray-800 mb-4">
                Must-Try Activities
              </h2>
              <div className="flex justify-center space-x-6">
                {/* Activity 1 - Jeep */}
                <div className="flex flex-col items-center">
                  <LiaHelicopterSolid className="text-3xl text-teal-600 mb-2" />
                  <span className="text-sm">Private Helicopter Tour</span>
                </div>

                {/* Activity 2 - Boat */}
                <div className="flex flex-col items-center">
                  <FaSpa className="text-3xl text-yellow-500 mb-2" />
                  <span className="text-sm">Aman Spa</span>
                </div>

                {/* Activity 3 - Opera */}
                <div className="flex flex-col items-center">
                  <GiFlowerPot className="text-3xl text-blue-600 mb-2" />
                  <span className="text-sm">
                    tour of the Imperial Palace Gardens
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-lg font-medium text-gray-800">
                Deluxe Suite with City Views
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Entire suite • 1 bathroom • 50m² • 1 king bed
              </p>
            </div>

            {/* Rating and Price Details */}
            <div className="mt-6 flex justify-between items-center">
              {/* Rating */}
              <div className="flex items-center space-x-2">
                <span className="text-xl font-semibold text-teal-600">
                  Superb
                </span>
                <button className="px-4 py-1 bg-teal-500 text-white rounded-full text-sm font-semibold">
                  9.5
                </button>
              </div>

              {/* Price */}
              <div className="flex flex-col items-end">
                <span className="text-xl font-semibold text-gray-800">
                  $1250
                </span>
                <span className="text-sm text-gray-500">
                  Includes taxes and fees
                </span>
                <button className="mt-4 px-6 py-2 bg-teal-600 text-white rounded-lg">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Brando Section */}
      <div className="mt-12">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Hotel Image */}
          <img
            src={brandoImage}
            alt="The Brando – Tetiaroa, French Polynesia"
            className="w-full md:w-1/2 h-auto md:h-96 object-cover"
          />

          {/* Hotel Description */}
          <div className="flex flex-col justify-between p-6 w-full md:w-1/2">
            <h1 className="text-3xl font-bold text-gray-800">
              The Brando – Tetiaroa, French Polynesia
            </h1>
            <div className="mt-2 text-gray-600">
              <p className="text-sm">
                <span className="font-semibold">
                  A remote luxury island resort
                </span>
              </p>
              <p className="text-sm mt-1">
                <span className="font-semibold">
                  Private villas with stunning views
                </span>
              </p>
            </div>

            {/* Must-Try Activities Section */}
            <div className="mt-4">
              <h2 className="text-lg font-semibold text-center text-gray-800 mb-4">
                Must-Try Activities
              </h2>
              <div className="flex justify-center space-x-6">
                {/* Activity 1 - Jeep */}
                <div className="flex flex-col items-center">
                  <TbScubaMask className="text-3xl text-teal-600 mb-2" />
                  <span className="text-sm">Snorkeling and Scuba Diving</span>
                </div>

                {/* Activity 2 - Boat */}
                <div className="flex flex-col items-center">
                  <PiPicnicTableBold className="text-3xl text-yellow-500 mb-2" />
                  <span className="text-sm">private picnic on the beach.</span>
                </div>

                {/* Activity 3 - Opera */}
                <div className="flex flex-col items-center">
                  <FaTheaterMasks className="text-3xl text-blue-600 mb-2" />
                  <span className="text-sm">
                    Traditional Polynesian Dance Show
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-lg font-medium text-gray-800">
                Exclusive Villa with Ocean View
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Entire villa • 1 bathroom • 70m² • 1 king bed
              </p>
            </div>

            {/* Rating and Price Details */}
            <div className="mt-6 flex justify-between items-center">
              {/* Rating */}
              <div className="flex items-center space-x-2">
                <span className="text-xl font-semibold text-teal-600">
                  Excellent
                </span>
                <button className="px-4 py-1 bg-teal-500 text-white rounded-full text-sm font-semibold">
                  9.7
                </button>
              </div>

              {/* Price */}
              <div className="flex flex-col items-end">
                <span className="text-xl font-semibold text-gray-800">
                  $3800
                </span>
                <span className="text-sm text-gray-500">
                  Includes taxes and fees
                </span>
                <button className="mt-4 px-6 py-2 bg-teal-600 text-white rounded-lg">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
