import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { toast } from "react-toastify";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Handle Input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Toast Message
    toast.success("Message sent successfully!");

    // Reset Form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="w-full bg-gray-200 py-20 px-6 sm:px-12">
      
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left Side - Contact Info */}
        <div className="bg-white shadow-lg p-8 rounded-3xl">
          <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>

          {/* Phone */}
          <div className="flex items-center gap-4 mb-6">
            <FaPhoneAlt className="text-green-500 text-2xl" />
            <p className="text-lg font-medium">+880 1234 567890</p>
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/8801234567890"
            target="_blank"
            className="flex items-center gap-4 bg-green-500 text-white px-5 py-3 rounded-lg w-fit hover:bg-green-600 transition mb-6"
          >
            <FaWhatsapp className="text-2xl" />
            <span className="text-lg font-medium">Chat on WhatsApp</span>
          </a>

          {/* Email */}
          <div className="flex items-center gap-4 mb-6">
            <FaEnvelope className="text-green-500 text-2xl" />
            <p className="text-lg font-medium">example@gmail.com</p>
          </div>

          {/* Address */}
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-green-500 text-2xl" />
            <p className="text-lg font-medium">Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white shadow-lg p-8 rounded-3xl">
          <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-green-500"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-green-500"
              required
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-green-500"
              required
            ></textarea>

            <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition w-full">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
