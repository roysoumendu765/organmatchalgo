import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} OrganMatch. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
