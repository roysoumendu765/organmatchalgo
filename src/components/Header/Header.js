import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="text-xl font-semibold text-gray-800">
        <img src="organmatch.png" alt="Security" className="w-full h-10" />
        </div>
    
         <nav className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-gray-600 hover:text-blue-600 font-medium"
          >
            Home
          </Link>
          <Link
            to="/auth"
            className="text-gray-600 hover:text-blue-600 font-medium"
          >
            Login
          </Link>
          <Link
            to="/admin"
            className="text-gray-600 hover:text-blue-600 font-medium"
          >
            Admin
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 hover:text-blue-600 font-medium"
          >
            Contact
          </Link>
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-blue-600 focus:outline-none"
            aria-label="Open Menu"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg">
          <nav className="flex flex-col space-y-2 p-4">
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-600 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/auth"
              className="text-gray-600 hover:text-blue-600 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/admin"
              className="text-gray-600 hover:text-blue-600 font-medium"
              onClick={() => setMenuOpen(false)}
            >
               Admin
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-blue-600 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
