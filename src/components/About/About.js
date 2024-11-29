import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-700 to-blue-900 text-white py-16">
        <div className="text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-extrabold mb-6">About Us</h1>
          <p className="text-xl">
            Our mission is to revolutionize organ donation and transplantation using the power of blockchain technology, making it secure, transparent, and accessible for everyone.
          </p>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16 px-6 text-center bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Our Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Mission</h3>
              <p>
                To create a decentralized and trustworthy platform that bridges the gap between organ donors and recipients, ensuring secure and fair matches.
              </p>
            </div>
            {/* Vision */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Vision</h3>
              <p>
                To become the global leader in blockchain-powered organ donation systems, transforming the lives of millions with innovative technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">What Makes Us Unique?</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {/* Feature 1 */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6">
            <img src="/images/blockchain-icon.png" alt="Blockchain" className="w-20 h-20 mb-4" />
            <h3 className="text-xl font-bold mb-2">Blockchain-Powered</h3>
            <p>Secure, immutable, and decentralized technology ensures trust and transparency.</p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6">
            <img src="/images/security-icon.png" alt="Security" className="w-20 h-20 mb-4" />
            <h3 className="text-xl font-bold mb-2">Data Security</h3>
            <p>Your personal and medical data is safe with our advanced encryption protocols.</p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6">
            <img src="/images/global-impact-icon.png" alt="Impact" className="w-20 h-20 mb-4" />
            <h3 className="text-xl font-bold mb-2">Global Impact</h3>
            <p>Helping to save lives worldwide by streamlining the organ donation process.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">How It Works</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Our platform simplifies and secures the organ donation process with these easy steps.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center bg-gray-50 rounded-lg shadow-lg p-6">
            <span className="text-5xl font-bold text-yellow-400 mb-4">1</span>
            <h3 className="text-xl font-bold mb-2">Register</h3>
            <p>Donors and recipients register on our platform with secure and verified details.</p>
          </div>
          {/* Step 2 */}
          <div className="flex flex-col items-center text-center bg-gray-50 rounded-lg shadow-lg p-6">
            <span className="text-5xl font-bold text-yellow-400 mb-4">2</span>
            <h3 className="text-xl font-bold mb-2">Upload Data</h3>
            <p>Relevant medical and personal data is securely uploaded to the blockchain.</p>
          </div>
          {/* Step 3 */}
          <div className="flex flex-col items-center text-center bg-gray-50 rounded-lg shadow-lg p-6">
            <span className="text-5xl font-bold text-yellow-400 mb-4">3</span>
            <h3 className="text-xl font-bold mb-2">Auto-Match</h3>
            <p>Our smart algorithm matches donors with recipients based on compatibility.</p>
          </div>
          {/* Step 4 */}
          <div className="flex flex-col items-center text-center bg-gray-50 rounded-lg shadow-lg p-6">
            <span className="text-5xl font-bold text-yellow-400 mb-4">4</span>
            <h3 className="text-xl font-bold mb-2">Transplant</h3>
            <p>The matched organ is delivered and successfully transplanted to the recipient.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Join Us in Transforming Lives</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Become a part of our mission to make organ donation accessible, secure, and trustworthy. Together, we can make a difference.
        </p>
        <a
          href="/auth"
          className="px-10 py-4 bg-yellow-400 text-blue-900 font-bold rounded-lg shadow-lg hover:bg-yellow-500"
        >
          Get Involved
        </a>
      </section>
    </div>
  );
};

export default About;
