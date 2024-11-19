import React, { useState, useEffect } from "react";

const PartnerDashboard = () => {
  const [partnerName, setPartnerName] = useState("John Doe");
  const [totalRevenue, setTotalRevenue] = useState(10000);
  const [totalBookings, setTotalBookings] = useState({
    past: 50,
    ongoing: 10,
    upcoming: 20,
  });
  const [occupancyRate, setOccupancyRate] = useState(75);
  const [apiStatus, setApiStatus] = useState("Active");
  const [customerFeedbacks, setCustomerFeedbacks] = useState([
    "Great service!",
    "Very satisfied with the experience.",
    "Could be better.",
  ]);

  useEffect(() => {
    // Fetch data from API and update state here
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">WELCOME, {partnerName}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Total Revenue</h2>
          <p className="text-2xl">${totalRevenue}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Total Bookings</h2>
          <p>Past: {totalBookings.past}</p>
          <p>Ongoing: {totalBookings.ongoing}</p>
          <p>Upcoming: {totalBookings.upcoming}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Occupancy Rate</h2>
          <p className="text-2xl">{occupancyRate}%</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">API Integration Status</h2>
          <p>{apiStatus}</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md col-span-1 md:col-span-2 lg:col-span-3">
          <h2 className="text-xl font-semibold mb-2">
            Customer Feedbacks with Star Ratings
          </h2>
          <ul>
            {customerFeedbacks.map((feedback, index) => (
              <li key={index}>
                <div className="flex items-center">
                  <span>
                    Customer {index + 1} (John Doe): {feedback}
                  </span>
                  <span className="ml-2 text-yellow-500">
                    {"★".repeat(4)}
                    {"☆".repeat(1)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PartnerDashboard;
