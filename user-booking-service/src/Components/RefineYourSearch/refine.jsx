import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaUser, FaStar } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";

import { DatePicker, Select } from "antd";
import "antd/dist/reset.css";

const { Option } = Select;
const { RangePicker } = DatePicker;

const RefineSection = () => {
  const [dateRange, setDateRange] = useState([]);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Exo+2:wght@100;400;700;900&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const handleDateChange = (dates) => {
    setDateRange(dates);
  };

  const handleExperienceChange = (value) => {
    console.log("Selected experience:", value);
  };

  // Common styles for consistent box design
  const commonBoxStyles =
    "w-full p-4 pl-14 bg-gray-50 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-4 focus:ring-teal-400 transition-shadow";

  return (
    <div
      className="bg-gradient-to-br from-blue-100 to-teal-50 min-h-screen py-28"
      style={{ fontFamily: '"Exo 2", sans-serif' }}
    >
      {/* Header Section */}
      <div className="flex flex-col items-center py-12 bg-white shadow-xl rounded-3xl mx-6 md:mx-16 lg:mx-32 border border-gray-200">
        <h1 className="text-5xl font-poppins mb-6 text-gray-800">
          Refine Your Search
        </h1>
        <p className="text-gray-500 mb-8 text-lg">
          Customize your search to find the best experiences
        </p>

        {/* Input Fields Section */}
        <div className="w-full max-w-5xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Destination Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Enter destination"
                className={commonBoxStyles}
              />
              <FaMapMarkerAlt className="absolute left-5 top-1/2 transform -translate-y-1/2 text-teal-400" />
            </div>

            {/* Guests Input */}
            <div className="relative">
              <input
                type="text"
                maxLength={2}
                placeholder="Select number of guests"
                className={commonBoxStyles}
              />
              <FaUser className="absolute left-5 top-1/2 transform -translate-y-1/2 text-teal-400" />
            </div>

            {/* Range Picker Input */}
            <div className="relative">
              <RangePicker
                className="ant-picker w-full p-4 pl-14 pr-10 bg-gray-50 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-4 focus:ring-teal-400 cursor-pointer appearance-none peer"
                format="YYYY-MM-DD"
                onChange={handleDateChange}
                placeholder={["Start Date", "End Date"]}
                style={{
                  height: "56px",
                  width: "100%",
                  borderRadius: "9999px",
                  borderColor: "#d1d5db",
                  paddingLeft: "3.5rem",
                }}
                disabledDate={(current) =>
                  current && current < new Date().setHours(0, 0, 0, 0)
                }
              />
              <FaCalendarAlt className="absolute left-5 top-1/2 transform -translate-y-1/2 text-teal-400" />
            </div>

            {/* Experience Dropdown */}
            <div className="relative">
              <Select
                placeholder="Select experience"
                onChange={handleExperienceChange}
                suffixIcon={<AiFillCaretDown className="text-teal-400" />}
                className="w-full p-4 pl-14 bg-gray-50 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-4 focus:ring-teal-400 transition-shadow"
                style={{
                  height: "56px",
                  borderRadius: "9999px",
                  paddingLeft: "3.5rem",
                  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
                  outline: "none", // Removes blue focus outline
                }}
                dropdownStyle={{
                  borderRadius: "12px",
                }}
              >
                <Option value="adventure">Adventure</Option>
                <Option value="relaxation">Relaxation</Option>
                <Option value="cultural">Cultural</Option>
                <Option value="wildlife">Wildlife</Option>
                <Option value="sports">Sports</Option>
              </Select>
              <FaStar className="absolute left-5 top-1/2 transform -translate-y-1/2 text-teal-400" />
            </div>

            {/* <div className="relative">
              <FaStar className="absolute left-5 top-1/2 transform -translate-y-1/2 text-teal-400" />
              <select
                name="country"
                className="w-full p-4 pl-14 bg-gray-50 border-none rounded-full shadow-sm focus:outline-none focus:ring-4 focus:ring-teal-400 transition-shadow"
              >
                <option disabled className="text-gray-300">
                  Select Country
                </option>
                <option className="hover: text-black">USA</option>
                <option className="text-black">Canada</option>
                <option className="text-black">UK</option>
              </select>
            </div> */}

            {/* <div className="relative">
              <FaStar className="absolute left-5 top-1/2 transform -translate-y-1/2 text-teal-400" />
              <Select
                placeholder="Select experience"
                className={commonBoxStyles}
                onChange={handleExperienceChange}
                suffixIcon={<AiFillCaretDown className="text-teal-400" />}
              >
                <Option value="adventure" className="custom-select-option">
                  Adventure
                </Option>
                <Option value="relaxation" className="custom-select-option">
                  Relaxation
                </Option>
                <Option value="cultural" className="custom-select-option">
                  Cultural
                </Option>
                <Option value="wildlife" className="custom-select-option">
                  Wildlife
                </Option>
                <Option value="sports" className="custom-select-option">
                  Sports
                </Option>
              </Select>
            </div> */}
          </div>

          {/* Search Button */}
          <div className="text-center">
            <button className="px-12 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-full hover:opacity-90 transition-transform transform hover:scale-105 shadow-lg">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefineSection;
