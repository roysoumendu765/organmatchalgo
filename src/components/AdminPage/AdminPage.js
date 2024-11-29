import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import getWeb3 from "../../web3/getWeb3";
import MatchingAlgo from "../../json/MatchingAlgo.json";
import Swal from "sweetalert2";

const AdminPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const web3 = await getWeb3();

      if (!window.ethereum) {
        throw new Error("MetaMask is not installed. Please install it to use this dApp.");
      }
      await window.ethereum.enable();
      const accounts = await web3.eth.getAccounts();

      if (accounts.length === 0) {
        throw new Error("No accounts found. Please make sure MetaMask is unlocked.");
      }

      const contract = new web3.eth.Contract(
        MatchingAlgo.abi,
        MatchingAlgo.contractAddress
      );

      const adminDetails = await contract.methods.getAdminPassword().call({from: accounts[0], gas: 3000000});
      
      if(adminDetails && adminDetails[0] && adminDetails[0] !== ""){
        if(formData.password === adminDetails[1]){
          Swal.fire({
            icon: "success",
            title: `Success`,
            text: `Login Successful`,
            confirmButtonText: "OK"
          }).then((res) => {
            if(res.isConfirmed){
              navigate('/admindashboard');
            }
          })
        }
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something Went Wrong!",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-indigo-400 via-blue-500 to-teal-500">
      <header className="w-full text-center py-6 text-white">
        <h1 className="text-3xl font-semibold">Admin Login</h1>
        <p className="text-sm">Sign in to access the admin dashboard</p>
      </header>

      <div className="flex-grow flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your username"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-3 px-4 rounded-lg shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      <footer className="w-full bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 OrganMatch. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AdminPage;
