import React, { useState } from "react";
import getWeb3 from "../../web3/getWeb3";
import Swal from "sweetalert2";
import MatchingAlgo from "../../json/MatchingAlgo.json";

const Donate = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    bloodType: "",
    BMI: "",
    organType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();

      if (accounts.length === 0) {
        throw new Error("MetaMask is not connected.");
      }

      const contract = new web3.eth.Contract(
        MatchingAlgo.abi,
        MatchingAlgo.contractAddress
      );

      await contract.methods
        .registerDonor(
          formData.name,
          parseInt(formData.age),
          formData.bloodType,
          parseInt(formData.BMI),
          formData.organType
        )
        .send({ from: accounts[0], gas: 3000000 });

      Swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: `Donor ${formData.name} registered successfully!`,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || "Something went wrong",
      });
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-400 to-teal-500 p-6 pt-24 pb-10">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Register as Donor</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block text-sm font-medium text-gray-600">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="bloodType" className="block text-sm font-medium text-gray-600">Blood Type</label>
            <input
              type="text"
              id="bloodType"
              name="bloodType"
              value={formData.bloodType}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="BMI" className="block text-sm font-medium text-gray-600">BMI</label>
            <input
              type="number"
              id="BMI"
              name="BMI"
              value={formData.BMI}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="organType" className="block text-sm font-medium text-gray-600">Organ Type</label>
            <input
              type="text"
              id="organType"
              name="organType"
              value={formData.organType}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <button type="submit" className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600">
            Register Donor
          </button>
        </form>
      </div>
    </div>
  );
};

export default Donate;