import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importing Link for routing

const Dashboard = () => {
  // Dark Mode State
  const [darkMode, setDarkMode] = useState(false);

  // User Profile Data
  const [user, setUser] = useState({
    name: "John Doe",
    donorStatus: "Active",
    avatar: "/images/user-avatar.png",
  });

  // Donation History
  const [donationHistory, setDonationHistory] = useState([
    { id: 1, organ: "Kidney", date: "January 15, 2024", recipient: "Bob Smith" },
    { id: 2, organ: "Liver", date: "March 2, 2023", recipient: "Alice Johnson" },
  ]);

  // Notification state
  const [notification, setNotification] = useState("New match found! Please review your match details.");

  // Appointment Scheduling
  const [appointmentDate, setAppointmentDate] = useState("");

  // Feedback and Rating
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Handle Appointment Change
  const handleAppointmentChange = (event) => {
    setAppointmentDate(event.target.value);
  };

  // Handle Feedback Change
  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  // Handle Rating
  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <div className={`min-h-screen flex ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      {/* Sidebar */}
      <div className={`w-64 ${darkMode ? "bg-purple-900" : "bg-teal-800"} text-white shadow-md`}>
        <div className="flex flex-col h-full">
          {/* Logo/Brand Name */}
          <div className="flex items-center justify-center h-20 border-b border-gray-700">
            <h2 className="text-2xl font-bold">OrganMatch</h2>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col space-y-4 p-4">
            <Link to="/dashboard" className="text-lg hover:bg-teal-700 p-2 rounded-lg">Dashboard</Link>
            <Link to="/donate" className="text-lg hover:bg-teal-700 p-2 rounded-lg">Donate</Link>
            <Link to="/organ-form" className="text-lg hover:bg-teal-700 p-2 rounded-lg">Organ Form</Link>
            <Link to="/recipient-form" className="text-lg hover:bg-teal-700 p-2 rounded-lg">Recipient Form</Link>
            <Link to="/match-results" className="text-lg hover:bg-teal-700 p-2 rounded-lg">Match Results</Link>
            <Link to="/match-card" className="text-lg hover:bg-teal-700 p-2 rounded-lg">Match Card</Link>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100">
        {/* Header */}
        <header className="h-16 bg-white shadow-md flex items-center px-6 justify-between">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          {/* Dark Mode Toggle */}
          <button onClick={toggleDarkMode} className="bg-gray-300 text-gray-900 p-2 rounded-lg">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </header>

        {/* Content */}
        <main className="p-6 md:p-12">
          {/* Welcome Message */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-teal-800 mb-2">Welcome to Your Dashboard!</h2>
            <p className="text-lg text-gray-600">Manage your donations, track your matches, and view organ donation statuses.</p>
          </div>

          {/* User Profile Overview */}
          <div className="bg-white p-6 shadow-lg rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-teal-800 mb-4">Profile Overview</h3>
            <div className="flex items-center space-x-4">
              <img className="w-16 h-16 rounded-full" src={user.avatar} alt="User" />
              <div>
                <h4 className="text-lg font-bold">{user.name}</h4>
                <p className="text-gray-600">Donor Status: {user.donorStatus}</p>
                <Link to="/profile" className="text-teal-500">Edit Profile</Link>
              </div>
            </div>
          </div>

          {/* Donation History */}
          <div className="bg-white p-6 shadow-lg rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-teal-800 mb-4">Donation History</h3>
            <ul className="space-y-4">
              {donationHistory.map((donation) => (
                <li key={donation.id} className="border-b py-2">
                  <p className="font-bold">{donation.organ} Donation</p>
                  <p className="text-gray-600">Date: {donation.date} | Recipient: {donation.recipient}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Real-Time Notification */}
          {notification && (
            <div className="bg-yellow-400 text-teal-900 p-4 rounded-lg shadow-lg mb-6">
              <h3 className="font-semibold">New Match Found!</h3>
              <p className="text-gray-800">{notification}</p>
              <Link to="/match-results" className="text-teal-700 underline">View Match</Link>
            </div>
          )}

          {/* Appointment Scheduling */}
          <div className="bg-white p-6 shadow-lg rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-teal-800 mb-4">Schedule Your Appointment</h3>
            <input
              type="date"
              className="p-2 border border-gray-300 rounded-lg"
              placeholder="Select Date"
              value={appointmentDate}
              onChange={handleAppointmentChange}
            />
            <button
              className="mt-4 bg-yellow-400 text-teal-900 py-2 px-6 rounded-lg hover:bg-yellow-500 transition"
              onClick={() => alert(`Appointment scheduled for ${appointmentDate}`)}
            >
              Book Appointment
            </button>
          </div>

          {/* Search Bar */}
          <div className="flex items-center bg-white p-4 shadow-lg rounded-lg mb-6">
            <input
              type="text"
              placeholder="Search matches"
              className="p-2 border border-gray-300 rounded-lg mr-4"
            />
            <select className="bg-gray-200 p-2 rounded-lg">
              <option>Organ Type</option>
              <option>Kidney</option>
              <option>Liver</option>
              <option>Heart</option>
            </select>
            <button className="ml-4 bg-yellow-400 text-teal-900 py-2 px-6 rounded-lg hover:bg-yellow-500 transition">
              Apply Filters
            </button>
          </div>

          {/* Feedback Form */}
          <div className="bg-white p-6 shadow-lg rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-teal-800 mb-4">Rate Your Experience</h3>
            <div className="flex space-x-2 mb-4">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  className={value <= rating ? "text-yellow-400" : "text-gray-400"}
                  onClick={() => handleRating(value)}
                >
                  ★
                </button>
              ))}
            </div>
            <textarea
              placeholder="Leave feedback here..."
              className="mt-4 p-2 border border-gray-300 rounded-lg w-full"
              value={feedback}
              onChange={handleFeedbackChange}
            />
            <button className="mt-4 bg-yellow-400 text-teal-900 py-2 px-6 rounded-lg hover:bg-yellow-500 transition">
              Submit Feedback
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
