import React from "react";

const MatchCard = ({ donor, recipient }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-4 p-6 pt-24 pb-10 h-screen">
      <h3 className="text-lg font-semibold text-teal-500 mb-6 text-center">Match Card</h3>
      <div className="flex flex-col md:flex-row justify-between gap-6">
        
        <div className="flex-1 bg-teal-50 p-6 rounded-lg shadow-md h-[75vh]">
          <h4 className="font-semibold text-lg text-teal-600">Donor</h4>
          <p><strong>Name:</strong> {donor && donor.name ? donor.name : "N/A"}</p>
          <p><strong>Blood Type:</strong> {donor && donor.bloodType ? donor.bloodType : "N/A"}</p>
          <p><strong>Organ Type:</strong> {donor && donor.organType ? donor.organType : "N/A"}</p>
        </div>

        <div className="flex-1 bg-teal-50 p-6 rounded-lg shadow-md h-[75vh]">
          <h4 className="font-semibold text-lg text-teal-600">Recipient</h4>
          <p><strong>Name:</strong> {recipient && recipient.name ? recipient.name : "N/A"}</p>
          <p><strong>Blood Type:</strong> {recipient && recipient.bloodType ? recipient.bloodType : "N/A"}</p>
          <p><strong>Organ Type:</strong> {recipient && recipient.organType ? recipient.organType : "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
