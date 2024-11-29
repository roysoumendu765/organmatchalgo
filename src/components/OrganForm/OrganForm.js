import React, { useState } from "react";
import Donate from "../Donate/Donate";
import RecipientForm from "../RecipientForm/RecipientForm";

const OrganForm = () => {
  const [isDonor, setIsDonor] = useState(true);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 pt-24 pb-10">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Organ Registration
        </h2>

        <div className="flex justify-center mb-6 gap-4">
          <button
            onClick={() => setIsDonor(true)}
            className={`w-1/2 p-4 text-lg font-medium rounded-lg transition-all duration-300 ${
              isDonor ? "bg-teal-600 text-white" : "bg-gray-300 text-gray-600"
            } hover:bg-teal-700 hover:text-white focus:outline-none`}
          >
            Donor
          </button>
          <button
            onClick={() => setIsDonor(false)}
            className={`w-1/2 p-4 text-lg font-medium rounded-lg transition-all duration-300 ${
              !isDonor ? "bg-teal-600 text-white" : "bg-gray-300 text-gray-600"
            } hover:bg-teal-700 hover:text-white focus:outline-none`}
          >
            Recipient
          </button>
        </div>

        {isDonor ? <Donate /> : <RecipientForm />}
      </div>
    </div>
  );
};

export default OrganForm;