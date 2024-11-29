import React, { useState } from "react";
import Swal from "sweetalert2";
import emailjs from "emailjs-com"; 
import getWeb3 from "../../web3/getWeb3";
import MatchingAlgo from "../../json/MatchingAlgo.json";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All fields are required!",
      });
      return;
    }

    setIsSubmitting(true);

    await saveToContract();

    await emailjs
    .send(
      "service_jqorm1u",
      "template_sngtdrm",
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      "EBArEIlM637PLzGEG"
    )
    .then(() => {
      emailjs
        .send(
          "service_jqorm1u", 
          "template_mmw0kiy", 
          {
            to_name: formData.name, 
            to_email: formData.email, 
          },
          "EBArEIlM637PLzGEG" 
        )
        .then(() => {
          Swal.fire({
            icon: "success",
            title: `Mail Sent!`,
            text: `Thank you for reaching out! We've sent you a confirmation email.`,
          });
          setFormData({ name: "", email: "", message: "" }); 
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Auto-reply Failed",
            text: "Your message was sent, but the confirmation email failed.",
          });
          console.error("Auto-reply error:", error);
        });
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Failed to send",
        text: "Something went wrong. Please try again later.",
      });
      console.error("EmailJS error:", error);
      setFormData({ name: "", email: "", message: "" });
    })
    .finally(() => {
      setIsSubmitting(false); 
    });
  };

  const saveToContract = async () => {
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

      const _name = String(formData.name);
      const _username = String(formData.email);
      const _message = String(formData.message);

      await contract.methods.setContactForm(_name, _username, _message).send({from: accounts[0], gas: 3000000});
      const contactDetails = await contract.methods.getContactFormData().call({from: accounts[0], gas: 3000000});
      console.log(contactDetails);

     } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed to Save in the Contract",
        text: `${error.message}`,
      });
    }
  }

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center pt-24 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800">Contact Us</h2>
        <p className="text-center text-gray-600 mb-4">We'd love to hear from you!</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your message"
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2 px-4 rounded-md shadow text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
