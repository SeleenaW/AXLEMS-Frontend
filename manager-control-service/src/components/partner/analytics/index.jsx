import React, { useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { DatePicker, Select } from "antd";
import "antd/dist/reset.css";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const { RangePicker } = DatePicker;
const { Option } = Select;

const PartnerAnalyticsInsights = () => {
  const [dateRange, setDateRange] = useState([]);
  const [filter, setFilter] = useState("daily");

  const handleDateChange = (dates) => {
    setDateRange(dates);
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const revenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue",
        data: [1200, 1900, 3000, 5000, 2000, 3000],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const bookingData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Bookings",
        data: [50, 60, 70, 80, 90, 100, 110],
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Revenue Analytics</h2>
      <div className="flex items-center gap-4 mb-6">
        <RangePicker onChange={handleDateChange} className="rounded-md" />
        <Select
          defaultValue="daily"
          onChange={handleFilterChange}
          className="rounded-md"
          dropdownClassName="rounded-md"
        >
          <Option value="daily">Daily</Option>
          <Option value="weekly">Weekly</Option>
          <Option value="monthly">Monthly</Option>
        </Select>
        <Select
          defaultValue="Room type"
          onChange={handleFilterChange}
          className="rounded-md"
          dropdownClassName="rounded-md"
        >
          <Option value="room">Room type</Option>
          <Option value="Packages">Packages</Option>
          <Option value="Special">Special offers</Option>
        </Select>
      </div>
      <div className="mb-10">
        <Line data={revenueData} />
      </div>

      <h2 className="text-2xl font-bold mb-4">Booking Trends</h2>
      <div className="mb-10">
        <Bar data={bookingData} />
      </div>

      <h2 className="text-2xl font-bold mb-4">Customer Demographics</h2>
      <p className="text-gray-600">
        Insights into age group distribution, gender, geographical distribution,
        and customer preferences.
      </p>
    </div>
  );
};

export default PartnerAnalyticsInsights;
