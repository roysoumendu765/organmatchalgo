import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const AdminDashBoard = () => {
  // Modal State
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [showViewReportsModal, setShowViewReportsModal] = useState(false);
  const [showManageSettingsModal, setShowManageSettingsModal] = useState(false);

  // Modal Toggle Functions
  const toggleAddUserModal = () => setShowAddUserModal(!showAddUserModal);
  const toggleViewReportsModal = () => setShowViewReportsModal(!showViewReportsModal);
  const toggleManageSettingsModal = () => setShowManageSettingsModal(!showManageSettingsModal);

  // useNavigate hook for redirection
  const navigate = useNavigate();

  // Handle Logout
  const handleLogout = () => {
    // Clear session data (for example, localStorage or any state management system)
    // localStorage.removeItem("userToken"); // Uncomment if using localStorage for token

    // Redirect to the home page ("/")
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-300 to-teal-500 p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white">Admin Dashboard</h1>
        <p className="text-gray-200 mt-2">Welcome, Admin! Manage your system effectively.</p>
      </header>

      <main className="container mx-auto">
        {/* Logout Button */}
        <div className="text-right mb-6">
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 transition duration-300">
            Logout
          </button>
        </div>

        {/* Stats Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-gray-800">Users</h3>
            <p className="text-3xl font-bold text-teal-600 mt-2">120</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-gray-800">Reports</h3>
            <p className="text-3xl font-bold text-teal-600 mt-2">25</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-gray-800">Active Sessions</h3>
            <p className="text-3xl font-bold text-teal-600 mt-2">8</p>
          </div>
        </section>

        {/* Quick Actions Section */}
        <section className="text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Quick Actions</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              onClick={toggleAddUserModal} 
              className="bg-teal-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 transition duration-300">
              Add User
            </button>
            <button 
              onClick={toggleViewReportsModal}
              className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition duration-300">
              View Reports
            </button>
            <button 
              onClick={toggleManageSettingsModal}
              className="bg-purple-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 transition duration-300">
              Manage Settings
            </button>
          </div>
        </section>

        {/* Modals */}
        {/* Add User Modal */}
        {showAddUserModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Add New User</h3>
              <form>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">User Name</label>
                  <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Enter username" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Enter email" />
                </div>
                <div className="flex justify-end gap-4">
                  <button 
                    type="button" 
                    onClick={toggleAddUserModal} 
                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400">
                    Cancel
                  </button>
                  <button type="submit" className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700">
                    Add User
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* View Reports Modal */}
        {showViewReportsModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Reports</h3>
              <ul className="space-y-4">
                <li className="border-b py-2">
                  <p className="font-semibold">Kidney Donations</p>
                  <p className="text-gray-600">Reports on kidney donations for the last month.</p>
                </li>
                <li className="border-b py-2">
                  <p className="font-semibold">Liver Donations</p>
                  <p className="text-gray-600">Detailed report on liver donations and recipients.</p>
                </li>
              </ul>
              <div className="flex justify-end gap-4 mt-4">
                <button 
                  type="button" 
                  onClick={toggleViewReportsModal} 
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400">
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Manage Settings Modal */}
        {showManageSettingsModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Manage Settings</h3>
              <form>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Site Title</label>
                  <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Enter site title" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Notification Frequency</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                  </select>
                </div>
                <div className="flex justify-end gap-4">
                  <button 
                    type="button" 
                    onClick={toggleManageSettingsModal} 
                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400">
                    Cancel
                  </button>
                  <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
                    Save Settings
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* System Status Section */}
        <section className="bg-white p-6 shadow-lg rounded-lg mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">System Status</h3>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <div className="h-4 w-4 rounded-full bg-green-500"></div>
              <p className="text-gray-600">API Status: <span className="font-semibold">Operational</span></p>
            </div>
            <p className="text-gray-600">Last checked: 5 minutes ago</p>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <div className="h-4 w-4 rounded-full bg-yellow-500"></div>
              <p className="text-gray-600">Database Status: <span className="font-semibold">Degraded</span></p>
            </div>
            <p className="text-gray-600">Last checked: 10 minutes ago</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="h-4 w-4 rounded-full bg-red-500"></div>
              <p className="text-gray-600">Authentication Status: <span className="font-semibold">Down</span></p>
            </div>
            <p className="text-gray-600">Last checked: 15 minutes ago</p>
          </div>
        </section>

      </main>
    </div>
  );
};

export default AdminDashBoard;