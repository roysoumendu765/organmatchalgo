import React, { useState } from "react";
import getWeb3 from "../../web3/getWeb3";
import MatchingAlgo from "../../json/MatchingAlgo.json";
import Swal from "sweetalert2";

const MatchResults = () => {
  const [recipientId, setRecipientId] = useState("");
  const [donorId, setDonorId] = useState(null);

  const handleMatch = async () => {
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

      const match = await contract.methods.findMatch(parseInt(recipientId)).call({ from: accounts[0] });

      if (match === "0") {
        Swal.fire({
          icon: "info",
          title: "No Match Found",
          text: "No matching donor found.",
        });
      } else {
        setDonorId(match);
        Swal.fire({
          icon: "success",
          title: "Match Found!",
          text: `Donor with ID ${match} matches the recipient.`,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || "Something went wrong",
      });
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-400 to-teal-500 p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Match Results</h2>
        <div>
          <label htmlFor="recipientId" className="block text-sm font-medium text-gray-600">Recipient ID</label>
          <input
            type="number"
            id="recipientId"
            value={recipientId}
            onChange={(e) => setRecipientId(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
          />
        </div>
        <button
          onClick={handleMatch}
          className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 mt-4"
        >
          Find Match
        </button>
        {donorId && (
          <div className="mt-4 text-center text-gray-700">
            <p>Matched Donor ID: {donorId}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MatchResults;
