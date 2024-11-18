import React from "react";

const IntegrationManagement = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          API Integration Management
        </h1>

        {/* API Integration Status */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">API Integration Status</h2>
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Pie Chart Placeholder */}
            <div className="flex-1 flex items-center justify-center h-40 bg-gray-200 rounded-md">
              <span className="text-gray-500">Pie Chart (Active, Pending, Error)</span>
            </div>

            {/* Notifications Section */}
            <div className="flex-1">
              <h3 className="text-lg font-medium text-red-500 mb-2">Error Notifications</h3>
              <ul className="space-y-2">
                <li className="bg-red-100 border border-red-300 text-red-700 p-3 rounded-md">
                  Integration failed for service A. <br />
                  <span className="font-medium">Troubleshooting Tip:</span> Check API key validity.
                </li>
                <li className="bg-red-100 border border-red-300 text-red-700 p-3 rounded-md">
                  Unable to sync data with service B. <br />
                  <span className="font-medium">Troubleshooting Tip:</span> Verify server connectivity.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* API Settings */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">API Settings</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 border border-gray-200 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Update API Keys</h3>
              <button className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md">
                Update Keys
              </button>
            </div>
            <div className="bg-gray-50 border border-gray-200 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-800 mb-2">View Integration Logs</h3>
              <button className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md">
                View Logs
              </button>
            </div>
            <div className="bg-gray-50 border border-gray-200 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Adjust Synchronization Frequency</h3>
              <select
                className="border border-gray-300 rounded-md p-2 w-full text-gray-700"
                defaultValue="daily"
              >
                <option value="hourly">Hourly</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
              </select>
            </div>
          </div>
        </div>

        {/* Re-sync Button */}
        <div className="mt-6 text-right">
          <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
            Re-sync Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntegrationManagement;
