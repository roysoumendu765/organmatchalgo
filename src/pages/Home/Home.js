import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-blue-700 to-blue-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="flex flex-col items-center text-center py-20 px-6">
          <h1 className="text-6xl font-extrabold mb-6">
            Transforming Lives with <span className="text-yellow-400">Blockchain</span>
          </h1>
          <p className="text-xl max-w-4xl mb-10">
            Join our secure, decentralized, and transparent platform for organ donation and transplantation, designed to save lives with innovative technology.
          </p>
          <div className="flex space-x-4">
            <Link
              to="/auth"
              className="px-8 py-3 bg-yellow-400 text-blue-900 font-bold rounded-lg shadow-lg hover:bg-yellow-500"
            >
              Register as a Donor
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 bg-white text-blue-900 font-bold rounded-lg shadow-lg hover:bg-gray-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white text-blue-900 py-16 px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Choose Our Platform?</h2>
          <p className="text-lg">
            Discover the revolutionary features of our blockchain-based organ donation system.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center bg-blue-50 rounded-lg shadow-lg p-6">
            <img src="/images/security-icon.png" alt="Security" className="w-20 h-20 mb-4" />
            <h3 className="text-xl font-bold mb-2">Enhanced Security</h3>
            <p>Your data is safe with us, protected by blockchain’s decentralized and immutable architecture.</p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center bg-blue-50 rounded-lg shadow-lg p-6">
            <img src="/images/match-icon.png" alt="Matching" className="w-20 h-20 mb-4" />
            <h3 className="text-xl font-bold mb-2">Smart Matching</h3>
            <p>Experience faster and more accurate donor-recipient matching powered by advanced algorithms.</p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center bg-blue-50 rounded-lg shadow-lg p-6">
            <img src="/images/transparency-icon.png" alt="Transparency" className="w-20 h-20 mb-4" />
            <h3 className="text-xl font-bold mb-2">Complete Transparency</h3>
            <p>View every step of the process with full transparency and traceability through blockchain logs.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-800 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Our Impact So Far</h2>
        <p className="text-lg max-w-2xl mx-auto mb-12">
          Since launching, we have facilitated countless successful organ matches, saving lives and building trust.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <h3 className="text-5xl font-bold text-yellow-400">2,500+</h3>
            <p>Donors Registered</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-5xl font-bold text-yellow-400">1,800+</h3>
            <p>Recipients Matched</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-5xl font-bold text-yellow-400">99%</h3>
            <p>Success Rate</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-black py-16 px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What People Are Saying</h2>
          <p className="text-lg">
            Hear from our donors, recipients, and medical professionals.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center bg-blue-50 rounded-lg shadow-lg p-6 text-black">
            <p className="italic mb-4">
              "This platform saved my life by finding me a kidney donor in record time!"
            </p>
            <p className="font-bold">- John Doe</p>
          </div>
          <div className="flex flex-col items-center text-center bg-blue-50 rounded-lg shadow-lg p-6 text-black">
            <p className="italic mb-4">
              "As a donor, I felt secure knowing my information was in good hands."
            </p>
            <p className="font-bold">- Jane Smith</p>
          </div>
          <div className="flex flex-col items-center text-center bg-blue-50 rounded-lg shadow-lg p-6 text-black">
            <p className="italic mb-4">
              "A game-changing innovation for the healthcare industry."
            </p>
            <p className="font-bold">- Dr. Emily Carter</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 text-center">
        <h2 className="text-4xl font-bold mb-6">Join Our Mission Today</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Whether you’re a donor or a recipient, your journey starts here. Together, we can make a difference.
        </p>
        <Link
          to="/auth"
          className="px-10 py-4 bg-blue-900 text-yellow-400 font-bold rounded-lg shadow-lg hover:bg-blue-800"
        >
          Register Now
        </Link>
      </section>

    </div>
  );
};

export default Home;
