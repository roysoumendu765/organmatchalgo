import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import getWeb3 from "../../web3/getWeb3";
import MatchingAlgo from "../../json/MatchingAlgo.json";
import Swal from "sweetalert2";

const AuthPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleOnLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
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

      const UserDetails = await contract.methods.getPassword(String(email)).call({from: accounts[0], gas: 3000000});
      
      if(UserDetails && UserDetails[0] && UserDetails[0] !== ""){
        if(password === UserDetails[0]){
          Swal.fire({
            icon: "success",
            title: `Success`,
            text: `Login Successful`,
            confirmButtonText: "OK"
          }).then((res) => {
            if(res.isConfirmed){
              navigate('/dashboard');
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

  const handleOnRegister = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;
    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Passwords Don't Match!",
      });
      return;
    }

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

      await contract.methods.registerUser(String(name),String(email),String(password),String(confirmPassword)).send({from: accounts[0], gas: 3000000});
      
          Swal.fire({
            icon: "success",
            title: `Success`,
            text: `Registration Successful`,
            confirmButtonText: "OK"
          }).then((res) => {
            if(res.isConfirmed){
              setIsLogin(true);
              setFormData({
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
              });
            }
          })
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something Went Wrong!",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-teal-500 pt-24 pb-10">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8 sm:p-10">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
          {isLogin ? "Login" : "Register"}
        </h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          {isLogin
            ? "Access your account to continue."
            : "Create an account to get started."}
        </p>

        <form
          className="space-y-6"
          onSubmit={isLogin ? handleOnLogin : handleOnRegister}
        >
          {!isLogin && (
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
          )}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="example@mail.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Your Password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          {!isLogin && (
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-600"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm Your Password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-3 px-4 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring focus:ring-teal-300"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <div className="text-center mt-6">
          <button
            className="text-teal-500 hover:underline text-sm"
            onClick={toggleForm}
          >
            {isLogin
              ? "Don't have an account? Register"
              : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;