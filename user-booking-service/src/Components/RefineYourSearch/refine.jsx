import React from "react";
import Content from "./";

const SearchForm = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center font-poppins"
      style={{ backgroundImage: "url('https://example.com/your-image.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center mb-8">
        <h1 className="text-4xl font-bold text-teal-500">Refine Your Search</h1>
        <p className="text-gray-300">
          Set filters tailored to your preferences
        </p>
      </div>

      <div className="relative z-10 w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            placeholder="Enter destination"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="date"
            placeholder="Select dates"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="number"
            placeholder="Select number of guests"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            min="1"
          />
          <select className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
            <option value="">Select experience</option>
            <option value="adventure">Adventure</option>
            <option value="relaxation">Relaxation</option>
            <option value="cultural">Cultural</option>
            <option value="romantic">Romantic</option>
          </select>
        </div>

        <div className="text-center">
          <button className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition duration-300">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
